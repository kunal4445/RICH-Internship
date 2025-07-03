const person = {
    name : "kunal",
    age : 18
    ,
    "person hobbie" : ["chess","games","sketches"]
}
for(let key in person){
    console.log(key," : " ,person[key]);
}

for(let key in person){
    console.log(`${key} : ${person[key]}`);
}