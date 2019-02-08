angular.module('minhasDiretivas', [])
.directive('meuPainel',function(){

    var ddo = {};

    //Restrições da Diretiva (A = Atribute, E = Element)
    ddo.restrict ="AE";

    //Escopo privado da diretiva (O que a diretiva possui dentro de si)
    ddo.scope ={
        // @ Envia os dados como uma cópia em string do valor
        titulo:'@'
    };
    //Permite a inclusão de elementos filhos em nossa diretiva customizada
    ddo.transclude = true;

    //Template da diretiva (Diretiva ng-transclude necessária para inclusão de elemento filho na div)
    ddo.templateUrl='js/directives/meu-painel.html';
    //Toda diretiva precisa retornar uma DDO (Directive Definition Object)
    return ddo;
})
.directive('minhaFoto',function(){

    var ddo = {};

    ddo.restrict ="AE";

    ddo.scope={
        titulo:'@',
        url:'@'
    };

    ddo.templateUrl="js/directives/minha-foto.html";

    return ddo;
})
.directive('meuBotaoPerigo',function(){

    var ddo = {};

    ddo.restrict ="E";

    ddo.scope={
        texto:'@',
        // & é utilizado para enviar o dado como expressão, em vez de enviar uma cópia em string
        acao:'&'
    };
    // Declaração do template Inline
    ddo.template="<button class='btn btn-danger btn-block' ng-click=acao(foto)>{{texto}}</button>";

    return ddo;
});