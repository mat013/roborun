input.onButtonPressed(Button.A, function () {
    basic.showString("Kør")
    cuteBot.closeheadlights()
    run = 1
    cuteBot.colorLight(cuteBot.RGBLights.RGB_L, 0x00ff00)
    cuteBot.forward()
})
input.onButtonPressed(Button.AB, function () {
    cuteBot.forward()
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    cuteBot.colorLight(cuteBot.RGBLights.ALL, 0xff0000)
    cuteBot.closeheadlights()
    cuteBot.stopcar()
})
input.onGesture(Gesture.Shake, function () {
    if (run == 1) {
        cuteBot.stopcar()
        basic.pause(1000)
        cuteBot.forward()
    }
})
let sonar = 0
let run = 0
basic.showString("5")
basic.forever(function () {
    sonar = cuteBot.ultrasonic(cuteBot.SonarUnit.Centimeters)
    if (run == 1) {
        if (sonar < 10) {
            cuteBot.motors(100, -100)
            basic.pause(200)
            cuteBot.forward()
        } else {
            cuteBot.forward()
        }
    }
})
