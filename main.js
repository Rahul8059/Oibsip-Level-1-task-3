let
    heading = document.querySelector('.input h1'),
    input = document.querySelector('#input'),
    btn = document.querySelector('#Convert'),
    convert = document.querySelector('#Convert'),
    reset = document.querySelector('#reset'),
    output_format = document.querySelector('#Output-format'),
    output_label_1 = document.querySelector('#output-label-1'),
    output_label_2 = document.querySelector('#output-label-2'),
    choice = document.querySelectorAll('option')

convert.addEventListener('click', (e) => {
    e.preventDefault();
    if (convert.previousElementSibling.value == 'Select Option') {
        alert("Choose atleast one Option in the given Option list!")
    }
    //***************************************** */
    if (convert.previousElementSibling.value == 'Fahrenheit') {
        heading.innerHTML = 'Convert &nbsp;<sup>&#9900;</sup>F &nbsp; To &nbsp;<sup>&#9900;</sup>C, &nbsp;<sup>&#9900;</sup>K'

        output_format.innerHTML = `${input.value}&nbsp;<sup>&#9900;</sup>F in <sup>&#9900;</sup>C ,<sup>&#9900;</sup>K`
        output_label_1.innerHTML = `<sup>&#9900;</sup>C : ${(input.value - 32) * (5 / 9)}`
        output_label_2.innerHTML = `<sup>&#9900;</sup>K : ${(input.value + 459.67) * (5 / 9)}`

        input.value = ""

    }
    //***************************************** */
    if (convert.previousElementSibling.value == 'Celsius') {
        heading.innerHTML = 'Convert &nbsp;<sup>&#9900;</sup>C &nbsp; To &nbsp;<sup>&#9900;</sup>F, &nbsp;<sup>&#9900;</sup>K'

        output_format.innerHTML = `${input.value}<sup>&#9900;&nbsp;</sup>C in <sup>&#9900;</sup>F,<sup>&#9900;</sup>K`

        output_label_1.innerHTML = `<sup>&#9900;</sup>F : ${(input.value) * (9 / 5) + 32}`
        output_label_2.innerHTML = `<sup>&#9900;</sup>K : ${input.value + 273.15}`
        input.value = ""
    }

    //***************************************** */
    if (convert.previousElementSibling.value == 'Kelvin') {
        heading.innerHTML = 'Convert &nbsp;<sup>&#9900;</sup>K &nbsp; To &nbsp;<sup>&#9900;</sup>F, &nbsp;<sup>&#9900;</sup>C'

        output_format.innerHTML = `${input.value}<sup>&#9900;&nbsp;</sup>K in <sup>&#9900;</sup>F,<sup>&#9900;</sup>C`

        output_label_1.innerHTML = `<sup>&#9900;</sup>F : ${(input.value) * (9 / 5) - 459.67}`
        output_label_2.innerHTML = `<sup>&#9900;</sup>C : ${input.value - 273.15}`
        input.value = ""
    }
})

// Reset Data
reset.addEventListener('click', () => {
    output1.innerHTML = "00.00"
    output2.innerHTML = "00.00"
})
