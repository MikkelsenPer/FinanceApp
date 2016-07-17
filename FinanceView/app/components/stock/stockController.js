//This is the controller for a specific stock.

  angular.module('stockModule', [])
  .controller('stockctrl', ['$http', '$scope','StockResourceHTTP', 'StockIndexResource', stock_ctrl]);



  function stock_ctrl($http, $scope, StockResourceHTTP, StockIndexResource) {
      var vm = this;  		
      
     
      vm.getStock = function() {
          vm.name = $scope.search_stock;
          vm.details = StockResourceHTTP.getDetails();
    }
      
    vm.getStockIndex = function() {
          vm.index = StockIndexResource.getIndex();
          
          vm.done = "true";
      }
    
	};

/*

function stock_index_ctrl($http, $scope, StockIndexResource)  {
      vm.getStockIndex = function() {
          vm.index = StockIndexResource.getIndex();
          
          vm.done = "true";
      }

};

*/