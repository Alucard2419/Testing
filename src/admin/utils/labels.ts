export const database_labels = [
    {
        NAME: "Sibucán",
        URI: process.env.DATABASE_URI,
        type: "SERVICE",
        DIALECT: "postgres",
    },
    {
        NAME: "Centrico",
        URI: process.env.DATABASE_URI_2,
        type: "SERVICE",
        DIALECT: "postgres",
    },
    {
        NAME: "Magyber",
        URI: process.env.DATABASE_URI_3,
        type: "SERVICE",
        DIALECT: "postgres",
    },
    {
        NAME: "Sibucán Shop",
        URI: process.env.DATABASE_URI_TIENDA,
        type: "TIENDA",
        DIALECT: "postgres",
    },
    {
        NAME: "Authentication",
        URI: process.env.DATABASE_URI_AUTH,
        DIALECT: "mongo",
    },
];
const translations_names = {
    SERVICE: [
        {
            old_name: "Api Appversion",
            new_name: "App Versions",
        },
        {
            old_name: "Api Blogentry",
            new_name: "Blog",
        },
        {
            old_name: "Api Chatroom",
            new_name: "Chatroom",
        },
        {
            old_name: "Api City",
            new_name: "City",
        },
        {
            old_name: "Api Country",
            new_name: "Country",
        },
        {
            old_name: "Api Cubanbank",
            new_name: "Cuban Bank",
        },
        {
            old_name: "Api Cupaymentsaccount",
            new_name: "Payment Account CU",
        },
        {
            old_name: "Api Customemail",
            new_name: "Custom Email",
        },
        {
            old_name: "Api Generalnotification",
            new_name: "Global Notification",
        },
        {
            old_name: "Api Globalemail",
            new_name: "Global Email",
        },
        {
            old_name: "Api Invoice",
            new_name: "Invoice",
        },
        {
            old_name: "Api Membership",
            new_name: "Membership",
        },
        {
            old_name: "Api Membershipdetails",
            new_name: "Membership Details",
        },
        {
            old_name: "Api Membership Permissions", //no
            new_name: "Membership Permissions",
        },
        {
            old_name: "Api Municipality",
            new_name: "Municipality",
        },
        {
            old_name: "Api Category",
            new_name: "Category",
        },
        {
            old_name: "Api Payment",
            new_name: "Payment", //no
        },
        {
            old_name: "Api Profile",
            new_name: "Profile",
        },
        {
            old_name: "Api Review",
            new_name: "Review",
        },
        {
            old_name: "Api Reviewanswer",
            new_name: "Review Answer",
        },
        {
            old_name: "Api Schedule",
            new_name: "Schedule",
        },
        {
            old_name: "Api Service",
            new_name: "Service",
        },
        {
            old_name: "Api Timewindow",
            new_name: "Time Window",
        },
        {
            old_name: "Api Usernotification",
            new_name: "Custom Notification",
        },
        {
            old_name: "Custom User User", //no
            new_name: "Custom User",
        },
        {
            old_name: "Fcm Django Fcmdevice",
            new_name: "Token Device",
        },
    ],
    TIENDA: [
        {
            old_name: "Api Invoice",
            new_name: "Invoice",
        },
        {
            old_name: "Api Invoice id",
            new_name: "Invoice",
        },
        {
            old_name: "Api Product Review",
            new_name: "Review",
        },
        {
            old_name: "Api Product",
            new_name: "Product",
        },
        {
            old_name: "Api Shop",
            new_name: "Shop",
        },
        {
            old_name: "Api Section",
            new_name: "Section",
        },
        {
            old_name: "Api Department",
            new_name: "Department",
        },
        {
            old_name: "Api Location",
            new_name: "Location",
        },
    ],
};

const parse_read = (type, conc: string = "") => {
    return translations_names[type].map(value => {
        return {
            old_name: conc + value.old_name.replace(/ /g, "_").toLowerCase(),
            new_name: value.new_name,
        };
    });
};


const parse_field = (field) => {
    const parsed_string = parse_read('SERVICE').filter(
        value => value.old_name === field
    );
    if (parsed_string.length) return parsed_string[0].new_name;
    else {
        const parsed_string = parse_read('TIENDA').filter(
            value => value.old_name === field
        );
        if (parsed_string.length) return parsed_string[0].new_name;
    }
    return field;
};


export default {
    translations_names: parse_read,
    models_name: [
        ...translations_names['SERVICE'].map(value => value.new_name),
        'Department',
        'Location',
        'Shop',
        'Product',
        'Review',
        'User',
        'Role',
    ],
    parse_field,
    parent_names: database_labels.map(value => value.NAME),
};



















