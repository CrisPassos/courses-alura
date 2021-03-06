System.register(["../views/index", "../models/index", "../helpers/logarTempoExecucao", "../helpers/domInject", "../helpers/index"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var index_1, index_2, logarTempoExecucao_1, domInject_1, index_3, NegociacaoController;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (index_2_1) {
                index_2 = index_2_1;
            },
            function (logarTempoExecucao_1_1) {
                logarTempoExecucao_1 = logarTempoExecucao_1_1;
            },
            function (domInject_1_1) {
                domInject_1 = domInject_1_1;
            },
            function (index_3_1) {
                index_3 = index_3_1;
            }
        ],
        execute: function () {
            NegociacaoController = class NegociacaoController {
                constructor() {
                    this._negociacoes = new index_2.Negociacoes();
                    this._negociacoesView = new index_1.NegociacoesView('#negociacoesView');
                    this._mensagemView = new index_1.MensagemView('#mensagemView');
                    this._negociacoesView.update(this._negociacoes);
                }
                adiciona(event) {
                    event.preventDefault();
                    const negociacao = new index_2.Negociacao(new Date(this._inputData.val().replace(/-/g, ',')), parseInt(this._inputQuantidade.val()), parseFloat(this._inputValor.val()));
                    this._negociacoes.adiciona(negociacao);
                    index_3.imprime(negociacao, this._negociacoes);
                    this._negociacoesView.update(this._negociacoes);
                    this._mensagemView.update('Negocia????o adicionada com sucesso!');
                }
                importarDados() {
                    function isOK(res) {
                        if (res.ok) {
                            return res;
                        }
                        else {
                            throw new Error(res.statusText);
                        }
                    }
                    fetch('http://localhost:8080/dados')
                        .then(res => isOK(res))
                        .then(res => res.json())
                        .then((dados) => {
                        dados
                            .map(dado => new index_2.Negociacao(new Date(), dado.vezes, dado.montante))
                            .forEach(negociacao => this._negociacoes.adiciona(negociacao));
                        this._negociacoesView.update(this._negociacoes);
                    })
                        .catch(err => console.log(err.message));
                }
            };
            __decorate([
                domInject_1.domInject('#data')
            ], NegociacaoController.prototype, "_inputData", void 0);
            __decorate([
                domInject_1.domInject('#quantidade')
            ], NegociacaoController.prototype, "_inputQuantidade", void 0);
            __decorate([
                domInject_1.domInject('#valor')
            ], NegociacaoController.prototype, "_inputValor", void 0);
            __decorate([
                logarTempoExecucao_1.logarTempoExecucao(true)
            ], NegociacaoController.prototype, "adiciona", null);
            exports_1("NegociacaoController", NegociacaoController);
        }
    };
});
