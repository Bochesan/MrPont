var header = document.querySelector("header");
var main = document.querySelector("main");

var headerToggle = new Headroom(header,{
            onTop: function() {
                //console.log("111");
                main.style.paddingTop = "0px";
            },
            onNotTop: function() {
                //console.log("222");
                main.style.paddingTop = $(header).css('height');
            }
        });
headerToggle.init();
