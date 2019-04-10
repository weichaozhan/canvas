const canvas = document.getElementById('canvas4');
const ctx = canvas.getContext('2d');

// 绘制圆点线
window.CanvasRenderingContext2D && (CanvasRenderingContext2D.prototype.drawDottedLine = function (x1, y1, x2, y2, interval, lineWidth) {
    if (!interval) {
        interval = 5;
    }
    if (!lineWidth) {
        lineWidth = 1;
    }

    const isHorizontal = x1 == x2 ? false : true;
    const len = isHorizontal ? x2 - x1 : y2 - y1;

    this.moveTo(x1, y1);
    
    let progress = 0;
    const scale = (y2 - y1)/(x2 - x1);

    while (len > progress) {
        progress += interval;

        if (progress > len) {
            process = len;
        }

        if (isHorizontal) {
            const newX = x1 + progress;
            const newY = y1 + progress * scale;
            
            this.moveTo(newX, y1);
            this.arc(newX, newY, lineWidth, 0, Math.PI * 2, true);
            this.fill()
        } else {
            const newY = y1 + progress;

            this.moveTo(x1, newY);
            this.arc(x1, newY, lineWidth, 0, Math.PI * 2, true);
            this.fill();
        }
    }
});

ctx.drawDottedLine(0,10,100,20);