/**
 * Created by wu on 2016/9/22.
 * 项目的核心
 */
//左侧导航动画
$(function(){
    //收缩全部
    $(".baseUI>li>ul").slideUp("fast");

    $(".baseUI>li>a").off("click");
    $(".baseUI>li>a").on("click",function(){
        $(".baseUI>li>ul").slideUp("fast");
        $(this).next().slideDown();
    });
    //默认让第一个展开
    $(".baseUI>li>a").eq(0).trigger("click");

    //背景改变
    $(".baseUI ul>li").off("click");
    $(".baseUI ul>li").on("click",function () {
        if(!$(this).hasClass("current")){
            $(".baseUI ul>li").removeClass("current");
            $(this).addClass("current");
        }
    });
    //模拟点击全部题目
    $(".baseUI ul>li").eq(0).find("a").trigger("click");
});

//核心项目模块
angular.module("app",["ng","ngRoute","app.subjectModule","app.paperModule"])
    .controller("mainController",["$scope",function($scope){

    }])
    .config(["$routeProvider",function ($routeProvider) {
        $routeProvider.when("/SubjectList/dpId/:dpId/topicId/:topicId/levelId/:levelId/typeId/:typeId",{
            templateUrl:"tpl/subject/SubjectList.html",
            controller:"subjectController"
        }).when("/SubjectManager",{
            templateUrl:"tpl/subject/SubjectManager.html",
            controller:"subjectController"
        }).when("/SubjectAdd",{
            templateUrl:"tpl/subject/SubjectAdd.html",
            controller:"subjectController"
        }).when("/SubjectDel/id/:id",{
            templateUrl:"tpl/subject/SubjectList.html",
            controller:"subjectDelController"
        }).when("/SubjectCheck/id/:id/state/:state",{
            templateUrl:"tpl/subject/SubjectList.html",
            controller:"subjectCheckController"
        }).when("/PaperList",{
            templateUrl:"tpl/paper/paperManager.html",
            controller:"paperListController"
        }).when("/PaperAdd/id/:id/stem/:stem/type/:type/topic/:topic/level/:level",{
            templateUrl:"tpl/paper/paperAdd.html",
            controller:"paperAddController"
        }).when("/PaperAddSubject",{
            templateUrl:"tpl/paper/SubjectList.html",
            controller:"subjectController"
        });
    }]);