let offset=0;const api={resetNextLinkInfosOffset(n){n||(n=0);offset=n},nextLinkInfos(n){blog.nextFileLinks&&offset<blog.nextFileLinks.length?(ajaxRequest("get",blog.nextFileLinks[offset],n),offset++):n(!1)},getArticleFromAddress(n,t){ajaxRequest("get",n,t)},getLinkInfosWithAddress(n,t){ajaxRequest("get",n,t)},executeScriptElements(n){const t=n.querySelectorAll("script");Array.from(t).forEach(n=>{const t=document.createElement("script");Array.from(n.attributes).forEach(n=>{t.setAttribute(n.name,n.value)});t.text=n.text;n.parentNode.replaceChild(t,n)})}};let ajaxRequest=function(n,t,i){let r=new XMLHttpRequest;r.open(n,t,!0);r.send(null);r.onreadystatechange=function(){r.readyState==4&&r.status==200&&i(JSON.parse(r.responseText))}};const blog={links:[{title:"Bbob 启用Disqus评论",date:"2022-03-06 14:00:43",categories:["编程"],tags:["Bbob","Disqus"],address:"bbobEnableDisqus-5ed7412f7"},{title:"Bbob博客部署",date:"2022-02-20 13:41:48",categories:["编程"],tags:["Bbob"],address:"deployBlog-cf25db905"},{title:"尝试自己创建的博客框架",date:"2022-02-14 19:36:28Z",categories:["编程"],tags:["Bbob"],address:"tryBbob-9d522ea24"},{title:"初始体验seafile开源网盘",date:"2021-11-17 18:05:08",tags:["网盘","云盘","Seafile"],categories:["服务器"],address:"seafile-get-started-a3615d9ee"},{title:"Debian网络配置的一些问题",date:"2021-11-04 18:19:47",tags:["网络","无线网络","静态ip"],categories:["服务器"],address:"debianNetworking-30e05c536"}],nextFileLinks:["/bbob-assets/nextLinkInfoFiles/next-c44a73d17.js"],archives:[{text:"2022",address:"/bbob-assets/archives/2022-96985d2b3.json"},{text:"2021",address:"/bbob-assets/archives/2021-178095efe.json"}],categories:[{text:"服务器",address:"/bbob-assets/categories/服务器-83160d4fc.json"},{text:"编程思想",address:"/bbob-assets/categories/编程思想-81d754943.json"},{text:"编程",address:"/bbob-assets/categories/编程-ade693dcb.json"}],tags:[{text:"初体验",address:"/bbob-assets/tags/初体验-98d220e24.json"},{text:"Disqus",address:"/bbob-assets/tags/Disqus-ff5b73f9d.json"},{text:"网盘",address:"/bbob-assets/tags/网盘-97edd8d3c.json"},{text:"云盘",address:"/bbob-assets/tags/云盘-97edd8d3c.json"},{text:"Seafile",address:"/bbob-assets/tags/Seafile-97edd8d3c.json"},{text:"网络",address:"/bbob-assets/tags/网络-cc1a3a14c.json"},{text:"无线网络",address:"/bbob-assets/tags/无线网络-cc1a3a14c.json"},{text:"静态ip",address:"/bbob-assets/tags/静态ip-cc1a3a14c.json"},{text:"算法",address:"/bbob-assets/tags/算法-7751b9686.json"},{text:"软件架构模式",address:"/bbob-assets/tags/软件架构模式-b2b1a1930.json"},{text:"论坛系统",address:"/bbob-assets/tags/论坛系统-98d220e24.json"},{text:"社区",address:"/bbob-assets/tags/社区-98d220e24.json"},{text:"nodebb",address:"/bbob-assets/tags/nodebb-98d220e24.json"},{text:"MVVM",address:"/bbob-assets/tags/MVVM-b2b1a1930.json"},{text:"MVC",address:"/bbob-assets/tags/MVC-b2b1a1930.json"},{text:"MVP",address:"/bbob-assets/tags/MVP-b2b1a1930.json"},{text:"hexo-theme-next",address:"/bbob-assets/tags/hexo-theme-next-fbdd30f50.json"},{text:"hexo",address:"/bbob-assets/tags/hexo-fbdd30f50.json"},{text:"Web开发",address:"/bbob-assets/tags/Web开发-ee4f15541.json"},{text:"Bbob",address:"/bbob-assets/tags/Bbob-96985d2b3.json"}]},meta={blogName:"Reknij Blog",author:"Jinker",description:"Welcome to my blog. I am Jinker.",about:"Blog is powered by Bbob",copyright:"© 2022 Jinker Powered by Bbob & default",blogCountOneTime:5,allLink:"false",baseUrl:"/",lastBuild:"2022-03-08 14:33:51",extra:{shortAddress:{startOfAddress:"/bbob-assets/articles/",endOfAddress:".json"}}};var Bbob={blog,meta,api}