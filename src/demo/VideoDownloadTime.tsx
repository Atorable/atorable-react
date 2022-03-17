import React, { Fragment, useEffect, useRef } from 'react'

const prefetch_file = (
    url: string,
    fetched_callback: (url: string) => void,
    progress_callback: (percentDone: number) => void,
    error_callback: () => void
) => {
    var xhr = new XMLHttpRequest()
    xhr.open('GET', url, true)
    xhr.responseType = 'blob'

    xhr.addEventListener(
        'load',
        function () {
            if (xhr.status === 200) {
                var URL = window.URL || window.webkitURL
                var blob_url = URL.createObjectURL(xhr.response)
                fetched_callback(blob_url)
            } else {
                error_callback()
            }
        },
        false
    )

    var prev_pc = 0
    xhr.addEventListener('progress', function (event) {
        if (event.lengthComputable) {
            var pc = Math.round((event.loaded / event.total) * 100)
            if (pc != prev_pc) {
                prev_pc = pc
                progress_callback(pc)
            }
        }
    })
    xhr.send()
}

const VideoTest = (props: {
    src: string
    title?: string
    type: string
    height?: number
    width?: number
    loading?: any
}) => {
    const videoElement = useRef(null)
    let { src, type, width, height, loading } = props
    const [dwnldTime, setDwnldTime] = React.useState(0)
    let startTime = 0

    const onSuccess = (url: string) => {
        setDwnldTime(Date.now() - startTime)
        console.log(url)
        var video = videoElement.current
        // @ts-ignore: Object is possibly 'null'. TODO: fix this
        if (!video.src) {
            // @ts-ignore: Object is possibly 'null'. TODO: fix this
            video.id = 'video'
            // @ts-ignore: Object is possibly 'null'. TODO: fix this
            video.src = url
        }
    }
    useEffect(() => {
        startTime = Date.now()
        prefetch_file(
            src,
            onSuccess,
            () => {},
            () => {}
        )
    }, [])

    return (
        <Fragment>
            {dwnldTime ? null : loading}
            <video
                ref={videoElement}
                width={width}
                height={height}
                controls
                muted
                preload='auto'
                autoPlay
            >
                <source
                    // type="video/mp4"
                    type={type}
                    // src={src}
                />
            </video>
            <p>Time ms: {dwnldTime}</p>
        </Fragment>
    )
}

export default VideoTest

// onLoadStart={(e) => {
//   startTime = Date.now()
// }}
// onProgress={(e) => {
//   try {
//     // var pro = (myVideo.buffered.end(0) / e.srcElement.duration) * 100
//     // myVideo.play()
//     // vprogress.value = Math.round(pro)
//     // @ts-ignore
//     let valOne = Math.round(e.target.buffered.end(0)),
//       // @ts-ignore
//       valTwo = Math.round(e.target.seekable.end(0))

//     if (valOne / valTwo === 1) {
//       setDwnldTime(Date.now() - startTime)
//       alert('download complete')
//       // alert(this.showvideo)
//     }
//   } catch (e) {
//     console.log(e)
//   }
// }}
// onLoadedData={() => {
//   // setDwnldTime(Date.now() - startTime)
// }}
