angular.module('starter.controllers', ['ngStorage'])

.controller('DashCtrl', ['$localStorage', '$scope',
	function($localStorage, $scope) {

		$localStorage.cores = 1;

		console.log( $localStorage);

	}
])

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

/*====================================
=            Accounts Tab            =
====================================*/
//.controller('HomeCtrl', function($scope, $timeout, $ionicModal, $ionicActionSheet) {
//.controller('AccountCtrl', function($scope) {
.controller('AccountCtrl', function($scope, $timeout, $ionicModal, $ionicActionSheet) {

	$ionicModal.fromTemplateUrl('views/modals/newTask.html', {
		scope: $scope,
		animation: 'slide-in-up'
	}).then(function(modal){
		$scope.modal = modal;
	});


	$scope.newTask = function() {
	  $scope.settingsModal.show();
	};
})

.controller('TaskCtrl', function($scope) {
  $scope.close = function() {
    $scope.modal.hide();
  }
})

/*=================================
=            Cores Tab            =
=================================*/

.controller('CoresCtrl', [ '$localStorage', '$scope',
	function($localStorage, $scope) {

		$localStorage.cores++;

		console.log( $localStorage);

	}
])

.controller('DataCtrl', function($scope) {
})

// http://codepen.io/FrancoAA/pen/oufzD/
.controller('SettingsCtrl', [ '$localStorage', '$scope',
	function($localStorage, $scope) {

		$localStorage.testvar = "testing 123";

		console.log( $localStorage);


		$scope.clearAllData = function(){
			if( confirm('Cannot undo - clear all app localstorage data?')){
				window.localStorage.clear();
				console.log('cleared', $localStorage);
			}
		}

	}
])



; // angular.module starter.controllers