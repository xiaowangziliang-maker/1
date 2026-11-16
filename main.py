index = 0

def show_random_icon():
    global index
    index = randint(0, 9)
    if index == 0:
        basic.show_icon(IconNames.HEART)
    elif index == 1:
        basic.show_icon(IconNames.HAPPY)
    elif index == 2:
        basic.show_icon(IconNames.SAD)
    elif index == 3:
        basic.show_icon(IconNames.CONFUSED)
    elif index == 4:
        basic.show_icon(IconNames.ANGRY)
    elif index == 5:
        basic.show_icon(IconNames.ASLEEP)
    elif index == 6:
        basic.show_icon(IconNames.SURPRISED)
    elif index == 7:
        basic.show_icon(IconNames.GHOST)
    elif index == 8:
        basic.show_icon(IconNames.SKULL)
    else:
        basic.show_icon(IconNames.DUCK)

input.on_button_pressed(Button.A, show_random_icon)
input.on_gesture(Gesture.SHAKE, show_random_icon)

basic.show_icon(IconNames.YES)