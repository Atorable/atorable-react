/* eslint-disable one-var */
/* eslint-disable prefer-const */
import * as React from 'react'
import styles from './styles.module.css'
import { Fragment, useEffect, useState, useRef } from 'react'
// eslint-disable-next-line no-unused-vars
import WebTorrent from 'webtorrent'
import { getTorrent } from './getTorrent'
import VideoStream from 'videostream'

interface Props {
  text: string
}

export const ExampleComponent = ({ text }: Props) => {
  return <div className={styles.test}>Example Component: {text}</div>
}

export const WebTorrentImg = (props: any) => {
  let [fileState, updateFile] = useState<WebTorrent.TorrentFile>(),
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
    getTorrent(props.magnetLink.default, props.client, manageFile)
    return () => {}
  }, [])
  // TODO: get all tag info through to element below with props.imgTags parse it? or something
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

export const WebTorrentVid = (props: any) => {
  const videoElement = useRef(null)
  let [fileState, updateFile] = useState<WebTorrent.TorrentFile>(),
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
    getTorrent(props.magnetLink.default, props.client, manageFile)
    return () => {}
  }, [])
  // TODO: get all tag info through to element below with props.imgTags parse it? or something
  return (
    <Fragment>
      {urlState ? (
        <video
          width={props.width}
          height={props.height}
          controls
          ref={videoElement}
        >
          <source src={urlState} type='video/mp4' />
          Your browser does not support the video tag. {fileState?.name}
        </video>
      ) : null}
    </Fragment>
  )
}

// const exampleFile = {
//   createReadStream(opts: any) {
//     const { start, end } = opts
//     // Return a readable stream that provides the bytes
//     // between offsets "start" and "end" inclusive
//   }
// }

// const video = document.createElement('video')

// video.addEventListener('error', () => {
//   // listen for errors on the video/audio element directly
//   const errorCode = elem.error
//   const detailedError = videostream.detailedError
//   // videostream.detailedError will often have a more detailed error message
// })

export const WebTorrentVidStrm = (props: any) => {
  const videoElement = useRef(null)
  let [fileState, updateFile] = useState<WebTorrent.TorrentFile>()
  // [urlState, updateUrl] = useState<string>(),

  useEffect(() => {
    let manageFile = (file: WebTorrent.TorrentFile) => {
      // TODO: this better with more file types and upper and lower cases
      updateFile(file)
      const videostream = new VideoStream(file, videoElement.current)
      // @ts-ignore: Object is possibly 'null'.
      videoElement.current.addEventListener('error', () => {
        // listen for errors on the video/audio element directly
        // const errorCode = elem.error
        const detailedError = videostream.detailedError
        console.log(detailedError)
        // videostream.detailedError will often have a more detailed error message
      })

      // file.getBlobURL((err, url) => {
      //   if (err) throw err
      //   updateUrl(url)
      // })
    }
    getTorrent(props.magnetLink.default, props.client, manageFile)
    return () => {}
  }, [])
  // TODO: get all tag info through to element below with props.imgTags parse it? or something
  return (
    <Fragment>
      <video
        width={props.width}
        height={props.height}
        controls
        ref={videoElement}
      >
        <source type='video/mp4' />
        Your browser does not support the video tag. {fileState?.name}
      </video>
    </Fragment>
  )
}

export const WebTorrentVidStrm2 = (props: any) => {
  const videoElement = useRef(null)
  // let [fileState, updateFile] = useState<WebTorrent.TorrentFile>()
  // [urlState, updateUrl] = useState<string>(),

  useEffect(() => {
    const opts = {
      autoplay: true,
      muted: true
    }
    let manageFile = (file: WebTorrent.TorrentFile) => {
      // TODO: this better with more file types and upper and lower cases
      // updateFile(file)
      // @ts-ignore: Object is possibly 'null'.
      file.appendTo(videoElement.current, opts, function (err, elem) {
        if (err) throw err // file failed to download or display in the DOM
        console.log('New DOM node with the content', elem)
      })

      // file.getBlobURL((err, url) => {
      //   if (err) throw err
      //   updateUrl(url)
      // })
    }
    getTorrent(props.magnetLink.default, props.client, manageFile)
    return () => {}
  }, [])
  // TODO: get all tag info through to element below with props.imgTags parse it? or something
  return (
    <Fragment>
      <div ref={videoElement}>here</div>
    </Fragment>
  )
}

