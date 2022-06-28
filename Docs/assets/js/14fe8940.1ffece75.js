"use strict";(self.webpackChunkcreator_companion_docs=self.webpackChunkcreator_companion_docs||[]).push([[192],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=c(n),m=a,d=h["".concat(l,".").concat(m)]||h[m]||u[m]||o;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},2581:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],s={slug:"release-0.2.7",date:new Date("2022-06-24T00:00:00.000Z"),title:"Release 0.2.7",authors:["momo"],tags:["release"],draft:!1},l=void 0,c={permalink:"/news/release-0.2.7",source:"@site/news/releases/release-0.2.7.md",title:"Release 0.2.7",description:"Summary",date:"2022-06-24T00:00:00.000Z",formattedDate:"June 24, 2022",tags:[{label:"release",permalink:"/news/tags/release"}],truncated:!0,authors:[{name:"Momo the Monster",title:"VRChat Developer",url:"https://github.com/momo-the-monster",imageURL:"https://github.com/momo-the-monster.png",key:"momo"}],frontMatter:{slug:"release-0.2.7",date:"2022-06-24T00:00:00.000Z",title:"Release 0.2.7",authors:["momo"],tags:["release"],draft:!1},nextItem:{title:"Release 0.2.6",permalink:"/news/release-0.2.6"}},p={authorsImageUrls:[void 0]},u=[{value:"Summary",id:"summary",level:2},{value:"Changelog",id:"changelog",level:2},{value:"Download",id:"download",level:2}],h={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"summary"},"Summary"),(0,o.kt)("p",null,'We\'ve got some major quality-of-life changes in this version. The Creator Companion no longer needs to open Unity in order to create new projects or migrate existing ones. This greatly speeds up the process. Once the project is created or migrated, the VCC will give you an easy "Open Project" button to open up your project in the right version of Unity, which may take a while since Asset Importing, etc is no longer handled as part of the initial process.'),(0,o.kt)("p",null,"There's also a bevy of Canny bugs fixed below, thanks for reporting them!"),(0,o.kt)("h2",{id:"changelog"},"Changelog"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Creating new projects and migrating existing ones no longer use Unity! This speeds up the process greatly and reduces the possibilities for errors if Unity can't be found."),(0,o.kt)("li",{parentName:"ul"},'Fixes issue where you can click through the "Please Wait" curtain that appears while waiting for some actions to complete. ',(0,o.kt)("a",{parentName:"li",href:"https://feedback.vrchat.com/creator-companion-beta/p/vcc-can-interact-with-ui-during-migration"},"Canny")),(0,o.kt)("li",{parentName:"ul"},"Updates Templates to have both Input systems enabled - this should fix the issue where classic input events don't work after migrating a project."),(0,o.kt)("li",{parentName:"ul"},"Fixes issue when installing the Unity Hub that could cause an exception when trying to figure out which version is installed, when there's no Hub avaialable."),(0,o.kt)("li",{parentName:"ul"},"Fixes issue when getting a project's type"),(0,o.kt)("li",{parentName:"ul"},"Fixes issue where TCP Server that connects to open VRChat projects would throw an exception if another process is using the port it wants. "),(0,o.kt)("li",{parentName:"ul"},"Adds extra checks to make sure the Unity Editor is set whenever trying to launch it."),(0,o.kt)("li",{parentName:"ul"},"Fixes issue where the keyboard would input too many characters in the embedded web browser.\n",(0,o.kt)("a",{parentName:"li",href:"https://feedback.vrchat.com/creator-companion-beta/p/bug-trying-to-login-in-the-forum-from-the-companion-double-the-input-typed"},"Canny")),(0,o.kt)("li",{parentName:"ul"},"Fixes issue where long paths can overlap with the packages section. ",(0,o.kt)("a",{parentName:"li",href:"https://feedback.vrchat.com/creator-companion-beta/p/022-bug-long-paths-can-overlap-with-the-packages-section"},"Canny")),(0,o.kt)("li",{parentName:"ul"},"Fixes issue where you couldn't scroll package listings. ",(0,o.kt)("a",{parentName:"li",href:"https://feedback.vrchat.com/creator-companion-beta/p/bug-022-cant-scroll-the-user-packages-list-on-a-project"},"Canny")),(0,o.kt)("li",{parentName:"ul"},"Fixes crash when exiting the application during Migration (still not a good idea though). ",(0,o.kt)("a",{parentName:"li",href:"https://feedback.vrchat.com/creator-companion-beta/p/vcc-instant-crash-during-migration-if-you-press-the-close-window-button-1"},"Canny"))),(0,o.kt)("h2",{id:"download"},"Download"),(0,o.kt)("p",null,"It's always recommended to download the latest version from the ",(0,o.kt)("a",{parentName:"p",href:"https://vrchat.com/home/download"},"official download page"),".\nHowever, if a direct link to this version is needed, it can be found at ",(0,o.kt)("a",{parentName:"p",href:"https://vrcpm.vrchat.cloud/vcc/Builds/0.2.7/VRChat_CreatorCompanion_Setup_0.2.7.exe"},"VRChat_Creator_Companion_Setup_0.2.7.exe")))}m.isMDXComponent=!0}}]);