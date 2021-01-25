var bullet;
var thickness,wall;
var speed,weight;

function setup() {
  createCanvas(1200,400);

  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);

  bullet = createSprite(50,200,60,10);
  bullet.shapeColor = color(165,42,42);
  wall = createSprite(1100,200,thickness,height/2);
  wall.shapeColor = color(80,80,80);

  bullet.velocityX = speed;
}

function draw() {
  background(0);
  
  if(hasCollided(bullet, wall))
  {
     bullet.velocityX = 0;
     var damage = 0.5* weight* speed* speed/(thickness* thickness* thickness);

     if (damage>10)
      {
        wall.shapeColor = color(255,0,0);
      }

     if(damage<10)
      {
       wall.shapeColor = color(0,255,0);
      }
  }
  drawSprites();
}

function hasCollided(lbullet, lwall)
{
   bulletRightEdge = lbullet.x + bullet.width;
   wallLeftEdge = lwall.x;
   if(bulletRightEdge>=wallLeftEdge)
   {
     return true
   }
     return false;
}