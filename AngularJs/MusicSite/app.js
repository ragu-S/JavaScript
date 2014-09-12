/* Main App Module */

var app = angular.module('musicApp', []);

app.controller('recordDisplay', ['$scope', '$http', function($scope, $http) {

  $http.get('js/data.json').success(function(data) {
    $scope.records = data;
  });
}]);

var categories = {
  "Jazz" : "jazz",
  "Blues" : [],
  "Classical" : []
};

var author = [
  {
    "name" : "Bill Evans",
    "bio" : "Wonderful life of Bill Evans",
    "dob" : "1928",
    "dod" : "1987"
  },
  {
    "name" : "Milles Davis",
    "bio" : "Wonderful life of Milles Davis",
    "dob" : "1928",
    "dod" : "1987"
  },
  {
    "name" : "John Coltrane",
    "bio" : "Wonderful life of John Coltrane",
    "dob" : "1928",
    "dod" : "1987"
  },
  {
    "name" : "Oscar Peterson",
    "bio" : "Wonderful life of Oscar Peterson",
    "dob" : "1928",
    "dod" : "1987"
  }
];

function createRecord(prevId, title, image, description, author, publisher, rating) {
  this.uniqueID = 0;
  this.title = title;
  this.image = "images/" + image;
  this.description = description;
  this.author = author;
  this.publisher = publisher;
  this.rating = rating;
}
