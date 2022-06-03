$(function () {
  $(".btn-finalizar").click(function (e) {
    e.preventDefault();
    var tempo = $('#tempo').val()
    var valor = $('#valor').val().replace(',', '.')
    var msg = ''
    var trabalho = ''
    var minutosTrabalho = 0
    var minutosTrabalhados = 0
    var valorMin = 0
    
    tempo = tempo.split(':')
    minutosTrabalho += +tempo[1] 
    minutosTrabalho += (+tempo[0]*60)
  
     $('.inputHr').each(function(index){
        trabalho = $(this).val()
        if(trabalho != '' ){
           trabalho = trabalho.split(':')
           minutosTrabalhados += parseFloat(trabalho[1]) 
           minutosTrabalhados += parseFloat(trabalho[0])*60
        }
     })

    valorMin = parseFloat(valor)/60
    var remuneracao = parseFloat(minutosTrabalhados) * parseFloat(valorMin)
    var hrRestante = parseFloat(minutosTrabalho) - parseFloat(minutosTrabalhados)  
 
    if(parseFloat(minutosTrabalhados) > parseFloat(minutosTrabalho)){
      var exe = parseFloat(minutosTrabalhados) - parseFloat(minutosTrabalho)
      msg = '<p>Suas horas de trabalho de '+ hora(minutosTrabalho) +' horas foram excedidas com '+hora(exe)+' horas a mais</p>'+
            '<p>Valor a ser cobrado: R$'+ remuneracao.toFixed(2).replace('.', ',')+'</p>'
            $('.inputHr').each(function(index){
              trabalho = $(this).val()
              if(trabalho != '' ){
                $(this).addClass('valorExcedido')
              }
           })
            
    } else {
      $('.inputHr').removeClass('valorExcedido')
      msg = '<p>Total de '+ hora(minutosTrabalhados) +' horas trabalhado</p>'+
             '<p>Valor a ser cobrado: R$'+ remuneracao.toFixed(2).replace('.', ',')+'</p>'+
             '<p>Sobrando '+ hora(hrRestante) +' horas de trabalho</p>'
             $("#form").trigger("reset");
    }
    $('#msg-alert').html(msg)
    $('#modal-notify').modal('show')
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
});
     
    function hora(minutos){
      var horas = Math.floor(minutos/ 60);          
      var min = minutos % 60;
      var textoHoras = (`00${horas}`).slice(-2);
      var textoMinutos = (`00${min}`).slice(-2);      
      return `${textoHoras }:${textoMinutos}`;
    };

