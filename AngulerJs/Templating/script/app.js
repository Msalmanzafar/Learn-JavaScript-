angular
    .module("ngClassifieds",["ngMaterial"])
    .config(function($mdThemingProvider){

        $mdThemingProvider.theme('default')
            .primaryPalette('blue')
            .accentPalette('orange');
})
.directive("helloWorld", function(){
    return{
        template: "<h1>Salman</h1>"
    }
});
