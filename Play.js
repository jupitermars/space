boil.Play = function(){};
var ship;
var cursors;
var enemy
boil.Play.prototype = {
    preload: function(){
     game.load.image('ship','Assets/Backgrounds/heroship1.png');
     game.load.image('background','Assets/Backgrounds/background1.png');
     game.load.image('enemy','Assets/Sprites/enemy 1.png');
    },
    create: function(){
         game.physics.startSystem(Phaser.Physics.ARCADE);
        
    
        game.add.tileSprite(0, 0, 800, 600, 'background');
        for (var y = 0; y < 4; y++)
        {
            for (var x = 0; x < 10; x++)
            {
                var enemy = game.add.sprite(x * 52 + 250, y * 52 + 20, 'enemy');
                enemy.anchor.setTo(0.5, 0.5);
               enemy.scale.setTo(.25,.25);
            }
        }
        
        
        
        
         ship = game.add.sprite(400,500, 'ship');
        ship.scale.setTo(.5,.5);
        ship.anchor.setTo(0.5, 0.5);
        game.physics.enable(ship, Phaser.Physics.ARCADE);
        cursors = game.input.keyboard.createCursorKeys();
        
    
    },
    update: function(){
        
        
     if (cursors.left.isDown)
        {
            ship.body.velocity.x = -200;
        }
        else if (cursors.right.isDown)
        {
            ship.body.velocity.x = 200;
        }
    
    }
};