function findSecondLargest(arr){
    let firstMax= -Infinity;
    let secondMax=-Infinity;
    for(const item of arr){
        if(item>firstMax){
            secondMax=firstMax;
            firstMax=item;
        }
        else if(item>secondMax && item<firstMax){
            secondMax=item;
        }
    }
    return secondMax;
}
console.log(findSecondLargest([12,30,10,20,3]))

// 12>-1 //true
// secondMax=-Infinity
// firstMax=12

// 30>12 //true
// secondMax=12
// firstMax=30

// 10>30 //false
// 10>12 && 10<30 //false

// 20>30 //false
// 20>12 && 20<30 //true
// secondMax=20;

// 3>30 //false

// 3>20 && 3<30 //false

// return 20;
