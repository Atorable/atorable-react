/* eslint-disable one-var */
/* eslint-disable prefer-const */
import * as React from 'react'
import { Fragment, useEffect, useState, useRef } from 'react'
// eslint-disable-next-line no-unused-vars
import WebTorrent from 'webtorrent'
import { GetTorrent, loopThroughTorFiles, PromiseTorrent } from './getTorrent'

export const getTorrent = GetTorrent
export const promiseTorrent = PromiseTorrent

export const ImgATor = (props: any) => {
  let [fileState, updateFile] = useState<WebTorrent.TorrentFile>(),
    [urlState, updateUrl] = useState<string>(),
    manageFile = (file: WebTorrent.TorrentFile) => {
      // TODO: this better with more file types and upper and lower cases
      updateFile(file)
      file.getBlobURL((err, url) => {
        if (err) throw err
        updateUrl(url)
      })
    },
    mngTor = (torrent: WebTorrent.Torrent) => {
      loopThroughTorFiles(torrent, manageFile)
    }

  useEffect(() => {
    PromiseTorrent(props.magnetLink).then(mngTor)
    return () => {}
  }, [])
  return (
    <Fragment>
      <img
        src={urlState}
        alt={fileState?.name}
        width={props.width}
        height={props.height}
        sizes={props.sizes}
        style={props.style}
      />
    </Fragment>
  )
}

export const VidATor = (props: any) => {
  const videoElement = useRef(null)
  let [fileState, updateFile] = useState<WebTorrent.TorrentFile>(),
    [urlState, updateUrl] = useState<string>(),
    manageFile = (file: WebTorrent.TorrentFile) => {
      // TODO: this better with more file types and upper and lower cases
      if (file.name.includes('.mp4')) {
        updateFile(file)
        file.getBlobURL((err, url) => {
          if (err) throw err
          updateUrl(url)
        })
      }
    },
    mngTor = (torrent: WebTorrent.Torrent) => {
      loopThroughTorFiles(torrent, manageFile)
    }

  useEffect(() => {
    PromiseTorrent(props.magnetLink).then(mngTor)
    return () => {}
  }, [])
  return (
    <Fragment>
      {urlState ? null : <h2 style={{ color: 'orange' }}>Loading</h2>}
      <video
        // poster='loading.gif' // TODO: make this loading gif work
        width={props.width}
        height={props.height}
        controls
        autoPlay
        muted
        ref={videoElement}
        src={urlState}
      >
        <source type={props.type} />
        Your browser does not support the video tag.{fileState?.name}
      </video>
    </Fragment>
  )
}

export const VidStrmATor = (props: any) => {
  const videoElement = useRef(null)
  const opts = {
    autoplay: props.autoplay,
    muted: true
  }
  let manageFile = (file: WebTorrent.TorrentFile) => {
      // TODO: this better with more file types and upper and lower cases
      if (file.name.includes('.mp4')) {
        // @ts-ignore: Object is possibly 'null'.
        file.renderTo(videoElement.current, opts, function (err, elem) {
          if (err) throw err // file failed to download or display in the DOM
          console.log('New DOM node with the content', elem)
        })
      }
    },
    mngTor = (torrent: WebTorrent.Torrent) => {
      loopThroughTorFiles(torrent, manageFile)
    }

  useEffect(() => {
    PromiseTorrent(props.magnetLink).then(mngTor)
    return () => {}
  }, [])
  return (
    <Fragment>
      <video
        width={props.width}
        height={props.height}
        controls
        muted
        ref={videoElement}
      >
        <source type='video/mp4' />
        Your browser does not support the video tag.
      </video>
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
    PromiseTorrent(props.magnetLink).then(mngTor)
    return () => {}
  }, [])

  return <Fragment>{childElements}</Fragment>
}

export const WrappedImgATor = (props: any) => {
  let [fileState, updateFile] = useState<WebTorrent.TorrentFile>(),
    [urlState, updateUrl] = useState<string>(),
    manageFile = (file: WebTorrent.TorrentFile) => {
      // TODO: this better with more file types and upper and lower cases
      updateFile(file)
      file.getBlobURL((err, url) => {
        if (err) throw err
        updateUrl(url)
      })
    },
    mngTor = (torrent: WebTorrent.Torrent) => {
      loopThroughTorFiles(torrent, manageFile)
    }

  useEffect(() => {
    mngTor(props.torrent)
    return () => {}
  }, [])
  return (
    <Fragment>
      <img
        src={urlState}
        alt={fileState?.name}
        width={props.width}
        height={props.height}
        sizes={props.sizes}
        style={props.style}
      />
    </Fragment>
  )
}

// https://stackoverflow.com/questions/51657890/is-it-ok-to-use-a-wrapper-component-to-pass-props-in-react
