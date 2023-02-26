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

minimizeSideBar = () => {
    let sidebar = document.getElementsByTagName("tp-yt-app-drawer")[0]
    sidebar.style.display = 'none'
    document.getElementById("guide-button").style.display = 'none'

    let mini = document.getElementsByTagName("ytd-mini-guide-renderer")[0]
    mini.removeAttribute('hidden')
    mini.removeAttribute('disable-upgrade')
    mini.removeAttribute('guide-persistent-and-visible')
    mini.setAttribute('mini-guide-visible', 'mini-guide-visible')
}

hideHomePage = () => {

    createLoadScreen()

    let interval = setInterval(
        () => {
            let browse = document.getElementsByTagName("ytd-rich-grid-renderer")[0]
            if (browse) {
                clearInterval(interval)
                browse.style.display = "none"
                document.getElementById("loading-screen").remove()
                document.getElementById("logo").addEventListener("click", ()=>{
                    hideHomePage()
                })
                minimizeSideBar()

            }
        }
    , 500)

}



if (window.location.pathname == "/") {
    hideHomePage()
}



