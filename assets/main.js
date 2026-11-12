// Intestazione e piè di pagina comuni del prototipo
(function(){
  const LOGO = `<svg viewBox="0 0 40 40" aria-hidden="true"><circle cx="20" cy="20" r="19" fill="#16233F"/><path d="M12.5 29 L20 10.5 L27.5 29" fill="none" stroke="#F7F3EA" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M15.5 24.5 h9" stroke="#D9826A" stroke-width="2.2" stroke-linecap="round"/></svg>`;
  const LOGO_LIGHT = LOGO.replace('fill="#16233F"','fill="#F7F3EA"').replace('stroke="#F7F3EA"','stroke="#16233F"');
  const page = document.body.dataset.page || "";
  const links = [
    ["chi-siamo.html","Chi siamo","chi"],
    ["prediche.html","Prediche","prediche"],
    ["devozionale.html","Devozionale","dev"],
    ["blog.html","Blog","blog"],
    ["visita.html","Vieni a trovarci","visita"]
  ];
  const nav = links.map(l=>`<a href="${l[0]}" class="${page===l[2]?'on':''}">${l[1]}</a>`).join("");
  const head = `
  <div class="proto"><b>Prototipo di proposta</b> · non è il sito ufficiale della chiesa · i contenuti delle prediche sono d'esempio</div>
  <header class="site-head"><div class="wrap">
    <a class="brand" href="index.html">${LOGO}<span><span class="name">Logos</span><span class="sub">Chiesa Evangelica · Firenze</span></span></a>
    <nav class="nav" id="nav">${nav}<a class="btn" href="visita.html">Domenica alle 10.30</a></nav>
    <button class="menu-btn" aria-label="Menu" onclick="document.getElementById('nav').classList.toggle('open')">☰</button>
  </div></header>`;
  const foot = `
  <footer class="foot"><div class="wrap">
    <div class="cols">
      <div>
        <a class="brand" href="index.html">${LOGO_LIGHT}<span><span class="name">Logos</span><span class="sub">Chiesa Evangelica · Firenze</span></span></a>
        <p style="margin-top:16px;max-width:22em">Una comunità evangelica che trova la sua identità nella grazia e nell'amore di Dio. Uniti nella speranza, legati nella fede.</p>
        <div class="social"><a href="#" title="YouTube">YT</a><a href="#" title="Instagram">IG</a><a href="#" title="Facebook">FB</a><a href="#" title="Spotify">SP</a><a href="#" title="WhatsApp">WA</a></div>
      </div>
      <div><h4>Domenica</h4><span style="display:block;margin-bottom:8px">Accoglienza 10.00</span><span style="display:block;margin-bottom:8px">Culto 10.30 - 12.15</span><span>Via del Pergolino 1/4<br>50139 Firenze</span></div>
      <div><h4>La Parola</h4><a href="prediche.html">Prediche</a><a href="devozionale.html">Un giorno alla volta</a><a href="blog.html">Blog</a><a href="prediche.html">Serie</a></div>
      <div><h4>La chiesa</h4><a href="chi-siamo.html">Chi siamo</a><a href="chi-siamo.html#credo">Cosa crediamo</a><a href="chi-siamo.html#pastori">Pastori</a><a href="chi-siamo.html#incontri">Incontri</a><a href="visita.html">Contatti</a></div>
    </div>
    <div class="legal"><span>© 2026 Chiesa Evangelica Logos · Prototipo a cura di Alejandro Caputo</span><span><a href="pannello.html" style="display:inline;color:#8E8778">Area riservata (anteprima)</a></span></div>
  </div></footer>`;
  if (page === "pannello") {
    document.body.insertAdjacentHTML("afterbegin", `<div class="proto"><b>Anteprima del centro di comando</b> · schermata dimostrativa, i pulsanti non sono attivi · <a href="index.html" style="color:#F2B9A6">torna al sito</a></div>`);
    return;
  }
  document.body.insertAdjacentHTML("afterbegin", head);
  document.body.insertAdjacentHTML("beforeend", foot);
})();
