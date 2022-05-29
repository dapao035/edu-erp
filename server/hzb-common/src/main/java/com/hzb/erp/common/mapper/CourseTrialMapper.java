package com.hzb.erp.common.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.hzb.erp.common.entity.CourseTrial;
import com.hzb.erp.common.pojo.dto.CourseTrialParamDTO;
import com.hzb.erp.common.pojo.vo.CourseTrialVO;


/**
 * 体验卡
 */
public interface CourseTrialMapper extends BaseMapper<CourseTrial> {
    IPage<CourseTrialVO> getList(Page<?> objectPage, CourseTrialParamDTO param);
}
