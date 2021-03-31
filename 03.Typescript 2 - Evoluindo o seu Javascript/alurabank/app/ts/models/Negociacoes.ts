import { Igualavel } from "./Igualavel";
import { Imprimivel } from "./Imprimivel";
import { Negociacao } from "./Negociacao";

export class Negociacoes implements Imprimivel, Igualavel<Negociacoes> {

    private _negociacoes: Negociacao[] = [];

    adiciona(negociacao: Negociacao): void {

        this._negociacoes.push(negociacao);
    }

    paraArray(): Negociacao[] {

        return [].concat(this._negociacoes);
    }

    paraTexto(): void {
        console.log('Impressão');
        console.log(JSON.stringify(this._negociacoes));
    }

    ehIgual(objeto: Negociacoes): boolean {
        return JSON.stringify(this._negociacoes) == JSON.stringify(objeto.paraArray())
    }

}
