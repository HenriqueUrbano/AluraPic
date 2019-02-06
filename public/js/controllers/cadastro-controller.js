angular.module('alurapic').controller('CadastroController', function($scope){
    
    $scope.foto = {};

    $scope.submeter = function(){
        console.log($scope.foto);
    }

});