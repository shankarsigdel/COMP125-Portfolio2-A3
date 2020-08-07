/*javaScript Section
Shankar Sigdel
Assignment 3 Extended mini Portofolio
student ID: 301110925
Client Side Web
Professor: Tom Tsiliopoulos*/

"use strict";

displayOutput();
function displayOutput()
{
    console.log('%cCOMP125-Assignment3', "color:ivory; background-color:purple ;font-size: 24px;");   
   let title = document.title;
   title = title.toLowerCase();
   console.log(`The title of the page is ${title}`);
}

 //This is for navigation part that passes -- header and footer
function setNavData()
{
 
if (document.title == "home.html" || document.title == "contact.html" || document.title == "project.html") 
    {
        loadHeader();
        loadFooter();      
    }                        
} 
    //this part loads the heading part of the project
    loadHeader();
    function loadHeader()
    {
        console.info("Header is loading...");
        // step 1 - Creates the XHR object
        let XHR = new XMLHttpRequest();
                    
        // step 2 - Configures the message
        XHR.open("GET", "./Views/partials/header.html");
                    
        // step 3 - Executes the request
        XHR.send();
                    
        XHR.addEventListener("readystatechange", function()
        {
            if((XHR.readyState === 4) && (XHR.status === 200))
            {
                let header = document.getElementsByTagName("header")[0];
                    
                 let headerData = XHR.responseText;
                    
                 header.innerHTML = headerData;
            }
        });   
    } 

let xhrContent;
//This part is to read the content from paragraph.JSON
function readParagraphs() 
{
    if ((xhrContent.readyState === 4) && (xhrContent.status === 200)) 
      {
          let MyContent = JSON.parse(xhrContent.responseText);
          let paragraphs = MyContent.paragraphs;
          paragraphs.forEach(function (paragraph) 
            {
                let paragraphElements = document.getElementById(paragraph.id);
                
                if(paragraphElements) 
                {
                     paragraphElements.innerHTML = paragraph.content;
                }               
            }, this);
      }
}
//This part also loads the contents fron the paragraph.JSON
function loadContent()
    {
      xhrContent = new XMLHttpRequest();
      xhrContent.open("GET","Scripts/paragraphs.json",true);
      xhrContent.send(null);
      xhrContent.addEventListener("readystatechange",readParagraphs);
    }
function initialize() 
    { 
     //Calling loadContent function 
        loadContent();
    };
     //Loads the initialize function after loading all the html functions 
    window.addEventListener("load",initialize);


//This part is to load the footer of every html files
loadFooter();
function loadFooter()
{
  console.info("Footer is loading...");

  // step 1 - Creates the XHR object
  let XHR = new XMLHttpRequest();

  // step 2 - Configures the message
  XHR.open("GET", "./Views/partials/footer.html");

  // step 3 - Executes the request
  XHR.send();

  XHR.addEventListener("readystatechange", function()
  {
      if((XHR.readyState === 4) && (XHR.status === 200))
      {
          let footer = document.getElementsByTagName("footer")[0];

          let footerData = XHR.responseText;
          footer.innerHTML = footerData;
      }
  });   
}