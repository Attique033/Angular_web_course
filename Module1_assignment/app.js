(function() {
  'use-strict'
  angular.module('CheckLunch',[]).controller('LunchController',LunchController);
  LunchController.$inject=['$scope'];
  function LunchController ($scope){
    var count;
    $scope.CountItems= function(){
      count=0;
      if($scope.food==null || $scope.food.length==0){ //checking if input is undefined
      $scope.DisplayMessage="Enter some text, field empty";
      return;
      }

      Count($scope.food)
      if(count>3)
      $scope.DisplayMessage="Too much";
      else
      $scope.DisplayMessage="Enjoy!";
    }

    function  Count(string){
      for(var i=0;i<string.length;i++){
        if(string.charAt(i)==',')
        count++;
      }

    }
  };
})();
