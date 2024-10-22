let strip = light.createStrip(pins.D1, 5)
pixel.setBrightness(0)
forever(function () {
    while (false) {
        strip.setAll(0x00ffff)
    }
})
