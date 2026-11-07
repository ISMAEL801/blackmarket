/* ===== Admin partagé BLACK MARKET ===== */
const ADMIN_I18N = {
  fr:{d_dash:"Tableau de bord",d_prod:"Produits",d_ord:"Commandes",d_cli:"Clients",d_site:"Voir le site →",
    d_title:"Tableau de bord",d_who:"Bonjour, Maison BM",
    st_rev:"Chiffre d'affaires (FCFA)",st_ord:"Commandes",st_cli:"Clients",st_pan:"Panier moyen (FCFA)",
    d_sales:"Ventes des 7 derniers jours (FCFA)",d_top:"Meilleures ventes",d_recent:"Commandes récentes",
    t_ref:"Référence",t_cli:"Client",t_prod:"Produit",t_mont:"Montant",t_stat:"Statut",t_date:"Date",t_cat:"Catégorie",t_prix:"Prix",t_stock:"Stock",
    s_ok:"Livrée",s_wait:"En attente",s_ship:"Expédiée",
    p_count:"30 produits référencés", c_count:"1 032 clients enregistrés", c_mail:"E-mail", c_since:"Client depuis", c_spent:"Total dépensé"},
  en:{d_dash:"Dashboard",d_prod:"Products",d_ord:"Orders",d_cli:"Customers",d_site:"View site →",
    d_title:"Dashboard",d_who:"Hello, House BM",
    st_rev:"Revenue (XOF)",st_ord:"Orders",st_cli:"Customers",st_pan:"Avg. cart (XOF)",
    d_sales:"Sales, last 7 days (XOF)",d_top:"Best sellers",d_recent:"Recent orders",
    t_ref:"Reference",t_cli:"Customer",t_prod:"Product",t_mont:"Amount",t_stat:"Status",t_date:"Date",t_cat:"Category",t_prix:"Price",t_stock:"Stock",
    s_ok:"Delivered",s_wait:"Pending",s_ship:"Shipped",
    p_count:"30 products listed", c_count:"1,032 registered customers", c_mail:"E-mail", c_since:"Customer since", c_spent:"Total spent"}
};
const ORDERS = [
  {ref:"BM-2841",cli:"A. Kouassi",prod:{fr:"Manteau laine noir",en:"Black wool overcoat"},amt:"846 200 FCFA",st:"s_ok",date:"06/11/2026"},
  {ref:"BM-2840",cli:"M. Traoré",prod:{fr:"Bottines Chelsea",en:"Chelsea boots"},amt:"406 700 FCFA",st:"s_ship",date:"06/11/2026"},
  {ref:"BM-2839",cli:"F. Diallo",prod:{fr:"Sac cabas cuir noir",en:"Black leather tote"},amt:"583 800 FCFA",st:"s_wait",date:"05/11/2026"},
  {ref:"BM-2838",cli:"S. Bamba",prod:{fr:"Pull cachemire ivoire",en:"Ivory cashmere turtleneck"},amt:"314 900 FCFA",st:"s_ok",date:"05/11/2026"},
  {ref:"BM-2837",cli:"K. Ouattara",prod:{fr:"Derbies bordeaux",en:"Burgundy derbies"},amt:"387 000 FCFA",st:"s_ship",date:"04/11/2026"},
  {ref:"BM-2836",cli:"N. Koné",prod:{fr:"Trench noir classique",en:"Black trench coat"},amt:"754 400 FCFA",st:"s_ok",date:"04/11/2026"}
];
const CLIENTS = [
  {name:"A. Kouassi",mail:"a.kouassi@mail.com",since:"03/2024",spent:"2 140 000 FCFA"},
  {name:"M. Traoré",mail:"m.traore@mail.com",since:"07/2024",spent:"1 320 500 FCFA"},
  {name:"F. Diallo",mail:"f.diallo@mail.com",since:"01/2025",spent:"980 200 FCFA"},
  {name:"S. Bamba",mail:"s.bamba@mail.com",since:"11/2025",spent:"640 800 FCFA"},
  {name:"K. Ouattara",mail:"k.ouattara@mail.com",since:"05/2023",spent:"3 410 000 FCFA"},
  {name:"N. Koné",mail:"n.kone@mail.com",since:"09/2025",spent:"1 105 400 FCFA"}
];
let aLang = localStorage.getItem("bm-lang") || "fr";
function at(k){ return ADMIN_I18N[aLang][k] || I18N[aLang][k] || k; }
function adminSidebar(active){
  return `<aside><a class="logo" href="index.html">Black<span>Market</span></a>
    <a href="admin.html" class="${active==='dash'?'on':''}" data-i18n="d_dash"></a>
    <a href="admin-produits.html" class="${active==='prod'?'on':''}" data-i18n="d_prod"></a>
    <a href="admin-commandes.html" class="${active==='ord'?'on':''}" data-i18n="d_ord"></a>
    <a href="admin-clients.html" class="${active==='cli'?'on':''}" data-i18n="d_cli"></a>
    <a href="index.html" data-i18n="d_site"></a></aside>`;
}
function adminTop(titleKey){
  return `<div class="topbar"><h1 data-i18n="${titleKey}"></h1>
    <div style="display:flex;align-items:center;gap:16px">
    <span class="who" data-i18n="d_who"></span>
    <div class="lang"><button id="btn-fr">FR</button><button id="btn-en">EN</button></div></div></div>`;
}
function adminChrome(active, titleKey){
  document.body.insertAdjacentHTML("afterbegin", `<div class="layout">${adminSidebar(active)}<main>${adminTop(titleKey)}`);
  document.body.insertAdjacentHTML("beforeend", `</main></div>`);
  document.getElementById("btn-fr").onclick = ()=>setAdminLang("fr");
  document.getElementById("btn-en").onclick = ()=>setAdminLang("en");
  applyAdminLang();
}
function applyAdminLang(){
  document.documentElement.lang = aLang;
  document.querySelectorAll("[data-i18n]").forEach(el=>{ el.textContent = at(el.dataset.i18n); });
  const bf=document.getElementById("btn-fr"), be=document.getElementById("btn-en");
  if(bf){ bf.classList.toggle("on", aLang==="fr"); be.classList.toggle("on", aLang==="en"); }
}
function setAdminLang(l){ aLang=l; localStorage.setItem("bm-lang", l); applyAdminLang(); if(window.onAdminLangChange) onAdminLangChange(); }
