/**
* @description MeshCentral Dynamic Relay Mapper
* @author YourName
* @version v1.0.2
*/

"use strict";

function MeshServerSide_dynrelmap(parent) {
    var obj = {};
    obj.parent = parent;

    // This is a more aggressive way to ensure the button is added
    obj.onDeviceRefresh = function(node) {
        console.log("DynRelMap: Refreshing for node " + node._id); // Debug log

        // 1. Prevent duplicates
        if (document.getElementById('dynrelmap_btn')) return;

        // 2. Try multiple possible container IDs used by MeshCentral
        var targetArea = document.getElementById('p11_details') || 
                         document.getElementById('p11_actions') || 
                         document.getElementById('p11_info');

        if (!targetArea) {
            console.error("DynRelMap: Could not find a UI container to attach to.");
            return;
        }

        // 3. Create the UI Button
        var btn = document.createElement('button');
        btn.id = 'dynrelmap_btn';
        btn.innerText = "🔗 Dynamic Router";
        btn.className = "white-button"; 
        btn.style.marginTop = "10px";
        btn.style.width = "100%";
        btn.style.backgroundColor = "#e1f5fe"; // Light blue to make it stand out

        btn.onclick = function() {
            var targetIp = prompt("Enter Target Internal IP:", "127.0.0.1");
            if (!targetIp) return;
            
            var targetPort = prompt("Enter Target Port:", "80");
            if (!targetPort || isNaN(targetPort)) return;

            var serverHost = window.location.host;
            // The protocol MeshCentral Router expects
            var protocolUrl = "mc-router://" + serverHost + "/" + node._id + "/" + targetIp + "/" + targetPort;

            console.log("DynRelMap: Launching " + protocolUrl);
            window.location.href = protocolUrl;
        };

        // 4. Inject
        targetArea.appendChild(btn);
    };

    return obj;
}