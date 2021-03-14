// Function for cancel the creating product and return to the principal form
function cancel() {   
  document.getElementById("form").className = "show";
  document.getElementById("formAdd").className = "hidden";
  var b1 = document.getElementById("add");
  b1.innerHTML = "ADD";
  b1.setAttribute('onclick',  'add();');  
  var b2 = document.getElementById("massDelete"); 
  b2.innerHTML = "MASS DELETE";
  b2.setAttribute('onclick',  'massdelete();');
}