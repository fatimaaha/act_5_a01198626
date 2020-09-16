input.onButtonPressed(Button.A, function () {
    basic.showNumber(feet)
    basic.showString("feet")
    basic.showString("=")
    yards = feet / 3
    basic.showNumber(yards)
    basic.showString("yards")
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(inches)
    basic.showString("inches")
    basic.showString("=")
    cm = inches * 2.54
    basic.showNumber(cm)
    basic.showString("cm")
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(cm)
    basic.showString("cm")
    basic.showString("=")
    inches = cm / 2.54
    basic.showNumber(inches)
    basic.showString("inches")
})
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(yards)
    basic.showString("yards")
    basic.showString("=")
    meters = yards + 1
    basic.showNumber(meters)
    basic.showString("meters")
})
let meters = 0
let yards = 0
let inches = 0
let cm = 0
let feet = 0
feet = randint(1, 100)
cm = 2.54
inches = 1
yards = 1
