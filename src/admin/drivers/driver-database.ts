import {BaseDatabase, BaseResource} from 'adminjs';


export class DriverDatabase extends BaseDatabase {
    orm: any
    constructor(orm) {
        super(orm);
        this.orm = orm;
    }

    resources(): Array<BaseResource> {
        return this.orm.resources;
    }

    static is_adapter_for(orm){
        return !!orm.initialized;
    }
}

