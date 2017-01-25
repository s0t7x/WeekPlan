define(['require', 'app'], function(require, APP) {

    /**
     * Controller for Main generated by Appery.io
     * @module Main
     */

    APP.controller('Main', ['$scope', 'Apperyio', controller]);

    function controller($scope, Apperyio) {
        /**
         * User controller functions
         */
        /**
         * @function init
         */

$scope.items = [
        {Title:"Moto G2", Desc: "Android Phone", Day: 1},
        {Title:"peter", Desc: "klaus", Day: 1},
        {Title:"The Monk who sold his ferrari", Desc: "Motivational book", Day: 0},
        {Title:"Mi Power Bank", Desc: "Power Bank", Day: 2},
        {Title:"Dell Inspiron 3537", Desc: "Laptop", Day: 3},
        {Title:"Dell Inspiron 3537", Desc: "Laptop", Day: 4},
        {Title:"Dell Inspiron 3537", Desc: "Laptop", Day: 5},
        {Title:"Dell Inspiron 3537", Desc: "Laptop", Day: 6},
        {Title:"Dell Inspiron 3537", Desc: "Laptop", Day: 7}
    ];

    $scope.editing = false;
    $scope.addItem = function(item) {
        $scope.items.push(item);
    };

     $scope.models = {
        selected: null,
        lists:{     "A": [
                    {Title:"Moto G2", Desc: "Android Phone", Day: 1},
                    {Title:"peter", Desc: "klaus", Day: 1},
                    {Title:"The Monk who sold his ferrari", Desc: "Motivational book", Day: 0},
                    {Title:"Mi Power Bank", Desc: "Power Bank", Day: 2},
                    {Title:"Dell Inspiron 3537", Desc: "Laptop", Day: 3},
                    {Title:"Dell Inspiron 3537", Desc: "Laptop", Day: 4},
                    {Title:"Dell Inspiron 3537", Desc: "Laptop", Day: 5},
                    {Title:"Dell Inspiron 3537", Desc: "Laptop", Day: 6},
                    {Title:"Dell Inspiron 3537", Desc: "Laptop", Day: 7}
                ],  "B": [

        ]}
    };

        $scope.init = function() {
            //On load screen logic
        };

        /**
         * user controller variables
         */
    }

});