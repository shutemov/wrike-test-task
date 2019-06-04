const binarySearch = require('../binarySearch');


test('Find firstElem = 1 into array [1,2,3,4,5,6,7,8]', () => {
    //input
    let array = [1, 2, 3, 4, 5, 6, 7, 8]
    let firstElem = 1

    //target
    let actual = binarySearch(array, firstElem, 0, array.length - 1)

    //expected 
    let firstIndex = 0

    expect(actual).toBe(firstIndex);
});


test('Find anyElem = 3 into array [1,2,3,4,5,6,7,8]', () => {

	//input
    let array = [1, 2, 3, 4, 5, 6, 7, 8]
    let anyElem = 3

    //target
    actual = binarySearch(array, anyElem, 0, array.length - 1)

    //expect
    let index = 2

    expect(actual).toBe(index);
});


test('Find lastElem = 8 into array [1,2,3,4,5,6,7,8]', () => {

	//input
    let array = [1, 2, 3, 4, 5, 6, 7, 8]
    let lastElem = 8

    //target
    actual = binarySearch(array, lastElem, 0, array.length - 1)

    //expect
    let lastIndex = 7

    expect(actual).toBe(lastIndex);
});


test('Error finding non-existent item = 10 into array [1,2,3,4,5,6,7,8]', () => {

	//input
    let array = [1, 2, 3, 4, 5, 6, 7, 8]
    let elem = 10

    //target
    actual = binarySearch(array, elem, 0, array.length - 1)

    //expect
    let result = undefined;

    expect(actual).toBe(result);
});


test('Checking on unsort [8,2,3,4,5,6,7,1]', () => {

    //input
    let array = [8, 2, 3, 4, 5, 6, 7, 1]
    let anyElem = 5

    //target
    let actual = binarySearch(array, anyElem, 0, array.length - 1)

    //expected 
    error = "ERROR: Array not sorted."
    expect(actual).toBe(error);

});


test('Detect invalid data type into array', () => {

    //input
    var array = [1, 2, 3, 4, 5, 6, 7, 8, "string"]
    var anyElem = 5

    //target
    var actual = binarySearch(array, anyElem, 0, array.length - 1)

    //expected
    var error = "ERROR: Invalid data type.";

    expect(actual).toBe(error);
})