var app = angular.module("quoteBook");

app.controller("mainCtrl", function($scope, dataService){
	//Show current quotes
	$scope.currentQuotes = dataService.getData();

	//Add quotes when bush "Submit" button
	$scope.addIt = function(){
		dataService.addData($scope.addObj);

		//Add new quote to quotes array; Clear boxes after added
		// dataService.addData(text: $scope.addObj.text, author: $scope.addObj.author);	
		// $scope.addIt.text = " ";
		// $scope.addIt.author = " ";
	};

	$scope.deleteIt = function(){
		dataService.deleteData($scope.quote);
	};
});