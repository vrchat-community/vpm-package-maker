"use strict";(self.webpackChunkcreator_companion_docs=self.webpackChunkcreator_companion_docs||[]).push([[744],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6717:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={slug:"release-0.2.5",date:new Date("2022-06-02T00:00:00.000Z"),title:"Release 0.2.5",authors:["momo"],tags:["release"],draft:!1},s=void 0,c={permalink:"/news/release-0.2.5",source:"@site/news/releases/release-0.2.5.md",title:"Release 0.2.5",description:"Summary",date:"2022-06-02T00:00:00.000Z",formattedDate:"June 2, 2022",tags:[{label:"release",permalink:"/news/tags/release"}],truncated:!0,authors:[{name:"Momo the Monster",title:"VRChat Developer",url:"https://github.com/momo-the-monster",imageURL:"https://github.com/momo-the-monster.png",key:"momo"}],frontMatter:{slug:"release-0.2.5",date:"2022-06-02T00:00:00.000Z",title:"Release 0.2.5",authors:["momo"],tags:["release"],draft:!1},prevItem:{title:"Release 0.2.6",permalink:"/news/release-0.2.6"},nextItem:{title:"Release 0.2.3",permalink:"/news/release-0.2.3"}},u={authorsImageUrls:[void 0]},p=[{value:"Summary",id:"summary",level:2},{value:"Changelog",id:"changelog",level:2},{value:"VRC Quick Launcher",id:"vrc-quick-launcher",level:2},{value:"Download",id:"download",level:2}],m={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"summary"},"Summary"),(0,o.kt)("p",null,"VCC Fixes for International users a migration of the VRC Quick Launcher settings to AppData to fix some bugs and usability issues."),(0,o.kt)("h2",{id:"changelog"},"Changelog"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Adds Unicode support to Project Name text fields",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://feedback.vrchat.com/creator-companion-beta/p/change-font-of-project-list-on-creatorcompanion"},"Canny: Change font of project list on CreatorCompanion")))),(0,o.kt)("li",{parentName:"ul"},'Switched to Newtonsoft for Json serialization to fix issue where files would not serialize on machines set to "Czech (Czechia)" regional setting.',(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://feedback.vrchat.com/creator-companion-beta/p/settings-cannot-serialize-when-os-language-set-to-czech"},"Canny: Settings cannot serialize when OS Language set to Czech"))))),(0,o.kt)("h2",{id:"vrc-quick-launcher"},"VRC Quick Launcher"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'Added "IK" options following VRChat 2022.2.1 release.'),(0,o.kt)("li",{parentName:"ul"},"Fixed an issue where JSON settings (Debug options and Instance info) would not get saved without launching with administrator permissions."),(0,o.kt)("li",{parentName:"ul"},"Moved all JSON settings to Appdata/Roaming/VRChatQuickLauncher."),(0,o.kt)("li",{parentName:"ul"},"Added a button to quickly access all your saved JSON settings (File > Open Save Location)."),(0,o.kt)("li",{parentName:"ul"},"Fixed an issue where application-wide settings (Selected theme, installs, profiles, save on exit, auto-layout, auto-close, launch delay) would get reset, this is a breaking change that will reset your current application-wide settings one last time.")),(0,o.kt)("h2",{id:"download"},"Download"),(0,o.kt)("p",null,"It's always recommended to download the latest version from the ",(0,o.kt)("a",{parentName:"p",href:"https://vrchat.com/home/download"},"official download page"),".\nHowever, if a direct link to this version is needed, it can be found at ",(0,o.kt)("a",{parentName:"p",href:"https://vrcpm.vrchat.cloud/vcc/Builds/0.2.5/VRChat_CreatorCompanion_Setup_0.2.5.exe"},"VRChat_Creator_Companion_Setup_0.2.5.exe")))}d.isMDXComponent=!0}}]);