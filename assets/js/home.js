function adjustLayout() {
    const newWidth = window.innerWidth;
    const newHeight = window.innerHeight;
    console.log("窗口大小已调整为:", newWidth, "x", newHeight);
    let leftWidth = 0;
    let rightWidth = 0;
    if(newWidth < 800) 
    {
        rightWidth = newWidth;
    }
    else if(newWidth*0.7 < 800) 
    {
        leftWidth = 200;
        rightWidth = 600;
    }
    else
    {
        leftWidth = newWidth * 0.7*0.25;
        rightWidth = newWidth * 0.7*0.75;
    }

    centerLeft.style.width = leftWidth + "px";
    centerRight.style.width = rightWidth + "px";
    centerLeft.style.left=newWidth*0.5- (leftWidth+rightWidth)/2 + "px";
    centerRight.style.right=newWidth*0.5- (leftWidth+rightWidth)/2 + "px";
    layoutCenter.style.top = newHeight + "px";      
    if(leftWidth==0)
    {
        centerLeft.style.display = "none";
    }else{
        centerLeft.style.display = "block";
    }
    console.log("左侧布局宽度:", leftWidth, "px");
    console.log("右侧布局宽度:", rightWidth, "px");
    console.log("左侧布局位置:", centerLeft.style.left);
    console.log("右侧布局位置:", centerRight.style.left);
}


const centerLeft = document.querySelector(".center_left");
const centerRight = document.querySelector(".center_right");
const layoutCenter = document.querySelector(".layout_center");
adjustLayout();
window.addEventListener("resize", adjustLayout);


// 获取当前时间
const currentTime = new Date();
console.log("当前时间:", currentTime.toLocaleString());



