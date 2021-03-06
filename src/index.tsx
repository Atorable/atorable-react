/* eslint-disable one-var */
/* eslint-disable prefer-const */
import * as React from 'react'
import { Fragment, useEffect, useState, useRef } from 'react'
// eslint-disable-next-line no-unused-vars
import type WebTorrent from 'webtorrent'
import { GetTorrent, PromiseTorrent } from './getTorrent'
import {
    DownloaderOuterProps,
    ImageTorrent,
    TorrentUpdates as tUp,
    VideoTorProps,
    VideoTorPropsWrap
} from './interfaces'
import ImageTest from './demo/ImageDownloadTime'
import VideoTest from './demo/VideoDownloadTime'
import { Downloader } from './downloader'

export type TorrentUpdates = tUp
export const ImageDemo = ImageTest
export const VideoDemo = VideoTest

export const getTorrent = GetTorrent
export const promiseTorrent = PromiseTorrent
import { ATorStreamVideo_2 } from './stream'
export const ATorStreamVideo = ATorStreamVideo_2

export const ImgATor = (props: ImageTorrent) => {
    let { magnetURI, height, width, style, sizes, srcset, loading, showPrgrs } =
        props
    let [fileState, updateFile] = useState<WebTorrent.TorrentFile>(),
        [urlState, updateUrl] = useState<string>(),
        [downloadTime, updateTime] = useState<number>(0),
        [peers, setPeers] = useState(0),
        manageFile = (torrent: WebTorrent.Torrent) => {
            // TODO: this better with more file types and upper and lower cases
            let file = torrent.files[0],
                timeStart = Date.now()

            if (file) {
                updateFile(file)
                file.getBlobURL((err, url) => {
                    if (err) throw err
                    updateTime(Date.now() - timeStart)
                    setPeers(torrent.numPeers)
                    updateUrl(url)
                })
            }
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

export const VidATorWrapped = (props: VideoTorPropsWrap) => {
    let {
            ShowPrgrs,
            loading,
            width,
            height,
            type,
            torrent,
            dwnldSpeed,
            downloaded,
            progress,
            peers
        } = props,
        [urlState, updateUrl] = useState<string>()
    const videoElement = useRef(null)

    useEffect(() => {
        if (torrent) {
            let file = torrent.files[0]
            if (file) {
                file.getBlobURL((err, url) => {
                    if (err) throw err
                    updateUrl(url)
                })
            }
        }
        return () => {}
    }, [torrent])

    return (
        <div>
            {urlState ? null : loading}
            <video
                width={width}
                height={height}
                controls
                // autoPlay
                muted
                ref={videoElement}
                src={urlState}
            >
                <source type={type} />
                Your browser does not support the video tag.
            </video>
            {ShowPrgrs && (
                <ShowPrgrs
                    dwnldSpeed={dwnldSpeed || 0}
                    downloaded={downloaded || 0}
                    progress={progress || 0}
                    peers={peers || 0}
                    other={{ urlState }}
                />
            )}
        </div>
    )
}

export const VidStrmATor = (props: VideoTorProps) => {
    let { magnetURI, height, width, ShowPrgrs, type, autoplay } = props,
        [dwnldSpeed, updateDwnldSpeed] = useState<number>(0),
        [progress, updateProgress] = useState<number>(0),
        [peers, setPeers] = useState(0)
    const videoElement = useRef(null)
    const opts = {
        autoplay: autoplay,
        muted: true
    }

    let mngTor = (torrent: WebTorrent.Torrent) => {
        torrent.on('download', () => {
            let mbps = torrent.downloadSpeed * 1e-6
            updateDwnldSpeed(mbps)
            updateProgress(torrent.progress)
            setPeers(torrent.numPeers)
        })

        torrent.files.forEach((file) => {
            if (file.name.includes('.mp4')) {
                // @ts-ignore: Object is possibly 'null'. // TODO: fix this
                file.renderTo(videoElement.current, opts, function (err, elem) {
                    if (err) throw err // file failed to download or display in the DOM
                    console.log('New DOM node with the content', elem)
                })
            }
        })
    }

    useEffect(() => {
        PromiseTorrent(magnetURI).then(mngTor)
        return () => {}
    }, [])
    return (
        <div>
            <video
                width={width}
                height={height}
                controls
                muted
                // autoPlay
                ref={videoElement}
            >
                <source type={type || 'video/mp4'} />
                Your browser does not support the video tag.
            </video>
            {ShowPrgrs && (
                <ShowPrgrs
                    dwnldSpeed={dwnldSpeed}
                    progress={progress}
                    peers={peers}
                    other={{}}
                />
            )}
        </div>
    )
}

// TODO: torrent.on('wire', function (wire) {}) // for when peers connect
export const ATorWrap = (props: { children: any; magnetURI: string }) => {
    const { children, magnetURI } = props
    let [childElements, updateChildElements] = useState<any>(),
        mngTor = (torrent: WebTorrent.Torrent) => {
            const chldElements = React.Children.map(children, (child) => {
                let { downloadSpeed, progress, numPeers, done, downloaded } =
                        torrent,
                    mbps = downloadSpeed * 1e-6
                downloaded = downloaded * 1e-6
                return React.cloneElement(child, {
                    torrent: torrent,
                    dwnldSpeed: mbps,
                    downloaded,
                    progress,
                    peers: numPeers,
                    done: done
                })
            })
            updateChildElements(chldElements)

            torrent.on('download', () => {
                let { downloadSpeed, progress, numPeers, done, downloaded } =
                        torrent,
                    mbps = downloadSpeed * 1e-6
                downloaded = downloaded * 1e-6

                const chldElements = React.Children.map(children, (child) =>
                    React.cloneElement(child, {
                        torrent: torrent,
                        dwnldSpeed: mbps,
                        downloaded,
                        progress,
                        peers: numPeers,
                        done: done
                    })
                )
                updateChildElements(chldElements)
            })

            torrent.on('done', () => {
                const chldElements = React.Children.map(children, (child) => {
                    let {
                            downloadSpeed,
                            progress,
                            numPeers,
                            done,
                            downloaded
                        } = torrent,
                        mbps = downloadSpeed * 1e-6
                    downloaded = downloaded * 1e-6

                    return React.cloneElement(child, {
                        torrent,
                        dwnldSpeed: mbps,
                        downloaded,
                        progress,
                        peers: numPeers,
                        done: done
                    })
                })
                updateChildElements(chldElements)
            })

            torrent.on('wire', function () {
                const chldElements = React.Children.map(children, (child) => {
                    let {
                            downloadSpeed,
                            progress,
                            numPeers,
                            done,
                            downloaded
                        } = torrent,
                        mbps = downloadSpeed * 1e-6
                    downloaded = downloaded * 1e-6

                    return React.cloneElement(child, {
                        torrent,
                        dwnldSpeed: mbps,
                        downloaded,
                        progress,
                        peers: numPeers,
                        done: done
                    })
                })
                updateChildElements(chldElements)
            })
        }

    useEffect(() => {
        if (magnetURI) PromiseTorrent(magnetURI).then(mngTor)
        return () => {}
    }, [magnetURI])

    return <Fragment>{childElements}</Fragment>
}

export const VidATor = (props: VideoTorProps) => {
    let { ShowPrgrs, magnetURI, loading, width, height, type } = props

    return (
        <ATorWrap magnetURI={magnetURI}>
            <VidATorWrapped
                loading={loading}
                width={width}
                height={height}
                type={type}
                ShowPrgrs={ShowPrgrs}
            />
        </ATorWrap>
    )
}

export const ATorDownloader = (props: DownloaderOuterProps) => {
    let { magnetURI, startDownload, ShowPrgrs } = props,
        magLink = startDownload ? magnetURI : ''

    return (
        <ATorWrap magnetURI={magLink}>
            <Downloader ShowPrgrs={ShowPrgrs} />
        </ATorWrap>
    )
}

export const ATorVid = VidATor
export const ATorVidStrm = VidStrmATor
export const ATorImg = ImgATor

// https://stackoverflow.com/questions/51657890/is-it-ok-to-use-a-wrapper-component-to-pass-props-in-react
