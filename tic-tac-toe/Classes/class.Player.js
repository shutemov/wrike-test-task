class Player {
    constructor(point) {
        this.point = point // X or O
    }

    get getPoint() {
        return this.point
    }

    setPoint(map, field, point) {
        map.setState(field, point)
    }
}