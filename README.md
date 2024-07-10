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
https://www.npmjs.com/package/cypress-xpath

Command need to execute - npm install -D cypress-xpath

Plugin which is supported - 
1. ChroPath - 
2. SelectorHub - https://chromewebstore.google.com/detail/selectorshub/ndgimibanhlabgdgjcpbbndiehljcpfh?hl=en


Xpath is classified

1. Relative Xpath - double slash - //*[@id="app"]/div[1]/div[2]/div[2]/div/div[2]/div[1]/button

2. Absolute Xpath - single slash - /html/body/div/div[1]/div[2]/div[2]/div/div[2]/div[1]/button


Relative Xpath - 
--------------

Ways of creating Xpath - 

1. Tag, Attribute and Value - //tag[@attribute = 'value']
eg. //button[@type = 'button']
    //button[normalize-space()='Add']

2. Contains()
//*[contains(@class,'oxd-text oxd-text--h5' )]

3. Starts-with()
//*[starts-with(@attribute,'value')]

4. text()


Entering keyboard button
-----------------------

https://docs.cypress.io/api/commands/type


const app = window.top;
if (!app.document.head.querySelector("[data-hide-command-log-request]")) {
 const style = app.document.createElement("style");
 style.innerHTML =".command-name-request, .command-name-xhr { display: none }";
 style.setAttribute("data-hide-command-log-request", "");
 app.document.head.appendChild(style); 
}


Assertion
---------

Implicit Assertion (built-in)
 -should
 -and

Explicit Assertion 
 -BDD - assert
 -TDD - expect

 https://docs.cypress.io/guides/references/assertions


it method in cypress is having few methods


Dropdown in Cypress
-------------------

Assignment - 1
JavaScript Program to Calculate the Area of a Triangle
JavaScript Program to Swap Two Variables
JavaScript Program to Solve Quadratic Equation
JavaScript Program to Convert Kilometers to Miles
Javascript Program to Convert Celsius to Fahrenheit
Javascript Program to Generate a Random Number
Javascript Program to Check if a number is Positive, Negative, or Zero
Javascript Program to Check if a Number is Odd or Even
JavaScript Program to Find the Largest Among Three Numbers
JavaScript Program to Check Prime Number
JavaScript Program to Print All Prime Numbers in an Interval
JavaScript Program to Find the Factorial of a Number


Cypress Assignment
------------------
Application Link - https://demo.opencart.com/

TestCase -
#1 - Perform the Registration of new user by entering all the details 
My Account > Register

#2 - Perform the login in the Application with the same user and place order of any item

Sample Application for Practice - 

Dropdown Scenarios
------------------

https://testautomationpractice.blogspot.com/
https://www.dummyticket.com/dummy-ticket-for-visa-application/
https://www.wikipedia.org/
https://www.zoho.com/commerce/free-demo.html


<Select>
Mouse Operations
---------------

1. Mouse Hover
2. Double Click 
3. Right Click
4. Drag and Drop
5. Scrolling 

https://demo.opencart.com/. 
https://tutorialsninja.com/demo/
https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick3
http://swisnl.github.io/jQuery-contextMenu/demo.html
http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html
https://scroll.in/tag/Swiggy

















































