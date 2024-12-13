// @generated by protoc-gen-es v1.7.2
// @generated from file protobuf/response/guide.proto (package youtube.response.browse, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";

/**
 * @generated from message youtube.response.browse.Guide
 */
export const Guide = proto3.makeMessageType(
  "youtube.response.browse.Guide",
  () => [
    { no: 4, name: "items4", kind: "message", T: Item, repeated: true },
    { no: 6, name: "items6", kind: "message", T: Item, repeated: true },
  ],
);

/**
 * @generated from message youtube.response.browse.Item
 */
export const Item = proto3.makeMessageType(
  "youtube.response.browse.Item",
  () => [
    { no: 117866661, name: "guideSectionRenderer", kind: "message", T: GuideSectionRenderer },
  ],
);

/**
 * @generated from message youtube.response.browse.GuideSectionRenderer
 */
export const GuideSectionRenderer = proto3.makeMessageType(
  "youtube.response.browse.GuideSectionRenderer",
  () => [
    { no: 1, name: "rendererItems", kind: "message", T: RendererItem, repeated: true },
  ],
);

/**
 * @generated from message youtube.response.browse.RendererItem
 */
export const RendererItem = proto3.makeMessageType(
  "youtube.response.browse.RendererItem",
  () => [
    { no: 318370163, name: "iconRender", kind: "message", T: guideEntryRenderer },
    { no: 117501096, name: "labelRender", kind: "message", T: guideEntryRenderer },
  ],
);

/**
 * @generated from message youtube.response.browse.guideEntryRenderer
 */
export const guideEntryRenderer = proto3.makeMessageType(
  "youtube.response.browse.guideEntryRenderer",
  () => [
    { no: 1, name: "browseId", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

