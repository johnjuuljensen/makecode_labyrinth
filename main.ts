tiles.setCurrentTilemap(maze.generateTilemap(MazeAlgorithm.Ellers, 8, 8, sprites.dungeon.floorDark0, sprites.castle.tileGrass2))
let mySprite = sprites.create(img`
    ........................
    .....ffff...............
    ...fff22fff.............
    ..fff2222fff............
    .fffeeeeeefff...........
    .ffe222222eef...........
    .fe2ffffff2ef...........
    .ffffeeeeffff...........
    ffefbf44fbfeff..........
    fee41fddf14eef..........
    .ffffdddddeef...........
    fddddf444eef............
    fbbbbf2222f4e...........
    fbbbbf2222fd4...........
    .fccf45544f44...........
    ..ffffffff..............
    ....ff..ff..............
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    `, SpriteKind.Player)
tiles.placeOnTile(mySprite, tiles.getTileLocation(2, 2))
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
for (let index = 0; index < 10; index++) {
    tiles.setTileAt(tiles.getTilesByType(sprites.castle.tileGrass2)._pickRandom(), sprites.dungeon.chestClosed)
}
