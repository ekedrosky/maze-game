scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleBlueCrystal, function (sprite, location) {
    game.gameOver(true)
})
let mySprite = sprites.create(img`
    . . . 3 3 3 3 3 3 3 3 3 . . . . 
    . . 3 3 3 3 3 3 3 3 3 3 3 . . . 
    . . 3 3 1 1 3 3 3 1 1 3 3 . . . 
    . . 3 3 1 f 3 3 3 f 1 3 3 . . . 
    . . 3 3 1 f 3 3 3 f 1 3 3 . . . 
    . . 3 3 3 3 3 3 3 3 3 3 3 . . . 
    . . 3 3 3 3 3 3 3 3 3 3 3 . . . 
    . . 3 3 f 3 3 3 3 3 f 3 3 . . . 
    . . 3 3 3 f f f f f 3 3 3 . . . 
    . . 3 3 3 3 3 3 2 2 3 3 3 . . . 
    . . . 3 3 3 3 3 2 2 3 3 . . . . 
    . . . 4 4 4 4 4 4 4 4 4 . . . . 
    . . . . 4 4 4 4 4 4 4 . . . . . 
    . . . . . 4 4 4 4 4 . . . . . . 
    . . . . . . 4 4 4 . . . . . . . 
    . . . . . . . 4 . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
tiles.setCurrentTilemap(tilemap`level1`)
scene.cameraFollowSprite(mySprite)
mySprite.setPosition(24, 24)
