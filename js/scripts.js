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

});
// pdf

(function($){
    $.fn.createPdf = function(parametros) {
        
        var config = {              
            'fileName':'html-to-pdf'
        };
        
        if (parametros){
            $.extend(config, parametros);
        }                            

        var quotes = document.getElementById($(this).attr('id'));

        html2canvas(quotes, {
            onrendered: function(canvas) {
                var pdf = new jsPDF('p', 'pt', 'letter');

                for (var i = 0; i <= quotes.clientHeight/980; i++) {
                    var srcImg  = canvas;
                    var sX      = 0;
                    var sY      = 980*i;
                    var sWidth  = 1200;
                    var sHeight = 980;
                    var dX      = 0;
                    var dY      = 0;
                    var dWidth  = 1200;
                    var dHeight = 980;

                    window.onePageCanvas = document.createElement("canvas");
                    onePageCanvas.setAttribute('width', 1500);
                    onePageCanvas.setAttribute('height', 980);
                    var ctx = onePageCanvas.getContext('2d');
                    ctx.drawImage(srcImg,sX,sY,sWidth,sHeight,dX,dY,dWidth,dHeight);

                    var canvasDataURL = onePageCanvas.toDataURL("image/png", 1.0);
                    var width         = onePageCanvas.width;
                    var height        = onePageCanvas.clientHeight;

                    if (i > 0) {
                        pdf.addPage(612, 791);
                    }

                    pdf.setPage(i+1);
                    pdf.addImage(canvasDataURL, 'PNG', 20, 40, (width*.62), (height*.62));
                }

                pdf.save(config.fileName);
            }
        });
    };
})(jQuery);
 

function createPDF() {
    $('#renderPDF').createPdf({
        'fileName' : 'Grade Engenharia de Computação'
    });
}