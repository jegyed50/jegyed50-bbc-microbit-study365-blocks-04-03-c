x = 0
y = 0

def on_forever():
    global x, y
    basic.clear_screen()
    if x < -700:
        x = -700
    if x > 700:
        x = 700
    if y < -700:
        y = -700
    if y > 700:
        y = 700
    x = input.acceleration(Dimension.X)
    y = input.acceleration(Dimension.Y)
    x = Math.map(x, -700, 700, 4, 0)
    y = Math.map(y, -700, 700, 4, 0)
    led.plot(x, y)
basic.forever(on_forever)