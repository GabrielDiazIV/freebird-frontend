// source: data.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
// import jspb from "google-protobuf"
var goog = jspb;
var global = (function() { return this || window || global || self || Function('return this')(); }).call(null);

goog.exportSymbol('proto.data.EntityRequest', null, global);
goog.exportSymbol('proto.data.EntityResponse', null, global);
goog.exportSymbol('proto.data.FreebirdEntity', null, global);
goog.exportSymbol('proto.data.TweetStreamRequest', null, global);
goog.exportSymbol('proto.data.TweetStreamResponse', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.TweetStreamRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.data.TweetStreamRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.TweetStreamRequest.displayName = 'proto.data.TweetStreamRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.TweetStreamResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.data.TweetStreamResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.TweetStreamResponse.displayName = 'proto.data.TweetStreamResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.EntityRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.data.EntityRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.EntityRequest.displayName = 'proto.data.EntityRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.EntityResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.data.EntityResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.EntityResponse.displayName = 'proto.data.EntityResponse';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.TweetStreamRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.data.TweetStreamRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.TweetStreamRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.TweetStreamRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.TweetStreamRequest}
 */
proto.data.TweetStreamRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.TweetStreamRequest;
  return proto.data.TweetStreamRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.TweetStreamRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.TweetStreamRequest}
 */
proto.data.TweetStreamRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.TweetStreamRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.TweetStreamRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.TweetStreamRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.TweetStreamRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.TweetStreamResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.data.TweetStreamResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.TweetStreamResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.TweetStreamResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    entityType: jspb.Message.getFieldWithDefault(msg, 1, 0),
    entityName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    score: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    positive: jspb.Message.getFieldWithDefault(msg, 4, 0),
    negative: jspb.Message.getFieldWithDefault(msg, 5, 0),
    imageUrl: jspb.Message.getFieldWithDefault(msg, 6, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.TweetStreamResponse}
 */
proto.data.TweetStreamResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.TweetStreamResponse;
  return proto.data.TweetStreamResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.TweetStreamResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.TweetStreamResponse}
 */
proto.data.TweetStreamResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.data.FreebirdEntity} */ (reader.readEnum());
      msg.setEntityType(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setEntityName(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setScore(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPositive(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setNegative(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setImageUrl(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.TweetStreamResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.TweetStreamResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.TweetStreamResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.TweetStreamResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEntityType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getEntityName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getScore();
  if (f !== 0.0) {
    writer.writeFloat(
      3,
      f
    );
  }
  f = message.getPositive();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getNegative();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getImageUrl();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional FreebirdEntity entity_type = 1;
 * @return {!proto.data.FreebirdEntity}
 */
proto.data.TweetStreamResponse.prototype.getEntityType = function() {
  return /** @type {!proto.data.FreebirdEntity} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.data.FreebirdEntity} value
 * @return {!proto.data.TweetStreamResponse} returns this
 */
proto.data.TweetStreamResponse.prototype.setEntityType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string entity_name = 2;
 * @return {string}
 */
proto.data.TweetStreamResponse.prototype.getEntityName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.TweetStreamResponse} returns this
 */
proto.data.TweetStreamResponse.prototype.setEntityName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional float score = 3;
 * @return {number}
 */
proto.data.TweetStreamResponse.prototype.getScore = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.data.TweetStreamResponse} returns this
 */
proto.data.TweetStreamResponse.prototype.setScore = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional int32 positive = 4;
 * @return {number}
 */
proto.data.TweetStreamResponse.prototype.getPositive = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.TweetStreamResponse} returns this
 */
proto.data.TweetStreamResponse.prototype.setPositive = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int32 negative = 5;
 * @return {number}
 */
proto.data.TweetStreamResponse.prototype.getNegative = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.TweetStreamResponse} returns this
 */
proto.data.TweetStreamResponse.prototype.setNegative = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional string image_url = 6;
 * @return {string}
 */
proto.data.TweetStreamResponse.prototype.getImageUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.TweetStreamResponse} returns this
 */
proto.data.TweetStreamResponse.prototype.setImageUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.EntityRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.data.EntityRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.EntityRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.EntityRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    entityType: jspb.Message.getFieldWithDefault(msg, 1, 0),
    entityName: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.EntityRequest}
 */
proto.data.EntityRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.EntityRequest;
  return proto.data.EntityRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.EntityRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.EntityRequest}
 */
proto.data.EntityRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.data.FreebirdEntity} */ (reader.readEnum());
      msg.setEntityType(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setEntityName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.EntityRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.EntityRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.EntityRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.EntityRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEntityType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getEntityName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional FreebirdEntity entity_type = 1;
 * @return {!proto.data.FreebirdEntity}
 */
proto.data.EntityRequest.prototype.getEntityType = function() {
  return /** @type {!proto.data.FreebirdEntity} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.data.FreebirdEntity} value
 * @return {!proto.data.EntityRequest} returns this
 */
proto.data.EntityRequest.prototype.setEntityType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string entity_name = 2;
 * @return {string}
 */
proto.data.EntityRequest.prototype.getEntityName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.EntityRequest} returns this
 */
proto.data.EntityRequest.prototype.setEntityName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.EntityResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.data.EntityResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.EntityResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.EntityResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    gaming: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.EntityResponse}
 */
proto.data.EntityResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.EntityResponse;
  return proto.data.EntityResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.EntityResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.EntityResponse}
 */
proto.data.EntityResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setGaming(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.EntityResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.EntityResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.EntityResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.EntityResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGaming();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string gaming = 1;
 * @return {string}
 */
proto.data.EntityResponse.prototype.getGaming = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.EntityResponse} returns this
 */
proto.data.EntityResponse.prototype.setGaming = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * @enum {number}
 */
proto.data.FreebirdEntity = {
  SHILL: 0,
  COMPANY: 1
};

goog.object.extend(exports, proto.data);