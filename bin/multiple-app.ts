#!/usr/bin/env node
import * as cdk from "aws-cdk-lib";
import { CdkMultipleAppsStack } from "../lib/cdk-multiple-apps-stack";

const app = new cdk.App();

// stack 1
new CdkMultipleAppsStack(app, "FirstStack", {});

// stack 2
new CdkMultipleAppsStack(app, "SecondStack", {});
