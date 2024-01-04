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
    cccccccccccccccccccccccccccccccc
    ................................
    ................................
    dddddd...bbbbb.b.bbb.bb...dddddd
    bbbbbbd..b.b.b.b.b.b.b...dbbbbbb
    ccccccbd.b.b.b.b.b.b.bb.dbcccccc
    ccccccbd.b.b.b.b.b.b.b..dbcccccc
    bbbbbbd..b.b.b.b.b.b.b...dbbbbbb
    dddddd...b.b.b.b.b.b.bb...dddddd
    ................................
    ................................
    cccccccccccccccccccccccccccccccc
    ................................
    ................................
    `, SpriteKind.minebutton)
mine_button.setPosition(80, 15)
let minecooldown = 500
let cursor = sprites.create(img`
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . 1 . . . . . . . 
    . . . . . . . 1 . . . . . . . 
    . . . . . 1 1 d 1 1 . . . . . 
    . . . . . . . 1 . . . . . . . 
    . . . . . . . 1 . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(cursor)
let mySprite2 = sprites.create(assets.image`redgem`, SpriteKind.icon)
mySprite2.setPosition(135, 15)
let mySprite3 = sprites.create(assets.image`bluegem`, SpriteKind.icon)
mySprite3.setPosition(135, 50)
let mySprite4 = sprites.create(img`
    ................11111...........
    ...........111111111111.........
    ........1111111111dd1111........
    .......1111dddddddddd111........
    .....1111dddddcdddddbd11........
    ....111ddddddcfcdddbcb111.......
    ....11ddddddcf5fcdddbcb111......
    ...111ddddddcf55fbddbcbd111.....
    ..111dddddddcf55ffbdbcbd111.....
    ..11dddddddcf5555fcddbcbd111....
    .11dbcccdddcf55fffbdddbddd11....
    .11bffffcbddcf5fbbddddddddd11...
    .11cf555ffbddcffbddddcddddd111..
    .1cf55555fcdddcbdddbcfcddddd11..
    .1cf55555fcdddddddbff5fbdddd111.
    .11cf555fcdddddddcff55ffbdddd11.
    .11dcf5ffbddddddcf55555fcdddd11.
    .11dbfffbdddddddcf55f55fcddbd11.
    .11ddbcbddddccbdcf5ff55fcdbcb11.
    .11ddddddddcfffbdcfcf5fcdbccb11.
    .11dddbdddcf55fcddddcfcdddbcb11.
    ..11dbcbddcf555fcddddcdddddbd11.
    ..11dbccbddcf55fcddbbbdddddd11..
    ...11dbcbddcf5fcddbcccbdddd111..
    ...11ddbddddcffbddbcffcbddd11...
    ....111ddddddcbddddbccbddd111...
    .....1111dddddddddddbbddd111....
    .......11111ddddd1111111111.....
    ........11111111111111111.......
    ...........11111111.............
    ................................
    ................................
    `, SpriteKind.icon)
mySprite4.setPosition(23, 23)
let statusbar = statusbars.create(32, 3, StatusBarKind.Cooldown)
statusbar.attachToSprite(mine_button, 0, 0)
statusbar.positionDirection(CollisionDirection.Bottom)
statusbar.value = 0
statusbar.setColor(5, 0)
statusbar.max = 4
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
let statusbar4 = statusbars.create(30, 3, StatusBarKind.ItemQuantity)
statusbar4.attachToSprite(mySprite4, 0, 0)
statusbar4.value = 0
statusbar4.positionDirection(CollisionDirection.Bottom)
statusbar4.max = 20
forever(function () {
    if (cursor.overlapsWith(mine_button)) {
        animation.runImageAnimation(
        mine_button,
        [img`
            ................................
            11111111111111111111111111111111
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            11111111111111111111111111111111
            11111111111111111111111111111111
            dddddd111ddddd1d1ddd1dd111dddddd
            bbbbbbd11d1d1d1d1d1d1d111dbbbbbb
            ccccccbd1d1d1d1d1d1d1dd1dbcccccc
            ccccccbd1d1d1d1d1d1d1d11dbcccccc
            bbbbbbd11d1d1d1d1d1d1d111dbbbbbb
            dddddd111d1d1d1d1d1d1dd111dddddd
            11111111111111111111111111111111
            11111111111111111111111111111111
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            11111111111111111111111111111111
            ................................
            `],
        100,
        false
        )
        animation.runImageAnimation(
        cursor,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . f f d d f f . . . . . 
            . . . . . f f d d f f . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
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
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            ................................
            ................................
            dddddd...ddddd.d.ddd.dd...dddddd
            bbbbbbd..d.d.d.d.d.d.d...dbbbbbb
            ccccccbd.d.d.d.d.d.d.dd.dbcccccc
            ccccccbd.d.d.d.d.d.d.d..dbcccccc
            bbbbbbd..d.d.d.d.d.d.d...dbbbbbb
            dddddd...d.d.d.d.d.d.dd...dddddd
            ................................
            ................................
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            ................................
            ................................
            `],
        100,
        true
        )
        animation.runImageAnimation(
        cursor,
        [img`
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . 1 . . . . . . . 
            . . . . . . . 1 . . . . . . . 
            . . . . . 1 1 d 1 1 . . . . . 
            . . . . . . . 1 . . . . . . . 
            . . . . . . . 1 . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
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
            for (let index = 0; index < 4; index++) {
                statusbar.value += 1
                music.play(music.createSoundEffect(WaveShape.Triangle, 3900, 3500, 255, 255, 20, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
                pause(minecooldown)
            }
            music.play(music.createSoundEffect(
            WaveShape.Sine,
            3800,
            3850,
            255,
            0,
            200,
            SoundExpressionEffect.None,
            InterpolationCurve.Linear
            ), music.PlaybackMode.InBackground)
            list2[0] = list._pickRandom()
            if (list2[0] == 0) {
                statusbar4.value += 1
            } else if (list2[0] == 1) {
                statusbar2.value += 1
            } else if (list2[0] == 2) {
                statusbar2.value += 1
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
