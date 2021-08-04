exports.lambdaHandler = async (event, context) => {
    return event.queryStringParameters.foo;
};

// sam local invoke -e ./apitegateway/apigateway_event.json ApiGatewayFunction
//sam local start-api