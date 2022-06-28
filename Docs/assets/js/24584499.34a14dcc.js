"use strict";(self.webpackChunkcreator_companion_docs=self.webpackChunkcreator_companion_docs||[]).push([[784],{9910:function(e){e.exports=JSON.parse('{"blogPosts":[{"id":"release-0.2.7","metadata":{"permalink":"/news/release-0.2.7","source":"@site/news/releases/release-0.2.7.md","title":"Release 0.2.7","description":"Summary","date":"2022-06-24T00:00:00.000Z","formattedDate":"June 24, 2022","tags":[{"label":"release","permalink":"/news/tags/release"}],"truncated":true,"authors":[{"name":"Momo the Monster","title":"VRChat Developer","url":"https://github.com/momo-the-monster","imageURL":"https://github.com/momo-the-monster.png","key":"momo"}],"frontMatter":{"slug":"release-0.2.7","date":"2022-06-24T00:00:00.000Z","title":"Release 0.2.7","authors":["momo"],"tags":["release"],"draft":false},"nextItem":{"title":"Release 0.2.6","permalink":"/news/release-0.2.6"}},"content":"## Summary\\r\\n\\r\\nWe\'ve got some major quality-of-life changes in this version. The Creator Companion no longer needs to open Unity in order to create new projects or migrate existing ones. This greatly speeds up the process. Once the project is created or migrated, the VCC will give you an easy \\"Open Project\\" button to open up your project in the right version of Unity, which may take a while since Asset Importing, etc is no longer handled as part of the initial process.\\r\\n\\r\\nThere\'s also a bevy of Canny bugs fixed below, thanks for reporting them!\\r\\n\\r\\n## Changelog\\r\\n* Creating new projects and migrating existing ones no longer use Unity! This speeds up the process greatly and reduces the possibilities for errors if Unity can\'t be found.\\r\\n* Fixes issue where you can click through the \\"Please Wait\\" curtain that appears while waiting for some actions to complete. [Canny](https://feedback.vrchat.com/creator-companion-beta/p/vcc-can-interact-with-ui-during-migration)\\r\\n* Updates Templates to have both Input systems enabled - this should fix the issue where classic input events don\'t work after migrating a project.\\r\\n* Fixes issue when installing the Unity Hub that could cause an exception when trying to figure out which version is installed, when there\'s no Hub avaialable.\\r\\n* Fixes issue when getting a project\'s type\\r\\n* Fixes issue where TCP Server that connects to open VRChat projects would throw an exception if another process is using the port it wants. \\r\\n* Adds extra checks to make sure the Unity Editor is set whenever trying to launch it.\\r\\n* Fixes issue where the keyboard would input too many characters in the embedded web browser.\\r\\n  [Canny](https://feedback.vrchat.com/creator-companion-beta/p/bug-trying-to-login-in-the-forum-from-the-companion-double-the-input-typed)\\r\\n* Fixes issue where long paths can overlap with the packages section. [Canny](https://feedback.vrchat.com/creator-companion-beta/p/022-bug-long-paths-can-overlap-with-the-packages-section)\\r\\n* Fixes issue where you couldn\'t scroll package listings. [Canny](https://feedback.vrchat.com/creator-companion-beta/p/bug-022-cant-scroll-the-user-packages-list-on-a-project)\\r\\n* Fixes crash when exiting the application during Migration (still not a good idea though). [Canny](https://feedback.vrchat.com/creator-companion-beta/p/vcc-instant-crash-during-migration-if-you-press-the-close-window-button-1)\\r\\n\x3c!--truncate--\x3e\\r\\n## Download\\r\\n\\r\\nIt\'s always recommended to download the latest version from the [official download page](https://vrchat.com/home/download).\\r\\nHowever, if a direct link to this version is needed, it can be found at [VRChat_Creator_Companion_Setup_0.2.7.exe](https://vrcpm.vrchat.cloud/vcc/Builds/0.2.7/VRChat_CreatorCompanion_Setup_0.2.7.exe)"},{"id":"release-0.2.6","metadata":{"permalink":"/news/release-0.2.6","source":"@site/news/releases/release-0.2.6.md","title":"Release 0.2.6","description":"Summary","date":"2022-06-10T00:00:00.000Z","formattedDate":"June 10, 2022","tags":[{"label":"release","permalink":"/news/tags/release"}],"truncated":true,"authors":[{"name":"Momo the Monster","title":"VRChat Developer","url":"https://github.com/momo-the-monster","imageURL":"https://github.com/momo-the-monster.png","key":"momo"}],"frontMatter":{"slug":"release-0.2.6","date":"2022-06-10T00:00:00.000Z","title":"Release 0.2.6","authors":["momo"],"tags":["release"],"draft":false},"prevItem":{"title":"Release 0.2.7","permalink":"/news/release-0.2.7"},"nextItem":{"title":"Release 0.2.5","permalink":"/news/release-0.2.5"}},"content":"## Summary\\r\\n\\r\\nFixes issue where Unity wouldn\'t open sometimes.\\r\\n\\r\\n## Changelog\\r\\n* Checks for and tries to automatically find the Unity Editor every time a process attempts to open it.\\r\\n* Fixes JSON Deserialization issue which caused auto-updates to fail in version 0.2.5\\r\\n\x3c!--truncate--\x3e\\r\\n## Download\\r\\n\\r\\nIt\'s always recommended to download the latest version from the [official download page](https://vrchat.com/home/download).\\r\\nHowever, if a direct link to this version is needed, it can be found at [VRChat_Creator_Companion_Setup_0.2.6.exe](https://vrcpm.vrchat.cloud/vcc/Builds/0.2.6/VRChat_CreatorCompanion_Setup_0.2.6.exe)"},{"id":"release-0.2.5","metadata":{"permalink":"/news/release-0.2.5","source":"@site/news/releases/release-0.2.5.md","title":"Release 0.2.5","description":"Summary","date":"2022-06-02T00:00:00.000Z","formattedDate":"June 2, 2022","tags":[{"label":"release","permalink":"/news/tags/release"}],"truncated":true,"authors":[{"name":"Momo the Monster","title":"VRChat Developer","url":"https://github.com/momo-the-monster","imageURL":"https://github.com/momo-the-monster.png","key":"momo"}],"frontMatter":{"slug":"release-0.2.5","date":"2022-06-02T00:00:00.000Z","title":"Release 0.2.5","authors":["momo"],"tags":["release"],"draft":false},"prevItem":{"title":"Release 0.2.6","permalink":"/news/release-0.2.6"},"nextItem":{"title":"Release 0.2.3","permalink":"/news/release-0.2.3"}},"content":"## Summary\\r\\n\\r\\nVCC Fixes for International users a migration of the VRC Quick Launcher settings to AppData to fix some bugs and usability issues.\\r\\n\\r\\n## Changelog\\r\\n* Adds Unicode support to Project Name text fields\\r\\n  * [Canny: Change font of project list on CreatorCompanion](https://feedback.vrchat.com/creator-companion-beta/p/change-font-of-project-list-on-creatorcompanion)\\r\\n* Switched to Newtonsoft for Json serialization to fix issue where files would not serialize on machines set to \\"Czech (Czechia)\\" regional setting.\\r\\n  * [Canny: Settings cannot serialize when OS Language set to Czech](https://feedback.vrchat.com/creator-companion-beta/p/settings-cannot-serialize-when-os-language-set-to-czech)\\r\\n\\r\\n\x3c!--truncate--\x3e\\r\\n## VRC Quick Launcher\\r\\n\\r\\n* Added \\"IK\\" options following VRChat 2022.2.1 release.\\r\\n* Fixed an issue where JSON settings (Debug options and Instance info) would not get saved without launching with administrator permissions.\\r\\n* Moved all JSON settings to Appdata/Roaming/VRChatQuickLauncher.\\r\\n* Added a button to quickly access all your saved JSON settings (File > Open Save Location).\\r\\n* Fixed an issue where application-wide settings (Selected theme, installs, profiles, save on exit, auto-layout, auto-close, launch delay) would get reset, this is a breaking change that will reset your current application-wide settings one last time.\\r\\n\\r\\n## Download\\r\\n\\r\\nIt\'s always recommended to download the latest version from the [official download page](https://vrchat.com/home/download).\\r\\nHowever, if a direct link to this version is needed, it can be found at [VRChat_Creator_Companion_Setup_0.2.5.exe](https://vrcpm.vrchat.cloud/vcc/Builds/0.2.5/VRChat_CreatorCompanion_Setup_0.2.5.exe)"},{"id":"release-0.2.3","metadata":{"permalink":"/news/release-0.2.3","source":"@site/news/releases/release-0.2.3.md","title":"Release 0.2.3","description":"Summary","date":"2022-05-27T00:00:00.000Z","formattedDate":"May 27, 2022","tags":[{"label":"release","permalink":"/news/tags/release"}],"truncated":true,"authors":[{"name":"Momo the Monster","title":"VRChat Developer","url":"https://github.com/momo-the-monster","imageURL":"https://github.com/momo-the-monster.png","key":"momo"}],"frontMatter":{"slug":"release-0.2.3","date":"2022-05-27T00:00:00.000Z","title":"Release 0.2.3","authors":["momo"],"tags":["release"],"draft":false},"prevItem":{"title":"Release 0.2.5","permalink":"/news/release-0.2.5"},"nextItem":{"title":"Release 0.2.4","permalink":"/news/release-0.2.4"}},"content":"## Summary\\r\\n\\r\\nThis is the first real batch of changes from Open Beta Canny reports, addressing some of the quicker fixes and features which were close to ready.\\r\\n\\r\\n## Changelog\\r\\n\\r\\n* Allows spaces and periods in New Project Names\\r\\n  * [Canny: New Projects cannot be named with special characters and spaces](https://feedback.vrchat.com/creator-companion-beta/p/bug-report-022-new-projects-cannot-be-named-with-special-characters-and-spaces)\\r\\n* Changes CheckGit method to run `git --version` on the command line instead of looking in the registry\\r\\n    * [Canny: \\"You need git installed\\" but Git is already on the Path](https://feedback.vrchat.com/creator-companion-beta/p/you-need-git-installed-but-git-is-already-on-the-path)\\r\\n* Fixes basic VPM functions for Mac and Linux platforms\\r\\n    * [Canny: Mac/Linux version of VCC](https://feedback.vrchat.com/creator-companion-beta/p/feature-request-maclinux-version-of-vcc)\\r\\n* Updates templates to use latest SDK versions.\\r\\n  * [Canny: Allow removal of the samples directory](https://feedback.vrchat.com/creator-companion-beta/p/allow-removal-of-the-samples-directory)\\r\\n* Shows Unity when launching from VCC to avoid many stalled migrations (may fix several Canny reports, time will tell)\\r\\n* Removes #vcc tag from templates for future compatibility\\r\\n* Adds \'pathToUnityHub\' property to Settings to allow users to set this manually on a Mac\\r\\n* Updates Docs to include info for all the above\\r\\n* Moves Release news into \'releases\' docs folder\\r\\n* Changes CLI [new](/vpm/cli#new) command to include project path as option instead of argument (fixes issue where template was used as path)\\r\\n\x3c!--truncate--\x3e\\r\\n## VRC Quick Launcher\\r\\n\\r\\n* Added \\"None\\" instance info that\'ll launch into whatever home is default\\r\\n\\r\\n## Download\\r\\n\\r\\nIt\'s always recommended to download the latest version from the [official download page](https://vrchat.com/home/download).\\r\\nHowever, if a direct link to this version is needed, it can be found at [VRChat_Creator_Companion_Setup_0.2.3.exe](https://vrcpm.vrchat.cloud/vcc/Builds/0.2.3/VRChat_CreatorCompanion_Setup_0.2.3.exe)"},{"id":"release-0.2.4","metadata":{"permalink":"/news/release-0.2.4","source":"@site/news/releases/release-0.2.4.md","title":"Release 0.2.4","description":"Summary","date":"2022-05-27T00:00:00.000Z","formattedDate":"May 27, 2022","tags":[{"label":"release","permalink":"/news/tags/release"}],"truncated":true,"authors":[{"name":"Momo the Monster","title":"VRChat Developer","url":"https://github.com/momo-the-monster","imageURL":"https://github.com/momo-the-monster.png","key":"momo"}],"frontMatter":{"slug":"release-0.2.4","date":"2022-05-27T00:00:00.000Z","title":"Release 0.2.4","authors":["momo"],"tags":["release"]},"prevItem":{"title":"Release 0.2.3","permalink":"/news/release-0.2.3"},"nextItem":{"title":"Release 0.2.2","permalink":"/news/release-0.2.2"}},"content":"## Summary\\r\\n\\r\\nFixes issue that would stall the app on launch if git is not installed \ud83d\ude2d\\r\\n## Changelog\\r\\n* Catches exception that is thrown when trying to check git\'s version without it being installed.\\r\\n\x3c!--truncate--\x3e\\r\\n## Download\\r\\n\\r\\nIt\'s always recommended to download the latest version from the [official download page](https://vrchat.com/home/download).\\r\\nHowever, if a direct link to this version is needed, it can be found at [VRChat_Creator_Companion_Setup_0.2.4.exe](https://vrcpm.vrchat.cloud/vcc/Builds/0.2.4/VRChat_CreatorCompanion_Setup_0.2.4.exe)"},{"id":"release-0.2.2","metadata":{"permalink":"/news/release-0.2.2","source":"@site/news/releases/release-0.2.2.md","title":"Release 0.2.2","description":"Summary","date":"2022-05-18T00:00:00.000Z","formattedDate":"May 18, 2022","tags":[{"label":"release","permalink":"/news/tags/release"}],"truncated":true,"authors":[{"name":"Momo the Monster","title":"VRChat Developer","url":"https://github.com/momo-the-monster","imageURL":"https://github.com/momo-the-monster.png","key":"momo"}],"frontMatter":{"slug":"release-0.2.2","date":"2022-05-18T00:00:00.000Z","title":"Release 0.2.2","authors":["momo"],"tags":["release"]},"prevItem":{"title":"Release 0.2.4","permalink":"/news/release-0.2.4"},"nextItem":{"title":"Release 0.2.0","permalink":"/news/release-0.2.0"}},"content":"## Summary\\r\\nSome hot fixes found the same day as the initial release!\\r\\nYes, we skipped 0.2.1 as it had a deployment issue.\\r\\n\\r\\n## Changelog\\r\\n\\r\\n* Fixes issue where Web Views would duplicate letters when typing. \\r\\n  * [Canny: Search Function Produces Duplicate Letters](https://feedback.vrchat.com/creator-companion-beta/p/bug-020-search-function-produces-duplicate-letters)\\r\\n* Fixes namespace for Method run when importing VRC SDK packages. Fixes issue where projects would report that migration failed when everything else had worked properly.\\r\\n  * [Canny: Creator Companion Migration Fails for avatars](https://feedback.vrchat.com/creator-companion-beta/p/201943123231-creator-companion-migration-fails-for-avatars)\\r\\n* Fixes issue where the installer would fail when Windows Library Folders are on Network Drives\\r\\n  * [Canny: Installer error when Windows Library Folders are on Network Drives](https://feedback.vrchat.com/creator-companion-beta/p/installer-error-when-windows-library-folders-are-on-network-drives)\\r\\n* Updates Docs link to download VCC\\r\\n* Fixes Welcome location and copy\\r\\n* Updates VRCTemplates path in Templates Doc\\r\\n\\r\\n\x3c!--truncate--\x3e\\r\\n## Download\\r\\n\\r\\nIt\'s always recommended to download the latest version from the [official download page](https://vrchat.com/home/download).\\r\\nHowever, if a direct link to this version is needed, it can be found at [VRChat_Creator_Companion_Setup_0.2.2.exe](https://vrcpm.vrchat.cloud/vcc/Builds/0.2.2/VRChat_CreatorCompanion_Setup_0.2.2.exe)"},{"id":"release-0.2.0","metadata":{"permalink":"/news/release-0.2.0","source":"@site/news/releases/release-0.2.0.md","title":"Release 0.2.0","description":"Summary","date":"2022-05-15T00:00:00.000Z","formattedDate":"May 15, 2022","tags":[{"label":"release","permalink":"/news/tags/release"}],"truncated":true,"authors":[{"name":"Momo the Monster","title":"VRChat Developer","url":"https://github.com/momo-the-monster","imageURL":"https://github.com/momo-the-monster.png","key":"momo"}],"frontMatter":{"slug":"release-0.2.0","date":"2022-05-15T00:00:00.000Z","title":"Release 0.2.0","authors":["momo"],"tags":["release"]},"prevItem":{"title":"Release 0.2.2","permalink":"/news/release-0.2.2"}},"content":"## Summary\\r\\n\\r\\nOur initial Open Beta release!\\r\\n\\r\\n\x3c!--truncate--\x3e\\r\\n### Set Up For Development\\r\\n\\r\\n* Checks for and Installs VRChat-SDK-Compatible Unity Version if needed\\r\\n* Checks for and Installs Git if needed\\r\\n\\r\\n### Manage Projects\\r\\nThe Creator Companion helps you manage your Avatar and World projects.\\r\\n\\r\\n#### Make New Project\\r\\n* Download newest templates (installed with version updates)\\r\\n* Create new Project from Templates\\r\\n* List Official VRChat Packages\\r\\n\\r\\n#### Update Existing Project\\r\\n* Add optional packages\\r\\n* Update existing packages\\r\\n* Migrate projects from legacy .unitypackage format\\r\\n\\r\\n### Learn about VRC Creation\\r\\nEasy access to documentation\\r\\n\\r\\n* VCC Docs\\r\\n* Udon Docs\\r\\n* Avatar Docs\\r\\n* Forum Link\\r\\n\\r\\n## Advanced Use\\r\\n\\r\\nWe\'ve also released a [CLI Tool](/vpm/cli) if you want to do manage your projects from the command line.\\r\\n\\r\\n## Download\\r\\n\\r\\nIt\'s always recommended to download the latest version from the [official download page](https://vrchat.com/home/download).\\r\\nHowever, if a direct link to this version is needed, it can be found at [VRChat_Creator_Companion_Setup_0.2.0.exe](https://vrcpm.vrchat.cloud/vcc/Builds/0.2.0/VRChat_CreatorCompanion_Setup_0.2.0.exe)"}]}')}}]);