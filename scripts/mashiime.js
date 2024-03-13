// Scroll Animation

window.onscroll = function() {scrollFunction()};
        
function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("header").style.fontSize = "20px";
    document.getElementById("filter").style.marginTop = "75px";
    document.getElementById("filter").style.padding = "4px 14px 4px 14px";
    document.getElementById("MQ").src = "./images/MQ2.png";
    document.getElementById("MQ").style.height = "2em";
    } else {
    document.getElementById("header").style.fontSize = "45px";
    document.getElementById("filter").style.marginTop = "120px";
    document.getElementById("filter").style.padding = "10px 14px 10px 14px";
    document.getElementById("MQ").src = "./images/MQ.png";
    document.getElementById("MQ").style.height = "3.5em";
    }
}

// Order Button

function OrderBtn() {
  if (document.getElementsByClassName("filtrs").disabled= false) { 
    document.getElementsByClassName("mq").disabled= true;
    document.getElementsByClassName("projtrs").disabled= true ;
  }
  else {
    document.getElementsByClassName("filtrs").disabled= true;  
    document.getElementsByClassName("mq").disabled= false;
    document.getElementsByClassName("projtrs").disabled= false; 
  }

}

//Remonter la page après click
function Up(){
   $("html, body").animate({scrollTop: 0},"slow");
}


// Filter Selection

filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) AddClass(x[i], "show");
  }
}

// Show filtered elements
function AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1); 
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current control button (highlight it)
//*
var btnContainer = document.getElementById("filter");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace("active", "");
    this.className += "active";
  });
}

// Animation posts

    //EVO

function changeImageEVO() {
  if (document.getElementById("imgEVO").src = "./images/Home/EVO.jpg"){
      document.getElementById("imgEVO").src = "./images/Posts/EVO1.jpg";
  } else {
      document.getElementById("imgEVO").src = "./images/Home/EVO.jpg";
  } 
}

function changeImageEVO2() {
  if (document.getElementById("imgEVO").src = "./images/Posts/EVO1.jpg"){
      document.getElementById("imgEVO").src = "./images/Home/EVO.jpg";
  } else {
      document.getElementById("imgEVO").src = "./images/Posts/EVO1.jpg";
  }
}

var hovEVO = document.getElementById("hovEVO");

function suppHoverEVO() {
  hovEVO.classList.remove('hover');
}

function addHoverEVO() {
  hovEVO.classList.add('hover');
}

    //SX

function changeImageSX() {
  if (document.getElementById("imgSX").src = "./images/Home/SX.gif"){
      document.getElementById("imgSX").src = "./images/Posts/SX1.jpg";
  } else {
      document.getElementById("imgSX").src = "./images/Home/SX.gif";
  }
}
function changeImageSX2() {
  if (document.getElementById("imgSX").src = "./images/Posts/SX1.jpg"){
    document.getElementById("imgSX").src = "./images/Home/SX.gif";
  } else {
    document.getElementById("imgSX").src = "./images/Posts/SX1.jpg";
  }
}

function ShowGifSX() {
var x = document.getElementById('imgSX2');
if (x.style.display === 'block') {
  x.style.display = 'none';
} else {
  x.style.display = 'block';
}
}

function HideGifSX() {
var x = document.getElementById('imgSX2');
if (x.style.display === 'none') {
  x.style.display = 'block';
} else {
  x.style.display = 'none';
}
}

var hovSX = document.getElementById("hovSX");
function suppHoverSX() {
  hovSX.classList.remove('hover');
}
function addHoverSX() {
  hovSX.classList.add('hover');
}


  //FRESNAN

function changeImageNAN() {
  if (document.getElementById("imgNAN").src = "./images/Home/FRESNAN.jpg"){
      document.getElementById("imgNAN").src = "./images/Posts/FRESNAN1.jpg";
  } else {
      document.getElementById("imgNAN").src = "./images/Home/FRESNAN.jpg";
  } 
}
function changeImageNAN2() {
  if (document.getElementById("imgNAN").src = "./images/Posts/FRESNAN1.jpg" ){
      document.getElementById("imgNAN").src = "./images/Home/FRESNAN.jpg";
  } else {
      document.getElementById("imgNAN").src = "./images/Posts/FRESNAN1.jpg" ;
  }
}

function ShowGifNAN() {
var x = document.getElementById('imgNAN2');
if (x.style.display === 'block') {
  x.style.display = 'none';
} else {
  x.style.display = 'block';
}
}

function HideGifNAN() {
var x = document.getElementById('imgNAN2');
if (x.style.display === 'none') {
  x.style.display = 'block';
} else {
  x.style.display = 'none';
}
}

var hovNAN = document.getElementById("hovNAN");
function suppHoverNAN() {
  hovNAN.classList.remove('hover');
}
function addHoverNAN() {
  hovNAN.classList.add('hover');
}


  //BER

function changeImageBER() {
  if (document.getElementById("imgBER").src = "./images/Home/BER.jpg"){
      document.getElementById("imgBER").src = "./images/Posts/BER1.jpg";
  } else {
      document.getElementById("imgBER").src = "./images/Home/BER.jpg";
  }
}
function changeImageBER2() {
  if (document.getElementById("imgBER").src = "./images/Posts/BER1.jpg" ){
      document.getElementById("imgBER").src = "./images/Home/BER.jpg";
  } else {
      document.getElementById("imgBER").src = "./images/Posts/BER1.jpg";
  }
}

var hovBER = document.getElementById("hovBER");
function suppHoverBER() {
  hovBER.classList.remove('hover');
}
function addHoverBER() {
  hovBER.classList.add('hover');
}

  //COM

function changeImageCOM() {
  if (document.getElementById("imgCOM").src = "./images/Home/COM.jpg"){
      document.getElementById("imgCOM").src = "./images/Posts/COM1.jpg";
  } else {
      document.getElementById("imgCOM").src = "./images/Home/COM.jpg";
  }
}
function changeImageCOM2() {
  if (document.getElementById("imgCOM").src = "./images/Posts/COM1.jpg" ){
      document.getElementById("imgCOM").src = "./images/Home/COM.jpg";
  } else {
      document.getElementById("imgCOM").src = "./images/Posts/COM1.jpg";
  }
}

var hovCOM = document.getElementById("hovCOM");
function suppHoverCOM() {
  hovCOM.classList.remove('hover');
}
function addHoverCOM() {
  hovCOM.classList.add('hover');
}

  //FL

function changeImageFL() {
  if (document.getElementById("imgFL").src = "./images/Home/FL.gif"){
      document.getElementById("imgFL").src = "./images/Posts/FL1.jpg";
  } else {
      document.getElementById("imgFL").src = "./images/Home/FL.gif";
  } 
}
function changeImageFL2() {
  if (document.getElementById("imgFL").src = "./images/Posts/FL1.jpg" ){
      document.getElementById("imgFL").src = "./images/Home/FL.gif";
  } else {
      document.getElementById("imgFL").src = "./images/Posts/FL1.jpg" ;
  }
}

function ShowGifFL() {
var x = document.getElementById('imgFL2');
if (x.style.display === 'block') {
  x.style.display = 'none';
} else {
  x.style.display = 'block';
}
}

function HideGifFL() {
var x = document.getElementById('imgFL2');
if (x.style.display === 'none') {
  x.style.display = 'block';
} else {
  x.style.display = 'none';
}
}

  var hovFL = document.getElementById("hovFL");
function suppHoverFL() {
  hovFL.classList.remove('hover');
}
function addHoverFL() {
  hovFL.classList.add('hover');
}

  //FRESULB

function changeImageULB() {
  if (document.getElementById("imgULB").src = "./images/Home/FRESULB.jpg"){
      document.getElementById("imgULB").src = "./images/Posts/ULB1.jpg";
  } else {
      document.getElementById("imgULB").src = "./images/Home/FRESULB.jpg";
  } 
}
function changeImageULB2() {
  if (document.getElementById("imgULB").src = "./images/Posts/ULB1.jpg" ){
      document.getElementById("imgULB").src = "./images/Home/FRESULB.jpg";
  } else {
      document.getElementById("imgULB").src = "./images/Posts/ULB1.jpg" ;
  }
}

function ShowGifULB() {
var x = document.getElementById('imgULB2');
if (x.style.display === 'block') {
  x.style.display = 'none';
} else {
  x.style.display = 'block';
}
}

function HideGifULB() {
var x = document.getElementById('imgULB2');
if (x.style.display === 'none') {
  x.style.display = 'block';
} else {
  x.style.display = 'none';
}
}

var hovULB = document.getElementById("hovULB");
function suppHoverULB() {
  hovULB.classList.remove('hover');
}
function addHoverULB() {
  hovULB.classList.add('hover');
}


  //HEL

function changeImageHEL() {
  if (document.getElementById("imgHEL").src = "./images/Home/HEL.jpg"){
      document.getElementById("imgHEL").src = "./images/Posts/HEL1.jpg";
  } else {
      document.getElementById("imgHEL").src = "./images/Home/HEL.jpg";
  }
}
function changeImageHEL2() {
  if (document.getElementById("imgHEL").src = "./images/Posts/HEL1.jpg" ){
      document.getElementById("imgHEL").src = "./images/Home/HEL.jpg";
  } else {
      document.getElementById("imgHEL").src = "./images/Posts/HEL1.jpg";
  }
}

var hovHEL = document.getElementById("hovHEL");
function suppHoverHEL() {
  hovHEL.classList.remove('hover');
}
function addHoverHEL() {
  hovHEL.classList.add('hover');
}

  //IF

function changeImageIF() {
  if (document.getElementById("imgIF").src = "./images/Home/IF.jpg"){
      document.getElementById("imgIF").src = "./images/Posts/IF1.jpg";
  } else {
      document.getElementById("imgIF").src = "./images/Home/IF.jpg";
  }
}
function changeImageIF2() {
  if (document.getElementById("imgIF").src = "./images/Posts/IF1.jpg" ){
      document.getElementById("imgIF").src = "./images/Home/IF.jpg";
  } else {
      document.getElementById("imgIF").src = "./images/Posts/IF1.jpg";
  }
}

var hovIF = document.getElementById("hovIF");
function suppHoverIF() {
  hovIF.classList.remove('hover');
}
function addHoverIF() {
  hovIF.classList.add('hover');
}

  //LZ

function changeImageLZ() {
  if (document.getElementById("imgLZ").src = "./images/Home/LZ.gif"){
      document.getElementById("imgLZ").src = "./images/Posts/LZ1.jpg";
  } else {
      document.getElementById("imgLZ").src = "./images/Home/LZ.gif";
  } 
}
function changeImageLZ2() {
  if (document.getElementById("imgLZ").src = "./images/Posts/LZ1.jpg" ){
      document.getElementById("imgLZ").src = "./images/Home/LZ.gif";
  } else {
      document.getElementById("imgLZ").src = "./images/Posts/LZ1.jpg" ;
  }
}

function ShowGifLZ() {
var x = document.getElementById('imgLZ2');
if (x.style.display === 'block') {
  x.style.display = 'none';
} else {
  x.style.display = 'block';
}
}

function HideGifLZ() {
var x = document.getElementById('imgLZ2');
if (x.style.display === 'none') {
  x.style.display = 'block';
} else {
  x.style.display = 'none';
}
}

  var hovLZ = document.getElementById("hovLZ");
function suppHoverLZ() {
  hovLZ.classList.remove('hover');
}
function addHoverLZ() {
  hovLZ.classList.add('hover');
}

  //PAN

function changeImagePAN() {
  if (document.getElementById("imgPAN").src = "./images/Home/PAN.jpg"){
      document.getElementById("imgPAN").src = "./images/Posts/PAN1.jpg";
  } else {
      document.getElementById("imgPAN").src = "./images/Home/PAN.jpg";
  } 
}
function changeImagePAN2() {
  if (document.getElementById("imgPAN").src = "./images/Posts/PAN1.jpg" ){
      document.getElementById("imgPAN").src = "./images/Home/PAN.jpg";
  } else {
      document.getElementById("imgPAN").src = "./images/Posts/PAN1.jpg" ;
  }
}

function ShowGifPAN() {
var x = document.getElementById('imgPAN2');
if (x.style.display === 'block') {
  x.style.display = 'none';
} else {
  x.style.display = 'block';
}
}

function HideGifPAN() {
var x = document.getElementById('imgPAN2');
if (x.style.display === 'none') {
  x.style.display = 'block';
} else {
  x.style.display = 'none';
}
}

  var hovPAN = document.getElementById("hovPAN");
function suppHoverPAN() {
  hovPAN.classList.remove('hover');
}
function addHoverPAN() {
  hovPAN.classList.add('hover');
}

  //SF

function changeImageSF() {
if (document.getElementById("imgSF").src = "./images/Home/SF.jpg"){
      document.getElementById("imgSF").src = "./images/Posts/SF1.jpg";
  } else {
      document.getElementById("imgSF").src = "./images/Home/SF.jpg";
  }
}
function changeImageSF2() {
  if (document.getElementById("imgSF").src = "./images/Posts/SF1.jpg" ){
      document.getElementById("imgSF").src = "./images/Home/SF.jpg";
  } else {
      document.getElementById("imgSF").src = "./images/Posts/SF1.jpg";
  }
}

var hovSF = document.getElementById("hovSF");
function suppHoverSF() {
  hovSF.classList.remove('hover');
}
function addHoverSF() {
  hovSF.classList.add('hover');
}


  //SUP

function changeImageSUP() {
  if (document.getElementById("imgSUP").src = "./images/Home/SUP.jpg"){
      document.getElementById("imgSUP").src = "./images/Posts/SUP1.jpg";
  } else {
      document.getElementById("imgSUP").src = "./images/Home/SUP.jpg";
  } 
}
function changeImageSUP2() {
  if (document.getElementById("imgSUP").src = "./images/Posts/SUP1.jpg" ){
      document.getElementById("imgSUP").src = "./images/Home/SUP.jpg";
  } else {
      document.getElementById("imgSUP").src = "./images/Posts/SUP1.jpg" ;
  }
}

function ShowGifSUP() {
var x = document.getElementById('imgSUP2');
if (x.style.display === 'block') {
  x.style.display = 'none';
} else {
  x.style.display = 'block';
}
}

function HideGifSUP() {
var x = document.getElementById('imgSUP2');
if (x.style.display === 'none') {
  x.style.display = 'block';
} else {
  x.style.display = 'none';
}
}

  var hovSUP = document.getElementById("hovSUP");
function suppHoverSUP() {
  hovSUP.classList.remove('hover');
}
function addHoverSUP() {
  hovSUP.classList.add('hover');
}


  //TA

function changeImageTA() {
  if (document.getElementById("imgTA").src = "./images/Home/TA.jpg"){
        document.getElementById("imgTA").src = "./images/Posts/TA1.jpg";
    } else {
        document.getElementById("imgTA").src = "./images/Home/TA.jpg";
    }
  }
  function changeImageTA2() {
    if (document.getElementById("imgTA").src = "./images/Posts/TA1.jpg" ){
        document.getElementById("imgTA").src = "./images/Home/TA.jpg";
    } else {
        document.getElementById("imgTA").src = "./images/Posts/TA1.jpg";
    }
  }
  
  var hovTA = document.getElementById("hovTA");
  function suppHoverTA() {
    hovTA.classList.remove('hover');
  }
  function addHoverTA() {
    hovTA.classList.add('hover');
  }

  //ZEP

function changeImageZEP() {
  if (document.getElementById("imgZEP").src = "./images/Home/ZEP.jpg"){
        document.getElementById("imgZEP").src = "./images/Posts/ZEP1.jpg";
    } else {
        document.getElementById("imgZEP").src = "./images/Home/ZEP.jpg";
    }
  }
  function changeImageZEP2() {
    if (document.getElementById("imgZEP").src = "./images/Posts/ZEP1.jpg" ){
        document.getElementById("imgZEP").src = "./images/Home/ZEP.jpg";
    } else {
        document.getElementById("imgZEP").src = "./images/Posts/ZEP1.jpg";
    }
  }
  
  var hovZEP = document.getElementById("hovZEP");
  function suppHoverZEP() {
    hovZEP.classList.remove('hover');
  }
  function addHoverZEP() {
    hovZEP.classList.add('hover');
  }
