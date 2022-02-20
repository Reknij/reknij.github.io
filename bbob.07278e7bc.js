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
                    let r = Math.random();
                    ajaxRequest('get', `${meta.publicPath}tags/${tag}.json?r=${r}`, callback)
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
                    let r = Math.random();
                    ajaxRequest('get', `${meta.publicPath}categories/${category}.json?r=${r}`, callback)
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
const blog = {"categories":["\u7F16\u7A0B\u601D\u60F3","\u670D\u52A1\u5668","\u7F16\u7A0B"],"tags":["\u7B97\u6CD5","\u7F51\u76D8","\u8F6F\u4EF6\u67B6\u6784\u6A21\u5F0F","MVVM","MVP","MVC","nodebb","\u793E\u533A","\u4E91\u76D8","\u8BBA\u575B\u7CFB\u7EDF","\u9759\u6001ip","\u65E0\u7EBF\u7F51\u7EDC","\u7F51\u7EDC","\u521D\u4F53\u9A8C","Seafile","hexo-theme-next","hexo","Bbob","Web\u5F00\u53D1"],"links":[{"title":"deployBlog","date":"2022-02-20 13:41:48","categories":["\u7F16\u7A0B"],"tags":["Bbob"],"address":"/articles/2022/2/20/deployBlog.2b33adf67.json"},{"title":"\u5C1D\u8BD5\u81EA\u5DF1\u521B\u5EFA\u7684\u535A\u5BA2\u6846\u67B6","date":"2022-02-14 19:36:28Z","categories":["\u7F16\u7A0B"],"tags":["Bbob"],"address":"/articles/2022/2/15/tryBbob.66cde8dae.json"},{"title":"\u521D\u59CB\u4F53\u9A8Cseafile\u5F00\u6E90\u7F51\u76D8","date":"2021-11-17 18:05:08","categories":["\u670D\u52A1\u5668"],"tags":["\u7F51\u76D8","\u4E91\u76D8","Seafile"],"address":"/articles/2021/11/17/seafile-get-started.1301e1cb3.json"}],"nextFileLinks":["/nextLinkInfoFiles/next.60309a441.js","/nextLinkInfoFiles/next.ea7eba859.js"]}
const meta =  {"blogName":"Reknij Blog","author":"Jinker","description":"Welcome to my blog.","about":"Blog is powered by Bbob","copyright":"\u00A9 2022 Jinker Powered by Bbob \u0026 default","publicPath":"/","extra":{}}
var Bbob = { blog, meta, api }