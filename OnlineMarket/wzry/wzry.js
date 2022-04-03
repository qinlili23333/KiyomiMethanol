let url = "";
for (; url.indexOf("weishi.qq.com") == -1;) {
    url = prompt("粘贴王者时刻地址\n你可以在分享到群或空间后打开在右上角按钮里复制链接");
};
location.replace(url);
Kiyomi.jsInjectButton1("javascript:location.replace(document.getElementsByTagName('video')[0].src)", "file:///android_asset/download.png")
