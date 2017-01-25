// (function(){
//     "use strict";
//
//     angular.module("samApp",['ngMaterial','ngAria','ngAnimate', 'ngMessages'])
//         .config(function($mdThemingProvider){
//             $mdThemingProvider.theme('default')
//                 .primaryPalette('blue')
//                 .accentPalette('orange');
//         })
//
//
//         .controller("listController",function($scope, $http){
//             $http.get('data/signup.json')
//                 .then(function(response){
//                     $scope.myData = response.data;
//
//                     // var ages = [];
//                     // var userAges = [];
//                     // angular.forEach($scope.myData , function (age) {
//                     //     ages.push(age.age);
//                     //     userAges = ages.filter(function (val) {
//                     //         return
//                     //     })
//                     //
//                     // });
//                     // //$scope.ages = ages;
//                     // console.log(userAges);
//
//         });
//
//
//
//
//             var formData=[];
//             $scope.submitForm = function(form) {
//                 formData.push($scope.form);
//                 $scope.form = {};
//                 form.$setUntouched();
//                 form.$setPristine();
//
//             };
//         });
// })();

var app = angular.module('user',['ngMaterial']);
    app.controller("myUser", function($scope) {
        $scope.name = "salman";
       $scope.userInfo ={
           name: "Salman",
           address: "Satadium Road Karachi",
           nationality: "Pakistani"
       }
    })
    //-------------------Custom-Directive----------------------------------
    // .directive("firstHeading",function () {
    //     return {
    //         template: "<h1>This is my First Heading</h1>"
    //     }
    // })
    // .directive("secondHeading",function () {
    //     return {
    //         restrict: 'A',
    //         template: "<h2>This is my Second Heading</h2>"
    //     }
    // })
    // .directive("thirdHeading",function () {
    //     return {
    //         restrict: 'C',
    //         template: "<h3>This is my Third Heading</h3>"
    //     }
    // })
    // .directive("fourthHeading",function () {
    //     return {
    //         restrict: 'M',
    //         template: "<h4>This is my Fourth Heading</h4>"
    //     }
    // })
    //--------------------get data from controller------------------
    .directive("newUser", function () {
        return{
            scope: {
                name:'@'
            },
            template: '<input ng-model="name"><h2>Name: {{name}}'+"<br/>"+' Address: {{address}}</h2>'
        }
    })
        .directive("mdCheck", function () {
            return{
                scope: {
                    name:'='
                },
                template: '<input ng-model="name"><h2>Name: {{name}}'+"<br/>"+' Address: {{address}}</h2>'
            }
        })
        .directive("mdInfo", function () {
            return{
                scope: {
                    name:'&'
                },
                template: '<input ng-model="name"><h2>Name: {{name}}'+"<br/>"+' Address: {{address}}</h2>'
            }
        })
        .directive("getData", function () {
            return{
                templateUrl: 'my_customer.html'
            }
        })


