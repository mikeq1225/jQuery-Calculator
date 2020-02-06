$(document).ready(function() {
  var display = ""
  var number1 = 0
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
    if ($(this).attr("class") == "operators") {
      Number(display) = Number(number1)
      display = ""
      console.log(number1)
    }
  })
})
