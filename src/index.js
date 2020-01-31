import _ from "lodash";
import $ from "jquery";
import * as thing from "./my_library.js";
//import * as THREE from "three";


function component() {
    const element = document.createElement('div');
    //var element = $("<div></div>");
  
    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack', "by Lachlan", "version 1.006"], ' ');

  
    return element;
  }
  
  document.body.appendChild(component());

$(document).ready(function() {
    console.log("got here");
    var value = thing.my_function(5);
    var $div = $("<div>hello " + value + " world</div>");
    var $body = $("body");
    $body.append($div);

    thing.display();



});
