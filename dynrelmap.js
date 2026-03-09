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
        if (document.getElementById('dynrelmap_btn')) return;

        // Try to find the panel
        var targetArea = document.getElementById('p11_details') || document.getElementById('p11_actions');
        if (!targetArea) return;

        var btn = document.createElement('button');
        btn.id = 'dynrelmap_btn';
        btn.innerText = "⚡ Open Dynamic Relay";
        btn.className = "white-button";
        btn.style.marginTop = "10px";
        btn.style.width = "100%";

        btn.onclick = function() {
            var targetIp = prompt("Enter Target Internal IP:", "127.0.0.1");
            if (!targetIp) return;
            
            var targetPort = prompt("Enter Target Port:", "80");
            if (!targetPort || isNaN(targetPort)) return;

            var serverUrl = window.location.host;
            var meshRouterUrl = "mc-router://" + serverUrl + "/" + node._id + "/" + targetIp + "/" + targetPort;
            
            window.location.href = meshRouterUrl;
        };

        targetArea.appendChild(btn);
    };
    
    return obj;
}