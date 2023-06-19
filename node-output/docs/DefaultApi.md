# CalculatorApi.DefaultApi

All URIs are relative to *http://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addABGet**](DefaultApi.md#addABGet) | **GET** /add/{a}/{b} | Perform addition operation
[**divideABGet**](DefaultApi.md#divideABGet) | **GET** /divide/{a}/{b} | Perform division operation
[**multiplyABGet**](DefaultApi.md#multiplyABGet) | **GET** /multiply/{a}/{b} | Perform multiplication operation
[**rootGet**](DefaultApi.md#rootGet) | **GET** / | Get available routes
[**subtractABGet**](DefaultApi.md#subtractABGet) | **GET** /subtract/{a}/{b} | Perform subtraction operation

<a name="addABGet"></a>
# **addABGet**
> InlineResponse2001 addABGet(a, b)

Perform addition operation

Adds two numbers and returns the result.

### Example
```javascript
import {CalculatorApi} from 'calculator_api';

let apiInstance = new CalculatorApi.DefaultApi();
let a = 1.2; // Number | The first number to be added.
let b = 1.2; // Number | The second number to be added.

apiInstance.addABGet(a, b, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **a** | **Number**| The first number to be added. | 
 **b** | **Number**| The second number to be added. | 

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="divideABGet"></a>
# **divideABGet**
> InlineResponse2004 divideABGet(a, b)

Perform division operation

Divides the first number by the second number and returns the result.

### Example
```javascript
import {CalculatorApi} from 'calculator_api';

let apiInstance = new CalculatorApi.DefaultApi();
let a = 1.2; // Number | The number to be divided.
let b = 1.2; // Number | The number to divide by.

apiInstance.divideABGet(a, b, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **a** | **Number**| The number to be divided. | 
 **b** | **Number**| The number to divide by. | 

### Return type

[**InlineResponse2004**](InlineResponse2004.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="multiplyABGet"></a>
# **multiplyABGet**
> InlineResponse2003 multiplyABGet(a, b)

Perform multiplication operation

Multiplies two numbers and returns the result.

### Example
```javascript
import {CalculatorApi} from 'calculator_api';

let apiInstance = new CalculatorApi.DefaultApi();
let a = 1.2; // Number | The first number to be multiplied.
let b = 1.2; // Number | The second number to be multiplied.

apiInstance.multiplyABGet(a, b, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **a** | **Number**| The first number to be multiplied. | 
 **b** | **Number**| The second number to be multiplied. | 

### Return type

[**InlineResponse2003**](InlineResponse2003.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="rootGet"></a>
# **rootGet**
> InlineResponse200 rootGet()

Get available routes

Returns the available routes and their descriptions.

### Example
```javascript
import {CalculatorApi} from 'calculator_api';

let apiInstance = new CalculatorApi.DefaultApi();
apiInstance.rootGet((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="subtractABGet"></a>
# **subtractABGet**
> InlineResponse2002 subtractABGet(a, b)

Perform subtraction operation

Subtracts the second number from the first number and returns the result.

### Example
```javascript
import {CalculatorApi} from 'calculator_api';

let apiInstance = new CalculatorApi.DefaultApi();
let a = 1.2; // Number | The number to be subtracted from.
let b = 1.2; // Number | The number to subtract.

apiInstance.subtractABGet(a, b, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **a** | **Number**| The number to be subtracted from. | 
 **b** | **Number**| The number to subtract. | 

### Return type

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

