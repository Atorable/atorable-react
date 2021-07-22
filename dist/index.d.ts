import WebTorrent from 'webtorrent';
export declare const getTorrent: (magnetURI: string | {
    default: string;
}, manageTor: (file: WebTorrent.Torrent) => void) => void;
export declare const promiseTorrent: (magnetURI: string | {
    default: string;
}) => Promise<WebTorrent.Torrent>;
export declare const ImgATor: (props: any) => JSX.Element;
export declare const VidATor: (props: any) => JSX.Element;
export declare const VidStrmATor: (props: any) => JSX.Element;
export declare const WrapATor: (props: any) => JSX.Element;
export declare const WrappedImgATor: (props: any) => JSX.Element;
