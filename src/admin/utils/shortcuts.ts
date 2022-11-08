export class Shortcuts
{

    static hasOwn(obj, prop) {
        if(this.isArray(prop) && 0 < prop.length){
            for(let value of prop){
                if(!(obj && {}.hasOwnProperty.call(obj, value))){
                    return false;
                }
            }
            return true;
        }
        return (obj && {}.hasOwnProperty.call(obj, prop));
    }

    static isArray(obj) {
        return Array.isArray(obj);
    }
    static get(object, prop, defaultReturn)
    {
        return this.hasOwn(object, prop) ? object[prop] : defaultReturn;
    }
}
