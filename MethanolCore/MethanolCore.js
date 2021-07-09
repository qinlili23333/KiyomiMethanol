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
document.body.innerHTML = Base64.decode("PGRpdiBpZD0iZmxvYXRUb3AiCiAgICBzdHlsZT0iei1pbmRleDogOTk5O3Bvc2l0aW9uOiBmaXhlZDtoZWlnaHQ6YXV0bzt3aWR0aDphdXRvO2xlZnQ6MHB4O3JpZ2h0OjBweDtwYWRkaW5nLWxlZnQ6IDVweDtwYWRkaW5nLXJpZ2h0OjVweDtib3gtc2hhZG93OiAwcHggMnB4IDJweCAxcHggcmdiYSgwLDAsMCwwLjUpO2JhY2tncm91bmQtY29sb3I6d2hpdGU7Ij4KICAgIDxzdmcgaWQ9ImxvYWRpbmdTdmciIHN0eWxlPSJkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiIgd2lkdGg9IjI0cHgiCiAgICAgIGhlaWdodD0iMjRweCIgZmlsbD0iI2U4N2E5MCI+CiAgICAgIDxwYXRoIG9wYWNpdHk9Ii4yNSIgZD0iTTE2IDAgQTE2IDE2IDAgMCAwIDE2IDMyIEExNiAxNiAwIDAgMCAxNiAwIE0xNiA0IEExMiAxMiAwIDAgMSAxNiAyOCBBMTIgMTIgMCAwIDEgMTYgNCIgLz4KICAgICAgPHBhdGggZD0iTTE2IDAgQTE2IDE2IDAgMCAxIDMyIDE2IEwyOCAxNiBBMTIgMTIgMCAwIDAgMTYgNHoiPgogICAgICAgIDxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgdHlwZT0icm90YXRlIiBmcm9tPSIwIDE2IDE2IiB0bz0iMzYwIDE2IDE2IiBkdXI9IjAuOHMiCiAgICAgICAgICByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgLz4KICAgICAgPC9wYXRoPgogICAgPC9zdmc+CiAgICA8SDIgc3R5bGU9ImRpc3BsYXk6IGlubGluZS1ibG9jazttYXJnaW46IDBweDsiPueDreaJqeWxlTwvSDI+CiAgICA8c3ZnIGlkPSJhZGRCdG4iIHN0eWxlPSJkaXNwbGF5OiBpbmxpbmUtYmxvY2s7cmlnaHQ6MjRweDtmbG9hdDpyaWdodDsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgICAgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMjQgMjQiIGhlaWdodD0iMzJweCIgdmlld0JveD0iMCAwIDI0IDI0IiB3aWR0aD0iMzJweCIgZmlsbD0iIzAwMDAwMCI+CiAgICAgIDxnPgogICAgICAgIDxyZWN0IGZpbGw9Im5vbmUiIGhlaWdodD0iMjQiIHdpZHRoPSIyNCIgLz4KICAgICAgPC9nPgogICAgICA8Zz4KICAgICAgICA8Zz4KICAgICAgICAgIDxwYXRoIGQ9Ik0xOSwxM2gtNnY2aC0ydi02SDV2LTJoNlY1aDJ2Nmg2VjEzeiIgLz4KICAgICAgICA8L2c+CiAgICAgIDwvZz4KICAgIDwvc3ZnPgogICAgPHN2ZyBpZD0iZGVsQnRuIiBzdHlsZT0iZGlzcGxheTogaW5saW5lLWJsb2NrO3JpZ2h0OjBweDtmbG9hdDpyaWdodDsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgICAgaGVpZ2h0PSIzMnB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIzMnB4IiBmaWxsPSIjMDAwMDAwIj4KICAgICAgPHBhdGggZD0iTTAgMGgyNHYyNEgweiIgZmlsbD0ibm9uZSIgLz4KICAgICAgPHBhdGggZD0iTTYgMTljMCAxLjEuOSAyIDIgMmg4YzEuMSAwIDItLjkgMi0yVjdINnYxMnpNMTkgNGgtMy41bC0xLTFoLTVsLTEgMUg1djJoMTRWNHoiIC8+PC9zdmc+CiAgPC9kaXY+CiAgPGRpdj4KICAgIDxiciBpZD0iYmxhbmticiI+CiAgICA8ZGl2IGlkPSJibGFua0RpdiI+PC9kaXY+CiAgICA8dWwgaWQ9Imxpc3RNb2R1bGUiIGNsYXNzPSJtZGMtbGlzdCBtZGMtbGlzdC0tdHdvLWxpbmUgbWRjLWxpc3QtLWF2YXRhci1saXN0Ij4KICAgIDwvdWw+CiAgPC9kaXY+CiAgPGRpdiBpZD0iYWRkUG9wIgogICAgc3R5bGU9ImRpc3BsYXk6bm9uZTt6LWluZGV4OiA5OTk7cG9zaXRpb246IGZpeGVkO2JhY2tncm91bmQtY29sb3I6IHdoaXRlO2hlaWdodDphdXRvO3dpZHRoOmF1dG87bGVmdDowcHg7cmlnaHQ6MHB4O2JvdHRvbTowcHg7cGFkZGluZy1sZWZ0OiA1cHg7cGFkZGluZy1yaWdodDo1cHg7Ym94LXNoYWRvdzogMHB4IC0ycHggMnB4IDFweCByZ2JhKDAsMCwwLDAuNSk7Ij4KICAgIDxkaXY+CiAgICAgIDxIMyBzdHlsZT0ibWFyZ2luOiA0cHg7ZGlzcGxheTogaW5saW5lLWJsb2NrOyI+5re75Yqg5omp5bGVPC9IMz4KICAgICAgPHN2ZyBpZD0iY2xvc2VQb3BCdG4iIHN0eWxlPSJkaXNwbGF5OiBpbmxpbmUtYmxvY2s7bWFyZ2luOjRweDtmbG9hdDpyaWdodDsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgICAgICBoZWlnaHQ9IjI0cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0cHgiIGZpbGw9IiMwMDAwMDAiPgogICAgICAgIDxwYXRoIGQ9Ik0wIDBoMjR2MjRIMHoiIGZpbGw9Im5vbmUiIC8+CiAgICAgICAgPHBhdGgKICAgICAgICAgIGQ9Ik0xOSA2LjQxTDE3LjU5IDUgMTIgMTAuNTkgNi40MSA1IDUgNi40MSAxMC41OSAxMiA1IDE3LjU5IDYuNDEgMTkgMTIgMTMuNDEgMTcuNTkgMTkgMTkgMTcuNTkgMTMuNDEgMTJ6IiAvPgogICAgICA8L3N2Zz4KICAgIDwvZGl2PgogICAgPGxhYmVsIHN0eWxlPSJ3aWR0aDoxMDAlOyIgY2xhc3M9Im1kYy10ZXh0LWZpZWxkIG1kYy10ZXh0LWZpZWxkLS1vdXRsaW5lZCIgZGF0YS1tZGMtYXV0by1pbml0PSJNRENUZXh0RmllbGQiPgogICAgICA8aW5wdXQgaWQ9ImxpbmsiIGNsYXNzPSJtZGMtdGV4dC1maWVsZF9faW5wdXQiIGFyaWEtbGFiZWxsZWRieT0ibXktbGFiZWwtaWQiPgogICAgICA8c3BhbiBjbGFzcz0ibWRjLW5vdGNoZWQtb3V0bGluZSI+CiAgICAgICAgPHNwYW4gY2xhc3M9Im1kYy1ub3RjaGVkLW91dGxpbmVfX2xlYWRpbmciPjwvc3Bhbj4KICAgICAgICA8c3BhbiBjbGFzcz0ibWRjLW5vdGNoZWQtb3V0bGluZV9fbm90Y2giPgogICAgICAgICAgPHNwYW4gY2xhc3M9Im1kYy1mbG9hdGluZy1sYWJlbCIgaWQ9Im15LWxhYmVsLWlkIj7ng63mianlsZVKU09O5Zyw5Z2AKOaUr+aMgURhdGEgVVJMKTwvc3Bhbj4KICAgICAgICA8L3NwYW4+CiAgICAgICAgPHNwYW4gY2xhc3M9Im1kYy1ub3RjaGVkLW91dGxpbmVfX3RyYWlsaW5nIj48L3NwYW4+CiAgICAgIDwvc3Bhbj4KICAgIDwvbGFiZWw+CiAgICA8YnI+CiAgICA8YnI+CiAgICA8ZGl2PgogICAgICA8YnV0dG9uIHN0eWxlPSJkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IiBvbmNsaWNrPSJvbmxpbmVNYXJrZXQoKTsiIGNsYXNzPSJtZGMtYnV0dG9uIGZvby1idXR0b24iPgogICAgICAgIDxkaXYgY2xhc3M9Im1kYy1idXR0b25fX3JpcHBsZSI+PC9kaXY+CiAgICAgICAgPHNwYW4gY2xhc3M9Im1kYy1idXR0b25fX2xhYmVsIj7lnKjnur/lr7vmib7mm7TlpJo8L3NwYW4+CiAgICAgIDwvYnV0dG9uPgogICAgICA8YnV0dG9uIHN0eWxlPSJkaXNwbGF5OiBpbmxpbmUtYmxvY2s7ZmxvYXQ6cmlnaHQ7IiBvbmNsaWNrPSJhZGRMaW5rKCk7IiBjbGFzcz0ibWRjLWJ1dHRvbiBmb28tYnV0dG9uIj4KICAgICAgICA8ZGl2IGNsYXNzPSJtZGMtYnV0dG9uX19yaXBwbGUiPjwvZGl2PgogICAgICAgIDxzcGFuIGlkPSJhZGRCdG5TcGFuIiBjbGFzcz0ibWRjLWJ1dHRvbl9fbGFiZWwiPua3u+WKoDwvc3Bhbj4KICAgICAgPC9idXR0b24+CiAgICA8L2Rpdj4KICAgIDxicj4KICA8L2Rpdj4=")
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
var thisVer="15";
if(!(storage.getItem("lastVer")==thisVer)){
storage.setItem("lastVer",thisVer)
setTimeout(Kiyomi.jsBigDialog("热扩展框架已自动更新","当前版本："+thisVer+"\n更新内容：\n修复了顶栏透明的问题\n修复了无法删除最后一个热扩展的问题\n优化界面显示"),0)
}
console.log("Version Checked!");


function onlineMarket() {
    alert("建设中尚未开放!")
}
function addLink() {
    document.getElementById("addBtnSpan").innerText = "解析中"
    document.getElementById("loadingSvg").style.display = "inline-block";
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
    document.getElementById("loadingSvg").style.display = "none";
                        document.getElementById("link").value = "";
                        LocalList.addNew(xhr.responseText);
                    } else {
                        document.getElementById("addBtnSpan").innerText = "添加";
    document.getElementById("loadingSvg").style.display = "none";
                    }
                } catch{
                    document.getElementById("addBtnSpan").innerText = "解析失败!"
    document.getElementById("loadingSvg").style.display = "none";
                }
            } else {
                document.getElementById("addBtnSpan").innerText = "解析失败!"
    document.getElementById("loadingSvg").style.display = "none";
            }
        }
    }
    xhr.onerror = function (e) {
        document.getElementById("addBtnSpan").innerText = "解析失败!"
    document.getElementById("loadingSvg").style.display = "none";
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
