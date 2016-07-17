//This is the controller for a specific stock.

  angular.module('newsModule', [])
  .controller('newsctrl', ['$http', '$scope','NewsResource', news_ctrl]);



  function news_ctrl($http, $scope, NewsResource) {
      var v = this;  		
      
     
      v.getNews = function(){
          //vm.name = $scope.search_stock;
          
      v.details = NewsResource.getNews();
      v.done = "true";
    }

	};

