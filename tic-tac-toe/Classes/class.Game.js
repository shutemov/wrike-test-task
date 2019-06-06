class Game {
    constructor(map_Creator, player_1, player_2) {
        this.player1 = player_1
        this.player2 = player_2
        this.mapCreator = map_Creator
        this.mapCreator.domCreateMap()
    }

    start() {
        var map = new Map()
        map.createMap(this.mapCreator)

        let player1 = this.player1
        let player2 = this.player2


        let switchTurnTo = undefined; //value = player1.point || player2.point
        switchTurnTo = player1.getPoint

        let mapName = this.mapCreator.getMapName

        let gameField = document.querySelector("#" + mapName)


        gameField.addEventListener('click', e => {

            let field = e.target
            let mapId = this.mapCreator.getMapId

            if (switchTurnTo == player1.getPoint && field.className == ("col-2 " + mapId)) {

                player1.setPoint(map, field, player1.point)

                if (map.isWinCombination()) {
                    alert("WIN: X")
                    let result = confirm("lets play again?");
                    if (result) {
                        window.location.reload();
                    }
                } else if (map.isCheckTieResult()) {
                    alert("Partia played in a draw")
                    let result = confirm("lets play again?");
                    if (result) {
                        window.location.reload();
                    }
                } else {
                    switchTurnTo = player2.point
                }

            } else if (switchTurnTo == player2.point && field.className == "col-2 " + mapId) {

                player2.setPoint(map, field, player2.point)

                if (map.isWinCombination()) {
                    alert("WIN: O")
                    let result = confirm("lets play again?");
                    if (result) {
                        window.location.reload();
                    }
                } else if (map.isCheckTieResult()) {
                    alert("Partia played in a draw")
                    let result = confirm("lets play again?");
                    if (result) {
                        window.location.reload();
                    }
                } else {
                    switchTurnTo = player1.point
                }

            }
        })

    }
}