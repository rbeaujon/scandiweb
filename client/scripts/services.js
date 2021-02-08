
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

function validations (val, x) {

  control = 0;
  
    if (x === 'SKU'){
     
        pattern = /[,.!@#$%^&*()_+/'\\;\]|"}{?><±§}]/g;  // Expresion regular to check the input text correctly
        result = pattern.test(val);
      
        if (result === true){
      
            $('#errorSKU').html(x + ' must have only letters and numbers!');
            control = 1;
        }

        if (!val && val.length === 0) {

            $('#errorSKU').html('is required and can\'t be empty!!');
            control = 1;
          
        }

        if (control == 0) {
        $('#errorSKU').html('');
        }

    }

    if (x === 'Name'){
        
        pattern = /[0-9,.!@#$%^&*()_+/'\\;\]|"}{?><±§}]/g;  // regular Exp to check the input text only letters
        result = pattern.test(val);
      
        if (result === true){
      
            $('#errorName').html(x + ' must have only letters!');
            control = 1;
        }

        if (!val && val.length === 0) {

            $('#errorName').html('is required and can\'t be empty!!');
            control = 1;
          
        }
        if (control == 0) {
        $('#errorName').html('');
        }
    }
      
    if (x === 'Price'){
        
        pattern = /[A-z !@#$%^&*()_+/'\\;\]|"}{?><±§},]/g;  // regular Exp to check the input text only numbers
        result = pattern.test(val);
      
        if (result === true){
      
            $('#errorPrice').html(x + ' must have only integer numbers or decimals XXX.XX!');
            control = 1;
        }

        if (!val && val.length === 0) {

            $('#errorPrice').html('is required and can\'t be empty!!');
            control = 1;
          
        }
        if (control == 0) {
        $('#errorPrice').html('');
        }
    }

    if (x === 'Switch'){
        
        if (!val && val.length === 0) {

              $('#errorSwitch').html(val + 'is required!!');
              control = 1; 
        }
        else {
        $('#errorSwitch').html('');
        document.getElementById("errorDVD").className = "hidden";
        document.getElementById("errorBook").className = "hidden";
        document.getElementById("errorFurniture").className = "hidden";
        control =  0;
        }
    }

    if (x === 'dvd'){
        
        pattern = /[A-z !@#$%^&*()_+/'\\;\]|"}{?><±§,}]/g;  // regular Exp to check the input text only numbers
        result = pattern.test(val);
        id_error = 'errorDVD';
        errorfield = '#errorDVD';
      
        if (result === true){
      
            $(errorfield).html(x + ' must have only integer numbers or decimals XXX.XX!');
            document.getElementById(id_error).className = "errorMSG";
            control = 1;
        }

        if (!val && val.length === 0) {

            $(errorfield).html('is required and can\'t be empty!!');
            document.getElementById(id_error).className = "errorMSG";
            control = 1;
          
        }
        if (control == 0) {
        $(errorfield).html('');
        }

    }
  
    if (x === 'book'){
        
        pattern = /[A-z !@#$%^&*()_+/'\\;\]|"}{?><±§,}]/g;  // regular Exp to check the input text only numbers
        result = pattern.test(val);
        id_error = 'errorBook';
        errorfield = '#errorBook';
      
        if (result === true){
      
            $(errorfield).html(x + ' must have only integer numbers or decimals XXX.XX!');
            document.getElementById(id_error).className = "errorMSG";
            control = 1;
        }

        if (!val && val.length === 0) {

            $(errorfield).html('is required and can\'t be empty!!');
            document.getElementById(id_error).className = "errorMSG";
            control = 1;
          
        }
        if (control == 0) {
        $(errorfield).html('');
        }
    }  

    if (x === 'height' || x === 'width' || x === 'lenght'){

        pattern = /[A-z !@#$%^&*()_+/'\\;\]|"}{?><±§},]/g;  // regular Exp to check the input text only numbers
        result = pattern.test(val);
        id_error = 'errorFurniture';
        errorfield = '#errorFurniture';
      
        if (result === true){
      
            $(errorfield).html(x + ' must have only integer numbers or decimals XXX.XX!');
            document.getElementById(id_error).className = "errorMSG";
            control = 1;
        }

        if (!val && val.length === 0) {

            $(errorfield).html('is required and can\'t be empty!!');
            document.getElementById(id_error).className = "errorMSG";
            control = 1;
          
        }
        if (control == 0) {
        $(errorfield).html('');
        }
    }
  }

function save() {  

  var sku = document.getElementById("sku").value;
  var name = document.getElementById("name").value;
  var price = document.getElementById("price").value;
  var myswitch = document.getElementById("switch").value;
  var $formData = ""; 
  
    if(myswitch === "dvd"){
      var dvdMB = document.getElementById('dvdMB').value;
      $formData =  {sku, name, price, myswitch, dvdMB};
    }
    if(myswitch === "book"){
      var bookW = document.getElementById('bookW').value;
      $formData =  { sku, name, price, myswitch,bookW};
    }
    if(myswitch === "furniture"){
      var height = document.getElementById('height').value;
      var width = document.getElementById('width').value;
      var lenght = document.getElementById('lenght').value;
      $formData =  { sku, name, price, myswitch, height, width, lenght};
    }

    if(control == 0){

      $.post('server/services/submit.php',$formData,
      (data) => {
        $('#results').html(data);
        location.reload();
      });
    } else {
      $('#errorGeneral').html('THERE IS EMPTY FIELDS OR SOME DATA IS INVALID, CHECK AND TRY AGAIN!!');
    }

} 

function cancel() {   // Function for cancel button in Add Products
    location.reload();
  }

function massdelete(){

    var list = "";
    $('input[type=checkbox]').each(function () {
      
      if(this.checked === true) {
        list +=  $(this).attr("id") + ",";
      }
    });
       list = list.substring(0,list.length - 1);
    console.log (list);

    $.post('server/services/massDelete.php',{itemsToDelete: list},
    (data) => {
      $('#results').html(data);
      location.reload();
    });



 
}

function add() {
  
  control = 1; 

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
