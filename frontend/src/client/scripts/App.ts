import {
    MessagingEndpoints,
    MessagingChannel,
    MessagingSystem,
    LoggerSingleton
} from "@scsa/messaging";
import { cfg } from "../../config";

export class App implements MessagingEndpoints {
    channel: MessagingChannel;

    constructor(messagingSystem: MessagingSystem) {
        this.channel = messagingSystem.options.channel;
        this.channel.subscribe(this);
    }

    handleEndpoint(data: any) {
        try {
            const instance = LoggerSingleton.getInstance();
            instance.write(data);
        } catch (error) {
            console.warn(error);
        }
    }

}
