/**
 * calendar-js
 * @author: Tinymeng <666@majiameng.com>
 */
$(function() {
    $("#calendar").calendar({
        //筛选时间
        begin_year: 1900,
        end_year: 2100,
        /*
         * 传入今天的时间
         * 默认：客户端时间
         * 可传入一个服务器的时间
         */
        date: new Date(),
        width: 800,
        height: 400,
        /* 左右框显示的比例 */
        rate: 0.69,
        /*
         * 休假和加班设置
         * JSON格式：Y加年-M加月-D加日
         * 0表示休假 1表示加吧
         */
        week: true, // 是否开启单双休
        week_walue: "2016/9/17", // 双休对应的周六
        isclick: true,
        configDay: {// 系统配置[通过API获取]
            "Y2016": {
                "M10": {
                    "D1": 0,
                    "D2": 0,
                    "D3": 0,
                    "D4": 1,
                    "D5": 1
                }
            }
        }
    });
});

/**
 * 保存日历
 * @param Y
 * @param M
 * @param configDayM
 */
function saveConfig(Y, M, configDayM){
    // 2024 3 {D17:0,D24:1}
    console.log(Y, M, configDayM)
    // API存储到云端
}