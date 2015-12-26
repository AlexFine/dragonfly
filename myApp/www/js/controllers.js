angular.module('starter.controllers', [])

.controller('AppCtrl', function ($scope, $ionicModal, $timeout) {

    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    // Form data for the login modal
    $scope.loginData = {};

    // Create the login modal that we will use later
    $ionicModal.fromTemplateUrl('templates/login.html', {
        scope: $scope
    }).then(function (modal) {
        $scope.modal = modal;
    });

    // Triggered in the login modal to close it
    $scope.closeLogin = function () {
        $scope.modal.hide();
    };

    // Open the login modal
    $scope.login = function () {
        $scope.modal.show();
    };

    // Perform the login action when the user submits the login form
    $scope.doLogin = function () {
        console.log('Doing login', $scope.loginData);

        // Simulate a login delay. Remove this and replace with your login
        // code if using a login system
        $timeout(function () {
            $scope.closeLogin();
        }, 1000);
    };
})

.controller('PlaylistsCtrl', function ($scope, $http) {
    $scope.go = function () {
        $http.get("http://dragonflysearch.com/api/search.php?q=Hello")
            .then(function (response) {
                //$scope.Facts = response.data.Facts;
                console.log("RESPONSE" + response.data.Facts);
                dflynotes = resp.data;
                $scope.Facts = dflynotes.Facts[0];
                console.log("SCOPE FACTS" + Facts);
                console.log("DFLY NOTES.FACTS" + dflynotes.Facts[0]);
            })
    }


})

.controller('PlaylistCtrl', function ($scope, $stateParams) {})

.controller('searchController', function ($scope, $stateParams, $http) {
    $scope.go = function () {
        $http.get("http://dragonflysearch.com/api/search.php?q=Hello")
            .then(function (response) {
                //$scope.Facts = response.data.Facts;
                console.log("RESPONSE" + response.data.Facts);
                dflynotes = resp.data;
                $scope.Facts = dflynotes.Facts[0];
                console.log("SCOPE FACTS" + Facts);
                console.log("DFLY NOTES.FACTS" + dflynotes.Facts[0]);
            })
    }
    $scope.search = function (query) {
        $http.get("http://dragonflysearch.com/api/search.php?q=" + query)
            .then(function (response) {
                //$scope.Facts = response.data.Facts;
                console.log("RESPONSE" + response.data.Facts);
                dflynotes = resp.data;
                $scope.Facts = dflynotes.Facts[0];
                console.log("SCOPE FACTS" + Facts);
                console.log("DFLY NOTES.FACTS" + dflynotes.Facts[0]);
            })
    }
});