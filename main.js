$(document).ready(function() {
  $("#add").on("click", function(e) {
    e.preventDefault()
    var add = Number($("#num1").val()) + Number($("#num2").val())
    $("#answer").val(add)
  })
  $("#subtract").on("click", function(e) {
    e.preventDefault()
    var subtract = Number($("#num1").val()) - Number($("#num2").val())
    $("#answer").val(subtract)
  })
  $("#multiply").on("click", function(e) {
    e.preventDefault()
    var multiply = Number($("#num1").val()) * Number($("#num2").val())
    $("#answer").val(multiply)
  })
  $("#divide").on("click", function(e) {
    e.preventDefault()
    var divide = Number($("#num1").val()) / Number($("#num2").val())
    $("#answer").val(divide)
  })
})
