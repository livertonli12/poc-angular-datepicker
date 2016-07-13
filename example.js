(function() {
    'use strict';

    angular.module('treinamento', ['ngAnimate', 'ui.bootstrap']);
    angular.module('treinamento').controller('MainController', MainController);

    function MainController($scope) {
        $scope.dateOptions = {
            dateDisabled: disabled,
            minDate: new Date(),
            startingDay: 1
        };

        function disabled(data) {
            var date = data.date,
                mode = data.mode;
            return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
        }

        $scope.open2 = function() { $scope.popup2.opened = true; };
        $scope.popup2 = { opened: false };
        
    }
    MainController.$inject = ['$scope'];

})();
