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
        if (document.getElementById('dynrelmap_anchor')) return;

        // Try to find the panel
        var targetArea = document.getElementById('p10html3left');
        if (!targetArea){
            console.log('missing target area!');
            return;
        }

        var anchor = document.createElement('a');
        anchor.id = 'dynrelmap_anchor';
        anchor.innerText = "⚡ Open Dynamic Relay";
        anchor.href="#"

        anchor.onclick = function() {
            var targetIp = prompt("Enter Target Internal IP:", "127.0.0.1");
            if (!targetIp) return;
            
            var targetPort = prompt("Enter Target Port:", "80");
            if (!targetPort || isNaN(targetPort)) return;

            const queryString = window.location.search;
            const urlParams = new URLSearchParams(queryString);
            const nodeId = urlParams.get('gotonode');

            p10MCRouter(nodeId,'custom',targetPort, targetIp, 0)
        };

        targetArea.appendChild(btn);
    };
    
    return obj;
}