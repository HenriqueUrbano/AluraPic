angular.module('alurapic').controller('FotosController', function($scope, $http) {
	
	//Declaração inicial da variávei Scope
	$scope.foto = []; 
	//Filtro recebe o valor digitado no input com ng-model ='filtro'
	$scope.filtro = '';

	//Realiza uma requisição assíncrona para obter os dados
	$http.get('v1/fotos')
	//Executa caso a requisição ocorra com suceso
	.success(function(fotos){
		$scope.foto = fotos;
	})
	//Executa caso a requisição NÃO ocorra com sucesso
	.error(function(error){
		console.log(error);
	});

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