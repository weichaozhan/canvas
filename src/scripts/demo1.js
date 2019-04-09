const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// 正方形
ctx.fillStyle = 'red';
ctx.fillRect(100, 100, 200, 200);

// 擦除效果
function clearAnimation(i = 0) {
    ctx.clearRect(100, i, 200, 1);
    if (i <= 300) {
        window.requestAnimationFrame(() => {
            clearAnimation(++ i);
        });
    }
}
window.requestAnimationFrame(() => {
    clearAnimation(100);
});
