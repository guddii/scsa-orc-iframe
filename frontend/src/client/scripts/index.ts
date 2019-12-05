import {
    EndpointProperties,
    MessagingSystemFactory,
    SecurityChecks
} from "@scsa/messaging";

import { App } from "./App";
import { cfg } from "../../config";

const recipients = new Map<string, Array<EndpointProperties>>();
recipients.set(cfg.APPLICATIONS.Catalogue.options.text, [cfg.APPLICATIONS.Checkout]);
recipients.set(cfg.APPLICATIONS.Checkout.options.text, [cfg.APPLICATIONS.Sales]);

const securityChecks = new SecurityChecks(cfg.endpoints());
const messaging = MessagingSystemFactory.create(recipients, securityChecks);
const endpoint = new App(messaging);

endpoint.publish();
