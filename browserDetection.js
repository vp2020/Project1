function detectBrowser() {
    if (navigator.userAgent.indexOf("Chrome") != -1) {
    } else if (navigator.userAgent.indexOf("Safari") != -1) {
        window.location.href = "https://www.google.com/chrome/browser/";
    } else if (navigator.userAgent.indexOf("Firefox") != -1) {
    } else if ((navigator.userAgent.indexOf("MSIE") != -1) || (!!document.documentMode == true))
    {
        if((navigator.userAgent.indexOf("MSIE 7.")!=-1)){
            alert("IE 7 Detected");
        }
        else{
            alert("IE Browser");
        }
    }
    else {
        alert("Get some known browser!");

    }
}