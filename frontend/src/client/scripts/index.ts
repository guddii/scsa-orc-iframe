import {
    EndpointProperties,
    MessagingSystemFactory,
    SecurityChecks
} from "@scsa/messaging";

import { Applications } from "./Constants";
import { App } from "./App";

const recipients = new Map<string, Array<EndpointProperties>>();
recipients.set(Applications.CATALOGUE.name, [Applications.CHECKOUT]);
recipients.set(Applications.CHECKOUT.name, [Applications.SALES]);

// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
const secureContexts = Object.values(Applications).map(
    (app: any) => app.url.host
);
const securityChecks = new SecurityChecks(secureContexts);

const messaging = MessagingSystemFactory.create(recipients, securityChecks);
const endpoint = new App(messaging);

endpoint.publish();
