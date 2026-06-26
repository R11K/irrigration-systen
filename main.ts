let pump = 0
basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P0) > 700 && pump != 1) {
        pump = 1
        pins.digitalWritePin(DigitalPin.P8, 1)
    } else if (pump != 0 && pins.analogReadPin(AnalogPin.P0) < 700) {
        pump = 0
        pins.digitalWritePin(DigitalPin.P8, 0)
    }
})
