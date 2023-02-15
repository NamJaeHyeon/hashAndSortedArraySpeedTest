const X = 10
const iterate = 10000;
const tableLengthBinary = 1<<X;
const tableLength = 1<<X;
const nameMinLength = 10;
const nameMaxLength = 10;
const str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_+-=";
const rand = () => str[Math.random()*str.length|0];
const strLen = 66;
const randomName = (n) => Array(Math.random()*(nameMaxLength-nameMinLength)|0+nameMinLength).fill(0).map(rand).join('');
const cl = console.log;

let table = [] // define variables;
let sortedTable;
let hashTable = {};

cl("테이블의 길이 : ", tableLength);
for(let i = 0; i < tableLength; i++){ // make table;
    table.push(randomName());
}
if(table.length !== Array.from(new Set(table)).length) console.log('중복된 값이 있습니다.'); // check duplication
sortedTable = table.sort();
for(let i = 0; i < tableLength; i++){
    hashTable[sortedTable[i]] = i;
}

cl('테스트 횟수 :',iterate);
let testCase = []; // 테스트 케이스
for(let i = 0; i < iterate; i++){
    let query = table[Math.random()*tableLength|0];
    testCase.push([query,hashTable[query]]);
}

function test(func, title){
    let handle = true;
    console.time(title);
    for(let i = 0; i < iterate; i++){
        if(func(testCase[i][0]) !== testCase[i][1]){
            cl(testCase[i][0], func(testCase[i][0]), testCase[i][1])
            console.log(title, '실패');
            console.timeEnd(title);
            handle = false;
            break;
        }
    }
    if(handle){
        console.log(title, '성공');
        console.timeEnd(title);
    }
}
function hash(key){
    return hashTable[key];
}
function binarySearch(value){
    let a = 0;
    let b = tableLengthBinary>>1;
    while(b){
        if(sortedTable[a+b] <= value){
            a += b;
        }
        b >>= 1;
    }
    return a+b;
}
test(binarySearch, '이진탐색')
test(hash, '해시테이블')