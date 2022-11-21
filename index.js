

function onSubmit() {
    let values = [];
    let gender;
    gender = document.getElementById("gender").value;
    values.push(document.getElementById("men").checked);
    values.push(document.getElementById("women").checked);
    values.push(document.getElementById("trans-men").checked);
    values.push(document.getElementById("trans-women").checked);
    values.push(document.getElementById("nb").checked);

    let trueCount = 0;
    let falseCount = 0;

    for (let n = 0; n < 5; n++) {
        if (values[n]) {
            trueCount += 1;
        } else {
            falseCount += 1;
        }
      }
    
    if (trueCount == 0) {
        document.getElementById("output").innerHTML = "You are probably asexual";
    } else if (trueCount == 1) {
        if (values[4]) {
            document.getElementById("output").innerHTML = "You are probably skoliosexual";
        } else {
            document.getElementById("output").innerHTML = "You are probably pansexual.";
            document.getElementById("lazy").innerHTML = "I got lazy and couldn't be bothered to program every sexuality trait";
        }
    } else {
        document.getElementById("output").innerHTML = "You are probably pansexual.";
        document.getElementById("lazy").innerHTML = "I got lazy and couldn't be bothered to program every sexuality trait";
    }
}