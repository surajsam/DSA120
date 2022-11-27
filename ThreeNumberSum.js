function threeNumberSum(array, targetSum) {
    let triplets = [];
    if(array.length >= 3) {
        for(let i=3; i< array.length; i++) {
            let leftIndex= i-1;
            let rightIndex = array.length - 1;
            const number = targetSum - (array[leftIndex] + array[i]);
            const value = binarySearch(array, 0, rightIndex, number);
            if(value) {
                triplets.push([array[leftIndex], array[i], value].sort((num1, num2) => num1 - num2))
            }
        }
    }
    return triplets;
}

function binarySearch(array, leftIndex, rightIndex, targetSum) {
    let midIndex = Math.ceil((leftIndex + rightIndex) / 2);
    if(leftIndex > rightIndex) {
        return undefined;
    }
    if (array[midIndex] === targetSum) {
        return array[midIndex];
    }else if(targetSum > array[midIndex]){
        leftIndex = midIndex + 1;
        return binarySearch(array, leftIndex, rightIndex, targetSum);
    }else if(targetSum < array[midIndex]){
        rightIndex = midIndex - 1;
        return binarySearch(array, leftIndex, rightIndex, targetSum);
    }
}

const sum = threeNumberSum([4, 82, 3, 5, 1, 9, 10].sort((num1, num2) => num1 - num2), 15);
console.log(" what is my sum", sum);

