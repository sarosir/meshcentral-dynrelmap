/**
* @description MeshCentral Dynamic Relay Mapper
* @author sarosir
* @version v0.0.1
*/

"use strict";

function MeshServerSide_dynrelmap(parent) {
    var obj = {};
    obj.parent = parent;

    // This hook triggers when the device details page is loaded
    obj.onDeviceRefresh = function(node) {
        var btnId = 'dynrelmap_btn';
        if (document.getElementById(btnId)) return;

        // Find the "Action" buttons container in the MeshCentral UI
        var actionButtons = document.getElementById('p11_details'); 
        if (!actionButtons) return;

        // Create the UI Button
        var btn = document.createElement('button');
        btn.id = btnId;
        btn.innerText = "🔗 Dynamic Router";
        btn.className = "white-button"; 
        btn.style.margin = "5px 0px";
        btn.style.width = "100%";

        btn.onclick = function() {
            var targetIp = prompt("Enter Target Internal IP:", "127.0.0.1");
            if (!targetIp) return;
            
            var targetPort = prompt("Enter Target Port:", "80");
            if (!targetPort || isNaN(targetPort)) {
                alert("Please enter a valid port number.");
                return;
            }

            // Protocol: mc-router://[server]/[nodeid]/[remoteip]/[remoteport]
            var serverHost = window.location.host;
            var protocolUrl = "mc-router://" + serverHost + "/" + node._id + "/" + targetIp + "/" + targetPort;

            // Execute the protocol handler
            window.location.href = protocolUrl;
        };

        // Insert the button into the UI
        actionButtons.appendChild(btn);
    };

    return obj;
}