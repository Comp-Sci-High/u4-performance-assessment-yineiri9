const express = require('express')
const app = express()

let idk={
    "teamPhoto": "https://www.latimes.com/includes/projects/img/lakers/season_photos/season_2003_2004.jpg",
    "team": [
      {
        "name": "Los Angeles Lakers",
        "favoritePlayer": "LeBron James",
        "description": "LeBron James is a four-time NBA champion and one of the greatest basketball players of all time. He is known for his versatility, leadership, and ability to dominate in multiple positions.",
        "isActive": true,
        "players": [
          {
            "firstName": "LeBron James The goat",
            "lastName": "James",
            "photoUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTczsZst5DScv8AXMSUZz9eZwD4fCl4gKtXvg&s",
            "startYear": 2003,
            "funFact": "LeBron James was the first overall pick in the 2003 NBA Draft and has played for three different NBA teams."
          },
          {
            "firstName": "Anthony Davis The goat",
            "lastName": "Davis",
            "photoUrl": "https://hoopshype.com/wp-content/uploads/sites/92/2025/01/i_50_c6_e3_anthony-davis.png?w=1000&h=600&crop=1",
            "startYear": 2012,
            "funFact": "Anthony Davis won an NCAA championship with Kentucky before entering the NBA."
          },
          {
            "firstName": "Austin Reaves not really the goat",
            "lastName": "Reaves",
            "photoUrl": "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4066457.png",
            "startYear": 2021,
            "funFact": "Austin Reaves went undrafted in the 2021 NBA Draft before signing with the Lakers."
          }
        ]
      }
    ]
  }

  app.use(express.static(__dirname + "/public" ));

  app.set("view engine","ejs")
  
  app.use("/overview",(req,res)=>{
    res.render("overview.ejs",idk.team[0]);
  })

app.get("/players/:index",(req,res)=>{
  Conts i =req.params.index
})
  //app.use("/players",(req,res)=>{
  //  res.render("player.ejs",idk.team[0]);
  //})


  
  app.listen(3000, () => {
    console.log("Server running")
  })