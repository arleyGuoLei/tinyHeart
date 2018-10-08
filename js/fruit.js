var fruitObj = function () {
    this.x = [];
    this.y = [];
    this.l = [];
    this.spd = [];
    this.alive = [];//true
    this.orange = new Image();
    this.blue = new Image();
    this.type = [];
}

fruitObj.prototype.num = 20;

fruitObj.prototype.init = function () {
    this.orange.src = "./src/fruit.png";
    this.blue.src = "./src/blue.png";
    for (var i = 0; i <= this.num; i++) {
        this.alive[i] = false;
        this.x[i] = 0;
        this.y[i] = 0;
        this.l[i] = 0;
        this.spd[i] = (Math.random() * 0.1 + 0.05) * 0.05;
    }
}

fruitObj.prototype.draw = function () {
    for (var i = 0; i <= this.num; i++) {
        if (this.alive[i] === true) {
            if (this.l[i] <= 8) {
                this.l[i] += this.spd[i] * duration;
            } else {
                this.y[i] -= this.spd[i] * 5 * duration;
            }
            ctx2.drawImage(this.type[i], this.x[i] - this.l[i], this.y[i] - this.l[i], this.l[i], this.l[i]);
            if (this.y[i] <= 10) {
                this.alive[i] = false;
            }
        }
    }
}

fruitObj.prototype.born = function (i) {
    const aneId = Math.floor(Math.random() * ane.num);
    this.x[i] = ane.x[aneId];
    this.y[i] = ane.len[aneId];
    this.l[i] = 0;

    if(Math.random()<0.2){
        var pic = this.blue;
    }else {
        var pic = this.orange;
    }
    this.type[i] = pic;
}

function fruitMonitor() {
    var num = 0;
    for (var i = 0; i <= fruit.num; i++) {
        if (fruit.alive[i] === true) {
            num++;
        }
        if (num <= 10) {
            //send fruit
            sendFruit();
            return;
        }
    }
}

function sendFruit() {
    for (var i = 0; i <= fruit.num; i++) {
        if (fruit.alive[i] === false) {
            fruit.born(i);
            fruit.alive[i] = true;
        }
    }
}