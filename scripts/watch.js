createLoadScreen = () => {
    // Create loading screen body
    var loadScreen = document.createElement("body");
    loadScreen.id = "loading-screen"
    
    // Create loading screen div
    var loadDiv = document.createElement("div");
    loadDiv.style.width = "100%"
    loadDiv.style.height = "100%"
    loadDiv.style.backgroundColor = "rgb(15, 15, 15)"
    
    loadDiv.style.position = "fixed"
    loadDiv.style.zIndex = "100000"
    
    // Add load div to the body container
    loadScreen.appendChild(loadDiv);

    // Set up html page for loader
    var htmlPage = document.getElementsByTagName("html")[0]
    htmlPage.style.height = "100%"  // make height 100 to inherit loader
    htmlPage.appendChild(loadScreen);   // add load body to html page
}

createLoadScreen()

    let interval = setInterval(
        () => {
            let sidePanel = document.getElementById('secondary-inner')
            if (sidePanel) {
                clearInterval(interval)
                sidePanel.remove()
                document.getElementById("loading-screen").remove()

            }
        }
    , 500)

