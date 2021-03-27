function changeToFrench() {
  document.getElementById("head_research").innerHTML = "Recherche";
  document.getElementById("head_pproject").innerHTML = "Projets personnels";
  document.getElementById("head_skillset").innerHTML = "Compétences";
  document.getElementById("head_bio").innerHTML      = "CV";
  document.getElementById("head_contact").innerHTML  = "Contact";
  language="fr"
};

function changeToEnglish() {
  document.getElementById("head_research").innerHTML = "Research";
  document.getElementById("head_pproject").innerHTML = "Personnal projects";
  document.getElementById("head_skillset").innerHTML = "Skill Set";
  document.getElementById("head_bio").innerHTML      = "CV";
  document.getElementById("head_contact").innerHTML  = "Contact";
  language="en"
};

document.getElementById("fr_id").addEventListener("click", changeToFrench );
document.getElementById("en_id").addEventListener("click", changeToEnglish );
