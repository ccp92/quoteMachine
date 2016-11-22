// https://gist.github.com/pdotsani/134d5c9d0e670b5ada8f << Gist source
var getAQuote = function() {
  $('h3').append('<i class="fa fa-spinner fa-spin fa-3x">');
 $.ajax({
    url: 'https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous',
    type: 'POST', // The HTTP Method
    data: {}, // Additional parameters here
    datatype: 'json', //Question: What's the difference between JSON and JSONP? Something to do with not being on the same domain?
    success: function(data) {
      console.log(data);
      var obj = jQuery.parseJSON(data);
      console.log(obj);
      $('h3').empty();
      $('h4').empty();
      $('h3').append("\""+obj.quote+"\"");
      $('h4').append("-"+obj.author);
	  //I'm assuming based on the console log output that the obj.quote and obj.author are what I need to call and put into my html.
	  //I'm also guessing that the other fields are targetting the gists html elements.
    },
    error: function(err) { alert(err); },
    beforeSend: function(xhr) {
    xhr.setRequestHeader("X-Mashape-Authorization", "w4FxjW3RnJmshxtNfrO7dNrJtLMap1RAEXhjsnmEQ7xehWEaeE"); // Enter here your Mashape key
    }
});
}

getAQuote();


$(document).ready(function() {
	
  $('#quoted').on('click', function() {
    var arr = ['#EF5350', '#AB47BC', '#29B6F6', '#9CCC65', '#FFA726', '#8D6E63','#26A69A', '#D4E157', '#78909C','#00E676','#76FF03','#00E5FF','#651FFF','#F50057','#FF1744']; //Selection of colours for the page
    var quote = ['Young people are in a condition like permanent intoxication, because youth is sweet and they are growing.','To see what is right and not to do it is want of courage.','It is no good to try to stop knowledge from going forward. Ignorance is never better than knowledge.','The question of whether a computer can think is no more interesting than the question of whether a submarine can swim.','Part of the inhumanity of the computer is that, once it is competently programmed and working smoothly, it is completely honest.','Never try to reason the prejudice out of a man. It was not reasoned into him, and cannot be reasoned out.','They say a person needs just three things to be truly happy in this world: someone to love, something to do, and something to hope for.','Learn from yesterday, live for today, hope for tomorrow. The important thing is not to stop questioning.','Hardships often prepare ordinary people for an extraordinary destiny.'] //Selection of quotes to choose from (temporary until api)
    var source = ['Aristotle','Confucius','Enrico Fermi','E. W. Dijkstra','Isaac Asimov','Sydney Smith','Tom Bodett','Albert Einstein','C.S. Lewis'] // Matching sources for quotes (temporary until api)
    var x = Math.floor((Math.random() * arr.length));
	//Random number generator for the color of the screen.
    var y = Math.floor((Math.random() * quote.length));
	//Seperate random number used to generate a matching quote and source pair.
		
    $('p').css('color', arr[x]); //Update text colour
    $('body').css('cssText', 'background-color: ' + arr[x] + ' !important;'); // Update background colour. !important to overwrite the bootstrap css
    $('footer').css('color', arr[x]); //Update text colour in the footer
    $('.newQuote').text(quote[y]); //Pull the new quote from the array
    $('.newSource').text(source[y]); //Pulls the matching source for the quote (hence [y] for both)
	
	$('#tweetLink').attr('href', 'https://twitter.com/intent/tweet?text=' + encodeURI(quote[y]));
	//This updates the href element surrounding the tweet button. 
	
  });

});