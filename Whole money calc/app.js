// ======================================== V A R I A B L E S =================================================================

// R = result
// p = price
// x = card type

// Count variables
var x2Asia = document.getElementById('x2a');
var x2Zain = document.getElementById('x2z');
var x5Asia = document.getElementById('x5a');
var x5Zain = document.getElementById('x5z');
var x10Asia = document.getElementById('x10a');
var x10Zain = document.getElementById('x10z');
var x15Asia = document.getElementById('x15a');
var x15Zain = document.getElementById('x15z');
var x25Asia = document.getElementById('x25a');
var x25Zain = document.getElementById('x25z');
var x35Asia = document.getElementById('x35a');
var x35Zain = document.getElementById('x35z');


// Prices variables
var x2AsiaPrice = document.getElementById('x2ap');
var x2ZainPrice = document.getElementById('x2zp');
var x5AsiaPrice = document.getElementById('x5ap');
var x5ZainPrice = document.getElementById('x5zp');
var x10AsiaPrice = document.getElementById('x10ap');
var x10ZainPrice = document.getElementById('x10zp');
var x15AsiaPrice = document.getElementById('x15ap');
var x15ZainPrice = document.getElementById('x15zp');
var x25AsiaPrice = document.getElementById('x25ap');
var x25ZainPrice = document.getElementById('x25zp');
var x35AsiaPrice = document.getElementById('x35ap');
var x35ZainPrice = document.getElementById('x35zp');


// Buttons variables
var btnPriceSave = document.getElementById('btnPriceSave');
var btnCalc = document.getElementById('btnCalc');
var btnPriceEdit = document.getElementById('btnPriceEdit');

// Box prompt variables
var overlay = document.getElementById('overlay');
var prices = document.getElementById('prices');
var popUpBox1 = document.getElementById('popUpBox1');
var popUpBox2 = document.getElementById('popUpBox2');
var output = document.getElementById('output');

var printButton = document.getElementById('printButton');

var writerName = prompt('أسم المستخدم');


// ======================================== E N D | V A R I A B L E S =================================================================


// ======================================== S T A R T | L O G I N =================================================================


// ======================================== E N D | L O G I N =================================================================



// ======================================== S T A R T | P R O C C E S S I N G =================================================================
// Retrieve the initial value of x2AsiaPrice from local storage when the page loads
window.addEventListener('load', function () {
    const storedX2AsiaPrice = retrieveNumber('x2AsiaPrice');
    const storedX2ZainPrice = retrieveNumber('x2ZainPrice');
    const storedX5AsiaPrice = retrieveNumber('x5AsiaPrice');
    const storedX5ZainPrice = retrieveNumber('x5ZainPrice');
    const storedX10AsiaPrice = retrieveNumber('x10AsiaPrice');
    const storedX10ZainPrice = retrieveNumber('x10ZainPrice');
    const storedX15AsiaPrice = retrieveNumber('x15AsiaPrice');
    const storedX15ZainPrice = retrieveNumber('x15ZainPrice');
    const storedX25AsiaPrice = retrieveNumber('x25AsiaPrice');
    const storedX25ZainPrice = retrieveNumber('x25ZainPrice');
    const storedX35AsiaPrice = retrieveNumber('x35AsiaPrice');
    const storedX35ZainPrice = retrieveNumber('x35ZainPrice');

    if (storedX2AsiaPrice !== null) {
        x2AsiaPrice.value = storedX2AsiaPrice;
    }
    if (storedX2ZainPrice !== null) {
        x2ZainPrice.value = storedX2ZainPrice;
    }

    if (storedX5AsiaPrice !== null) {
        x5AsiaPrice.value = storedX5AsiaPrice;
    }
    if (storedX5ZainPrice !== null) {
        x5ZainPrice.value = storedX5ZainPrice;
    }

    if (storedX10AsiaPrice !== null) {
        x10AsiaPrice.value = storedX10AsiaPrice;
    }
    if (storedX10ZainPrice !== null) {
        x10ZainPrice.value = storedX10ZainPrice;
    }

    if (storedX15AsiaPrice !== null) {
        x15AsiaPrice.value = storedX15AsiaPrice;
    }
    if (storedX15ZainPrice !== null) {
        x15ZainPrice.value = storedX15ZainPrice;
    }

    if (storedX25AsiaPrice !== null) {
        x25AsiaPrice.value = storedX25AsiaPrice;
    }
    if (storedX25ZainPrice !== null) {
        x25ZainPrice.value = storedX25ZainPrice;
    }

    if (storedX35AsiaPrice !== null) {
        x35AsiaPrice.value = storedX35AsiaPrice;
    }
    if (storedX35ZainPrice !== null) {
        x35ZainPrice.value = storedX35ZainPrice;
    }
});

// ===================================== S T A R T | C A L C U L A T E | P R I C E S =============================================
let totalPrice = 0;
// let totalWholeSales = 0;

btnCalc.addEventListener('click', function () {
    // Scroll to the result section
    var down = document.getElementById('down');
    setTimeout(() => {
        output.scrollIntoView({ behavior: "smooth" });
    }, 300);


    let totalQuantity = parseInt(x2Asia.value) + parseInt(x2Zain.value) + parseInt(x5Asia.value) + parseInt(x5Zain.value) + parseInt(x10Asia.value) + parseInt(x10Zain.value) + parseInt(x15Asia.value) + parseInt(x15Zain.value) + parseInt(x25Asia.value) + parseInt(x25Zain.value) + parseInt(x35Asia.value) + parseInt(x35Zain.value);
    let outputHTML = ''; // Initialize an empty HTML string
    // Create a table structure with headers
    outputHTML += '<div class = "container">';
    outputHTML += '<table class="receipt-table">';
    // outputHTML += '<thead ><tr><th><h2>حاسبة الرصيد الجملة</h2></th><th></th><th><th></th></th></tr></thead>';
    // outputHTML += '<thead ><tr><th><h2>حاسبة الرصيد الجملة</h2></th><th></th><th>' + printCurrentDateAndTime(true) + '<th><th>' + name + '</th></tr></thead>';
    outputHTML += '<thead ><tr><th><h2>حاسبة الرصيد الجملة</h2></th><th></th><th>' + printCurrentDateAndTime(true) + '</th><th>البائع/ ' + writerName + '</th></tr></thead>';
    outputHTML += '<thead><tr><th><strong>الفئة</strong></th><th>العدد</th><th>السعر</th><th>سعر الجملة</th></tr></thead>';
    outputHTML += '<tbody>';

    let x2AsiaResult = multiplication(parseFloat(x2AsiaPrice.value), parseFloat(x2Asia.value));
    let x2ZainResult = multiplication(parseFloat(x2ZainPrice.value), parseFloat(x2Zain.value));

    let x5AsiaResult = multiplication(parseFloat(x5AsiaPrice.value), parseFloat(x5Asia.value));
    let x5ZainResult = multiplication(parseFloat(x5ZainPrice.value), parseFloat(x5Zain.value));

    let x10AsiaResult = multiplication(parseFloat(x10AsiaPrice.value), parseFloat(x10Asia.value));
    let x10ZainResult = multiplication(parseFloat(x10ZainPrice.value), parseFloat(x10Zain.value));

    let x15AsiaResult = multiplication(parseFloat(x15AsiaPrice.value), parseFloat(x15Asia.value));
    let x15ZainResult = multiplication(parseFloat(x15ZainPrice.value), parseFloat(x15Zain.value));

    let x25AsiaResult = multiplication(parseFloat(x25AsiaPrice.value), parseFloat(x25Asia.value));
    let x25ZainResult = multiplication(parseFloat(x25ZainPrice.value), parseFloat(x25Zain.value));

    let x35AsiaResult = multiplication(parseFloat(x35AsiaPrice.value), parseFloat(x35Asia.value));
    let x35ZainResult = multiplication(parseFloat(x35ZainPrice.value), parseFloat(x35Zain.value));

    // Function to add a table row to the receipt
    function addReceiptRow(item, quantity, price, Wholesale) {
        outputHTML += '<tr><td>' + item + '</td><td>' + quantity + '</td><td>' + convertNumber(price) + ' ' + dinarText(price) + '</td><td>' + convertNumber(parseFloat(Wholesale)) + ' ' + dinarText(price) + '</td></tr>';
    }
    // let totalPrice = 0;

    // Add rows to the table for items with positive quantities
    if (x2AsiaResult > 0) {
        addReceiptRow('اسيا فئة 2', x2Asia.value, x2AsiaResult, x2AsiaPrice.value);
        // addReceiptRow('اسيا فئة 2', x2Asia.value, x2AsiaResult, convertNumber(x2AsiaPrice.value));
    }

    if (x2ZainResult > 0) {
        addReceiptRow('اثير فئة 2', x2Zain.value, x2ZainResult, x2ZainPrice.value);
    }

    if (x5AsiaResult > 0) {
        addReceiptRow('اسيا فئة 5', x5Asia.value, x5AsiaResult, x5AsiaPrice.value);
    }

    if (x5ZainResult > 0) {
        addReceiptRow('اثير فئة 5', x5Zain.value, x5ZainResult, x5ZainPrice.value);
    }


    if (x10AsiaResult > 0) {
        addReceiptRow('اسيا فئة 10', x10Asia.value, x10AsiaResult, x10AsiaPrice.value);
    }

    if (x10ZainResult > 0) {
        addReceiptRow('اثير فئة 10', x10Zain.value, x10ZainResult, x10ZainPrice.value);
    }

    if (x15AsiaResult > 0) {
        addReceiptRow('اسيا فئة 15', x15Asia.value, x15AsiaResult, x15AsiaPrice.value);
    }

    if (x15ZainResult > 0) {
        addReceiptRow('اثير فئة 15', x15Zain.value, x15ZainResult, x15ZainPrice.value);
    }


    if (x25AsiaResult > 0) {
        addReceiptRow('اسيا فئة 25', x25Asia.value, x25AsiaResult, x25AsiaPrice.value);
    }

    if (x25ZainResult > 0) {
        addReceiptRow('اثير فئة 25', x25Zain.value, x25ZainResult, x25ZainPrice.value);
    }


    if (x35AsiaResult > 0) {
        addReceiptRow('اسيا فئة 35', x35Asia.value, x35AsiaResult, x35AsiaPrice.value);
    }

    if (x35ZainResult > 0) {
        addReceiptRow('اثير فئة 35', x35Zain.value, x35ZainResult, x35ZainPrice.value);
    }

    totalPrice = x2AsiaResult + x2ZainResult + x5AsiaResult + x5ZainResult + x10AsiaResult + x10ZainResult + x15AsiaResult + x15ZainResult + x25AsiaResult + x25ZainResult + x35AsiaResult + x35ZainResult;
    totalWholeSales = parseFloat(x2AsiaPrice.value) + parseFloat(x2ZainPrice.value) + parseFloat(x5AsiaPrice.value) + parseFloat(x5ZainPrice.value) + parseFloat(x10AsiaPrice.value) + parseFloat(x10ZainPrice.value) + parseFloat(x15AsiaPrice.value) + parseFloat(x15ZainPrice.value) + parseFloat(x25AsiaPrice.value) + parseFloat(x25ZainPrice.value) + parseFloat(x35AsiaPrice.value) + parseFloat(x35ZainPrice.value);


    // outputHTML += '<thead ><tr><th><h2>المجموع</h2></th> <th><h2>' + totalQuantity + '</h2></th><th><h2>' + convertNumber(totalPrice) + ' ' + dinarText(totalPrice) + '</h2></th> <th><h2>' + convertNumber(totalWholeSales) + ' ' + dinarText(totalPrice) + '</h2></th></tr></thead>';
    outputHTML += '<thead ><tr><th><h2>المجموع</h2></th> <th><h2>' + totalQuantity + '</h2></th><th><h2>' + convertNumber(totalPrice) + ' ' + dinarText(totalPrice) + '</h2></th> <th></th></tr></thead>';

    // Close the table
    outputHTML += '</tbody></table>';
    outputHTML += '</ div>';

    // Display the table
    output.innerHTML = outputHTML; // Set the HTML content of the output element
    // output2.innerHTML2 = outputHTML2; // Set the HTML content of the output element
});
// ===================================== E N D | C A L C U L A T E | P R I C E S =============================================

// Show edit popup box
btnPriceEdit.addEventListener('click', function () {
    displayBlockOn(prices);
    displayBlockOn(overlay);

    setTimeout(() => {
        opacityOn(prices);
        opacityOn(overlay);
    }, 100);
});

// Edit prices
btnPriceSave.addEventListener('click', function () {
    opacityOff(prices);
    opacityOff(overlay);

    setTimeout(() => {
        displayOff(prices);
        displayOff(overlay);
    }, 500);


    editNumber('x2AsiaPrice', x2AsiaPrice.value);
    editNumber('x2ZainPrice', x2ZainPrice.value);

    editNumber('x5AsiaPrice', x5AsiaPrice.value);
    editNumber('x5ZainPrice', x5ZainPrice.value);

    editNumber('x10AsiaPrice', x10AsiaPrice.value);
    editNumber('x10ZainPrice', x10ZainPrice.value);

    editNumber('x15AsiaPrice', x15AsiaPrice.value);
    editNumber('x15ZainPrice', x15ZainPrice.value);

    editNumber('x25AsiaPrice', x25AsiaPrice.value);
    editNumber('x25ZainPrice', x25ZainPrice.value);

    editNumber('x35AsiaPrice', x35AsiaPrice.value);
    editNumber('x35ZainPrice', x35ZainPrice.value);
});



// ======================================== S T A R T | P R I N T  =================================================================
printButton.addEventListener('click', function () {
    // Generate and save a PDF copy of the content
    generatePDF();

    // Print the content of the "output" div
    setTimeout(() => {
        window.print();
    }, 3000);
});
// ======================================== E N D | P R I N T  =================================================================


// ======================================== S T A R T | F U N C T I O N S =================================================================
// Functions
function displayFlexOn(objectName) {
    objectName.style.display = 'flex';
}

function displayBlockOn(objectName) {
    objectName.style.display = 'block';
}

function displayOff(objectName) {
    objectName.style.display = 'none';
}

function opacityOn(objectName) {
    objectName.style.opacity = 1;
}

function opacityOff(objectName) {
    objectName.style.opacity = 0;
}

// Math functions
function addition(number1, number2) {
    return (number1 + number2);
}

function multiplication(number1, number2) {
    return (number1 * number2);
}

function division(number1, number2) {
    return (number1 / number2);
}

function subtraction(number1, number2) {
    return (number1 - number2);
}

//  convert a number from a format without decimal points and dots to a format with decimal points and dots
function convertNumber(input) {
    // Check if the input is a valid number
    if (!isNaN(input)) {
        // Convert the input to a string with two decimal places and commas
        const formattedNumber = input.toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        });
        return formattedNumber;
    } else {
        return "Invalid input. Please enter a valid number.";
    }
}


// LocalStorage functions
// function to store a number in localStorage
function storeNumber(key, value) {
    localStorage.setItem(key, value);
}

// function to retrieve a number from localStorage
function retrieveNumber(key) {
    return localStorage.getItem(key);
}

// function to edit a number in localStorage
function editNumber(key, newValue) {
    localStorage.setItem(key, newValue);
}

// function to delete a number from localStorage:
function deleteNumber(key) {
    localStorage.removeItem(key);
}


// write dinar in arabic for prices
function dinarText(price) {
    // let DinarText = price >= 1000 ? "الف دينار" : "دينار";
    let dinarText = '';
    if (price >= 1000) {
        return "<span>الف دينار</span>";
    }
    else {
        return "<span> دينار </span>";
    }
}


// function printCurrentDateAndTime() {
//     // Create a new Date object
//     const currentDate = new Date();

//     // Get the date components
//     const year = currentDate.getFullYear();
//     const month = currentDate.getMonth() + 1; // Months are zero-based, so add 1
//     const day = currentDate.getDate();

//     // Get the time components
//     const hours = currentDate.getHours();
//     const minutes = currentDate.getMinutes();
//     const seconds = currentDate.getSeconds();

//     // Create a formatted date and time string
//     const formattedDate = `${year}-${month}-${day}`;
//     const formattedTime = `${hours}:${minutes}:${seconds}`;

//     // Print the date and time
//     var fullDate = formattedDate;
//     var fullTime = formattedTime;
//     var fullDateTime = 'الوقت و التاريخ' + ' / ' + formattedTime + ' / ' + fullDate;
//     return fullDateTime;
//     // console.log("Current Date: " + formattedDate);
//     // console.log("Current Time: " + formattedTime);
// }

function printCurrentDateAndTime(use12HourFormat) {
    // Create a new Date object
    const currentDate = new Date();

    // Get the date components
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1; // Months are zero-based, so add 1
    const day = currentDate.getDate();

    // Get the time components
    let hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();
    let ampm = "ص";

    // Convert to 12-hour format if specified
    if (use12HourFormat) {
        if (hours >= 12) {
            ampm = "م";
            if (hours > 12) {
                hours -= 12;
            }
        }

        // Ensure 12:00 PM is displayed correctly
        if (hours === 0) {
            hours = 12;
        }
    }

    // Create a formatted date and time string
    const formattedDate = `${year}-${month}-${day}`;
    const formattedTime = `${hours}:${minutes}:${seconds} ${ampm}`;


    // Print the date and time
    var fullDate = formattedDate;
    var fullTime = formattedTime;
    var fullDateTime = 'الوقت و التاريخ' + ' / ' + fullTime + ' / ' + fullDate;
    return fullDateTime;
    // // Print the date and time
    // console.log("Current Date: " + formattedDate);
    // console.log("Current Time: " + formattedTime);
}

// Call the function with true to use 12-hour format
// printCurrentDateAndTime(true);

// Function to generate a PDF from the "output" div
function generatePDF() {
    const element = document.getElementById('output');
    const pdfOptions = {
        margin: 10,
        filename: 'printed_area.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
    };

    html2pdf().from(element).set(pdfOptions).save();
}