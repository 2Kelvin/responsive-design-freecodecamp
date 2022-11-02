window.onload = screen; // dispkays the size of the browser window once the page loads
window.onresize = screen; // changes the screen width displayed as you resize the browser window

function screen() {
  const windowWidth = window.innerWidth;
  document.getElementById("window_size").innerHTML = `Width: ${windowWidth}px`;
}
