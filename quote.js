$(document).ready(function() {
	
  $('#quoted').on('click', function() {
    var arr = ['#EF5350', '#AB47BC', '#29B6F6', '#9CCC65', '#FFA726', '#8D6E63','#26A69A', '#D4E157', '#78909C','#00E676','#76FF03','#00E5FF','#651FFF','#F50057','#FF1744'];
    var quote = ['Young people are in a condition like permanent intoxication, because youth is sweet and they are growing.','To see what is right and not to do it is want of courage.','It is no good to try to stop knowledge from going forward. Ignorance is never better than knowledge.','The question of whether a computer can think is no more interesting than the question of whether a submarine can swim.','Part of the inhumanity of the computer is that, once it is competently programmed and working smoothly, it is completely honest.','Never try to reason the prejudice out of a man. It was not reasoned into him, and cannot be reasoned out.','They say a person needs just three things to be truly happy in this world: someone to love, something to do, and something to hope for.','Learn from yesterday, live for today, hope for tomorrow. The important thing is not to stop questioning.','Hardships often prepare ordinary people for an extraordinary destiny.']
    var source = ['Aristotle','Confucius','Enrico Fermi','E. W. Dijkstra','Isaac Asimov','Sydney Smith','Tom Bodett','Albert Einstein','C.S. Lewis']
    var x = Math.floor((Math.random() * arr.length));
	//Random number generator for the color of the screen.
    var y = Math.floor((Math.random() * quote.length));
	//Seperate random number used to generate a matching quote and source pair.
		
    $('p').css('color', arr[x]);
    $('body').css('cssText', 'background-color: ' + arr[x] + ' !important;');
    $('footer').css('color', arr[x]);
    $('.newQuote').text(quote[y]);
    $('.newSource').text(source[y]);
	
	$('#tweetLink').attr('href', 'https://twitter.com/intent/tweet?text=' + encodeURI(quote[y]));
	//This updates the href element surrounding the tweet button. 
	
  });

});