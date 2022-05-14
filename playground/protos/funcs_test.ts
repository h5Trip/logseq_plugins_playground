import { FuncsClient } from './funcs.client';
import { DownloadImageRequest, DownloadImageRespond } from './funcs';
import {GrpcWebFetchTransport} from '@protobuf-ts/grpcweb-transport'


let transport = new GrpcWebFetchTransport({
    baseUrl: "http://127.0.0.1:8000"
});

const funcsService = new FuncsClient(transport);

const request = DownloadImageRequest.create()
request.urls = ["urls"];
request.savePath = "savePath";

export const downloadImageToSave = () => {
    // console.log(funcsService)
   funcsService.downloadImageToSave(request);
}
// request

// const call = echoService.echo(request, { 'custom-header-1': 'value1' },
//     (err: grpcWeb.RpcError, response: EchoResponse) => {
//         console.log(response.getMessage());
//     });
// call.on('status', (status: grpcWeb.Status) => {
//     // ...
// });
