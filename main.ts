input.touchD0.onEvent(ButtonEvent.Click, function () {
    for (let index = 0; index < 10; index++) {
        strip.setGradient(light.hsv(150, 255, 255), light.hsv(35, 255, 255))
        pause(200)
        strip.photonForward(1)
        pause(200)
    }
})
let strip: light.NeoPixelStrip = null
strip = light.createStrip(pins.D1, 5)
let brightness = 0
pixel.setBrightness(brightness)
strip.setAll(light.hsv(150, 255, 255))
forever(function () {
    for (let index = 0; index < 50; index++) {
        strip.setAll(light.hsv(150, 255, 255))
        pixel.setBrightness(brightness)
        brightness += 5
        strip.setBrightness(brightness)
        pause(200)
    }
    pause(1000)
    for (let index = 0; index < 50; index++) {
        pixel.setBrightness(brightness)
        brightness += -5
        strip.setBrightness(brightness)
        pause(200)
    }
})
