angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function ($scope, $filter, uppercaseFilter) {
    $scope.app = "Lista Telefonica";
    $scope.contatos = [
        { nome: $filter('uppercase')("Pedro"), telefone: "99998888", date: new Date(), cor: "blue" },
        { nome: uppercaseFilter("Ana"), telefone: "99998877", date: new Date(), cor: "yellow" },
        { nome: "Maria", telefone: "99998866", date: new Date(), cor: "red" }
    ];
    $scope.operadoras = [
        { nome: "Claro", codigo: "21", categoria: "Celular" },
        { nome: "Oi", codigo: "14", categoria: "Celular" },
        { nome: "Tim", codigo: "41", categoria: "Celular" },
        { nome: "Vivo", codigo: "15", categoria: "Celular" },
        { nome: "GVT", codigo: "25", categoria: "Fixo" },
        { nome: "Embratel", codigo: "22", categoria: "Fixo" }
    ]
    $scope.adicionarContato = function (contato) {
        $scope.contatos.push(angular.copy(contato));
        delete $scope.contato;
        $scope.contatoForm.$setPristine();
    };
    $scope.classe = "selecionado";
    $scope.apagaContato = function (contatos) {
        $scope.contatos = contatos.filter(function (contato) {
            if (!contato.selecionado) return contato;
        });
    };
    $scope.isContatoSelecionado = function (contatos) {
        return contatos.some(function (contato) {
            return contato.selecionado;
        });
    };
    $scope.ordernarPor = function (campo) {
        $scope.order = campo;
        $scope.invert = !$scope.invert;
    };
});