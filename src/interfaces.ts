import type WebTorrent from 'webtorrent'

export interface Image {
    width?: number
    height?: number
    sizes?: string
    srcset?: string
    style?: any
}

export interface Video {
    width: number
    height: number
    type: string // video/mp4 or video/webm or video/ogg
}

export interface VideoTorProps extends Video {
    magnetURI: string

    loading?: any
    showPrgrs?: boolean
}

export interface ImageTorrent extends Image {
    magnetURI: string

    loading?: any
    showPrgrs?: boolean
}
