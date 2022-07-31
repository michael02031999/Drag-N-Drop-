let body = document.getElementsByTagName("body");
let catImageContainer = document.getElementById("catImageContainer");
let catImage = document.getElementById("catPic");

let landingZones = document.querySelectorAll(".box");

let onDragStart = (event) => {
  setTimeout(() => {
    event.target.className = "hide";
  }, 0);
};

let onDragEnd = (event) => {
  event.target.classList.remove("hide");
};

let onDragOver = (event) => {
  event.preventDefault();

  //console.log("DragOver fired");
};

let onDragEnter = (event) => {
  event.preventDefault();
  console.log(event.target);
  event.target.classList.add("hover");
};

let onDragLeave = (event) => {
  //console.log("drag leave event fired");
  event.target.classList.remove("hover");
};

let onDrop = (event) => {
  //console.log("drop event fired");
  event.target.append(catImageContainer);
  event.target.classList.remove("hover");
};

catImageContainer.addEventListener("dragstart", onDragStart);
catImageContainer.addEventListener("dragend", onDragEnd);

for (landingZone of landingZones) {
  landingZone.addEventListener("dragover", onDragOver);
  landingZone.addEventListener("dragenter", onDragEnter);
  landingZone.addEventListener("dragleave", onDragLeave);
  landingZone.addEventListener("drop", onDrop);
}

/*catImage.addEventListener("dragstart", function (event) {
  event.dataTransfer.setData("text/plain", event.target.id);

  setTimeout(() => {
    event.target.classList.add("hide");
  }, 0);
});

for (let dropZone of document.querySelectorAll(".box")) {
  dropZone.addEventListener("dragover", (e) => {
    //console.log(dropZone);

    e.preventDefault();

    console.log(dropZone);

    //console.log("Starting to make progress");
  });

  dropZone.addEventListener("drop", (e) => {
    e.preventDefault();
    console.log(e.dataTransfer.getData("text/plain"));
    let droppedElementId = e.dataTransfer.getData("text/plain");
    let droppedElement = document.getElementById(droppedElementId);

    //console.log(dropZone);
    //console.log(droppedElement);

    e.target.appendChild(droppedElement);

    droppedElement.classList.remove("hide");

    e.dataTransfer.clearData();
  });
}*/

/*document.addEventListener("dragend", function (event) {});

document.addEventListener("dragover", function (event) {});

document.addEventListener("drop", function (event) {
  event.preventDefault();
  if (event.target.className == "droptarget") {
    let data = event.dataTransfer.getData("Text");

    event.target.appendChild(document.getElementById(data));
  }
});*/
