import {Logger} from "../utils/logger";

export class AdminEntitiesGenerator
{

    static generateEntities(loadedEntities, generatedDrivers)
    {
        let rawEntitiesKeys = Object.keys(loadedEntities);
        let driverEntitiesKeys = Object.keys(generatedDrivers);
        if(rawEntitiesKeys.length !== driverEntitiesKeys.length){
            Logger('GenerateEntities').error('Raw entities and driver entities mismatch.', rawEntitiesKeys, driverEntitiesKeys);
            return {};
        }
        let generatedEntities = {};
        for(let i of rawEntitiesKeys){
            generatedEntities[i] = {
                rawEntity: generatedDrivers[i],
                config: loadedEntities[i].config
            }
        }
        return generatedEntities;
    }

}
