import WebTorrent, { Torrent } from 'webtorrent';
export declare const GetTorrent: (magnetURI: string | {
    default: string;
}, manageFile: (file: WebTorrent.TorrentFile) => void) => void;
export declare const manageTorrent: (torrent: Torrent, manageFile: (file: WebTorrent.TorrentFile) => void) => void;
