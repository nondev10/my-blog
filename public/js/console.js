// My Console
console.log(`%c
███████╗ █████╗ ██╗   ██╗██╗  ██╗ ██████╗ ██╗    ██╗
██╔════╝██╔══██╗╚██╗ ██╔╝██║  ██║██╔═══██╗██║    ██║
███████╗███████║ ╚████╔╝ ███████║██║   ██║██║ █╗ ██║
╚════██║██╔══██║  ╚██╔╝  ██╔══██║██║   ██║██║███╗██║
███████║██║  ██║   ██║   ██║  ██║╚██████╔╝╚███╔███╔╝
╚══════╝╚═╝  ╚═╝   ╚═╝   ╚═╝  ╚═╝ ╚═════╝  ╚══╝╚══╝ 
                                                    
`, 'color: #00c3ff; font-size: 10px; font-family: "Courier New"');
console.log('© 2026 IOfficial. All Rights Reserved.');
console.log('Press `help()` to get help.');
console.log('%c个人网站%c https://shihao.us.kg/', 'background: #1e88e5; color: white; border-radius: 6px; padding: 4px 8px;', 'color: #000000');
console.log('%c字符画生成器%c https://www.perfcode.com/tools/generator/ascii-art', 'background: #1e88e5; color: white; border-radius: 6px; padding: 4px 8px;', 'color: #000000');

window.help = function() {
    console.log(`
helpYourself() - 请自便
beHappy() - 从今天起，做个幸福的人
transScreen() - 屏幕倒了？Let me help you!
rainbowSheep() - 彩虹🐏
    `);
};

// 整蛊代码来自 https://zhangpingguo.com/articleDetails/1714445755114

window.helpYourself = () => {document.designMode = "on"};
window.beHappy = () => { alert("Hahahahahah……"); beHappy(); };
window.transScreen = () => {document.body.style.transform = "rotate(180deg)"};

window.rainbowSheep = () => {
    setInterval(()=>document.documentElement.style.filter=`hue-rotate(${Math.random()*360}deg)`,100);
    // let hue=0;setInterval(()=>{hue=(hue+5)%360;document.documentElement.style.filter=`hue-rotate(${hue}deg) saturate(${1+Math.sin(Date.now()/1000)/2})`;},50);
};

window.scaleBoom = () => {
    var object = document.body;
    var scale = Math.random() * 1; // 随机放大倍数
    object.style.transform = `scale(${scale})`;
};

window.baBaBoi = () => {
    document.body.innerHTML = document.body.innerHTML.replace(/[\u4e00-\u9fa5]/g, function(c) {
    return String.fromCharCode(c.charCodeAt(0) ^ 0xA5); });
};

window.ghostMouse = () => {document.body.style.cursor = 'none'};
window.ctrlYou = () => {document.addEventListener('contextmenu', function(e) { e.preventDefault(); });}
window.txeTesrever = (node = document.body) => {
    if (node.nodeType === Node.TEXT_NODE) {
        node.nodeValue = node.nodeValue.split('').reverse().join('');
    } else {
        node = node.firstChild;
        while (node) {
            txeTesrever(node);
            node = node.nextSibling;
        }
    }
};

window.earthQuake = () => {
    var shakeInterval = setInterval(function() {
        var randomX = Math.floor(Math.random() * 21) - 10;
        var randomY = Math.floor(Math.random() * 21) - 10;
        document.body.style.transform = 'translate(' + randomX + 'px, ' + randomY + 'px)';
        document.body.style.height = '100vh';
    }, 50);

    // 移除setTimeout，让震动一直持续
    // setTimeout(function() {  
    //     clearInterval(shakeInterval);  
    //     alert('哈哈哈，你被整蛊了！')
    //     document.body.style.height = 'none';  
    //     document.body.style.transform = 'none';  
    // }, 3000); // 3秒后停止  
};
