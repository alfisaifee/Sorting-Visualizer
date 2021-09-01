const maxHeight = 50;
var array = [];
let delay = 260;
let algo = "bubble"
let flag = new Boolean(false);

window.onload = init; 

function init(){
  generateRandomArray(getSize());
  displayArray();
  disableStopButton();
}
// generates a new random array of size input
function generateRandomArray(size) {
  array = Array.from({ length: size }, () =>
    Math.ceil(Math.random() * maxHeight)
  );
}

function getSize() {
  return document.getElementById("size_input").value;

}

function displayArray() {
  document.getElementById("visual-container").innerHTML = "";
  array.map((val) =>
    document
      .getElementById("visual-container")
      .appendChild(getHeightDiv(val)));
}

function getHeightDiv(val) {
  var value = val*10;
  var div = document.createElement("div");
  div.classList.add("bar");
  div.style.height = value+'px';
  return div;
}

function delayTime(miliseconds){
  return new Promise(resolve =>{
    setTimeout(()=>{resolve('')}, miliseconds);
  })
}

function swap(el1, el2) {  
  let temp = el1.style.height;    
  el1.style.height = el2.style.height;
  el2.style.height = temp;
  
}

function disableSortButton() {
  document.querySelector("#sort_button").disabled = true;
}

function disableSizeSlider(){
  document.querySelector("#size_input").disabled = true;
}

function disableNewArrayButton(){
  document.querySelector("#new_array_button").disabled = true;
}

function disableStopButton(){
  document.querySelector("#stop_button").disabled = true;
}

function disableSortDropdown(){
  document.querySelector("#sort-select").disabled = true;
}

function disableSpeedSlider(){
  document.querySelector("#speed_input").disabled = true;
}

function enableSortButton(){
  document.querySelector("#sort_button").disabled = false;
}

function enableSizeSlider(){
  document.querySelector("#size_input").disabled = false;
}

function enableNewArrayButton(){
  document.querySelector("#new_array_button").disabled = false;
}

function enableStopButton(){
  document.querySelector("#stop_button").disabled = false;
}

function enableSortDropdown(){
  document.querySelector("#sort-select").disabled = false;
}

function enableSpeedSlider(){
  document.querySelector("#speed_input").disabled = false;
}

function createNewArray(size){
  generateRandomArray(size);
  displayArray();
}

let newArray = document.querySelector('#new_array_button');
newArray.addEventListener("click", function(){
  flag = false;
  createNewArray(getSize());
  enableSizeSlider();
  enableSortDropdown();
  enableSortButton();
  disableStopButton();
})

let arraySize = document.querySelector("#size_input");
arraySize.addEventListener("input",function(){
  createNewArray(parseInt(arraySize.value));
});

let delayInterval = document.querySelector("#speed_input");
delayInterval.addEventListener("input",function(){
  delay = 350-parseInt(delayInterval.value);
})

let selectSortMethod = document.querySelector("#sort-select");
selectSortMethod.addEventListener("change", function(){
  algo = selectSortMethod.value;
})


let sortButton = document.querySelector("#sort_button");
sortButton.addEventListener("click",function(){
  flag = false;
  enableStopButton();
  enableSpeedSlider();
  disableSortButton();
  disableSortDropdown();
  disableNewArrayButton();
  disableSizeSlider();
  console.log(algo);
  if(algo === "bubble"){
    bubbleSort();
  }else if(algo === "selection"){
    selectionSort();
  }else if(algo === "insertion"){
    insertionSort();
  }else if(algo === "merge"){
    mergeSort();
  }else{
    quickSort();
  }
});

let stopButton = document.querySelector("#stop_button");
stopButton.addEventListener("click",function(){   
  disableSizeSlider();
  disableStopButton();
  disableSortDropdown();
  disableSpeedSlider();
  enableNewArrayButton();
  flag = true;
})




