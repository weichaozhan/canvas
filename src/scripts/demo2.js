const canvas = document.getElementById('canvas2');
const ctx = canvas.getContext('2d');

// 绘制坐标系
function drawCoordinateSystem() {
    // 步长
    const dx = dy = 50;
    // 原点坐标
    let x = 0.5;
    let y = 0.5;
    const w = canvas.width;
    const h = canvas.height;
    // 单个步长表示的宽度
    let xy = 10;
    const lineColor = '#000';

    // 坐标位置
    let fp = xy;

    ctx.lineWidth = 1;
    ctx.strokeStyle = lineColor;
    
    // 横线
    while(y < h - dy) {
        y = y + dy;

        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();

        ctx.font = '12px Calibri';
        ctx.fillText(fp, 4, y + 12);

        fp += xy;
    }

    fp = xy;

    // 竖线
    while(x < w - dx) {
        x = x + dx;

        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();

        ctx.font = '12px Calibri';
        ctx.fillText(fp, x + 4, 12);

        fp += xy;
    }

}

drawCoordinateSystem();