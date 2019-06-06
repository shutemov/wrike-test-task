class MapCreator {

    constructor(mapName, fieldsId, size) {
        this.mapId = fieldsId
        this.mapName = mapName
        this.size = size
    }

    get getMapId() {
        return this.mapId
    }

    get getMapName() {
        return this.mapName
    }

    domCreateMap() {
        let bodyElement = document.querySelector('body')

        let titleH1 = document.createElement('h1')
        titleH1.innerText = "TIC TAC TOE"

        let mainContainerDiv = document.createElement('div')
        mainContainerDiv.id = this.mapName
        mainContainerDiv.className = "container col-9"


        let headerDiv = document.createElement('div')
        headerDiv.className = "col-12"
        headerDiv.style = "text-align: center;"
        headerDiv.appendChild(titleH1)

        let bodyDiv = document.createElement('div')
        bodyDiv.className = 'col-12'

        mainContainerDiv.appendChild(headerDiv)

        //create row and col fields 
        for (let i = 0; i < this.size; i++) {
            let rowDiv = document.createElement('div')
            rowDiv.className = 'row'
            rowDiv.style = "justify-content: center;position: relative;"


            for (let j = 0; j < this.size; j++) {
                let colDiv = document.createElement('div')
                colDiv.className = 'col-2 ' + this.mapId
                colDiv.style = "height: 150px;border: 1px solid;text-align: center;font-size: 6em;"

                rowDiv.appendChild(colDiv);
            }
            bodyDiv.appendChild(rowDiv)

        }
        mainContainerDiv.appendChild(bodyDiv)
        bodyElement.appendChild(mainContainerDiv)
    }


}