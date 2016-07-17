App.factory('NewsResource', function($http){
    
    var obj = this;
    var stockQuery = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20html%20where%20url%3D'http%3A%2F%2Ffinans.dk%2Flive%2F'%20and%20xpath%3D'%2F%2Fli%5B%40class%3D%22articleListItem%20cfix%22%5D%2Fa'&format=json&diagnostics=false&callback="
    
       obj.getNews = function($scope) {
        $http.get(stockQuery)
        .success(function(data, status, headers, config) {               
        obj.list = data;
            return obj;
        
    });
           return obj;
      }
    return obj;
}
           
           );