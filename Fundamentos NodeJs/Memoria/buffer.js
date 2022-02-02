// let buffer = Buffer.alloc(10);
// let buffer = Buffer.from([1,2,3]);
let buffer = Buffer.from("hello");
console.log(buffer.toString());
console.log(buffer.toString("utf-8",0,2));
console.log(buffer.toString("utf-8",2,4));
console.log(buffer.toString("utf-8",2));

let abc = Buffer.alloc(26);
console.log(abc);
for(let i = 0; i < 26; i++){
    abc[i] = i + 97;
}
console.log(abc.toString("ascii"));
