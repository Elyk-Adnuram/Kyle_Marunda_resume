//PROMPTS USER TO ENTER THEIR NAME
let x = prompt("Hi, please enter your name.");
// IF USER ENTERS NAME, THE ALERT MESSAGE WITH USER INPUT WILL BE DISPLAYED.
if (x != null) {
  alert(`Hello ${x}, Welcome to my webpage!`);
}

$(function () {
  $(".about_me").on("mouseover", function () {
    $(".about_me").css({
      "background-color": "lightyellow",
      "font-weight": "bold",
    }); // when moving mouse over this class the font weight changes
    $(".about_me").on("mouseout", function () {
      $(".about_me").css({
        "background-color": "white",
        "font-weight": "normal",
      }); // when moving mouse over this class the font weight goes back to normal
    });
  });

  $(".Skills").on("mouseover", function () {
    $(".Skills").css({
      "background-color": "lightgreen",
      "font-weight": "bold",
    }); // when moving mouse over this class the font weight changes
    $(".Skills").on("mouseout", function () {
      $(".Skills").css({
        "background-color": "white",
        "font-weight": "normal",
      }); // when moving mouse over this class the font weight goes back to normal
    });
  });
  $(".education").on("mouseover", function () {
    $(".education").css({
      "background-color": "aquamarine",
      "font-weight": "bold",
    }); // when moving mouse over this class the font weight changes
    $(".education").on("mouseout", function () {
      $(".education").css({
        "background-color": "white",
        "font-weight": "normal",
      }); // when moving mouse over this class the font weight goes back to normal
    });
  });
  $(".workexperience").on("mouseover", function () {
    $(".workexperience").css({
      "background-color": "red",
      "font-weight": "bold",
    }); // when moving mouse over this class the font weight changes
    $(".workexperience").on("mouseout", function () {
      $(".workexperience").css({
        "background-color": "white",
        "font-weight": "normal",
      }); // when moving mouse over this class the font weight goes back to normal
    });
  });
  $(".contacts").on("mouseover", function () {
    $(".contacts").css({
      "background-color": "crimson",
      "font-weight": "bold",
    }); // when moving mouse over this class the font weight changes
    $(".contacts").on("mouseout", function () {
      $(".contacts").css({
        "background-color": "white",
        "font-weight": "normal",
      }); // when moving mouse over this class the font weight goes back to normal
    });
  });
  changeColour();
});
