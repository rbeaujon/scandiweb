function save() {  
  
    var sku = document.getElementById("sku").value;
    var name = document.getElementById("name").value;
    var price = document.getElementById("price").value;
    var myswitch = document.getElementById("switch").value;

    var $formData = ""; 

    var errorSKU = $('#errorSKU').text();
    var errorName = $('#errorName').text();
    var errorPrice = $('#errorPrice').text();
    var errorSwitch = $('#errorSwitch').text();
    var errorDVD = $('#errorDVD').text();
    var errorBook = $('#errorBook').text();
    var errorFurniture = $('#errorFurniture').text()

    isValidSku(sku);
    isValidName(name);
    isValidPrice(price);
    isValidSwitch(myswitch);
    


    errorSKU === "" && errorName === "" && errorPrice === "" && errorSwitch === "" ? (

        error = 0

        ) : (

        error = 1
    )

    myswitch === "dvd"  ? (

        dvdMB = document.getElementById('dvdMB').value,
        isValidDVD(dvdMB)

        ) : (

          error = 1

        )

    myswitch === "dvd"  &&  errorDVD === "" ? (    

        $formData =  {sku, name, price, myswitch, dvdMB},
        error = 0

        ) : ( 
      
        error = 1
            
    )
    


    myswitch === "book"  ? (

      bookW = document.getElementById('bookW').value,
      isValidBook(bookW)

      ) : (

        error = 1

      )

    myswitch === "book"  &&  errorBook === "" ? (    

      $formData =  { sku, name, price, myswitch,bookW},
      error = 0

      ) : ( 
    
      error = 1
          
  )



  myswitch === "furniture"  ? (

        height = document.getElementById('height').value,
        width = document.getElementById('width').value,
        lenght = document.getElementById('lenght').value,
        isValidFurniture(height),
        isValidFurniture(width),
        isValidFurniture(lenght)

    ) : (

      error = 1

    )

  myswitch === "furniture"  &&  errorFurniture === "" && height != "" && width != "" && lenght != ""  ? (    

  
        $formData =  { sku, name, price, myswitch, height, width, lenght},
        error = 0

    ) : ( 
  
    error = 1
        
)
     
    error === 0 ? (       
        
      $.post('server/services/submit.php',$formData,
        (data) => {
          $('#results').html(data)
          location.reload()
        }
      ) 
   
      ) : ( 

      console.log('OTROS ERRORES')

    ) 
  
  } 