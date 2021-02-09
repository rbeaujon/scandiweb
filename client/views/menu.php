<?PHP

include 'server/session.php';

?>


<html>
    <title>Scandiweb Test </title>
<head>
    <script src="client/scripts/master.js" type="text/javascript"></script>
    <script src="https://code.jquery.com/jquery-latest.js"></script>
    <link href="client/styles/main.css" rel="stylesheet" type="text/css"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>

<body>
    <div id="title" class="title title2">Product List </div>
      
      <div class="title">
          <button type="button" id="add" onclick="add()" class="button add"> ADD </button>
          <button type="button" id="massDelete" onclick="massdelete()" class="button delete"> MASS DELETE </button>
      </div>  
