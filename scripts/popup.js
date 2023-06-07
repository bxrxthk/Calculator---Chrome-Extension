document.addEventListener('DOMContentLoaded', function () {
  var buttons = document.querySelectorAll('button');
  var inputField = document.getElementById('input');
  var lastClickedOperator = false
  buttons.forEach(function (button) {
    button.addEventListener('click', function () {
      var value = this.value;

      if (value === "+" || value === '-' || value === '/' || value === '*') {

        if (!lastClickedOperator) {
          inputField.value += value;
          lastClickedOperator = true
        } else {

          var exp = inputField.value;
          inputField.value = exp.slice(0, exp.length - 1) + value;
          lastClickedOperator = true
        }

      }
      else {
        inputField.value += value;
        console.log(inputField.value);
        lastClickedOperator = false
      }
    });
  });

  document.getElementById('clear').addEventListener('click', function (e) {
    e.preventDefault()
    var exp = inputField.value;
    inputField.value = exp.slice(0, exp.length - 1);
  });

  document.getElementById('all-clear').addEventListener('click', function (e) {
    e.preventDefault()
    var exp = inputField.value;
    inputField.value = '';
  });

  document.getElementById('equal-btn').addEventListener('click', function (e) {
    e.preventDefault()
    var exp = inputField.value;
    try {
      var result = math.evaluate(exp);
      inputField.value = result;
      console.log('Result:', result);
    } catch (error) {
      console.log('error', error)
      console.error('Error evaluating expression:', error);
    }
  });



});
