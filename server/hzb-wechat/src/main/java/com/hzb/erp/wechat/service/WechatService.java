package com.hzb.erp.wechat.service;

import com.hzb.erp.common.configuration.WxMpProperties;
import com.hzb.erp.common.enums.SettingCodeEnum;
import com.hzb.erp.common.service.SettingService;
import com.hzb.erp.utils.SettingConstants;
import lombok.AllArgsConstructor;
import me.chanjar.weixin.common.error.WxErrorException;
import me.chanjar.weixin.mp.api.WxMpService;
import me.chanjar.weixin.mp.bean.template.WxMpTemplateMessage;
import me.chanjar.weixin.mp.config.impl.WxMpDefaultConfigImpl;
import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

/**
 * @author Ryan 541720500@qq.com
 * description
 */
@Service
@AllArgsConstructor
public class WechatService {

    private final SettingService settingService;
    private static SettingService stSettingService;
    private final WxMpService wxService;

    @PostConstruct
    public void init() {
        stSettingService = settingService;
    }

    /**
     * 通过配置名称获取配置 1.1.0313 通过数据库和配置文件扩区
     *
     * @param confName 参数名 null表示取默认配置
     */
    public static WxMpProperties.MpConfig getConfigByName(String confName) {
        List<WxMpProperties.MpConfig> configs = getConfigList();
        if (StringUtils.isBlank(confName)) {
            confName = "default";
        }
        for (WxMpProperties.MpConfig conf : configs) {
            System.out.println(conf.getName().equals(confName));
            if (conf.getName().equals(confName)) {
                return conf;
            }
        }
        return null;
    }

    public static WxMpProperties.MpConfig getDefaultConfig() {
        return getConfigByName(null);
    }

//    /**
//     * 通过配置名称获取配置 只从配置文件获取
//     *
//     * @param wxMpProperties WxMpProperties
//     * @param confName       参数名 null表示取第一个公众号配置
//     */
//    public static WxMpProperties.MpConfig getConfigByName(WxMpProperties wxMpProperties, String confName) {
//        List<WxMpProperties.MpConfig> configs = wxMpProperties.getConfigs();
//        if (StringUtils.isBlank(confName)) {
//            confName = "default";
//        }
//        for (WxMpProperties.MpConfig conf : configs) {
//            System.out.println(conf.getName().equals(confName));
//            if (conf.getName().equals(confName)) {
//                return conf;
//            }
//        }
//        return null;
//    }

//    /**
//     * 通过配置名称获取confName 旧版从配置文件获取
//     */
//    public static String getAppIdByConfName(WxMpProperties wxMpProperties, String confName) {
//        WxMpProperties.MpConfig mpConfig = getConfigByName(wxMpProperties, confName);
//        if (mpConfig == null) {
//            throw new RuntimeException("配置参数APPID设置错误");
//        }
//        return mpConfig.getAppId();
//    }

    /**
     * 通过配置名称获取confName 1.1.0313从数据库和配置文件里获取
     */
    public static String getAppIdByConfName(String confName) {
        WxMpProperties.MpConfig mpConfig = getConfigByName(confName);
        if (mpConfig == null) {
            throw new RuntimeException("配置参数APPID设置错误");
        }
        return mpConfig.getAppId();
    }

    /**
     * 使用自定义公众号配置发送模板消息
     */
    public void sendTemplateMsg(WxMpTemplateMessage templateMessage, String configName) throws WxErrorException {
        setConfig(this.wxService);
        String appid = WechatService.getAppIdByConfName(configName);
        String msgId = this.wxService.switchoverTo(appid).getTemplateMsgService().sendTemplateMsg(templateMessage);
        System.out.println("========模板消息发送结果msgId：" + msgId);
    }

    /**
     * 使用默认公众号配置发送模板消息
     */
    public void sendTemplateMsg(WxMpTemplateMessage templateMessage) throws WxErrorException {
        setConfig(this.wxService);
        String appid = WechatService.getAppIdByConfName(null);
        String msgId = this.wxService.switchoverTo(appid).getTemplateMsgService().sendTemplateMsg(templateMessage);
        System.out.println("========模板消息发送结果msgId：" + msgId);
    }

    /**
     * 配置设置参数
     * */
    public static void setConfig(WxMpService service) {
        List<WxMpProperties.MpConfig> configs = getConfigList();
        service.setMultiConfigStorages(configs.stream().map(a -> {
            WxMpDefaultConfigImpl configStorage = new WxMpDefaultConfigImpl();
            configStorage.setAppId(a.getAppId());
            configStorage.setSecret(a.getSecret());
            configStorage.setToken(a.getToken());
            configStorage.setAesKey(a.getAesKey());
            return configStorage;
        }).collect(Collectors.toMap(WxMpDefaultConfigImpl::getAppId, a -> a, (o, n) -> o)));
    }

    /**
     * 从数据库加载配置信息
     */
    public static List<WxMpProperties.MpConfig> getConfigList() {

        List<WxMpProperties.MpConfig> configs = new ArrayList<>();
        // 从数据库获取公众号配置：
        Map<String, Object> settings = stSettingService.listOptionByCode(SettingCodeEnum.WX_MP_SETTING);
        if (settings == null) {
            throw new RuntimeException("未找到微信公众号配置. Not Found Wechat Setting Named 'wx_mp_setting'.");
        }
        try {
            String wxAppId = settings.get(SettingConstants.WX_MP_APP_ID).toString();
            if (!StringUtils.isBlank(wxAppId)) {
                WxMpProperties.MpConfig defaultConf = new WxMpProperties.MpConfig();
                defaultConf.setName("default");
                defaultConf.setAppId(wxAppId);
                defaultConf.setSecret(settings.get(SettingConstants.WX_MP_SECRET).toString());
                defaultConf.setToken(settings.get(SettingConstants.WX_MP_TOKEN).toString());
                defaultConf.setAesKey(settings.get(SettingConstants.WX_MP_AES_KEY).toString());
                configs.add(defaultConf);
            }
        } catch (Exception e) {
            throw new RuntimeException("请检查数据表 setting_option 的微信配置项是否完整. Missing Wechat Setting Option In Table:setting_option");
        }

        return configs;
    }


}
