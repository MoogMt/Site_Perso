class Header
{
  // Variables
  //--------------------------------------------------------
  research   = "";
  perso_proj = "";
  skillset   = "";
  bio        = "";
  contact    = "";
  //--------------------------------------------------------

  // Constructor
  //--------------------------------------------------------
  constructor( research_, perso_proj_, skillset_, bio_, contact_ )
  {
    this.research   = research_;
    this.perso_proj = perso_proj_;
    this.skillset   = skillset_;
    this.bio        = bio_;
    this.contact    = contact_;
  }
  //--------------------------------------------------------

  // Accessors
  //--------------------------------------
  get research()
  {
    return this.research;
  }
  get perso_proj()
  {
    return this.perso_proj
  }
  get skillset()
  {
    return this.skillset
  }
  get bio()
  {
    return this.bio
  }
  get contact()
  {
    return this.contact
  }
  //--------------------------------------

  // Setters
  //--------------------------------------
  set research( research_ )
  {
    this.research = research_;
    return;
  }
  set perso_proj( perso_proj_ )
  {
    this.perso_proj = perso_proj_
    return;
  }
  set skillset( skillset_ )
  {
    this.skillset = skillset_;
    return;
  }
  set bio( bio_ )
  {
    this.bio = bio_;
    return;
  }
  set contact( contact_ )
  {
    this.contact = contact_
    return;
  }
  //--------------------------------------

  //--------------------------------------
  changeLanguage( language )
  {
    if( language == "fr" )
    {
      this.research   = "Recherche";
      this.perso_proj = "Projets personnels";
      this.skillset   = "Compétences";
      this.bio        = "CV";
      this.contact    = "Contact";
    }
    else if ( language == "en")
    {
      this.research   = "Research";
      this.perso_proj = "Personnal projects";
      this.skillset   = "Skill Set";
      this.bio        = "CV";
      this.contact    = "Contact";
    }
    else
    {
      return false;
    }
  };
  //--------------------------------------

  //--------------------------------------
  applyLanguage()
  {
    document.getElementById("head_research").innerHTML = this.research;
    document.getElementById("head_pproject").innerHTML = this.perso_proj;
    document.getElementById("head_skillset").innerHTML = this.skillset;
    document.getElementById("head_bio").innerHTML      = this.bio ;
    document.getElementById("head_contact").innerHTML  = this.contact;
  };
  //--------------------------------------
};

header = new Header();

header.changeLanguage( language );
