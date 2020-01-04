import {
    IMessagingEndpoints,
    Logger,
    MessagingSystem
} from "@scsa/messaging";

export class App implements IMessagingEndpoints {

    private logger: Logger;

    constructor(messagingSystem: MessagingSystem) {
        messagingSystem.observable.subscribe(this);
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
