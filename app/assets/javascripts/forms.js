$( document ).ready(function() {
  var general = $(".general-images")
  var ped = $(".pediatric-images")
  var teen = $(".teen-images")
    general.addClass("hide")
    ped.addClass("hide")
    teen.addClass("hide")


    $(".general-button").click(function() {
      general.addClass("show")
      ped.removeClass("show")
      teen.removeClass("show")
    });

    $(".pediatric-button").click(function() {
      general.removeClass("show")
      ped.addClass("show")
      teen.removeClass("show")
    });
    $(".teen-button").click(function() {
      general.removeClass("show")
      ped.removeClass("show")
      teen.addClass("show")
    });








});
