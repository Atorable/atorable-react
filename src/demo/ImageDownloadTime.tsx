import React, { Fragment } from 'react'

const ImageTest = (props: { src: string; title: string }) => {
    let { src, title } = props
    const [dwnldTime, setDwnldTime] = React.useState(0)
    const startTime = Date.now()

    return (
        <Fragment>
            <img
                title={title}
                src={src}
                onLoad={() => {
                    setDwnldTime(Date.now() - startTime)
                }}
            />
            <p>{dwnldTime}</p>
        </Fragment>
    )
}

export default ImageTest
