// Intestazione e piè di pagina comuni
(function(){
  const page = document.body.dataset.page || "";
  if (page === "pannello") return;
  const links = [
    ["chi-siamo.html","Chi siamo","chi"],
    ["prediche.html","Prediche","prediche"],
    ["devozionale.html","Devozionale","dev"],
    ["blog.html","Blog","blog"],
    ["visita.html","Contatti","visita"]
  ];
  const nav = links.map(l=>`<a href="${l[0]}" class="${page===l[2]?'on':''}">${l[1]}</a>`).join("");
  const head = `
  <header class="head"><div class="wrap">
    <a class="brand" href="index.html"><img src="assets/img/logo.png" alt="Chiesa Evangelica Logos"><span><b>Chiesa Evangelica Logos</b><small>Firenze</small></span></a>
    <nav class="nav" id="nav">${nav}<a class="btn" href="visita.html">Pianifica la tua visita</a></nav>
    <button class="menu" aria-label="Menu" onclick="document.getElementById('nav').classList.toggle('open')">☰</button>
  </div></header>`;
  const foot = `
  <footer class="foot"><div class="wrap">
    <div class="cols">
      <div>
        <span class="logo-w"><img src="assets/img/logo.png" alt="Logos"></span>
        <p style="max-width:24em;margin:0">Una chiesa centrata nel Vangelo e nella predicazione della Parola di Dio, a Firenze.</p><p style="max-width:24em;margin:10px 0 0;font-style:italic;color:#A3AA8E">Uniti nella Speranza, Legati nella Fede</p>
        <div class="soc"><a href="https://www.facebook.com/ChiesaLogos/" title="Facebook">FB</a><a href="https://www.instagram.com/chiesalogos/" title="Instagram">IG</a><a href="#" title="YouTube">YT</a><a href="#" title="Spotify">SP</a><a href="#" title="WhatsApp">WA</a></div>
      </div>
      <div><h4>Domenica</h4><span style="display:block;margin-bottom:8px">Accoglienza 10.00</span><span style="display:block;margin-bottom:8px">Culto 10.30 - 12.15</span><span>Via del Pergolino 1/4<br>50139 Firenze</span></div>
      <div><h4>Risorse</h4><a href="prediche.html">Prediche</a><a href="devozionale.html">Un giorno alla volta</a><a href="blog.html">Blog</a></div>
      <div><h4>La chiesa</h4><a href="chi-siamo.html">Chi siamo</a><a href="chi-siamo.html#credo">Cosa crediamo</a><a href="chi-siamo.html#pastori">I nostri pastori</a><a href="chi-siamo.html#incontri">Incontri</a><a href="visita.html">Contatti</a></div>
    </div>
    <div class="legal"><span>© 2026 Chiesa Evangelica Logos · Firenze</span><span>Prototipo di proposta, non è il sito ufficiale · contenuti delle prediche e del blog d'esempio · <a href="pannello.html" style="display:inline;color:#8E979F;text-decoration:underline">area riservata</a></span></div>
  </div></footer>`;
  document.body.insertAdjacentHTML("afterbegin", head);
  document.body.insertAdjacentHTML("beforeend", foot);
})();
