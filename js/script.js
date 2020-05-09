$(document).ready(function(){
    $('.info-list li').click(function(){
        $(this).addClass('selected').siblings('li').removeClass('selected')
        console.log($(this).data('class'))
        $('.info-content div').hide();
        $('.' + $(this).data('class')).fadeIn(1000)
        // $('.' + $(this).data('class')).slideDown(1000);
    });
});