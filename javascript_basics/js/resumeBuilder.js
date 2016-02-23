var bio = {
  "name" : "Nate Lipp",
  "role" : "Web Developer",
  "contacts" : {
    "mobile" : "010-3015-9121",
    "email" : "nateplipp@gmail.com",
    "twitter" : "nateplipp",
    "github" : "Nalipp",
    "location" : "Seoul, South Korea",
  },
  "welcomeMessage" : "I like ninjas and robots and mustaches, typewritters.",
  "skills" : ["awesomeness", "programming", "teaching", "JS"],
  "bioPic" : "images/fry.jpg"
}

var work = {
  "jobs": [
    {
      position : "English Teacher",
      employer : "Seoul Private School",
      years : "5",
      description : "Teach English to Students",
      location : "Seoul South Korea"
    },
    {
      position : "Data Specialist",
      employer : "Verizon wireless",
      years : "3",
      description : "Troubleshooting smartphones and braodband access cards",
      location : "Lincoln Nebraska"
    },
    {
      position : "Banquet Server",
      employer : "Hilton Hotels",
      years : "2",
      description : "Serving food and drink",
      location : "Cincinnatti OH"
    }
  ]
};

function locationizer(work_obj) {
  var locationArray = [];

  for (job in work_obj.jobs) {
    var newLocation = work_obj.jobs[job].location;
    locationArray.push(newLocation);
  }
  return locationArray;
}

var education = {
  "schools": [
    {
      "name": "Eckerd College",
      "city": "Saint Petersburg, FL, US",
      "degree": "BA",
      "major" : ["CompSci", "French"]
    },
    {
      "name": "Nova Southeastern University",
      "city": "Fort Lauderdale, FL, US",
      "degree": "Masters",
      "major" : ["CompSci"]
    }
  ]
}

var projects = {
  "projects": [
    {
      "title": "Sample Project 1",
      "dates": "2014",
      "description": "Who moved my cheese cheesy feet cauliflower cheese.Queso taleggio when the cheese come out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swill mozzarella cheese slices feta fromage frais airedale swiss cheescake.Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg.",
      "images": [
        "http://webresourcesdepot.com/wp-content/uploads/sprintapp.jpg"
      ]
    },
    {
      "title": "Sample Project 2",
      "dates": "2014",
      "description": "Who moved my cheese cheesy feet cauliflower cheese.Queso taleggio when the cheese come out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swill mozzarella cheese slices feta fromage frais airedale swiss cheescake.Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg.",
      "images": [
        "http://coenraets.org/blog/wp-content/uploads/2012/10/nodecellar2.gif"
      ]
    }
  ]
}

// projects.display = function() {
  for (project in projects.projects) {
    $("#projects").append(HTMLprojectStart);

    var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
    $(".project-entry:last").append(formattedTitle);

    var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
    $(".project-entry:last").append(formattedDates);

    var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
    $(".project-entry:last").append(formattedDescription);

    if (projects.projects[project].images.length > 0) {
      for (image in projects.projects[project].images) {
        var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
        $(".project-entry:last").append(formattedImage);
      }
    }
  }
// }


$("#main").append(work["position"]);
$("#main").append(education.name);

var formattedName = HTMLheaderName.replace("%data%", bio["name"]);
var formattedRole = HTMLheaderRole.replace("%data%", bio["role"]);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio["welcomeMessage"])
var formattedMobile = HTMLmobile.replace("%data%", bio["contacts"]["mobile"]);
var formattedEmail = HTMLemail.replace("%data%", bio["contacts"]["email"]);
var formattedTwitter = HTMLtwitter.replace("%data%", bio["contacts"]["twitter"]);
var formattedGithub = HTMLgithub.replace("%data%", bio["contacts"]["github"]);
var formattedLocation = HTMLlocation.replace("%data%", bio["contacts"]["location"]);
var formattedbioPic = HTMLbioPic.replace("%data%", bio["bioPic"]);

$("#main").append(formattedWelcomeMsg);
$("#main").append(formattedMobile);
$("#main").append(formattedEmail);
$("#main").append(formattedTwitter);
$("#main").append(formattedGithub);
$("#main").append(formattedLocation);
$("#main").append(formattedbioPic);

if(bio.skills.length > 0) {
  $("#header").append(HTMLskillsStart);
  for(var i = 0; i < bio.skills.length; i++) {
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
    $("#skills").append(formattedSkill);
  }
}

function displayWork() {
  for (job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);

    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].position);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;

    $(".work-entry:last").append(formattedEmployerTitle);

    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    $(".work-entry:last").append(formattedDates);

    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description)
    $(".work-entry:last").append(formattedDescription);
  }
}

$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x,y);
})

displayWork();

function inName(name) {
  name = name.trim().split(" ");
  console.log(name);
  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0,1).toUpperCase()
    name[0].slice(1).toLowerCase();

  return name[0] +" "+name[1];
}

$('#main').append(internationalizeButton)
$("#mapDiv").append(googleMap);
