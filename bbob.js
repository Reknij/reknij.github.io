let offset=0;const api={resetNextLinkInfosOffset(n){n||(n=0);offset=n},nextLinkInfos(n){blog.nextFileLinks&&offset<blog.nextFileLinks.length?(ajaxRequest({url:blog.nextFileLinks[offset]}).then(n).catch(n),offset++):n(undefined)},async nextLinkInfosAsync(){if(blog.nextFileLinks&&offset<blog.nextFileLinks.length){let n=await ajaxRequest({url:blog.nextFileLinks[offset]});return offset++,n}},getArticleFromAddress(n,t){n=meta.extra.shortAddress.startOfAddress+n+meta.extra.shortAddress.endOfAddress;ajaxRequest({url:n}).then(t).catch(t)},async getArticleFromAddressAsync(n){n=meta.extra.shortAddress.startOfAddress+n+meta.extra.shortAddress.endOfAddress;return await ajaxRequest({url:n})},getLinkInfosWithAddress(n,t){ajaxRequest({url:n}).then(t).catch(t)},async getLinkInfosWithAddressAsync(n){return await ajaxRequest({url:n})},executeScriptElements(n){const t=n.querySelectorAll("script");Array.from(t).forEach(n=>{const t=document.createElement("script");Array.from(n.attributes).forEach(n=>{t.setAttribute(n.name,n.value)});t.text=n.text;n.parentNode.replaceChild(t,n)})}};let ajaxRequest=async function(n){return new Promise((t,i)=>{let r=new XMLHttpRequest;r.open(n.method||"GET",n.url);n.headers&&Object.keys(n.headers).forEach(t=>{r.setRequestHeader(t,n.headers[t])});r.onreadystatechange=function(){r.readyState==4&&(r.status==200?t(JSON.parse(r.responseText)):i(undefined))};r.onerror=()=>i(r.statusText);r.send(n.body)})};const blog={links:[{title:"Bbob启用预渲染解决SEO",date:"2022-03-20 18:37:34",categories:["编程"],tags:["Bbob","Prerender","SEO"],address:"bbobEnablePrerender/",contentHash:"d47d08ece64c4ce36b72ed7432c87ad0d8ebc2810182caccfc3a0a6d69917894"},{title:"Bbob 启用Disqus评论",date:"2022-03-06 14:00:43",categories:["编程"],tags:["Bbob","Disqus"],address:"bbobEnableDisqus/",contentHash:"dc5e9238ec0cd149576e91b1ddb59033dc18e12de0ca0420e64ce49846d3c6e7"},{title:"Bbob博客部署",date:"2022-02-20 13:41:48",categories:["编程"],tags:["Bbob"],address:"deployBlog/",contentHash:"448e6c9cb7ea23374a604f794db55ad20701c7204b9fa1d981eb3fe07864246d"},{title:"尝试自己创建的博客框架",date:"2022-02-14 19:36:28Z",categories:["编程"],tags:["Bbob"],address:"tryBbob/",contentHash:"55a72c25f94e6b68eecb6ab9fbfb3f9b621d5c50ad1d58a1b92485adb29db5a6"},{title:"初始体验seafile开源网盘",date:"2021-11-17 18:05:08",tags:["网盘","云盘","Seafile"],categories:["服务器"],address:"seafile-get-started/",contentHash:"114233cd9b8bb875569f10bb701de83cec8158ac4511e60b26fd990aed8a047d"}],nextFileLinks:["/bbob-assets/nextLinkInfoFiles/next-87864e662.js","/bbob-assets/nextLinkInfoFiles/next-49134600d.js"],archives:[{text:"2022",address:"/bbob-assets/archives/2022.json"},{text:"2021",address:"/bbob-assets/archives/2021.json"}],categories:[{text:"数学",address:"/bbob-assets/categories/数学.json"},{text:"服务器",address:"/bbob-assets/categories/服务器.json"},{text:"编程思想",address:"/bbob-assets/categories/编程思想.json"},{text:"编程",address:"/bbob-assets/categories/编程.json"}],tags:[{text:"游戏",address:"/bbob-assets/tags/游戏.json"},{text:"MVVM",address:"/bbob-assets/tags/MVVM.json"},{text:"nodebb",address:"/bbob-assets/tags/nodebb.json"},{text:"社区",address:"/bbob-assets/tags/社区.json"},{text:"论坛系统",address:"/bbob-assets/tags/论坛系统.json"},{text:"初体验",address:"/bbob-assets/tags/初体验.json"},{text:"欧几里得空间",address:"/bbob-assets/tags/欧几里得空间.json"},{text:"软件架构模式",address:"/bbob-assets/tags/软件架构模式.json"},{text:"距离计算",address:"/bbob-assets/tags/距离计算.json"},{text:"MVC",address:"/bbob-assets/tags/MVC.json"},{text:"算法",address:"/bbob-assets/tags/算法.json"},{text:"无线网络",address:"/bbob-assets/tags/无线网络.json"},{text:"网络",address:"/bbob-assets/tags/网络.json"},{text:"Seafile",address:"/bbob-assets/tags/Seafile.json"},{text:"云盘",address:"/bbob-assets/tags/云盘.json"},{text:"网盘",address:"/bbob-assets/tags/网盘.json"},{text:"Disqus",address:"/bbob-assets/tags/Disqus.json"},{text:"SEO",address:"/bbob-assets/tags/SEO.json"},{text:"Prerender",address:"/bbob-assets/tags/Prerender.json"},{text:"静态ip",address:"/bbob-assets/tags/静态ip.json"},{text:"MVP",address:"/bbob-assets/tags/MVP.json"},{text:"hexo-theme-next",address:"/bbob-assets/tags/hexo-theme-next.json"},{text:"hexo",address:"/bbob-assets/tags/hexo.json"},{text:"Web开发",address:"/bbob-assets/tags/Web开发.json"},{text:"Bbob",address:"/bbob-assets/tags/Bbob.json"}]},meta={blogName:"Reknij Blog",author:"Jinker",description:"Welcome to my blog. I am Jinker.",about:"Blog is powered by Bbob",copyright:'© 2022 Jinker Powered by <a class="bbob-project-link" href="https://github.com/Reknij/Bbob">Bbob<\/a> & default',blogCountOneTime:5,allLink:"false",baseUrl:"/",lastBuild:"2022-04-07 22:34:08",extra:{defaultTheme:{avatar:{source:"https://avatars.githubusercontent.com/u/31568171?v=4",type:"circle"},language:"zh",background:{sourceH:"https://w.wallhaven.cc/full/y8/wallhaven-y8l89d.png",sourceV:"https://w.wallhaven.cc/full/y8/wallhaven-y8l89d.png"}},extraLinks:[{name:"Sitemap",address:"/sitemap-html.html"},{name:"Github",address:"https://github.com/Reknij"}],shortAddress:{startOfAddress:"/bbob-assets/articles/",endOfAddress:".json"},prerenderNow:!1}};var Bbob={blog,meta,api}