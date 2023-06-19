# HomeIotApi.ZonesApi

All URIs are relative to *https://virtserver.swaggerhub.com/NORMOHAMAD/API-Calculator/1.0.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getZones**](ZonesApi.md#getZones) | **GET** /zones | 
[**quietZone**](ZonesApi.md#quietZone) | **GET** /zones/{zoneId}/quiet | 

<a name="getZones"></a>
# **getZones**
> [&#x27;String&#x27;] getZones()



### Example
```javascript
import {HomeIotApi} from 'home_iot_api';

let apiInstance = new HomeIotApi.ZonesApi();
apiInstance.getZones((error, data, response) => {
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

**[&#x27;String&#x27;]**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="quietZone"></a>
# **quietZone**
> quietZone(zoneId)



### Example
```javascript
import {HomeIotApi} from 'home_iot_api';

let apiInstance = new HomeIotApi.ZonesApi();
let zoneId = "zoneId_example"; // String | 

apiInstance.quietZone(zoneId, (error, data, response) => {
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
 **zoneId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

