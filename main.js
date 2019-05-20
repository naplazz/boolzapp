var friends = [{
    id: 1,
    nome: "Mario",
    foto: "img/friend1.png",
    lastmes: "11:30",
    conversazione: "ciao come stai Mario"
  },
  {
    id: 2,
    nome: "Marina",
    foto: "img/friend4.png",
    lastmes: "11:30",
    conversazione: "ciao come stai Marina"
  },
  {
    id: 3,
    nome: "Michele",
    foto: "img/friend3.png",
    lastmes: "11:30",
    conversazione: "ciao come stai Michele"
  },
  {
    id: 4,
    nome: "Luisa",
    foto: "img/friend2.png",
    lastmes: "11:30",
    conversazione: "ciao come stai Luisa"
  }
];



for (var i = 0; i < friends.length; i++) {
  var clnTpl = $('.chat-history-element').clone().removeClass('hidden');

  $('.column-content').append(clnTpl[i]);
  clnTpl.find('.nome').text(friends[i].nome);
  clnTpl.find('#myimg').attr('src', friends[i].foto);
  clnTpl.find('.last-ms').text(friends[i].lastmes);
  clnTpl.find('.conversazione').text(friends[i].conversazione);
}


// --inizio funzione che permette di modificare chat element
$(".chat-history-element").click(function() {
  $('.msg').addClass('hidden')
  var contactName = $(this).find('.nome').text();
  $(".chat-history-element").removeClass('selected');
  $(this).addClass('selected');
  $('.column-header').find('.nome').text(contactName);
  var conv = $(this).find('.conversazione').text();
  console.log(conv)
  var msu = $('.msgInterlocutore').clone();
  $('column-content-right').append(msu)
  $('.msgInterlocutore').removeClass('hidden').find('span').text(conv)


});
$('#sendBtn').click(function() {

  var userMsg = $('#inputMsg').val();

  if (userMsg) {
    var newmes = $('.msgUtente').clone().removeClass('hidden')
    newmes.find('span').text(userMsg)
    $('.column-content-right').append(newmes)
    setTimeout(function () {
      var newmesi = $('.msgInterlocutore').clone().removeClass('hidden')
      newmesi.find('span').text("risposta automatica")
      $('.column-content-right').append(newmesi)
      
      $('.selected').find('.conversazione').text(rightLastMes);


    }, 1000);
    var rightLastMes = $('.msg:last-child').text()
    $('.selected').find('.conversazione').text(rightLastMes);

  } else {
    alert('messaggio vuoto')
  }
  $('#inputMsg').val('');
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
