let pin: number = 0
basic.forever(function () {
    pin = pins.digitalReadPin(DigitalPin.P12)
    if (pin == 1) {
        pins.digitalWritePin(DigitalPin.P16, 1)
    }
})
