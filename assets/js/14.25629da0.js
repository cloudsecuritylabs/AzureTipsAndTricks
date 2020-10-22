(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{369:function(t,e,o){"use strict";o.r(e);var r=o(42),i=Object(r.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),o("p",[t._v("💡 Learn more : "),o("a",{attrs:{href:"https://docs.microsoft.com/azure/app-service?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[t._v("App Service Documentation"),o("OutboundLink")],1),t._v(".")])]),t._v(" "),o("h3",{attrs:{id:"part-2-an-end-to-end-scenario-with-azure-app-service-api-apps-sql-vsts-and-ci-cd"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#part-2-an-end-to-end-scenario-with-azure-app-service-api-apps-sql-vsts-and-ci-cd"}},[t._v("#")]),t._v(" Part 2 - An end to end scenario with Azure App Service, API Apps, SQL, VSTS and CI/CD")]),t._v(" "),o("h4",{attrs:{id:"a-multi-part-series-showing-an-end-to-end-possibility"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#a-multi-part-series-showing-an-end-to-end-possibility"}},[t._v("#")]),t._v(" A multi-part series showing an end-to-end possibility")]),t._v(" "),o("p",[o("a",{attrs:{href:"https://www.linkedin.com/in/crystal-tenn-6a0b9b67/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Crystal Tenn"),o("OutboundLink")],1),t._v(" and I teamed up to bring an E2E blog series that features an Azure App Service website that communicates with an API project, which communicates to an Azure SQL back-end. The app is a traditional To-Do application based on an existing sample that used ADO.NET, but adapted for Azure deploy and to Visual Studio 2017. The  technology/tooling stack is Visual Studio, VSTS, C#, Angular, and SQL.")]),t._v(" "),o("p",[t._v("The process for the app is described below. In Visual Studio, you will start out with a working To Do list application. You will push the code to VSTS (Visual Studio Team Services). Then you will create a CI/CD (Continuous Integration/Continuous Delivery) process in order to deploy to Azure. In Azure you will create 3 resources: Azure Web App, Azure API App, and an Azure SQL Server through this exercise.")]),t._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip101.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Local Setup - SQL Server"),o("OutboundLink")],1),t._v(" - Locally connect a front-end website to an API, and connect the API to a SQL Server.")]),t._v(" "),o("li",[o("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip102.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Local Setup - Visual Studio and Swagger"),o("OutboundLink")],1),t._v(" - Continue Part 1 and use a local instance of Visual Studio and Swagger to communicate to our db.")]),t._v(" "),o("li",[o("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip103.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Swagger - Learn how to use Swagger for API management"),o("OutboundLink")],1)]),t._v(" "),o("li",[o("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip104.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Azure Deployment - Deploy the SQL database to Azure manually"),o("OutboundLink")],1)]),t._v(" "),o("li",[o("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip105.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Azure Deployment - Deploy the front-end Web App and API App to Azure manually"),o("OutboundLink")],1)]),t._v(" "),o("li",[o("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip107.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Adding the project to VSTS with Git"),o("OutboundLink")],1)]),t._v(" "),o("li",[o("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip108.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("VSTS Continuous Integration - Setup a CI Process in VSTS"),o("OutboundLink")],1)]),t._v(" "),o("li",[o("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip109.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("VSTS Continuous Deployment - Setup a CD Process in VSTS"),o("OutboundLink")],1)]),t._v(" "),o("li",[o("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip110.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Cleanup - Cleanup and delete the Azure resources created in this tutorial"),o("OutboundLink")],1)])]),t._v(" "),o("p",[t._v("Keep in mind : While we won't be going into the deep specifics of how to code, you should be able to use this guide to look at several parts of the Azure technology stack and how you can best implement them in your organization.")]),t._v(" "),o("img",{attrs:{src:t.$withBase("/files/todolist-diagram.png")}}),t._v(" "),o("h4",{attrs:{id:"local-setup-visual-studio-to-talk-to-our-sql-database"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#local-setup-visual-studio-to-talk-to-our-sql-database"}},[t._v("#")]),t._v(" Local Setup - Visual Studio to talk to our SQL Database")]),t._v(" "),o("p",[t._v("1.) Open the project in Visual Studio by double clicking "),o("strong",[t._v("ToDoList.sln")]),t._v(", if it is not already open from Part 1.")]),t._v(" "),o("p",[t._v("2.) Open the "),o("strong",[t._v("Web.config")]),t._v(" file of the "),o("strong",[t._v("ToDoListDataAPI")]),t._v(" project. Make sure you are in the right project.")]),t._v(" "),o("img",{attrs:{src:t.$withBase("/files/e2e-webconfig.jpg")}}),t._v(" "),o("p",[t._v('3.) Edit the "'),o("strong",[t._v("ComputerName\\ServerName")]),t._v('" highlighted and change it to your computer & SQL server name that you saved in a Notepad.')]),t._v(" "),o("img",{attrs:{src:t.$withBase("/files/e2e-webconfig2.jpg")}}),t._v(" "),o("p",[t._v("Mine looks like:")]),t._v(" "),o("div",{staticClass:"language- line-numbers-mode"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[t._v('    <add name="todoItems" connectionString="Server=MICHAELCRUM0FD9\\SQLEXPRESS;Initial Catalog=todolistdb;MultipleActiveResultSets=False;Integrated Security=True" providerName="System.Data.EntityClient" />\n')])]),t._v(" "),o("div",{staticClass:"line-numbers-wrapper"},[o("span",{staticClass:"line-number"},[t._v("1")]),o("br")])]),o("p",[t._v("4.) Save the file and set the ToDoListDataAPI project to Set as Startup project by right clicking on the project and choosing that option.")]),t._v(" "),o("img",{attrs:{src:t.$withBase("/files/e2e-setstartup.jpg")}}),t._v(" "),o("p",[t._v("5.) Hit F5 or Run inside of any browser.")]),t._v(" "),o("img",{attrs:{src:t.$withBase("/files/e2e-run.jpg")}}),t._v(" "),o("p",[t._v("Note: If you get "),o("strong",[t._v("The Web server is configured to not list the contents of this directory.")]),t._v(", then just proceed to step 6.")]),t._v(" "),o("p",[t._v("6.) Add /swagger to the URL if it is not already there for you. The page should look like this if everything is working properly:")]),t._v(" "),o("img",{attrs:{src:t.$withBase("/files/e2e-swagger.jpg")}}),t._v(" "),o("p",[t._v("7.) Click Show/Hide to get a full list of APIs available to the application.")]),t._v(" "),o("img",{attrs:{src:t.$withBase("/files/e2e-showhide.jpg")}}),t._v(" "),o("p",[t._v("8.) Click on "),o("strong",[t._v("Get")]),t._v(" (the first one in the list) to expand it. Click "),o("strong",[t._v("Try it out!")]),t._v(". If you get a 200 Response Code, it worked! Also take note of the URL port number in your browser.")]),t._v(" "),o("img",{attrs:{src:t.$withBase("/files/e2e-get.jpg")}}),t._v(" "),o("img",{attrs:{src:t.$withBase("/files/e2e-get1.jpg")}}),t._v(" "),o("p",[t._v("9.) Switch back over to Visual Studio and go to the "),o("strong",[t._v("Web.config")]),t._v(" in the "),o("strong",[t._v("ToDoListAngular")]),t._v(" project.")]),t._v(" "),o("img",{attrs:{src:t.$withBase("/files/e2e-angularprojwebconfig.jpg")}}),t._v(" "),o("p",[t._v("10.) Make sure that the port number matches the port from the last step.")]),t._v(" "),o("img",{attrs:{src:t.$withBase("/files/e2e-angularwebconfig.jpg")}}),t._v(" "),o("p",[t._v("11.)  Set the "),o("strong",[t._v("ToDoListAngular")]),t._v(" project as Startup Project.")]),t._v(" "),o("img",{attrs:{src:t.$withBase("/files/e2e-angularstart.jpg")}}),t._v(" "),o("p",[t._v("12.)  Hit F5 or hit Run")]),t._v(" "),o("p",[t._v("13.) You should see the Angular app running in your web browser:")]),t._v(" "),o("img",{attrs:{src:t.$withBase("/files/e2e-todohome.jpg")}}),t._v(" "),o("ol",{attrs:{start:"14"}},[o("li",[t._v("Click on Todo list menu and add an entry. Try editing it and deleting it. You can put breakpoints in the code to learn more about how it is performing the CRUD operations. You can also check the SQL database to see the entries.")])]),t._v(" "),o("img",{attrs:{src:t.$withBase("/files/e2e-todolist.gif")}}),t._v(" "),o("img",{attrs:{src:t.$withBase("/files/e2e-sql1.jpg")}})])}),[],!1,null,null,null);e.default=i.exports}}]);