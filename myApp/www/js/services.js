//angular.module('starter.services', ['ionic', 'ngCordova'])
//    .service('search', ['$http', 'photos', function ($http, photos) {
//        var facts = [];
//        return {
//            getFacts: function (query) {
//
//                $http.get("http://dragonflysearch.com/api/search.php?q=" + query)
//                    .then(function (resp) {
//                        if (resp.data.Facts) {
//                            dflynotes = resp.data;
//                            facts.push(dflynotes.Facts[0]);
//                            return facts;
//                        }
//                    }, function (err) {
//                        if (!resp.data.facts) {
//                            console.log('no info on ' + query + ' yet :)');
//                        }
//                    })
//            }
//        }
//}])