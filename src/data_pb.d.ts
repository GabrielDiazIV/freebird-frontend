import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';


export class Tweets extends jspb.Message {
  getTweetsList(): Array<Tweet>;
  setTweetsList(value: Array<Tweet>): Tweets;
  clearTweetsList(): Tweets;
  addTweets(value?: Tweet, index?: number): Tweet;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Tweets.AsObject;
  static toObject(includeInstance: boolean, msg: Tweets): Tweets.AsObject;
  static serializeBinaryToWriter(message: Tweets, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Tweets;
  static deserializeBinaryFromReader(message: Tweets, reader: jspb.BinaryReader): Tweets;
}

export namespace Tweets {
  export type AsObject = {
    tweetsList: Array<Tweet.AsObject>,
  }
}

export class Bird extends jspb.Message {
  getId(): number;
  setId(value: number): Bird;

  getName(): string;
  setName(value: string): Bird;

  getEntityType(): FreebirdEntity;
  setEntityType(value: FreebirdEntity): Bird;

  getBirdFk(): number;
  setBirdFk(value: number): Bird;

  getScore(): number;
  setScore(value: number): Bird;

  getNPositive(): number;
  setNPositive(value: number): Bird;

  getNNegative(): number;
  setNNegative(value: number): Bird;

  getImgUrl(): string;
  setImgUrl(value: string): Bird;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Bird.AsObject;
  static toObject(includeInstance: boolean, msg: Bird): Bird.AsObject;
  static serializeBinaryToWriter(message: Bird, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Bird;
  static deserializeBinaryFromReader(message: Bird, reader: jspb.BinaryReader): Bird;
}

export namespace Bird {
  export type AsObject = {
    id: number,
    name: string,
    entityType: FreebirdEntity,
    birdFk: number,
    score: number,
    nPositive: number,
    nNegative: number,
    imgUrl: string,
  }
}

export class Tweet extends jspb.Message {
  getBirdFk(): number;
  setBirdFk(value: number): Tweet;

  getBody(): string;
  setBody(value: string): Tweet;

  getAuthorName(): string;
  setAuthorName(value: string): Tweet;

  getAuthorUsername(): string;
  setAuthorUsername(value: string): Tweet;

  getPostTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setPostTime(value?: google_protobuf_timestamp_pb.Timestamp): Tweet;
  hasPostTime(): boolean;
  clearPostTime(): Tweet;

  getScore(): number;
  setScore(value: number): Tweet;

  getCertainty(): number;
  setCertainty(value: number): Tweet;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Tweet.AsObject;
  static toObject(includeInstance: boolean, msg: Tweet): Tweet.AsObject;
  static serializeBinaryToWriter(message: Tweet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Tweet;
  static deserializeBinaryFromReader(message: Tweet, reader: jspb.BinaryReader): Tweet;
}

export namespace Tweet {
  export type AsObject = {
    birdFk: number,
    body: string,
    authorName: string,
    authorUsername: string,
    postTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    score: number,
    certainty: number,
  }
}

export class Birds extends jspb.Message {
  getBirdsList(): Array<Bird>;
  setBirdsList(value: Array<Bird>): Birds;
  clearBirdsList(): Birds;
  addBirds(value?: Bird, index?: number): Bird;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Birds.AsObject;
  static toObject(includeInstance: boolean, msg: Birds): Birds.AsObject;
  static serializeBinaryToWriter(message: Birds, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Birds;
  static deserializeBinaryFromReader(message: Birds, reader: jspb.BinaryReader): Birds;
}

export namespace Birds {
  export type AsObject = {
    birdsList: Array<Bird.AsObject>,
  }
}

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

export class BirdsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BirdsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BirdsRequest): BirdsRequest.AsObject;
  static serializeBinaryToWriter(message: BirdsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BirdsRequest;
  static deserializeBinaryFromReader(message: BirdsRequest, reader: jspb.BinaryReader): BirdsRequest;
}

export namespace BirdsRequest {
  export type AsObject = {
  }
}

export class BirdRequest extends jspb.Message {
  getId(): number;
  setId(value: number): BirdRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BirdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BirdRequest): BirdRequest.AsObject;
  static serializeBinaryToWriter(message: BirdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BirdRequest;
  static deserializeBinaryFromReader(message: BirdRequest, reader: jspb.BinaryReader): BirdRequest;
}

export namespace BirdRequest {
  export type AsObject = {
    id: number,
  }
}

export enum FreebirdEntity { 
  SHILL = 0,
  COMPANY = 1,
}
