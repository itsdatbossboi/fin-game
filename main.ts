namespace SpriteKind {
    export const button = SpriteKind.create()
    export const minebutton = SpriteKind.create()
    export const icon = SpriteKind.create()
}
namespace StatusBarKind {
    export const ItemQuantity = StatusBarKind.create()
    export const Cooldown = StatusBarKind.create()
}
let list: number[] = []
for (let index = 0; index < 30; index++) {
    list.push(0)
}
for (let index = 0; index < 20; index++) {
    list.push(1)
}
for (let index = 0; index < 10; index++) {
    list.push(2)
}
for (let index = 0; index < 5; index++) {
    list.push(3)
}
for (let index = 0; index < 5; index++) {
    list.push(4)
}
tiles.setCurrentTilemap(tilemap`level1`)
let mine_button = sprites.create(img`
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    44444444444444444444444444444444
    ................................
    ................................
    .........eeeee.e.eee.ee.........
    .........e.e.e.e.e.e.e..........
    eeeeeee..e.e.e.e.e.e.ee..eeeeeee
    eeeeeee..e.e.e.e.e.e.e...eeeeeee
    .........e.e.e.e.e.e.e..........
    .........e.e.e.e.e.e.ee.........
    ................................
    ................................
    44444444444444444444444444444444
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    `, SpriteKind.minebutton)
mine_button.setPosition(20, 10)
let cursor = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . d d . . . . . . . 
    . . . . . . . d d . . . . . . . 
    . . . . . . . d d . . . . . . . 
    . . . . d d d 1 1 d d d . . . . 
    . . . . d d d 1 1 d d d . . . . 
    . . . . . . . d d . . . . . . . 
    . . . . . . . d d . . . . . . . 
    . . . . . . . d d . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(cursor)
let mySprite2 = sprites.create(assets.image`redgem`, SpriteKind.icon)
mySprite2.setPosition(60, 10)
let mySprite3 = sprites.create(assets.image`bluegem`, SpriteKind.icon)
mySprite3.setPosition(100, 10)
let statusbar = statusbars.create(32, 3, StatusBarKind.Cooldown)
statusbar.attachToSprite(mine_button, -8, 0)
statusbar.positionDirection(CollisionDirection.Bottom)
statusbar.value = 0
statusbar.setColor(5, 11)
statusbar.max = 100
let statusbar2 = statusbars.create(30, 3, StatusBarKind.ItemQuantity)
statusbar2.attachToSprite(mySprite2, -1, 0)
statusbar2.value = 0
statusbar2.positionDirection(CollisionDirection.Bottom)
statusbar2.max = 20
let statusbar3 = statusbars.create(30, 3, StatusBarKind.ItemQuantity)
statusbar3.attachToSprite(mySprite3, -1, 0)
statusbar3.value = 0
statusbar3.positionDirection(CollisionDirection.Bottom)
statusbar3.max = 15
forever(function () {
    if (cursor.overlapsWith(mine_button)) {
        animation.runImageAnimation(
        mine_button,
        [img`
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            11111111111111111111111111111111
            44444444444444444444444444444444
            11111111111111111111111111111111
            11111111111111111111111111111111
            111111111eeeee1e1eee1ee111111111
            111111111e1e1e1e1e1e1e1111111111
            eeeeeee11e1e1e1e1e1e1ee11eeeeeee
            eeeeeee11e1e1e1e1e1e1e111eeeeeee
            111111111e1e1e1e1e1e1e1111111111
            111111111e1e1e1e1e1e1ee111111111
            11111111111111111111111111111111
            11111111111111111111111111111111
            44444444444444444444444444444444
            11111111111111111111111111111111
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            `],
        100,
        false
        )
    } else {
        animation.runImageAnimation(
        mine_button,
        [img`
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            44444444444444444444444444444444
            ................................
            ................................
            .........eeeee.e.eee.ee.........
            .........e.e.e.e.e.e.e..........
            eeeeeee..e.e.e.e.e.e.ee..eeeeeee
            eeeeeee..e.e.e.e.e.e.e...eeeeeee
            .........e.e.e.e.e.e.e..........
            .........e.e.e.e.e.e.ee.........
            ................................
            ................................
            44444444444444444444444444444444
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            `],
        100,
        true
        )
    }
})
forever(function () {
    if (cursor.overlapsWith(mine_button)) {
        if (controller.A.isPressed()) {
            let list2: number[] = []
            for (let index = 0; index < 100; index++) {
                pause(10)
                statusbar.value += 1
            }
            list2[0] = list._pickRandom()
            if (list2[0] == 0) {
                statusbar2.value += 1
            } else if (list2[0] == 1) {
                statusbar2.value += 1
            } else if (list2[0] == 2) {
                statusbar3.value += 1
            } else if (list2[0] == 3) {
                statusbar3.value += 1
            } else if (list2[0] == 4) {
                statusbar3.value += 1
            } else {
            	
            }
            list2.pop()
            statusbar.value = 0
        }
    } else {
    	
    }
})
