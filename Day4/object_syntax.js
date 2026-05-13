let person = {
    name : "Thanh Ngọc",
    age : 14
}

// =====================
// ========== TRUY VẤN 1 KEY TRONG OBJECT  ==========
// --- Cách 1 ---
// console.log("Cách 1: ",person.name)

// // ---Cách 2 ---
// console.log("Cách 2 : ",person['name'])

// ========== THÊM MỘT KEY VÀ VALUE VÀO OBJECT ==========
// ---Cách 1---
// person.gender = "Women"
// console.log("Cách 1: ",person)

// // ---Cách 2---
// person['eyeColor'] = "Đen"
// console.log("Cách 1: ",person)

// ========== XÓA MỘT KEY VÀ VALUE VÀO OBJECT ==========
// ---Cách 1---
// delete person.age
// console.log("Cách 1: ",person)

// // ---Cách 2---
// delete person['name']
// console.log("Cách 2: ",person)

// ========== DUYỆT QUA TỪNG KEY TRONG OBJECT ==========
// for (let key in person) {
//     console.log("Cách 1: ",person[key])
// }

// ========== TÌM KIẾM KEY TRONG OBJECT  ==========
// ---Cách 1---
// if ('age' in person) 
//     {
//         console.log("Có - ",person.age)
//     }

// // ---Cách 2---
// if (person.hasOwnProperty('name')) 
//     {
//         console.log("Có - ",person.name)
//     }



