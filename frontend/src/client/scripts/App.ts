import {
    IMessagingChannel,
    IMessagingEndpoints,
    Logger,
    MessagingSystem
} from "@scsa/messaging";

export class App implements IMessagingEndpoints {
    public channel: IMessagingChannel;
    private logger: Logger;

    constructor(messagingSystem: MessagingSystem) {
        this.channel = messagingSystem.options.channel;
        this.channel.subscribe(this);
        this.logger = new Logger();
    }

    public handleEndpoint(data: any) {
        try {
            this.logger.write(data);
        } catch (error) {
            console.warn(error);
        }
    }
}
