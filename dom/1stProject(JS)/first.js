function timing() {
    const timer = document.getElementById('root');
    const time = new Date();
    const now = time.toLocaleTimeString();
    timer.innerHTML = now;

}
timing();
setInterval(timing,1000 ) ;
const timer = document.getElementById('root');
timer.style.display = "flex";
timer.style.justifyContent = "center";
timer.style.alignItems = "center";
timer.style.height = "100vh";
timer.style.fontSize = "200px";



