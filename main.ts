input.onButtonPressed(Button.A, function () {
    sense = sense + 100
})
input.onButtonPressed(Button.AB, function () {
    sense = 700
})
input.onButtonPressed(Button.B, function () {
    sense = sense - 100
})
let y = 0
let x = 0
let sense = 0
sense = 700
basic.forever(function () {
    basic.clearScreen()
    if (x < -700) {
        x = -700
    }
    if (x > 700) {
        x = 700
    }
    if (y < -700) {
        y = -700
    }
    if (y > 700) {
        y = 700
    }
    x = input.acceleration(Dimension.X)
    y = input.acceleration(Dimension.Y)
    x = Math.map(x, sense * -1, sense, 4, 0)
    y = Math.map(y, sense * -1, sense, 4, 0)
    led.plot(x, y)
})
