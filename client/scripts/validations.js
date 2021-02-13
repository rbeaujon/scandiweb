function isValidSku(val) {

    !val || val.length === 0  || val === '' ? ( 

        $('#errorSKU').html('SKU is required and can\'t be empty!!')

    ) : ( 

    pattern = /[,.!@#$%^&*()_+/'\ \\;\]|"}{?><±§}]/g,  // Expresion regular to check the input text correctly
    result = pattern.test(val),

    result === true ? (
  
            $('#errorSKU').html('SKU must have only letters and numbers!')
       
    ) : (
        
            $('#errorSKU').html('')
        ) 

    )


}

function isValidName(val) {

    !val || val.length === 0  || val === '' ? ( 

        $('#errorName').html('Name is required and can\'t be empty!!')

    ) : ( 

    pattern = /[0-9,.!@#$%^&*()_+/'\\;\]|"}{?><±§}]/g,  // regular Exp to check the input text only letters
    result = pattern.test(val),
    
    result === true ? (
      
            $('#errorName').html('Name must have only letters!')
            
    ) : (

            $('#errorName').html('')
        ) 
    )    
}     
   
function isValidPrice(val){

    !val || val.length === 0  || val === '' ? ( 

        $('#errorPrice').html('Price is required and can\'t be empty!!')

    ) : (  
        
    pattern = /[A-z !@#$%^&*()_+/'\\;\]|"}{?><±§},]/g,  // regular Exp to check the input text only numbers
    result = pattern.test(val),
    
    result === true ? (
      
            $('#errorPrice').html('Price must have only integer numbers or decimals XXX.XX!')

    ) : (

            $('#errorPrice').html('')
        )  
    )    
}  
 
function isValidSwitch(val){
        
    val === "" || !val  ||  val.length === 0 ? (

            $('#errorSwitch').html('You must select one!!')

             ) : ( 
     
            $('#errorSwitch').html(''),
            document.getElementById("errorDVD").className = "hidden",
            document.getElementById("errorBook").className = "hidden",
            document.getElementById("errorFurniture").className = "hidden"
         
    )
   
    
    val === "dvd" ? (

            document.getElementById('dvd').className = "show",
            document.getElementById('dvdSize').className = "show",
            document.getElementById('book').className = "hidden",
            document.getElementById('bookKg').className = "hidden",
            document.getElementById('furniture').className = "hidden",
            document.getElementById('furnitureSize').className = "hidden",
            document.getElementById("dvdMB").focus(),
            document.getElementById("errorDVD").className = "errorMSG"
    
            ) : (      
    
    val === "book" ? ( 

            document.getElementById('dvd').className = "hidden",
            document.getElementById('dvdSize').className = "hidden",
            document.getElementById('book').className = "show",
            document.getElementById('bookKg').className = "show",
            document.getElementById('furniture').className = "hidden",
            document.getElementById('furnitureSize').className = "hidden",
            document.getElementById("bookKg").focus(),
            document.getElementById("errorBook").className = "errorMSG"
        
        
             ) : (  
            
        
    val === "furniture" ? (     
        
                        document.getElementById('dvd').className = "hidden",
                        document.getElementById('dvdSize').className = "hidden",
                        document.getElementById('book').className = "hidden",
                        document.getElementById('bookKg').className = "hidden",
                        document.getElementById('furniture').className = "show",
                        document.getElementById('furnitureSize').className = "show",
                        document.getElementById("furnitureSize").focus(),
                        document.getElementById("errorFurniture").className = "errorMSG"

                ) : (
               
                        console.log('TEST')
                )
        )  
    )    

      document.getElementById('containerSwitch').className = "containerSwitch";
}

function isValidDVD(val){

    !val || val.length === 0  || val === '' ? ( 

        $('#errorDVD').html('DVD is required and can\'t be empty!!')

    ) : ( 

    pattern = /[A-z !@#$%^&*()_+/'\\;\]|"}{?><±§,}]/g,  // regular Exp to check the input text only numbers
    result = pattern.test(val),

    result === true ? (
  
        $('#errorDVD').html('DVD must have only integer numbers or decimals XXX.XX!'),
        document.getElementById('errorDVD').className = "errorMSG"
    
    ) : ( 

        $('#errorDVD').html('')
    )
    )
}

function isValidBook(val){

    !val || val.length === 0  || val === '' ? ( 

        $('#errorBook').html('Book is required and can\'t be empty!!')

    ) : ( 

    pattern = /[A-z !@#$%^&*()_+/'\\;\]|"}{?><±§,}]/g,  // regular Exp to check the input text only numbers
    result = pattern.test(val),

  
    result === true ? (
  
        $('#errorBook').html('Book must have only integer numbers or decimals XXX.XX!'),
        document.getElementById('errorBook').className = "errorMSG"
    
    ) : ( 

        $('#errorBook').html('')
    )
    )
}

function isValidFurniture(val){

    !val || val.length === 0  || val === '' ? ( 

        $('#errorFurniture').html('Furniture is required and can\'t be empty!!')

    ) : ( 

    pattern = /[A-z !@#$%^&*()_+/'\\;\]|"}{?><±§},]/g,  // regular Exp to check the input text only numbers
    result = pattern.test(val),
  
    result === true ? (
  
        $('#errorFurniture').html('Furniture must have only integer numbers or decimals XXX.XX!'),
        document.getElementById('errorFurniture').className = "errorMSG"
    
    ) : (

        $('#errorFurniture').html('')
    )
    )
}