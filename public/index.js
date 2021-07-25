init();

async function init() {
  if (location.search.split("=")[1] === undefined) {
    const workout = await API.getLastWorkout();
    if (workout) {
      location.search = "?id=" + workout._id;
    } else {
      document.querySelector("#continue-btn").classList.add("d-none")
    }
  }
}

document.getElementById("toast").onclick = function() {
  var myAlert =document.getElementById('Workout added!');//select id of toast
  var bsAlert = new bootstrap.Toast(myAlert);//inizialize it
  bsAlert.show();//show it
}

