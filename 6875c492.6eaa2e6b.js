(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{105:function(e,a,t){"use strict";var r=t(0),n=t.n(r),l=t(98),c=t(97),m=t(47),s=t.n(m);a.a=function(){return n.a.createElement("div",{className:s.a.footerContent},n.a.createElement("div",null,n.a.createElement("img",{src:Object(l.a)("img/logo-white.png"),alt:"EOS CR LOGO"})),n.a.createElement("div",null,n.a.createElement("h2",null,"FOLLOW US"),n.a.createElement("div",{className:s.a.socialCol},n.a.createElement("div",null,n.a.createElement("a",{href:"https://twitter.com/EOSCostaRica",target:"_blank",className:Object(c.a)(s.a.companySocial,s.a.companyLocation)},"Twitter"),n.a.createElement("a",{href:"https://www.facebook.com/costaricaeos",target:"_blank",className:Object(c.a)(s.a.companySocial,s.a.companyLocation)},"Facebook"),n.a.createElement("a",{href:"https://www.linkedin.com/company/eoscostarica/",target:"_blank",className:Object(c.a)(s.a.companySocial,s.a.companyLocation)},"LinkedIn")),n.a.createElement("div",null,n.a.createElement("a",{href:"https://medium.com/@eoscostarica",target:"_blank",className:Object(c.a)(s.a.companySocial,s.a.companyLocation)},"Medium"),n.a.createElement("a",{href:"https://t.me/eoscr",target:"_blank",className:Object(c.a)(s.a.companySocial,s.a.companyLocation)},"Telegram"),n.a.createElement("a",{href:"https://www.instagram.com/eoscostarica/",target:"_blank",className:Object(c.a)(s.a.companySocial,s.a.companyLocation)},"Instagram")))),n.a.createElement("div",null,n.a.createElement("span",{className:s.a.companyLocation},"Edificio Trifami, 5th floor San Jos\xe9,"," ",n.a.createElement("strong",null,n.a.createElement("i",null,"Costa Rica")))))}},106:function(e,a,t){"use strict";var r=t(0),n=t.n(r),l=t(98),c=t(104),m=t(97),s=function(){return n.a.createElement("svg",{viewBox:"0 0 100 80",width:"40",height:"30"},n.a.createElement("rect",{width:"100",height:"10"}),n.a.createElement("rect",{y:"30",width:"100",height:"10"}),n.a.createElement("rect",{y:"60",width:"100",height:"10"}))},o=t(47),i=t.n(o),u=function(e){var a,t=e.isOpen,r=e.setIsOpen;return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:i.a.menuButton,onClick:function(){return r(!0)}},n.a.createElement(s,null)),n.a.createElement("div",{className:Object(m.a)(i.a.sidebar,(a={},a[i.a.active]=t,a)),onClick:function(){return r(!1)}},n.a.createElement("div",{className:i.a.menuSideBar,onClick:function(e){return e.stopPropagation()}},n.a.createElement("div",{className:i.a.imgBox},n.a.createElement("img",{src:Object(l.a)("img/eoscr-logo.png"),alt:"EOS CR LOGO"})),n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("a",{href:Object(l.a)("/")},"Home")),n.a.createElement("li",null,n.a.createElement("a",{href:Object(l.a)("/services")},"Services")),n.a.createElement("li",null,n.a.createElement("a",{href:Object(l.a)("/about")},"About")),n.a.createElement("li",null,n.a.createElement("a",{href:Object(l.a)("/bp")},"Bp")),n.a.createElement("li",null,n.a.createElement("a",{href:Object(l.a)("/blog")},"Blog"))))))};a.a=function(){var e,a,t,s,o,E=Object(r.useRef)(0),d=Object(r.useRef)(0),g="undefined"!=typeof window?window.location.pathname:"/",b=Object(c.useMediaQuery)({query:"(max-width: 768px)"}),f=Object(r.useState)(!1),h=f[0],p=f[1],v=function(){if(!window.matchMedia("(max-width: 768px)").matches)if(document.body.scrollTop>50||document.documentElement.scrollTop>50){var e="scale(0.4, 0.4)";E.current.style.WebkitTransform=e,E.current.style.MozTransform=e,E.current.style.OTransform=e,E.current.style.transform=e,d.current.style.height="75px"}else{var a="scale(1, 1)";E.current.style.WebkitTransform=a,E.current.style.MozTransform=a,E.current.style.OTransform=a,E.current.style.transform=a,d.current.style.height="150px"}};return Object(r.useLayoutEffect)((function(){return window.addEventListener("scroll",v),function(){return window.removeEventListener("scroll",v)}}),[]),Object(r.useEffect)((function(){if(b){var e="scale(1, 1)";return E.current.style.WebkitTransform=e,E.current.style.MozTransform=e,E.current.style.OTransform=e,E.current.style.transform=e,void(d.current.style.height="60px")}if(!b&&"/"!==g&&"/services"!==g){var a="scale(0.4, 0.4)";return E.current.style.WebkitTransform=a,E.current.style.MozTransform=a,E.current.style.OTransform=a,E.current.style.transform=a,void(d.current.style.height="65px")}v()}),[b,g]),n.a.createElement("div",{className:i.a.customMenu,ref:d},b&&n.a.createElement(u,{isOpen:h,setIsOpen:p}),n.a.createElement("div",{className:i.a.boxLeft},n.a.createElement("img",{ref:E,src:Object(l.a)("img/eoscr-logo.png"),alt:"EOS CR LOGO"})),n.a.createElement("div",{className:i.a.boxRight},n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("a",{href:Object(l.a)("/"),className:Object(m.a)((e={},e[i.a.selected]="/"===g,e))},"Home")),n.a.createElement("li",null,n.a.createElement("a",{href:Object(l.a)("/services"),className:Object(m.a)((a={},a[i.a.selected]=g.includes("/services"),a))},"Services")),n.a.createElement("li",null,n.a.createElement("a",{href:Object(l.a)("/about"),className:Object(m.a)((t={},t[i.a.selected]=g.includes("/about"),t))},"About")),n.a.createElement("li",null,n.a.createElement("a",{href:Object(l.a)("/bp"),className:Object(m.a)((s={},s[i.a.selected]=g.includes("/bp"),s))},"BP")),n.a.createElement("li",null,n.a.createElement("a",{href:Object(l.a)("/blog"),className:Object(m.a)((o={},o[i.a.selected]=g.includes("/blog"),o))},"Blog")))))}},107:function(e,a,t){"use strict";t.d(a,"a",(function(){return s}));var r=t(0),n=t.n(r),l=t(100),c=t(51),m=t.n(c);function s(e){var a=e.sidebar;return 0===a.items.length?null:n.a.createElement("div",{className:m.a.sidebar},n.a.createElement("h3",{className:m.a.sidebarItemTitle},a.title),n.a.createElement("ul",{className:m.a.sidebarItemList},a.items.map((function(e){return n.a.createElement("li",{key:e.permalink,className:m.a.sidebarItem},n.a.createElement(l.a,{isNavLink:!0,to:e.permalink,className:m.a.sidebarItemLink,activeClassName:m.a.sidebarItemLinkActive},e.title))}))))}},111:function(e,a,t){"use strict";var r=t(0),n=t.n(r),l=t(97),c=t(99),m=t(109),s=t(100),o=t(112),i=t(98),u=t(53),E=t.n(u),d=["January","February","March","April","May","June","July","August","September","October","November","December"];a.a=function(e){var a,t,r,u,g,b=e.children,f=e.frontMatter,h=e.metadata,p=e.truncated,v=e.isBlogPostPage,O=void 0!==v&&v,y=h.date,N=h.permalink,w=h.tags,k=h.readingTime,j=f.author,T=f.title,L=f.image,_=f.keywords,S=f.author_url||f.authorURL,x=f.author_title||f.authorTitle,M=f.author_image_url||f.authorImageURL,I=Object(i.a)(L,{absolute:!0});return n.a.createElement(n.a.Fragment,null,n.a.createElement(m.a,null,_&&_.length&&n.a.createElement("meta",{name:"keywords",content:_.join(",")}),L&&n.a.createElement("meta",{property:"og:image",content:I}),L&&n.a.createElement("meta",{property:"twitter:image",content:I}),L&&n.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+T})),n.a.createElement("article",{className:O?void 0:"margin-bottom--xl"},(a=O?"h1":"h2",t=y.substring(0,10).split("-"),r=t[0],u=d[parseInt(t[1],10)-1],g=parseInt(t[2],10),n.a.createElement("header",null,n.a.createElement(a,{className:Object(l.a)("margin-bottom--sm",E.a.blogPostTitle)},O?T:n.a.createElement(s.a,{to:N},T)),n.a.createElement("div",{className:"margin-vert--md"},n.a.createElement("time",{dateTime:y,className:E.a.blogPostDate},u," ",g,", ",r," ",k&&n.a.createElement(n.a.Fragment,null," \xb7 ",Math.ceil(k)," min read"))),n.a.createElement("div",{className:"avatar margin-vert--md"},M&&n.a.createElement("a",{className:"avatar__photo-link avatar__photo",href:S,target:"_blank",rel:"noreferrer noopener"},n.a.createElement("img",{src:M,alt:j})),n.a.createElement("div",{className:"avatar__intro"},j&&n.a.createElement(n.a.Fragment,null,n.a.createElement("h4",{className:"avatar__name"},n.a.createElement("a",{href:S,target:"_blank",rel:"noreferrer noopener"},j)),n.a.createElement("small",{className:"avatar__subtitle"},x)))))),n.a.createElement("section",{className:"markdown"},n.a.createElement(c.a,{components:o.a},b)),(w.length>0||p)&&n.a.createElement("footer",{className:"row margin-vert--lg"},w.length>0&&n.a.createElement("div",{className:"col"},n.a.createElement("strong",null,"Tags:"),w.map((function(e){var a=e.label,t=e.permalink;return n.a.createElement(s.a,{key:t,className:"margin-horiz--sm",to:t},a)}))),p&&n.a.createElement("div",{className:"col text--right"},n.a.createElement(s.a,{to:h.permalink,"aria-label":"Read more about "+T},n.a.createElement("strong",null,"Read More"))))))}},76:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),l=t(103),c=t(111),m=t(100),s=t(107);a.default=function(e){var a=e.metadata,t=e.items,r=e.sidebar,o=a.allTagsPath,i=a.name,u=a.count;return n.a.createElement(l.a,{title:'Posts tagged "'+i+'"',description:'Blog | Tagged "'+i+'"'},n.a.createElement("div",{className:"container margin-vert--lg"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col col--2"},n.a.createElement(s.a,{sidebar:r})),n.a.createElement("main",{className:"col col--8"},n.a.createElement("h1",null,u," ",function(e,a){return e>1?a+"s":a}(u,"post"),' tagged with "',i,'"'),n.a.createElement(m.a,{href:o},"View All Tags"),n.a.createElement("div",{className:"margin-vert--xl"},t.map((function(e){var a=e.content;return n.a.createElement(c.a,{key:a.metadata.permalink,frontMatter:a.frontMatter,metadata:a.metadata,truncated:!0},n.a.createElement(a,null))})))))))}}}]);