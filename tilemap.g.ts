// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100001010101010101010101010101010101010201020102020202020202010201010102010201010101010101020102010101020102010202020202020201020101010202020202010101010101010201010102010101010102020202020202020101020102020202020102010102010201010201010101010101020201020102010102020202020202010101010101020101010101010101020202020202020201010202020202010201010101020102010102010101010102010202010201020101020202020202020102010102010201010101010101020101020101020102010102020202020202010202020201030101010101010101010101010101010101`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . 2 . 2 . . . . . . . 2 . 2 2 
2 . 2 . 2 2 2 2 2 2 2 . 2 . 2 2 
2 . 2 . 2 . . . . . . . 2 . 2 2 
2 . . . . . 2 2 2 2 2 2 2 . 2 2 
2 . 2 2 2 2 2 . . . . . . . . 2 
2 . 2 . . . . . 2 . 2 2 . 2 . 2 
2 . 2 2 2 2 2 2 2 . . 2 . 2 2 2 
2 . . . . . . . 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 . . . . . . . . 2 
2 . . . . . 2 . 2 2 2 2 . 2 . 2 
2 . 2 2 2 2 2 . 2 . . 2 . 2 . 2 
2 . . . . . . . 2 . 2 2 . 2 . 2 
2 2 2 2 2 2 . 2 2 . 2 2 . 2 . 2 
2 . . . . . . . 2 . . . . 2 . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.castle.tileGrass2,sprites.castle.tileDarkGrass3,sprites.dungeon.collectibleBlueCrystal], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
