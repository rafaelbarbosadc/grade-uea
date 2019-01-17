$('.materia').mouseover(function(e) {
    $(this).addClass('hover');
})

$('.materia').mouseout(function(e) {
    $(this).removeClass('hover');
})

$(document).on('keydown', function(e) {
    console.log(e.which)
    if(e.which == 49) {
        $('.materia.hover').removeClass('cursando');
        $('.materia.hover').toggleClass('concluido')
    }
    if(e.which == 50) {
        $('.materia.hover').removeClass('concluido');
        $('.materia.hover').toggleClass('cursando')
    }
    if(e.which == 51) {
        $('.materia.hover').removeClass('concluido');
        $('.materia.hover').removeClass('cursando');
    }
    if(e.which == 48) {
        $('.materia').removeClass('concluido');
        $('.materia').removeClass('cursando');
    }

})