
class Jobseeker {
	constructor(competences, video_link) {
		this.competences = competences;
		this.video_link = video_link;
	}
}

function readForm() {
	var video_tag = document.getElementById("video_url");
	if (video_tag == null) {
		return null;
	}
	var video_url = video_tag.value;

	var competences = [];
	for (var i = 0; i < 3; i++) {
		var comp = document.getElementById("comp" + i);
		if (comp != null) {
			console.log(comp);
			competences.push(comp.value);
		}
	}
	return new Jobseeker(competences, video_url);
}

var jobseekers = [];
var companies = [];

function submitForm() {

	// Read the form
	var jobseeker = readForm();
	if (jobseeker == null) {
		alert("Please enter a URL for the video.");
	} else {

		// Save the seeker
		jobseekers.push(jobseeker);

		// Show the completion page
		showSeeker(jobseekers.length - 1);
	}
}

function showSeeker(n) {
	var jobseeker = jobseekers[n];
	var newContent = "";
	newContent += "<div>";
	newContent += "<p class=\"competences\">";
		for (var i = 0; i < jobseeker.competences.length; i++) {
			newContent += jobseeker.competences[i] + "<br>";
		}
	newContent += "</p>";
	newContent += "<video controls id=\"vid\" width=\"1280px\" height=\"720px\" src=\"" + jobseeker.video_link + "\" autoplay repeat></video>";
	newContent += "</div>";
	document.getElementById("content").innerHTML = newContent;
}

function showSeekers() {
	var newContent = "";
	newContent += "<table><td><th>Video</th><th>Competence 1</th><th>Competence 2</th><th>Competence 3</th></td>";
	for (var i = 0; i < jobseekers.length; i++) {
		var seeker = jobseekers[i];
		newContent += "<tr>";
		newContent += "<form><input type=\"submit\" onclick=\"showSeeker(" + i + ");\" value=\"Show Video\"></form>";
		for (var j = 0; j < seeker.competences.length; j++) {
			newContent += "<td>" + seeker.competences[j] + "</td>";
		}
		newContent += "</tr>";
	}
	newContent += "</table>";
	document.getElementById("content").innerHTML = newContent;
}

function showForm() {
	document.getElementById("content").innerHTML = "<h1 id=\"heading\">Hello, job seeker!</h1> <h2>Please complete this form.</h2><h3>My video</h3> <input type=\"text\" id=\"video_url\"> <br> <h3>My competences</h3> <p>First: <input type=\"text\" id=\"comp0\"></p> <p>Second: <input type=\"text\" id=\"comp1\"></p> <p>Third: <input type=\"text\" id=\"comp2\"></p> <br> <input type=\"submit\" text=\"Submit!\" onclick=\"submitForm();\"></input>"
}

showForm();