angular.module('alurapic').controller('CadastroController', function($scope, $http, $routeParams, recursoFoto){
    
    $scope.foto = {};
    $scope.mensagem = '';

    if($routeParams.fotoId){
        recursoFoto.get({fotoId : $routeParams.fotoId}, function(foto){
            $scope.foto = foto;
        }, function(erro){
            console.log(erro);
            $scope.mensagem = 'Não foi possível obter a foto'
        });
        // .success(function(foto){
        //     $scope.foto = foto;
        // })
        // .error(function(erro){
        //     console.log(erro);
        //     $scope.mensagem = 'Não foi possível obter a foto!';
        // })
    }

    $scope.submeter = function(){
        if($scope.formulario.$valid){
            if($scope.foto._id){

                recursoFoto.update({fotoId : $scope.foto._id}, $scope.foto, function(){
                    $scope.mensagem= 'Foto ' + $scope.foto.titulo + ' alterada com sucesso!';
                }, function(erro){
                    $scope.mensagem= 'Não foi possível alterar a foto' + $scope.foto.titulo + '!';
                    console.log(erro);
                });

                /* $http.put('v1/fotos/' + $scope.foto._id, $scope.foto)
                .success(function(){
                    
                })
                .error(function(erro){
                    
                }); */
            } else {
                
                recursoFoto.save($scope.foto, function(){
                    $scope.foto = {};
                    $scope.mensagem = 'Foto Incluída com Sucesso!';
                }, function(erro){
                    console.log(erro);
                    $scope.mensagem='Não foi possível incluir a foto!';
                });

                /* $http.post('v1/fotos', $scope.foto)
                .success(function(){
                    $scope.foto = {};
                    $scope.mensagem= 'Foto cadastrada com sucesso!';
                })
                .error(function(erro){
                    $scope.mensagem= 'Não foi possível incluir a foto!';
                    console.log(erro);
                }); */
            };
        };
    };

});