let obj1 = {
    name: "Muhammad",
    Sname: "Xamrakulov",
    Lname: "Shavkatovich",
    age: 16,
    height: 177,
    school: 45,
    phone: +998933542662,

}

let obj2 = {
    userName: "Azamat",
    UserSureName: "Uzakov",
    UserAge: 16,
    series: "UZB93354266223032023",
    userSchool: 45,
    userHeight: 175,
    data: 2022,
    exp: 2032
}

Object.assign(obj1, obj2)
console.log(obj1);

let object = Object.keys(obj2)
console.log(object);

let object1 = [obj1].concat([obj2])
console.log(object1);

first = Object.values(obj1)
second = Object.values(obj2)
end = first.concat(second)



let type = {
    string: [],
    number: [],
    boolean: [],
    object: [],
}




end.filter(item => {
    if (typeof (item) === 'boolean') {
        type.boolean.push(item)
    }
})
end.filter(item => {
    if (typeof (item) === 'string') {
        type.string.push(item)
    }
})
end.filter(item => {
    if (typeof (item) === 'object') {
        type.object.push(item)
    }
})
end.filter(item => {
    if (typeof (item) === 'number') {
        type.number.push(item)
    }
})
console.log(type);