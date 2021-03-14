<html>
    <title>Scandiweb Test </title>
<head>
    <script src="client/scripts/master.js" type="text/javascript"></script>
    <script src="https://code.jquery.com/jquery-latest.js"></script>
    <link href="client/styles/main.css" rel="stylesheet" type="text/css"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>

<body>
  
  
  <?php include 'client/views/menu.html'; ?>

  <div class="line"></div> <!--  line -->
 
  <div id="formAdd" class = "hidden">
      <?php include 'client/views/add.html'; ?>
  </div>

  <div id="form" class = "show">
      <?php include 'client/views/form.html'; ?>
  </div>
  
  <div id="results" class="error itemsAdd"> </div>
  <div class="footer"><br> Scandiweb Test Assignment</div> <!-- Create a divide line -->

</body>
</html>