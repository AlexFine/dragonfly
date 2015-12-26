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

.controller('PlaylistsCtrl', function ($scope, $http, $ionicModal) {
    $scope.go = function (query) {
        $http.get("http://dragonflysearch.com/api/search.php?q=" + query)
            .then(function (response) {
                //$scope.Facts = response.data.Facts;
                console.log("RESPONSE" + response.data.Facts);
                dflynotes = response.data;
                $scope.Facts = dflynotes.Facts;
                console.log("SCOPE FACTS" + $scope.Facts);
                console.log("DFLY NOTES.FACTS" + dflynotes.Facts[0]);
            })
    }

    $ionicModal.fromTemplateUrl('my-modal.html', {
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function (modal) {
        $scope.modal = modal;
    });
    $scope.openModal = function () {
        $scope.modal.show();
    };
    $scope.closeModal = function () {
        $scope.modal.hide();
    };
    //Cleanup the modal when we're done with it!
    $scope.$on('$destroy', function () {
        $scope.modal.remove();
    });
    // Execute action on hide modal
    $scope.$on('modal.hidden', function () {
        // Execute action
    });
    // Execute action on remove modal
    $scope.$on('modal.removed', function () {
        // Execute action
    });

})

.controller('PlaylistCtrl', function ($scope, $stateParams) {})

.controller('searchController', function ($scope, $stateParams, $http) {

})

.controller('help', function ($scope, $http, $log, $timeout) {

    // Inititate the promise tracker to track form submissions.


    //$scope.link = "mailto:"+email.to+"?subject="+encodeURIComponent(email.subject)+"&body="+encodeURIComponent(email.body);
    // Form submit handler.
    
    console.log($scope.link)
     // Default values for the request.
        var config = {


            'name': $scope.name,
            'email': $scope.email,

            'comments': $scope.comments

        };
    
    $scope.submit = function (form) {
        // Trigger validation flag.
        $scope.submitted = true;

        // If form is invalid, return and let AngularJS show validation errors.
        //if (form.$invalid) {
        //  return;
        //}

       
        var emails = {
            to: ["josh@technocademy.org"],
            subject: 'Help for ' + config.name,
            body: config.comments + "Contact me at:" + config.email,
            isHtml: false
        };
        console.log(config.name);
        window.plugin.email.open(emails, function () {
            console.log("email view dismissed");
        });
        console.log(config);
        // Perform JSONP request.



        $scope.name;
        $scope.email;
        $scope.subjectList = null;
        $scope.url = null;
        $scope.comments = null;
        $scope.messages = 'Your form has been sent!';
        $scope.submitted = false;



        // Track the request and show its progress to the user.

    };
});