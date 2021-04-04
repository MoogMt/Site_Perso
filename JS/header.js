"use strict";

class Header
{
  // Variables
  //--------------------------------------------------------
  // HTML values
  research   = "Research";
  perso_proj = "Personnal projects";
  skillset   = "Skill Set";
  bio        = "CV";
  contact    = "Contact";
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

class HeaderCSS
{
  // Variables
  //--------------------------------------------------------
  width  = "";
  height = "";
  position = ["","","",""]
  margin   = ["","","",""]
  padding  = ["","","",""]
  //--------------------------------------------------------

  // Constructor
  //--------------------------------------------------------
  constructor( height_="", width_="", position_=["0px","0px","0px","0px"], margin_=["0px","0px","0px","0px"], padding_=["0px","0px","0px","0px"] )
  {
    this.height   = height_;
    this.width    = width_;
    this.position = position_;
    this.margin   = margin_;
    this.padding  = padding_;
  };
  //--------------------------------------------------------

  // Accessors
  //--------------------------------------
  get height()
  {
    return this.height;
  };
  get width()
  {
    return this.width;
  };
  get position()
  {
    return this.position;
  };
  get margin()
  {
    return this.margin;
  };
  get padding()
  {
    return this.padding;
  };
  //--------------------------------------

  // Setters
  //--------------------------------------
  setHeight( height_ )
  {
    this.height = height_.toString().concat( "px" );
    return;
  };
  setHeightUnit( height_, unit )
  {
    if ( unit == "px" || unit == "%" )
    {
      this.height = height_.toString().concat( unit );
    }
    return;
  };
  setWidth( width_ )
  {
    this.width = width_.toString().concat( "px" );
    return;
  };
  setWidthUnit( width_, unit )
  {
    if ( unit == "px" || unit == "%" )
    {
      this.width = width_.toString().concat( unit );
    }
    return;
  };
  setPosition( position_ )
  {
    this.position = position_.toString().concat( "px" );
    return;
  };
  setPositionUnit( position_, unit )
  {
    if( unit == "px" || unit == "%" )
    {
      for ( var i=0; i<4 ; i++ )
      {
        this.position[i] = position_[i].toString().concat( unit );
      }
    }
    return;
  };
  setMargin( margin_ )
  {
    this.margin = margin_.toString().concat( "px" );
    return;
  };
  setMarginUnit( margin_, unit )
  {
    if( unit == "px" || unit == "%" )
    {
      this.margin = ["","","",""]
      for ( var i=1; i<=4 ; i++ )
      {
        this.margin[i] = margin_[i].toString().concat( unit );
      }
    }
    return;
  };
  setPadding( position_ )
  {
    this.padding = padding_.toString().concat( "px" );
    return;
  };
  setPaddingUnit( padding_, unit )
  {
    if( unit == "px" || unit == "%" )
    {
      this.padding = ["","","",""]
      for ( var i=1; i<=4 ; i++ )
      {
        this.padding[i] = padding_[i].toString().concat( unit );
      }
    }
    return;
  };
  //--------------------------------------

  // ApplyCSS
  //--------------------------------------------------------
  apply()
  {
    var header_id = document.getElementById("header");
    if ( header_id != null )
    {
      header_id.style.height = this.height;
      header_id.style.width  = this.width;
      header_id.style.top    = this.position[0];
      header_id.style.bottom = this.position[1];
      header_id.style.left   = this.position[2];
      header_id.style.right  = this.position[3];
    };
    return;
  };
  //--------------------------------------------------------
}

var header = new Header();
var header_css = new HeaderCSS();

header.changeLanguage( language );
