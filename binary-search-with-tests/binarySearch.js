function typeCheck(num) {
    if (typeof num == 'number') { return typeof num }
}

function isAscending(arr) {
    if (arr.length < 2) return true;
    let prev = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < prev) return false;
        prev = arr[i];
    }
    return true;
}

function binarySearch(array, num, start, end) {



    if (array[start] == num) {
        return start
    }
    if (array[end] == num) {
        return end
    }

    if (!array.every(typeCheck)) {
        return 'ERROR: Invalid data type.'
    }

    if(!isAscending(array))
    {
        return 'ERROR: Array not sorted.';
    }


    middlePoint = Math.floor(start + (end - start) / 2)


    if (array[middlePoint] == num) {
        return middlePoint
    }
    if (num < array[middlePoint]) {
        return binarySearch(array, num, 0, middlePoint)
    } else if (num > array[middlePoint]) {
        return binarySearch(array, num, middlePoint, end + 1)
    }


}



module.exports = binarySearch;