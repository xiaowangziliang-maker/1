let index = 0
function show_random_icon() {
    
    index = randint(0, 9)
    if (index == 0) {
        basic.showIcon(IconNames.Heart)
    } else if (index == 1) {
        basic.showIcon(IconNames.Happy)
    } else if (index == 2) {
        basic.showIcon(IconNames.Sad)
    } else if (index == 3) {
        basic.showIcon(IconNames.Confused)
    } else if (index == 4) {
        basic.showIcon(IconNames.Angry)
    } else if (index == 5) {
        basic.showIcon(IconNames.Asleep)
    } else if (index == 6) {
        basic.showIcon(IconNames.Surprised)
    } else if (index == 7) {
        basic.showIcon(IconNames.Ghost)
    } else if (index == 8) {
        basic.showIcon(IconNames.Skull)
    } else {
        basic.showIcon(IconNames.Duck)
    }
    
}

input.onButtonPressed(Button.A, show_random_icon)
input.onGesture(Gesture.Shake, show_random_icon)
basic.showIcon(IconNames.Yes)
