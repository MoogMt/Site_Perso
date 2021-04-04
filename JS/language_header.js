"use strict";

// Language Change Event Listeners
//--------------------------------------------
function changeLanguageHeader( language_ )
{
  header.changeLanguage( language_ );
  header.applyLanguage()
}
var lang_en_head = document.getElementById("en_id");
if ( lang_en_head != null )
{
  function changeToEnglish()
  {
    language = "en";
    changeLanguageHeader( language )
  }

  lang_en_head.addEventListener("click", changeToEnglish );
}
var lang_fr_head = document.getElementById("fr_id");
if ( lang_fr_head != null )
{
  function changeToFrench()
  {
    language = "fr";
    changeLanguageHeader( language )
  }

  lang_fr_head.addEventListener("click", changeToFrench  );
}
//--------------------------------------------
