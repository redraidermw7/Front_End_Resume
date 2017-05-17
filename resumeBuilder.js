 var bio = {
	       "name":"Mark Wainscott",
	       "role":"Developer",
           "contacts":{
           	"mobile": "555-555-5554",
           	"email": "mark.wainscott@att.com",
           	"github": "redraidermw7",
           	"location": "Waxahachie, TX, USA"
        },
           "welcomeMessage":"Thanks for checking out my resume!",
            "skills":[
           "Awesomeness","Teacher","Strategist","Carpenter","Chef","Wood Hobbyist"
           ],
           "biopic":"images/me.jpg",
           "display" : function(){}
       };

var education = {
  "schools": [
    {
      "name": "Texas Tech University",
      "location": "Lubbock, TX, USA",
      "degree": "BBA",
      "majors": "Management",
      "dates": "2003 - 2006",
      "url": "http://www.ttu.edu"
    },
    {
      "name": "Texas Tech University",
      "location": "Lubbock, TX, USA",
      "degree": "MBA",
      "majors": "Management",
      "dates": "2006 - 2007",
      "url": "http://www.ttu.edu"
    }
  ],
    "onlineCourses": [
    {
      "title": "Introduction to Programming",
      "school": "Udacity",
      "dates": "November 2016 - May 2017",
      "url": "http://www.udacity.com"
    },
    {
      "title": "How to get a great night's sleep",
      "school": "Sleep Insitute",
      "dates": "November 2015 - January 2016",
      "url": "https://sleepfoundation.org/"
    }
    ],
    "display" : function(){}
};

var work = {
  "jobs": [
    {
      "employer":"AT&T",
      "title": "Lead Compliance Analyst",
      "location": "Dallas, TX, USA",
      "dates": "May 2015 - Present",
      "description": "Work to keep AT&T off the front page of the New York Times. i am going to add lots of data so that the list of items in a row will be something that runs across the page for the aligator to chase."
    },
    {
      "employer":"AT&T",
      "title": "Sr. Public Relations Manager",
      "location": "Dallas, TX, USA",
      "dates": "February 2012 - May 2015",
      "description": "Analyze employee behavior.",
    }
    ],
  "display" : function(){}
  };

var projects = {
  "projects": [
    {
      "title":"Dining Experience Transformation",
        "dates": "October 2016 - Present",
        "description": "Build tables for dining room",
        "images": ["images/project1.JPG"]
    },
    { 
      "title":"See Yourself",
        "dates": "July 2016 - August 2016",
        "description": "Let your life reflect in others",
        "images": ["images/project2.JPG"]
    },    
  ],
  "display" : function(){}
  };

bio.display = function(){
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedbioPic = HTMLbioPic.replace("%data%", bio.biopic);
var formattedmobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedemail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedgithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedlocation = HTMLlocation.replace("%data%", bio.contacts.location);
var formattedmobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

$("#topContacts").append(formattedmobile);
$("#topContacts").append(formattedemail);
$("#topContacts").append(formattedgithub);
$("#topContacts").append(formattedlocation);


$("#header").append(formattedwelcomeMsg);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedbioPic);

if (bio.skills.length > 0) {
  $('#header').append(HTMLskillsStart);

  var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[5]);
  $("#skills").append(formattedSkill)
};

$("#footerContacts").append(formattedmobile);
$("#footerContacts").append(formattedemail);
$("#footerContacts").append(formattedgithub);
$("#footerContacts").append(formattedlocation);
};

work.display = function(){
  for (var i = 0 ; i < work.jobs.length; i++) {
  $("#workExperience").append(HTMLworkStart);

  var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
  var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[i].title);
  var formattedEmployerTitle = formattedEmployer + formattedTitle;
  $(".work-entry:last").append(formattedEmployerTitle);

  var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
  $(".work-entry:last").append(formattedDates);

  var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[i].description);
  $(".work-entry:last").append(formattedDescription);

  var formattedworkLocation = HTMLworkLocation.replace("%data%",work.jobs[i].location);
  $(".work-entry:last").prepend(formattedworkLocation);
  };
};

projects.display = function(){
  for (var i = 0 ; i < projects.projects.length; i++) {
  //for (project in projects.projects) {
    $("#projects").append(HTMLprojectStart);

    var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
    $(".project-entry:last").append(formattedTitle);

    var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
    $(".project-entry:last").append(formattedDates);

    var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
    $(".project-entry:last").append(formattedDescription);
    
    var formattedImages = HTMLprojectImage.replace("%data%", projects.projects[i].images);
    $(".project-entry:last").append(formattedImages);
  };
};

education.display = function(){
  for (var i = 0 ; i < education.schools.length; i++) {
    $("#education").append(HTMLschoolStart);

  var formattedSchool = HTMLschoolName.replace("%data%", education.schools[i].name);
  var formattedschoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
  var formattedSchoolTitle = formattedSchool + formattedschoolDegree;
  $(".education-entry:last").append(formattedSchoolTitle);

  var formattedschoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
  $(".education-entry:last").prepend(formattedschoolLocation);

  var formattedschoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors);
  $(".education-entry:last").append(formattedschoolMajor);

  }
  $("#education").append(HTMLonlineClasses);
  for (var i = 0 ; i < education.onlineCourses.length; i++) {
    $("#education").append(HTMLschoolStart);
    
  var formattedonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
  var formattedonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
  var formattedschoolandname = formattedonlineTitle + formattedonlineSchool;
  var formattedonlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
  var formattedonlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);
  $(".education-entry:last").append(formattedschoolandname);
  $(".education-entry:last").append(formattedonlineDates);
  $(".education-entry:last").append(formattedonlineURL);
};
};

$("#mapDiv").append(googleMap);

bio.display();
work.display();
education.display();
projects.display();