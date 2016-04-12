define(["avalon", "text!../template/list.html", "./lists"], function(avalon, tpl, ctrl) {
    // do something
    return {
        views: {
            "": {
                template: tpl,
                controller: ctrl,
                ignoreChange: function(type) {
                    return !!type
                } // url通过{}配置的参数变量发生变化的时候是否通过innerHTML重刷ms-view内的DOM，默认会，如果你做的是翻页这种应用，建议使用例子内的配置，把数据更新到vmodel上即可
            }
        }
    }    
})