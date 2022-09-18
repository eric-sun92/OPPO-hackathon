// let toggleswitch = document.querySelector("#toggle-switch");
// let mainsection = document.querySelector("#main-section");
// let devicelist = document.querySelector("#device-list");

// const SERVER = "http://localhost:3000/devices";

// Display all devices
const displayDevices = () => {
    devicelist.innerHTML = "";

    devices.forEach((device) => {
        let deviceDiv = document.createElement("div");
        deviceDiv.classList = "device box mb-2 has-background-grey-light";
        deviceDiv.dataset.id = device.id;
        deviceDiv.innerHTML = `
        <div class="level is-mobile">
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
        </div>
        <div>
            <p> 
                What would you like ${device.name} to do when you fall asleep?
            </p>
            <br>
            <div class="subsection"></div>
        </div>`;

        let subsection = deviceDiv.querySelector(".subsection");
        
        if (device.controls.type === "Select") {
            device.controls.options.forEach((option) => {
                let subsectionOptionMain = document.createElement("div");
                subsectionOptionMain.classList.add("level");
                subsectionOptionMain.classList.add("is-mobile");

                let subsectionOptionMainLeft = document.createElement("div");
                subsectionOptionMainLeft.classList.add("level-left");
                subsectionOptionMain.append(subsectionOptionMainLeft);

                let subsectionOptionLeftItem = document.createElement("div");
                subsectionOptionLeftItem.classList.add("level-item");
                subsectionOptionMainLeft.append(subsectionOptionLeftItem);

                let toggle = document.createElement("label");
                toggle.classList.add("switch");
                subsectionOptionLeftItem.append(toggle);

                //   <span class="slider round"></span>

                let checkbox = document.createElement("input");
                checkbox.setAttribute("type", "checkbox");
                toggle.append(checkbox);

                let span = document.createElement("span");
                span.classList = "slider round";
                checkbox.append(span);
                // <div class="level-left">
                //     <div class="level-item">
                //         <div class="content">
                //             <p><b>${device.name}</b></p>
                //         </div>
                //     </div>
                // </div>
                let subsectionOptionMainRight = document.createElement("div");
                subsectionOptionMainRight.classList.add("level-right");
                subsectionOptionMain.append(subsectionOptionMainRight);

                let subsectionOptionRightItem = document.createElement("div");
                subsectionOptionRightItem.classList.add("level-item");
                subsectionOptionMainRight.append(subsectionOptionRightItem);

                let subsectionOptionContent = document.createElement("div");
                subsectionOptionContent.classList.add("content");
                subsectionOptionMainRight.append(subsectionOptionContent);

                let subsectionOptionContentName = document.createElement("p");
                subsectionOptionContentName.innerHTML = option;
                //make div into form

                subsection.append(subsectionOptionMain);
                console.log(subsectionOptionMain);
            });
        }

        deviceDiv.querySelector("input").checked = device.data.controlled;
        devicelist.appendChild(deviceDiv);

        // deviceDiv.addEventListener("click", () => {
        //   console.log("test");
        //   subsections.classList.toggle("hidden");
        // });
    });
};

const createSubSections = () => { };

// Toggle display of main section with toggle switch
// toggleswitch.addEventListener("click", () => {
//     mainsection.classList.toggle("hidden");
// });

// Fetch all devices
// let devices = [];
// fetch(SERVER)
//     .then((response) => response.json())
//     .then((data) => {
//         devices = data;
//         // displayDevices();
//     });
