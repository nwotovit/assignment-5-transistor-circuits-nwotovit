let moisture = pins.analogReadPin(AnalogPin.P0)
let calibrate = Math.map(moisture, 6, 323, 4, 0)

basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P12, 1)
    moisture = pins.analogReadPin(AnalogPin.P0)
    calibrate = Math.map(moisture, 6, 323, 4, 0)
    pins.digitalWritePin(DigitalPin.P12, 0)
    basic.clearScreen()
    for (let height = 4; height >= calibrate; height--) {
        led.plot(0, height)
        led.plot(1, height)
        led.plot(2, height)
        led.plot(3, height)
        led.plot(4, height)
    }
    basic.pause(1000)
    basic.clearScreen()
})
