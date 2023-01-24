const fs = require('fs');
class sortedArray{
    constructor(table,sortFn,isEqual){
        this.arrayList = table.sort(sortFn);
        this.sortFn = sortFn;
        this.length = table.length;
        this.isEqual = isEqual;
    }
    findIndex(item){
        let a = 0;
        let b = this.length>>1;
        let val = undefined;
        while(b!==0){
            val = this.arrayList[a+b];
            if(this.sortFn(val,item)<0){
                a+=b;
            }
            b>>=1;
        }
        return this.isEqual(val,item)?a+b:-1;
    }
    append(item){
        let a = 0;
        let b = this.length>>1;
        let val = undefined;
        let preTable = this.arrayList;
        while(b!==0){
            val = this.arrayList[a+b];
            if(this.sortFn(val,item)<0){
                a+=b;
            }
            b>>=1;
        }
        this.arrayList = preTable.slice(0,a+b+1).concat([item],preTable.slice(a+b+1));
        this.length++;
        return this.arrayList;
    }
}

const raw = fs.readFileSync('station.json','utf8');
let obj = JSON.parse(raw);
let array = new sortedArray(obj,(a,b)=>a[0]>b[0]?1:-1,(a,b)=>a[0]==b[0]); // sortedArray
let dict = {}; // hashTable of built-in library
let key = obj.map((x)=>{dict[x[0]]=[x[1],x[2]]; return x[0]}); // key or itemToFind

let iterate = [100,1000,10000,100000];
let result = '';
let keyCount = key.length;

for(let j = 0; j < iterate.length; j++){
    i_ = iterate[j];
    console.log('iterate : '+i_);

    console.time('s'); // sortedArray speed timer
    for(let i=0; i<i_; i++){
        result = array.findIndex(key[Math.random()*keyCount|0]);
    }
    console.timeEnd('s');

    console.time('h'); // hashtable speed timer
    for(let i=0; i<i_; i++){
        result = dict[key[Math.random()*keyCount|0]];
    }
    console.timeEnd('h');
}

