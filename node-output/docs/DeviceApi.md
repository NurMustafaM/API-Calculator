# HomeIotApi.DeviceApi

All URIs are relative to *https://virtserver.swaggerhub.com/NORMOHAMAD/API-Calculator/1.0.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getDevices**](DeviceApi.md#getDevices) | **GET** /devices | 
[**register**](DeviceApi.md#register) | **POST** /devices | 

<a name="getDevices"></a>
# **getDevices**
> [&#x27;String&#x27;] getDevices(opts)



returns all registered devices

### Example
```javascript
import {HomeIotApi} from 'home_iot_api';

let apiInstance = new HomeIotApi.DeviceApi();
let opts = { 
  'skip': 56, // Number | number of records to skip
  'limit': 56 // Number | max number of records to return
};
apiInstance.getDevices(opts, (error, data, response) => {
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
 **skip** | **Number**| number of records to skip | [optional] 
 **limit** | **Number**| max number of records to return | [optional] 

### Return type

**[&#x27;String&#x27;]**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="register"></a>
# **register**
> register(opts)



### Example
```javascript
import {HomeIotApi} from 'home_iot_api';

let apiInstance = new HomeIotApi.DeviceApi();
let opts = { 
  'body': new HomeIotApi.DeviceRegistrationInfo() // DeviceRegistrationInfo | 
};
apiInstance.register(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**DeviceRegistrationInfo**](DeviceRegistrationInfo.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

