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
const blog = {"categories":[{"text":"\u7F16\u7A0B\u601D\u60F3","address":"https://reknij.github.io/bbob.assets/categories/\u7F16\u7A0B\u601D\u60F3.e82648065.json"},{"text":"\u670D\u52A1\u5668","address":"https://reknij.github.io/bbob.assets/categories/\u670D\u52A1\u5668.d9cec0d36.json"},{"text":"\u7F16\u7A0B","address":"https://reknij.github.io/bbob.assets/categories/\u7F16\u7A0B.ffacda80b.json"}],"tags":[{"text":"\u7B97\u6CD5","address":"https://reknij.github.io/bbob.assets/tags/\u7B97\u6CD5.2b3433bd9.json"},{"text":"\u7F51\u76D8","address":"https://reknij.github.io/bbob.assets/tags/\u7F51\u76D8.56864cbbb.json"},{"text":"\u8F6F\u4EF6\u67B6\u6784\u6A21\u5F0F","address":"https://reknij.github.io/bbob.assets/tags/\u8F6F\u4EF6\u67B6\u6784\u6A21\u5F0F.36babf7b9.json"},{"text":"MVVM","address":"https://reknij.github.io/bbob.assets/tags/MVVM.36babf7b9.json"},{"text":"MVP","address":"https://reknij.github.io/bbob.assets/tags/MVP.36babf7b9.json"},{"text":"MVC","address":"https://reknij.github.io/bbob.assets/tags/MVC.36babf7b9.json"},{"text":"nodebb","address":"https://reknij.github.io/bbob.assets/tags/nodebb.c42e90391.json"},{"text":"\u793E\u533A","address":"https://reknij.github.io/bbob.assets/tags/\u793E\u533A.c42e90391.json"},{"text":"\u4E91\u76D8","address":"https://reknij.github.io/bbob.assets/tags/\u4E91\u76D8.56864cbbb.json"},{"text":"\u8BBA\u575B\u7CFB\u7EDF","address":"https://reknij.github.io/bbob.assets/tags/\u8BBA\u575B\u7CFB\u7EDF.c42e90391.json"},{"text":"\u9759\u6001ip","address":"https://reknij.github.io/bbob.assets/tags/\u9759\u6001ip.fbe6b44f1.json"},{"text":"\u65E0\u7EBF\u7F51\u7EDC","address":"https://reknij.github.io/bbob.assets/tags/\u65E0\u7EBF\u7F51\u7EDC.fbe6b44f1.json"},{"text":"\u7F51\u7EDC","address":"https://reknij.github.io/bbob.assets/tags/\u7F51\u7EDC.fbe6b44f1.json"},{"text":"\u521D\u4F53\u9A8C","address":"https://reknij.github.io/bbob.assets/tags/\u521D\u4F53\u9A8C.c42e90391.json"},{"text":"Seafile","address":"https://reknij.github.io/bbob.assets/tags/Seafile.56864cbbb.json"},{"text":"hexo-theme-next","address":"https://reknij.github.io/bbob.assets/tags/hexo-theme-next.7f96893d8.json"},{"text":"hexo","address":"https://reknij.github.io/bbob.assets/tags/hexo.7f96893d8.json"},{"text":"Bbob","address":"https://reknij.github.io/bbob.assets/tags/Bbob.6a20ebec0.json"},{"text":"Web\u5F00\u53D1","address":"https://reknij.github.io/bbob.assets/tags/Web\u5F00\u53D1.da0a19c07.json"}],"archives":[{"text":"2022","address":"https://reknij.github.io/bbob.assets/archives/2022.6a20ebec0.json"},{"text":"2021","address":"https://reknij.github.io/bbob.assets/archives/2021.1e0935530.json"}],"links":[{"title":"Bbob\u535A\u5BA2\u90E8\u7F72","date":"2022-02-20 13:41:48","categories":["\u7F16\u7A0B"],"tags":["Bbob"],"address":"deployBlog.bfa53b2c9"},{"title":"\u5C1D\u8BD5\u81EA\u5DF1\u521B\u5EFA\u7684\u535A\u5BA2\u6846\u67B6","date":"2022-02-14 19:36:28Z","categories":["\u7F16\u7A0B"],"tags":["Bbob"],"address":"tryBbob.eaddd0917"},{"title":"\u521D\u59CB\u4F53\u9A8Cseafile\u5F00\u6E90\u7F51\u76D8","date":"2021-11-17 18:05:08","tags":["\u7F51\u76D8","\u4E91\u76D8","Seafile"],"categories":["\u670D\u52A1\u5668"],"address":"seafile-get-started.0c3e161a4"},{"title":"Debian\u7F51\u7EDC\u914D\u7F6E\u7684\u4E00\u4E9B\u95EE\u9898","date":"2021-11-04 18:19:47","tags":["\u7F51\u7EDC","\u65E0\u7EBF\u7F51\u7EDC","\u9759\u6001ip"],"categories":["\u670D\u52A1\u5668"],"address":"debianNetworking.e08b31f43"},{"title":"BresenhamAlgorithm","date":"2021-10-03 12:22:52","tags":["\u7B97\u6CD5"],"categories":["\u7F16\u7A0B\u601D\u60F3"],"top":"","address":"BresenhamAlgorithm.d98bb9909"}],"nextFileLinks":["https://reknij.github.io/bbob.assets/nextLinkInfoFiles/next.f29c9c185.js"]}
const meta =  {"blogName":"Reknij Blog","author":"Jinker","description":"Welcome to my blog. I am Jinker.","about":"Blog is powered by Bbob","copyright":"\u00A9 2022 Jinker Powered by Bbob \u0026 default","blogCountOneTime":5,"allLink":"false","baseUrl":"https://reknij.github.io/","lastBuild":"2022-02-28 13:36:52","extra":{"shortAddress":{"startOfAddress":"https://reknij.github.io/bbob.assets/articles/","endOfAddress":".json"}}}
var Bbob = { blog, meta, api }