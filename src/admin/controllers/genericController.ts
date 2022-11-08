import models from '../../sources/genericDatabase';
import {Logger} from "../utils/logger";

export async function getAll(name) {
    const Model = models[name];
    if (Model.findAll) return await Model.findAll(); // sequelize
    else return await Model.find({}); // mongoose
}

/**
 *
 * @param {*} MainModel
 * @param {*} InterModel
 * @param {*} as
 * @param {*} attribute
 * @param {*} where
 * @returns
 */
export async function genericGetList(MainModel, InterModel, as, attribute, where) {
    if (!MainModel || !InterModel || !as || !attribute || !where) {
        Logger('genericController').error(
            "Fetch will fail",
            MainModel,
            InterModel,
            as,
            attribute,
            where
        );
        return;
    }
    let list = await MainModel.findAll({
        attribute,
    });

    let listMark;
    try {
        listMark = await InterModel.findAll({
            where,
            include: [
                {
                    require: true,
                    model: MainModel,
                    as,
                    attributes: ["id", attribute],
                },
            ],
        });
    } catch (error) {
        Logger('genericController').error(error);
    }

    // mapping list mark
    if (!listMark) listMark = [];
    listMark = listMark.map((value) => {
        return { name: value[as][attribute], id: value[as].id };
    });

    // mapping list
    if (!list) list = [];
    list = list.map((value) => {
        return { name: value[attribute], id: value.id };
    });

    Logger('genericController').debug(listMark, list);

    // returning a formatted array
    return {
        list,
        listMark,
    };
}
/**
 *
 * @param {*} params
 */
export async function genericInsertBulk(MainModel, as, data, idList) {
    if (
        !MainModel ||
        !as ||
        !data ||
        !idList ||
        idList.constructor.name !== "Array"
    ) {
        Logger('genericController').error("insert will fail", MainModel, as, data, idList);
        return;
    }
    try {
        await MainModel.destroy({ where: data });
        await MainModel.bulkCreate(
            idList.map((value) => {
                return { ...data, [as]: value };
            })
        );
    } catch (err) {
        Logger('genericController').error(
            "Error while destroy or bulkCreate",
            { MainModel, as, data, idList },
            err
        );
    }
    return "OK";
}

