let bio = [
    {
        mame:"Anonymous",
        email:"venkatanonymous248@gmail.com",
        phone:"7530008253",
    },
    {
        mame:"Surya",
        email:"surya@gmail.com",
        phone:"9566633037",
    },
    {
        mame:"Sakthi",
        email:"sakthee@gmail.com",
        phone:"7530008251",
    },
]


let result = bio.find((data) => data.key === "Sakthi")
console.log(result)