// @generated by protoc-gen-es v1.7.2
// @generated from file protobuf/response/watch.proto (package youtube.response.watch, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { Player } from "./player_pb.js";
import type { Next } from "./next_pb.js";

/**
 * @generated from message youtube.response.watch.Watch
 */
export declare class Watch extends Message<Watch> {
  /**
   * @generated from field: repeated youtube.response.watch.Content contents = 1;
   */
  contents: Content[];

  constructor(data?: PartialMessage<Watch>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "youtube.response.watch.Watch";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Watch;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Watch;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Watch;

  static equals(a: Watch | PlainMessage<Watch> | undefined, b: Watch | PlainMessage<Watch> | undefined): boolean;
}

/**
 * @generated from message youtube.response.watch.Content
 */
export declare class Content extends Message<Content> {
  /**
   * @generated from field: youtube.response.player.Player player = 2;
   */
  player?: Player;

  /**
   * @generated from field: youtube.response.next.Next next = 3;
   */
  next?: Next;

  constructor(data?: PartialMessage<Content>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "youtube.response.watch.Content";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Content;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Content;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Content;

  static equals(a: Content | PlainMessage<Content> | undefined, b: Content | PlainMessage<Content> | undefined): boolean;
}

