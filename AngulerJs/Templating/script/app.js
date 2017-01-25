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

// var app = angular.module('user',['ngMaterial']);
//     app.controller("myUser", function($scope) {
//         $scope.name = "salman";
//        $scope.userInfo ={
//            name: "Salman",
//            address: "Satadium Road Karachi",
//            nationality: "Pakistani"
//        }
//     })

    //--------Link in Custom directive--------------------------------------------------------
    //     .directive('mdLink',function () {
    //         function linkOf(scope,elem,attrs, ctrl) {
    //             elem.bind('click',function () {
    //                 console.log(elem);
    //                 console.log(scope);
    //                 console.log(attrs);
    //                 console.log(ctrl);
    //             });
    //         }
    //         // scope.$watch(attrs.mdLink,function (value) {
    //         //      userInfo.name = value;
    //         //
    //         // });
    //         // return{
    //         //     restrict: "A",
    //         //     template: "<h1>Salman Zafar</h1>",
    //         //     link: linkOf
    //         // }
    //         return{
    //             restrict: "A",
    //             scope: {
    //                 info: '='
    //             },
    //             template: "<input type='text' ng-model='name'/><h1>Name: {{name}}</h1>",
    //             link: linkOf,
    //             controller: function($scope){
    //                 console.log($scope.info);
    //             }
    //         }
    //     });

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
    //--------------------get data to controller using isolated Scope------------------
    // .directive("newUser", function () {
    //     return{
    //         scope: {
    //             name:'@'
    //         },
    //         template: '<input ng-model="name"><h2>Name: {{name}}'+"<br/>"+' Address: {{address}}</h2>'
    //     }
    // })
    //     .directive("mdCheck", function () {
    //         return{
    //             scope: {
    //                 name:'='
    //             },
    //             template: '<input ng-model="name"><h2>Name: {{name}}'+"<br/>"+' Address: {{address}}</h2>'
    //         }
    //     })
    //     .directive("mdInfo", function () {
    //         return{
    //             scope: {
    //                 name:'&'
    //             },
    //             template: '<input ng-model="name"><h2>Name: {{name}}'+"<br/>"+' Address: {{address}}</h2>'
    //         }
    //     })
    //--------templateUrl in Custom directive--------------------------------------------------------
    //
    //     .directive("getData", function () {
    //         return{
    //             templateUrl: 'my_customer.html'
    //         }
    //     })


    var app = angular.module('phoneApp', []);

    app.controller("AppCtrl", function ($scope) {
        $scope.callHome = function (mes,mas) {
            alert(mes);
            alert(mas);
        };
    });

    app.directive("phone", function () {
        return {
            scope: {
                dial: "&"
            },
            template: '<input type="text" ng-model="value">' +'<input type="text" ng-model="value2">'+
            '<div class="button" ng-click="dial({message:value,message2:value2})">Call home!</div>',
        };
    });