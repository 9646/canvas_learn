window.onload = function () {
    draw();
}
function draw() {
    var canvas = document.getElementById("myCanvas");

    if (canvas.getContext) {
        var ctx = canvas.getContext("2d");
        
        // 区域1
        ctx.strokeRect(0, 0, 600, 400);
        // 区域2
        ctx.strokeRect(600, 0, 600, 400);
        // 区域3
        ctx.strokeRect(0, 400, 600, 400);
        // 区域4
        ctx.strokeRect(600, 400, 600, 400);




        // 1 矩形 线条 圆形
        // .fill()          填充    
        // .fillRect()      填充矩形

        // .clearRect()     清除矩形区域

        // .stroke()        线条
        // .strokeRect()    中空矩形线条

        // .beginPath()     初始化路径
        // .moveTo(210, 5)  起始点坐标
        // .lineTo(270, 5)  直线端点
        // .closePath()     自动闭合线条
        // .fill()/.stroke()绘制

        // .beginPath()
        // .arc(70, 200, 50, 0, Math.PI * 2, false)     画圆

        // ctx.quadraticCurveTo(10, 300, 10, 325);      贝塞尔曲线



        // 填充色
        ctx.fillStyle = "red";
        // 线条色
        ctx.strokeStyle = "red";

        ctx.fillRect(5, 5, 50, 50);
        // 设置填充样式
        ctx.fillStyle = "rgba(10, 10, 10, 0.5)"
        ctx.fillRect(30, 30, 50, 50);

        // 绘制填充的矩形
        ctx.fillRect(100, 5, 100, 100);
        // 清除矩形
        ctx.clearRect(110, 15, 60, 60);
        // 绘制中空的矩形
        ctx.strokeRect(140, 45, 40, 40);


        // -- 绘制线条
        // 初始化路径
        ctx.beginPath();
        // 起始点
        ctx.moveTo(210, 5);
        // 直线
        ctx.lineTo(220, 5);
        ctx.lineTo(230, 15);
        ctx.lineTo(220, 45);
        // 绘制填充区
        ctx.fill();



        ctx.beginPath();
        // 起始点
        ctx.moveTo(250, 5);
        // 直线
        ctx.lineTo(270, 5);
        ctx.lineTo(250, 45);
        ctx.lineTo(280, 15);
        // 闭合线条
        ctx.closePath();
        // 绘制线条
        ctx.stroke();


        // 开始绘画
        ctx.beginPath();
        // 画圆 x, y, r, 0π, 2π, 顺时针（false）
        ctx.arc(70, 200, 50, 0, Math.PI * 2, false);
        ctx.stroke();

        ctx.beginPath();
        // ctx.moveTo(110, 200);
        ctx.arc(70, 200, 40, 0, Math.PI, false);    //口(顺时针)
        ctx.stroke();

        ctx.beginPath();
        // ctx.moveTo(55, 190);
        ctx.arc(50, 190, 5, 0, Math.PI * 2, true);    // 左眼
        ctx.stroke();

        ctx.beginPath();
        // ctx.moveTo(95, 190);
        ctx.arc(90, 190, 5, 0, Math.PI * 2, true);    // 右眼
        ctx.stroke();




        ctx.beginPath();
        ctx.arc(320, 25, 2, 0, Math.PI * 2, true);
        ctx.fill();

        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 6; j++) {
                ctx.beginPath();
                var x = 320 + j * 50; // x 坐标值
                var y = 25 + i * 50; // y 坐标值
                var radius = 20; // 圆弧半径
                var startAngle = 0; // 开始点
                var endAngle = Math.PI + (Math.PI * j) / 4; // 结束点
                var anticlockwise = i % 2 == 0 ? false : true; // 顺时针或逆时针

                ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise);

                if (i > 1) {
                    ctx.fill();
                } else {
                    ctx.stroke();
                }
            }
        }

        // // 贝塞尔曲线(气泡)
        ctx.beginPath();
        ctx.moveTo(60, 300);
        ctx.quadraticCurveTo(10, 300, 10, 325);
        ctx.quadraticCurveTo(10, 350, 30, 350);
        ctx.quadraticCurveTo(30, 380, 10, 380);
        ctx.quadraticCurveTo(40, 380, 40, 350);
        ctx.quadraticCurveTo(110, 350, 110, 325);
        ctx.quadraticCurveTo(110, 300, 60, 300);
        ctx.stroke();

        // 存储线条的对象 path2D
        var circle = new Path2D();
        circle.moveTo(60, 300);
        circle.quadraticCurveTo(10, 300, 10, 325);
        circle.quadraticCurveTo(10, 350, 30, 350);
        circle.quadraticCurveTo(30, 380, 10, 380);
        circle.quadraticCurveTo(40, 380, 40, 350);
        circle.quadraticCurveTo(110, 350, 110, 325);
        circle.quadraticCurveTo(110, 300, 60, 300);
        ctx.stroke(circle)

        var p = new Path2D("M130 120 h 80 v 80 h -50 Z");
        ctx.stroke(p)




        // 2 colors

        // ctx.fillStyle = "red"        填充颜色
        // ctx.strokeStyle  = "red"     线条颜色

        var coordX = 600;
        var coordY = 0;
        var n = 8;
        for (let i = 0; i < n;  i++) {
            for (let j = 0; j < n; j++) {
                ctx.fillStyle = `rgb(${Math.floor(255-255/n*i)}, ${Math.floor(255-255/n*j)}, 0)`
                ctx.fillRect(coordX + i * 25, coordY+j*25, 25, 25);
            }
        }


        for (let i = 0; i < n;  i++) {
            for (let j = 0; j < n; j++) {
                ctx.strokeStyle = `rgb(0, ${Math.floor(255-255/n*i)}, ${Math.floor(255-255/n*j)})`;
                ctx.beginPath();
                ctx.arc(coordX + 300 + 10 + i * 25, coordY + j * 25 + 10, 10, 0, Math.PI * 2, true); 
                ctx.stroke();
            }
        }

        ctx.fillStyle="#FD0";
        ctx.fillRect(600, 200, 100, 100);
        ctx.fillStyle="#6C0";
        ctx.fillRect(700, 200, 100, 100);
        ctx.fillStyle="#09F";
        ctx.fillRect(600, 300, 100, 100);
        ctx.fillStyle="#F30";
        ctx.fillRect(700, 300, 100, 100);

        // 设置透明度
        ctx.globalAlpha = 0.2;
        ctx.fillStyle = "#FFF";

        for (let i = 0; i < n; i++) {
            ctx.beginPath();
            ctx.arc(700, 300, 100/n*(i+1), 0, Math.PI*2, true);
            ctx.fill();
        }

        ctx.globalAlpha = 1;
        ctx.fillStyle="#FD0";
        ctx.fillRect(900, 200, 200, 50);
        ctx.fillStyle="#6C0";
        ctx.fillRect(900, 250, 200, 50);
        ctx.fillStyle="#09F";
        ctx.fillRect(900, 300, 200, 50);
        ctx.fillStyle="#F30";
        ctx.fillRect(900, 350, 200, 50);

        for (let i = 0; i < n; i++) {
            ctx.fillStyle = `rgba(255, 255, 255, ${1/n * (i+1)})`;
            for (let j = 0; j < 4; j++) {
                ctx.fillRect(900 + (200 - 10)/n*i + 5, 200 + 50 * j + 5, (200 - 10)/n, 40);
            }            
        }



        // 线型 Line styles
        var x1 = 0;
        var y1 = 400;



        // ctx.lineWidth = 1;
        // ctx.moveTo(5, 405);
        // ctx.lineTo(5, 455);
        // ctx.stroke();

        for (let i = 0; i < 6; i++) {
            ctx.lineWidth = 1+i;
            ctx.beginPath();
            ctx.moveTo(5 + i*10, 405);
            ctx.lineTo(5 + i*10, 455);
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(5.5 + i*10, 455);
            ctx.lineTo(5.5 + i*10, 505);
            ctx.stroke();
        }


        // lineCap 属性的例子  

        // lineWidth 属性设置当前绘线的粗细。属性值必须为正数。默认值是1。

        // 创建路径
        ctx.strokeStyle = '#09f';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(x1 + 100, y1 + 10);
        ctx.lineTo(x1 + 200, y1 + 10);
        ctx.moveTo(x1 + 100, y1 + 140);
        ctx.lineTo(x1 + 200, y1 + 140);
        ctx.stroke();

        var lineCap = ['butt','round','square'];

        // 线条头
        ctx.strokeStyle = "black";
        for (let i = 0; i < lineCap.length; i++) {
            ctx.lineWidth = 15;
            ctx.beginPath();
            ctx.moveTo(120 + i * 30, 410);
            ctx.lineTo(120 + i * 30, 540);
            ctx.lineCap = lineCap[i];
            ctx.stroke();
        }

        // lineJoin 属性的例子  属性值决定了图形中两线段连接处所显示的样子。它可以是这三种之一：round, bevel 和 miter。默认是 miter。

        var lineJoin = ['round', 'bevel', 'miter'];
        ctx.lineWidth = 10;
        for (var i = 0; i < lineJoin.length; i++) {
            ctx.lineJoin = lineJoin[i];
            ctx.beginPath();
            ctx.moveTo(-5 + 220, y1 + 10 + 5 + i * 40);
            ctx.lineTo(35 + 220, y1 + 10 + 45 + i * 40);
            ctx.lineTo(75 + 220, y1 + 10  + 5 + i * 40);
            ctx.lineTo(115 + 220, y1 + 10 + 45 + i * 40);
            ctx.lineTo(155 + 220, y1 + 10 + 5 + i * 40);
            ctx.stroke();
        }




        // 渐变 Gradients
        // createLinearGradient 方法接受 4 个参数，表示渐变的起点 (x1,y1) 与终点 (x2,y2)。
        var lineargradient = ctx.createLinearGradient(0,0,150,150);
        // reateRadialGradient 方法接受 6 个参数，前三个定义一个以 (x1,y1) 为原点，半径为 r1 的圆，后三个参数则定义另一个以 (x2,y2) 为原点，半径为 r2 的圆。
        var radialgradient = ctx.createRadialGradient(75,75,0,75,75,100);

        var lineargradient1 = ctx.createLinearGradient(0, 500, 100, 500);
        // addColorStop 方法接受 2 个参数，position 参数必须是一个 0.0 与 1.0 之间的数值，表示渐变中颜色所在的相对位置。
        lineargradient1.addColorStop(0, 'red');
        lineargradient1.addColorStop(0.5, 'yellow');


        var lingrad = ctx.createLinearGradient(10,610,140,740);
        lingrad.addColorStop(0, '#00ABEB');
        lingrad.addColorStop(0.5, '#fff');
        lingrad.addColorStop(0.5, '#26C000');
        lingrad.addColorStop(1, '#fff');
      
        var lingrad2 = ctx.createLinearGradient(0,50,0,95);
        lingrad2.addColorStop(0.5, '#000');
        lingrad2.addColorStop(1, 'rgba(0,0,0,0)');
      
        // assign gradients to fill and stroke styles
        ctx.fillStyle = lingrad;
        // ctx.strokeStyle = lingrad2;
        
        // draw shapes
        ctx.fillRect(10,610,130,130);
        ctx.strokeRect(50,50,50,50);


        // createRadialGradient 的例子
         // 创建渐变
        var radgrad = ctx.createRadialGradient(200,600,10,230,600,50);
        // radgrad.addColorStop(0, '#A7D30C');
        // radgrad.addColorStop(0.9, '#019F62');
        // // radgrad.addColorStop(1, 'rgba(1,159,98,0)');
        // radgrad.addColorStop(1, 'rgba(00,00,00,0)');
        radgrad.addColorStop(0, "yellow");
        radgrad.addColorStop(0.99, "red");
        radgrad.addColorStop(1, 'rgba(00,00,00,0)');

        // 画图形
        ctx.fillStyle = radgrad;
        ctx.fillRect(0,0,1000,1000);




        // 创建新 image 对象，用作图案
        var img = new Image();
        img.src = 'https://mdn.mozillademos.org/files/222/Canvas_createpattern.png';
        img.onload = function() {
            // 创建图案
            var ptrn = ctx.createPattern(img, 'repeat');
            ctx.fillStyle = ptrn;
            ctx.fillRect(180, 670, 100, 100);

        }






        // 绘制文本
        ctx.fillStyle = "red";

        ctx.font = "48px serif";
        ctx.fillText("hello word", 400, 500);


        ctx.strokeText("hello word", 400, 600)

        ctx.font = "48px serif";
        ctx.textBaseline = "hanging";
        ctx.strokeText("Hello world", 400, 700);
    }
}

