function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var WebTorrent = _interopDefault(require('webtorrent'));

var client = new WebTorrent();
client.on('error', function (t) {
  console.log('err', t);
});
var GetTorrent = function GetTorrent(magnetURI, manageTor) {
  if (typeof magnetURI !== 'string') {
    magnetURI = magnetURI["default"];
  }

  var torrentCheck = client.get(magnetURI);

  if (torrentCheck) {
    var torrent = torrentCheck;

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
var loopThroughTorFiles = function loopThroughTorFiles(torrent, manageFile) {
  torrent.files.forEach(function (file) {
    manageFile(file);
  });
};
var PromiseTorrent = function PromiseTorrent(magnetURI) {
  return new Promise(function (resolve) {
    if (typeof magnetURI !== 'string') {
      magnetURI = magnetURI["default"];
    }

    var torrentCheck = client.get(magnetURI);

    if (torrentCheck) {
      var torrent = torrentCheck;

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

var getTorrent = GetTorrent;
var promiseTorrent = PromiseTorrent;
var ImgATor = function ImgATor(props) {
  var _useState = React.useState(),
      fileState = _useState[0],
      updateFile = _useState[1],
      _useState2 = React.useState(),
      urlState = _useState2[0],
      updateUrl = _useState2[1],
      manageFile = function manageFile(file) {
    updateFile(file);
    file.getBlobURL(function (err, url) {
      if (err) throw err;
      updateUrl(url);
    });
  },
      mngTor = function mngTor(torrent) {
    loopThroughTorFiles(torrent, manageFile);
  };

  React.useEffect(function () {
    PromiseTorrent(props.magnetLink).then(mngTor);
    return function () {};
  }, []);
  return React.createElement(React.Fragment, null, React.createElement("img", {
    src: urlState,
    alt: fileState === null || fileState === void 0 ? void 0 : fileState.name,
    width: props.width,
    height: props.height,
    sizes: props.sizes,
    style: props.style
  }));
};
var VidATor = function VidATor(props) {
  var videoElement = React.useRef(null);

  var _useState3 = React.useState(),
      fileState = _useState3[0],
      updateFile = _useState3[1],
      _useState4 = React.useState(),
      urlState = _useState4[0],
      updateUrl = _useState4[1],
      manageFile = function manageFile(file) {
    if (file.name.includes('.mp4')) {
      updateFile(file);
      file.getBlobURL(function (err, url) {
        if (err) throw err;
        updateUrl(url);
      });
    }
  },
      mngTor = function mngTor(torrent) {
    loopThroughTorFiles(torrent, manageFile);
  };

  React.useEffect(function () {
    PromiseTorrent(props.magnetLink).then(mngTor);
    return function () {};
  }, []);
  return React.createElement(React.Fragment, null, urlState ? null : React.createElement("h2", {
    style: {
      color: 'orange'
    }
  }, "Loading"), React.createElement("video", {
    width: props.width,
    height: props.height,
    controls: true,
    autoPlay: true,
    muted: true,
    ref: videoElement,
    src: urlState
  }, React.createElement("source", {
    type: props.type
  }), "Your browser does not support the video tag.", fileState === null || fileState === void 0 ? void 0 : fileState.name));
};
var VidStrmATor = function VidStrmATor(props) {
  var videoElement = React.useRef(null);
  var opts = {
    autoplay: props.autoplay,
    muted: true
  };

  var manageFile = function manageFile(file) {
    if (file.name.includes('.mp4')) {
      file.renderTo(videoElement.current, opts, function (err, elem) {
        if (err) throw err;
        console.log('New DOM node with the content', elem);
      });
    }
  },
      mngTor = function mngTor(torrent) {
    loopThroughTorFiles(torrent, manageFile);
  };

  React.useEffect(function () {
    PromiseTorrent(props.magnetLink).then(mngTor);
    return function () {};
  }, []);
  return React.createElement(React.Fragment, null, React.createElement("video", {
    width: props.width,
    height: props.height,
    controls: true,
    muted: true,
    ref: videoElement
  }, React.createElement("source", {
    type: 'video/mp4'
  }), "Your browser does not support the video tag."));
};
var WrapATor = function WrapATor(props) {
  var children = props.children;

  var _useState5 = React.useState(),
      childElements = _useState5[0],
      updateChildElements = _useState5[1],
      mngTor = function mngTor(torrent) {
    var chldElements = React.Children.map(children, function (child) {
      return React.cloneElement(child, {
        torrent: torrent
      });
    });
    updateChildElements(chldElements);
  };

  React.useEffect(function () {
    PromiseTorrent(props.magnetLink).then(mngTor);
    return function () {};
  }, []);
  return React.createElement(React.Fragment, null, childElements);
};
var WrappedImgATor = function WrappedImgATor(props) {
  var _useState6 = React.useState(),
      fileState = _useState6[0],
      updateFile = _useState6[1],
      _useState7 = React.useState(),
      urlState = _useState7[0],
      updateUrl = _useState7[1],
      manageFile = function manageFile(file) {
    updateFile(file);
    file.getBlobURL(function (err, url) {
      if (err) throw err;
      updateUrl(url);
    });
  },
      mngTor = function mngTor(torrent) {
    loopThroughTorFiles(torrent, manageFile);
  };

  React.useEffect(function () {
    mngTor(props.torrent);
    return function () {};
  }, []);
  return React.createElement(React.Fragment, null, React.createElement("img", {
    src: urlState,
    alt: fileState === null || fileState === void 0 ? void 0 : fileState.name,
    width: props.width,
    height: props.height,
    sizes: props.sizes,
    style: props.style
  }));
};

exports.ImgATor = ImgATor;
exports.VidATor = VidATor;
exports.VidStrmATor = VidStrmATor;
exports.WrapATor = WrapATor;
exports.WrappedImgATor = WrappedImgATor;
exports.getTorrent = getTorrent;
exports.promiseTorrent = promiseTorrent;
//# sourceMappingURL=index.js.map
