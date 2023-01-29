/**
 * @fileoverview gRPC-Web generated client stub for data
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.2
// 	protoc              v3.20.3
// source: data.proto


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as data_pb from './data_pb';


export class DataClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname.replace(/\/+$/, '');
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodDescriptorTweetStream = new grpcWeb.MethodDescriptor(
    '/data.Data/TweetStream',
    grpcWeb.MethodType.SERVER_STREAMING,
    data_pb.TweetStreamRequest,
    data_pb.TweetStreamResponse,
    (request: data_pb.TweetStreamRequest) => {
      return request.serializeBinary();
    },
    data_pb.TweetStreamResponse.deserializeBinary
  );

  tweetStream(
    request: data_pb.TweetStreamRequest,
    metadata?: grpcWeb.Metadata): grpcWeb.ClientReadableStream<data_pb.TweetStreamResponse> {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/data.Data/TweetStream',
      request,
      metadata || {},
      this.methodDescriptorTweetStream);
  }

  methodDescriptorEntityData = new grpcWeb.MethodDescriptor(
    '/data.Data/EntityData',
    grpcWeb.MethodType.UNARY,
    data_pb.EntityRequest,
    data_pb.EntityResponse,
    (request: data_pb.EntityRequest) => {
      return request.serializeBinary();
    },
    data_pb.EntityResponse.deserializeBinary
  );

  entityData(
    request: data_pb.EntityRequest,
    metadata: grpcWeb.Metadata | null): Promise<data_pb.EntityResponse>;

  entityData(
    request: data_pb.EntityRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: data_pb.EntityResponse) => void): grpcWeb.ClientReadableStream<data_pb.EntityResponse>;

  entityData(
    request: data_pb.EntityRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: data_pb.EntityResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/data.Data/EntityData',
        request,
        metadata || {},
        this.methodDescriptorEntityData,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/data.Data/EntityData',
    request,
    metadata || {},
    this.methodDescriptorEntityData);
  }

}

