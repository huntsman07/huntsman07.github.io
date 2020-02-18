// jQuery------------------------------------------------------------

// ヘッダー
$(function(){
  $('#titleone').hover(
    function(){$('#titleone').css('color','yellow')},
    function(){$('#titleone').css('color','white');
  });
  $('#titletwo').hover(
    function(){$('#titletwo').css('color','yellow')},
    function(){$('#titletwo').css('color','white');
  });
  $('#titlethree').hover(
    function(){$('#titlethree').css('color','yellow')},
    function(){$('#titlethree').css('color','white');
  });
});

// faq
$('.faq-kaku').click(function(){
  var $answer= $(this).find('.answer');
  if($answer.hasClass('open')){
    $answer.removeClass('open');
    $answer.slideUp();
  }else{
    $answer.addClass('open');
    $answer.slideDown();
  }
});

// コンタクトフォーム
$(function(){
  $('#submit').click(function(){
    $('#message').fadeIn();
  });

  $('#resend').click(function(){
    $('#message').fadeOut();
  });
});




// React------------------------------------------------------------
