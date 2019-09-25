import { MessagingEndpoints } from "scsa-lib-messaging/src/types/MessagingEndpoints";
import { EndpointProperties } from "scsa-lib-messaging/src/endpoints/Endpoint";
import { Message } from "scsa-lib-messaging/src/constructors/Message";
import { MessagingChannel } from "scsa-lib-messaging/src/types/MessagingChannel";
import { MessagingSystem } from "scsa-lib-messaging/src/MessagingSystem";
import { Applications } from "./Constant";

export class App implements MessagingEndpoints {
    properties: EndpointProperties = Applications.MAIN;
    channel: MessagingChannel;

    constructor(messagingSystem: MessagingSystem) {
        this.channel = messagingSystem.channel;
        this.channel.subscribe(this, Applications.ACCOUNT.name);
        this.channel.subscribe(this, Applications.CATALOGUE.name);
        this.channel.subscribe(this, Applications.CHECKOUT.name);
    }

    handleEndpoint(data: any) {
        console.log(data);
    }

    publish() {
        try {
            this.channel.publish(
                new Message({ hello: "Account, are you there?" }),
                Applications.ACCOUNT.name
            );
            this.channel.publish(
                new Message({ hello: "Catalogue, are you there?" }),
                Applications.CATALOGUE.name
            );
            this.channel.publish(
                new Message({ hello: "Checkout, are you there?" }),
                Applications.CHECKOUT.name
            );
        } catch (error) {
            console.warn(error);
        }
    }
}
