// //Skills
// let number = document.getElementById("number");
// let counter = 0;
// setInterval(() => {
//   if (counter == 65) {
//     clearInterval();
//   } else {
//     counter += 1;
//     number.innerHTML = "HTML " + counter + "%";
//   }
// }, 30);

$("#contact").validate({
    rules: {
      website: {
        required: true,
        url: true
      }
    },
    submitHandler: function(form) {
      form.submit();
    }
   });