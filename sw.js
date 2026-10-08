/* Généré par scripts/sw-plugin.ts : ne pas modifier à la main. */
const VERSION = 'bagage-5ef20b170a';
const FICHIERS = ["./","assets/Scene3D-CMWQjlMw.js","assets/backpack-C1PLUXkD.webp","assets/beanie-BPqWwqY4.webp","assets/belt-CFTLTMRA.webp","assets/blazer-CEX9H_Vt.webp","assets/boots-c4OGOELn.webp","assets/bottle-8DkoKNal.webp","assets/camera-BaXwneE3.webp","assets/cap-BHTlVqwh.webp","assets/charger-DIcKnNrQ.webp","assets/coat-CW7Kw-eo.webp","assets/daypack-DLL5ht_t.webp","assets/detergent-BYiLODxg.webp","assets/dress-BRKCjEET.webp","assets/dressshoes-DymYmUdY.webp","assets/drybag-CF90kfaM.webp","assets/earbuds-BhedMulf.webp","assets/firstaid-BPrrEuV1.webp","assets/flipflops-DVhYPgqH.webp","assets/gloves-BmfOroZ6.webp","assets/hat-BiWJCtHd.webp","assets/headphones-DwcdvigO.webp","assets/hikesocks-bFWuJi9X.webp","assets/index-CscMLlvo.js","assets/index-CuSElsMz.css","assets/jacket-CmstRB-r.webp","assets/jean-DTT-gMAA.webp","assets/laptop-CvJ2H9QG.webp","assets/laundrybag-C_kFA-UT.webp","assets/padlock-D_W7cd1Z.webp","assets/pajamas-HRPTw7XE.webp","assets/pants-Df2QQ2MJ.webp","assets/passport-C5slYCUs.webp","assets/phone-BJhxV3aM.webp","assets/poles-CYKmigsP.webp","assets/polo-B2aIYsyD.webp","assets/poncho-BoBXOJ8K.webp","assets/sandals-9ekJwOHX.webp","assets/sarong-BTBCXcsi.webp","assets/scarf-qRwGmyOX.webp","assets/shirt-BK1qqVzK.webp","assets/shorts-D6UzkTVZ.webp","assets/skigear-MZJDO6VI.webp","assets/skipants-dgU1OrXo.webp","assets/sleepkit-gsl5MFN7.webp","assets/sneakers-FYX0FL_Z.webp","assets/snorkel-DKWa2BdG.webp","assets/socks-D1O17VG4.webp","assets/sportswear-HgXVRaj7.webp","assets/suitcase-D7_hqudw.webp","assets/sunglasses-Z34HI6B_.webp","assets/sweater-BNFGiOVt.webp","assets/swimsuit-Dou4qFQh.webp","assets/tablet-CJQgJeVF.webp","assets/thermal-Boli_fnG.webp","assets/tie-DAZ3o9Ry.webp","assets/toiletry-DGFxejMd.webp","assets/toothbrush-j2HcHCJK.webp","assets/towel-DuNCJBjx.webp","assets/tripod-DuXu5sXp.webp","assets/tshirt-B_4kzm9Z.webp","assets/umbrella-DIG3jPJk.webp","assets/underwear-Bqq4B59F.webp","assets/watch-CYm98wDb.webp","assets/windbreaker-ZQ0YNgCY.webp","icons/apple-touch-icon.png","icons/icone-192.png","icons/icone-512.png","icons/icone-maskable-512.png","index.html","manifest.webmanifest"];
const POLICES = ['fonts.googleapis.com', 'fonts.gstatic.com'];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(VERSION).then((c) => c.addAll(FICHIERS)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then((noms) => Promise.all(noms.filter((n) => n.startsWith('bagage-') && n !== VERSION).map((n) => caches.delete(n)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin === location.origin) {
    // Le site : d'abord la mémoire ; une page (navigation) retombe sur l'accueil.
    e.respondWith(caches.match(req, { ignoreSearch: true }).then((r) => r || (req.mode === 'navigate' ? caches.match('./') : null) || fetch(req)));
  } else if (POLICES.includes(url.hostname)) {
    // Les polices : mémoire d'abord, sinon réseau, et on garde pour la prochaine fois.
    // Hors ligne et jamais vues : une feuille de style vide (le texte s'affiche dans la police de secours), sans erreur.
    e.respondWith(caches.open(VERSION + '-polices').then((c) => c.match(req).then((r) => r || fetch(req).then((rep) => { c.put(req, rep.clone()); return rep; }))).catch(() => new Response('', { status: 200, headers: { 'Content-Type': 'text/css' } })));
  }
});
