let light_on_or_of = 0
input.onSound(DetectedSound.Loud, function () {
    if (light_on_or_of < 1) {
        basic.showIcon(IconNames.Happy)
        light_on_or_of = 1
    } else {
        basic.showIcon(IconNames.Sad)
        light_on_or_of = 0
    }
})
