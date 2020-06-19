var basket,b,g1,a,count,g2,g3,m,score=0,message,button,title;
function preload()
{
  b=loadAnimation("basket.png");

 
  g2=loadAnimation("gift2.png");

  g3=loadAnimation("gift3.png");


  bg=loadImage("bg.png")

}


function setup()
{
  createCanvas(500,600)
    basket= createSprite(185,550)
    basket.addAnimation("basket",b)
    basket.scale=0.4
    a=new Group();
    count=0

    message=createInput("");
    message.position(580,300);
    message.hide();
    button=createButton("SUBMIT")
    button.position(630,350);
    button.hide();
    title=createElement("h1")
    title.position(350,50);
    title.html("WRITE A MESSAGE FOR YOUR FATHER")
    title.hide()
   
}

var gs=0;
function draw()
{
  background(bg)
  button.mousePressed(function(){
    var greeting=createElement("h1");
    greeting.position(450,300);
    greeting.html(message.value());
    message.hide();
    button.hide();
    title.hide();
    gs=1
  })


  if(World.frameCount%70==0 &&score<10)
  {
    m=createSprite(random(0,500),-10,-60,30);
    m.velocityY=10;
    var r=Math.round(random(1,2))

    
    
    if(r==1)
    {
        m.addAnimation("gift2",g2);
        m.scale=0.2
    
    } 
    else
    if(r==2)
    {
        m.addAnimation("gift3",g3);
        m.scale=0.08
    
    }   
    a.add(m);
    count=count+1
    
  }



  for(var i=0;i<count;i=i+1)
  {
    var g=a.get(i);
    if(g.isTouching(basket)) 
    {
    g.destroy();
    count--;
    score++;
    
    }
  }
  

  if(score==10 &&gs==0)
  
  {
    message.show();
    button.show();
    title.show()
  }
  basket.x=World.mouseX
  
  
  if(gs==0 && score<10)
  {

    fill("black")
    textSize(20)
    text("SCORE:"+score,230,20);
    
  drawSprites()
  }
}







