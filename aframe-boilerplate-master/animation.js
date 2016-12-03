$( document ).ready()



function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
//////////
// JUMP //
//////////

var mensch = document.querySelector('.mensch');

var smokeparticle = document.createElement('a-image');
smokeparticle.setAttribute('src','images/comicsmoke.png');
smokeparticle.setAttribute('class','particle');
smokeparticle.setAttribute('opacity',1);
smokeparticle.setAttribute('scale',{x: 0.5, y:0.5, z:0.5});
smokeparticle.setAttribute('position',{
    x:mensch.getAttribute('position').x-0.5 ,
    y:mensch.getAttribute('position').y ,
    z:mensch.getAttribute('position').z+0.5
});

var bushes = [];
var landscapeobjects = ['bush_small','cherry_tree_hanging_1','cherry_tree_medium_1','cherry_tree_medium_2'];
for (i = 0; i < 5; i++){
  var scale = getRandomArbitrary(0.2,0.3);
  var rotation = {x: 0, y: getRandomInt(0,90), z:0};
  var position = {x: getRandomInt(-20,20),y:0,z: getRandomInt(-20,20)};
  var number = getRandomInt(0,3);
  bushes[i] = document.createElement('a-obj-model');
  bushes[i].setAttribute('class','landscape');
  bushes[i].setAttribute('src','#'+landscapeobjects[number]+'-obj');
  bushes[i].setAttribute('mtl','#'+landscapeobjects[number]+'-mtl');
  bushes[i].setAttribute('scale',{x: scale, y: scale, z: scale});
  bushes[i].setAttribute('position', position);
  bushes[i].setAttribute('rotation', rotation);
  document.querySelector('#scene').appendChild(bushes[i], null);
}

document.querySelector('#scene').appendChild(smokeparticle, null);

var startpos = mensch.getAttribute('position');
function smokeopacity() {
  smokeparticle.setAttribute('position',{
      x:mensch.getAttribute('position').x ,
      y:startpos.y+0.3 ,
      z:mensch.getAttribute('position').z
  });
var tweenable = new Tweenable();
tweenable.tween({
    from: { opacity: 1},
    to: { opacity: 0},
    duration: 300,
    step: function() {smokeparticle.setAttribute('opacity',tweenable.get().opacity);}
});}

(function jump() {

var tweenable = new Tweenable();
tweenable.tween({
  from: { y: startpos.y  },
  to:   { y: startpos.y+0.1 },
  duration: 150,
  easing: 'easeInOutQuad',
  step: function () { mensch.setAttribute('position',{x:mensch.getAttribute('position').x,y:tweenable.get().y,z:mensch.getAttribute('position').z});     },
  finish: function () { tweenable.tween({
  from: { y: startpos.y+0.1  },
  to:   { y: startpos.y },
  duration: 150,
  easing: 'easeInOutQuad',
  step: function () { mensch.setAttribute('position',{x:mensch.getAttribute('position').x,y:tweenable.get().y,z:mensch.getAttribute('position').z});     }
}); }
});
smokeopacity();
setTimeout(jump,300);
})();

function run(goalx, goalz, beginpos) {
var tweenable = new Tweenable();
tweenable.tween({
  from: {x: beginpos.x, z: beginpos.z},
  to: {x: goalx, z: goalz},
  duration: 2000,
  step: function() { mensch.setAttribute('position',{x:tweenable.get().x,y:mensch.getAttribute('position').y,z:tweenable.get().z}); }
});
}

function rotate(beginr,goalr) {
  var tweenable = new Tweenable();
  tweenable.tween({
    from: {y: beginr.y},
    to: {y: goalr},
    duration: 400,
    step: function() { mensch.setAttribute('rotation',{x:0,y:tweenable.get().y,z:0});}
  });
}

function near(x,y){
  return x > y-0.5 && x < y+0.5;
}

/*(function thecircles(){
  mensch.setAttribute('rotation',{x:0, y:mensch.getAttribute('rotation').y+1,z:0});
  //mensch.setAttribute('position',{x:mensch.getAttribute('position').x+0.1, y:mensch.getAttribute('position').y,z:mensch.getAttribute('position').z});
  setTimeout(thecircles,20);
})();*/

(function runninincircles(){
var beginpos = mensch.getAttribute('position');
var beginrot = mensch.getAttribute('rotation');
if (near(beginpos.x,-1) && near(beginpos.z,-3)) {rotate(beginrot,90);run(2,-3,beginpos);}
else if (near(beginpos.x,2)  && near(beginpos.z,-3)) {rotate(beginrot,180);run(2,-6,beginpos);}
else if (near(beginpos.x,2)  && near(beginpos.z,-6)) {rotate(beginrot,270);run(-1,-6,beginpos);}
else if (near(beginpos.x,-1)  && near(beginpos.z,-6)) {rotate(beginrot,359);run(-1,-3,beginpos);setTimeout((function doit(){ mensch.setAttribute('rotation',{x:0,y:0,z:0});} ),2000);}
setTimeout(runninincircles,2100);
})();
