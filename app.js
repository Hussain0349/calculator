let input = document.querySelector(".input[0]");
let button = document.querySelectorAll("button");
console.log(button);
let string = "";
Array.from(button).forEach((button) => {
    button.addEventListener("click", (event) => {
        if(event.target.innerText == "="){
            string = eval(string);
            input.value = string;
        }
        else if (event.target.innerText == "C"){
            string = "";
            input.value = string;
        }
        else {
            string += event.target.innerText;
        input.value = string;
        }
        


    })

})