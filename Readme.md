This repository is intended to be used as a boiler plate for aws lambda testing. The basic lambda function was converted to python for ease of use. Please note the apigateway_event.json file has not been completed, and all of the apigateway files are not updated for python; my project did not require aws api gateway. Also please note, you need aws SAM CLI, and docker desktop installed to properly run the repository. Docker desktop must be running when used. Also, lots of applications use base64 encoding. generally, I would recommend encoding your data. 