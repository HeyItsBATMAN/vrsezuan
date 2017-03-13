$(document).ready()

function round90(x) {
    return Math.ceil(x / 90) * 90;
}

function distance3d(point1, point2) {
    return Math.sqrt(Math.pow(point1.x - point2.x, 2) + Math.pow(point1.y - point2.y, 2) + Math.pow(point1.z - point2.z, 2));
}

function makeAllVisible() {
    for (i = 0; i < document.querySelectorAll('.mensch').length; i++) {
        document.querySelectorAll('.mensch')[i].setAttribute('visible', 'true');
    }
}

///////////
// Story //
///////////

var storyPoint = 1
var story = {
    1: {
        char: "camera",
        source: "jason1-1.png"
    },
    2: {
        char: "camera",
        source: "jason1-2.png"
    },
    3: {
        char: "camera",
        source: "jason1-3.png"
    },
    4: {
        char: "camera",
        source: "jason1-4.png"
    },
    5: {
        char: "Gott",
        source: "jason2.png"
    },
    6: {
        char: "camera",
        source: "jason3-1.png"
    },
    7: {
        char: "camera",
        source: "jason3-2.png"
    },
    8: {
        char: "Gott",
        source: "jason4.png"
    },
    9: {
        char: "camera",
        source: "jason5-1.png"
    },
    10: {
        char: "camera",
        source: "jason5-2.png"
    },
    11: {
        char: "Gott",
        source: "jason6.png"
    },
    12: {
        char: "camera",
        source: "jason7.png"
    },
    13: {
        char: "Gott",
        source: "jason8.png"
    },
    14: {
        char: "camera",
        source: "jason9.png"
    },
    15: {
        char: "Gott",
        source: "jason10.png"
    },
    16: {
        char: "Gott",
        source: "jason11.png"
    },
    17: {
        char: "Gott",
        source: "jason12.png"
    },
    18: {
        char: "Gott",
        source: "jason13.png"
    },
    19: {
        char: "Gott",
        source: "jason14.png"
    },
    20: {
        char: "Gott",
        source: "jason15.png"
    },
    21: {
        char: "Chow",
        source: "jason16.png"
    },
    22: {
        char: "Chow",
        source: "jason17.png"
    },
    23: {
        char: "camera",
        source: "jason18.png"
    },
    24: {
        char: "Chow",
        source: "jason19.png"
    },
    25: {
        char: "camera",
        source: "jason20.png"
    },
    26: {
        char: "Gott",
        source: "jason21.png"
    },
    27: {
        char: "camera",
        source: "jason22-1.png"
    },
    28: {
        char: "camera",
        source: "jason22-2.png"
    },
    29: {
        char: "Gott",
        source: "jason23.png"
    },
    30: {
        char: "Gott",
        source: "jason24.png"
    },
    31: {
        char: "Gott",
        source: "jason25.png"
    },
    32: {
        char: "Gott",
        source: "jason26.png"
    },
    33: {
        char: "Gott",
        source: "jason27.png"
    },
    34: {
        char: "Gott",
        source: "jason28.png"
    },
    35: {
        char: "Gott",
        source: "jason29.png"
    },
    36: {
        char: "Gott",
        source: "jason30.png"
    },
    37: {
        char: "Gott",
        source: "jason31.png"
    },
    38: {
        char: "Gott",
        source: "jason32.png"
    },
    39: {
        char: "camera",
        source: "jason33.png"
    },
    40: {
        char: "camera",
        source: "jason34.png"
    },
    41: {
        char: "Peng",
        source: "jason35.png"
    },
    42: {
        char: "camera",
        source: "jason36.png"
    },
    43: {
        char: "Peng",
        source: "jason37.png"
    },
    44: {
        char: "camera",
        source: "jason38.png"
    },
    45: {
        char: "Gott",
        source: "jason39.png"
    },
    46: {
        char: "camera",
        source: "jason40.png"
    },
    47: {
        char: "Gott",
        source: "jason41.png"
    },
    48: {
        char: "Gott",
        source: "jason42.png"
    },
    49: {
        char: "Gott",
        source: "jason43.png"
    },
    50: {
        char: "Gott",
        source: "jason44.png"
    },
    51: {
        char: "camera",
        source: "jason45.png"
    },
    52: {
        char: "Gott",
        source: "jason46.png"
    },
    53: {
        char: "Gott",
        source: "jason47.png"
    },
    54: {
        char: "Gott",
        source: "jason48.png"
    },
    55: {
        char: "Gott",
        source: "jason49.png"
    },
    56: {
        char: "Gott",
        source: "jason50.png"
    },
    57: {
        char: "Gott",
        source: "jason51.png"
    },
    58: {
        char: "Gott",
        source: "jason52.png"
    },
    59: {
        char: "Gott",
        source: "jason53.png"
    },
    60: {
        char: "Gott",
        source: "jason54.png"
    },
    61: {
        char: "Gott",
        source: "jason55.png"
    },
    62: {
        char: "camera",
        source: "b1.png"
    },
    63: {
        char: "Mengo",
        source: "b2.png"
    },
    64: {
        char: "camera",
        source: "b3.png"
    },
    65: {
        char: "Mengo",
        source: "b4.png"
    },
    66: {
        char: "camera",
        source: "b5.png"
    },
    67: {
        char: "Mengo",
        source: "b6.png"
    },
    68: {
        char: "camera",
        source: "b7.png"
    },
    69: {
        char: "Mengo",
        source: "b8-1.png"
    },
    70: {
        char: "Mengo",
        source: "b8-2.png"
    },
    71: {
        char: "camera",
        source: "b9-1.png"
    },
    72: {
        char: "camera",
        source: "b9-2.png"
    },
    73: {
        char: "Mengo",
        source: "b10-1.png"
    },
    74: {
        char: "Mengo",
        source: "b10-2.png"
    },
    75: {
        char: "camera",
        source: "b11-1.png"
    },
    76: {
        char: "camera",
        source: "b11-2.png"
    },
    77: {
        char: "Gott",
        source: "b12.png"
    },
    78: {
        char: "camera",
        source: "b13-1.png"
    },
    79: {
        char: "camera",
        source: "b13-2.png"
    },
    80: {
        char: "Gott",
        source: "b14.png"
    },
    81: {
        char: "camera",
        source: "b15.png"
    },
    82: {
        char: "Gott",
        source: "b16-1.png"
    },
    83: {
        char: "Gott",
        source: "b16-2.png"
    },
    84: {
        char: "Gott",
        source: "b17.png"
    },
    85: {
        char: "Gott",
        source: "b18.png"
    },
    86: {
        char: "Gott",
        source: "b19.png"
    },
    87: {
        char: "Gott",
        source: "b20.png"
    },
    88: {
        char: "Gott",
        source: "b21.png"
    },
    89: {
        char: "Gott",
        source: "b22.png"
    },
    90: {
        char: "Gott",
        source: "b23.png"
    },
    91: {
        char: "Gott",
        source: "b24-1.png"
    },
    92: {
        char: "Gott",
        source: "b24-2.png"
    },
    93: {
        char: "Gott",
        source: "b25.png"
    },
    94: {
        char: "Gott",
        source: "b26.png"
    },
    95: {
        char: "ShenTe",
        source: "b27-1.png"
    },
    96: {
        char: "ShenTe",
        source: "b27-2.png"
    },
    97: {
        char: "camera",
        source: "b28.png"
    },
    98: {
        char: "ShenTe",
        source: "b29.png"
    },
    99: {
        char: "camera",
        source: "b30-1.png"
    },
    100: {
        char: "camera",
        source: "b30-2.png"
    },
    101: {
        char: "ShenTe",
        source: "b31-1.png"
    },
    102: {
        char: "ShenTe",
        source: "b31-2.png"
    },
    103: {
        char: "camera",
        source: "b32-1.png"
    },
    104: {
        char: "camera",
        source: "b32-2.png"
    },
    105: {
        char: "ShenTe",
        source: "b33-1.png"
    },
    106: {
        char: "ShenTe",
        source: "b33-2.png"
    },
    107: {
        char: "camera",
        source: "b34.png"
    },
    108: {
        char: "ShenTe",
        source: "b35-1.png"
    },
    109: {
        char: "ShenTe",
        source: "b35-2.png"
    },
    110: {
        char: "camera",
        source: "b36.png"
    },
    111: {
        char: "ShenTe",
        source: "b37-1.png"
    },
    112: {
        char: "ShenTe",
        source: "b37-2.png"
    },
    113: {
        char: "Gott",
        source: "b38.png"
    },
    114: {
        char: "camera",
        source: "b39.png"
    },
    115: {
        char: "Gott",
        source: "b40.png"
    },
    116: {
        char: "camera",
        source: "b41-1.png"
    },
    117: {
        char: "camera",
        source: "b41-2.png"
    },
    118: {
        char: "camera",
        source: "b42.png"
    },
    119: {
        char: "Gott",
        source: "b43.png"
    },
    120: {
        char: "camera",
        source: "b44.png"
    },
    121: {
        char: "Gott",
        source: "b45.png"
    },
    122: {
        char: "Gott",
        source: "b46.png"
    },
    123: {
        char: "camera",
        source: "b47.png"
    },
    124: {
        char: "Gott",
        source: "b48.png"
    },
    125: {
        char: "Gott",
        source: "b49-1.png"
    },
    126: {
        char: "Gott",
        source: "b49-2.png"
    },
    127: {
        char: "Gott",
        source: "b50.png"
    },
    128: {
        char: "camera",
        source: "b51-1.png"
    },
    129: {
        char: "camera",
        source: "b51-2.png"
    },
    130: {
        char: "camera",
        source: "b51-3.png"
    },
    131: {
        char: "ShenTe",
        source: "b52-1.png"
    },
    132: {
        char: "ShenTe",
        source: "b52-2.png"
    },
    133: {
        char: "Gott",
        source: "b53.png"
    },
    134: {
        char: "Gott",
        source: "b54.png"
    },
    135: {
        char: "Gott",
        source: "b55.png"
    }
};

(function animTextbox() {
    if (story[storyPoint]) {
        var cdistance = distance3d($('#' + story[storyPoint].char)[0].getAttribute('position'), $('#camera')[0].getAttribute('position'));
        if (parseInt(cdistance) < 40) {
            if (parseFloat($('#textbox')[0].getAttribute('opacity')) < 1) {
                $('#textbox')[0].setAttribute('opacity', parseFloat($('#textbox')[0].getAttribute('opacity')) + 0.1)
            }
        } else {
            if (parseFloat($('#textbox')[0].getAttribute('opacity')) > 0) {
                $('#textbox')[0].setAttribute('opacity', 0)
            }
        }
    }
    setTimeout(animTextbox, 100);
})();

(function animConversation() {
  if (story[storyPoint]) {
    for (i = 0; i < $('.mensch').length; i++) {
      var prot = $('.mensch')[i].getAttribute('rotation');
      var ppos = $('.mensch')[i].getAttribute('position');
      var cpos = $('#camera')[0].getAttribute('position');

      var angleDeg = Math.atan2(cpos.z - ppos.z, cpos.x - ppos.x) * 180 / Math.PI;
      if (prot && ppos && cpos) {
        $('.mensch')[i].setAttribute('rotation',{x: prot.x, y: 90-angleDeg, z: prot.z});
      }
    }
  }
  setTimeout(animConversation,10);
})();

var arrowHeight = 0;
var arrowUp = true;
(function animArrow() {
    if (story[storyPoint]) {
        var ppos = $('#' + story[storyPoint].char)[0].getAttribute('position');
        var arot = $('#arrow')[0].getAttribute('rotation');

        if (arrowHeight >= 5) {
            arrowUp = false;
        } else if (arrowHeight <= 0) {
            arrowUp = true;
        }

        if (arrowUp) {
            arrowHeight += 0.025;
        } else {
            arrowHeight -= 0.025;
        }

        if (arot) {
            $('#arrow')[0].setAttribute('position', {
                x: ppos.x,
                y: 20 + arrowHeight,
                z: ppos.z
            });
            $('#arrow')[0].setAttribute('rotation', {
                x: -90,
                y: arot.y + 1,
                z: 0
            });
        }
        setTimeout(animArrow, 10);
    }
})();

var switchingChar = false;
var movingChar = false;
var target;

/*document.querySelector('#box').addEventListener('mouseup', function (evt) {
  var randomIndex = Math.floor(Math.random() * (9 - 0 + 1)) + 0;
  this.setAttribute('material', 'color', '#' + randomIndex+ randomIndex+ randomIndex+ randomIndex+ randomIndex+ randomIndex);
  console.log('I was clicked at: ', evt.detail.intersection.point);
});*/

$('#my-cursor')[0].addEventListener('mouseup', function(evt) {
    var cdistance = distance3d($('#' + story[storyPoint].char)[0].getAttribute('position'),$('#camera')[0].getAttribute('position'));
    console.log(cdistance);
    if (parseInt(cdistance) < 40) {
        storyPoint++;
        $('#textbox')[0].setAttribute('src', 'textboxen-story/' + story[storyPoint].source)
        console.log(storyPoint);
    } else {
        setTimeout(function() {
            moveChar(evt.detail.target);
        }, 500);
    }
});

function moveChar(target) {
    if (switchingChar == false && movingChar == false) {
        makeAllVisible();
        movingChar = true;
        cpos = $('#camera')[0].getAttribute('position');
        pos = target.getAttribute('position');
        var tweenable = new Tweenable();
        tweenable.tween({
            from: {
                x: cpos.x,
                y: cpos.y,
                z: cpos.z
            },
            to: {
                x: pos.x,
                y: pos.y + 8,
                z: pos.z
            },
            duration: (distance3d(cpos, pos) * 10),
            easing: 'easeInOutQuad',
            step: function() {
                $('#camera')[0].setAttribute('position', {
                    x: tweenable.get().x,
                    y: tweenable.get().y,
                    z: tweenable.get().z
                });
            },
            finish: function() {
                movingChar = false;
            }
        });
        $('#camera')[0].setAttribute('position', {
            x: pos.x,
            y: pos.y + 8,
            z: pos.z
        });
    }
}


var textboxes = [];
for (i = 0; i < document.querySelectorAll('.mensch').length; i++) {
    if (document.querySelectorAll('.mensch')[i].childNodes.length > 0) {
        console.log(document.querySelectorAll('.mensch')[i].firstChild.textContent);
        textboxes[i] = document.querySelectorAll('.mensch')[i].firstChild.textContent;
    }
}

var hitbox = [];
for (i = 0; i < document.querySelectorAll('.mensch').length; i++) {
    var mensch = document.querySelectorAll('.mensch')[i];
    hitbox[i] = document.createElement('a-box');
    hitbox[i].setAttribute('class', 'menschhitbox');
    hitbox[i].setAttribute('position', {
        x: 0,
        y: 7,
        z: 0
    });
    hitbox[i].setAttribute('scale', {
        x: 10,
        y: 15,
        z: 10
    });
    hitbox[i].setAttribute('material', {
        opacity: 0.0,
        wireframe: false
    });
    hitbox[i].setAttribute('id', i);
    hitbox[i].addEventListener('mouseup', function(evt) {
        console.log(evt.detail);
        target = evt.detail.target;
        /*
        charSwitch(evt.detail.target);
        */
    });
    hitbox[i].addEventListener('mouseenter', function(evt) {
        //textboxes[evt.detail.target.getAttribute('id')]
        if (switchingChar == false && movingChar == false) {
            var cdistance = distance3d(document.querySelectorAll('.mensch')[evt.detail.target.getAttribute('id')].getAttribute('position'), document.querySelector('#camera').getAttribute('position'));
            console.log(cdistance);
            if (parseInt(cdistance) < 40) {
                document.querySelector('a-image#' + textboxes[evt.detail.target.getAttribute('id')]).setAttribute('visible', 'true');
            }
        }
    });
    hitbox[i].addEventListener('mouseleave', function(evt) {
        document.querySelector('a-image#' + textboxes[evt.detail.target.getAttribute('id')]).setAttribute('visible', 'false');
    });
    mensch.appendChild(hitbox[i], null);
}

function charSwitch(inputHitbox) {
    if (switchingChar == false && movingChar == false) {
        for (i = 0; i < document.querySelectorAll('a-image').length; i++) {
            document.querySelectorAll('a-image')[i].setAttribute('visible', 'false');
        }
        switchingChar = true;
        camera = document.querySelector('#camera');
        target = document.querySelectorAll('.mensch')[inputHitbox.getAttribute('id')];
        camera.setAttribute('look-controls-enabled', 'false');
        cbr = camera.getAttribute('rotation');
        cbp = camera.getAttribute('position');
        tr = target.getAttribute('rotation');
        tp = target.getAttribute('position');
        var tweenable = new Tweenable();
        tweenable.tween({
            from: {
                rx: cbr.x,
                ry: cbr.y,
                rz: cbr.z,
                px: cbp.x,
                py: cbp.y,
                pz: cbp.z
            },
            to: {
                rx: -90,
                ry: round90(cbr.y),
                rz: 0,
                px: cbp.x,
                py: 20,
                pz: cbp.z
            },
            duration: 500,
            easing: 'easeInOutQuint',
            start: function() {
                makeAllVisible();
            },
            step: function() {
                camera.setAttribute('rotation', {
                    x: tweenable.get().rx,
                    y: tweenable.get().ry,
                    z: tweenable.get().rz
                });
                camera.setAttribute('position', {
                    x: tweenable.get().px,
                    y: tweenable.get().py,
                    z: tweenable.get().pz
                });
            },
            finish: function() {
                setTimeout(tweenable.tween({
                    from: {
                        px: cbp.x,
                        py: 20,
                        pz: cbp.z
                    },
                    to: {
                        px: cbp.x,
                        py: 50,
                        pz: cbp.z
                    },
                    duration: 1000,
                    easing: 'easeInOutQuint',
                    step: function() {
                        camera.setAttribute('position', {
                            x: tweenable.get().px,
                            y: tweenable.get().py,
                            z: tweenable.get().pz
                        });
                    },
                    finish: function() {
                        setTimeout(tweenable.tween({
                            from: {
                                px: cbp.x,
                                py: 50,
                                pz: cbp.z,
                                fov: 50
                            },
                            to: {
                                px: cbp.x,
                                py: 90,
                                pz: cbp.z,
                                fov: 110
                            },
                            duration: 1000,
                            easing: 'easeInOutQuint',
                            step: function() {
                                camera.setAttribute('position', {
                                    x: tweenable.get().px,
                                    y: tweenable.get().py,
                                    z: tweenable.get().pz
                                });
                                camera.setAttribute('fov', tweenable.get().fov);
                            },
                            finish: function() {
                                setTimeout(tweenable.tween({
                                    from: {
                                        px: cbp.x,
                                        py: 90,
                                        pz: cbp.z
                                    },
                                    to: {
                                        px: tp.x,
                                        py: 90,
                                        pz: tp.z
                                    },
                                    duration: 1000,
                                    easing: 'easeInOutQuint',
                                    step: function() {
                                        camera.setAttribute('position', {
                                            x: tweenable.get().px,
                                            y: tweenable.get().py,
                                            z: tweenable.get().pz
                                        });
                                    },
                                    finish: function() {
                                        setTimeout(tweenable.tween({
                                            from: {
                                                px: tp.x,
                                                py: 90,
                                                pz: tp.z,
                                                rx: -90,
                                                ry: round90(cbr.y),
                                                rz: cbr.z,
                                                fov: 110
                                            },
                                            to: {
                                                px: tp.x,
                                                py: cbp.y,
                                                pz: tp.z,
                                                rx: 0,
                                                ry: tr.y + 180,
                                                rz: 0,
                                                fov: 50
                                            },
                                            duration: 2000,
                                            easing: 'easeInOutQuint',
                                            step: function() {
                                                camera.setAttribute('rotation', {
                                                    x: tweenable.get().rx,
                                                    y: tweenable.get().ry,
                                                    z: tweenable.get().rz
                                                });
                                                camera.setAttribute('position', {
                                                    x: tweenable.get().px,
                                                    y: tweenable.get().py,
                                                    z: tweenable.get().pz
                                                });
                                                camera.setAttribute('fov', tweenable.get().fov);
                                            },
                                            finish: function() {
                                                target.setAttribute('visible', 'false');
                                                camera.setAttribute('look-controls-enabled', 'true');
                                                switchingChar = false;
                                            }
                                        }), 500);
                                    }
                                }), 500);
                            }
                        }), 500);
                    }
                }), 500);
            }
        });
    }
}
