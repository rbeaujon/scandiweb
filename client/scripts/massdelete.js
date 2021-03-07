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
            $('#results').html(data)
            location.reload();
          },
        data: list,
        dataType: 'text',
      })
}