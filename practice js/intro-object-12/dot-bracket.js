

let person = {
    name : "kunal jadhav",
    age : 17,
    clg_name : "MET BKC"
}
console.log(person);
console.log(typeof person);

a = person.age;
 n = person.name;
console.log(a);
console.log(n);

// ierate of obsject js

for(let key in person)
{
    console.log(key,":",person[key]);
}

//****************object desructing ************

let {name,...rest} = person;
console.log(person);




