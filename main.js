var convMario = [
  ["ciao come stai Mario", 1],
  ["tutto bene grazie", 2],
  ["ok", 1]
];

var convLuisa = [
  ["ciao come stai Luisa", 1],
  ["tutto bene grazie", 2],
  ["ok", 1]
];

var convMrina = [
  ["ciao come stai Marina", 1],
  ["tutto bene grazie", 2],
  ["ok", 1]
];

var convMichele = [
  ["ciao come stai Michele", 1],
  ["tutto bene grazie", 2],
  ["ok", 1]
];



var friends = [{
    id: 1,
    nome: "Marina",
    foto: "img/friend1.png",
    lastmes: "11:30",
    conversazione: convMario
  },
  {
    id: 2,
    nome: "Marina",
    foto: "img/friend4.png",
    lastmes: "11:30",
    conversazione: convMrina
  },
  {
    id: 3,
    nome: "Michele",
    foto: "img/friend3.png",
    lastmes: "11:30",
    conversazione: convMichele
  },
  {
    id: 4,
    nome: "Luisa",
    foto: "img/friend2.png",
    lastmes: "11:30",
    conversazione: convLuisa
  }
];


for (var i = 0; i < friends.length; i++) {
  var clnTpl = $('.chat-history-element').clone().removeClass('hidden');

  $('.column-content').append(clnTpl[i]);

  clnTpl.find('.nome').text(friends[i].nome);
  clnTpl.find('#myimg').attr('src', friends[i].foto);
  clnTpl.find('.last-ms').text(friends[i].lastmes);
  clnTpl.find('.conversazione').text(friends[i].conversazione[0]);
}




// --inizio funzione che permette di modificare chat element
$(".chat-history-element").click(function() {
  var contactName = $(this).find('.nome').text();
  $(".chat-history-element").removeClass('selected');
  $(this).addClass('selected');
  $('.column-header').find('.nome').text(contactName);
  var selezionato = $(".chat-history-element .selected");

});
$('#sendBtn').click(function() {
  var userMsg = $('#inputMsg').val();
  var userMessageLeft = "<p>" + userMsg + "</p>"
  var interlocutoreMessageLeft = 'ciao mess ricevuto';
  var userMessage = '<div class="msgUtente msg">' + '<span>' + userMessageLeft + '</span>' + '</div>';
  var interlocutoreMessage = '<div class="msgInterlocutore msg">' + '<span>' + interlocutoreMessageLeft + '<span>' + '</div>';

  if (userMsg) {
    if ($('.chat-history-element').hasClass('selected')) {
      // console.log(userMessageLeft)
      $(this).find('.contact-details').text();
      setTimeout(function() {
        $(this).find('.contact-details').append(interlocutoreMessageLeft);
      }, 1000);
    }



    $('#inputMsg').val('');

  } else {
    alert('messaggio vuoto')
  }

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
