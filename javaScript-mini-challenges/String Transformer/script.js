const Input = document.getElementById("strings-input");
const lowercase = document.getElementById("lowercase");
const uppercase = document.getElementById("uppercase");
const camelcase = document.getElementById("camelcase");
const pascalcase = document.getElementById("pascalcase");
const snakcase = document.getElementById("snakcase");
const kebabcase = document.getElementById("kebabcase");
const trimcase = document.getElementById("trimcase");


const convertToCase = (string,cb,join) => {
    return string.split(" ").map(cb).join(`${join}`);
}

const toCamelCase = (string) => {
    let callback = (word,index) => {
        if(index === 0){
            return word.toLowerCase()
        }
        let firstChar =  word.charAt(0).toUpperCase();
        return firstChar + word.slice(1)
    }

   return convertToCase(string,callback,"")
}

const toPascalCase = (string) => {
    let callback = (word) => {
        let firstChar =  word.charAt(0).toUpperCase();
        return firstChar + word.slice(1);
    }
   return convertToCase(string,callback,"");
}

const toSnakeCase = (string) => {
    let callback =  item => item.toLowerCase();
   return convertToCase(string,callback,"_");

}

const toKebabCase = (string) => {
    let callback =  item => item.toLowerCase();
   return convertToCase(string,callback,"-");
}

document.addEventListener("DOMContentLoaded", () => {
    Input.focus()
    let value= Input.value;
    lowercase.innerHTML = value.toLowerCase();
    uppercase.innerHTML = value.toUpperCase();
    camelcase.innerHTML = toCamelCase(value);
    pascalcase.innerHTML = toPascalCase(value);
    snakcase.innerHTML = toSnakeCase(value);
    kebabcase.innerHTML = toKebabCase(value);
    trimcase.innerHTML = value.trim();
})

Input.addEventListener("input",(e) => {
    var value = e.target.value;
    lowercase.innerHTML = value.toLowerCase();
    uppercase.innerHTML = value.toUpperCase();
    camelcase.innerHTML = toCamelCase(value);
    pascalcase.innerHTML = toPascalCase(value);
    snakcase.innerHTML = toSnakeCase(value);
    kebabcase.innerHTML = toKebabCase(value);
    trimcase.innerHTML = value.trim();
});

Input.addEventListener("change",(e) => {
    var value = e.target.value;
    console.log("onchnage Event Trigger",value);
})
