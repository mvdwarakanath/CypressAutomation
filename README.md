# CypressAutomation
Cypress API Automation Framework


Cypress Introduction
--------------------

Pre-requisite - Manual Testing

Automation Testing - 
------------------

Cypress - 2 Programming Language - JavaScript and TypeScript
Focus - JavaScript
Current Version of Cypress - 13+
Pre-requsite - 
-------------

- Node Module - npm - Node Package Manager
- Editor - VisualStudioCode

UI - Automation End To End Framework
API - Automation End To End Framework

CI-CD Pipeline - Cypress Cloud - Previously - Cypress Dashboard

SCM - GIT -- CircleCI, BitBucket, Azure


Cypress Automation Session Day 2 
--------------------------------

1. Node JS - https://nodejs.org/en/download/source-code

node --version - To check the version which is installed into your machine.

Cypress - Javascript and Typescript
Maven - mvnrepository 

2. Download VS Code Editor - https://code.visualstudio.com/download

Getting Start with Cypress
--------------------------

1. https://www.cypress.io/install - Offical page for downloading cypress.

- npm install --save-dev cypress
- npm install cypress  

- yarn commands

- brew - MAC

- Update Cypress to Latest Version - UI


2. Opening Cypress - npx cypress open 


Cypress Automation Session Day 3 - 
--------------------------------

- To Open Cypress - npx cypress open
- e2e Folder - All the spec file will be visible 

Cypress Inspector
-----------------


CSS Selector -- Cypress --- Best Support CSS Selector
-----------------------------------------------------

1. If you are aware about the classname attribute - .classname. ---> .oxd-input.oxd-input--active
2. If you are aware about the ID attribute - #id
3. If you are aware about attribute and value of that attribute ---> [attribute = 'value']
4. If you are aware about attribute and value of that attribute along with tag name ---> 
input[attribute = 'value']
5. If you are aware about classname and tag ---> tag.classname
6. If you are aware about ID and tag ---> tag#id
7. You can use cypress inspector for getting the CSS Selector

[class="oxd-form-row"] [class="oxd-form-row"]

<input data-v-1f99f73c="" class="oxd-input oxd-input--active" name="username" placeholder="Username" autofocus="">


Xpath Selector 
--------------





const app = window.top;
if (!app.document.head.querySelector("[data-hide-command-log-request]")) {
 const style = app.document.createElement("style");
 style.innerHTML =".command-name-request, .command-name-xhr { display: none }";
 style.setAttribute("data-hide-command-log-request", "");
 app.document.head.appendChild(style); 
}




























































