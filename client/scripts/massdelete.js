function massdelete(){

    var list = "";
    $('input[type=checkbox]').each(function () {
      
      if(this.checked === true) {
        list +=  $(this).attr("id") + ",";
      }
    });
       list = list.substring(0,list.length - 1);
    console.log (list);


    // Makes that JQUERY use delete method

    $.delete = function(url, data, callback, type){

      if ( $.isFunction(data) ){
        type = type || callback,
        callback = data,
        data = {}
      }
    
      return $.ajax({
        url: url,
        type: 'delete',
        success: callback,
        data: data,
        contentType: type
      });
    }

    $.delete('server/api/product.php',{itemsToDelete: list}, 
    (data) => {
      $('#results').html(data);
      //location.reload();
    });



 
}