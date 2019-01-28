var displayArray = function(array, j, qX, qY) {
    textFont(createFont("monospace"), 12);
    fill(0, 0, 0);
    
    for (var i = 0; i < array.length; i++){
        text(array[i], 10 + i * 27 + qX, 10 + j * 29 + qY, 58, 84);
    }
};

//function to show movement of numbers after every change
var displaySwap = function(i, minIndex, qX, qY){
    //displaying line from old position to new postion
    line(minIndex * 27 + 15 + qX, i * 29 +22 + qY, i * 27+15 + qX, i * 29 + 34 + qY);
};

//function to swap array values
var swap = function(array, firstIndex, secondIndex) {
    var temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
};

//function to find lowest value
var indexOfMinimum = function(array, startIndex) {
    
    //setting min value and index to spot that is being checked
    var minValue = array[startIndex];
    var minIndex = startIndex;
    
    //goes through array starting from spot being checked
    for(var i = minIndex + 1; i < array.length; i++) {
        //if value is found with lower value, min index and value is set to new index and value
        if(array[i] < minValue) {
            minIndex = i;
            minValue = array[i];
        }
    }
    //returning minIndex
    return minIndex;
}; 

//function to sort array
var selectionSort = function(array, i, qX, qY) {
    //inputs values needed for function that displays swap
    if (i < array.length - 1){
        displaySwap(i, indexOfMinimum(array, i), qX, qY);
    }
    
    //inputs values needed for function that performs swap
    swap(array, i, indexOfMinimum(array, i));
};

var array = [22, 11, 99, 88, 9, 7, 42];
var revArray = [99, 88, 42, 22, 11, 9, 7];
var sameArray = [22, 11, 11, 88, 22, 7, 11];
var oneArray = [7, 99, 9, 11, 22, 42, 88];

//sorting arrays
for (var j = 0; j < array.length; j++){
    //displaying randomly assorted array in q1
    displayArray(array, j, 0, 0);
    //sorting randomly assorted array
    selectionSort(array, j, 0, 0);
    
    //displaying array with values that are the same in q3
    displayArray(sameArray, j, 0, 200);
    //sorting array with values that are the same
    selectionSort(sameArray, j, 0, 200);
    
    //displaying array with only one value off in q4
    displayArray(oneArray, j, 200, 200);
    //sorting array with only one value off
    selectionSort(oneArray, j, 200, 200);
    
    //displaying array with reversed order in q2
    displayArray(revArray, j, 200, 0);
    //sorting array with reversed order
    selectionSort(revArray, j, 200, 0);
}

//dividing quadrants
line(0, 200, 400, 200);
line(200, 0, 200, 400);
