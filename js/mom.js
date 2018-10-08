momObj = function () {
    this.bigEye = new Image();
    this.bigBody = new Image();
    this.bigTail = new Image();
    this.x = 0;
    this.y = 0;
}
momObj.prototype.init = function(){
    this.bigEye.src = "./src/bigEye0.png";
    this.bigBody.src = "./src/bigSwim0.png";
    this.bigTail.src = "./src/bigTail0.png";
    this.x  = canWidth*0.5;
    this.y  = canHeight*0.5;
}

momObj.prototype.draw = function () {
    ctx1.clearRect(0,0,canWidth,canHeight);
    ctx1.save();
    ctx1.translate(this.x,this.y);
    ctx1.drawImage(this.bigEye,0,0,4,4);
    ctx1.drawImage(this.bigBody,-6,-8,20,20);
    ctx1.drawImage(this.bigTail,10,-5.5,15,15);
    ctx1.restore();
}