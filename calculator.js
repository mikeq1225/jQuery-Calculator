$(document).ready(function() {
  $("#add").on("click", function(e) {
    e.preventDefault()
    var add = Number($("#num1").val()) + Number($("#num2").val())
    $("#answer").val(add)
  })
})
