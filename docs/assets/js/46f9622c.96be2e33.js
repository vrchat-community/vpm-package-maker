"use strict";(self.webpackChunkcreator_companion_docs=self.webpackChunkcreator_companion_docs||[]).push([[849],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return d}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(a),d=n,m=u["".concat(s,".").concat(d)]||u[d]||h[d]||o;return a?r.createElement(m,i(i({ref:t},p),{},{components:a})):r.createElement(m,i({ref:t},p))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},6249:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return h}});var r=a(7462),n=a(3366),o=(a(7294),a(3905)),i=["components"],l={id:"index",title:"Package Manager",hide_title:!0},s=void 0,c={unversionedId:"vpm/index",id:"vpm/index",title:"Package Manager",description:"The VRChat Package Manager is currently the main feature of the Creator Companion. It helps you keep your VRChat SDKs and packages updated, and speeds up the creation and management of VRChat projects.",source:"@site/docs/vpm/index.md",sourceDirName:"vpm",slug:"/vpm/",permalink:" /vpm-package-maker/vpm/",tags:[],version:"current",frontMatter:{id:"index",title:"Package Manager",hide_title:!0},sidebar:"mainSidebar",previous:{title:"Creator Companion",permalink:" /vpm-package-maker/"},next:{title:"Templates",permalink:" /vpm-package-maker/vpm/templates"}},p={},h=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Features",id:"features",level:2},{value:"Create New VRChat Projects",id:"create-new-vrchat-projects",level:2},{value:"What actually happens when you click on Create?",id:"what-actually-happens-when-you-click-on-create",level:3},{value:"Manage Packages in Existing Projects",id:"manage-packages-in-existing-projects",level:2},{value:"Missing Features: Conflicting Packages",id:"missing-features-conflicting-packages",level:3},{value:"Migrate Older VRChat Projects",id:"migrate-older-vrchat-projects",level:2},{value:"What actually happens when you click on Migrate to UPM?",id:"what-actually-happens-when-you-click-on-migrate-to-upm",level:3}],u={toc:h};function d(e){var t=e.components,l=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"package-manager"},"Package Manager"),(0,o.kt)("p",null,"The VRChat Package Manager is currently the main feature of the Creator Companion. It helps you keep your VRChat SDKs and packages updated, and speeds up the creation and management of VRChat projects."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"When you first launch the Creator Companion, it will check that you have all the required programs, see ",(0,o.kt)("a",{parentName:"p",href:"../#prerequisites"},"Creator Companion Overview: Prerequisites"),"."),(0,o.kt)("h2",{id:"features"},"Features"),(0,o.kt)("p",null,"The VPM can help you do the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Create New VRChat Projects"),(0,o.kt)("li",{parentName:"ul"},"Migrate older VRChat Projects"),(0,o.kt)("li",{parentName:"ul"},"Manage Packages in Existing Projects")),(0,o.kt)("h2",{id:"create-new-vrchat-projects"},"Create New VRChat Projects"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'Click "Projects & Packages" in the menu to open your ',(0,o.kt)("em",{parentName:"li"},"Project List"),", which will be empty when you first start using the VPM."),(0,o.kt)("li",{parentName:"ul"},'Click "New" to open the Template Chooser.'),(0,o.kt)("li",{parentName:"ul"},'Choose "World" or "Avatar" to create a new VRChat project which is all set up to create either an Udon-Powered world or an AV3-powered avatar. If you\'ve created or installed your own ',(0,o.kt)("a",{parentName:"li",href:"templates"},"Templates"),", you can choose one of those here instead."),(0,o.kt)("li",{parentName:"ul"},"Once you've chosen your starting template, you are prompted to enter a name for your project and choose the parent folder in which it will be created. The full path of the project will be shown at the top of the screen, as well as the name of the template you have selected. Edit the Project name by typing in the top box, and press the ellipsis button (...) next to the Location field to set the parent folder for the project."),(0,o.kt)("li",{parentName:"ul"},'Click "Create" once you are happy with your project name and location.'),(0,o.kt)("li",{parentName:"ul"},"At this point, your project will be created and Unity will be launched. Wait for the initial import to finish - the VCC will be brought back to the foreground when it's complete. It may take a few minutes as Unity imports all the specified packages, processes the assets, and runs a few special commands the VPM has passed along to it."),(0,o.kt)("li",{parentName:"ul"},'If this process works, the app will transition to the "Manage Project Packages" screen with your new project name, and a list of the VRC Packages available / installed.')),(0,o.kt)("h3",{id:"what-actually-happens-when-you-click-on-create"},"What actually happens when you click on Create?"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"A directory is created at ",(0,o.kt)("em",{parentName:"li"},"targetDir"),', which is the directory you specified in the "Location" field plus your project\'s name.'),(0,o.kt)("li",{parentName:"ol"},'Your selected Unity Editor is started via the command line with the arguments "-cloneFromTemplate {templatePath}" and "-createProject {targetDir}"'),(0,o.kt)("li",{parentName:"ol"},"If this process fails (the targetDir does not appear to be a valid Unity project after the command returns), then the targetDir and its contents are deleted, and an error is shown."),(0,o.kt)("li",{parentName:"ol"},"If the process succeeds, then the VPM waits for the new project to connect to it over TCP on port 10101."),(0,o.kt)("li",{parentName:"ol"},'When the new project connects, the VPM adds it to the list of known VRChat projects (stored in the Settings file as a string[] called "userProjects", and transitions to the "Manage Project Packages" screen')),(0,o.kt)("h2",{id:"manage-packages-in-existing-projects"},"Manage Packages in Existing Projects"),(0,o.kt)("p",null,"The VPM makes it easy to update packages in existing projects."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'Click "Projects & Packages" in the menu to open your ',(0,o.kt)("em",{parentName:"li"},"Project List"),", which will be empty when you first start using the VPM."),(0,o.kt)("li",{parentName:"ul"},'Click "Add" to bring up a Folder Chooser. You can select a single Unity Project Folder to add that to your project list, or select a folder which contains many Unity Projects to easily add them all.'),(0,o.kt)("li",{parentName:"ul"},"After adding your project to the list, click the button containing its path to open its details."),(0,o.kt)("li",{parentName:"ul"},"If the project has not yet been migrated to VPM, you'll need to ",(0,o.kt)("a",{parentName:"li",href:"#migrate-older-vrchat-projects"},"do that first"),"."),(0,o.kt)("li",{parentName:"ul"},"Each available package will appear with a green background if it's in the project, or a blue background if it's not. For any package already in the project, you can check the versions in the dropdown in the middle and select a new one if it's available and then click \"Update\" to change it to the new version. The VPM will update the package, switch to Unity to import the files, then switch back to the Creator Companion.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Offical Package Listing",src:a(7150).Z,width:"520",height:"587"})),(0,o.kt)("h3",{id:"missing-features-conflicting-packages"},"Missing Features: Conflicting Packages"),(0,o.kt)("p",null," You can currently install Worlds and Avatars in the same project - we will block this in the future, they still don't play together well."),(0,o.kt)("h2",{id:"migrate-older-vrchat-projects"},"Migrate Older VRChat Projects"),(0,o.kt)("p",null,"If you have existing SDK3 World or Avatar projects, their VRChat SDKs can be automatically migrated to this new VPM-compatible format."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'Click "Projects & Packages" in the menu to open your ',(0,o.kt)("em",{parentName:"li"},"Project List"),", which will be empty when you first start using the VPM."),(0,o.kt)("li",{parentName:"ul"},'Click "Add" to bring up a Folder Chooser. You can select a single Unity Project Folder to add that to your project list, or select a folder which contains many Unity Projects to easily add them all.'),(0,o.kt)("li",{parentName:"ul"},"After adding your project to the list, click the button containing its path to open its details."),(0,o.kt)("li",{parentName:"ul"},'If this project is a unitypackage-style SDK3 Worlds or Avatars project, a button will appear with the label "Migrate to UPM"')),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Migration Screen",src:a(3581).Z,width:"386",height:"195"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If the project is not recognized as a VRChat project, or it contains an unsupported SDK (SDK2), the button will not appear. We do not offer an automated process for this case, sorry.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Unsupported Project",src:a(9398).Z,width:"375",height:"185"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'If your project type is supported, click "Migrate to UPM" and kick back. This process can take a few minutes even for a small project, and much longer for a large one. The good news is that once the migration is complete, your project is totally ready to go.')),(0,o.kt)("h3",{id:"what-actually-happens-when-you-click-on-migrate-to-upm"},"What actually happens when you click on Migrate to UPM?"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"A directory is created at ",(0,o.kt)("em",{parentName:"li"},"targetDir"),' with the name {ProjectName}-Migrated, with "-#" appended as needed to guarantee a unique folder name (like myproject-Migrated-1, myproject-Migrated-2, etc)'),(0,o.kt)("li",{parentName:"ol"},"All of the files in the ",(0,o.kt)("em",{parentName:"li"},"originalProjectDir")," are copied to ",(0,o.kt)("em",{parentName:"li"},"targetDir")," except for Library, Logs, Assets/VRCSDK, Assets/Udon, Assets/VRChat Examples, Packages/com.vrchat.vrcsdk3 and ProjectSettings/ProjectVersion.txt."),(0,o.kt)("li",{parentName:"ol"},'EditorSettings.asset is copied from the included "Base" template into the new project\'s ProjectSettings folder, to ensure the project uses AssetDatabase v2 and some other important settings.'),(0,o.kt)("li",{parentName:"ol"},'If the new project does not have a manifest at Packages/manifest.json, the one included in the "Base" template is copied into the new project\'s Packages folder.'),(0,o.kt)("li",{parentName:"ol"},"The manifest has the VRChat Base package added to it, as well as either the World or Avatar packages, depending on the type of project being migrated."),(0,o.kt)("li",{parentName:"ol"},"Unity is opened in a background process with the following flags:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"-projectPath {targetDir} -executeMethod {sdkFixMethod} -importPackage {samplePackage} -batchmode -accept-apiupdate -nographics -quit -logFile -")),(0,o.kt)("li",{parentName:"ul"},"Where ",(0,o.kt)("em",{parentName:"li"},"sdkFixMethod")," is either ",(0,o.kt)("inlineCode",{parentName:"li"},"VRCSDK.SDK3.Editor.SDK3ImportFix.Run")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"VRCSDK.SDK3.Editor.SDK3AImportFix.Run"),". These are static methods which force some VRCSDK dlls to reimport because Unity often imports them in an order which leaves them in a broken state."),(0,o.kt)("li",{parentName:"ul"},"The variable ",(0,o.kt)("em",{parentName:"li"},"samplePackage")," points to the example assets in the Worlds or Avatars which need to be imported into the Assets folder to restore projects properly (things like the VRCWorld prefab, UdonExampleScene, etc). The rest of the flags help to streamline the process and redirect the logs so they can be displayed."))),(0,o.kt)("li",{parentName:"ol"},"If the process exits successfully (ExitCode == 0), then the output of the process is written to ",(0,o.kt)("em",{parentName:"li"},"targetDir"),' as migration-log.txt. If it encounters an issue, then the output of the Error log is written to the standard Logging path as {projectName}-migration-log-error.txt, and the output of the general log is written to the standard Logging path as {projectName}-migration-log.txt."')))}d.isMDXComponent=!0},3581:function(e,t,a){t.Z=a.p+"assets/images/migrate-button-de4133f85519e457058bd364428b41ef.png"},7150:function(e,t,a){t.Z=a.p+"assets/images/official-packages-c63c265a51a036816823dd43068ce43e.png"},9398:function(e,t,a){t.Z=a.p+"assets/images/unsupported-project-395388ff7b4e2cd8553f5cab6703658f.png"}}]);