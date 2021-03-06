(function(){
    "user strict";
    
    angular
        .module("ngClassifieds")
        .controller("classifiedsCtrl",function($scope, $http, classifiedsFactory, $mdSidenav,$mdToast, $mdDialog){
            
            classifiedsFactory.getClassifieds().then(function(classifieds){
                $scope.classifieds = classifieds.data;
                //console.log(data);
            });
            $scope.openSidebar = function(){
                $mdSidenav('left').open();
            };
            $scope.closeSidebar = function(){
                $mdSidenav('left').close();
            };
            $scope.saveClassified = function(classified){
                if(classified){
                    $scope.classifieds.push(classified);
                    $scope.classified ={};
                    $scope.closeSidebar();
                    showToast("Classified Saved!");
                }
            }

            $scope.editClassified = function(classified){
                $scope.editing = true;
                $scope.openSidebar();
                $scope.classified = classified;
            }
            $scope.saveEdit =function(){
                $scope.editing = false;
                $scope.classified ={};
                $scope.closeSidebar();
                showToast("Edit Saved!");
            }
            $scope.deleteClassified = function(event,classified){
                var confirm = $mdDialog.confirm()
                    .title("Are your you want to delete "+ classified.title + '?')
                    .ok("yes")
                    .cancel("No")
                    .targetEvent(event);
                    $mdDialog.show(confirm).then(function(){
                        var index = $scope.classifieds.indexOf(classified);
                        $scope.classifieds.splice(index , 1);
                    },function(){

                    });
            }

            function showToast(message){
                $mdToast.show(
                        $mdToast.simple()
                        .content(message)
                        .position('top, right')
                        .hideDelay(3000)
                    );
            }
        });
})();