document.addEventListener("DOMContentLoaded", function() {

    var btn = document.getElementsByClassName("btn")[0];
    var cookie = document.getElementsByClassName("cookies")[0];
      btn.onclick = function(){
      cookie.style.visibility = "hidden";
    };
    var formbtn = document.getElementsByClassName("contact_btn")[0];
    var formVisibility = document.getElementById("form1");
    formbtn.onclick = function(){
      formVisibility.style.visibility = "visible";
      console.log("ok");
    };

    // var gridPanels = [
    //   document.querySelector(".A1"),
    //   document.querySelector(".B1"),
    //   document.querySelector(".C1"),
    //   document.querySelector(".D1"),
    //   document.querySelector(".A2"),
    //   document.querySelector(".B2"),
    //   document.querySelector(".C2"),
    //   document.querySelector(".D2"),
    //   document.querySelector(".A3"),
    //   document.querySelector(".B3"),
    //   document.querySelector(".C3"),
    //   document.querySelector(".D3")
    // ];
    // var grid = document.getElementsByClassName("grid-container")[0];
    // gridNumbers = ["1","2","3"];
    // gridTypes = ["A1", "B1", "C1", "D1", "A2", "B2", "C2", "D2","A3", "B3", "C3", "D3"];
    // gridClass =[]
    // for (var i = 0; i < gridTypes.length; i++){
    //   console.log(gridTypes.length);
    //   console.log(i);
    //   console.log(gridTypes[i]);
    //   console.log(gridTypes[3]);
    //     gridTypes[i].addEventListener('mouseover', function(e){
    //       rollUp(gridClass)
    //     });
    //
    // };
    // var grid = document.getElementById("slider")
    // for(var i=0; i<grid.length; i++){
    //     grid[i].addEventListener('mouseover', function(x){
    //       rollUp(grid[i]);
    //     });
    //   };
    //   function rollUp(grid) {
    //     grid.style.backgroundColor = 'lime';
    //     grid.style.height = '400'+ "px";
    //   };

//     for(i=0; i<gridPanels.length; i++){
//     gridPanels[i].onmouseover = function(event) {
//   let target = event.target;
//   target.style.zIndex = "4";
//   target.style.backgroundColor = 'lime';
//   target.style.height = '400'+ "px";
//   target.style.invert = "100%";
//   target.style.position = "sticky";
// };
//   gridPanels[i].onmouseout = function(event) {
//   let target = event.target;
//   target.style.zIndex = "0";
//   target.style.background = '';
//   target.style.height = '200'+ "px";
//   target.style.position = "sticky";
// };
// };

  });
