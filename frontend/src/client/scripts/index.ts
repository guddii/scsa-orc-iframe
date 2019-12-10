import { MessagingSystemFactory, SecurityChecks } from "@scsa/messaging";

import { App } from "./App";
import { cfg } from "../../config";

const securityChecks = new SecurityChecks(cfg.endpoints());
const messaging = MessagingSystemFactory.create({ security: securityChecks });
new App(messaging);
