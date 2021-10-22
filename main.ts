let getallen = false
let stappen = 0
input.onButtonPressed(Button.A, function () {
    getallen = true
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(stappen)
})
input.onButtonPressed(Button.B, function () {
    getallen = false
})
basic.forever(function () {
    if (getallen == true) {
        if (input.acceleration(Dimension.X) > 1500) {
            stappen += 1
        }
    }
})
basic.forever(function () {
    if (getallen == false) {
        if (input.acceleration(Dimension.X) > 1500) {
            stappen += 1
        }
    }
})
