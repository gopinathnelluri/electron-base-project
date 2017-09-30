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

