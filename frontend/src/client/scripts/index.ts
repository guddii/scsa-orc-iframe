import { MessagingSystem, SecurityChecks } from "@scsa/messaging";

import { cfg } from "../../config";
import { App } from "./App";

const securityChecks = new SecurityChecks(cfg.endpoints());
const messaging = new MessagingSystem({
    security: securityChecks
});
new App(messaging);
