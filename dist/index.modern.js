import { useState, useEffect, createElement, Fragment, useRef, Children, cloneElement } from 'react';
import WebTorrent from 'webtorrent';

const client = new WebTorrent();
client.on('error', function (t) {
  console.log('err', t);
});
const GetTorrent = (magnetURI, manageTor) => {
  if (typeof magnetURI !== 'string') {
    magnetURI = magnetURI.default;
  }

  let torrentCheck = client.get(magnetURI);

  if (torrentCheck) {
    let torrent = torrentCheck;

    if (torrent.name) {
      manageTor(torrent);
    } else {
      client.on('torrent', function (t) {
        if ((torrent === null || torrent === void 0 ? void 0 : torrent.infoHash) === (t === null || t === void 0 ? void 0 : t.infoHash)) {
          manageTor(t);
        }
      });
    }
  } else {
    client.add(magnetURI, function (torrent) {
      manageTor(torrent);
    });
  }
};
const loopThroughTorFiles = (torrent, manageFile) => {
  torrent.files.forEach(file => {
    manageFile(file);
  });
};
const PromiseTorrent = magnetURI => {
  return new Promise(resolve => {
    if (typeof magnetURI !== 'string') {
      magnetURI = magnetURI.default;
    }

    let torrentCheck = client.get(magnetURI);

    if (torrentCheck) {
      let torrent = torrentCheck;

      if (torrent.name) {
        resolve(torrent);
      } else {
        client.on('torrent', function (t) {
          if ((torrent === null || torrent === void 0 ? void 0 : torrent.infoHash) === (t === null || t === void 0 ? void 0 : t.infoHash)) {
            resolve(t);
          }
        });
      }
    } else {
      client.add(magnetURI, function (torrent) {
        resolve(torrent);
      });
    }
  });
};

/* loaded by smart-asset */
var iGif = "Infinity~vElNQthJ.gif";

const getTorrent = GetTorrent;
const promiseTorrent = PromiseTorrent;
const ImgATor = props => {
  let [fileState, updateFile] = useState(),
      [urlState, updateUrl] = useState(),
      manageFile = file => {
    updateFile(file);
    file.getBlobURL((err, url) => {
      if (err) throw err;
      updateUrl(url);
    });
  },
      mngTor = torrent => {
    loopThroughTorFiles(torrent, manageFile);
  };

  useEffect(() => {
    PromiseTorrent(props.magnetLink).then(mngTor);
    return () => {};
  }, []);
  return createElement(Fragment, null, createElement("img", {
    src: urlState,
    alt: fileState === null || fileState === void 0 ? void 0 : fileState.name,
    width: props.width,
    height: props.height,
    sizes: props.sizes,
    style: props.style
  }));
};
const VidATor = props => {
  const videoElement = useRef(null);

  let [urlState, updateUrl] = useState(),
      manageFile = file => {
    if (file.name.includes(props.type)) {
      file.getBlobURL((err, url) => {
        if (err) throw err;
        updateUrl(url);
      });
    }
  },
      mngTor = torrent => {
    loopThroughTorFiles(torrent, manageFile);
  };

  useEffect(() => {
    PromiseTorrent(props.magnetLink).then(mngTor);
    return () => {};
  }, []);
  return createElement(Fragment, null, urlState ? null : createElement("h2", {
    style: {
      color: 'orange'
    }
  }, "Loading"), createElement("video", {
    poster: iGif,
    width: props.width,
    height: props.height,
    controls: true,
    autoPlay: true,
    muted: true,
    ref: videoElement,
    src: urlState
  }, createElement("source", {
    type: 'video/' + props.type
  }), "Your browser does not support the video tag."));
};
const VidStrmATor = props => {
  const videoElement = useRef(null);
  const opts = {
    autoplay: props.autoplay,
    muted: true
  };

  let manageFile = file => {
    if (file.name.includes('.mp4')) {
      file.renderTo(videoElement.current, opts, function (err, elem) {
        if (err) throw err;
        console.log('New DOM node with the content', elem);
      });
    }
  },
      mngTor = torrent => {
    loopThroughTorFiles(torrent, manageFile);
  };

  useEffect(() => {
    PromiseTorrent(props.magnetLink).then(mngTor);
    return () => {};
  }, []);
  return createElement(Fragment, null, createElement("video", {
    width: props.width,
    height: props.height,
    controls: true,
    muted: true,
    ref: videoElement
  }, createElement("source", {
    type: 'video/mp4'
  }), "Your browser does not support the video tag."));
};
const WrapATor = props => {
  const {
    children
  } = props;

  let [childElements, updateChildElements] = useState(),
      mngTor = torrent => {
    const chldElements = Children.map(children, child => cloneElement(child, {
      torrent: torrent
    }));
    updateChildElements(chldElements);
  };

  useEffect(() => {
    PromiseTorrent(props.magnetLink).then(mngTor);
    return () => {};
  }, []);
  return createElement(Fragment, null, childElements);
};
const WrappedImgATor = props => {
  let [fileState, updateFile] = useState(),
      [urlState, updateUrl] = useState(),
      manageFile = file => {
    updateFile(file);
    file.getBlobURL((err, url) => {
      if (err) throw err;
      updateUrl(url);
    });
  },
      mngTor = torrent => {
    loopThroughTorFiles(torrent, manageFile);
  };

  useEffect(() => {
    mngTor(props.torrent);
    return () => {};
  }, []);
  return createElement(Fragment, null, createElement("img", {
    src: urlState,
    alt: fileState === null || fileState === void 0 ? void 0 : fileState.name,
    width: props.width,
    height: props.height,
    sizes: props.sizes,
    style: props.style
  }));
};

export { ImgATor, VidATor, VidStrmATor, WrapATor, WrappedImgATor, getTorrent, promiseTorrent };
//# sourceMappingURL=index.modern.js.map
