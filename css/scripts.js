$('#sage-button').click(function() {

    var isDarkCss = $("link[href='css/sage-theme.css']");

    if (isDarkCss.length){
        isDarkCss.remove();
    }else{
        $('head').append('<link type="text/css" rel="stylesheet" media="all" href="css/sage-theme.css">');
    }
});