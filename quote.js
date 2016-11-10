$(document).ready(function() {
  $('#quoted').on('click', function() {
    var arr = ['#EF5350', '#AB47BC', '#29B6F6', '#9CCC65', '#FFA726', '#8D6E63'];
    var quote = ['The greater danger for most of us lies not in setting our aim too high and falling short; but in setting our aim too low, and achieving our mark.','To see what is right and not to do it is want of courage.','It is no good to try to stop knowledge from going forward. Ignorance is never better than knowledge.','The question of whether a computer can think is no more interesting than the question of whether a submarine can swim.','Part of the inhumanity of the computer is that, once it is competently programmed and working smoothly, it is completely honest.','Never try to reason the prejudice out of a man. It was not reasoned into him, and cannot be reasoned out.']
    var source = ['Michelangelo','Confucius','Enrico Fermi','E. W. Dijkstra','Isaac Asimov','Sydney Smith']
    var x = Math.floor((Math.random() * arr.length));
    var y = Math.floor((Math.random() * quote.length));
    
    $('p').css('color', arr[x]);
    $('body').css('cssText', 'background-color: ' + arr[x] + ' !important;');
    $('footer').css('color', arr[x]);
    $('.newQuote').text(quote[y]);
    $('.newSource').text(source[y]);
    //api for random quote

  });

});