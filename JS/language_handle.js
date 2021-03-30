"use strict";

// Language handler functions
//---------------------------------------
function changeHeaderToFrench()
{
  document.getElementById("head_research").innerHTML = "Recherche";
  document.getElementById("head_pproject").innerHTML = "Projets personnels";
  document.getElementById("head_skillset").innerHTML = "Compétences";
  document.getElementById("head_bio").innerHTML      = "CV";
  document.getElementById("head_contact").innerHTML  = "Contact";

};
function changeHeaderToEnglish()
{
  document.getElementById("head_research").innerHTML = "Research";
  document.getElementById("head_pproject").innerHTML = "Personnal projects";
  document.getElementById("head_skillset").innerHTML = "Skill Set";
  document.getElementById("head_bio").innerHTML      = "CV";
  document.getElementById("head_contact").innerHTML  = "Contact";
};
function changeWelcometoFrench()
{
  var welcome_msg_span = document.getElementById("welcome_msg");
  if ( welcome_msg_span != null )
  {
    welcome_msg_span.innerHTML = "Bienvenue sur mon site personnel!";
  }
};
function changeWelcometoEnglish()
{
  var welcome_msg_span = document.getElementById("welcome_msg");
  if ( welcome_msg_span != null )
  {
    welcome_msg_span.innerHTML = "Welcome on my personal website!";
  }
};
function changeToFrench()
{
  if ( language != "fr" ) {
    language="fr"
    changeHeaderToFrench();
    if ( page == "welcome" )
    {
      changeWelcometoFrench();
    }
  }
};
function changeToEnglish()
{
  if( language != "en" ) {
    language="en"
    changeHeaderToEnglish();
    if ( page == "welcome" )
    {
      changeWelcometoEnglish();
    }
  }
};
//---------------------------------------

// Functions to move from one page to the next
//--------------------------------------------
function moveToResearch()
{
  if ( page != "research" )
  {
    page = "research";
    var main_content = document.getElementById("main_content");
    // Checking that the main content part to modify is here
    if  ( main_content != null )
    {
      // Import the text from research
      main_content.innerHTML = "<div w3-include-html=Content/\"research_fr.html\"></div> "
    }
  }
};
function moveToPProjects()
{
  if ( page != "pproject" )
  {
    page = "pproject";
  }
};
function moveToSkillSet()
{
  if ( page != "skillset" )
  {
    page = "skillset";
  }
};
function moveToBio()
{
  if ( page != "bio" )
  {
    page = "bio";
  }
};
function moveToContact()
{
  if ( page != "contact" )
  {
    page = "contact";
  }
};
//--------------------------------------------

// Language Change Event Listeners
//--------------------------------------------
var lang_en_head = document.getElementById("en_id");
if ( lang_en_head != null )
{
  lang_en_head.addEventListener("click", changeToEnglish );
}
var lang_fr_head = document.getElementById("fr_id");
if ( lang_fr_head != null )
{
  lang_fr_head.addEventListener("click", changeToFrench );
}
//--------------------------------------------

// Pages change Event Listeners
//--------------------------------------------
var research_head = document.getElementById("head_research")
if ( research_head != null )
{
  research_head.addEventListener("click", moveToResearch );
}
var pproject_head = document.getElementById("head_pproject")
if ( pproject_head != null )
{
  pproject_head.addEventListener("click", moveToPProjects );
}
var skillset_head = document.getElementById("head_skillset")
if ( skillset_head != null )
{
  skillset_head.addEventListener("click", moveToSkillSet );
}
var bio_head = document.getElementById("head_bio")
if ( bio_head != null )
{
  research_head.addEventListener("click", moveToBio );
}
var contact_head = document.getElementById("head_contact")
if ( contact_head != null )
{
  contact_head.addEventListener("click", moveToContact );
}
//--------------------------------------------


function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                alert(allText);
            }
        }
    }
    rawFile.send(null);
}
