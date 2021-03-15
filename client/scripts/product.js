// Show all the registred products
function showProduct(){

    $.ajax({
        url: "server/api/product.php",
        type: "GET", 
        success: function(data) {

            var form = document.getElementById("form");
            var container = document.createElement("container");
            container.id = "container";
            container.className = "container"
            form.appendChild(container);
               
            Object.values(data).forEach(val => {
      
                var divID = document.createElement("div");
                divID.className = "product";
                divID.id = val.id;
                container.appendChild(divID);

                var checkmark = document.createElement("input");
                checkmark.className = "checkmark";
                checkmark.id = val.id;
                checkmark.type = "checkbox"
                divID.appendChild(checkmark);

                var divSpec = document.createElement("div");
                divSpec.className = "specifications";
                divID.appendChild(divSpec);

                var ul = document.createElement("ul");
                divSpec.appendChild(ul);

                var psku = document.createElement("p");
                psku.innerHTML="<strong>"+ val.sku + "</strong>";
                ul.appendChild(psku);
                
                var pname = document.createElement("p");
                pname.innerHTML="<strong>"+ val.name + "</strong>";
                ul.appendChild(pname);
                
                var pprice = document.createElement("p");
                pprice.innerHTML="<strong>"+ val.price + "</strong>";
                ul.appendChild(pprice);

                var pspec = document.createElement("p");
                pspec.innerHTML="<strong>"+ val.spec + "</strong>";
                 ul.appendChild(pspec);
    
               
                



               
              });
                
        },
        error: function(error) {
          //Do Something to handle error
          alert("error receiving the data from Server ");
        },
        dataType: 'json',
      });
}
// Change the view to form Add and prepare the conoditions to save the new product
function add() {
  
    error = 1; 
  
    var y = document.getElementById("title"); //change title
    y.innerHTML = "Add Product";
   
    document.getElementById("form").className = "hidden";
    document.getElementById("formAdd").className = "show";
  
    var b1 = document.getElementById("add");
    b1.innerHTML = "SAVE";
    b1.setAttribute('onclick',  'prepareData();');
  
    var b2 = document.getElementById("massDelete"); 
    b2.innerHTML = "CANCEL";
    b2.setAttribute('onclick',  'cancel();');
  
    document.getElementById("sku").focus();
}  
//Save the new product in DB after to pass for client validations    
function save(x) {  
  
      $formData = x;

      $.post('server/api/product.php',$formData,
        (data) => {
          $('#results').html(data)
          
          var container = document.getElementById("container");
          container.remove();
         
          document.getElementById("formAdd").className = "hidden";
          document.getElementById("form").className = "show";
         
          var b1 = document.getElementById("add");
          b1.innerHTML = "ADD";
          b1.setAttribute('onclick',  'add();');  
          var b2 = document.getElementById("massDelete"); 
          b2.innerHTML = "MASS DELETE";
          b2.setAttribute('onclick',  'massdelete();');
          showProduct();
          
        })
} 
// Delete product by id from DB when it's clicked in the UI  
function massdelete(){

    var list = "";
    $('input[type=checkbox]').each(function () {
      
      if(this.checked === true) {
        list +=  $(this).attr("id") + ",";
      }
    });
       list = list.substring(0,list.length - 1);
    
      $.ajax({
        url: 'server/api/product.php',
        type: 'delete',
        success: (data) => {
          $('#results').html(data);
            /* it select every item from the var list and call the function deleteID */ 
            delObject = list.split(',');
            Object.keys(delObject).forEach(function (id){
              /* delete every item from DOM coming from var list */ 
              document.getElementById(delObject[id]).remove();
            });
          },
        data: list,
        dataType: 'text',
      })
}