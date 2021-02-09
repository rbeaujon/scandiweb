function save() {  

    var sku = document.getElementById("sku").value;
    var name = document.getElementById("name").value;
    var price = document.getElementById("price").value;
    var myswitch = document.getElementById("switch").value;
    var $formData = ""; 
    
      if(myswitch === ""){
        control = 1;
      }  

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
        $('#errorGeneral').html('THERE ARE EMPTY FIELDS OR SOME DATA IS INVALID, CHECK AND TRY AGAIN!!');
      }
  
  } 