//for test
var KiyomiDebug = {
    jsSetTitle: function (title) {
        document.title = title;
    },
    jsCallActivityWithUrl: function (a, b, link) {
        window.open(link.substring(link.indexOf("?")), 'target', '');
    }
}




console.log("Methanol Core Loaded!");
window.removeEventListener('error', windowErrorHandler);
document.body.innerHTML = Base64.decode("PGRpdiBpZD0iZmxvYXRUb3AiDQogICAgc3R5bGU9InotaW5kZXg6IDk5OTtwb3NpdGlvbjogZml4ZWQ7aGVpZ2h0OmF1dG87d2lkdGg6YXV0bztsZWZ0OjBweDtyaWdodDowcHg7cGFkZGluZy1sZWZ0OiA1cHg7cGFkZGluZy1yaWdodDo1cHg7Ym94LXNoYWRvdzogMHB4IDJweCAycHggMXB4IHJnYmEoMCwwLDAsMC41KTsiPg0KICAgIDxzdmcgaWQ9ImxvYWRpbmdTdmciIHN0eWxlPSJkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiIgd2lkdGg9IjI0cHgiDQogICAgICBoZWlnaHQ9IjI0cHgiIGZpbGw9IiNlODdhOTAiPg0KICAgICAgPHBhdGggb3BhY2l0eT0iLjI1IiBkPSJNMTYgMCBBMTYgMTYgMCAwIDAgMTYgMzIgQTE2IDE2IDAgMCAwIDE2IDAgTTE2IDQgQTEyIDEyIDAgMCAxIDE2IDI4IEExMiAxMiAwIDAgMSAxNiA0IiAvPg0KICAgICAgPHBhdGggZD0iTTE2IDAgQTE2IDE2IDAgMCAxIDMyIDE2IEwyOCAxNiBBMTIgMTIgMCAwIDAgMTYgNHoiPg0KICAgICAgICA8YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iIHR5cGU9InJvdGF0ZSIgZnJvbT0iMCAxNiAxNiIgdG89IjM2MCAxNiAxNiIgZHVyPSIwLjhzIg0KICAgICAgICAgIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiAvPg0KICAgICAgPC9wYXRoPg0KICAgIDwvc3ZnPg0KICAgIDxIMiBzdHlsZT0iZGlzcGxheTogaW5saW5lLWJsb2NrO21hcmdpbjogMHB4OyI+54Ot5omp5bGVPC9IMj4NCiAgICA8c3ZnIGlkPSJhZGRCdG4iIHN0eWxlPSJkaXNwbGF5OiBpbmxpbmUtYmxvY2s7cmlnaHQ6MjRweDtmbG9hdDpyaWdodDsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyINCiAgICAgIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDI0IDI0IiBoZWlnaHQ9IjMycHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjMycHgiIGZpbGw9IiMwMDAwMDAiPg0KICAgICAgPGc+DQogICAgICAgIDxyZWN0IGZpbGw9Im5vbmUiIGhlaWdodD0iMjQiIHdpZHRoPSIyNCIgLz4NCiAgICAgIDwvZz4NCiAgICAgIDxnPg0KICAgICAgICA8Zz4NCiAgICAgICAgICA8cGF0aCBkPSJNMTksMTNoLTZ2NmgtMnYtNkg1di0yaDZWNWgydjZoNlYxM3oiIC8+DQogICAgICAgIDwvZz4NCiAgICAgIDwvZz4NCiAgICA8L3N2Zz4NCiAgICA8c3ZnIGlkPSJkZWxCdG4iIHN0eWxlPSJkaXNwbGF5OiBpbmxpbmUtYmxvY2s7cmlnaHQ6MHB4O2Zsb2F0OnJpZ2h0OyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIg0KICAgICAgaGVpZ2h0PSIzMnB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIzMnB4IiBmaWxsPSIjMDAwMDAwIj4NCiAgICAgIDxwYXRoIGQ9Ik0wIDBoMjR2MjRIMHoiIGZpbGw9Im5vbmUiIC8+DQogICAgICA8cGF0aCBkPSJNNiAxOWMwIDEuMS45IDIgMiAyaDhjMS4xIDAgMi0uOSAyLTJWN0g2djEyek0xOSA0aC0zLjVsLTEtMWgtNWwtMSAxSDV2MmgxNFY0eiIgLz48L3N2Zz4NCiAgPC9kaXY+DQogIDxkaXY+DQogICAgPGJyIGlkPSJibGFua2JyIj4NCiAgICA8ZGl2IGlkPSJibGFua0RpdiI+PC9kaXY+DQogICAgPHVsIGlkPSJsaXN0TW9kdWxlIiBjbGFzcz0ibWRjLWxpc3QgbWRjLWxpc3QtLXR3by1saW5lIG1kYy1saXN0LS1hdmF0YXItbGlzdCI+DQogICAgPC91bD4NCiAgPC9kaXY+DQogIDxkaXYgaWQ9ImFkZFBvcCINCiAgICBzdHlsZT0iZGlzcGxheTpub25lO3otaW5kZXg6IDk5OTtwb3NpdGlvbjogZml4ZWQ7YmFja2dyb3VuZC1jb2xvcjogd2hpdGU7aGVpZ2h0OmF1dG87d2lkdGg6YXV0bztsZWZ0OjBweDtyaWdodDowcHg7Ym90dG9tOjBweDtwYWRkaW5nLWxlZnQ6IDVweDtwYWRkaW5nLXJpZ2h0OjVweDtib3gtc2hhZG93OiAwcHggLTJweCAycHggMXB4IHJnYmEoMCwwLDAsMC41KTsiPg0KICAgIDxkaXY+DQogICAgICA8SDMgc3R5bGU9Im1hcmdpbjogNHB4O2Rpc3BsYXk6IGlubGluZS1ibG9jazsiPua3u+WKoOaJqeWxlTwvSDM+DQogICAgICA8c3ZnIGlkPSJjbG9zZVBvcEJ0biIgc3R5bGU9ImRpc3BsYXk6IGlubGluZS1ibG9jazttYXJnaW46NHB4O2Zsb2F0OnJpZ2h0OyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIg0KICAgICAgICBoZWlnaHQ9IjI0cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0cHgiIGZpbGw9IiMwMDAwMDAiPg0KICAgICAgICA8cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIiAvPg0KICAgICAgICA8cGF0aA0KICAgICAgICAgIGQ9Ik0xOSA2LjQxTDE3LjU5IDUgMTIgMTAuNTkgNi40MSA1IDUgNi40MSAxMC41OSAxMiA1IDE3LjU5IDYuNDEgMTkgMTIgMTMuNDEgMTcuNTkgMTkgMTkgMTcuNTkgMTMuNDEgMTJ6IiAvPg0KICAgICAgPC9zdmc+DQogICAgPC9kaXY+DQogICAgPGxhYmVsIHN0eWxlPSJ3aWR0aDoxMDAlOyIgY2xhc3M9Im1kYy10ZXh0LWZpZWxkIG1kYy10ZXh0LWZpZWxkLS1vdXRsaW5lZCIgZGF0YS1tZGMtYXV0by1pbml0PSJNRENUZXh0RmllbGQiPg0KICAgICAgPGlucHV0IGlkPSJsaW5rIiBjbGFzcz0ibWRjLXRleHQtZmllbGRfX2lucHV0IiBhcmlhLWxhYmVsbGVkYnk9Im15LWxhYmVsLWlkIj4NCiAgICAgIDxzcGFuIGNsYXNzPSJtZGMtbm90Y2hlZC1vdXRsaW5lIj4NCiAgICAgICAgPHNwYW4gY2xhc3M9Im1kYy1ub3RjaGVkLW91dGxpbmVfX2xlYWRpbmciPjwvc3Bhbj4NCiAgICAgICAgPHNwYW4gY2xhc3M9Im1kYy1ub3RjaGVkLW91dGxpbmVfX25vdGNoIj4NCiAgICAgICAgICA8c3BhbiBjbGFzcz0ibWRjLWZsb2F0aW5nLWxhYmVsIiBpZD0ibXktbGFiZWwtaWQiPueDreaJqeWxlUpTT07lnLDlnYAo5pSv5oyBRGF0YSBVUkwpPC9zcGFuPg0KICAgICAgICA8L3NwYW4+DQogICAgICAgIDxzcGFuIGNsYXNzPSJtZGMtbm90Y2hlZC1vdXRsaW5lX190cmFpbGluZyI+PC9zcGFuPg0KICAgICAgPC9zcGFuPg0KICAgIDwvbGFiZWw+DQogICAgPGJyPg0KICAgIDxicj4NCiAgICA8ZGl2Pg0KICAgICAgPGJ1dHRvbiBzdHlsZT0iZGlzcGxheTogaW5saW5lLWJsb2NrOyIgb25jbGljaz0ib25saW5lTWFya2V0KCk7IiBjbGFzcz0ibWRjLWJ1dHRvbiBmb28tYnV0dG9uIj4NCiAgICAgICAgPGRpdiBjbGFzcz0ibWRjLWJ1dHRvbl9fcmlwcGxlIj48L2Rpdj4NCiAgICAgICAgPHNwYW4gY2xhc3M9Im1kYy1idXR0b25fX2xhYmVsIj7lnKjnur/lr7vmib7mm7TlpJo8L3NwYW4+DQogICAgICA8L2J1dHRvbj4NCiAgICAgIDxidXR0b24gc3R5bGU9ImRpc3BsYXk6IGlubGluZS1ibG9jaztmbG9hdDpyaWdodDsiIG9uY2xpY2s9ImFkZExpbmsoKTsiIGNsYXNzPSJtZGMtYnV0dG9uIGZvby1idXR0b24iPg0KICAgICAgICA8ZGl2IGNsYXNzPSJtZGMtYnV0dG9uX19yaXBwbGUiPjwvZGl2Pg0KICAgICAgICA8c3BhbiBpZD0iYWRkQnRuU3BhbiIgY2xhc3M9Im1kYy1idXR0b25fX2xhYmVsIj7mt7vliqA8L3NwYW4+DQogICAgICA8L2J1dHRvbj4NCiAgICA8L2Rpdj4NCiAgICA8YnI+DQogIDwvZGl2Pg==")
setTimeout(Kiyomi.jsSetTitle("热扩展"), 0)
console.log("Main Content Loaded!");
var jsonTextList;
var storage = window.localStorage;
var searchParams = new URLSearchParams(document.location.search);
console.log("Variables Initialized!");
window.mdc.autoInit();
for (i = 0; document.getElementsByClassName("mdc-button foo-button")[i]; i++) {
    mdc.ripple.MDCRipple.attachTo(document.getElementsByClassName("mdc-button foo-button")[i]);
}
console.log("Material Components Initialized!");
document.getElementById("addBtn").onclick = function () {
    document.getElementById("addPop").style.display = "block";
    document.getElementById("link").focus();
}
var delmode;
document.getElementById("delBtn").onclick = function () {
    if (!delmode) {
        document.getElementById("delBtn").style.fill = "rgba(255,0,0,1)";
        alert("删除模式启用!\n请点击要删除的项目");
        delmode = true;
    } else {
        document.getElementById("delBtn").style.fill = "rgba(0,0,0,1)";
        alert("删除模式关闭!");
        delmode = false;
    }
}
document.getElementById("closePopBtn").onclick = function () {
    document.getElementById("addPop").style.display = "none";
}
console.log("Listener Added!");
document.getElementById("blankDiv").style.marginTop = (document.getElementById("floatTop").clientHeight - 10) + "px"
drawList();
console.log("List Loaded!");
if(searchParams.get("addurl")){
    document.getElementById("addPop").style.display = "block";
    document.getElementById("link").focus();
    document.getElementById("link").value=searchParams.get("addurl");
    addLink();
}
console.log("Param Processed!!");
PullToRefresh.init({
  mainElement: '#listModule', 
  onRefresh: function(){
  drawList();
  }
});
console.log("PullToRefresh Initialized!");



function onlineMarket() {
    alert("建设中尚未开放!")
}
function addLink() {
    document.getElementById("addBtnSpan").innerText = "解析中"
    var xhr = new XMLHttpRequest();
    xhr.onload = event => {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                try {
                    jsonText = JSON.parse(xhr.responseText);
                    var r = confirm("你正在添加这个热扩展:\n名称:" + jsonText.name + "\n描述:" + jsonText.info);
                    if (r == true) {
                        alert("添加成功!")
                        document.getElementById("addPop").style.display = "none";
                        document.getElementById("addBtnSpan").innerText = "添加";
                        document.getElementById("link").value = "";
                        LocalList.addNew(xhr.responseText);
                    } else {
                        document.getElementById("addBtnSpan").innerText = "添加";
                    }
                } catch{
                    document.getElementById("addBtnSpan").innerText = "解析失败!"
                }
            } else {
                document.getElementById("addBtnSpan").innerText = "解析失败!"
            }
        }
    }
    xhr.onerror = function (e) {
        document.getElementById("addBtnSpan").innerText = "解析失败!"
    }
    xhr.open('GET', document.getElementById("link").value)
    xhr.send()
}
var maxnum = 0;
var LocalList = {
    addNew: function (rawjson) {
        storage.setItem("list" + (this.getMaxNum() + 1), rawjson);
        drawList();
    },
    clickItem: function (num) {
        if (!delmode) {
            this.openItem(num);
        } else {
            this.delItem(num);
        }
    },
    delItem: function (num) {
        jsonTextList = JSON.parse(storage.getItem("list" + num))
        var r = confirm("你正在删除这个热扩展:\n名称:" + jsonTextList.name + "\n描述:" + jsonTextList.info);
        if (r == true) {
            alert("删除成功!")
if(num==0){storage.removeItem("list0")}
if(!storage.getItem("list" + (num + 1))){storage.removeItem("list" + num)}
            for (num = num; storage.getItem("list" + (num + 1)); num++) {
                storage.setItem("list" + num, storage.getItem("list" + (num + 1)));
                storage.removeItem("list" + (num + 1))
            }
            drawList();
        } else {
        }
    },
    openItem: function (num) {
        Kiyomi.jsCallActivityWithUrl("moe.qinlili.standalone.njucm.jwc", "qinlili.Kiyomi.LiteBrowser.Browser", "file:///android_asset/HotPlug/run.html?json=" + encodeURIComponent(storage.getItem("list" + num)))
    },
    getMaxNum: function () {
        for (maxnum = 0; storage.getItem("list" + maxnum); maxnum++) {
        }
        maxnum--
        return maxnum;
    }
}
function drawList() {
    document.getElementById("loadingSvg").style.display = "inline-block";
    document.getElementById("listModule").innerHTML = "";
    function makeItem(name, info, avatar) {
        var newItem = document.createElement("li");
        newItem.className = "mdc-list-item";
        var rippleSpan = document.createElement("span");
        rippleSpan.className = "mdc-list-item__ripple";
        newItem.appendChild(rippleSpan);
        var avatarSpan = document.createElement("span");
        avatarSpan.className = "mdc-list-item__graphic";
        var imgItem = document.createElement("img");
        imgItem.src = avatar;
        imgItem.style.height="100%";
        imgItem.style.width="100%";
        avatarSpan.appendChild(imgItem);
        newItem.appendChild(avatarSpan);
        var textSpan = document.createElement("span");
        textSpan.className = "mdc-list-item__text";
        var nameSpan = document.createElement("span");
        nameSpan.className = "mdc-list-item__primary-text";
        nameSpan.innerText = name;
        textSpan.appendChild(nameSpan);
        var infoSpan = document.createElement("span");
        infoSpan.className = "mdc-list-item__secondary-text";
        infoSpan.innerText = info;
        textSpan.appendChild(infoSpan);
        newItem.appendChild(textSpan);
        return newItem;
    }
    var itemTemp;
    for (num = 0; storage.getItem("list" + num); num++) {
        jsonTextList = JSON.parse(storage.getItem("list" + num))
        itemTemp = makeItem(jsonTextList.name, jsonTextList.info, jsonTextList.icon)
        itemTemp.setAttribute("num", num)
        itemTemp.onclick = function () {
            LocalList.clickItem(Number(this.getAttribute("num")));
        }
        document.getElementById("listModule").appendChild(itemTemp);
    }

    const MDCList = mdc.list.MDCList;
    const MDCRipple = mdc.ripple.MDCRipple;
    const list = new MDCList(document.getElementById("listModule"));
    const listItemRipples = list.listElements.map((listItemEl) => new MDCRipple(listItemEl));
    document.getElementById("loadingSvg").style.display = "none";
}