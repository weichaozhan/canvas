/**
 * @description 绘制线段
 * @author weichaozhan
 */

const canvas = document.getElementById('canvas3');
const ctx = canvas.getContext('2d');

// 渐变色
const canvasGradient = ctx.createLinearGradient(100, 306, 480, 306);

canvasGradient.addColorStop(0, 'skyblue');
canvasGradient.addColorStop(0.5, 'orange');
canvasGradient.addColorStop(1, 'yellow');

ctx.lineWidth = 8;
ctx.strokeStyle = canvasGradient;

ctx.moveTo(100, 306);
ctx.lineTo(480, 306);
ctx.stroke();

function drawScreen () { 
    ctx.strokeStyle = '#f36';
    ctx.fillStyle = 'orange'; 
    ctx.lineWidth = 1; 
    
    ctx.beginPath(); 
    ctx.moveTo(50, 10); 
    ctx.lineTo(150, 10); 
    ctx.lineTo(150,200); 
    ctx.lineTo(200,200); 
    ctx.lineTo(200,150); 
    ctx.closePath(); 
    ctx.stroke(); 

    ctx.strokeStyle = '#f36'; 
    ctx.lineWidth = 1; 

    // beginPath 清空内存中之前的绘制路径信息
    ctx.beginPath();
    ctx.moveTo(240, 270); 
    ctx.lineTo(230, 10); 
    ctx.lineTo(260,230);
    // 填充
    ctx.fill();
    ctx.stroke(); 
    // closePath 良好习惯
    ctx.closePath();

}
drawScreen();