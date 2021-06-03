import React from 'react'
import WebTorrent from 'webtorrent';
import { ExampleComponent, WebTorrentImg, WebTorrentVid } from 'atorable-react'
import 'atorable-react/dist/index.css'
let client = new WebTorrent ();
let imgPath = {default:
'magnet:?xt=urn:btih:dc94d0d5b4a4ca82bbe4d335ddb65ef7ea3de374&dn=DSC4470.jpg&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=wss%3A%2F%2Ftracker.openwebtorrent.com&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=udp%3A%2F%2Fexplodie.org%3A6969&tr=udp%3A%2F%2Ftracker.empire-js.us%3A1337&ws=http%3A%2F%2Flocalhost%3A8080%2Fassets%2Fimg%2FDSC4470.jpg&xs=http%3A%2F%2Flocalhost%3A8080%2Fassets%2Fimg%2FDSC4470.torrent'
};

let moviePath = {default:
'magnet:?xt=urn:btih:e4053418ffa627d2a3935740ed02881408397644&dn=GOPR0093.m4v&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=udp%3A%2F%2Fexplodie.org%3A6969&tr=udp%3A%2F%2Ftracker.empire-js.us%3A1337&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=wss%3A%2F%2Ftracker.openwebtorrent.com&ws=http%3A%2F%2Flocalhost%3A8080%2Fassets%2Fimg%2FGOPR0093.m4v&xs=http%3A%2F%2Flocalhost%3A8080%2Fassets%2Fimg%2FGOPR0093.torrent'
};



const App = () => {
  return (
    <div>
      <ExampleComponent text='Create React Library Example 😄' />
      <WebTorrentVid
        magnetLink={moviePath}
        client={client}
        imgTags={'border: solid'}
      />

      <WebTorrentImg
        magnetLink={imgPath}
        client={client}
        imgTags={'border: solid'}
      />
    </div>
  )
}

export default App
