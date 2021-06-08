var savedUserInput = prompt("Hello! Who are you? Please introduce yourself :)");

console.log(savedUserInput)

document.getElementById("username").innerText = savedUserInput;

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })