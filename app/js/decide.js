angular.module('decideApp', [])
  .controller('factorController', function() {
    var factorController = this;
    factorController.factorsCount = "";
    factorController.factors = [];
 	factorController.decision = "";

    angular.element(document).ready(function () {
       $("#how-many").focus();
    });

    factorController.build = function() {
        factorController.factors = [];
      	for(var i =0; i<factorController.factorsCount; i++){
      		factorController.factors[i] = {name:""};
  		}

    };
    factorController.enter = function(keyEvent) {
      if (keyEvent.which === 13){
        keyEvent.target.blur();
      }
       
      
    }
    factorController.decide = function(){
    	var d = (Math.floor((Math.random()*factorController.factorsCount)));
    	factorController.decision = factorController.factors[d].name;
    };
});