document.getElementById("calculate").addEventListener("click", function () {
    // Get the input values
    var firstNumber = document.getElementById("firstNumber");
    var secondNumber = document.getElementById("secondNumber");
    var operation = document.querySelector('input[name="operation"]:checked');

    // Check if an operation is selected
    if (!operation) {
        document.querySelector(".notification").innerHTML =
            "Chưa chọn phép tính";
        return;
    }

    // Check if both numbers are filled
    if (!firstNumber.value || !secondNumber.value) {
        document.querySelector(".notification").innerHTML =
            "Vui lòng điền đủ hai số";
        return;
    }

    // Perform the calculation
    var result = document.getElementById("result");
    result.value = eval(
        firstNumber.value + operation.value + secondNumber.value
    );
    document.querySelector(".notification").innerHTML = "";
});

document
    .getElementById("firstNumber")
    .addEventListener("focusout", function () {
        // Check if the first number is a valid number
        var firstNumber = document.getElementById("firstNumber").value;

        if (isNaN(firstNumber)) {
            document.querySelector(".notification").innerHTML =
                "Giá trị ở ô Số thứ nhất không phải là số";
            return;
        }
    });

document
    .getElementById("secondNumber")
    .addEventListener("focusout", function () {
        // Check if the second number is a valid number
        var secondNumber = document.getElementById("secondNumber").value;

        if (isNaN(secondNumber)) {
            document.querySelector(".notification").innerHTML =
                "Giá trị ở ô Số thứ hai không phải là số";
            return;
        }
    });
