let string = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            string = eval(string);
            document.querySelector('input').value = string;
        }
        else if (e.target.innerHTML == 'AC') {
            string = "";
            document.querySelector('input').value = string;
        }
        else if (e.target.innerHTML == '⌫') {
            string = string.substring(0, string.length - 1);
            document.querySelector('input').value = string;
        }
        else if (e.target.innerHTML == '%') {
            // var expression = document.getElementById('display').value;
            var string1 = parseFloat(string);
            string = string / 100;
            // var number = parseFloat(expression);
            // Calculate percentage
            // var result = number / 100;
            document.querySelector('input').value = string;

        }
        else {
            console.log(e.target)
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }
    })
})
