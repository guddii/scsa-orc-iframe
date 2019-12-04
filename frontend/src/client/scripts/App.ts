import {
    MessagingEndpoints,
    EndpointProperties,
    Message,
    MessagingChannel,
    MessagingSystem,
    LoggerSingleton
} from "@scsa/messaging";
import { Applications } from "./Constants";

export class App implements MessagingEndpoints {
    properties: EndpointProperties = Applications.MAIN;
    channel: MessagingChannel;

    constructor(messagingSystem: MessagingSystem) {
        this.channel = messagingSystem.channel;
        this.channel.subscribe(this, Applications.SALES.name);
        this.channel.subscribe(this, Applications.CATALOGUE.name);
        this.channel.subscribe(this, Applications.CHECKOUT.name);
    }

    handleEndpoint(data: any) {
        try {
            const instance = LoggerSingleton.getInstance();
            instance.write(data);
        } catch (error) {
            console.warn(error);
        }
    }

    publish() {
        try {
            this.channel.publish(
                new Message({ hello: "Account, are you there?" }),
                Applications.SALES.name
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
