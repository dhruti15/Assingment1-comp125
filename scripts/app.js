/* main JavaScript file */
// IIFE - Immediately Invoked Function Expression
(function(){
    "use strict";
    var paragraphOne = document.getElementById("paraone");
    var paragraphTwo = document.getElementById("paratwo");
    var paragraphThree = document.getElementById("parathree");

   
    //define your paragraphs array;
    var paragraphs = [];
    //data for my pages 
    paragraphs[0] = "- DHRUTI PATEL -";
    paragraphs[1] = "It is impossible for a man to learn what he thinks he already knows.";
    paragraphs[2] = "I am a student in the first semester of the Software Engineering Technology at Centennial college.Previously i studied at Bright School in Gujarat, India. I am from a very traditional, multicultered country. I am constantly working on incredible projects, and love creating beautiful things.I'm passionate about creating awesome things and learning new languages, including C, C#, Objective-C, Java, Swift, HTML/CSS, JavaScript, Python, PHP, and more! Most of my design includes web pages and mobile applications. (And my Dribbble is lacking, but I'm working on it!)I have a personal blog on which I write about things from technology to opinions about random subjects. Who knows what I'll pen next.Most of the stuff I do is open source, so you can check it all out on GitHub. I taught myself to program through open source, so this is my way to give back.";

    //second way to define an array;
    //var paragraphs = new Array();
    
    if (paragraphOne){
        paragraphOne.textContent = paragraphs[0];
    }
        if (paragraphTwo){
        paragraphTwo.textContent = paragraphs[1];
    }
    if (paragraphThree)
    {
        paragraphThree.textContent = paragraphs[2];
        
      }


})();