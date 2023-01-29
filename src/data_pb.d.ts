import * as jspb from 'google-protobuf'



export class TweetStreamRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TweetStreamRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TweetStreamRequest): TweetStreamRequest.AsObject;
  static serializeBinaryToWriter(message: TweetStreamRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TweetStreamRequest;
  static deserializeBinaryFromReader(message: TweetStreamRequest, reader: jspb.BinaryReader): TweetStreamRequest;
}

export namespace TweetStreamRequest {
  export type AsObject = {
  }
}

export class TweetStreamResponse extends jspb.Message {
  getEntityType(): FreebirdEntity;
  setEntityType(value: FreebirdEntity): TweetStreamResponse;

  getEntityName(): string;
  setEntityName(value: string): TweetStreamResponse;

  getScore(): number;
  setScore(value: number): TweetStreamResponse;

  getPositive(): number;
  setPositive(value: number): TweetStreamResponse;

  getNegative(): number;
  setNegative(value: number): TweetStreamResponse;

  getImageUrl(): string;
  setImageUrl(value: string): TweetStreamResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TweetStreamResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TweetStreamResponse): TweetStreamResponse.AsObject;
  static serializeBinaryToWriter(message: TweetStreamResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TweetStreamResponse;
  static deserializeBinaryFromReader(message: TweetStreamResponse, reader: jspb.BinaryReader): TweetStreamResponse;
}

export namespace TweetStreamResponse {
  export type AsObject = {
    entityType: FreebirdEntity,
    entityName: string,
    score: number,
    positive: number,
    negative: number,
    imageUrl: string,
  }
}

export class EntityRequest extends jspb.Message {
  getEntityType(): FreebirdEntity;
  setEntityType(value: FreebirdEntity): EntityRequest;

  getEntityName(): string;
  setEntityName(value: string): EntityRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EntityRequest.AsObject;
  static toObject(includeInstance: boolean, msg: EntityRequest): EntityRequest.AsObject;
  static serializeBinaryToWriter(message: EntityRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EntityRequest;
  static deserializeBinaryFromReader(message: EntityRequest, reader: jspb.BinaryReader): EntityRequest;
}

export namespace EntityRequest {
  export type AsObject = {
    entityType: FreebirdEntity,
    entityName: string,
  }
}

export class EntityResponse extends jspb.Message {
  getGaming(): string;
  setGaming(value: string): EntityResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EntityResponse.AsObject;
  static toObject(includeInstance: boolean, msg: EntityResponse): EntityResponse.AsObject;
  static serializeBinaryToWriter(message: EntityResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EntityResponse;
  static deserializeBinaryFromReader(message: EntityResponse, reader: jspb.BinaryReader): EntityResponse;
}

export namespace EntityResponse {
  export type AsObject = {
    gaming: string,
  }
}

export enum FreebirdEntity { 
  SHILL = 0,
  COMPANY = 1,
}
