document.getElementById("logo").addEventListener("click", ()=>{
    disableThing()
})

disableThing = () => {
    let a = document.getElementsByTagName("ytd-page-manager")[0]
    a.style.display = 'none'

    interval = setInterval(
        () => {
            let browse = document.getElementsByTagName("ytd-rich-grid-renderer")[0]
            if (browse) {
                clearInterval(interval)
                browse.style.display = "none"
                a.style.display = "flex"
            }
        }
    , 100)
}

if (window.location.pathname == "/") {
    disableThing()
}






