/* thanks @bdc*/
$(function(){
  $('.email').each(function(i){
    var protectedEmail = $(this).html();
    protectedEmail = protectedEmail.replace(" [atsymbol] ","@");
    protectedEmail = protectedEmail.replace(" [dotsymbol] ",".");
    $(this)
      .html(protectedEmail)
      .replaceWith("<a href=\"mailto:"+$(this).text()+"\">"+$(this).text()+"</a>");
  });
});   
