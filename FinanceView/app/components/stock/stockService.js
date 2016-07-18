'use strict';

App.factory('StockResourceHTTP', function($http) {    
    var service = {content:null};
    var stockQuery = "http://finance.yahoo.com/webservice/v1/symbols/" 
    var stockQueryYql = "select%20*%20from%20yahoo.finance.quote%20where%20symbol%20in%20(%22"
    var stockName = '';
    var vm = this;
    
 
service.setStock = function(stock) {
    stockName = stock;
}

service.makeUrl = function() {
    return stockQuery +stockName +"/quote?format=json"
}

service.makeUrlYql = function() {
    return "https://query.yahooapis.com/v1/public/yql?q=" + stockQueryYql +stockName +"%22)&format=json&diagnostics=false&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=";
}

service.getStockDetails = function () {
    $http({        
        url: service.makeUrl()
    }).success(function(data, status, headers, config) {              
        service.name = data.list.resources[0].resource.fields.name;
        service.price = data.list.resources[0].resource.fields.price;
        service.volume = data.list.resources[0].resource.fields.volume;
    }).error(function(data, status, headers, config) {
        service.content = data;              		
    });
    return service;
    }

service.getStockDetailsYql = function () {    
    $http({        
        url: service.makeUrlYql()
    }).success(function(data, status, headers, config) {         
        var basePath = data.query.results.quote     
        service.name = basePath.Name;
        service.lastTradePrice = basePath.LastTradePriceOnly;
        service.volume = basePath.AverageDailyVolume;
        service.daysRange = basePath.DaysRange;
        service.yearHigh = basePath.YearHigh;
        service.yearLow = basePath.YearLow;
        service.daysLow = basePath.DaysLow;
        service.daysHigh = basePath.DaysHigh;
        //serivce.change = basePath.Change;
        service.stockExchange = basePath.StockExchange;
    }).error(function(data, status, headers, config) {
        service.content = data;              		
    });
    return service;
    }

    return service;
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

App.factory('StockGlobalIndexResource', function($http){
    
    var service = this;
    var indexQuery = "https://query.yahooapis.com/v1/public/yql/permikkelsen/globalIndex?format=json&diagnostics=true&callback="
    
    service.getGlobalIndexes = function($scope) {
        $http.get(indexQuery)
        .success(function(data, status, headers, config) {               
        service.value = jQuery("//results/div",data);
            return service;
        
    });
           return service;
      }
    return service;
}
           
);
