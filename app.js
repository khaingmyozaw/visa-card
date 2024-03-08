// Get UI 
const inputs = document.querySelectorAll("input");

let data = [];

inputs.forEach(input => {
    input.addEventListener('keyup', function() {

        data.push({
            digit: inputs[0].value,
            name: inputs[1].value,
            exp: inputs[2].value,
            ccv: inputs[3].value,
        });

        console.log(data[data.length-1]);
        // console.log(data);
        
    })
})