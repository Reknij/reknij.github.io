let offset = 0;
const api = {
    resetNextLinkInfosOffset(new_offset){
        if (!new_offset){
            new_offset = 0;
        }
        offset = new_offset;
    },
    nextLinkInfos(callback) {
        if (blog.nextFileLinks && offset < blog.nextFileLinks.length) {
            ajaxRequest('get', blog.nextFileLinks[offset], callback)
            offset++
        }
        else{
            callback(false);
        }
    },
    getArticleFromAddress(address, callback) {
        ajaxRequest('get', address, callback);
    },
    getLinkInfosWithTag(tagName, callback) {
        if (blog.tags.length) {
            blog.tags.forEach(tag => {
                if (tag == tagName) {
                    ajaxRequest('get', `/tags/${tag}.json`, callback)
                }
            });
        }
        else{
            callback(false)
        }
    },
    getLinkInfosWithCategory(categoryName, callback) {
        if (blog.categories.length) {
            blog.categories.forEach(category => {
                if (category == categoryName) {
                    ajaxRequest('get', `/categories/${category}.json`, callback)
                }
            });
        }
        else{
            callback(false)
        }
    }
}

let ajaxRequest = function(type, url, callback) {
    let xmlHttp = new XMLHttpRequest();
    xmlHttp.open(type, url, true);
    xmlHttp.send(null);
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
            callback(JSON.parse(xmlHttp.responseText))
        }
    }
}
const blog = {"categories":["\u7F16\u7A0B\u601D\u60F3","\u670D\u52A1\u5668","\u7F16\u7A0B"],"tags":["\u7B97\u6CD5","\u7F51\u76D8","\u8F6F\u4EF6\u67B6\u6784\u6A21\u5F0F","MVVM","MVP","MVC","nodebb","\u793E\u533A","\u8BBA\u575B\u7CFB\u7EDF","\u521D\u4F53\u9A8C","\u9759\u6001ip","\u65E0\u7EBF\u7F51\u7EDC","\u7F51\u7EDC","\u4E91\u76D8","Seafile","hexo-theme-next","hexo","Web\u5F00\u53D1"],"links":[{"title":"\u521D\u59CB\u4F53\u9A8Cseafile\u5F00\u6E90\u7F51\u76D8","date":"2021-11-17 18:05:08","categories":["\u670D\u52A1\u5668"],"tags":["\u7F51\u76D8","\u4E91\u76D8","Seafile"],"address":"/articles/2021/11/17/seafile-get-started.json"},{"title":"Debian\u7F51\u7EDC\u914D\u7F6E\u7684\u4E00\u4E9B\u95EE\u9898","date":"2021-11-04 18:19:47","categories":["\u670D\u52A1\u5668"],"tags":["\u7F51\u7EDC","\u65E0\u7EBF\u7F51\u7EDC","\u9759\u6001ip"],"address":"/articles/2021/11/4/debianNetworking.json"},{"title":"BresenhamAlgorithm","date":"2021-10-03 12:22:52","categories":["\u7F16\u7A0B\u601D\u60F3"],"tags":["\u7B97\u6CD5"],"address":"/articles/2021/10/3/BresenhamAlgorithm.json"},{"title":"\u8BBA\u575B\u7CFB\u7EDFNodeBB\u521D\u4F53\u9A8C","date":"2021-09-27 23:15:14","categories":["\u7F16\u7A0B"],"tags":["\u521D\u4F53\u9A8C","\u8BBA\u575B\u7CFB\u7EDF","\u793E\u533A","nodebb","Web\u5F00\u53D1"],"address":"/articles/2021/9/27/installNodeBB.json"},{"title":"MVC\uFF0CMVP \u548C MVVM \u7684\u7406\u89E3","date":"2021-03-23 18:57:22","categories":["\u7F16\u7A0B\u601D\u60F3"],"tags":["MVC","MVP","MVVM","\u8F6F\u4EF6\u67B6\u6784\u6A21\u5F0F"],"address":"/articles/2021/3/23/MVPatternUnderstanding.json"},{"title":"Hexo \u8BBE\u7F6E\u6587\u7AE0\u7F6E\u9876","date":"2021-03-22 13:23:15","categories":["\u7F16\u7A0B"],"tags":["hexo","hexo-theme-next","Web\u5F00\u53D1"],"address":"/articles/2021/3/22/hexo-next-pin-top.json"},{"title":"\u7B2C\u4E00\u6B21\u4F7F\u7528Hexo blog","date":"2021-03-22 00:03:24","categories":["\u7F16\u7A0B"],"tags":["hexo","hexo-theme-next","Web\u5F00\u53D1"],"address":"/articles/2021/3/22/firstblog.json"}],"nextFileLinks":[]}
const meta =  {"blogName":"Reknig Blog","author":"Jinker","description":"Welcome to my blog.","about":"Blog is powered by Bbob","copyright":"\u00A9 2022 Jinker Powered by Bbob \u0026 default","extra":{}}
var Bbob = { blog, meta, api }