input.onGesture(Gesture.LogoDown, function () {
    basic.showString("Vrije val")
})
input.onButtonPressed(Button.A, function () {
    basic.showString("klik op knop b")
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("draai mij naar beneden")
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("schud!")
})
input.onGesture(Gesture.FreeFall, function () {
    basic.showString("loop met mij")
})
input.onButtonPressed(Button.B, function () {
    basic.showString("klik op a en b")
})
basic.showString("klik op a")
basic.forever(function () {
	
})
