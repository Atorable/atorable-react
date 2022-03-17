/* eslint-disable one-var */
/* eslint-disable prefer-const */
import * as React from 'react'
import { Fragment, useEffect, useState, useRef } from 'react'
// eslint-disable-next-line no-unused-vars
import type WebTorrent from 'webtorrent'
import { GetTorrent, loopThroughTorFiles, PromiseTorrent } from './getTorrent'
import { ImageTorrent } from './interfaces'
import ImageTest from './demo/ImageDownloadTime'
import VideoTest from './demo/VideoDownloadTime'

export const ImageDemo = ImageTest
export const VideoDemo = VideoTest

export const getTorrent = GetTorrent
export const promiseTorrent = PromiseTorrent

export const ImgATor = (props: ImageTorrent) => {
    let {
        magnetURI,
        height,
        width,
        style,
        sizes,
        srcset,
        loading,
        showPrgrs
    } = props
    let [fileState, updateFile] = useState<WebTorrent.TorrentFile>(),
        [urlState, updateUrl] = useState<string>(),
        [downloadTime, updateTime] = useState<number>(0),
        [peers, setPeers] = useState(0),
        manageFile = (torrent: WebTorrent.Torrent) => {
            // TODO: this better with more file types and upper and lower cases
            let file = torrent.files[0],
                timeStart = Date.now()

            updateFile(file)
            file.getBlobURL((err, url) => {
                if (err) throw err
                updateTime(Date.now() - timeStart)
                setPeers(torrent.numPeers)
                updateUrl(url)
            })
        }

    useEffect(() => {
        PromiseTorrent(magnetURI).then(manageFile)
        return () => {}
    }, [])
    return (
        <Fragment>
            {urlState ? null : loading}
            <img
                src={urlState}
                alt={fileState?.name}
                width={width}
                height={height}
                sizes={sizes}
                srcSet={srcset}
                style={style}
            />
            {!showPrgrs ? null : (
                <p>
                    Time ms: {downloadTime} Peers: {peers}
                </p>
            )}
        </Fragment>
    )
}

export const VidATor = (props: any) => {
    let { showPrgrs, magnetURI, loading, width, height } = props
    const videoElement = useRef(null)
    let [urlState, updateUrl] = useState<string>(),
        [downloadTime, updateTime] = useState<number>(0),
        [peers, setPeers] = useState(0),
        mngTor = (torrent: WebTorrent.Torrent) => {
            let timeStart = Date.now()
            torrent.on('done', () => {
                updateTime(Date.now() - timeStart)
                setPeers(torrent.numPeers)
            })

            let file = torrent.files[0]
            file.getBlobURL((err, url) => {
                if (err) throw err
                updateUrl(url)
            })
        }

    useEffect(() => {
        PromiseTorrent(magnetURI).then(mngTor)
        return () => {}
    }, [])
    return (
        <Fragment>
            {urlState ? null : loading}
            <video
                width={width}
                height={height}
                controls
                autoPlay
                muted
                ref={videoElement}
                src={urlState}
            >
                <source type={'video/' + props.type} />
                Your browser does not support the video tag.
            </video>
            {!showPrgrs ? null : (
                <p>
                    Time ms: {downloadTime} Peers: {peers}
                </p>
            )}
        </Fragment>
    )
}

export const VidStrmATor = (props: any) => {
    let { magnetURI, height, width, autoplay, showPrgrs } = props
    const videoElement = useRef(null),
        [downloadTime, updateTime] = useState<number>(0),
        [peers, setPeers] = useState(0)

    const opts = {
        autoplay: autoplay,
        muted: true
    }

    let mngTor = (torrent: WebTorrent.Torrent) => {
        let timeStart = Date.now()
        torrent.on('done', () => {
            updateTime(Date.now() - timeStart)
            setPeers(torrent.numPeers)
        })

        let file = torrent.files[0]
        if (file.name.includes('.mp4')) {
            // @ts-ignore: Object is possibly 'null'.
            file.renderTo(videoElement.current, opts, function (err, elem) {
                if (err) throw err // file failed to download or display in the DOM
                console.log('New DOM node with the content', elem)
            })
        }
    }

    useEffect(() => {
        PromiseTorrent(magnetURI).then(mngTor)
        return () => {}
    }, [])
    return (
        <Fragment>
            <video
                width={width}
                height={height}
                controls
                muted
                ref={videoElement}
            >
                <source type='video/mp4' />
                Your browser does not support the video tag.
            </video>
            {!showPrgrs ? null : (
                <p>
                    Time ms: {downloadTime} Peers: {peers}
                </p>
            )}
        </Fragment>
    )
}

export const WrapATor = (props: any) => {
    const { children } = props
    let [childElements, updateChildElements] = useState<any>(),
        mngTor = (torrent: WebTorrent.Torrent) => {
            const chldElements = React.Children.map(children, (child) =>
                React.cloneElement(child, {
                    torrent: torrent
                })
            )
            updateChildElements(chldElements)
        }

    useEffect(() => {
        PromiseTorrent(props.magnetURI).then(mngTor)
        return () => {}
    }, [])

    return <Fragment>{childElements}</Fragment>
}

export const WrappedImgATor = (props: {
    torrent: WebTorrent.Torrent
    width?: number
    height?: number
    sizes?: string
    style?: any
    srcset?: string
    loading?: any
}) => {
    let { torrent, width, height, sizes, style, srcset, loading } = props,
        [fileState, updateFile] = useState<WebTorrent.TorrentFile>(),
        [urlState, updateUrl] = useState<string>(),
        manageFile = (file: WebTorrent.TorrentFile) => {
            // TODO: this better with more file types and upper and lower cases
            updateFile(file)
            file.getBlobURL((err, url) => {
                if (err) throw err
                updateUrl(url)
            })
        }

    useEffect(() => {
        loopThroughTorFiles(torrent, manageFile)
        return () => {}
    }, [])
    return (
        <Fragment>
            {urlState ? null : loading}
            <img
                src={urlState}
                alt={fileState?.name}
                width={width}
                height={height}
                sizes={sizes}
                srcSet={srcset}
                style={style}
            />
        </Fragment>
    )
}

// https://stackoverflow.com/questions/51657890/is-it-ok-to-use-a-wrapper-component-to-pass-props-in-react
