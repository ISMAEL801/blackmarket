/* ===== Données partagées BLACK MARKET ===== */
const I18N = {
  fr:{
    nav_home:"Accueil", nav_maison:"La Maison", nav_cat:"Catalogues", nav_coll:"Collection", nav_contact:"Contact",
    hero_kicker:"Collection Automne — Hiver 2026", hero_title:"Black Market",
    hero_sub:"L'excellence, discrètement tissée", hero_cta:"Découvrir la collection", hero_cta2:"Notre histoire",
    mq:"Livraison offerte dès 131 200 FCFA|Retours 30 jours gratuits|Paiement 100% sécurisé|Fabriqué en Europe|Édition limitée : 30 pièces",
    m_kicker:"Depuis 2012", m_title:"La Maison Black Market",
    m_p1:"Née d'une exigence simple — ne jamais transiger sur la matière ni sur la coupe — Black Market sélectionne trente pièces d'exception par saison, tissées dans les meilleures maisons européennes.",
    m_p2:"Chaque vêtement est pensé pour durer : laines mérinos, cuirs pleine fleur, soies tissées main. Rien de superflu, tout d'essentiel.",
    m_sig:"— L'atelier, Paris",
    c_kicker:"Explorer", c_title:"Nos Catalogues", c_sub:"Cinq univers, une même exigence",
    s_kicker:"Sélection du moment", s_title:"Pièces Signature",
    sv1t:"Livraison offerte", sv1d:"Dès 131 200 FCFA d'achat, partout dans le monde",
    sv2t:"Retours 30 jours", sv2d:"Gratuits et sans condition",
    sv3t:"Paiement sécurisé", sv3d:"Cryptage bancaire de bout en bout",
    col_kicker:"Trente pièces d'exception", col_title:"La Collection", col_sub:"Sélectionnées avec exigence, saison après saison",
    n_kicker:"Restez informé", n_title:"La Lettre Black Market", n_sub:"Accès privé aux nouvelles collections et ventes privées",
    n_ph:"Votre adresse e-mail", n_btn:"S'inscrire", n_ok:"Merci — bienvenue dans la maison.",
    f_desc:"Maison de luxe parisienne. Trente pièces d'exception, deux fois par an. La qualité avant la quantité.",
    f_boutique:"Boutique", f_aide:"Aide", f_liv:"Livraison", f_ret:"Retours", f_taille:"Guide des tailles", f_suivre:"Suivez-nous",
    all:"Tous", foot:"© 2026 Black Market — Tous droits réservés", view:"Découvrir",
    ct_kicker:"Nous écrire", ct_title:"Contact", ct_sub:"Notre conciergerie vous répond sous 24 h",
    ct_name:"Nom complet", ct_mail:"Adresse e-mail", ct_msg:"Votre message", ct_send:"Envoyer le message",
    ct_ok:"Message envoyé — merci !",
    m_page_p3:"Chaque saison, notre comité de sélection parcourt les ateliers d'Europe à la recherche des matières les plus nobles et des gestes les plus sûrs."
  },
  en:{
    nav_home:"Home", nav_maison:"The House", nav_cat:"Catalogs", nav_coll:"Collection", nav_contact:"Contact",
    hero_kicker:"Autumn — Winter 2026 Collection", hero_title:"Black Market",
    hero_sub:"Excellence, quietly woven", hero_cta:"Explore the collection", hero_cta2:"Our story",
    mq:"Free shipping over 131,200 XOF|Free 30-day returns|100% secure payment|Made in Europe|Limited edition: 30 pieces",
    m_kicker:"Since 2012", m_title:"The House of Black Market",
    m_p1:"Born of a simple demand — never compromise on fabric or cut — Black Market selects thirty exceptional pieces each season, woven in the finest European maisons.",
    m_p2:"Every garment is made to last: merino wools, full-grain leathers, hand-woven silks. Nothing superfluous, everything essential.",
    m_sig:"— The atelier, Paris",
    c_kicker:"Explore", c_title:"Our Catalogs", c_sub:"Five worlds, one standard",
    s_kicker:"Selection of the moment", s_title:"Signature Pieces",
    sv1t:"Free shipping", sv1d:"On orders over 131,200 XOF, worldwide",
    sv2t:"30-day returns", sv2d:"Free and unconditional",
    sv3t:"Secure payment", sv3d:"End-to-end bank encryption",
    col_kicker:"Thirty exceptional pieces", col_title:"The Collection", col_sub:"Chosen with rigor, season after season",
    n_kicker:"Stay informed", n_title:"The Black Market Letter", n_sub:"Private access to new collections and private sales",
    n_ph:"Your e-mail address", n_btn:"Subscribe", n_ok:"Thank you — welcome to the house.",
    f_desc:"A Parisian luxury house. Thirty exceptional pieces, twice a year. Quality over quantity.",
    f_boutique:"Shop", f_aide:"Help", f_liv:"Shipping", f_ret:"Returns", f_taille:"Size guide", f_suivre:"Follow us",
    all:"All", foot:"© 2026 Black Market — All rights reserved", view:"Discover", search_ph:"Search a product...", no_res:"No product found",
    ct_kicker:"Write to us", ct_title:"Contact", ct_sub:"Our concierge replies within 24 h",
    ct_name:"Full name", ct_mail:"E-mail address", ct_msg:"Your message", ct_send:"Send message",
    ct_ok:"Message sent — thank you!",
    m_page_p3:"Each season, our selection committee travels across European ateliers seeking the noblest materials and the surest craftsmanship."
  }
};

const CATS = {
  manteaux:{fr:"Manteaux",en:"Coats",img:"assets/cat_manteaux.jpg"},
  hauts:{fr:"Hauts",en:"Tops",img:"assets/cat_hauts.jpg"},
  pantalons:{fr:"Pantalons",en:"Trousers",img:"assets/cat_pantalons.jpg"},
  chaussures:{fr:"Chaussures",en:"Shoes",img:"assets/cat_chaussures.jpg"},
  accessoires:{fr:"Accessoires",en:"Accessories",img:"assets/cat_accessoires.jpg"}
};

const PRODUCTS = [
  {img:"assets/p01.jpg",cat:"manteaux",fr:"Manteau laine noir",en:"Black wool overcoat",price:"846 200 FCFA"},
  {img:"assets/p02.jpg",cat:"hauts",fr:"Pull col roulé cachemire ivoire",en:"Ivory cashmere turtleneck",price:"314 900 FCFA"},
  {img:"assets/p03.jpg",cat:"pantalons",fr:"Pantalon laine anthracite",en:"Charcoal wool trousers",price:"255 800 FCFA"},
  {img:"assets/p04.jpg",cat:"chaussures",fr:"Bottines Chelsea cuir noir",en:"Black leather Chelsea boots",price:"406 700 FCFA"},
  {img:"assets/p05.jpg",cat:"accessoires",fr:"Ceinture cuir noir",en:"Black leather belt",price:"137 800 FCFA"},
  {img:"assets/p06.jpg",cat:"accessoires",fr:"Foulard soie noir",en:"Black silk scarf",price:"170 500 FCFA"},
  {img:"assets/p07.jpg",cat:"manteaux",fr:"Manteau chameau croisé",en:"Camel double-breasted coat",price:"951 100 FCFA"},
  {img:"assets/p08.jpg",cat:"hauts",fr:"Chemise popeline blanche",en:"White poplin shirt",price:"157 400 FCFA"},
  {img:"assets/p09.jpg",cat:"pantalons",fr:"Pantalon laine noir tailleur",en:"Black tailored trousers",price:"268 900 FCFA"},
  {img:"assets/p10.jpg",cat:"chaussures",fr:"Sneakers cuir blanc",en:"White leather sneakers",price:"354 200 FCFA"},
  {img:"assets/p11.jpg",cat:"accessoires",fr:"Sac cabas cuir noir",en:"Black leather tote bag",price:"583 800 FCFA"},
  {img:"assets/p12.jpg",cat:"chaussures",fr:"Mocassins cuir noir",en:"Black leather loafers",price:"367 300 FCFA"},
  {img:"assets/p13.jpg",cat:"hauts",fr:"Pull col rond cachemire noir",en:"Black cashmere crewneck",price:"341 100 FCFA"},
  {img:"assets/p14.jpg",cat:"manteaux",fr:"Blazer marine ajusté",en:"Navy tailored blazer",price:"511 600 FCFA"},
  {img:"assets/p15.jpg",cat:"pantalons",fr:"Pantalon lin beige ample",en:"Beige wide-leg linen trousers",price:"223 000 FCFA"},
  {img:"assets/p16.jpg",cat:"chaussures",fr:"Derbies bordeaux",en:"Burgundy derby shoes",price:"387 000 FCFA"},
  {img:"assets/p17.jpg",cat:"accessoires",fr:"Chapeau feutre noir",en:"Black wool fedora",price:"209 900 FCFA"},
  {img:"assets/p18.jpg",cat:"hauts",fr:"Cardigan maille crème",en:"Cream chunky knit cardigan",price:"295 200 FCFA"},
  {img:"assets/p19.jpg",cat:"manteaux",fr:"Trench noir classique",en:"Classic black trench coat",price:"754 400 FCFA"},
  {img:"assets/p20.jpg",cat:"hauts",fr:"Robe nuisette soie noire",en:"Black silk slip dress",price:"249 300 FCFA"},
  {img:"assets/p21.jpg",cat:"manteaux",fr:"Doudoune cuir matelassée",en:"Quilted leather puffer jacket",price:"1 102 000 FCFA"},
  {img:"assets/p22.jpg",cat:"hauts",fr:"Polo piqué marine",en:"Navy piqué polo shirt",price:"144 300 FCFA"},
  {img:"assets/p23.jpg",cat:"pantalons",fr:"Jean brut selvedge",en:"Raw selvedge jeans",price:"190 200 FCFA"},
  {img:"assets/p24.jpg",cat:"chaussures",fr:"Bottines chukka daim",en:"Suede chukka boots",price:"400 100 FCFA"},
  {img:"assets/p25.jpg",cat:"accessoires",fr:"Portefeuille cuir grainé",en:"Grained leather wallet",price:"118 100 FCFA"},
  {img:"assets/p26.jpg",cat:"hauts",fr:"T-shirt coton bio blanc",en:"Organic cotton tee",price:"62 300 FCFA"},
  {img:"assets/p27.jpg",cat:"manteaux",fr:"Parka laine fourrure",en:"Wool parka with fur trim",price:"996 700 FCFA"},
  {img:"assets/p28.jpg",cat:"pantalons",fr:"Chino coton beige",en:"Beige cotton chinos",price:"150 900 FCFA"},
  {img:"assets/p29.jpg",cat:"chaussures",fr:"Sneakers rétro cuir",en:"Retro leather sneakers",price:"373 900 FCFA"},
  {img:"assets/p30.jpg",cat:"accessoires",fr:"Lunettes de soleil écaille",en:"Tortoiseshell sunglasses",price:"223 000 FCFA"}
];

let lang = localStorage.getItem("bm-lang") || "fr";

function t(key){ return I18N[lang][key] || key; }

function applyLang(){
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach(el=>{ el.textContent = t(el.dataset.i18n); });
  document.querySelectorAll("[data-i18n-ph]").forEach(el=>{ el.placeholder = t(el.dataset.i18nPh); });
  const bf=document.getElementById("btn-fr"), be=document.getElementById("btn-en");
  if(bf){ bf.classList.toggle("on", lang==="fr"); be.classList.toggle("on", lang==="en"); }
  document.querySelectorAll(".nav-links a").forEach(a=>{
    a.classList.toggle("active", a.getAttribute("href") === location.pathname.split("/").pop());
  });
}
function setLang(l){ lang=l; localStorage.setItem("bm-lang", l); applyLang(); if(window.onLangChange) onLangChange(); }

function headerHTML(){
  return `<header id="header"><nav class="nav">
    <a class="logo" href="index.html">Black<span>Market</span></a>
    <ul class="nav-links">
      <li><a href="index.html" data-i18n="nav_home">Accueil</a></li>
      <li><a href="catalogues.html" data-i18n="nav_cat">Catalogues</a></li>
      <li><a href="collection.html" data-i18n="nav_coll">Collection</a></li>
      <li><a href="contact.html" data-i18n="nav_contact">Contact</a></li>
    </ul>
    <form class="search" onsubmit="location.href='collection.html?q='+encodeURIComponent(this.q.value);return false">
      <input name="q" type="search" data-i18n-ph="search_ph" placeholder="Rechercher...">
    </form>
    <div style="display:flex;align-items:center;gap:12px">
      <div class="lang"><button id="btn-fr" onclick="setLang('fr')">FR</button><button id="btn-en" onclick="setLang('en')">EN</button></div>
      <button class="burger" id="burger" onclick="document.querySelector('.nav-links').classList.toggle('open')">☰</button>
    </div>
  </nav></header>`;
}
function footerHTML(){
  return `<footer><div class="cols">
    <div><div class="flogo">Black Market</div><p data-i18n="f_desc"></p></div>
    <div><h5 data-i18n="f_boutique"></h5><a href="collection.html" data-i18n="nav_coll"></a><a href="catalogues.html" data-i18n="nav_cat"></a><a href="contact.html" data-i18n="nav_contact"></a></div>
    <div><h5 data-i18n="f_aide"></h5><a href="contact.html" data-i18n="f_liv"></a><a href="contact.html" data-i18n="f_ret"></a><a href="contact.html" data-i18n="f_taille"></a></div>
    <div><h5 data-i18n="f_suivre"></h5><a href="#">Instagram</a><a href="#">Pinterest</a><a href="#">TikTok</a></div>
  </div><div class="base" data-i18n="foot"></div></footer>`;
}
function injectChrome(){
  document.body.insertAdjacentHTML("afterbegin", headerHTML());
  document.body.insertAdjacentHTML("beforeend", footerHTML());
  window.addEventListener("scroll",()=>document.getElementById("header").classList.toggle("scrolled", window.scrollY>60));
  applyLang();
}
