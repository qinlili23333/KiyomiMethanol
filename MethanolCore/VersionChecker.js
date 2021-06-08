var latestKiyomi=70;
if(latestKiyomi>localKiyomi){
  alert("本地小轻版本过低！你需要升级后继续使用");
  document.getElementById("ver").innerText="小轻可更新到"+latestKiyomi;
}
var latestCore=1;
if(latestCore>localCore){
  alert("核心有更新可用，下次启动时会尝试更新")
  document.getElementById("ver").innerText="核心可更新到"+latestCore;
}
