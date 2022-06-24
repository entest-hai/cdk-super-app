#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "aws-cdk-lib";
import { CdkMultipleAppsStack } from "../lib/cdk-multiple-apps-stack";

const app = new cdk.App();
new CdkMultipleAppsStack(app, "CdkMultipleAppsStack", {});
