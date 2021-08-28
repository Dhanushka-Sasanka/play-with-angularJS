'use strict'

angular.module('customerModule')
.controller('CustomerController' , function($scope){

    // attributes
    $scope.customerId = 1;
    $scope.customerName = "Dhanushka";
    $scope.address = "Galle";
    $scope.salary = "80000";
   

    $scope.salaryIncrementPrecentage = 0 ;
    $scope.incrementedSalary = 0 ;

    // functions
    $scope.customerSalaryIncrement =  function (){
        $scope.incrementedSalary = $scope.salary *  $scope.salaryIncrementPrecentage ;
    };

    
    console.log("Customer Controller is working..");
});