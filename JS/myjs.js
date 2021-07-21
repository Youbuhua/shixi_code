// 1.图片轮播
let swiper_imgs = document.getElementsByClassName("swpierimgs");
let swiper_pots = document.getElementsByClassName("swpierpots");
let index = 0;
function changeImgs(){
    index++;
    if(index >= swiper_imgs.length){
        index = 0;
    }
    for(var i = 0; i < swiper_imgs.length; i++){
        swiper_imgs[i].style.display = 'none';
        swiper_pots[i].style.border = '3px solid #cccccc';
        swiper_pots[i].style.opacity = '0.6';
    }
    swiper_imgs[index].style.display = 'block';
    swiper_pots[index].style.border = '3px solid #0A2C86FF';
    swiper_pots[index].style.opacity = '1.0';
}
setInterval(changeImgs,3000);