/** 
* @description MeshCentral DynamixRelayMap
* @author Robert Sarosi
* @copyright 
* @license Apache-2.0
*/

"use strict";

module.exports.dynrelmap = function (parent) {
    var obj = {};
    obj.parent = parent;
    obj.meshServer = parent.parent;
    obj.db = null;
    obj.intervalTimer = null;
    obj.debug = obj.meshServer.debug;
    obj.exports = [      
        'onDeviceRefreshEnd',
        'resizeContent',
        'historyData',
        'variableData',
        'malix_triggerOption'
    ];
    
    obj.onDeviceRefreshEnd = function() {
        console.log("YO IM HERE");
    };
    
    return obj;
}