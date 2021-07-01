# atorable-react

> View Atorable

[![NPM](https://img.shields.io/npm/v/atorable-react.svg)](https://www.npmjs.com/package/atorable-react) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save atorable-react
```

## Usage

```tsx
import React, { Component } from 'react'

import { VidStrmATor, ImgATor, VidATor } from 'atorable-react'
let imgPath = {
  default:
    'magnet:?xt=urn:btih:dc94d0d5b4a4ca82bbe4d335ddb65ef7ea3de374&dn=DSC4470.jpg&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=udp%3A%2F%2Fexplodie.org%3A6969&tr=udp%3A%2F%2Ftracker.empire-js.us%3A1337&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=wss%3A%2F%2Ftracker.openwebtorrent.com&ws=http%3A%2F%2Flocalhost%3A8080%2Fassets%2Fimg%2FDSC4470.jpg&xs=http%3A%2F%2Flocalhost%3A8080%2Fassets%2Fimg%2FDSC4470.torrent'
}

let sintel = {
  default:
    'magnet:?xt=urn:btih:92494abcd1c5081cfc7f70ba2a899fb7a2f5a391&dn=trailer_hd.mp4&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=udp%3A%2F%2Fexplodie.org%3A6969&tr=udp%3A%2F%2Ftracker.empire-js.us%3A1337&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=wss%3A%2F%2Ftracker.openwebtorrent.com&ws=http%3A%2F%2Flocalhost%3A8080%2Fassets%2Fimg%2Ftrailer_hd.mp4&xs=http%3A%2F%2Flocalhost%3A8080%2Fassets%2Fimg%2Ftrailer_hd.torrent'
}

let oceanFish = {
  default:
    'magnet:?xt=urn:btih:17a613e4a81e52cf41cab72157a24faecaa8f2f5&dn=GOPR0093.mp4&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=udp%3A%2F%2Fexplodie.org%3A6969&tr=udp%3A%2F%2Ftracker.empire-js.us%3A1337&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=wss%3A%2F%2Ftracker.openwebtorrent.com&ws=http%3A%2F%2Flocalhost%3A8080%2Fassets%2Fimg%2FGOPR0093.mp4&xs=http%3A%2F%2Flocalhost%3A8080%2Fassets%2Fimg%2FGOPR0093.torrent'
}



class Example extends Component {
  render() {
    return (
      <div>
        <VidATor
          width='320'
          height='240'
          magnetLink={oceanFish}
        />

        <VidStrmATor
          width='320'
          height='240'
          autoplay={true}
          magnetLink={sintel}
        />
        <br/>
        <ImgATor magnetLink={imgPath} style={{border: 'solid'}} />
      </div>
    )
  }
}
```

## License

MIT © [Serge Thompson](https://github.com/sergethompson)
