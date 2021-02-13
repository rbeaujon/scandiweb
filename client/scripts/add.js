// Change the view when click on ADD button

function add() {
  
    error = 1; 
  
    var y = document.getElementById("title"); //change title
    y.innerHTML = "Add Product";
   
    document.getElementById("form").className = "hidden";
    document.getElementById("formAdd").className = "show";
  
    var b1 = document.getElementById("add");
    b1.innerHTML = "SAVE";
    b1.setAttribute('onclick',  'save();');
  
    var b2 = document.getElementById("massDelete"); 
    b2.innerHTML = "CANCEL";
    b2.setAttribute('onclick',  'cancel();');
  
    document.getElementById("sku").focus();
  
    } // close add function