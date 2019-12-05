import {
    MessagingEndpoints,
    EndpointProperties,
    Message,
    MessagingChannel,
    MessagingSystem,
    LoggerSingleton
} from "@scsa/messaging";
import { cfg } from "../../config";

export class App implements MessagingEndpoints {
    properties: EndpointProperties = cfg.CURRENT;
    channel: MessagingChannel;

    constructor(messagingSystem: MessagingSystem) {
        this.channel = messagingSystem.channel;
        this.channel.subscribe(this, cfg.APPLICATIONS.Sales.options.text);
        this.channel.subscribe(this, cfg.APPLICATIONS.Catalogue.options.text);
        this.channel.subscribe(this, cfg.APPLICATIONS.Checkout.options.text);
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
              cfg.APPLICATIONS.Sales.options.text
            );
            this.channel.publish(
              new Message({ hello: "Catalogue, are you there?" }),
              cfg.APPLICATIONS.Catalogue.options.text
            );
            this.channel.publish(
              new Message({ hello: "Checkout, are you there?" }),
              cfg.APPLICATIONS.Checkout.options.text
            );
        } catch (error) {
            console.warn(error);
        }
    }
}
