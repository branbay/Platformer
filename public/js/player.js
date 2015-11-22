var speed = 50;
var hspeed = 50;
var gridsize = 8;
var spriteScale = 1;

Creator = function(game, x, y) {

  Phaser.Sprite.call(this, game, x, y, 'p1');
  this.scale.setTo(spriteScale);

  //Enable physics
  game.physics.enable(this, Phaser.Physics.ARCADE);
  this.collideWorldBounds = true;
  this.inputEnabled = true;
  this.input.enableSnap(32, 32, true, true);

  this.moveLeft = function() {
      this.body.velocity.x = -speed;
      this.body.velocity.y = 0;
  };

  this.moveRight = function() {
      this.body.velocity.x = speed;
      this.body.velocity.y = 0;
  };

  this.moveUp = function() {
      this.body.velocity.y = -speed;
      this.body.velocity.x = 0;
  };

  this.moveDown = function() {
      this.body.velocity.y = speed;
      this.body.velocity.x = 0;
  };

  this.stop = function(){
    if (this.body.velocity.x > 0)
    {
      this.body.x = this.body.x + gridsize - (this.body.x % gridsize);
    }
    else if (this.body.velocity.x < 0)
    {
      this.body.x = this.body.x - (this.body.x % gridsize);
    }

    if (this.body.velocity.y > 0)
    {
      this.body.y = this.body.y + gridsize - (this.body.y % gridsize);
    }
    else if (this.body.velocity.y < 0)
    {
      this.body.y = this.body.y - (this.body.y % gridsize);
    }
    this.body.velocity.x = 0;
    this.body.velocity.y = 0;
  };
};

Creator.prototype = Object.create(Phaser.Sprite.prototype);
Creator.prototype.constructor = Creator;

Destroyer = function(game, x, y) {

  Phaser.Sprite.call(this, game, x, y, 'p2');
  this.scale.setTo(spriteScale);

  //Enable physics
  game.physics.enable(this, Phaser.Physics.ARCADE);


  this.moveLeft = function() {
      this.body.velocity.x = -speed;
      this.body.velocity.y = 0;
  };
  this.moveRight = function() {
      this.body.velocity.x = speed;
      this.body.velocity.y = 0;
  };
  this.moveUp = function() {
      this.body.velocity.y = -speed;
      this.body.velocity.x = 0;
  };
  this.moveDown = function() {
      this.body.velocity.y = speed;
      this.body.velocity.x = 0;
  };

  this.stop = function(){
    this.body.velocity.x = 0;
    this.body.velocity.y = 0;

  };
};

Destroyer.prototype = Object.create(Phaser.Sprite.prototype);
Destroyer.prototype.constructor = Destroyer;


Hero = function(game, x, y) {

  Phaser.Sprite.call(this, game, x, y, 'p3');
  this.scale.setTo(spriteScale);

  //Enable physics
  game.physics.enable(this, Phaser.Physics.ARCADE);

  this.body.velocity.x = hspeed;

};

Hero.prototype = Object.create(Phaser.Sprite.prototype);
Hero.prototype.constructor = Hero;
