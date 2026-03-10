/** 
* @description MeshCentral DynamicRelayMap
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
        if (document.getElementById('dynrelmap_anchor')){ return; }

        var targetArea = document.getElementsByClassName('p10html3left')[0];
        if (!targetArea){
            console.log('Dynrelmap: Missing target area!');
            return;
        }

        var anchor = document.createElement('a');
        anchor.id = 'dynrelmap_anchor';
        anchor.innerText = "Dynamic Relay Map ⚡";
        anchor.href="#"

        anchor.onclick = function() {
            var targetIp = prompt("Enter Target Internal IP:", "127.0.0.1");
            if (!targetIp) return;
            
            var targetPort = prompt("Enter Target Port:", "80");
            if (!targetPort || isNaN(targetPort)) return;

            var queryString = window.location.search;
            var urlParams = new URLSearchParams(queryString);
            var nodeId = urlParams.get('gotonode');

            p10MCRouter("node//"+nodeId,'custom',targetPort, targetIp, 0)
        };

        targetArea.appendChild(anchor);
    };
    
    return obj;
}