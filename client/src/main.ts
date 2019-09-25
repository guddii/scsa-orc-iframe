import { MessagingSystemFactory } from "scsa-lib-messaging/src/MessagingSystem";
import { EndpointProperties } from "scsa-lib-messaging/src/endpoints/Endpoint";
import { Applications } from "./scripts/Constant";

import "./main.css";
import { App } from "./scripts/App";
import { SecurityChecks } from "scsa-lib-messaging/src/SecurityChecks";

const recipients = new Map<string, Array<EndpointProperties>>();
recipients.set(Applications.CHECKOUT.name, [Applications.CHECKOUT]);

// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
const secureContexts = Object.values(Applications).map(
    (app: any) => app.url.host
);
const securityChecks = new SecurityChecks(secureContexts);

const messaging = MessagingSystemFactory.create(recipients, securityChecks);
const endpoint = new App(messaging);

endpoint.publish();
