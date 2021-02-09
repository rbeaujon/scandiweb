
function validations (val, x) {

  control = 0;

    if (x === ''){
        
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
