// $(document).ready(function ()
// {
  
//     //jQuery effects

    
//     $('.covid-info').hide(); 

//     $( "#covid-readMore" ).click(function() {
//         $( ".covid-info" ).toggle( "slow", function() {
          
//         });
//       });

//       $('#tech-latest').hide(); 
//       $('#techOpen').click(function () { 
//           $('#tech-latest').toggle("slow", function () {

//           });
//       });

//       $('#travel-latest').hide(); 
//       $('#travelOpen').click(function () { 
//           $('#travel-latest').toggle("slow", function () {

//           });
//       });

//       $('#science-latest').hide(); 
//       $('#scienceOpen').click(function () { 
//           $('#science-latest').toggle("slow", function () {

//           });
//       });

   


//          //Intro.js help button 

//      $("#help-button").on( "click", function() { //when the HELP button is clicked Intro.js and tour initiates 
//         introJs().start() });  

      



// });


// *** MINIFIED (Optimization)

$(document).ready(function(){$(".covid-info").hide(),$("#covid-readMore").click(function(){$(".covid-info").toggle("slow",function(){})}),$("#tech-latest").hide(),$("#techOpen").click(function(){$("#tech-latest").toggle("slow",function(){})}),$("#travel-latest").hide(),$("#travelOpen").click(function(){$("#travel-latest").toggle("slow",function(){})}),$("#science-latest").hide(),$("#scienceOpen").click(function(){$("#science-latest").toggle("slow",function(){})}),$("#help-button").on("click",function(){introJs().start()})});