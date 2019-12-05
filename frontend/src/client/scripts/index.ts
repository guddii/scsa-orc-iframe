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

const secure = Object.values(cfg.endpoints()).map((app: any) => app.options.url.host);
const securityChecks = new SecurityChecks(secure);

const messaging = MessagingSystemFactory.create(recipients, securityChecks);
const endpoint = new App(messaging);

endpoint.publish();
