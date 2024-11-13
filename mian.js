const people = [
    {
        name1: "Max",
        surname1: "Maximus",
        age: "18",
    },

    {
        name2: "Martin",
        surname2: "Martines",
        age: "17",
    },

    {
        name3: "Allex",
        surname3: "Sanches",
        age: "19",
    }
]

for(let i = 0; i < people.length; i++) {
    alert()
}

let first_name = prompt("What is your name?")

let second_name = prompt("What is your second name?")

let age_of_people = prompt("How ald are you?")

if (age_of_people === "18") {
    alert("You can buy  a witness")
} else {
    alert("we can't give you a witness")
}
