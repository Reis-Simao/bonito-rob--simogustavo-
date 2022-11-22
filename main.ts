input.onButtonPressed(Button.A, function () {
    basic.showString("Oi pessoal tudo bem com VCs, querem ir comer fora?")
})
input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        # # # # #
        # . . . #
        # . # . #
        # . . . #
        # # # # #
        `)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Fabulous)
})
music.playMelody("C D E F B G C5 D ", 41)
music.playMelody("F E D C B D C5 F ", 94)
music.playMelody("F E G B C5 A D C ", 73)
