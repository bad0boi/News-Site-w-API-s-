// $(document).ready(function() {

//     // Connect to API aka settings
//     function connectAPI() {
//         return $.ajax({
//             headers: {
//                 'X-Auth-Token': '6be1de5daba1462cae2e5297263f2aa0'
//             },
//             url: 'https://api.football-data.org/v2/competitions/PL/standings?standingType=HOME',
//             type: 'GET',
//             dataType: 'json'

//         }).always(function() {
//             console.log('Request has been sent to football API');
//         }).fail(function(jqxhr, textStatus, errorThrown) {
//             // window.alert("Error: " + textStatus + " : " + errorThrown);
//         });
//     }

//     connectAPI().done(function(data) {
//         getLeagueTable(data);
//     })

//     function getLeagueTable(data) {
//         data.standings.forEach(standing => {
//             console.log(standing);
//             standing.table.forEach(team => {
//                 $('#full-epl-table').append(`
//                 <tr>
//                     <td><img src="${team.team.crestUrl}" style="width: 40px; height: 40px;"></td>
//                     <td>${team.team.name}</td>
//                     <td>${team.won}</td>
//                     <td>${team.lost}</td>
//                     <td>${team.draw}</td>
//                     <td>${team.points}</td>
//                     <td>${team.position}</td>
//                 </tr>
//             `);
//             });
//         });
//     }

// });

// *** MINFIED (Optimization)

$(document).ready(function(){$.ajax({headers:{"X-Auth-Token":"6be1de5daba1462cae2e5297263f2aa0"},url:"https://api.football-data.org/v2/competitions/PL/standings?standingType=HOME",type:"GET",dataType:"json"}).always(function(){console.log("Request has been sent to football API")}).fail(function(t,n,a){}).done(function(t){!function(t){t.standings.forEach(t=>{console.log(t),t.table.forEach(t=>{$("#full-epl-table").append(`\n                <tr>\n                    <td><img src="${t.team.crestUrl}" style="width: 40px; height: 40px;"></td>\n                    <td>${t.team.name}</td>\n                    <td>${t.won}</td>\n                    <td>${t.lost}</td>\n                    <td>${t.draw}</td>\n                    <td>${t.points}</td>\n                    <td>${t.position}</td>\n                </tr>\n            `)})})}(t)})});
