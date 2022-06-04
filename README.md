<h1 style="color: #5270d9; font-family: 'PT Sans', sans-serif;">ATORABLE</h1> 
<!-- TOOD: make above to link to atorable.com fix color  -->


<!-- [![NPM](https://img.shields.io/npm/v/atorable-react.svg)](https://www.npmjs.com/package/atorable-react) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) -->


<!-- ![Alt text](./atorable.svg) -->
<p align="center">
  <img height="300" width="300" title="atorable logo" src="./atorable.svg">
</p>
<!-- <p align="center">
  <img src="example/src/atorable.png" height="100" width="100" title="atorable logo">
<img src="https://github.com/Atorable/atorable-loader/blob/main/atorable.png" height="100" width="100" title="atorable logo">© 
</p> -->

# atorable-react

Why? Decreased data from your server or take that a step further and use our server, see our services [Atorable.com](https://www.atorable.com/). Large files faster with more peers. More Decentralized.

The `atorable-react` package is a [React](https://reactjs.org/) component that processes a [Webtorrent][webtorrent] magnet uri for viewing or other custom uses. This works closely with [atorable-loader][atorable-loader-npm].

#### [Demo][atorable-react]

## Updates / Upgrade to Version 1.0.0 (props)
magnetLink ==> magnetURI
type: string ==> 'video/mp4' or 'video/webm' or 'video/ogg'

added ability to set loading component
loading={<h2 style={{ color: 'orange' }}>Loading</ h2>}



## Getting Started

```bash
npm install --save atorable-react
```
## Primary usage w/ [atorable-loader][atorable-loader-npm]
For images and video (streaming limited to .mp4)
see advanced usage for more flexibility

```tsx
import React from 'react'
import { VidStrmATor, ImgATor, VidATor } from 'atorable-react'

import hugeImage from './hugeImage.jpg' // ==> 'magnet:?xt=urn:...'
import bestMovieEverTribute from './bestMovieEverTribute.mp4' // ==> 'magnet:?xt=urn:...'
const oceanFish = require('./oceanFish.mp4') // ==> {default: 'magnet:?xt=urn:...'}

const Example = (props: any) => {
  return (
    <div>
      <VidATor width={320} height={240} type={'video/mp4'} magnetURI={oceanFish} loading={<h2 style={{ color: 'orange' }}>Loading</h2>}/>

      <VidStrmATor width={320} height={240} type={'video/mp4'} autoplay={true} magnetURI={bestMovieEverTribute} />

      <ImgATor magnetURI={hugeImage} style={{border: 'solid'}} />
    </div>
  )
}
```

## Magnet URI usage

```tsx
import React from 'react'
import { VidStrmATor, ImgATor, VidATor } from 'atorable-react'

let imgPath = 'magnet:?xt=urn:btih:dc94d0d5b4a4ca82bbe4d335ddb65ef7ea3de374&dn=DSC4470.jpg&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=udp%3A%2F%2Fexplodie.org%3A6969&tr=udp%3A%2F%2Ftracker.empire-js.us%3A1337&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=wss%3A%2F%2Ftracker.openwebtorrent.com&ws=http%3A%2F%2Flocalhost%3A8080%2Fassets%2Fimg%2FDSC4470.jpg&xs=http%3A%2F%2Flocalhost%3A8080%2Fassets%2Fimg%2FDSC4470.torrent'
let sintel = 'magnet:?xt=urn:btih:08ada5a7a6183aae1e09d831df6748d566095a10&dn=Sintel&tr=udp%3A%2F%2Fexplodie.org%3A6969&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Ftracker.empire-js.us%3A1337&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=wss%3A%2F%2Ftracker.fastcast.nz&tr=wss%3A%2F%2Ftracker.openwebtorrent.com&ws=https%3A%2F%2Fwebtorrent.io%2Ftorrents%2F&xs=https%3A%2F%2Fwebtorrent.io%2Ftorrents%2Fsintel.torrent'
let oceanFish = 'magnet:?xt=urn:btih:17a613e4a81e52cf41cab72157a24faecaa8f2f5&dn=GOPR0093.mp4&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=udp%3A%2F%2Fexplodie.org%3A6969&tr=udp%3A%2F%2Ftracker.empire-js.us%3A1337&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=wss%3A%2F%2Ftracker.openwebtorrent.com&ws=http%3A%2F%2Flocalhost%3A8080%2Fassets%2Fimg%2FGOPR0093.mp4&xs=http%3A%2F%2Flocalhost%3A8080%2Fassets%2Fimg%2FGOPR0093.torrent'

const Example = (props: any) => {
  return (
    <div>
      <VidATor width={320} height={240} type={'video/mp4'} magnetURI={oceanFish} />

      <VidStrmATor width={320} height={240} type={'video/mp4'} magnetURI={sintel} />

      <ImgATor magnetURI={imgPath} style={{border: 'solid'}} />
    </div>
  )
}
```

## Advanced usage
Make a component that gets wrapped with `<WrapATor>` which gets the props `torrent, dwnldSpeed, progress, peers, done` a `<WebTorrent.Torrent>`, see [Webtorrent Docs][webtorrent-docs] for more info.

```tsx
import React, { useEffect, useState Fragment } from 'react'
import { WrapATor } from 'atorable-react'
import hugeImage from './hugeImage.jpg';

const WrappedImg = (props: any) => {
  let {torrent, width, height, sizes, style, done} = props,
      [urlState, updateUrl] = useState<string>()

    useEffect(() => {
      let file = torrent.files[0]
      if (file) {
        file.getBlobURL((err, url) => {
            if (err) throw err
            updateUrl(url)
        })
      }
      return () => {}
    }, [done])

  return (
    <Fragment>
      <img
        src={urlState}
        width={width}
        height={height}
        sizes={sizes}
        style={style}
      />
    </Fragment>
  )
}

const Example = (props: any) => {
  return (
    <div>
      <WrapATor magnetURI={hugeImage}>
        <WrappedImg width={'320'} height={'240'} style={{border: 'solid'}} />
      </WrapATor>
    </div>
  )
}
```

## Thank you
[Webtorrent](https://webtorrent.io/)
[create-react-library](https://github.com/transitive-bullshit/create-react-library)
[Material-UI](https://github.com/mui-org/material-ui)


## License
[MIT](./LICENSE) © [Serge Thompson][serge-thompson]

[webtorrent]: https://webtorrent.io/
[webtorrent-docs]: https://webtorrent.io/docs

[atorable-react]: https://atorable.github.io/atorable-react/
[atorable-react-source]: https://github.com/Atorable/atorable-react
[atorable-loader-source]: https://github.com/Atorable/atorable-loader
[atorable-loader-npm]: https://www.npmjs.com/package/atorable-loader

[serge-thompson]: https://github.com/sergethompson
[atorable]: https://www.atorable.com/