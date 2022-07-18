$(document).ready(function(){
    $('#close_bt').click(function(){
        $('#popup').css({'display':'none'})
    })
    $('#navi ul li:nth-child(1)').click(function(){
        $('body,html').animate({scrollTop:0},0)
    })
})