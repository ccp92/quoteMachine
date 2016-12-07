$(document).ready(function() {

	function getAQuote () {	
	  $.ajax('https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous',
	  {
		dataType: 'json',
		success: function(data) {
			$('.newQuote').text(data.quote);
			$('.newSource').text(data.author);
			//The two lines above update the text on the html side.
			$('#tweetLink').attr('href', 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(data.quote));
			//This updates the href element surrounding the tweet button.
		},
		headers: {"X-Mashape-Authorization": "w4FxjW3RnJmshxtNfrO7dNrJtLMap1RAEXhjsnmEQ7xehWEaeE"}
	  });
	};
	getAQuote();

  $('#quoted').on('click', function() {
	getAQuote();
    var arr = ['#EF5350', '#AB47BC', '#29B6F6', '#9CCC65', '#FFA726', '#8D6E63','#26A69A', '#D4E157', '#78909C','#00E676','#76FF03','#00E5FF','#651FFF','#F50057','#FF1744']; //Selection of colours for the page
	var x = Math.floor((Math.random() * arr.length));
	//Random number generator for the color of the screen.
    $('p').css('color', arr[x]); //Update text colour
    $('body').css('cssText', 'background-color: ' + arr[x] + ' !important;'); // Update background colour. !important to overwrite the bootstrap css
    $('footer').css('color', arr[x]); //Update text colour in the footer
  });
});