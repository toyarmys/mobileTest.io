function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
  document.getElementById("openSpan").style.visibility = "hidden";
  document.getElementById("close").style.visibility = "visible";
}
function closeNav() {
  $(document).on('click', 'a', function(event){
    document.getElementById("mySidenav").style.width = "0";
    document.body.style.backgroundColor = "white";
    document.getElementById("openSpan").style.visibility = "visible";
    document.getElementById("close").style.visibility = "hidden";
  });
}