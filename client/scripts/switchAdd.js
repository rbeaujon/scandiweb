function switchAdd() { // conditional switch in add

    var a = document.getElementById('switch');
   
    // Delete switchAdd errors
    document.getElementById("errorDVD").className = "hidden"; 
    document.getElementById("errorBook").className = "hidden";
    document.getElementById("errorFurniture").className = "hidden";
   
    
    if (a.value == "dvd"){
       document.getElementById('dvd').className = "show";
       document.getElementById('dvdSize').className = "show";
       document.getElementById('book').className = "hidden";
       document.getElementById('bookKg').className = "hidden";
       document.getElementById('furniture').className = "hidden";
       document.getElementById('furnitureSize').className = "hidden";
       document.getElementById("dvdMB").focus();
     }    
     
     if (a.value == "book"){
      document.getElementById('dvd').className = "hidden";
      document.getElementById('dvdSize').className = "hidden";
      document.getElementById('book').className = "show";
      document.getElementById('bookKg').className = "show";
      document.getElementById('furniture').className = "hidden";
      document.getElementById('furnitureSize').className = "hidden";
      document.getElementById("bookKg").focus();
     }   
  
    if (a.value == "furniture"){
      document.getElementById('dvd').className = "hidden";
      document.getElementById('dvdSize').className = "hidden";
      document.getElementById('book').className = "hidden";
      document.getElementById('bookKg').className = "hidden";
      document.getElementById('furniture').className = "show";
      document.getElementById('furnitureSize').className = "show";
      document.getElementById("furnitureSize").focus();
    }   
  
     document.getElementById('containerSwitch').className = "containerSwitch";
    
  } // close switchAdd function
  