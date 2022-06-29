package com.hzb.erp.common.enums;

import com.baomidou.mybatisplus.annotation.EnumValue;
import com.fasterxml.jackson.annotation.JsonValue;
import lombok.AllArgsConstructor;
import lombok.Getter;

/**
 * 物资变更记录类型
 *
 * @author 541720500@qq.com
 */

@Getter
@AllArgsConstructor
public enum MaterialRecordTypeEnum implements BaseEnum {
    CREDIT_MALL(1, "积分商城兑换礼品");

    @EnumValue
    private final int code;
    @JsonValue
    private final String dist;
}
