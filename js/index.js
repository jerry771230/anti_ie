/**
 * detect IE
 * returns version of IE or false, if browser is not Internet Explorer
 */
function detectIEVersion() {
    var ua = window.navigator.userAgent;

    var msie = ua.indexOf('MSIE ');
    if (msie > 0) {
        // IE 10 or older => return version number
        return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
    }

    var trident = ua.indexOf('Trident/');
    if (trident > 0) {
        // IE 11 => return version number
        var rv = ua.indexOf('rv:');
        return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
    }

    var edge = ua.indexOf('Edge/');
    if (edge > 0) {
        // Edge (IE 12+) => return version number
        return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
    }

    // other browser
    return false;
}

function detectIE() {
    var ua = window.navigator.userAgent;

    var msie = ua.indexOf('MSIE ');
    var trident = ua.indexOf('Trident/');
    if (msie > 0 || trident > 0) {
        // IE 10 or older => return version number
        return true;
    }

    // other browser
    return false;
}

$(function() {
    if (!detectIE()) {

        // 彈出遮罩
        $("#bg").css({
            display: "block",
            height: $(window).height(),
            'background-color': '#cccccc'
        });

        $('body').height($(window).height()).css({
            overflow: 'hidden'
        });
    }

});
