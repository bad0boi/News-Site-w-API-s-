$(document).ready(function ()
{
  
    //jQuery effects

    
    $('.covid-info').hide(); 

    $( "#covid-readMore" ).click(function() {
        $( ".covid-info" ).toggle( "slow", function() {
          
        });
      });

      $('#tech-latest').hide(); 
      $('#techOpen').click(function () { 
          $('#tech-latest').toggle("slow", function () {

          });
      });




});