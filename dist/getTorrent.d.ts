import WebTorrent, { Torrent } from 'webtorrent';
export declare const GetTorrent: (magnetURI: string | {
    default: string;
}, manageTor: (file: WebTorrent.Torrent) => void) => void;
export declare const loopThroughTorFiles: (torrent: Torrent, manageFile: (file: WebTorrent.TorrentFile) => void) => void;
export declare const PromiseTorrent: (magnetURI: string | {
    default: string;
}) => Promise<WebTorrent.Torrent>;
