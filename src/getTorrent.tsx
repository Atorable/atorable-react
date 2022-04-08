/* eslint-disable one-var */
/* eslint-disable prefer-const */
// eslint-disable-next-line no-unused-vars
import type webT from 'webtorrent'
// https://github.com/webtorrent/webtorrent/issues/2206
// https://github.com/facebook/create-react-app/issues/11756
// @ts-ignore TODO: fix this polyfill issue
import WebTorrent from 'webtorrent/webtorrent.min'
// import WebTorrent, { Torrent } from 'webtorrent'
const client = new WebTorrent()

// TODO: allow build to send file folders to nginx running with volumes mounted that get updated when sent to server
// Make a service that gives you a .com address and then serves your webpack static code from a nginx server
// just needs a simple template structure index.html, dist and such

client.on('error', function (t: string | Error) {
    console.log('err', t)
})

export const GetTorrent = (
    magnetURI: string | { default: string },
    manageTor: (file: webT.Torrent) => void
) => {
    if (typeof magnetURI !== 'string') {
        magnetURI = magnetURI.default
    }
    let torrentCheck = client.get(magnetURI)
    if (torrentCheck) {
        let torrent = torrentCheck
        if (torrent.name) {
            manageTor(torrent)
        } else {
            client.on('torrent', function (t: webT.Torrent) {
                if (torrent?.infoHash === t?.infoHash) {
                    manageTor(t)
                }
            })
        }
    } else {
        client.add(magnetURI, function (torrent: webT.Torrent) {
            manageTor(torrent)
        })
    }
}

export const loopThroughTorFiles = (
    torrent: webT.Torrent,
    manageFile: (file: webT.TorrentFile) => void
) => {
    torrent.files.forEach((file: webT.TorrentFile) => {
        manageFile(file)
    })
}

export const PromiseTorrent = (magnetURI: string | { default: string }) => {
    return new Promise((resolve: (file: webT.Torrent) => void) => {
        if (typeof magnetURI !== 'string') {
            magnetURI = magnetURI.default
        }
        let torrentCheck = client.get(magnetURI)
        if (torrentCheck) {
            if (torrentCheck.name) {
                resolve(torrentCheck)
            } else {
                client.on('torrent', function (t: webT.Torrent) {
                    if (torrentCheck?.infoHash === t?.infoHash) {
                        resolve(t)
                    }
                })
            }
        } else {
            client.add(magnetURI, function (t: webT.Torrent) {
                resolve(t)
            })
        }
    })
}
