angular.module('alurapic').controller('FotosController', function($scope, recursoFoto) {
	
	//Declaração inicial da variávei Scope
	$scope.foto = []; 
	//Filtro recebe o valor digitado no input com ng-model ='filtro'
	$scope.filtro = '';

	$scope.mensagem = '';

	recursoFoto.query(function(fotos){
		$scope.foto = fotos;

	}, function(erro){
		console.log(erro);
	});

	$scope.remover = function(foto){
		//Remove a foto
		recursoFoto.delete({fotoId : foto._id}, function(){
			var indiceFoto = $scope.foto.indexOf(foto);
			$scope.foto.splice(indiceFoto, 1);
			$scope.mensagem = 'Foto ' + foto.titulo + ' foi removida com sucesso';
		}, function(erro){
			$scope.mensagem = 'Não foi possível remover a foto ' + foto.titulo + ' no momento';
		});	
	
	}

	
	//Realiza uma requisição assíncrona para obter os dados
	//$http.get('v1/fotos')
	//Executa caso a requisição ocorra com suceso
	//.success(function(fotos){
	//	$scope.foto = fotos;
	//})
	//Executa caso a requisição NÃO ocorra com sucesso
	//.error(function(error){
	//	console.log(error);
	//});

		/*
		$http.delete('v1/fotos/' + foto._id)
		.success(function(){
			
		})
		.error(function(erro){
			
		});
		*/

	/* VERSÃO COM PROMISE
	//Realiza uma requisição assíncrona para obter os dados
	var promise = $http.get('v1/fotos');
	//Executa caso a requisição ocorra com suceso
	promise.then(function(retorno){
		$scope.foto = retorno.data;
	}).catch(function(erro){
		//Função chamada caso a requisição não ocorra com sucesso
		console.log(error);
	});
	*/

});