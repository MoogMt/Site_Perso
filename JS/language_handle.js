"use strict";

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
  welcome_msg_span = document.getElementById("welcome_msg")
  if ( welcome_msg_span != null )
  {
    welcome_msg_span.innerHTML = "Bienvenue sur mon site personnel!";
  }
};
function changeWelcometoEnglish()
{
  welcome_msg_span = document.getElementById("welcome_msg")
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
    if ( page == "research ")
    {
      changeResearchtoFrench();
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
    if ( page == "research ")
    {
      changeResearchtoEnglish();
    }
  }
};

function moveToResearch()
{
  
}

lang_fr_head = document.getElementById("fr_id")
if ( lang_fr_head != null )
{
  lang_fr_head.addEventListener("click", changeToFrench );
}

lang_en_head = document.getElementById("en_id")
if ( lang_en_head != null )
{
  lang_en_head.addEventListener("click", changeToEnglish );
}

research_head = document.getElementById("head_research")
if ( research_head != null )
{
  research_head.addEventListener("click", moveToResearch );
}
