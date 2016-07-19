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
    
    var omxc20indexQuery = "https://query.yahooapis.com/v1/public/yql/permikkelsen/omxc20Index?format=json&diagnostics=true&callback="
    
    obj.getIndex = function($scope) {
        $http.get(omxc20indexQuery)
        .success(function(data, status, headers, config) {               
        var rawResult = data.query.results;
        obj.value = rawResult.div[1].div[0].span.content;
        obj.changeNet = rawResult.div[2].div[0].span.content;
        obj.changePercent = rawResult.div[2].div[1].span.content;
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
        var indexes = new Array(data.query.results.div[0], data.query.results.div[1], data.query.results.div[2], data.query.results.div[3]);
        service.value = indexes;
        return service;
    });
           return service;
      }
    return service;
}
           
);
