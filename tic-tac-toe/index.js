// create first game
var play1 = new Player("X")
var play2 = new Player("O")
var mapCreator = new MapCreator("game1", "map1", 3)
var game = new Game(mapCreator, play1, play2).start();





// create second game
// var play3 = new Player("X")
// var play4 = new Player("O")
// var mapCreator1 = new MapCreator("game2", "map2", 2)
// var game1 = new Game(mapCreator1, play3, play4).start();