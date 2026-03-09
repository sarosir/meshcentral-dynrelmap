/**
* @description MeshCentral Dynamic Relay Mapper
* @author YourName
* @version v1.0.4
*/

"use strict";

function MeshServerSide_dynrelmap(parent) {
    var obj = {};
    obj.parent = parent;

    // Official hook called when a device page is finished loading
    obj.onDeviceRefreshEnd = function() {
        if (typeof parent.currentActiveDevice !== 'object') return;
        var node = parent.currentActiveDevice;
        
        // Add the button
        obj.addButton(node);
    };

    obj.addButton = function(node) {
        var btnId = 'dynrelmap_btn';
        if (document.getElementById(btnId)) return;

        // Try to find the details panel or the action buttons area
        var target = document.getElementById('p11_details') || document.getElementById('p11_actions');
        if (!target) return;

        var btn = document.createElement('button');
        btn.id = btnId;
        btn.innerHTML = '<b>🔗 Dynamic Router</b>';
        btn.className = 'white-button'; // MeshCentral standard class
        btn.style.marginTop = '10px';
        btn.style.width = '100%';

        btn.onclick = function() {
            var ip = prompt("Enter Target Internal IP:", "127.0.0.1");
            if (!ip) return;
            var port = prompt("Enter Target Port:", "80");
            if (!port || isNaN(port)) return;

            // Construct mc-router protocol
            var url = "mc-router://" + window.location.host + "/" + node._id + "/" + ip + "/" + port;
            
            // Log to console for debugging
            console.log("DynRelMap: Opening " + url);
            window.location.href = url;
        };

        target.appendChild(btn);
    };

    return obj;
}