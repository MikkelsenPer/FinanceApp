//This is the controller for a specific stock.

  angular.module('stockModule', [])
  .controller('stockctrl', ['$http', '$scope','StockResourceHTTP', 'StockIndexResource', 'StockGlobalIndexResource', stock_ctrl]);



  function stock_ctrl($http, $scope, StockResourceHTTP, StockIndexResource, StockGlobalIndexResource) {
      var vm = this;  		
      
     
      vm.getStock = function($http){
        vm.name = $scope.search_stock;
        StockResourceHTTP.setStock($scope.search_stock);  
        vm.details = StockResourceHTTP.getStockDetailsYql();
          
      }
      
    vm.getStockIndex = function() {
          vm.index = StockIndexResource.getIndex();        
      }
    
    vm.getGlobalIndexes = function() {
        vm.globalIndexes = StockGlobalIndexResource.getGlobalIndexes();
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