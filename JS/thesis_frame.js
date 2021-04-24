"use strict";

class ThesisFrame
{
  // Variables
  //--------------------------------------------------------
  // HTML values
  title       = "Research";
  img_path    = "Personnal projects";
  img_content = "Skill Set";
  frame_text  = "CV";
  //--------------------------------------------------------

  // Constructor
  //--------------------------------------------------------
  constructor( title_, img_path_, img_content_, frame_text_ )
  {
    this.title       = title_;
    this.img_path    = img_path_;
    this.img_content = img_content_;
    this.frame_text  = frame_text_;
  }
  //--------------------------------------------------------

  // Accessors
  //--------------------------------------
  get title()
  {
    return this.title;
  }
  get img_path()
  {
    return this.img_path;
  }
  get img_content()
  {
    return this.img_content;
  }
  get frame_text()
  {
    return this.frame_text;
  }
  //--------------------------------------

  // Setters
  //--------------------------------------
  set title( title_ )
  {
    this.title = title_;
    return;
  }
  set img_path( img_path_ )
  {
    this.img_path = img_path_
    return;
  }
  set img_content( img_content_ )
  {
    this.img_content = img_content_;
    return;
  }
  set frame_text( frame_text_ )
  {
    this.frame_text = frame_text_;
    return;
  }
  //--------------------------------------

};
