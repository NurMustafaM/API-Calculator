# HomeIotApi.EnvironmentApi

All URIs are relative to *https://virtserver.swaggerhub.com/NORMOHAMAD/API-Calculator/1.0.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getForecast**](EnvironmentApi.md#getForecast) | **GET** /temperature/forecast/{days} | 
[**getHeaterState**](EnvironmentApi.md#getHeaterState) | **GET** /temperature/{zoneId}/heater | 
[**getZoneTemperature**](EnvironmentApi.md#getZoneTemperature) | **GET** /temperature/{zoneId} | 
[**setHeaterState**](EnvironmentApi.md#setHeaterState) | **POST** /temperature/{zoneId}/heater/{state} | 
[**temperatureSummary**](EnvironmentApi.md#temperatureSummary) | **GET** /temperature | 

<a name="getForecast"></a>
# **getForecast**
> ForecastResponse getForecast(days)



### Example
```javascript
import {HomeIotApi} from 'home_iot_api';

let apiInstance = new HomeIotApi.EnvironmentApi();
let days = 56; // Number | 

apiInstance.getForecast(days, (error, data, response) => {
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
 **days** | **Number**|  | 

### Return type

[**ForecastResponse**](ForecastResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getHeaterState"></a>
# **getHeaterState**
> HeaterState getHeaterState(zoneId)



gets the state of the heater

### Example
```javascript
import {HomeIotApi} from 'home_iot_api';

let apiInstance = new HomeIotApi.EnvironmentApi();
let zoneId = "zoneId_example"; // String | 

apiInstance.getHeaterState(zoneId, (error, data, response) => {
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
 **zoneId** | **String**|  | 

### Return type

[**HeaterState**](HeaterState.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getZoneTemperature"></a>
# **getZoneTemperature**
> TemperatueZoneStatus getZoneTemperature(zoneId)



### Example
```javascript
import {HomeIotApi} from 'home_iot_api';

let apiInstance = new HomeIotApi.EnvironmentApi();
let zoneId = "zoneId_example"; // String | 

apiInstance.getZoneTemperature(zoneId, (error, data, response) => {
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
 **zoneId** | **String**|  | 

### Return type

[**TemperatueZoneStatus**](TemperatueZoneStatus.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="setHeaterState"></a>
# **setHeaterState**
> ApiResponse setHeaterState(zoneId, state)



turns the heater on or off

### Example
```javascript
import {HomeIotApi} from 'home_iot_api';

let apiInstance = new HomeIotApi.EnvironmentApi();
let zoneId = "zoneId_example"; // String | 
let state = "state_example"; // String | 

apiInstance.setHeaterState(zoneId, state, (error, data, response) => {
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
 **zoneId** | **String**|  | 
 **state** | **String**|  | 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="temperatureSummary"></a>
# **temperatureSummary**
> TemperatureSummary temperatureSummary()



### Example
```javascript
import {HomeIotApi} from 'home_iot_api';

let apiInstance = new HomeIotApi.EnvironmentApi();
apiInstance.temperatureSummary((error, data, response) => {
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

[**TemperatureSummary**](TemperatureSummary.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

