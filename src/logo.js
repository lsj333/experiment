import $ from "jquery";

export function logo() {
    var $logo = $("<div class=logo>Richmond (v0001)</div>");
    //$logo.offset({top: "100px", left: "100px"});
    var $body = $("body");
    $body.append($logo);
}

