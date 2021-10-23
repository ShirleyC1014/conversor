var calculatorApp = angular.module('conversorApp',[]);

calculatorApp.controller('conversorController', ['$scope', function($scope) {
console.log("Conversor");

//funcion para calcular conversion
$scope.calcular = function (){
    const pesos =$scope.pesosInput;

    if(!pesos){
        swal("Atencion","No ha ingresado la cantidad a convertir","warning");
    }

let totalConversion =  pesos*0.00026;;


$scope.totalConversion = totalConversion;

    

}


}]);