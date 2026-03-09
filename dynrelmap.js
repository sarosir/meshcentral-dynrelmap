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
    obj.exports = [      
        'onDeviceRefreshEnd',
    ];
    
    obj.onDeviceRefreshEnd = function() {
        console.log("YO IM HERE");
    };
    
    return obj;
}