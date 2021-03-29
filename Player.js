class Player {
  constructor(){
    this.distance=0,
    this.name =null,
    this.index=null
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",function(data){
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update( ){
    var playerIndex = "players/player" + playerCount;
    database.ref(playerIndex).set({
      name:player.name,
      distance:player.distance
      
    });
  }
  static getPlayerInfo(){
    var playerIndex=database.ref('players')
    playerIndex.on("value",(data)=>{
      allPlayers=data.val()
    })
  }
}
