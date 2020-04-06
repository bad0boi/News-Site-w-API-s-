$(document).ready(function()

{ 

  var users = $('#users');

  $.ajax(
    { 
      type:"GET",
      dataType: "json",
      cache:false, 
      url: "https://api.github.com/users",
      success:function(data) 
      { 
        for (i=0; i<10; i++)
        {   
          console.log(data[i].login);

          // ES6 String Templates
          users.append(`
          <a href="${data[i].url}">
          <div class="user">
            <div class="user-image">
            <span class="username">
              ${data[i].login}
            </span>
              <img src="${data[i].avatar_url}"/>
            </div>
          </div>
        </a>
          `);

          // $('#news').append("<div><a target='_blank' href='" + data.response.results[i].webUrl + "'>" + "<h2>" + data.response.results[i].webTitle + "</h2></a><br><img src='" 
          //   + data.response.results[i].fields.thumbnail+ "'</img><p>"+data.response.results[i].fields.body + "</p></div>"); 
        }
      }
    }
  )

}); 
