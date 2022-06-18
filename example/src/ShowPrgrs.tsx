import React, { useEffect, useRef, useState } from 'react'
import { TorrentUpdates } from '../../dist'

export const ShowPrgrs = (props: TorrentUpdates) => {
    let { peers, progress, downloaded } = props

    return (
        <div style={{ clear: 'both' }}>
            <div
                style={{
                    width: '100%',
                    height: '6px'
                }}
            >
                <div
                    style={{
                        background: 'limegreen',
                        height: '4px',
                        width: `${progress * 100}%`
                    }}
                ></div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div>Downloaded: {downloaded?.toFixed(1)} Mb</div>
                <div>Peers: {peers}</div>
            </div>
        </div>
    )
}

export const ShowPrgrsFunction = (props: TorrentUpdates) => {
    const prevMaxRef = useRef(0)
    let { dwnldSpeed, peers } = props,
        [downloadMaxSpeed, updateDwnldMaxSpeed] = useState<number>(0)

    useEffect(() => {
        if (dwnldSpeed > prevMaxRef.current) {
            prevMaxRef.current = dwnldSpeed
            updateDwnldMaxSpeed(prevMaxRef.current)
        }
        return () => {}
    }, [dwnldSpeed])

    return (
        <div style={{ clear: 'both' }}>
            <p>
                Mb/s: {downloadMaxSpeed.toFixed(1)} Peers: {peers}
            </p>
        </div>
    )
}
