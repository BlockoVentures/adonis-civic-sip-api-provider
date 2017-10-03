'use strict'

const civicSip = require('civic-sip-api');
const Civic = exports = module.exports = {};
let civicClient;

Civic.setClient = function(appId, prvKey, appSecret) {
    civicClient = civicSip.newClient({ appId: appId,
        prvKey: prvKey,
        appSecret: appSecret
    })
};

Civic.getUser = function(jwt) {
    civicClient.exchangeCode(jwt).then(function(userData) {

        let result = {};
        data.reduce((previous,item) => {

            if(!item.isValid || !item.isOwner) {
                // TODO: Throw Exception
                return false;
            }

            let label = item.label.split('.');
            label = label[label.length-1];

            result[label] = item.value
        }, null);

        return {userId: userData.userId, email: email, phonenumber: phonenumber}
    });
};