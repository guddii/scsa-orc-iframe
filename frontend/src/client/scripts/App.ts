import {
    MessagingEndpoints,
    MessagingChannel,
    MessagingSystem,
    Logger
} from "@scsa/messaging";

export class App implements MessagingEndpoints {
    channel: MessagingChannel;
    private logger: Logger;

    constructor(messagingSystem: MessagingSystem) {
        this.channel = messagingSystem.options.channel;
        this.channel.subscribe(this);
        this.logger = new Logger();
    }

    handleEndpoint(data: any) {
        try {
            this.logger.write(data);
        } catch (error) {
            console.warn(error);
        }
    }
}
