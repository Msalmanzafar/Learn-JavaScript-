angular
    .module("myApp")
    .component("userName",{
        template:
        '<ul>' +
          '<li ng-repeat="users in $ctrl.users">' +
            '<span>{{users.name}}</span>' +
          '</li>' +
        '</ul>',
        controller: function userInfo(){
            console.log("runing");
            this.users= [
                {
                    name:"Salman",
                },
                {
                    name:"Sumair Bhai",
                },
                {
                    name:"Ashu Bhai",
                },
                {
                    name:"Fahad Bahi",
                }
            ];
        }
    })
        