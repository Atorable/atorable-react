import { useState, useEffect, createElement, Fragment, useRef } from 'react';
import WebTorrent from 'webtorrent';

const client = new WebTorrent();
client.on('error', function (t) {
  console.log('err', t);
});
const GetTorrent = (magnetURI, manageFile) => {
  let torrentCheck = client.get(magnetURI);

  if (torrentCheck) {
    let torrent = torrentCheck;

    if (torrent.name) {
      manageTorrent(torrent, manageFile);
    } else {
      client.on('torrent', function (t) {
        if ((torrent === null || torrent === void 0 ? void 0 : torrent.infoHash) === (t === null || t === void 0 ? void 0 : t.infoHash)) {
          manageTorrent(t, manageFile);
        }
      });
    }
  } else {
    client.add(magnetURI, function (torrent) {
      manageTorrent(torrent, manageFile);
    });
  }
};
const manageTorrent = (torrent, manageFile) => {
  torrent.files.forEach(file => {
    manageFile(file);
  });
};

const ImgATor = props => {
  let [fileState, updateFile] = useState(),
      [urlState, updateUrl] = useState(),
      manageFile = file => {
    updateFile(file);
    file.getBlobURL((err, url) => {
      if (err) throw err;
      updateUrl(url);
    });
  };

  useEffect(() => {
    GetTorrent(props.magnetLink.default, manageFile);
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

  let [fileState, updateFile] = useState(),
      [urlState, updateUrl] = useState(),
      manageFile = file => {
    updateFile(file);
    file.getBlobURL((err, url) => {
      if (err) throw err;
      updateUrl(url);
    });
  };

  useEffect(() => {
    GetTorrent(props.magnetLink.default, manageFile);
    return () => {};
  }, []);
  return createElement(Fragment, null, urlState ? createElement("p", {
    style: {
      color: 'green'
    }
  }, "Ready") : createElement("p", {
    style: {
      color: 'orange'
    }
  }, "Loading"), createElement("video", {
    width: props.width,
    height: props.height,
    controls: true,
    autoPlay: true,
    muted: true,
    ref: videoElement,
    src: urlState
  }, createElement("source", {
    type: 'video/mp4'
  }), "Your browser does not support the video tag.", fileState === null || fileState === void 0 ? void 0 : fileState.name));
};
const VidStrmATor = props => {
  const videoElement = useRef(null);
  useEffect(() => {
    const opts = {
      autoplay: props.autoplay,
      muted: true
    };

    let manageFile = file => {
      file.renderTo(videoElement.current, opts, function (err, elem) {
        if (err) throw err;
        console.log('New DOM node with the content', elem);
      });
    };

    GetTorrent(props.magnetLink.default, manageFile);
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

export { ImgATor, VidATor, VidStrmATor };
//# sourceMappingURL=index.modern.js.map
