$(function () {
  $(".btn-finalizar").click(function (e) {
    e.preventDefault();
    var tempo = $('#tempo').val()
    var valor = $('#valor').val()
    var msg = ''
    var trabalho = 0
     
     $('.inputHr').each(function(index){
        trabalho += parseFloat($(this).val())
     })
     var remuneracao = parseInt(trabalho) * parseInt(valor)
    var hrRestante = parseFloat(tempo) - parseFloat(trabalho)
    var hr = hrRestante > 1 ? 'horas' : 'hora'
    if (parseInt(trabalho) > parseInt(tempo)) {
      var exe = parseFloat(trabalho) - parseFloat(tempo)
      msg = '<p>Suas horas de trabalho de '+ tempo +' horas foram excedidas com '+exe+' a mais</p>'+
            '<p>Valor a ser cobrado: '+ remuneracao.toFixed(2)+'</p>'
            $('.inputHr').addClass('valorExcedido')
    } else {
      $('.inputHr').addRemove('valorExcedido')
      msg = '<p>Total de '+trabalho+' horas trabalhado</p>'+
             '<p>Valor a ser cobrado: '+ remuneracao.toFixed(2)+'</p>'+
             '<p>Sobrando '+hrRestante+' '+hr+' de trabalho</p>'
      
    }
    $('#msg-alert').html(msg)
    $('#modal-notify').modal('show')
    $("#form").trigger("reset");
   });  
});   

$('#addCampo').click(function(e){
  e.preventDefault();
  var i = $('#contador').val()
  $(".campo-horas").append('<div>'+
                                 '<label class="" for="txtCampo2">Hora '+i+':</label>'+
                                 '<div class="">'+
                                  '<input autocomplete="none" data-grupoid="ok" type="text" required'+ 'name="item[horas3]" class="txt_area inputHr" value="" required>'+
                                  '</div>'+
                             '</div>');
   i++                         
   $('#contador').val(i)
                        })
