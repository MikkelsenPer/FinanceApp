'use strict';
/* 
App.factory('StockResourceHTTP', ['$http', function($http) {   
    var obj = {content:null};
    var stockQuery = "http://finance.yahoo.com/webservice/v1/symbols/"
    
    $http.get(stockQuery +"MSFT" +"/quote?format=json")
    .success(function(data, status, headers, config) {               
        obj.name = data.list.resources[0].resource.fields.name;
        obj.price = data.list.resources[0].resource.fields.price;
        obj.volume = data.list.resources[0].resource.fields.volume;
       
      })
    .error(function(data, status, headers, config) {
        obj.content = data;                                                        
     });
    return obj
    }]);
    */

App.factory('StockResourceHTTP', function($http){
    var obj = {content:null};
    var stockQuery = "http://finance.yahoo.com/webservice/v1/symbols/"
    
    //get jsonp
   return{
       getDetails: function($scope) {
        $http.get(stockQuery +"MSFT" +"/quote?callback=JSON_CALLBACK")
       
    //    $http.jsonp("http://test.uxco.co/json-test.php?callback=JSON_CALLBACK")
        .success(function(data, status, headers, config) {               
        obj.name = data.list.resources[0].resource.fields.name;
        obj.price = data.list.resources[0].resource.fields.price;
        obj.volume = data.list.resources[0].resource.fields.volume;
    });
      }
    }
});

App.factory('StockIndexResource', function($http){
    
    var obj = this;
    
    var indexNameQuery = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20html%20where%20url%3D'http%3A%2F%2Fwww.euroinvestor.dk%2Fmarkeder%2Faktier%2Feuropa%2Fdanmark%2Fomx-c20-cap'%20and%20xpath%3D'%2F%2Fdiv%5B%40id%3D%22ctl00_masterContentDiv%22%5D%2Fdiv%5B1%5D%2Fdiv%2Fh1%2Ftext()'&format=json&callback="
    
    var indexValueQuery = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20html%20where%20url%3D'http%3A%2F%2Fwww.euroinvestor.dk%2Fmarkeder%2Faktier%2Feuropa%2Fdanmark%2Fomx-c20-cap'%20and%20xpath%3D'%2F%2Fdiv%5B%40id%3D%22ctl00_masterContentDiv%22%5D%2Fdiv%5B2%5D%2Fdiv%5B1%5D%2Fdiv%5B2%5D%2Fdiv%5B2%5D%2Fdiv%2Fdiv%2Fdiv%2Fdiv%2Fspan%2Fspan%2Fspan%2Ftext()'&format=json&callback="
    
       obj.getIndex = function($scope) {
        $http.get(indexValueQuery)
        .success(function(data, status, headers, config) {               
        obj.value = data;
            return obj;
        
    });
           return obj;
      }
    return obj;
}
           
);
