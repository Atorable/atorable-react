/* eslint-disable one-var */
/* eslint-disable prefer-const */
// eslint-disable-next-line no-unused-vars
import WebTorrent, { Torrent } from 'webtorrent'
const client = new WebTorrent()

// TODO: allow build to send file folders to nginx running with volumes mounted that get updated when sent to server
// Make a service that gives you a .com address and then serves your webpack static code from a nginx server
// just needs a simple template structure index.html, dist and such

client.on('error', function (t) {
  console.log('err', t)
})

export const GetTorrent = (
  magnetURI: string | { default: string },
  manageTor: (file: WebTorrent.Torrent) => void
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
      client.on('torrent', function (t: WebTorrent.Torrent) {
        if (torrent?.infoHash === t?.infoHash) {
          manageTor(t)
        }
      })
    }
  } else {
    client.add(magnetURI, function (torrent: WebTorrent.Torrent) {
      manageTor(torrent)
    })
  }
}

export const loopThroughTorFiles = (
  torrent: Torrent,
  manageFile: (file: WebTorrent.TorrentFile) => void
) => {
  torrent.files.forEach((file: WebTorrent.TorrentFile) => {
    manageFile(file)
  })
}

export const PromiseTorrent = (magnetURI: string | { default: string }) => {
  return new Promise((resolve: (file: WebTorrent.Torrent) => void) => {
    if (typeof magnetURI !== 'string') {
      magnetURI = magnetURI.default
    }
    let torrentCheck = client.get(magnetURI)
    if (torrentCheck) {
      let torrent = torrentCheck
      if (torrent.name) {
        resolve(torrent)
      } else {
        client.on('torrent', function (t: WebTorrent.Torrent) {
          if (torrent?.infoHash === t?.infoHash) {
            resolve(t)
          }
        })
      }
    } else {
      client.add(magnetURI, function (torrent: WebTorrent.Torrent) {
        resolve(torrent)
      })
    }
  })
}