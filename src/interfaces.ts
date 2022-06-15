import type WebTorrent from 'webtorrent'

export interface Image {
    width?: string
    height?: string
    sizes?: string
    srcset?: string
    style?: any
}

export interface TorrentUpdates {
    dwnldSpeed: number
    downloaded?: number
    peers: number
    progress: number
    other?: any
}

export interface Video {
    width: string
    height: string
    type: string // video/mp4 or video/webm or video/ogg
    autoplay?: boolean
}

export interface VideoTorProps extends Video {
    magnetURI: string

    loading?: any
    ShowPrgrs?: (props: TorrentUpdates) => JSX.Element
}

export interface ImageTorrent extends Image {
    magnetURI: string

    loading?: any
    showPrgrs?: boolean
}

export interface VideoTorPropsWrap extends Video {
    torrent?: WebTorrent.Torrent
    dwnldSpeed?: number
    downloaded?: number
    peers?: number
    progress?: number
    done?: boolean

    loading?: any
    ShowPrgrs?: (props: TorrentUpdates) => JSX.Element
}

export interface TorPropsWrap {
    torrent?: WebTorrent.Torrent
    dwnldSpeed?: number
    downloaded?: number
    peers?: number
    progress?: number
    done?: boolean
}

export interface DownloaderLinkProps {
    filename: string
    url: string
}

export interface DownloaderProps extends TorPropsWrap {
    DownloadLink?: (props: DownloaderLinkProps) => JSX.Element

    ShowPrgrs?: (props: TorrentUpdates) => JSX.Element
}

export interface DownloaderOuterProps {
    magnetURI: string
    DownloadLink?: (props: DownloaderLinkProps) => JSX.Element

    startImmediately: boolean // start downloading immediately

    ShowPrgrs?: (props: TorrentUpdates) => JSX.Element
}
