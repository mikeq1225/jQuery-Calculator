$(document).ready(function() {
  var display = ""
  var number1 = 0
  var number2 = 0
  $("#input").val(display)
  $("button").on("click", function(e) {
    e.preventDefault()
    $("button").removeClass("pushed")
    $(this).addClass("pushed")
    if ($(this).text() == "C") {
      display = ""
    }
    $("#input").val((display += $(this).val()))
    console.log(display)
    if ($(this).text() == "+") {
      number1 = Number($("input").val())
      display = ""
      console.log(number1)
      if ($(this).val() == "3") {
        $("#input").val((display += $(this).val()))
        number2 = Number($("input").val())
        display = ""
      }
    }
    if ($(this).text() == "=") {
      $("#input").val(number1 + number2)
    }
  })
})
