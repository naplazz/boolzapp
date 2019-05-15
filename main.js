$('.inputcont .fa-search').click(function() {
  var srcText = $("#searchText").val();

  $(".chat-history-element").hide()

  $(".chat-history-element").each(function() {
    if ($(this).find('.nome').text() == srcText) {
      $(this).show();

    } else {
      $(this).hide();
    }

  });

});

$('#sendBtn').click(function() {
  var userMsg = $('#inputMsg').val();
  var optionVal = $(".selectSender option:selected").val();

  if (userMsg) {
    if (optionVal === "user") {
      $('.column-content-right').append('<div class="msgUtente msg">' + '<span>' + userMsg + '</span>' + '</div>');
      setTimeout(function() {
        $('.column-content-right').append('<div class="msgInterlocutore msg">' + '<span>' + 'Ciao, messaggio ricevuto!' + '<span>' + '</div>');
      }, 1000);
    } else if (optionVal === "interlocutore") {
      $('.column-content-right').append('<div class="msgInterlocutore msg">' + '<span>' + userMsg + '<span>' + '</div>');
      setTimeout(function() {
        $('.column-content-right').append('<div class="msgUtente msg">' + '<span>' + 'Ciao, messaggio ricevuto!' + '</span>' + '</div>');
      }, 1000);
    } else {
      alert('Non hai selezionato chi invia il messaggio');
    };
    $('#inputMsg').val('');

  } else {
    alert('messaggio vuoto')
  }

});
