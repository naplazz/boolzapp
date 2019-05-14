$('#sendBtn').click(function() {
  var userMsg = $('#inputMsg').val();
  var optionVal = $(".selectSender option:selected").val();

  if (optionVal === "user") {
    $('.column-content-right').append('<div class="msgUtente msg">' +'<span>' + userMsg + '</span>' +'</div>');

  } else if (optionVal === "interlocutore"){
    $('.column-content-right').append('<div class="msgInterlocutore msg">' +'<span>' + userMsg+ '<span>' + '</div>');
  } else {
    alert('Non hai selezionato chi invia il messaggio');
  };
  $('#inputMsg').val('');
});
