import React, { Fragment } from 'react'
import { useEffect, useState } from 'react'
import { DownloaderProps } from './interfaces'

const DownloadButton = (props: {
    url: string | undefined
    filename: string
}) => {
    const { url, filename } = props
    return (
        <a href={url} download>
            Click to download {filename}
        </a>
    )
}

export const Downloader = (props: DownloaderProps) => {
    let {
        ShowPrgrs,
        DownloadLink,
        torrent,
        dwnldSpeed,
        downloaded,
        progress,
        peers,
        done
    } = props

    let [urlFilesArr, setUrlFilesArr] = useState<
        { url: string; filename: string }[]
    >([])

    useEffect(() => {
        if (torrent) {
            torrent.files.map((file) => {
                if (file) {
                    file.getBlobURL((err, url) => {
                        if (err) throw err
                        if (url) {
                            setUrlFilesArr([
                                ...urlFilesArr,
                                { url, filename: file.name }
                            ])
                        }
                    })
                }
            })
        }
        return () => {}
    }, [done])
    return (
        <div>
            {urlFilesArr.map((file) => {
                return (
                    (DownloadLink && (
                        <DownloadLink url={file.url} filename={file.filename} />
                    )) || (
                        <DownloadButton
                            url={file.url}
                            filename={file.filename}
                        />
                    )
                )
            })}

            {ShowPrgrs && (
                <ShowPrgrs
                    dwnldSpeed={dwnldSpeed || 0}
                    downloaded={downloaded || 0}
                    progress={progress || 0}
                    peers={peers || 0}
                />
            )}
        </div>
    )
}
