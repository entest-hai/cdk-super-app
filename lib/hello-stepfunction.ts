import {
  aws_lambda,
  aws_stepfunctions,
  aws_stepfunctions_tasks,
  Stack,
  StackProps,
} from "aws-cdk-lib";
import { Construct } from "constructs";
import * as path from 'path';



export class HelloStepFunction extends Stack {
  constructor(scope: Construct, id: string, props: StackProps) {
    super(scope, id, props);

    const fn = new aws_lambda.Function(this, "HelloStepFunction", {
      functionName: "HelloStepFunction",
      runtime: aws_lambda.Runtime.PYTHON_3_8,
      code: aws_lambda.Code.fromAsset(
        path.join(__dirname, "../lambda")
      ),
      handler: "hello_stepfunction_handler.handler",
    });

    new aws_stepfunctions.StateMachine(this, "HelloStateMachinie", {
      stateMachineName: "HelloStateMachine",
      definition: new aws_stepfunctions_tasks.LambdaInvoke(
        this,
        "HelloLambdaTask",
        {
          lambdaFunction: fn,
        }
      ).next(new aws_stepfunctions.Succeed(this, "HelloWorld")),
    });
  }
}
