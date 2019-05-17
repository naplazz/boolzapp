// --inizio funzione che permette di modificare chat element
$(".chat-history-element").click(function() {
  var contactName = $(this).find('.nome').text();
  $(".chat-history-element").removeClass('selected');
  $(this).addClass('selected');
  $('.column-header').find('.nome').text(contactName);

});
// --inizio funzione che permette di modificare chat element


$('#searchText').keyup(function() {
  var srcText = $("#searchText").val().toLowerCase();

  $(".chat-history-element").hide()

  $(".chat-history-element").each(function() {
    if ($(this).find('.nome').text().toLowerCase().includes(srcText)) {
      $(this).show();

    } else {
      $(this).hide();
    }

  });

});



$('#sendBtn').click(function() {
  var userMsg = $('#inputMsg').val();
  var optionVal = $(".selectSender option:selected").val();
  var userMessageLeft = userMsg;
  var interlocutoreMessageLeft = 'ciao mess ricevuto';
  var userMessage = '<div class="msgUtente msg">' + '<span>' + userMessageLeft + '</span>' + '</div>';
  var interlocutoreMessage = '<div class="msgInterlocutore msg">' + '<span>' + interlocutoreMessageLeft + '<span>' + '</div>';

  if (userMsg) {
    if (optionVal === "user") {
      $('.column-content-right').append(userMessage);
      setTimeout(function() {
        $('.column-content-right').append(interlocutoreMessage);
      }, 1000);
    } else if (optionVal === "interlocutore") {
      $('.column-content-right').append(userMessage);
      setTimeout(function() {
        $('.column-content-right').append(interlocutoreMessage);
      }, 1000);
    } else {
      alert('Non hai selezionato chi invia il messaggio');
    };
    $('#inputMsg').val('');

  } else {
    alert('messaggio vuoto')
  }

});
