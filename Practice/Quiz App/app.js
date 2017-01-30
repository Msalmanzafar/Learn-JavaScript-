/**
 * Created by SALMAN on 1/25/2017.
 */

angular
    .module("myApp",[])
    .controller("appContr", function ($scope,$http) {
        $http.get("data/data-file.json").then(function(response){
                  $scope.quizData = response.data;
                  console.log($scope.quizData);
        });

    });