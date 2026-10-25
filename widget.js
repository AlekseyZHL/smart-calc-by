(function(){
  var s = document.currentScript;
  var client = (s && s.getAttribute("data-client")) || "okleika";
  var label = (s && s.getAttribute("data-label")) || "⚡ Рассчитать стоимость за 45 сек";
  var baseUrl = (s && s.src) ? s.src.replace(/widget\.js.*$/, "demo.html") : "demo.html";
  var demoSrc = baseUrl + "?client=" + encodeURIComponent(client);

  var btn = document.createElement("button");
  btn.innerHTML = label;
  btn.style.cssText = "position:fixed;right:20px;bottom:20px;z-index:99998;background:linear-gradient(135deg,#10b981,#059669);color:#03150e;border:none;border-radius:999px;padding:14px 22px;font:800 14px/1 -apple-system,BlinkMacSystemFont,sans-serif;box-shadow:0 12px 30px rgba(16,185,129,.45);cursor:pointer;transition:transform .2s";
  btn.onmouseenter = function(){ btn.style.transform = "scale(1.04)"; };
  btn.onmouseleave = function(){ btn.style.transform = "scale(1)"; };

  var modal = document.createElement("div");
  modal.style.cssText = "position:fixed;inset:0;z-index:99999;background:rgba(4,8,18,.82);backdrop-filter:blur(5px);display:none;align-items:center;justify-content:center;padding:12px";
  modal.innerHTML = '<div style="position:relative;width:100%;max-width:740px;height:88vh;background:#070b14;border-radius:20px;overflow:hidden;border:1px solid rgba(255,255,255,.15);box-shadow:0 25px 70px rgba(0,0,0,.7)">' +
    '<button id=" closeCalcModalBtn" style="position:absolute;top:10px;right:12px;z-index:10;background:#1e293b;color:#fff;border:1px solid rgba(255,255,255,.2);width:34px;height:34px;border-radius:50%;cursor:pointer;font-size:16px">✕</button>' +
    '<iframe src="' + demoSrc + '" style="width:100%;height:100%;border:0"></iframe></div>';

  btn.onclick = function(){ modal.style.display = "flex"; };
  modal.onclick = function(e){ if(e.target === modal || e.target.id.trim() === "closeCalcModalBtn") modal.style.display = "none"; };
  document.body.appendChild(btn);
  document.body.appendChild(modal);
})();
