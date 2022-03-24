package com.hzb.erp.quartzJob;

import com.hzb.erp.quartz.JobRegisterEnum;
import lombok.AllArgsConstructor;
import lombok.Getter;

/**
 * job注册枚举类
 * <p>
 *     需要注册新任务的增加枚举类即可，
 *     quartz_job表中会覆盖本类中的默认执行时间表达式，该表内容是在系统启动的时候自动维护的，用户可以通过前端更改表中的执行时间。
 * </p>
 *
 * @author Ryan 541720500@qq.com
 */
@Getter
@AllArgsConstructor
public enum JobRegisterEnumImpl implements JobRegisterEnum {

    /**
     * job枚举类包列表
     */
    LESSON_ENDING_JOB("com.hzb.erp.quartzJob.jobs.LessonEndingJob", "0 0/5 * * * ?"),
    LESSON_REMIND_JOB("com.hzb.erp.quartzJob.jobs.LessonRemindJob", "0 0 19 * * ?"),
    LESSON_COUNT_WARNING_JOB("com.hzb.erp.quartzJob.jobs.LessonCountWarningJob", "0 0 7 * * ?");

    /**
     * 类包路径
     */
    private String jobClass;

    /**
     * 默认执行时间表达式
     */
    private String defaultCronExp;

}