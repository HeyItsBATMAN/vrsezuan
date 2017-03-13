$(document).ready()

/*
var t0 = performance.now();
doSomething();
var t1 = performance.now();
console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.")
*/


function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (i = 0; i < document.querySelectorAll('.chunk').length; i++) {
    currentchunk = document.querySelectorAll('.chunk')[i];
    currentchunk.setAttribute('material', {
        shader: 'flat'
    });
}

function genClouds() {
    var clouds = document.querySelectorAll('.cloud');

    for (i = 0; i < clouds.length; i++) {
        clouds[i].setAttribute('material', {
            opacity: 0.5
        });
        clouds[i].setAttribute('position', {
            x: getRandomInt(-320, 184),
            y: 80,
            z: getRandomInt(-320, 184)
        });
    }
}

genClouds();

function moveCloud() {
    var pos = this.getAttribute('position');
    if (pos) {
        this.setAttribute('position', {
            x: pos.x + 0.1,
            y: pos.y,
            z: pos.z
        })
        if (pos.x > 184) {
            this.setAttribute('position', {
                x: -320,
                y: pos.y,
                z: pos.z
            });
        }
    }
    //console.log(this.setAttribute('position',{x: 0, y: 80, z: 0}));
}
(function moveRepeat() {
    for (i = 0; i < $('.cloud').length; i++) {
        moveCloud.call($('.cloud')[i]);
    }
    setTimeout(moveRepeat, 16);
})();

/*(function camLog(){
  console.log(document.querySelector('#camera').getAttribute('rotation'));
  setTimeout(camLog,1000);
})();*/

//Credits:
//Niclas
