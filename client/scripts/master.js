// Includes all js files for the APP
function include(file)
{

  var script  = document.createElement('script');
  script.src  = file;
  script.type = 'text/javascript';
  script.defer = true;

  document.getElementsByTagName('head').item(0).appendChild(script);

}

include('client/scripts/cancel.js');
include('client/scripts/validations.js');
include('client/scripts/switchAdd.js');