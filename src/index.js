import _ from "lodash";
import $ from "jquery";
//import * as THREE from "three";

import * as thing from "./my_library.js";
import * as LOGO from "./logo.js";


$(document).ready(function() {
    var logo = LOGO.logo();
    console.log("got here");
    var value = thing.my_function(5);
    var $div = $("<div>hello " + value + " world</div>");
    var $body = $("body");
    $body.append($div);

    thing.display();
});
