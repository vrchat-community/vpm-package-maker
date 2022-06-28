"use strict";(self.webpackChunkcreator_companion_docs=self.webpackChunkcreator_companion_docs||[]).push([[714],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=p(r),d=a,g=m["".concat(l,".").concat(d)]||m[d]||u[d]||i;return r?n.createElement(g,o(o({ref:t},s),{},{components:r})):n.createElement(g,o({ref:t},s))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3396:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return u}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),o=["components"],c={id:"migrating",title:"Migrating Projects",hide_title:!0},l=void 0,p={unversionedId:"vpm/migrating",id:"vpm/migrating",title:"Migrating Projects",description:"Overview",source:"@site/docs/vpm/migrating.md",sourceDirName:"vpm",slug:"/vpm/migrating",permalink:"/vpm/migrating",tags:[],version:"current",frontMatter:{id:"migrating",title:"Migrating Projects",hide_title:!0},sidebar:"mainSidebar",previous:{title:"Packages",permalink:"/vpm/packages"},next:{title:"Repos",permalink:"/vpm/repos"}},s={},u=[{value:"Overview",id:"overview",level:2},{value:"The Process",id:"the-process",level:2},{value:"Special Package Migration",id:"special-package-migration",level:3}],m={toc:u};function d(e){var t=e.components,c=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},m,c,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"migrating-projects"},"Migrating Projects"),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"Projects created with the legacy .unitypackage SDKs can be migrated to the new system if they use the SDK3 Worlds or Avatars unitypackages (SDK2 not supported). They can be Unity 2017, 2018 or 2019 projects. The SDK must be in its original install location to be  detected - specifically, one of these must exist:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Assets/Udon"),(0,i.kt)("li",{parentName:"ul"},"VRCSDK/Plugins/VRCSDK3A.dll")),(0,i.kt)("h2",{id:"the-process"},"The Process"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Add your project to the Project Listing, and press Migrate. ",(0,i.kt)("br",null),"\n",(0,i.kt)("img",{alt:"Migrate Project",src:r(2238).Z,width:"465",height:"180"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"A new folder is made and named ","[ProjectName]","-Migrated-#, with numbers tacked on if needed to make a unique folder. Note that if your project is in source control, you'll probably want to copy that info over after the migration. In the case of a git project, just copy the .git folder to the Migrated project, make a new branch, and you can commit your changes there.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"All of the visible files from your project are copied over to the new folder except for:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Library"),(0,i.kt)("li",{parentName:"ul"},"Logs"),(0,i.kt)("li",{parentName:"ul"},"Assets\\VRCSDK"),(0,i.kt)("li",{parentName:"ul"},"Assets\\Udon"),(0,i.kt)("li",{parentName:"ul"},"Assets\\VRChat Examples"),(0,i.kt)("li",{parentName:"ul"},"Packages\\com.vrchat.vrcsdk3"),(0,i.kt)("li",{parentName:"ul"},"ProjectSettings\\ProjectVersion.txt"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},'From the Base Template included with the VCC, an "EditorSettings.asset" folder is copied into your project, clobbering your old one to force an upgrade to Asset Database v2.')),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"A project manifest (package.json) file is created if needed.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},'The VRChat SDK "Base" package is added as a ',(0,i.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/2019.4/Documentation/Manual/upm-git.html"},"git package"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The project type is detected as LegacySDK3Avatar or LegacySDK3World, and the corresponding packages are added to the project manifest.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The project is opened in batchmode, meaning without a visible Unity Editor, and as the Library is rebuilt, the output of the process is shown in a modal window on the screen.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},'If the process completes without error, a text file is created in the project called "migration-log.txt" with the output from the process. If there are errors, then a text file called "migration-log-error.txt" is created in the VCC log location (currently Documents\\VRChatCreatorCompanion\\Logs). If you have errors, you can open up the project in Unity and try to fix them, often we\'ve seen issues with prefabs and scripts that expect certain files to still be in the "Assets" folder, or that were written for Unity 2018.')),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Once the process is complete, the Project will show up in the listing whether or not the migration succeeded."))),(0,i.kt)("h3",{id:"special-package-migration"},"Special Package Migration"),(0,i.kt)("p",null,'We support automatic migration of the packages included in the "Curated Packages" list - currently UdonSharp and ClientSim. If the legacy (.unitypackage) versions of these packages are found in your project, they will be removed and replaced with the new versions.'))}d.isMDXComponent=!0},2238:function(e,t,r){t.Z=r.p+"assets/images/migrate-project-dc40f2e6c5a0e86e47fc4625c64b0197.png"}}]);