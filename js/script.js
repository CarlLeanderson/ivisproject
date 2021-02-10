var g;
var steamfriends;
var ownedgames;
var apps;


function getfriendsList()
{

   var resolveid = "https://api.steampowered.com/ISteamUser/GetFriendList/v1/?key=69256AC003F1E062A5ED811C8ABBC63B&steamid=" + document.getElementById("steamid").value;
   let promise = fetch(resolveid,{mode:'cors'})

   promise 
  .then(response => response.json())
  .then(post=> steamfriends = post.friendslist.friends),console.log(steamfriends);
getfriendsGames(steamfriends[1].steamid)
}


function getID()
{

    var resolveid = "https://api.steampowered.com/ISteamUser/ResolveVanityURL/v1/?key=69256AC003F1E062A5ED811C8ABBC63B&vanityurl=" + document.getElementById("steamid").value;
    let promise = fetch(resolveid,{mode:'cors'})

    promise 
   .then(response => response.json())
   .then(post => document.getElementById("returnId").innerHTML = "Your steam id is: "+ post.response.steamid);

}

function getName()
{

    var resolveid = "https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v2/?key=69256AC003F1E062A5ED811C8ABBC63B&steamids=" + document.getElementById("steamid").value;
    let promise = fetch(resolveid,{mode:'cors'})

    promise 
   .then(response => response.json())
   .then(post => g = post), document.getElementById("returnId").innerHTML = "Your real name is  "+ g.response.players[0].personaname;
   console.log(g);
getGames();

}


function getfriendsGames(steamid)
{

  var resolveid = "https://api.steampowered.com/IPlayerService/GetOwnedGames/v1/?key=69256AC003F1E062A5ED811C8ABBC63B&steamid=" + steamid+ "&include_appinfo=1";
  let promise = fetch(resolveid)
  promise 
 .then(response => response.json())
 .then(post => g = post), listgames();


 function listgames(){
    var i;
    var filtered = g.response.games.filter(function (entry) {
     return entry.playtime_forever >0;
   })
//
   filtered.sort(GetSortOrder("playtime_forever"));    
   console.log("Most played game: " + filtered[0].name + " " +filtered[0].playtime_forever+ " minutes");  
   document.getElementById("mostplayedGame").innerHTML = "Your most played game on steam is: "+ filtered[0].name + " " +filtered[0].playtime_forever+ " minutes";  
   console.log(filtered)
 //for (var item in filtered) {    
    // console.log(filtered[item].name + " Playtime: "+filtered[item].playtime_forever);    
 //}
  };

   function GetSortOrder(data) {    
      return function(a, b) {    
          if (a[data] > b[data]) {    
              return -1;    
          } else if (a[data] < b[data]) {    
              return 1;    
          }    
          return 0;    
      }    
  }
}


function getGames()
{

  var resolveid = "https://api.steampowered.com/IPlayerService/GetOwnedGames/v1/?key=69256AC003F1E062A5ED811C8ABBC63B&steamid=" + document.getElementById("steamid").value + "&include_appinfo=1";
  let promise = fetch(resolveid)
  promise 
 .then(response => response.json())
 .then(post => g = post), listgames();

 function listgames(){
    var i;
    var filtered = g.response.games.filter(function (entry) {
     return entry.playtime_forever >0;
   })

   filtered.sort(GetSortOrder("playtime_forever"));    
   console.log("Most played game: " + filtered[0].name + " " +filtered[0].playtime_forever+ " minutes");  
   document.getElementById("mostplayedGame").innerHTML = "Your most played game on steam is: "+ filtered[0].name + " " +filtered[0].playtime_forever+ " minutes";  
 //for (var item in filtered) {    
  //   console.log(filtered[item].name + " Playtime: "+filtered[item].playtime_forever);    
 //}  };

   function GetSortOrder(prop) {    
      return function(a, b) {    
          if (a[prop] > b[prop]) {    
              return -1;    
          } else if (a[prop] < b[prop]) {    
              return 1;    
          }    
          return 0;    
      }    
  }  
}
}

  

//console.log(filtered)

      // for (i = 0; i < g.response.game_count; i++) 
      //{ 
        //console.log(filtered[i].name +", Playtime: " +filtered[i].playtime_forever +" minutes");
      //}
    //}

      





//https://store.steampowered.com/api/appdetails?appids=220
//.games[i].name

/*function getGameinfo()
{

  var resolveid = "https://store.steampowered.com/api/appdetails?appids=220";
  let promise = fetch(resolveid)
  promise 
 .then(response => response.json())
 .then(post => g = post), console.log(g);

    }
    */
   
