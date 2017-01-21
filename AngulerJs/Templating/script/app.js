(function(){
    "use strict";

    angular.module("samApp",['ngMaterial','ngAria','ngAnimate', 'ngMessages'])
        .config(function($mdThemingProvider){
            $mdThemingProvider.theme('default')
                .primaryPalette('blue')
                .accentPalette('orange');
        })
        .controller("listController",function($scope, $http){
            $http.get('data/signup.json')
                .then(function(response){
                    $scope.myData = response.data;
                    console.log($scope.myData);
        });
            
            // $scope.submitForm = function(form) {
            //     formData.push($scope.form);
            //     $scope.form = {};
            //     form.$setUntouched();
            //     form.$setPristine();
            //     console.log(formData);
            // }
        });
})();

