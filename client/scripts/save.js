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

        error = 1

        ) : (

        error = 1
    )

    myswitch === "dvd"  ? (

        dvdMB = document.getElementById('dvdMB').value,
        isValidDVD(dvdMB)

        ) : (

          console.log()

        )

    myswitch === "dvd"  &&  errorDVD === "" && dvdMB != "" ? (    

        $formData =  {sku, name, price, myswitch, dvdMB},
        error = 0

        ) : ( 
      
        console.log()
            
    )
    


    myswitch === "book"  ? (

      bookW = document.getElementById('bookW').value,
      isValidBook(bookW)

      ) : (

        console.log()

      )

    myswitch === "book"  &&  errorBook === "" && bookW != "" ? (    

      $formData =  {sku, name, price, myswitch,bookW},
      error = 0

      ) : ( 
    
        console.log()
          
  )



  myswitch === "furniture"  ? (

        height = document.getElementById('height').value,
        width = document.getElementById('width').value,
        lenght = document.getElementById('lenght').value,
        isValidFurniture(height),
        isValidFurniture(width),
        isValidFurniture(lenght)

    ) : (

      console.log()

    )

  myswitch === "furniture"  &&  errorFurniture === "" && height != "" && width != "" && lenght != ""  ? (    

  
        $formData =  { sku, name, price, myswitch, height, width, lenght},
        error = 0

    ) : ( 
  
      console.log()
        
)
console.log('E5: ' + error)
    error === 0 ? (       
        
      $.post('server/api/product.php',$formData,
        (data) => {
          $('#results').html(data)
          location.reload()
        }
      ) 
   
      ) : ( 

      console.log()

    ) 
  
  } 