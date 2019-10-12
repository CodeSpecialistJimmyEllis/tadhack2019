var TeleSignSDK = require('telesignsdk');

const customerId = "0C6EEF5F-781C-49BF-8ECF-6CF275DFD8E4";
const apiKey = "zqRjDsz6uFRXPuXJJ1lhd2gDtHcr5MvN+CiH1HT2pvzp3z4XhrYIXiT5DAaybVdKEsT/2xrd83gG2J2ww3Y1TQ==";
const rest_endpoint = "https://rest-api.telesign.com";
const timeout = 10*1000; // 10 secs

const client = new TeleSignSDK( customerId,
    apiKey,
    rest_endpoint,
    timeout // optional
    // userAgent
);

const phoneNumber = "17739691648";
const message = "Welcome to Craig's SeaFood Shack";
const messageType = "ARN";

console.log("## MessagingClient.message ##");

function messageCallback(error, responseBody) {
    if (error === null) {
        console.log(`Messaging response for messaging phone number: ${phoneNumber}` +
            ` => code: ${responseBody['status']['code']}` +
            `, description: ${responseBody['status']['description']}`);
    } else {
        console.error("Unable to send message. " + error);
    }
}
client.sms.message(messageCallback, phoneNumber, message, messageType);
