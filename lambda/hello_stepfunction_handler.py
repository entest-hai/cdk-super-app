import json 
import logging

logger = logging.getLogger()
logger.setLevel(logging.INFO)


def handler(event, context):

  logger.info("Hello StepFunction")

  return json.dumps({
    'message': 'hello stepfuction'
  })
