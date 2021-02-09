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