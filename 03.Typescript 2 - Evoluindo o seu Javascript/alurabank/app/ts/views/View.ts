import { logarTempoExecucao } from "../helpers/logarTempoExecucao";

export abstract class View<T> {

    protected _elemento: JQuery;

    constructor(seletor: string, private _escapar?: string) {

        this._elemento = $(seletor);
    }

    update(model: T) {
        let template = this.template(model);
        if (this._escapar)
            template = template.replace(/<script>[\s\S]*?<\/script>/, '');

        this._elemento.html(template);
    }

    abstract template(model: T): string;

}

