package unsw_9900.nobugs.mapper;
import org.apache.ibatis.annotations.Param;

import org.apache.ibatis.annotations.Mapper;
import unsw_9900.nobugs.dto.stockRankDto;
import unsw_9900.nobugs.po.MarketRealtime;
import java.util.List;

/**
 * Copyright (C) 2020 - 2021 ruiwang14.com, All Rights Reserved.
 * <p>
 *
 * @author: Rui
 * @date: 2021/10/31
 */
@Mapper
public interface MarketRealtimeMapper {
    int insert(MarketRealtime record);

    MarketRealtime findOneBySidOrderByTradeTimeDesc(@Param("sid")Integer sid);

    MarketRealtime findStock(Integer sid);

    List<stockRankDto> findBestStock();

    List<stockRankDto> findWorstStock();
}
