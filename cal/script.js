let inputname = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', (e)=>{
        if(e.target.innerHTML == "="){
            inputname = eval(inputname)
            document.querySelector('input').value = inputname;
        }
        else if(e.target.innerHTML == "C"){
            inputname = "";
            document.querySelector('input').value = inputname;
        }
        else{
            console.log(e.target)
            inputname = inputname + e.target.innerHTML;
            document.querySelector('input').value = inputname;

        }
    })
})