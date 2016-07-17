  angular.module('myControllers', [])

  .controller('welcomectrl', welcomectrl);
  
  function welcomectrl(){
  		var vm = this;
    	vm.name = "name function has not yet been called";
    	vm.setName = function(name){
      	vm.name = name;
    };
  }

  
