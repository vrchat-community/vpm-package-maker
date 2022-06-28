"use strict";(self.webpackChunkcreator_companion_docs=self.webpackChunkcreator_companion_docs||[]).push([[971],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,h=d["".concat(c,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1269:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],l={id:"index",title:"Creator Companion",hide_title:!0,sidebar_position:0},c=void 0,s={unversionedId:"index",id:"index",title:"Creator Companion",description:"What Is It?",source:"@site/docs/index.md",sourceDirName:".",slug:"/",permalink:" /vpm-package-maker/",tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"index",title:"Creator Companion",hide_title:!0,sidebar_position:0},sidebar:"mainSidebar",next:{title:"Package Manager",permalink:" /vpm-package-maker/vpm/"}},u={},p=[{value:"What Is It?",id:"what-is-it",level:2},{value:"Download It",id:"download-it",level:2},{value:"Installer",id:"installer",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Git",id:"git",level:3},{value:"Unity Editor Versions",id:"unity-editor-versions",level:3}],d={toc:p};function m(e){var t=e.components,l=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"creator-companion"},"Creator Companion"),(0,a.kt)("h2",{id:"what-is-it"},"What Is It?"),(0,a.kt)("p",null,"The VRChat Creator Companion (VCC) is the new Entry Point for creating things for VRChat! It currently includes our new ",(0,a.kt)("a",{parentName:"p",href:"vpm"},"VRChat Package Manager (VPM)"),", and will eventually house documentation, examples, news, jam info, community prefabs and more!"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"VCC Screenshot",src:n(3077).Z,width:"1266",height:"714"})),(0,a.kt)("h2",{id:"download-it"},"Download It"),(0,a.kt)("p",null,"The Creator Companion will be available at ",(0,a.kt)("a",{parentName:"p",href:"https://vrchat.com/home/download/sdk"},"https://vrchat.com/home/download/sdk")," once it has a full release. "),(0,a.kt)("p",null,"For now, you can download the Installer here: ",(0,a.kt)("a",{parentName:"p",href:"https://vrchat.com/download/vcc"},"VRChat CreatorCompanion Installer")),(0,a.kt)("h2",{id:"installer"},"Installer"),(0,a.kt)("p",null,'The Creator Companion will be installed into your "Program Files (x86)" folder by default. You can change this during installation if you like. You can delete the installer once the installation is complete.'),(0,a.kt)("h2",{id:"requirements"},"Requirements"),(0,a.kt)("p",null,"The Creator Companion will check that Unity and Git are installed on launch. If either of them are needed, buttons will be presented to easily install them. If you choose to use the easy install, you will get the latest version of the Unity Hub, the current VRChat-SDK-Compatible version of Unity and a recent version of git with LFS support and the Git Credential Manager."),(0,a.kt)("p",null,"The Creator Companion requires Windows 10. The ",(0,a.kt)("a",{parentName:"p",href:"vpm/cli#mac-and-linux-support"},"CLI has some functionality on Mac and Linux"),"."),(0,a.kt)("h3",{id:"git"},"Git"),(0,a.kt)("p",null,"You don't need to learn how to use this, it will be used by Unity to pull in packages when you open your projects. However, it's a great way to backup and version your projects, learn more in ",(0,a.kt)("a",{parentName:"p",href:"https://git-scm.com/doc"},"the official Git Docs"),"."),(0,a.kt)("h3",{id:"unity-editor-versions"},"Unity Editor Versions"),(0,a.kt)("p",null,"The VCC requires our currently Supported Unity Version, and installs it automatically if you don't have it, or searches for it if you do."))}m.isMDXComponent=!0},3077:function(e,t,n){t.Z=n.p+"assets/images/vcc-cozy-udon-18896a42512a5cc47131c75c5f8b93dd.png"}}]);