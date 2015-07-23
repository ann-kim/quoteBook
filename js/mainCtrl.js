var app = angular.module("quoteBook");

app.controller("mainCtrl", function($scope, dataService){
	//Show current quotes
	$scope.currentQuotes = dataService.getData();

	//Add quotes when push "Submit" button
	$scope.addIt = function(){
		dataService.addData($scope.addObj);
		//Clears input boxes
		// $scope.addObj.text = "";
		// $scope.addObj.author = "";
	};

	$scope.deleteIt = function(text){
		dataService.removeData($scope.deleteObj.text);
		$scope.deleteObj.text = "";
	};
});