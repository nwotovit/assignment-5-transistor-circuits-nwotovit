let high_val_one: number = 0
let high_val_two: number = 0
let high_val_three: number = 0
let low_val_one: number = 0
let low_val_two: number = 0
let low_val_three: number = 0
let maximum_val: number = 0
let minimum_val: number = 0
let moisture = pins.analogReadPin(AnalogPin.P0)
let calibrate = Math.map(moisture, minimum_val, maximum_val, 4, 0)

//getting values in order to calculate average
basic.showArrow(ArrowNames.North)
basic.pause(3000)
pins.digitalWritePin(DigitalPin.P12, 1)
high_val_one = pins.analogReadPin(AnalogPin.P0)
pins.digitalWritePin(DigitalPin.P12, 0)

basic.showArrow(ArrowNames.South)
basic.pause(3000)
pins.digitalWritePin(DigitalPin.P12, 1)
low_val_one = pins.analogReadPin(AnalogPin.P0)
pins.digitalWritePin(DigitalPin.P12, 0)

basic.showArrow(ArrowNames.North)
basic.pause(3000)
pins.digitalWritePin(DigitalPin.P12, 1)
high_val_two = pins.analogReadPin(AnalogPin.P0)
pins.digitalWritePin(DigitalPin.P12, 0)

basic.showArrow(ArrowNames.South)
basic.pause(3000)
pins.digitalWritePin(DigitalPin.P12, 1)
low_val_two = pins.analogReadPin(AnalogPin.P0)
pins.digitalWritePin(DigitalPin.P12, 0)

basic.showArrow(ArrowNames.North)
basic.pause(3000)
pins.digitalWritePin(DigitalPin.P12, 1)
high_val_three = pins.analogReadPin(AnalogPin.P0)
pins.digitalWritePin(DigitalPin.P12, 0)

basic.showArrow(ArrowNames.South)
basic.pause(3000)
pins.digitalWritePin(DigitalPin.P12, 1)
low_val_three = pins.analogReadPin(AnalogPin.P0)
pins.digitalWritePin(DigitalPin.P12, 0)

//calculating average calibration values
maximum_val = (high_val_one + high_val_two + high_val_three) / 3
minimum_val = (low_val_one + low_val_two + low_val_three) / 3
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P12, 1)
    moisture = pins.analogReadPin(AnalogPin.P0)
    calibrate = Math.map(moisture, minimum_val, maximum_val, 4, 0)
    pins.digitalWritePin(DigitalPin.P12, 0)
    basic.clearScreen()
    for (let height = 4; height >= calibrate; height--) {
        //plotting leds based on the average values
        led.plot(0, height)
        led.plot(1, height)
        led.plot(2, height)
        led.plot(3, height)
        led.plot(4, height)
    }
    basic.pause(1000)
    basic.clearScreen()
})
