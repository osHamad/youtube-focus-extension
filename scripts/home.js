// Create loading screen body
var a = document.createElement("body");

var loadScreen = document.createElement("body");
loadScreen.id = "loading-screen"

// Create loading screen div
var loadDiv = document.createElement("div");
loadDiv.style.width = "100%"
loadDiv.style.height = "100%"
loadDiv.style.backgroundColor = "rgb(15, 15, 15)"
loadDiv.id = "abc"

// var button = document.createElement("button")
function func() {
  let searchQuery = document.getElementById('search-bar').value
  if (searchQuery.trim().length != 0) {
    window.location = 'https://www.youtube.com/results?search_query='+searchQuery
  }
  
}
// button.innerHTML = "hello me"
// button.onclick = func;


// loadDiv.appendChild(button)

var span = document.createElement('span')

fetch('chrome-extension://hblkdjdhnpjinkpjgbihdkpeofdlfeak/scripts/test.html').then(function (response) {
	// The API call was successful!
	return response.text();
}).then(function (html) {
	// This is the HTML from our response as a text string

	span.innerHTML = html
  document.getElementById("search-button-123123").onclick = func
}).catch(function (err) {
	// There was an error
	console.warn('Something went wrong.', err);
});



loadDiv.appendChild(span)


loadDiv.style.position = "fixed"
loadDiv.style.zIndex = "100000"

// Add load div to the body container
loadScreen.appendChild(loadDiv);


// Set up html page for loader
var htmlPage = document.getElementsByTagName("html")[0]
htmlPage.style.height = "100%"  // make height 100 to inherit loader
htmlPage.style.fontSize = null
htmlPage.style.fontFamily = null
htmlPage.appendChild(a)
htmlPage.appendChild(loadScreen);   // add load body to html page
htmlPage.style.overflow = "hidden"





