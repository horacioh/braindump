# gRPC Basic tutorial

- source: https://grpc.io/docs/platforms/web/basics/

1. Define the service using [Protocol Buffers](https://protobuf.dev/overview/) (`echo.proto`)

```protobuf
message EchoRequest {
  string message = 1;
}

message EchoResponse {
  string message = 1;
}

service EchoService {
  rpc Echo(EchoRequest) returns (EchoResponse);
}
```

2. implement the server. in our case is a normal JS function

```js
function doEcho(call, callback) {
  callback(null, {message: call.request.message});
}
```

3. Configure the [Envoy](https://www.envoyproxy.io/docs/envoy/latest/intro/intro) Proxy: 