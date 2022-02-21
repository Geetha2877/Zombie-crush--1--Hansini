class Base {
 constructor (x, y, w, h, color, isStatic) {
     let options = {isStatic:isStatic}
  
     this.w = w
     this.h= h
     this.color = color
     this.body = Bodies.rectangle(x,y,w,h,options);
  World.add(world,this.body)
}
 show(){
let pos = this.body.position
push()
translate(pos.x, pos.y)
rectMode(CENTER)
fill(this.color)
rect(0,0,this.w,this.h)
pop()
 }

   
}