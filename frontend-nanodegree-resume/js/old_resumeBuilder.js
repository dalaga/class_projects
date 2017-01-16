var name = "David Lago Alaga";
var role = "Full Stack Develoer";
var formatttedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);
 $("#header").prepend(formattedRole);
 $("#header").prepend(formatttedName);


var skills = ["awesomeness", "programming", "teaching", "JS"];
/*$("#main").append(skills);*/
$("#main").append(skills[0]);
$("#main").append(skills.length);