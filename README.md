# atorable-react


<!-- [![NPM](https://img.shields.io/npm/v/atorable-react.svg)](https://www.npmjs.com/package/atorable-react) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) -->

## Install

```bash
npm install --save atorable-react
```
## Primary Usage

```tsx
import React, { Component } from 'react'
import { VidStrmATor, ImgATor, VidATor } from 'atorable-react'

import hugeImage from './hugeImage.jpg';
import bestMovieEverTribute from './bestMovieEverTribute.mv4';
const  oceanFish = require('./oceanFish.mv4');

class Example extends Component {
  render() {
    return (
      <div>
        <VidATor width='320' height='240' magnetLink={oceanFish} />

        <VidStrmATor width='320' height='240' autoplay={true} magnetLink={bestMovieEverTribute} />

        <ImgATor magnetLink={hugeImage} style={{border: 'solid'}} />
      </div>
    )
  }
}
```

## Explicit Usage

```tsx
import React, { Component } from 'react'

import { VidStrmATor, ImgATor, VidATor } from 'atorable-react'
let imgPath = 'magnet:?xt=urn:btih:dc94d0d5b4a4ca82bbe4d335ddb65ef7ea3de374&dn=DSC4470.jpg&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=udp%3A%2F%2Fexplodie.org%3A6969&tr=udp%3A%2F%2Ftracker.empire-js.us%3A1337&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=wss%3A%2F%2Ftracker.openwebtorrent.com&ws=http%3A%2F%2Flocalhost%3A8080%2Fassets%2Fimg%2FDSC4470.jpg&xs=http%3A%2F%2Flocalhost%3A8080%2Fassets%2Fimg%2FDSC4470.torrent'

let sintel = 'magnet:?xt=urn:btih:08ada5a7a6183aae1e09d831df6748d566095a10&dn=Sintel&tr=udp%3A%2F%2Fexplodie.org%3A6969&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Ftracker.empire-js.us%3A1337&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=wss%3A%2F%2Ftracker.fastcast.nz&tr=wss%3A%2F%2Ftracker.openwebtorrent.com&ws=https%3A%2F%2Fwebtorrent.io%2Ftorrents%2F&xs=https%3A%2F%2Fwebtorrent.io%2Ftorrents%2Fsintel.torrent'

let oceanFish = 'magnet:?xt=urn:btih:17a613e4a81e52cf41cab72157a24faecaa8f2f5&dn=GOPR0093.mp4&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=udp%3A%2F%2Fexplodie.org%3A6969&tr=udp%3A%2F%2Ftracker.empire-js.us%3A1337&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=wss%3A%2F%2Ftracker.openwebtorrent.com&ws=http%3A%2F%2Flocalhost%3A8080%2Fassets%2Fimg%2FGOPR0093.mp4&xs=http%3A%2F%2Flocalhost%3A8080%2Fassets%2Fimg%2FGOPR0093.torrent'



class Example extends Component {
  render() {
    return (
      <div>
        <VidATor width='320' height='240' magnetLink={oceanFish} />

        <VidStrmATor width='320' height='240' autoplay={true} magnetLink={sintel} />

        <ImgATor magnetLink={imgPath} style={{border: 'solid'}} />
      </div>
    )
  }
}
```

## License
[MIT](./LICENSE) © [Serge Thompson](https://github.com/sergethompson)
