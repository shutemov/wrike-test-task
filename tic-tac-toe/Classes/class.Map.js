class Map {

    map = undefined; // 1d vector fields
    mapCreator = undefined; // 1d vector fields

    createMap(mapCreator) {
        this.map = document.querySelectorAll('.' + mapCreator.getMapId)
    }

    setState(field, point) {
        if (field.textContent == "") {
            field.innerHTML = point
            field.style.backgroundColor = "lightgreen"
        } else {
            return "This field closed by " + field.textContent
        }
    }


    isWinCombination() {

        function CheckX(e) {
            return e.textContent == "X"
        }

        function CheckO(e) {
            return e.textContent == "O"
        }

        function checkTieResult(e) {
            if (e.textContent != "") {
                return e.textContent
            }

        }

        //width the map (3 fields)
        let map = this.map
        let mapWidth = Math.sqrt(this.map.length)

        //horizontal check comb
        function horizontalCheckComb() {
            for (let i = 0; i < map.length; i += mapWidth) {

                let horizontalSlice = Array.from(map).slice(i, i + mapWidth)

                if (horizontalSlice.every(CheckX) || horizontalSlice.every(CheckO)) {
                    return true;
                } 

            }
        }


        //vertical check comb
        function verticalCheckComb() {
            for (let i = 0; i < mapWidth; i++) {
                let buf = []

                // push to buf vertical fields
                for (let j = 0; j < map.length; j += mapWidth) {

                    buf[buf.length] = map[i + j]
                }

                if (buf.every(CheckX) || buf.every(CheckO)) {
                    return true
                };
            }
        }


        //  \ diagonal check comb
        function negativeDiagonalCheckComb() {
            let buf = []

            for (let i = 0; i < map.length; i += (mapWidth + 1)) {
                buf[buf.length] = map[i]
            }

            if (buf.every(CheckX) || buf.every(CheckO)) {
                return true
            };
        }

        //  / diagonal check comb
        function positiveDeigonalCheckComb() {
            let buf = []

            for (let i = mapWidth - 1; i < map.length - 1; i += (mapWidth - 1)) {
                buf[buf.length] = map[i]
            }

            if (buf.every(CheckX) || buf.every(CheckO)) {
                return true
            };
        }

        if (horizontalCheckComb() || verticalCheckComb() || positiveDeigonalCheckComb() || negativeDiagonalCheckComb()) {
            return true;
        } else {
            return false
        }


    }

    //check tie result
    isCheckTieResult() {
        function checkTieResult(e) {
            if (e.textContent != "") {
                return e.textContent
            }

        }

        //width the map (3 fields)
        let map = this.map
        let mapWidth = Math.sqrt(this.map.length)

        if (Array.from(map).every(checkTieResult)) {
            return true;
        }
    }
}