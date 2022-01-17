function rotateCube(BUTTON) {
    // Set the relevant class to the cube to allow it to rotate.
    document.getElementById("cube").className="cube " + BUTTON.id

    // Set the relevant button stylings to represent which button has been clicked.
    const BUTTONS = document.getElementsByTagName("button")
    for (let i = 0; i < BUTTONS.length; i++)
        BUTTONS[i].style.backgroundColor = "white"
    BUTTON.style.backgroundColor = BUTTON.dataset.colour
}

function changeScale(value) {
    document.getElementById("scene").style.transform = "scale(" + parseFloat(parseInt(value) / 200) + ")"
}