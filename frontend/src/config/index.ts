import { Config, OrchestratorKeys } from "@scsa/global";
import json from "../../package.json"

export const cfg = new Config(OrchestratorKeys.iFrame);
export const pkg = json;
