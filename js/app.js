/*Use the Document Object Model (DOM) to complete the following exercises below:*/

/*1. Replace the n/a with the following:

Tay-Tay*/

document.getElementById("name1").innerHTML = "Tay-Tay";

/*2. Replace the n/a with the following: 

Project Manager*/

document.getElementById("position2").innerHTML = "Project Manager";

/*3. Replace the n/a with the following:

Concatenation*/

document.getElementById("alias3").innerHTML = "Concatenation";

/*4. Replace the n/a for Snoop with the gangsta lorem ipsum*/

document.getElementsByClassName("profile")[0].innerHTML = "Lorem ipsum dolizzle boofron bizzle, consectetizzle adipiscing elit. Nullizzle sapien velizzle, funky fresh volutpizzle, shizzlin dizzle crunk, gravida vizzle, its fo rizzle. Pellentesque break yo neck, yall tortizzle. Dang erizzle. The bizzle izzle dolor dapibus turpis tellivizzle my shizz. Maurizzle pellentesque nibh et turpizzle. Pimpin' izzle tortizzle. Pellentesque eleifend bow wow wow boofron. In crackalackin shizzlin dizzle platea dictumst. Yo mamma my shizz. Gangster fo shizzle urna, pretium crackalackin, mattizzle izzle, eleifend vitae, nunc. Boofron suscipizzle. Cool sempizzle velit sed purizzle.";

/*5. Relace the n/a for Samuel L Jackson with his lorem ipsum*/

document.getElementsByClassName("profile")[2].innerHTML = "Now that there is the Tec-9, a crappy spray gun from South Miami. This gun is advertised as the most popular gun in American crime. Do you believe that shit? It actually says that in the little book that comes with it: the most popular gun in American crime. Like they're actually proud of that shit.";

/*6. Create a div element for Chuck Norris and give it an id of "name7". Inside this div element, give it the contents of "Chuck Norris".

Append this div element to the nameBox div*/

var name7 = document.createElement("div");
name7.id = "name7";
name7.innerHTML = "Chuck Norris";
nameBox.appendChild(name7);
 

/*7. Create a div element for Grimmace and give it an id of "alias8". Inside this div element, give it the contents of "The Purple Monster".

Append this div element to the aliasBox div.*/

var alias8 = document.createElement("div");
alias8.id = "alias8";
alias8.innerHTML = "The Purple Monster";
aliasBox.appendChild(alias8);



//Final Boss
/*8. Create your own profile.*/


var profile = document.getElementsByClassName("block3 col-sm-4")[2];


var profileName = document.createElement("div");
profileName.className = "name";
profileName.innerHTML = "Souzooka";

profile.appendChild(profileName);

var profilePosition = document.createElement("div");
profilePosition.className = "position";
profilePosition.innerHTML = "JavaScript";

profile.appendChild(profilePosition);

var profileAlias = document.createElement("div");
profileAlias.className = "alias";
profileAlias.innerHTML = "Chief";

profile.appendChild(profileAlias);

var profileBio = document.createElement("div");
profileBio.className = "profile";
profileBio.innerHTML = "Yo Allan please add a description here.";

profile.appendChild(profileBio);



