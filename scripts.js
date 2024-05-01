/* When the user clicks on the menuIcon change the grphic and 
toggle between hiding and showing the dropdown content */
function menuIcon(x) {
    x.classList.toggle("change");
    document.getElementById("myDropdown").classList.toggle("show");
  }

// Close the dropdown menu if the user clicks outside of it
// window.onclick = function(event) {
//   if (!event.target.matches('.menu.change')) {
//     var dropdowns = document.getElementsByClassName("dropdown-content");
//     var i;
//     for (i = 0; i < dropdowns.length; i++) {
//       var openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains('show')) {
//         openDropdown.classList.remove('show');
//       }
//     }
//   }
// }