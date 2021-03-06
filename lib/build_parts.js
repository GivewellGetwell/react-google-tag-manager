'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
function convertToKeyValueString(obj) {
    return JSON.stringify(obj).slice(1, -1);
}

function buildParts(_ref) {
    var id = _ref.id;
    var _ref$dataLayerName = _ref.dataLayerName;
    var dataLayerName = _ref$dataLayerName === undefined ? 'dataLayer' : _ref$dataLayerName;
    var _ref$additionalEvents = _ref.additionalEvents;
    var additionalEvents = _ref$additionalEvents === undefined ? {} : _ref$additionalEvents;

    if (id === undefined) {
        throw new Error('No GTM id provided');
    }

    var iframe = '\n        <iframe src="//www.googletagmanager.com/ns.html?id=' + id + '"\n            height="0" width="0" style="display:none;visibility:hidden"></iframe>';

    var script = '\n        (function(w,d,s,l,i){w[l]=w[l]||[];\n            w[l].push({\'gtm.start\': new Date().getTime(),event:\'gtm.js\', ' + convertToKeyValueString(additionalEvents) + '});\n            var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!=\'dataLayer\'?\'&l=\'+l:\'\';\n            j.async=true;j.src=\'//www.googletagmanager.com/gtm.js?id=\'+i+dl;\n            f.parentNode.insertBefore(j,f);\n        })(window,document,\'script\',\'' + dataLayerName + '\',\'' + id + '\');';

    return {
        iframe: iframe,
        script: script
    };
}

exports['default'] = buildParts;
module.exports = exports['default'];