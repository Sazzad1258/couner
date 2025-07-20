 $(document).ready(function(){
$( "#draggable" ).draggable();
$( "#accordion" ).accordion({collapsible:true});

var availableTags = [
      "html",
      "css",
      "css+",
      "java",
      "media",
      "C++",
    ];
    $( "#c_name" ).autocomplete({
      source: availableTags
    });
    $( "input" ).checkboxradio();
     $( ".controlgroup" ).controlgroup()
    $( ".controlgroup-vertical" ).controlgroup({
      "direction": "vertical"
    });
    $('.counter').counterUp({
    delay: 10,
    time: 1000
});
 });

