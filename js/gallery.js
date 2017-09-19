"use strict";
$(document).ready(function(){
    var totImages = 22;
    var filePath = "../images/pictures/img";
    var columnBeg = '<div>';
    var tag = '<img src = "'; 
    var columnEnd = '</div>';
    for(var i = 1; i <= totImages; i += 1){
        $('#myGalleryDiv').append(columnBeg + tag + filePath + i + '.jpg"' + ' alt="img' + i + '">' + columnEnd);
        
    }
});