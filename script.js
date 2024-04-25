function bdenBoyukler(array,b){
 return array.filter(function(element){
    return element > b;
 });
}
let array =[1,3,4,6];
let b=4;
let boyukler =bdenBoyukler(array, b);
console.log(boyukler);