<h1 style="color: #5270d9; font-family: 'PT Sans', sans-serif;">ATORABLE</h1> 
<!-- TOOD: make above to link to atorable.com fix color  -->


<!-- [![NPM](https://img.shields.io/npm/v/atorable-react.svg)](https://www.npmjs.com/package/atorable-react) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) -->


<!-- ![Alt text](./atorable.svg) -->
<p align="center">
  <img height="300" width="300" title="atorable logo" src="https://github.com/Atorable/atorable-react/raw/main/atorable.svg" >
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
import { ATorVidStrm, ATorImg, ATorVid } from 'atorable-react'

import hugeImage from './hugeImage.jpg' // ==> 'magnet:?xt=urn:...'
import bestMovieEverTribute from './bestMovieEverTribute.mp4' // ==> 'magnet:?xt=urn:...'
const oceanFish = require('./oceanFish.mp4') // ==> {default: 'magnet:?xt=urn:...'}

const Example = (props: any) => {
  return (
    <div>
      <ATorVid width={'320'} height={'240'} type={'video/mp4'} magnetURI={oceanFish} loading={<h2 style={{ color: 'orange' }}>Loading</h2>}/>

      <ATorVidStrm width={'320'} height={'240'} type={'video/mp4'} autoplay={true} magnetURI={bestMovieEverTribute} />

      <ATorImg magnetURI={hugeImage} style={{border: 'solid'}} />
    </div>
  )
}
```

## Magnet URI usage

```tsx
import React from 'react'
import { ATorVidStrm, ATorImg, ATorVid } from 'atorable-react'

let imgPath = 'magnet:?xt=urn:btih:...'
let sintel = 'magnet:?xt=urn:btih:...'
let oceanFish = 'magnet:?xt=urn:btih:...'
let iso = 'magnet:?xt=urn:btih:...'

const Example = (props: any) => {
  return (
    <div>
      <ATorVid width={'320'} height={'240'} type={'video/mp4'} magnetURI={oceanFish} />

      <ATorVidStrm width={'320'} height={'240'} type={'video/mp4'} magnetURI={sintel} />

      <ATorImg magnetURI={imgPath} style={{border: 'solid'}} />
      <ATorDownloader
          magnetURI={iso}
          startImmediately={true}
          ShowPrgrs={ShowPrgrs} // example progress fn at bottom of readme
          DownloadLink={DownloadLink}
        />
    
    </div>
  )
}
```

## Advanced usage
Make a component that gets wrapped with `<ATorWrap>` which gets the props `torrent, dwnldSpeed, progress, peers, done` a `<WebTorrent.Torrent>`, see [Webtorrent Docs][webtorrent-docs] for more info.

```tsx
import React, { useEffect, useState Fragment } from 'react'
import { ATorWrap } from 'atorable-react'
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
      <ATorWrap magnetURI={hugeImage}>
        <WrappedImg width={'320'} height={'240'} style={{border: 'solid'}} />
      </ATorWrap>
    </div>
  )
}
```

## Progress Function and Download link
```tsx
export const ShowPrgrs = (props: TorrentUpdates) => {
  let { peers, progress, downloaded } = props

  return (
    <div style={{ clear: 'both' }}>
      <div
        style={{
          width: '100%',
          height: '6px'
        }}
      >
        <div
          style={{
            background: 'limegreen',
            height: '4px',
            width: `${progress * 100}%`
          }}
        ></div>
      </div>
      <p style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>Downloaded: {downloaded?.toFixed(1)} Mb</div>
        <div>Peers: {peers}</div>
      </p>
    </div>
  )
}

const DownloadLink = (props: {
    url: string | undefined
    filename: string
}) => {
    const { url, filename } = props
    return (
        <a href={url} download>
            Click to download {filename}
        </a>
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