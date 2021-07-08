/* eslint-disable one-var */
/* eslint-disable prefer-const */
import * as React from 'react'
import { Fragment, useEffect, useState, useRef } from 'react'
// eslint-disable-next-line no-unused-vars
import WebTorrent from 'webtorrent'
import { GetTorrent } from './getTorrent'

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
    }

  useEffect(() => {
    GetTorrent(props.magnetLink, manageFile)
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
      updateFile(file)
      file.getBlobURL((err, url) => {
        if (err) throw err
        updateUrl(url)
      })
    }

  useEffect(() => {
    GetTorrent(props.magnetLink, manageFile)
    return () => {}
  }, [])
  return (
    <Fragment>
      {urlState ? (
        <p style={{ color: 'green' }}>Ready</p>
      ) : (
        <p style={{ color: 'orange' }}>Loading</p>
      )}
      <video
        width={props.width}
        height={props.height}
        controls
        autoPlay
        muted
        ref={videoElement}
        src={urlState}
      >
        <source type='video/mp4' />
        Your browser does not support the video tag.{fileState?.name}
      </video>
    </Fragment>
  )
}

export const VidStrmATor = (props: any) => {
  const videoElement = useRef(null)
  useEffect(() => {
    const opts = {
      autoplay: props.autoplay,
      muted: true
    }
    let manageFile = (file: WebTorrent.TorrentFile) => {
      // TODO: this better with more file types and upper and lower cases
      // @ts-ignore: Object is possibly 'null'.
      file.renderTo(videoElement.current, opts, function (err, elem) {
        if (err) throw err // file failed to download or display in the DOM
        console.log('New DOM node with the content', elem)
      })
    }
    GetTorrent(props.magnetLink, manageFile)
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

// import styles from './styles.module.css'
// interface Props {
//   text: string
// }
// export GetTorrent

// export const ExampleComponent = ({ text }: Props) => {
//   return <div className={styles.test}>Example Component: {text}</div>
// }

// export const WithLoading = (Component: typeof React.Component) => {
//   return function WithLoadingComponent(
//     { isLoading }: { isLoading: boolean },
//     ...props: any[]
//   ) {
//     if (!isLoading) return <Component {...props} />
//     return <p>Hold on, fetching data might take some time.</p>
//   }
// }

// // sizing not controlled well
// export const WebTorrentVidStrm2 = (props: any) => {
//   const videoElement = useRef(null)
//   useEffect(() => {
//     const opts = {
//       autoplay: true,
//       muted: true,
//       width: props.width,
//       height: props.height
//     }
//     let manageFile = (file: WebTorrent.TorrentFile) => {
//       // TODO: this better with more file types and upper and lower cases
//       // updateFile(file)
//       // @ts-ignore: Object is possibly 'null'.
//       file.appendTo(videoElement.current, opts, function (err, elem) {
//         if (err) throw err // file failed to download or display in the DOM
//         console.log('New DOM node with the content', elem)
//       })
//     }
//     GetTorrent(props.magnetLink, manageFile)
//     return () => {}
//   }, [])
//   return (
//     <Fragment>
//       <p style={{ color: 'blue' }}>WebTorrentVidStrm2</p>
//       <div ref={videoElement} />
//       <p style={{ color: 'blue' }}>WebTorrentVidStrm2</p>
//     </Fragment>
//   )
// }

// Does not work
// export const WebTorrentVidStrm3 = (props: any) => {
//   const videoElement = useRef(null)
//   let [fileState, updateFile] = useState<WebTorrent.TorrentFile>()
//   useEffect(() => {
//     let manageFile = (file: WebTorrent.TorrentFile) => {
//       // TODO: this better with more file types and upper and lower cases
//       updateFile(file)
//       const videostream = new VideoStream(file, videoElement.current)
//       // @ts-ignore: Object is possibly 'null'.
//       videoElement.current.addEventListener('error', () => {
//         // listen for errors on the video/audio element directly
//         // const errorCode = elem.error
//         const detailedError = videostream.detailedError
//         console.log(detailedError)
//         // videostream.detailedError will often have a more detailed error message
//       })
//     }
//     GetTorrent(props.magnetLink, manageFile)
//     return () => {}
//   }, [])
//   return (
//     <Fragment>
//       <video
//         width={props.width}
//         height={props.height}
//         controls
//         muted
//         autoPlay
//         ref={videoElement}
//       >
//         <source type='video/mp4' />
//         Your browser does not support the video tag. {fileState?.name}
//       </video>
//     </Fragment>
//   )
// }
