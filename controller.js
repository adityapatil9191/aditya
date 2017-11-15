var myapp = angular.module('myapp',["ngRoute"]);

myapp.controller('myController',['$scope','$routeParams',function($scope,$routeParams){
	$scope.employees = [{"id":1,
					     "name":"Jhon",
					     "phone":"99999999999",
					     "address":
					     {
					     	"city":"Pune",
					     	"address_line1":"Abc road",
					     	"address_line2":"XYZ building",
					     	"postal_code":"12455"
					     }
					 },{"id":2,
					     "name":"Jacob",
					     "phone":"AKDBJHADD",
					     "address":
					     {
					     	"city":"Pune",
					     	"address_line1":"PQR road",
					     	"address_line2":"WDF building",
					     	"postal_code":"12455123"
					     }
					 },{"id":3,
					     "name":"Jerry",
					     "phone":"45124545214",
					     "address":
					     {
					     	"city":"Mumbai",
					     	"address_line1":"QPR road",
					     	"address_line2":"ghad building",
					     	"postal_code":"145125"
					     }
					 },{"id":4,
					     "name":"Jaimy",
					     "phone":"NJjbadadasad",
					     "address":
					     {
					     	"city":"Pune",
					     	"address_line1":"Abc road",
					     	"address_line2":"XYZ building",
					     	"postal_code":"12455"
					     }
					 }
					];


	$scope.id = $scope.routeParams.id;

	$scope.getIndex = function(empId){
		for (var i = 0 ; i<$scope.employees.length;i++) {
			if (empId == $scope.employees.id) {
				return i;
			}
		}
	}

	$scope.edit = function(empid){
		var index = $scope.getIndex(empid);
		var changedarray = [
				{"id":$scope.id,
					     "name":$scope.name,
					     "phone":$scope.phone,
					     "address":
					     {
					     	"city":$scope.city,
					     	"address_line1":$scope.address1,
					     	"address_line2":$scope.address2,
					     	"postal_code":postalCode
					     }


						];
		$scope.employees[index] = changedarray;

		changedarray = [];


	}

	$scope.addnew = function(){
		if($scope.name!=null and $scope.name.length >=4 and $scope.phone ! = null){
			var pusharray = [
				{"id":$scope.id,
					     "name":$scope.name,
					     "phone":$scope.phone,
					     "address":
					     {
					     	"city":$scope.city,
					     	"address_line1":$scope.address1,
					     	"address_line2":$scope.address2,
					     	"postal_code":postalCode
					     }


						];
				}

		}

		$scope.employees.push(pusharray);
		$scope.pusharray = [];
	
}];

	myapp.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "index.htm",
        controller:'myController'
    })
    .when("/employees/add", {
        templateUrl : "add.htm",
        controller:'myController'
    })
    .when("/employees/:id/edit", {
        templateUrl : "edit.htm",
        controller:'myController'
    });
    
});


