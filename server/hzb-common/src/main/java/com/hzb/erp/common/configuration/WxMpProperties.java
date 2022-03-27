package com.hzb.erp.common.configuration;

import cn.hutool.json.JSONUtil;
import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;

import java.util.List;

/**
 * 微信公众号配置
 * 20220313 Ryan 取消从配置文件读取的方式，改为数据库读取
 */
@Data
//@ConfigurationProperties(prefix = "system.wxmp")
public class WxMpProperties {
    /**
     * 是否使用redis存储access token
     */
//    private boolean useRedis;

//    /**
//     * 默认配置文件
//     */
//    private Integer defaultConfIndex;
//
//    /**
//     * 多个公众号配置信息 20220326 已经取消从配置文件里获取配置的方式，改为从数据库获取
//     */
//    private List<MpConfig> configs;

    @Data
    public static class MpConfig {
        /**
         * 微信公众号配置名称
         */
        private String name;
        /**
         * 设置微信公众号的appid
         */
        private String appId;

        /**
         * 设置微信公众号的app secret
         */
        private String secret;

        /**
         * 设置微信公众号的token
         */
        private String token;

        /**
         * 设置微信公众号的EncodingAESKey
         */
        private String aesKey;
    }

    @Override
    public String toString() {
        return JSONUtil.toJsonStr(this);
    }
}
