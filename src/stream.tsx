import React, { useRef, useEffect } from 'react'
import { ATorWrap } from '.'
import { VideoTorPropsWrap, VideoTorProps } from './interfaces'

export const ATorStreamVideo_2 = (props: VideoTorProps) => {
    let {
            ShowPrgrs,
            magnetURI,
            loading,
            width,
            height,
            type,
            autoplay,
            aspectRatio
        } = props,
        paddingTop = 100 * (aspectRatio || 1) + '%'

    const style = {
        width: '100%',
        paddingTop,
        height: '0px',
        position: 'relative' as 'relative' // https://github.com/microsoft/TypeScript/issues/11465
    }

    return (
        <div style={style}>
            <ATorWrap magnetURI={magnetURI}>
                <VidATorWrappedStr
                    loading={loading}
                    width={width}
                    height={height}
                    autoplay={autoplay}
                    type={type}
                    ShowPrgrs={ShowPrgrs}
                />
                {ShowPrgrs && <ShowPrgrs />}
            </ATorWrap>
        </div>
    )
}

export const VidATorWrappedStr = (props: VideoTorPropsWrap) => {
    let { width, height, type, torrent, autoplay } = props //
    const videoElement = useRef(null)
    const opts = {
        autoplay: autoplay,
        muted: true
    }
    const style = {
        width: width || '100%',
        height: height || '100%',
        position: 'absolute' as 'absolute',
        top: '0',
        left: '0'
    }

    useEffect(() => {
        if (torrent) {
            torrent.files.forEach((file) => {
                if (file.name.includes('.mp4')) {
                    // @ts-ignore: Object is possibly 'null'. // TODO: fix this
                    file.renderTo(
                        // @ts-ignore: Object is possibly 'null'. // TODO: fix this
                        videoElement.current,
                        opts,
                        function (err, elem) {
                            if (err) throw err // file failed to download or display in the DOM
                            console.log('New DOM node with the content', elem)
                        }
                    )
                }
            })
        }

        return () => {}
    }, [torrent])
    return (
        <video style={style} playsInline ref={videoElement}>
            <source type={type || 'video/mp4'} />
            Your browser does not support the video tag.
        </video>
    )
}
