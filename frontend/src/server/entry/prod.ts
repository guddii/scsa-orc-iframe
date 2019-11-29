// tslint:disable-next-line:no-submodule-imports
import { Blueprint, Config } from "@scsa/styling/src/prod";

// Initialize default application
const cfg = new Config("iFrame");
const app = new Blueprint(cfg).mounts();

// Assign application to listener
app.listen(cfg.PORT);
