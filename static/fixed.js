var currentWidth = 0;
function updateLayout() {
    if (window.innerWidth != currentWidth)
    {
        currentWidth = window.innerWidth;

        var orient = currentWidth == 320 ? "portrait" : "landscape";
        $("body").attr("class", orient);
    }
}

function check_latest() {
    var url = localStorage.getItem('latest');
    if (!url) {
        window.location = "index.html";
    } else {
        window.location = url;
    }    
}

function set_latest() {
    if (window.location.href.indexOf("PhoneGap.app/www") > -1) {
        var url =  window.location.href.split("PhoneGap.app/www")[1].substr(1);
    } else {
        var url =  window.location.href.split("phonegap/iphone/www")[1].substr(1);        
    }
    localStorage.setItem('latest',url);
}

$(document).ready(function() {
    setInterval(updateLayout, 400);
})