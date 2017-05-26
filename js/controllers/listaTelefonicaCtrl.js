angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function ($scope, $http, $filter) {
    $scope.app = "Lista Telefonica";
    $scope.contatos = [];
    $scope.operadoras = [];

    var carregarContatos = function () {
        $http.get('http://localhost:3412/contatos')
            .then(function (response) {
                $scope.contatos = response.data;
            })
            .catch(function (response) {
                $scope.message("Aconteceu um problema: " + response.data);
            });
    };

    var carregarOperadoras = function () {
        $http.get('http://localhost:3412/operadoras')
            .then(function (response) {
                $scope.operadoras = response.data;
            })
            .catch(function (response) {
                $scope.message("Aconteceu um problema: " + response.data);
            });
    };

    $scope.adicionarContato = function (contato) {
        $http.post("http://localhost:3412/contatos", contato).then(function (response) {
            // $scope.contatos.push(angular.copy(contato));
            delete $scope.contato;
            $scope.contatoForm.$setPristine();
            carregarContatos();
        });
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

    carregarContatos();
    carregarOperadoras();
});