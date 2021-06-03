/* eslint-disable one-var */
/* eslint-disable prefer-const */
// eslint-disable-next-line no-unused-vars
import WebTorrent, { Torrent } from 'webtorrent'

// TODO: allow build to send file folders to nginx running with volumes mounted that get updated when sent to server
// Make a service that gives you a .com address and then serves your webpack static code from a nginx server
// just needs a simple template structure index.html, dist and such

export const getTorrent = (
  magnetURI: string,
  client: any,
  manageFile: (file: WebTorrent.TorrentFile) => void
) => {
  let torrent = client.get(magnetURI)
  if (torrent) {
    if (torrent.name) {
      manageTorrent(torrent, manageFile)
    } else {
      client.on('torrent', function (t: Torrent) {
        if (torrent.infoHash === t.infoHash) {
          manageTorrent(t, manageFile)
        }
      })
    }
  } else {
    client.add(magnetURI, function (torrent: WebTorrent.Torrent) {
      manageTorrent(torrent, manageFile)
    })
  }
}

export const manageTorrent = (
  torrent: Torrent,
  manageFile: (file: WebTorrent.TorrentFile) => void
) => {
  torrent.files.forEach((file: WebTorrent.TorrentFile) => {
    manageFile(file)
  })
}
