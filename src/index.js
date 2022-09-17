let toggleswitch = document.querySelector("#toggle-switch");
let mainsection = document.querySelector("#main-section");
let devicelist = document.querySelector("#device-list");

const SERVER = "http://localhost:3000/devices";

// Display all devices
const displayDevices = () => {
    devicelist.innerHTML = "";

    devices.forEach(device => {
        let deviceDiv = document.createElement("div");
        deviceDiv.classList = "device level is-mobile box mb-2 has-background-grey-light";
        deviceDiv.dataset.id = device.id;
        deviceDiv.innerHTML = `
            <div class="level-left">
                <div class="level-item">    
                    <div class="content">
                        <p><b>${device.name}</b></p>
                    </div>
                </div>
            </div>
            <div class="level-right">
                <div class="level-item">
                    <label class="switch">
                        <input type="checkbox">
                        <span class="slider round"></span>
                    </label>
                </div>
            </div>
        `;
        deviceDiv.querySelector("input").checked = device.data.controlled;
        devicelist.appendChild(deviceDiv);
    });
};

// Toggle display of main section with toggle switch
toggleswitch.addEventListener("click", () => {
    mainsection.classList.toggle("hidden");
});

// Get all devices
let devices = [];
fetch(SERVER)
    .then(response => response.json())
    .then(data => {
        devices = data;
        console.log(devices);
        displayDevices();
    });