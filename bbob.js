let offset=0;const api={resetNextLinkInfosOffset(n){n||(n=0);offset=n},nextLinkInfos(n){blog.nextFileLinks&&offset<blog.nextFileLinks.length?(ajaxRequest({url:blog.nextFileLinks[offset]}).then(n).catch(n),offset++):n(undefined)},async nextLinkInfosAsync(){if(blog.nextFileLinks&&offset<blog.nextFileLinks.length){let n=await ajaxRequest({url:blog.nextFileLinks[offset]});return offset++,n}},getArticleFromAddress(n,t){n=meta.extra.shortAddress.startOfAddress+n+meta.extra.shortAddress.endOfAddress;ajaxRequest({url:n}).then(t).catch(t)},async getArticleFromAddressAsync(n){n=meta.extra.shortAddress.startOfAddress+n+meta.extra.shortAddress.endOfAddress;return await ajaxRequest({url:n})},getLinkInfosWithAddress(n,t){ajaxRequest({url:n}).then(t).catch(t)},async getLinkInfosWithAddressAsync(n){return await ajaxRequest({url:n})},executeScriptElements(n){const t=n.querySelectorAll("script");Array.from(t).forEach(n=>{const t=document.createElement("script");Array.from(n.attributes).forEach(n=>{t.setAttribute(n.name,n.value)});t.text=n.text;n.parentNode.replaceChild(t,n)})}};let ajaxRequest=async function(n){return new Promise((t,i)=>{let r=new XMLHttpRequest;r.open(n.method||"GET",n.url);n.headers&&Object.keys(n.headers).forEach(t=>{r.setRequestHeader(t,n.headers[t])});r.onreadystatechange=function(){r.readyState==4&&(r.status==200?t(JSON.parse(r.responseText)):i(undefined))};r.onerror=()=>i(r.statusText);r.send(n.body)})};const blog={links:[{title:"Bbob启用预渲染解决SEO",date:"2022-03-20 18:37:34",categories:["编程"],tags:["Bbob","Prerender","SEO"],address:"bbobEnablePrerender/",contentHash:"c70db0a856d298c67cd06d1384d7e1b9e2901efbf5717eedb8972760399dec8e"},{title:"Bbob 启用Disqus评论",date:"2022-03-06 14:00:43",categories:["编程"],tags:["Bbob","Disqus"],address:"bbobEnableDisqus/",contentHash:"136574664508dba0c773b5a4b91d6da3a5e54236dbb1bf8a1b25dadd995c08c1"},{title:"Bbob博客部署",date:"2022-02-20 13:41:48",categories:["编程"],tags:["Bbob"],address:"deployBlog/",contentHash:"b07aeabf4dfaed2a1fe32bebd33e80154967766914e41ebf7ced220b1c0375df"},{title:"尝试自己创建的博客框架",date:"2022-02-14 19:36:28Z",categories:["编程"],tags:["Bbob"],address:"tryBbob/",contentHash:"fad525cc853fe4c0ff5f77688c841997ef13f4c1132910c4236d94809d441001"},{title:"初始体验seafile开源网盘",date:"2021-11-17 18:05:08",tags:["网盘","云盘","Seafile"],categories:["服务器"],address:"seafile-get-started/",contentHash:"6b637c0fb7584adb55eb9b1dd33b7c7c87195e19692db55a0c5d23ced1bbd164"}],nextFileLinks:["/bbob-assets/nextLinkInfoFiles/next-3223c92a3.js","/bbob-assets/nextLinkInfoFiles/next-a4c1e953e.js"],archives:[{text:"2022",address:"/bbob-assets/archives/2022.json"},{text:"2021",address:"/bbob-assets/archives/2021.json"}],categories:[{text:"服务器",address:"/bbob-assets/categories/服务器.json"},{text:"编程思想",address:"/bbob-assets/categories/编程思想.json"},{text:"编程",address:"/bbob-assets/categories/编程.json"}],tags:[{text:"算法",address:"/bbob-assets/tags/算法.json"},{text:"MVVM",address:"/bbob-assets/tags/MVVM.json"},{text:"nodebb",address:"/bbob-assets/tags/nodebb.json"},{text:"社区",address:"/bbob-assets/tags/社区.json"},{text:"论坛系统",address:"/bbob-assets/tags/论坛系统.json"},{text:"初体验",address:"/bbob-assets/tags/初体验.json"},{text:"软件架构模式",address:"/bbob-assets/tags/软件架构模式.json"},{text:"静态ip",address:"/bbob-assets/tags/静态ip.json"},{text:"无线网络",address:"/bbob-assets/tags/无线网络.json"},{text:"网络",address:"/bbob-assets/tags/网络.json"},{text:"Seafile",address:"/bbob-assets/tags/Seafile.json"},{text:"云盘",address:"/bbob-assets/tags/云盘.json"},{text:"网盘",address:"/bbob-assets/tags/网盘.json"},{text:"Disqus",address:"/bbob-assets/tags/Disqus.json"},{text:"SEO",address:"/bbob-assets/tags/SEO.json"},{text:"Prerender",address:"/bbob-assets/tags/Prerender.json"},{text:"MVC",address:"/bbob-assets/tags/MVC.json"},{text:"MVP",address:"/bbob-assets/tags/MVP.json"},{text:"hexo-theme-next",address:"/bbob-assets/tags/hexo-theme-next.json"},{text:"hexo",address:"/bbob-assets/tags/hexo.json"},{text:"Web开发",address:"/bbob-assets/tags/Web开发.json"},{text:"Bbob",address:"/bbob-assets/tags/Bbob.json"}]},meta={blogName:"Reknij Blog",author:"Jinker",description:"Welcome to my blog. I am Jinker.",about:"Blog is powered by Bbob",copyright:'© 2022 Jinker Powered by <a class="bbob-project-link" href="https://github.com/Reknij/Bbob">Bbob<\/a> & default',blogCountOneTime:5,allLink:"false",baseUrl:"/",lastBuild:"2022-03-29 16:08:47",extra:{shortAddress:{startOfAddress:"/bbob-assets/articles/",endOfAddress:".json"},extraLinks:[{name:"Sitemap",address:"/sitemap-html.html"}],prerenderNow:!1}};var Bbob={blog,meta,api}