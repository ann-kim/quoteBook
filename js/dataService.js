var app = angular.module("quoteBook");

app.service("dataService", function(){
	this.getData = function(){
		return quotes;
	};

	this.addData = function(newObj){
		quotes.push(newObj);
		// window.localStorage.quotes = JSON.stringify(quotes);
	};

	this.removeData = function(words){
		for (var i = 0; i < quotes.length; i++) {
			if (quotes[i].text === words){
				quotes.splice([i], 1);
			}
		}
		window.localStorage.quotes = JSON.stringify(quotes);
	};


	
localStorage.setItem('quotes', JSON.stringify(quotes));
// var retrievedObj = localStorage.getItem('quotes');
// console.log('retrievedObj: ', JSON.parse(retrievedObj));


	var quotes =
	[
	    { text: 'Life isn\'t about getting and having, it\'s about giving and being.', author: 'Kevin Kruse'},
	    { text: 'Whatever the mind of man can conceive and believe, it can achieve', author: 'Napoleon Hill'},
	    { text: 'Strive not to be a success, but rather to be of value.', author: 'Albert Einstein'},
	    { text: 'Two roads diverged in a wood, and I took the one less traveled by, And that has made all the difference.', author: 'Robert Frost'},
	    { text: 'The most difficult thing is the decision to act, the rest is merely tenacity.', author: 'Amelia Earhart'},
	    { text: 'Life is what happens to you while you\'re busy making other plans.', author: 'John Lennon'},
	    { text: 'What even is a jQuery?', author: 'Tyler S. McGinnis'}
  	]
});


