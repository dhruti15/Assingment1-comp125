/* main JavaScript file */
// IIFE - Immediately Invoked Function Expression
(function(){
    "use strict";
    var paragraphOne = document.getElementById("paraone");
    var paragraphTwo = document.getElementById("paratwo");
    var paragraphThree = document.getElementById("parathree");
var paragraphFour = document.getElementById("parafour");
    var paragraphFive = document.getElementById("parafive");
     var paragraphSix = document.getElementById("parasix");
     var paragraphSeven = document.getElementById("paraseven");
     var paragraphEight = document.getElementById("paraeig");
     var paragraphNine = document.getElementById("paranine");
     var paragraphTen = document.getElementById("paraten");
     var paragraphEleven = document.getElementById("paraele");

   
    //define your paragraphs array;
    var paragraphs = [];
    //data for my pages 
    paragraphs[0] = "- DHRUTI PATEL -";
    paragraphs[1] = "It is impossible for a man to learn what he thinks he already knows.";
    paragraphs[2] = "I am a student in the first semester of the Software Engineering Technology at Centennial college.Previously i studied at Bright School in Gujarat, India. I am from a very traditional, multicultered country. I am constantly working on incredible projects, and love creating beautiful things.I'm passionate about creating awesome things and learning new languages, including C, C#, Objective-C, Java, Swift, HTML/CSS, JavaScript, Python, PHP, and more! Most of my design includes web pages and mobile applications. (And my Dribbble is lacking, but I'm working on it!)I have a personal blog on which I write about things from technology to opinions about random subjects. Who knows what I'll pen next.Most of the stuff I do is open source, so you can check it all out on GitHub. I taught myself to program through open source, so this is my way to give back.";
paragraphs[3] = "My Projects";
    paragraphs[4] ="Here are some of my projects";
    paragraphs[5] ="---GARDENING---";
    paragraphs[6] ="I am very found of gardening. I love flowers science childhood.It has always been a dream to build a garden with thousands of varieties of flowers. This little activities always gives me happiness. Have a look on this project of mine."
    paragraphs[7]= "---EXPLORING NEW PLACES.---";
    paragraphs[8]= "Acknowledging exploration, I am from a country which has no exploring and adventure limits, Insight i adore exploring new forests, deserts and multicultured cities.According to me this has helps me reflect on my creativity buzzing me from being lazy. Diffrent places gives us different experience and every place has something to teach us.The best part which I love is selfing(clicking pictures).Have a look on few of this moments.";
    paragraphs[9]="---WEB DESIGNING---";
    paragraphs[10]= "Presently I am a software engennering student, trying pursuit my milestones to be a successful web Developer in cutting edge generation.I have created few webpages till date and now working on a website.I am studying client website developer course in this second semester with professor tom tsiliopoulos. ";

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
       if (paragraphFour)
    {
        paragraphFour.textContent = paragraphs[3];
    }
     
    if (paragraphFive)
    {
        paragraphFive.textContent = paragraphs[4];
    }
    if (paragraphSix)
    {
        paragraphSix.textContent = paragraphs[5];
    }
    if (paragraphSeven)
    {
        paragraphSeven.textContent = paragraphs[6];
    }
      if (paragraphEight)
    {
        paragraphEight.textContent = paragraphs[7];
    }
     if (paragraphNine)
    {
        paragraphNine.textContent = paragraphs[8];
    }
       if (paragraphTen)
    {
        paragraphTen.textContent = paragraphs[9];
    }
      



})();