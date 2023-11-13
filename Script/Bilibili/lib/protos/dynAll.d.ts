// @generated by protobuf-ts 2.9.0 with parameter output_javascript_es2019
// @generated from protobuf file "protos/dynAll.proto" (syntax proto3)
// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * @generated from protobuf message DynamicItem
 */
export interface DynamicItem {
    /**
     * 动态卡片类型
     *
     * @generated from protobuf field: DynamicType card_type = 1;
     */
    cardType: DynamicType;
    /**
     * 转发类型下，源卡片类型
     *
     * @generated from protobuf field: DynamicType item_type = 2;
     */
    itemType: DynamicType;
    /**
     * 该卡片下面是否含有折叠卡
     *
     * @generated from protobuf field: int32 has_fold = 5;
     */
    hasFold: number;
    /**
     * 透传到客户端的埋点字段。
     *
     * @generated from protobuf field: string server_info = 6;
     */
    serverInfo: string;
}
/**
 * @generated from protobuf message DynamicList
 */
export interface DynamicList {
    /**
     * 动态列表
     *
     * @generated from protobuf field: repeated DynamicItem list = 1;
     */
    list: DynamicItem[];
    /**
     * 更新的动态数
     *
     * @generated from protobuf field: int64 update_num = 2;
     */
    updateNum: bigint;
    /**
     * 历史偏移
     *
     * @generated from protobuf field: string history_offset = 3;
     */
    historyOffset: string;
    /**
     * 更新基础信息
     *
     * @generated from protobuf field: string update_baseline = 4;
     */
    updateBaseline: string;
    /**
     * 是否还有更多数据
     *
     * @generated from protobuf field: bool has_more = 5;
     */
    hasMore: boolean;
}
/**
 * @generated from protobuf message TopicList
 */
export interface TopicList {
    /**
     * 模块标题
     *
     * @generated from protobuf field: string title = 1;
     */
    title: string;
}
/**
 * 动态综合页-响应
 *
 * @generated from protobuf message DynAllReply
 */
export interface DynAllReply {
    /**
     * 卡片列表
     *
     * @generated from protobuf field: DynamicList dynamic_list = 1;
     */
    dynamicList?: DynamicList;
    /**
     * 话题广场
     *
     * @generated from protobuf field: TopicList topic_list = 3;
     */
    topicList?: TopicList;
}
/**
 * @generated from protobuf enum DynamicType
 */
export declare enum DynamicType {
    /**
     * 占位
     *
     * @generated from protobuf enum value: dyn_none = 0;
     */
    dyn_none = 0,
    /**
     * 转发
     *
     * @generated from protobuf enum value: forward = 1;
     */
    forward = 1,
    /**
     * 稿件: ugc、小视频、短视频、UGC转PGC
     *
     * @generated from protobuf enum value: av = 2;
     */
    av = 2,
    /**
     * pgc：番剧、PGC番剧、PGC电影、PGC电视剧、PGC国创、PGC纪录片
     *
     * @generated from protobuf enum value: pgc = 3;
     */
    pgc = 3,
    /**
     * 付费更新批次
     *
     * @generated from protobuf enum value: courses = 4;
     */
    courses = 4,
    /**
     * 折叠
     *
     * @generated from protobuf enum value: fold = 5;
     */
    fold = 5,
    /**
     * 纯文字
     *
     * @generated from protobuf enum value: word = 6;
     */
    word = 6,
    /**
     * 图文
     *
     * @generated from protobuf enum value: draw = 7;
     */
    draw = 7,
    /**
     * 专栏 原仅phone端
     *
     * @generated from protobuf enum value: article = 8;
     */
    article = 8,
    /**
     * 音频 原仅phone端
     *
     * @generated from protobuf enum value: music = 9;
     */
    music = 9,
    /**
     * 通用卡 方形
     *
     * @generated from protobuf enum value: common_square = 10;
     */
    common_square = 10,
    /**
     * 通用卡 竖形
     *
     * @generated from protobuf enum value: common_vertical = 11;
     */
    common_vertical = 11,
    /**
     * 直播卡 只有转发态
     *
     * @generated from protobuf enum value: live = 12;
     */
    live = 12,
    /**
     * 播单 原仅phone端 只有转发态
     *
     * @generated from protobuf enum value: medialist = 13;
     */
    medialist = 13,
    /**
     * 付费更新批次 只有转发态
     *
     * @generated from protobuf enum value: courses_season = 14;
     */
    courses_season = 14,
    /**
     * 广告卡
     *
     * @generated from protobuf enum value: ad = 15;
     */
    ad = 15,
    /**
     * 小程序卡
     *
     * @generated from protobuf enum value: applet = 16;
     */
    applet = 16,
    /**
     * 订阅卡
     *
     * @generated from protobuf enum value: subscription = 17;
     */
    subscription = 17,
    /**
     * 直播推荐卡
     *
     * @generated from protobuf enum value: live_rcmd = 18;
     */
    live_rcmd = 18,
    /**
     * 通栏
     *
     * @generated from protobuf enum value: banner = 19;
     */
    banner = 19,
    /**
     * 合集卡
     *
     * @generated from protobuf enum value: ugc_season = 20;
     */
    ugc_season = 20,
    /**
     * 新订阅卡
     *
     * @generated from protobuf enum value: subscription_new = 21;
     */
    subscription_new = 21,
    /**
     * @generated from protobuf enum value: story = 22;
     */
    story = 22,
    /**
     * @generated from protobuf enum value: topic_rcmd = 23;
     */
    topic_rcmd = 23
}
declare class DynamicItem$Type extends MessageType<DynamicItem> {
    constructor();
    create(value?: PartialMessage<DynamicItem>): DynamicItem;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: DynamicItem): DynamicItem;
    internalBinaryWrite(message: DynamicItem, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message DynamicItem
 */
export declare const DynamicItem: DynamicItem$Type;
declare class DynamicList$Type extends MessageType<DynamicList> {
    constructor();
    create(value?: PartialMessage<DynamicList>): DynamicList;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: DynamicList): DynamicList;
    internalBinaryWrite(message: DynamicList, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message DynamicList
 */
export declare const DynamicList: DynamicList$Type;
declare class TopicList$Type extends MessageType<TopicList> {
    constructor();
    create(value?: PartialMessage<TopicList>): TopicList;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: TopicList): TopicList;
    internalBinaryWrite(message: TopicList, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message TopicList
 */
export declare const TopicList: TopicList$Type;
declare class DynAllReply$Type extends MessageType<DynAllReply> {
    constructor();
    create(value?: PartialMessage<DynAllReply>): DynAllReply;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: DynAllReply): DynAllReply;
    internalBinaryWrite(message: DynAllReply, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message DynAllReply
 */
export declare const DynAllReply: DynAllReply$Type;
export {};