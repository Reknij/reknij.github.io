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
    getLinkInfosWithAddress(address, callback) {
        ajaxRequest('get', address, callback)
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
const blog = {"categories":[{"text":"\u7F16\u7A0B\u601D\u60F3","address":"/bbob.assets/categories/\u7F16\u7A0B\u601D\u60F3.e82648065.json"},{"text":"\u670D\u52A1\u5668","address":"/bbob.assets/categories/\u670D\u52A1\u5668.d9cec0d36.json"},{"text":"\u7F16\u7A0B","address":"/bbob.assets/categories/\u7F16\u7A0B.ffacda80b.json"}],"tags":[{"text":"\u7B97\u6CD5","address":"/bbob.assets/tags/\u7B97\u6CD5.2b3433bd9.json"},{"text":"\u7F51\u76D8","address":"/bbob.assets/tags/\u7F51\u76D8.56864cbbb.json"},{"text":"\u8F6F\u4EF6\u67B6\u6784\u6A21\u5F0F","address":"/bbob.assets/tags/\u8F6F\u4EF6\u67B6\u6784\u6A21\u5F0F.36babf7b9.json"},{"text":"MVVM","address":"/bbob.assets/tags/MVVM.36babf7b9.json"},{"text":"MVP","address":"/bbob.assets/tags/MVP.36babf7b9.json"},{"text":"MVC","address":"/bbob.assets/tags/MVC.36babf7b9.json"},{"text":"nodebb","address":"/bbob.assets/tags/nodebb.c42e90391.json"},{"text":"\u793E\u533A","address":"/bbob.assets/tags/\u793E\u533A.c42e90391.json"},{"text":"\u4E91\u76D8","address":"/bbob.assets/tags/\u4E91\u76D8.56864cbbb.json"},{"text":"\u8BBA\u575B\u7CFB\u7EDF","address":"/bbob.assets/tags/\u8BBA\u575B\u7CFB\u7EDF.c42e90391.json"},{"text":"\u9759\u6001ip","address":"/bbob.assets/tags/\u9759\u6001ip.fbe6b44f1.json"},{"text":"\u65E0\u7EBF\u7F51\u7EDC","address":"/bbob.assets/tags/\u65E0\u7EBF\u7F51\u7EDC.fbe6b44f1.json"},{"text":"\u7F51\u7EDC","address":"/bbob.assets/tags/\u7F51\u7EDC.fbe6b44f1.json"},{"text":"\u521D\u4F53\u9A8C","address":"/bbob.assets/tags/\u521D\u4F53\u9A8C.c42e90391.json"},{"text":"Seafile","address":"/bbob.assets/tags/Seafile.56864cbbb.json"},{"text":"hexo-theme-next","address":"/bbob.assets/tags/hexo-theme-next.7f96893d8.json"},{"text":"hexo","address":"/bbob.assets/tags/hexo.7f96893d8.json"},{"text":"Bbob","address":"/bbob.assets/tags/Bbob.6a20ebec0.json"},{"text":"Web\u5F00\u53D1","address":"/bbob.assets/tags/Web\u5F00\u53D1.da0a19c07.json"}],"archives":[{"text":"2022","address":"/bbob.assets/archives/2022.6a20ebec0.json"},{"text":"2021","address":"/bbob.assets/archives/2021.1e0935530.json"}],"links":[{"title":"Bbob\u535A\u5BA2\u90E8\u7F72","date":"2022-02-20 13:41:48","categories":["\u7F16\u7A0B"],"tags":["Bbob"],"address":"deployBlog.bfa53b2c9"},{"title":"\u5C1D\u8BD5\u81EA\u5DF1\u521B\u5EFA\u7684\u535A\u5BA2\u6846\u67B6","date":"2022-02-14 19:36:28Z","categories":["\u7F16\u7A0B"],"tags":["Bbob"],"address":"tryBbob.eaddd0917"},{"title":"\u521D\u59CB\u4F53\u9A8Cseafile\u5F00\u6E90\u7F51\u76D8","date":"2021-11-17 18:05:08","tags":["\u7F51\u76D8","\u4E91\u76D8","Seafile"],"categories":["\u670D\u52A1\u5668"],"address":"seafile-get-started.0c3e161a4"}],"nextFileLinks":["/bbob.assets/nextLinkInfoFiles/next.9035610d0.js","/bbob.assets/nextLinkInfoFiles/next.9f682d390.js"]}
const meta =  {"blogName":"Reknij Blog","author":"Jinker","description":"Welcome to my blog.","about":"Blog is powered by Bbob","copyright":"\u00A9 2022 Jinker Powered by Bbob \u0026 default","blogCountOneTime":3,"allLink":"false","baseUrl":"/","extra":{"shortAddress":{"startOfAddress":"/bbob.assets/articles/","endOfAddress":".json"}}}
var Bbob = { blog, meta, api }