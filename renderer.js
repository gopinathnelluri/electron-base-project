// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
console.log("heeeee");
sites=[];
function update(){
        var req = new XMLHttpRequest();
          req.open('GET', 'https://nomining-a7e80.firebaseio.com/sites.json', false);
          req.send(null);
          if (req.status == 200) {
             // console.log(req.responseText);
              var jsonObject = JSON.parse(req.responseText);
               console.log(jsonObject);
               this.sites= jsonObject;
              }
              return "127.0.0.1";
    }

function protect(){
        var hostile = require('hostile')
        for (var index in sites) {
            hostile.set('127.0.0.1', sites[index], function (err) {
              if (err) {
                console.error(err)
              } else {
                console.log('set /etc/hosts successfully!')
              }
            })
        }
    }


function reset(){
        var hostile = require('hostile')
        for (var index in sites) {
            hostile.remove('127.0.0.1', sites[index], function (err) {
              if (err) {
                console.error(err)
              } else {
                console.log('set /etc/hosts successfully!')
              }
            })
        }
    }


function run(){
    console.log("hello");
    update();
    protect();
}

document.getElementById("cd1").style.display = "none";
document.getElementById("cd2").style.display = "none";
document.getElementById("cd3").style.display = "none";
document.getElementById("cd0").style= "border-bottom-left-radius: 8px; border-bottom-right-radius: 8px;";

function onRadioClick(){
  if(document.querySelector('input[name="payment"]:checked').value == "pp"){
      document.getElementById("cd1").style.display = "none";
      document.getElementById("cd2").style.display = "none";
      document.getElementById("cd3").style.display = "none";
      document.getElementById("cd0").style= "border-bottom-left-radius: 8px; border-bottom-right-radius: 8px;";
  } else {
      document.getElementById("cd1").style.display = "block";
      document.getElementById("cd2").style.display = "block";
      document.getElementById("cd3").style.display = "block";
      document.getElementById("cd0").style= "border-bottom-left-radius: 0px; border-bottom-right-radius: 0px;"; 
  }
  
}

var currentWindow=1;

function displayContent(n){
    if(n == 1){
      currentWindow = 1;
      document.getElementById("displayContent2").style.display = "none";
      document.getElementById("displayContent3").style.display = "none";
      document.getElementById("displayContent1").style.display = "block";
    } else if(n == 2){
      currentWindow = 2;
      document.getElementById("displayContent3").style.display = "none";
      document.getElementById("displayContent1").style.display = "none";
      document.getElementById("displayContent2").style.display = "block";
    }  else if(n == 3){
      currentWindow = 3;
      document.getElementById("displayContent2").style.display = "none";
      document.getElementById("displayContent1").style.display = "none";
      document.getElementById("displayContent3").style.display = "block";
    }  

  }

const { remote } = require('electron')

function closeapp(){
  
  remote.BrowserWindow.getFocusedWindow().close();
}


function minimizeapp(){
  remote.BrowserWindow.getFocusedWindow().minimize();
  setTimeout(check, 1000); 
}

function check(){
  document.getElementById("minapp").classList.remove("nav__item--current");
  if(currentWindow == 2){
    document.getElementById("btn22").classList.add("nav__item--current");
    document.getElementById("btn11").classList.remove("nav__item--current");
    document.getElementById("btn33").classList.remove("nav__item--current");
    document.getElementById("btn2").click();
  } else if(currentWindow == 3){
    document.getElementById("btn33").classList.add("nav__item--current");
    document.getElementById("btn11").classList.remove("nav__item--current");
    document.getElementById("btn22").classList.remove("nav__item--current");
    document.getElementById("btn3").click();
  } else {
    document.getElementById("btn11").classList.add("nav__item--current");
    document.getElementById("btn22").classList.remove("nav__item--current");
    document.getElementById("btn33").classList.remove("nav__item--current");
    document.getElementById("btn1").click();
  }
}

  


  

 
