/*绘制海葵 api
*绘制直线
* beginPath
* closePath
* strokeStyle
* stroke
* lineWidth
* lineCap
*/

var aneObj = function () {
    this.x = [];
    this.len = [];
}

aneObj.prototype.num = 30;
aneObj.prototype.init = function () {
    console.log(this);
    for (var i = 0; i < this.num; i++) {
        this.x[i] = i * 10 + Math.random() * 10;
        this.len[i] = 95 + Math.random() * 10;
    }
}

aneObj.prototype.draw = function () {
    ctx2.save();

    ctx2.beginPath();
    ctx2.strokeStyle = "#3b154e";
    ctx2.lineWidth = 10;
    ctx2.lineCap = "round";
    ctx2.globalAlpha = 0.6;
    for (var i = 0; i < this.num; i++) {
        ctx2.beginPath();
        ctx2.moveTo(this.x[i], canHeight);//开始坐标
        ctx2.lineTo(this.x[i], this.len[i]);//结束坐标
        ctx2.stroke();
    }
    ctx2.restore();
}