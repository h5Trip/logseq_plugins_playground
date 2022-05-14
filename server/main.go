package main

import (
	"context"
	"fmt"
	"log"
	"net"

	pb "server/funcs"

	"google.golang.org/grpc"
)

const (
	Address string = ":8000"
	Network string = "tcp"
)

type FuncsServer struct {
	pb.UnimplementedFuncsServer
}

// 实现 downloadImageToSave 方法
func (f *FuncsServer) DownloadImageToSave(ctx context.Context, req *pb.DownloadImageRequest) (*pb.DownloadImageRespond, error) {
	fmt.Print(req)
	return &pb.DownloadImageRespond{Respond: &pb.Respond{
		Code: 0, Error: "nil", Message: "hello",
	}, DownloadImageRequest: req}, nil
}

func main() {

	// 1.监听端口
	listener, err := net.Listen(Network, Address)
	if err != nil {
		log.Fatalf("net.listen err: %v", err)
	}
	log.Println(Address, " net listening...")
	// 2.实例化gRPC服务端
	grpcServer := grpc.NewServer()

	// 3.注册我们实现的服务 SimpleService
	// pb(grpcServer, &SimpleService{})
	pb.RegisterFuncsServer(grpcServer, &FuncsServer{})
	// 4.启动gRPC服务端
	err = grpcServer.Serve(listener)
	if err != nil {
		log.Fatalf("grpc server err: %v", err)
	}

}
