var a = 15
	b = -2
	c = 22
	d = 0 
	e = 13

if (a>b && a>b && a>c && a>d && a>e){
	console.log ("The largest number is " + 15);
}
else if (b>a && b>c && b>d && b>e){
	console.log ("The largest number is " + -2);
}
else if (c>a && c>b && c>d && c>e){
	console.log ("The largest number is " + 22);
}
else if (d>a && d>b && d>c && d>e){
	console.log ("The largest number is " +0);
}
else if (e>a && e>b && e>c && e>d) {
	console.log ("The largest number is " + 13);
}


var a = 3
	b = -7
	c = 2
if (a>b && a>c){
	console.log ("+")
}
else if(b>a && b>c){
	console.log ("+")
}
else if(c>a && c>b){
	console.log ("+")
}

var language = "en"
switch (language){
	case "fr": 
	console.log("Bonjour tout le monde")
	break;
	case"rus":
	console.log("Privjet mir")
	break;
	case "en":
	console.log("Hello world")
	break;
	case"it":
	console.log("Ciao mondo")
	case"po":
	console.log("Ola mundo")
	default :
	console.log("Unknown")
}
 var userAge = 30;
 	userAge>=28 ? console.log("User is older than 28"):  console.log ("User is 28")
 var a = 30
 	 b = 28
 if (a<b){
 	console.log("User is less than 28 years old")
 }
 else if(a>b){
 	console.log("User is older than 28")
 }