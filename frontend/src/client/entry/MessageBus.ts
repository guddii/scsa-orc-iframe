import {
  ChannelKeys,
  MessageBus,
  MessagingSystem,
  SecurityChecks
} from "@scsa/messaging";
import "../index.css";

import { cfg } from "../../config";
import { App } from "../scripts/App";

class MessageBusMessagingSystem extends MessagingSystem {
  public security(): this {
    super.security();
    this.options.security = new SecurityChecks(cfg.endpoints());
    return this;
  }

  public channel(): this {
    super.channel();
    this.type = ChannelKeys.MessageBus;
    this.options.channel = new MessageBus();
    return this;
  }
}

const messaging = new MessageBusMessagingSystem();
const app = new App(messaging);
