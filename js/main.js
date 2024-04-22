const isDarkMode = () =>
    window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches

if (isDarkMode()) {
    // add dark class to body
    var body = document.body
    body.classList.add("dark")
}