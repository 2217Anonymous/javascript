let User = {
    name : "VENKAT",
    age : 26,
    Sports : ['cricket','football'],
    family : {
        mother : 'mythily',
        father : 'Tiruppathi',
        brother : 'Surya',
        mine    : this.name,   
    },
    welcome : function(){
        let Welcome = `Welcome Our Home Mr.${this.name} and your family ` 
        console.log(Welcome);
    }
}

User.welcome();