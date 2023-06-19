# HomeIotApi.ZWaveApi

All URIs are relative to *https://virtserver.swaggerhub.com/NORMOHAMAD/API-Calculator/1.0.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getLightingSummary**](ZWaveApi.md#getLightingSummary) | **GET** /lightingSummary | 
[**getSwitchState**](ZWaveApi.md#getSwitchState) | **GET** /lighting/switches/{deviceId} | 
[**setDimmer**](ZWaveApi.md#setDimmer) | **POST** /lighting/dimmers/{deviceId}/{value} | 
[**setDimmerTimer**](ZWaveApi.md#setDimmerTimer) | **POST** /lighting/dimmers/{deviceId}/{value}/timer/{timeunit} | 
[**setSwitch**](ZWaveApi.md#setSwitch) | **POST** /lighting/switches/{deviceId}/{value} | 
[**setSwitchTimer**](ZWaveApi.md#setSwitchTimer) | **POST** /lighting/switches/{deviceId}/{value}/timer/{minutes} | 

<a name="getLightingSummary"></a>
# **getLightingSummary**
> LightingSummary getLightingSummary()



### Example
```javascript
import {HomeIotApi} from 'home_iot_api';

let apiInstance = new HomeIotApi.ZWaveApi();
apiInstance.getLightingSummary((error, data, response) => {
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

[**LightingSummary**](LightingSummary.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getSwitchState"></a>
# **getSwitchState**
> DeviceState getSwitchState(deviceId)



### Example
```javascript
import {HomeIotApi} from 'home_iot_api';

let apiInstance = new HomeIotApi.ZWaveApi();
let deviceId = "deviceId_example"; // String | 

apiInstance.getSwitchState(deviceId, (error, data, response) => {
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
 **deviceId** | **String**|  | 

### Return type

[**DeviceState**](DeviceState.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="setDimmer"></a>
# **setDimmer**
> ApiResponse setDimmer(deviceId, value)



### Example
```javascript
import {HomeIotApi} from 'home_iot_api';

let apiInstance = new HomeIotApi.ZWaveApi();
let deviceId = "deviceId_example"; // String | 
let value = 56; // Number | 

apiInstance.setDimmer(deviceId, value, (error, data, response) => {
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
 **deviceId** | **String**|  | 
 **value** | **Number**|  | 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="setDimmerTimer"></a>
# **setDimmerTimer**
> ApiResponse setDimmerTimer(deviceId, value, timeunit, opts)



sets a dimmer to a specific value on a timer

### Example
```javascript
import {HomeIotApi} from 'home_iot_api';

let apiInstance = new HomeIotApi.ZWaveApi();
let deviceId = "deviceId_example"; // String | 
let value = 56; // Number | 
let timeunit = 56; // Number | 
let opts = { 
  'units': "milliseconds" // String | 
};
apiInstance.setDimmerTimer(deviceId, value, timeunit, opts, (error, data, response) => {
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
 **deviceId** | **String**|  | 
 **value** | **Number**|  | 
 **timeunit** | **Number**|  | 
 **units** | **String**|  | [optional] [default to milliseconds]

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="setSwitch"></a>
# **setSwitch**
> ApiResponse setSwitch(deviceId, value)



### Example
```javascript
import {HomeIotApi} from 'home_iot_api';

let apiInstance = new HomeIotApi.ZWaveApi();
let deviceId = "deviceId_example"; // String | 
let value = "value_example"; // String | 

apiInstance.setSwitch(deviceId, value, (error, data, response) => {
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
 **deviceId** | **String**|  | 
 **value** | **String**|  | 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="setSwitchTimer"></a>
# **setSwitchTimer**
> ApiResponse setSwitchTimer(deviceId, value, minutes)



sets a switch to a specific value on a timer

### Example
```javascript
import {HomeIotApi} from 'home_iot_api';

let apiInstance = new HomeIotApi.ZWaveApi();
let deviceId = "deviceId_example"; // String | 
let value = "value_example"; // String | 
let minutes = 56; // Number | 

apiInstance.setSwitchTimer(deviceId, value, minutes, (error, data, response) => {
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
 **deviceId** | **String**|  | 
 **value** | **String**|  | 
 **minutes** | **Number**|  | 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

