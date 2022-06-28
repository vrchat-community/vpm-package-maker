"use strict";(self.webpackChunkcreator_companion_docs=self.webpackChunkcreator_companion_docs||[]).push([[412],{3905:function(e,a,t){t.d(a,{Zo:function(){return u},kt:function(){return m}});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=n.createContext({}),c=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},u=function(e){var a=c(e.components);return n.createElement(l.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(t),m=r,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return t?n.createElement(f,i(i({ref:a},u),{},{components:t})):n.createElement(f,i({ref:a},u))}));function m(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=d;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6526:function(e,a,t){t.r(a),t.d(a,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var n=t(7462),r=t(3366),o=(t(7294),t(3905)),i=["components"],s={id:"packages",title:"Packages",hide_title:!0},l=void 0,c={unversionedId:"vpm/packages",id:"vpm/packages",title:"Packages",description:"Overview",source:"@site/docs/vpm/packages.md",sourceDirName:"vpm",slug:"/vpm/packages",permalink:"/vpm/packages",tags:[],version:"current",frontMatter:{id:"packages",title:"Packages",hide_title:!0},sidebar:"mainSidebar",previous:{title:"Templates",permalink:"/vpm/templates"},next:{title:"Migrating Projects",permalink:"/vpm/migrating"}},u={},p=[{value:"Overview",id:"overview",level:2},{value:"Package Types",id:"package-types",level:2},{value:"Official Packages",id:"official-packages",level:3},{value:"Curated Packages",id:"curated-packages",level:3},{value:"Community Packages",id:"community-packages",level:3},{value:"User Packages",id:"user-packages",level:3},{value:"Package Format",id:"package-format",level:2},{value:"VPM Manifest Additions",id:"vpm-manifest-additions",level:3}],d={toc:p};function m(e){var a=e.components,t=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"packages"},"Packages"),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"The VPM (VRChat Package Manager) uses a format compatible with the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/2019.4/Documentation/Manual/Packages.html"},"Unity Package Manager")," to more easily install, update and manage the assets, tools and prefabs you use to make content for VRChat."),(0,o.kt)("h2",{id:"package-types"},"Package Types"),(0,o.kt)("p",null,"Packages can come from a variety of sources and be managed together."),(0,o.kt)("h3",{id:"official-packages"},"Official Packages"),(0,o.kt)("p",null,"There are three official packages:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"VRChat Base",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Includes files that are required by both the World and Avatar SDKs, like the Control Panel."))),(0,o.kt)("li",{parentName:"ul"},"VRChat Worlds",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Includes all the files needed to create interactive worlds for VRChat, previously known as SDK3."))),(0,o.kt)("li",{parentName:"ul"},"VRChat Avatars",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Includes all the files needed to create custom Avatars for VRChat, previously known as SDK3A or Avatars 3.0.")))),(0,o.kt)("h3",{id:"curated-packages"},"Curated Packages"),(0,o.kt)("p",null,"These packages have been reviewed by VRChat and found to be especially useful and reasonably safe to use. We're building a submission process to have your package reviewed and included, it is invite-only for now."),(0,o.kt)("h3",{id:"community-packages"},"Community Packages"),(0,o.kt)("p",null,"We will introduce a method to host and distribute listings of Community Packages. We will include guidelines on what sorts of packages can be distributed, and a way to submit your own community listing. They are not guaranteed to be usable or safe."),(0,o.kt)("h3",{id:"user-packages"},"User Packages"),(0,o.kt)("p",null,"You can make your own library of VPM-compatible packages to use in your projects. They are as usable and safe as you make them! This feature is also helpful when developing a package - turning it from a prefab or .unitypackage file from before into the new format which can be distributed through the Creator Companion. You can use these packages to test the structure and manifest of your package before publishing. To add a user package, navigate to the 'Settings' screen, press the 'Add' button underneath 'User Packages' and choose a folder which contains a package (or several packages). If they are valid, they will be added to the listing here and on the screen where you add and remove packages to your project."),(0,o.kt)("p",null,"Here's an exceptionally simple package you can use as an example. Unpack it somewhere and then you can add it to your VCC: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/vrchat/packages/releases/download/3.0.3/com.mmmlabs.utilities.zip"},"com.mmmlabs.utilities.zip")),(0,o.kt)("h2",{id:"package-format"},"Package Format"),(0,o.kt)("p",null,"The VPM format follows the Unity Package format with some additions. We recommend you read through the official docs about ",(0,o.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/2019.4/Documentation/Manual/CustomPackages.html"},"Custom Packages")," to familiarize yourself with those first."),(0,o.kt)("p",null,"We use the same required ",(0,o.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/2019.4/Documentation/Manual/upm-manifestPkg.html"},"Package Manifest")," file, with some important differences:"),(0,o.kt)("h3",{id:"vpm-manifest-additions"},"VPM Manifest Additions"),(0,o.kt)("p",null,"VPM package manifests have a few differences from regular Unity manifests:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"The 'vpmDependencies' property, which lists the vpm-based dependencies your project requires."),(0,o.kt)("li",{parentName:"ol"},"The 'url' property, which provides a direct-download link to a zip file of your package."),(0,o.kt)("li",{parentName:"ol"},"The ",(0,o.kt)("em",{parentName:"li"},"optional")," 'legacyFolders' property, which can be used to detect and migrate from the old .unitypackage version of your project to this version. Any folders found with a matching path will be removed. You can include the GUID as the object's value if you want to search for and find the folder even if it was moved from its original location. if no GUID is provided, it will only match the path."),(0,o.kt)("li",{parentName:"ol"},"The ",(0,o.kt)("em",{parentName:"li"},"optional")," 'legacyFiles' object, which is used like the legacyFolders object above.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "name" : "com.mydomain.avatarTool",\n    "displayName" : "My Avatar Tools",\n    "version" : "1.0.0",\n    "unity" : "2019.4",\n    "description" : "Tools for easier Avatar Creation",\n    "vpmDependencies" : {\n        "com.vrchat.avatars" : "3.1.0"\n    },\n    "url" : "https://packages.vrchat.com/com.vrchat.avatars-3.1.0.zip",\n    "legacyFolders" : {\n      "Assets\\\\FolderName" : "vr031f928e5c709x9887f6513084aaa51"\n    },\n    "legacyFiles" : {\n      "ProjectVersion.txt" : "jf988739jfdskljf098323jjhf"\n    }\n}\n')))}m.isMDXComponent=!0}}]);