import * as cdk from 'aws-cdk-lib';
import { HelloStepFunction } from '../lib/hello-stepfunction';

// create an app 
const app = new cdk.App();

// stack inside the app 
new HelloStepFunction(app, "HelloStepFunctionStack", {});