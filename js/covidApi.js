$(document).ready(function ()
{
    $.getJSON("https://coronavirus-19-api.herokuapp.com/countries/UK",
        function(data) { // (data) inside function will determine name for detecting api input.

            console.log(data);

            var country = data.country;
            var cases = data.cases;
            var deaths = data.deaths;
            var critical = data.critical;

            $('#covid').append(country);
            $('#covidDeaths').append(deaths);
            $('#covidCritical').append(critical);


        });

    //Worldwide Statistics

    $.getJSON("https://coronavirus-19-api.herokuapp.com/all",
    function(data) { // (data) inside function will determine name for detecting api input.

        console.log(data);

        var cases = data.cases;
        var deaths = data.deaths;
        var recovered = data.recovered; 

        $('.covid-cases').append(cases); 
        $('.covid-deaths').append(deaths); 
        $('.covid-recovered').append(recovered); 


    });






});
