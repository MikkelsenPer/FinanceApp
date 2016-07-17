
  //This will create a module called indexModule ¨- later we will create a controller on 
  //this module.
  angular.module('indexModule', [])

  .controller('indexctrl', index_ctrl);

  function index_ctrl() {
  		this.name = "Per Mikkelsen";
    	function setPage(name){
      	this.name = name;
    };
  }
  
