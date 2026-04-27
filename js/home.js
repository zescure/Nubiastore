

<script type="module">

import { initializeApp, getApps } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyA3KhNSK0AaKYvXuZE9hi0ZRN9Ysmh9aXc",
  authDomain: "zestoreid-f9e85.firebaseapp.com",
  projectId: "zestoreid-f9e85",
  storageBucket: "zestoreid-f9e85.firebasestorage.app",
  messagingSenderId: "426093692154",
  appId: "1:426093692154:web:38c6e9c143af626a623543",
  measurementId: "G-TS0Y9NYW8"
};

/* mencegah double initialize */
if (!getApps().length) {
  const app = initializeApp(firebaseConfig);
  getAuth(app);
  getFirestore(app);
}


const gamesData = [
  { name:"Mobile Legends", cat:"MOBA", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4sqBxABspT2k5eGkvweih9PbVdcNMIRHUBZRWk78l-nCeiM9TjKZ6Wfca&s=10", url:"mobile-legends.html" },
  { name:"Free Fire", cat:"Battle Royale", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQthzbcsOjsCsykuN4uk6-pzsnZLoRzcg-pfTpZL-nVYKgcK7eYinXZx78&s=10", url:"free-fire.html" },
  { name:"Free Fire Max", cat:"Battle Royale", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQthzbcsOjsCsykuN4uk6-pzsnZLoRzcg-pfTpZL-nVYKgcK7eYinXZx78&s=10", url:"free-fire-max.html" },
  { name:"Call of Duty Mobile", cat:"FPS", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCTrkIfW1COaYXrlEnZAyEikcjQs9SFM6SMw&usqp=CAU", url:"CODM.html" },
  { name:"Genshin Impact", cat:"RPG", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS65SXg_FKzvzKsAFUzQvhur6DD9F-HANwHjA&usqp=CAU", url:"gensinnew.html" },
  { name:"PUBG Mobile", cat:"Battle Royale", img:"https://imgop.itemku.com/?url=https%3A%2F%2Fd1x91p7vw3vuq8.cloudfront.net%2Fgame%2F20231116%2Fy4jqgkdbtbd3zfokbvtknb_thumbnail.jpg&w=96&q=75", url:"PUBGM.html" },
  { name:"Magic Chess Go-Go", cat:"Strategy", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8jzd-vAWwhklQcMTbpQEtJj_12ByL8aXAoNMMQ_goRmRV85HChrO7gKQ&s=10", url:"MCGG.html" },
  { name:"Honor of Kings", cat:"MOBA", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6St6mAnq3z1oIdjfw2L-QHxySJe1tYsIAh5yqzpE1jHcMlmE7Nl-dqyue&s=10", url:"hok.html" },
  { name:"BPJS Kesehatan", cat:"Tagihan", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQHpQ7luo95IF-3RIUBYGPdFyKG-kQWOibyw&s", url:"https://buylink.id/Zestore.zcn/share?product=BPJS&category=bpjs" },
];

const promoItems = [
  { title:"💎 10.050 Diamonds", sub:"Mobile Legends", ori:"Rp3.388.177", disc:"Rp2.608.896", badge:"23% OFF", img:"https://cdn1.codashop.com/S/content/mobile/images/product-tiles/MLBB-2025-tiles-178x178.jpg", url:"mobile-legends.html" },
  { title:"Weekly Pass x3", sub:"Mobile Legends", ori:"Rp95.833", disc:"Rp86.250", badge:"10% OFF", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYD3pq3HTqX8Cr84wKLNwMAtJeXPlMPPPb4axhpZAJdSA5ahk3XIuBsh4&s=10", url:"mobile-legends.html" },
  { title:"Token PLN 100rb", sub:"PLN", ori:"Rp102.540", disc:"Rp100.950", badge:"1% OFF", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlRjVZTo6AiMWOFxV-aq6Su05h-0FL7rCt5g&s", url:"#" },
  { title:"Weekly Pass", sub:"Mobile Legends", ori:"Rp28.898", disc:"Rp24.987", badge:"7% OFF", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYD3pq3HTqX8Cr84wKLNwMAtJeXPlMPPPb4axhpZAJdSA5ahk3XIuBsh4&s=10", url:"mobile-legends.html" },
  { title:"Membership Mingguan", sub:"Free Fire Max", ori:"Rp31.259", disc:"Rp28.259", badge:"10% OFF", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHaOCkL8OLX7Wmp90dV3q9OlPvL-0HK5IpouKf6ueA0wb7FvEJ54KnNr4&s=10", url:"freefiremax.html" },
  { title:"💎 4.830 Diamonds", sub:"Magic Chess", ori:"Rp1.278.278", disc:"Rp1.090.974", badge:"15% OFF", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8jzd-vAWwhklQcMTbpQEtJj_12ByL8aXAoNMMQ_goRmRV85HChrO7gKQ&s=10", url:"MCGG.html" },
];

// Build promo cards
function buildPromo() {
  const track = document.getElementById('promoTrack');
  if (!track) return;
  track.innerHTML = promoItems.map(p => `
    <a href="${p.url}" class="promo-card">
      <div class="pc-badge">${p.badge}</div>
      <div class="promo-card-inner">
        <img src="${p.img}" alt="${p.title}">
        <div>
          <div class="pc-title">${p.title}</div>
          <div class="pc-sub">${p.sub}</div>
          <div class="pc-prices">
            <div class="pc-ori">${p.ori}</div>
            <div class="pc-disc">${p.disc}</div>
          </div>
        </div>
      </div>
    </a>
  `).join('');
}
buildPromo();

// Duplicate payment track for seamless loop
const payTrack = document.getElementById('payTrack');
if (payTrack) payTrack.innerHTML += payTrack.innerHTML;

// Slider
const slidesWrap = document.getElementById('slidesWrap');
const totalSlides = slidesWrap ? slidesWrap.children.length : 0;
let curSlide = 0;
let slideTimer;

const dotsContainer = document.getElementById('sliderDots');
if (dotsContainer) {
  for (let i=0;i<totalSlides;i++){
    const d=document.createElement('div');
    d.className='dot'+(i===0?' active':'');
    d.onclick=()=>goSlide(i);
    dotsContainer.appendChild(d);
  }
}

function goSlide(n) {
  curSlide = (n+totalSlides)%totalSlides;
  slidesWrap.style.transform=`translateX(-${curSlide*100}%)`;
  document.querySelectorAll('.dot').forEach((d,i)=>d.classList.toggle('active',i===curSlide));
}
function startSlider() { slideTimer=setInterval(()=>goSlide(curSlide+1),4500); }
function resetSlider() { clearInterval(slideTimer); startSlider(); }

document.getElementById('prevBtn')?.addEventListener('click',()=>{goSlide(curSlide-1);resetSlider();});
document.getElementById('nextBtn')?.addEventListener('click',()=>{goSlide(curSlide+1);resetSlider();});
startSlider();

// Sidebar
const sidebar=document.getElementById('sidebar');
const overlay=document.getElementById('overlay');
document.getElementById('menuBtn')?.addEventListener('click',()=>{
  sidebar.classList.toggle('open');
  overlay.classList.toggle('open');
});
overlay.addEventListener('click',()=>{
  sidebar.classList.remove('open');
  overlay.classList.remove('open');
});

// Search
function buildSearchUI(input, listEl) {
  if (!input || !listEl) return;
  function renderResults(q) {
    if (q.trim()==='') {
      listEl.innerHTML=`<div class="promo-msg">Cari game, voucher & layanan terbaik di <b>NUBIASTORE</b> 🎮</div>`;
      listEl.style.display='block'; return;
    }
    const filtered=gamesData.filter(g=>g.name.toLowerCase().includes(q.toLowerCase()));
    if (!filtered.length) { listEl.innerHTML=`<div class="promo-msg">Tidak ditemukan 😕</div>`; listEl.style.display='block'; return; }
    listEl.innerHTML=filtered.map(g=>`
      <a href="${g.url}" class="shortcut-item">
        <img src="${g.img}" alt="${g.name}">
        <div><div class="si-name">${g.name}</div><div class="si-cat">${g.cat}</div></div>
      </a>`).join('');
    listEl.style.display='block';
  }
  input.addEventListener('focus',()=>renderResults(input.value));
  input.addEventListener('input',()=>renderResults(input.value));
  input.addEventListener('blur',()=>setTimeout(()=>listEl.style.display='none',220));
}
buildSearchUI(document.getElementById('searchInput'), document.getElementById('shortcutList'));
buildSearchUI(document.getElementById('searchInputMobile'), document.getElementById('shortcutListMobile'));

// Login / account
function updateAuth() {
  const u=localStorage.getItem('nsUser');
  const btn=document.getElementById('loginBtn');
  const info=document.getElementById('accountInfo');
  const disp=document.getElementById('usernameDisplay');
  if (u) {
    if(btn) btn.style.display='none';
    if(info) { info.style.display='flex'; if(disp) disp.textContent=u; }
  } else {
    if(btn) btn.style.display='';
    if(info) info.style.display='none';
  }
}
document.getElementById('loginBtn')?.addEventListener('click',()=>{
  window.location.href='https://nubiastore.netlify.app/login-register';
});
document.getElementById('accountInfo')?.addEventListener('click',()=>{
  if(confirm('Logout dari NUBIASTORE?')){
    localStorage.removeItem('nsUser'); updateAuth();
  }
});
updateAuth();

// Floating gift
document.getElementById('floatingGift')?.addEventListener('click',()=>{
  window.location.href='/undang-teman.html';
});
</script>

<script type="module">
/*
  MENU SALDO CARD — script terpisah
  Menggunakan getApps()[0] agar tidak double-init Firebase.
  Tidak menyentuh variabel apapun dari script utama.
*/
import { getApps } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js';
import { getAuth, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js';
import { getFirestore, doc, onSnapshot } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js';

/* ambil instance Firebase yang sudah diinit di script utama */
const _app  = getApps()[0];
const _auth = getAuth(_app);
const _db   = getFirestore(_app);

/* refs */
const mscGuest  = document.getElementById('mscGuest');
const mscUser   = document.getElementById('mscUser');
const mscUid    = document.getElementById('mscUid');
const mscAmount = document.getElementById('mscAmount');

let _unsubSaldo = null;

function fmtSaldo(n) {
  return 'Rp ' + Number(n).toLocaleString('id');
}
function shortUid(uid) {
  return uid ? uid.slice(0,6) + '...' + uid.slice(-4) : '—';
}

function showGuest() {
  if (mscGuest) mscGuest.style.display = 'flex';
  if (mscUser)  mscUser.style.display  = 'none';
  if (_unsubSaldo) { try { _unsubSaldo(); } catch(e){} _unsubSaldo = null; }
}

function showUser(uid) {
  if (mscGuest) mscGuest.style.display = 'none';
  if (mscUser)  mscUser.style.display  = 'flex';
  if (mscUid)   mscUid.textContent     = shortUid(uid);
  /* reset ke loading dots */
  if (mscAmount) mscAmount.innerHTML = '<span class="msc-dots">•••</span>';

  /* cleanup listener lama */
  if (_unsubSaldo) { try { _unsubSaldo(); } catch(e){} }

  /* realtime listener saldo */
  _unsubSaldo = onSnapshot(
    doc(_db, 'users', uid),
    (snap) => {
      const bal = snap.exists() ? Number(snap.data().nubiPayBalance || 0) : 0;
      if (mscAmount) mscAmount.textContent = fmtSaldo(bal);
    },
    (err) => {
      console.warn('[MenuSaldo] err:', err);
      if (mscAmount) mscAmount.textContent = 'Rp —';
    }
  );
}

onAuthStateChanged(_auth, (user) => {
  user ? showUser(user.uid) : showGuest();
});
</script>

<script type="module">
/*
  AUTH HEADER WIDGET — script terpisah
  Pakai getApps()[0] → tidak double-init Firebase.
  Tidak menyentuh variabel apapun dari script utama.
*/
import { getApps } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js';
import { getAuth, onAuthStateChanged, signOut } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js';

const _app  = getApps()[0];
const _auth = getAuth(_app);

/* refs */
const authGuest       = document.getElementById('authGuest');
const authUser        = document.getElementById('authUser');
const authTrigger     = document.getElementById('authTrigger');
const authDropdown    = document.getElementById('authDropdown');
const authTriggerName = document.getElementById('authTriggerName');
const authAvatar      = document.getElementById('authAvatar');
const authCardAvatar  = document.getElementById('authCardAvatar');
const authCardName    = document.getElementById('authCardName');
const authCardEmail   = document.getElementById('authCardEmail');
const authCardUid     = document.getElementById('authCardUid');
const authLogoutBtn   = document.getElementById('authLogoutBtn');

/* helpers */
function shortUid(uid) {
  return uid ? uid.slice(0,6) + '...' + uid.slice(-4) : '—';
}
function shortName(name, email) {
  if (name && name.trim()) return name.trim().split(' ')[0];
  if (email) return email.split('@')[0];
  return 'User';
}
function avatarHTML(photoURL, fallback) {
  if (photoURL) return `<img src="${photoURL}" alt="avatar">`;
  return fallback;
}

/* toggle dropdown */
let dropdownOpen = false;
function openDropdown() {
  dropdownOpen = true;
  authDropdown.classList.add('open');
  authTrigger.setAttribute('aria-expanded', 'true');
}
function closeDropdown() {
  dropdownOpen = false;
  authDropdown.classList.remove('open');
  authTrigger.setAttribute('aria-expanded', 'false');
}

authTrigger.addEventListener('click', (e) => {
  e.stopPropagation();
  dropdownOpen ? closeDropdown() : openDropdown();
});

/* tutup kalau klik di luar */
document.addEventListener('click', (e) => {
  if (dropdownOpen && !document.getElementById('authWidget').contains(e.target)) {
    closeDropdown();
  }
});

/* tutup kalau menu mobile dibuka */
document.getElementById('menuBtn')?.addEventListener('click', closeDropdown);

/* auth state */
onAuthStateChanged(_auth, (user) => {
  if (user) {
    /* tampil user state */
    authGuest.style.display = 'none';
    authUser.style.display  = 'block';

    const name  = user.displayName || '';
    const email = user.email || '';
    const uid   = user.uid || '';
    const photo = user.photoURL || '';

    /* trigger */
    authTriggerName.textContent = shortName(name, email);
    authAvatar.innerHTML = avatarHTML(photo, '👤');

    /* dropdown card */
    authCardAvatar.innerHTML = avatarHTML(photo, '👤');
    authCardName.textContent  = name || shortName('', email);
    authCardEmail.textContent = email;
    authCardUid.textContent   = 'UID: ' + shortUid(uid);

  } else {
    /* tampil guest state */
    authUser.style.display  = 'none';
    authGuest.style.display = 'inline-flex';
    closeDropdown();
  }
});

/* logout */
authLogoutBtn.addEventListener('click', async () => {
  closeDropdown();
  try {
    await signOut(_auth);
    /* opsional: redirect ke home setelah logout */
    /* location.href = 'https://nubiastore.netlify.app'; */
  } catch (e) {
    console.error('Logout error', e);
    alert('Gagal logout. Coba lagi.');
  }
});
</script>


<!-- ══════════════════════════════════════════════════════════
     NUBIASTORE POPUP SYSTEM
     Paste seluruh blok ini tepat sebelum </body>
     Tidak mengubah apapun dari halaman utama.
     Semua class pakai prefix "pop-" agar tidak bentrok.
══════════════════════════════════════════════════════════ -->

<!-- ── POPUP FONTS (skip jika sudah ada di <head>) ── -->

<link href="https://fonts.googleapis.com/css2?family=Nunito:wght@700;800;900&family=Syne:wght@700;800&display=swap" rel="stylesheet"/>

<!-- ── POPUP CSS ── -->

<style>
/* Semua selector pakai #pop- atau .pop- agar tidak bentrok */

/* overlay backdrop */
.pop-overlay{
  display:none;position:fixed;inset:0;
  background:rgba(0,0,0,.68);backdrop-filter:blur(7px);
  z-index:9999;align-items:center;justify-content:center;padding:20px;
}
.pop-overlay.pop-active{
  display:flex;
  animation:popFadeIn .25s ease both;
}
@keyframes popFadeIn{from{opacity:0}to{opacity:1}}

/* popup card */
.pop-card{
  position:relative;border-radius:20px;overflow:hidden;
  width:100%;max-width:400px;
  animation:popCardIn .38s cubic-bezier(.34,1.56,.64,1) both;
  box-shadow:0 30px 80px rgba(0,0,0,.55);
}
@keyframes popCardIn{
  from{opacity:0;transform:scale(.78) translateY(28px)}
  to  {opacity:1;transform:scale(1)   translateY(0)}
}

/* close button */
.pop-close{
  position:absolute;top:12px;right:12px;z-index:20;
  width:34px;height:34px;border-radius:50%;border:none;
  background:rgba(0,0,0,.45);color:#fff;
  font-size:18px;line-height:1;cursor:pointer;
  display:flex;align-items:center;justify-content:center;
  transition:background .2s,transform .2s;
  backdrop-filter:blur(4px);font-family:sans-serif;
}
.pop-close:hover{background:rgba(0,0,0,.72);transform:scale(1.12) rotate(90deg)}

/* image / placeholder area */
.pop-img-area{
  width:100%;height:200px;display:flex;align-items:center;
  justify-content:center;font-size:68px;position:relative;overflow:hidden;
}
.pop-img-area img.pop-img{
  width:100%;height:100%;object-fit:cover;display:block;
}
.pop-emoji{filter:drop-shadow(0 0 18px rgba(255,255,255,.18))}

/* ── POPUP 1 — INFO ── */
#pop1 .pop-card{background:#1e1b4b;}
#pop1 .pop-img-area{background:linear-gradient(135deg,#312e81 0%,#4c1d95 50%,#1e1b4b 100%);}
#pop1 .pop-body{padding:22px 24px 24px;}
#pop1 .pop-title{
  font-family:'Syne',sans-serif;font-size:20px;font-weight:800;
  color:#fff;margin-bottom:8px;line-height:1.3;
}
#pop1 .pop-text{font-size:14px;color:#a5b4fc;line-height:1.7;margin-bottom:20px;font-family:'Nunito',sans-serif;}
#pop1 .pop-badge{
  position:absolute;top:14px;left:14px;
  background:#6366f1;color:#fff;font-size:10px;font-weight:800;
  letter-spacing:1.5px;text-transform:uppercase;
  padding:4px 10px;border-radius:20px;
}
#pop1 .pop-btn-accept{
  width:100%;padding:13px;border:none;border-radius:12px;
  background:linear-gradient(135deg,#6366f1,#818cf8);
  color:#fff;font-family:'Nunito',sans-serif;font-size:15px;font-weight:800;
  cursor:pointer;letter-spacing:.4px;transition:all .2s;
  box-shadow:0 4px 20px rgba(99,102,241,.45);
}
#pop1 .pop-btn-accept:hover{transform:translateY(-2px);box-shadow:0 8px 28px rgba(99,102,241,.6)}
/* sparkles */
#pop1 .pop-sparks{position:absolute;inset:0;pointer-events:none;}
#pop1 .pop-spark{
  position:absolute;border-radius:50%;background:rgba(167,139,250,.6);
  animation:popSparkFloat 3s ease-in-out infinite;
}
@keyframes popSparkFloat{
  0%,100%{transform:translateY(0) scale(1);opacity:.6}
  50%{transform:translateY(-12px) scale(1.3);opacity:1}
}

/* ── POPUP 2 — PROMO ── */
#pop2 .pop-card{background:#0c0a00;}
#pop2 .pop-img-area{background:linear-gradient(135deg,#78350f,#92400e,#b45309);position:relative;}
#pop2 .pop-promo-tag{
  position:absolute;top:14px;left:14px;
  background:linear-gradient(135deg,#dc2626,#ef4444);
  color:#fff;font-size:10px;font-weight:900;letter-spacing:1.5px;
  padding:5px 12px;border-radius:20px;text-transform:uppercase;
  box-shadow:0 4px 14px rgba(220,38,38,.5);
  animation:popTagPulse 1.5s ease-in-out infinite;
}
@keyframes popTagPulse{
  0%,100%{box-shadow:0 4px 14px rgba(220,38,38,.5)}
  50%{box-shadow:0 4px 26px rgba(220,38,38,.95)}
}
#pop2 .pop-body{padding:20px 22px 22px;position:relative;}
#pop2 .pop-game-label{
  font-size:11px;font-weight:800;letter-spacing:2px;text-transform:uppercase;
  color:#fbbf24;margin-bottom:4px;font-family:'Nunito',sans-serif;
}
#pop2 .pop-item-name{
  font-family:'Syne',sans-serif;font-size:22px;font-weight:800;
  color:#fff;line-height:1.2;margin-bottom:14px;
}
#pop2 .pop-price-row{display:flex;align-items:flex-end;gap:12px;margin-bottom:18px;}
#pop2 .pop-price-old{
  font-size:15px;color:#6b7280;font-weight:700;
  text-decoration:line-through;line-height:1;font-family:'Nunito',sans-serif;
}
#pop2 .pop-price-new{
  font-family:'Syne',sans-serif;font-size:30px;font-weight:800;
  color:#f59e0b;line-height:1;
  text-shadow:0 0 20px rgba(245,158,11,.5);
}
#pop2 .pop-saving{
  font-size:11px;font-weight:800;background:rgba(239,68,68,.15);
  border:1px solid rgba(239,68,68,.3);color:#f87171;
  padding:3px 8px;border-radius:6px;margin-left:auto;align-self:center;
  font-family:'Nunito',sans-serif;
}
#pop2 .pop-btn-buy{
  width:100%;padding:14px;border:none;border-radius:12px;
  background:linear-gradient(135deg,#f59e0b,#fbbf24);
  color:#000;font-family:'Nunito',sans-serif;font-size:15px;font-weight:900;
  cursor:pointer;letter-spacing:.4px;
  box-shadow:0 6px 24px rgba(245,158,11,.5);
  animation:popBuyPulse 1.8s ease-in-out infinite;
  position:relative;overflow:hidden;
}
@keyframes popBuyPulse{
  0%,100%{transform:scale(1);box-shadow:0 6px 24px rgba(245,158,11,.5)}
  50%{transform:scale(1.03);box-shadow:0 8px 34px rgba(245,158,11,.85)}
}
#pop2 .pop-btn-buy::after{
  content:'';position:absolute;top:0;left:-100%;width:60%;height:100%;
  background:linear-gradient(90deg,transparent,rgba(255,255,255,.35),transparent);
  animation:popShine 2.4s ease-in-out infinite;
}
@keyframes popShine{0%{left:-100%}50%,100%{left:160%}}

/* ── POPUP 3 — NUBIAPAY ── */
#pop3 .pop-card{background:#022c22;}
#pop3 .pop-img-area{background:linear-gradient(135deg,#064e3b,#065f46,#022c22);position:relative;}
#pop3 .pop-body{padding:20px 22px 22px;position:relative;}
#pop3 .pop-np-logo{
  display:inline-flex;align-items:center;gap:6px;
  background:linear-gradient(135deg,#10b981,#059669);
  padding:5px 12px;border-radius:20px;margin-bottom:12px;
}
#pop3 .pop-np-logo span{font-size:11px;font-weight:900;color:#fff;letter-spacing:1.5px;text-transform:uppercase;font-family:'Nunito',sans-serif;}
#pop3 .pop-title{
  font-family:'Syne',sans-serif;font-size:21px;font-weight:800;
  color:#fff;margin-bottom:10px;line-height:1.3;
}
#pop3 .pop-perks{list-style:none;margin-bottom:18px;display:flex;flex-direction:column;gap:6px;}
#pop3 .pop-perks li{
  display:flex;align-items:center;gap:10px;
  font-size:13px;color:#6ee7b7;font-weight:700;font-family:'Nunito',sans-serif;
}
#pop3 .pop-perks li::before{
  content:'✓';width:20px;height:20px;border-radius:50%;
  background:rgba(16,185,129,.2);border:1.5px solid #10b981;
  display:flex;align-items:center;justify-content:center;
  flex-shrink:0;font-size:11px;font-weight:900;color:#10b981;
  line-height:1;padding-top:1px;
}
#pop3 .pop-btn-try{
  width:100%;padding:14px;border:none;border-radius:12px;
  background:linear-gradient(135deg,#10b981,#059669);
  color:#fff;font-family:'Nunito',sans-serif;font-size:15px;font-weight:900;
  cursor:pointer;letter-spacing:.4px;transition:all .2s;
  box-shadow:0 6px 22px rgba(16,185,129,.45);
  display:flex;align-items:center;justify-content:center;gap:8px;
}
#pop3 .pop-btn-try:hover{transform:translateY(-2px);box-shadow:0 10px 32px rgba(16,185,129,.65)}
#pop3 .pop-glow{
  position:absolute;top:-60px;right:-60px;width:200px;height:200px;
  border-radius:50%;background:radial-gradient(circle,rgba(16,185,129,.15) 0%,transparent 65%);
  pointer-events:none;
}

/* ── POPUP 4 — STOK TERBATAS ── */
#pop4 .pop-card{background:#1a0a0a;border:1px solid rgba(239,68,68,.3);}
#pop4 .pop-img-area{background:linear-gradient(135deg,#450a0a,#7f1d1d,#450a0a);}
#pop4 .pop-body{padding:20px 22px 22px;}
#pop4 .pop-stok-badge{
  display:inline-flex;align-items:center;gap:6px;
  background:linear-gradient(135deg,#dc2626,#ef4444);
  padding:5px 12px;border-radius:6px;margin-bottom:12px;
  box-shadow:0 4px 16px rgba(220,38,38,.4);
}
#pop4 .pop-stok-badge span{font-size:11px;font-weight:900;color:#fff;letter-spacing:1.5px;text-transform:uppercase;font-family:'Nunito',sans-serif;}
#pop4 .pop-stok-dot{width:7px;height:7px;border-radius:50%;background:#fff;animation:popBlink 1s ease-in-out infinite;flex-shrink:0;}
@keyframes popBlink{0%,100%{opacity:1}50%{opacity:.2}}
#pop4 .pop-item-name{
  font-family:'Syne',sans-serif;font-size:19px;font-weight:800;
  color:#fff;margin-bottom:6px;line-height:1.3;
}
#pop4 .pop-nubia-only{
  display:inline-flex;align-items:center;gap:6px;
  background:rgba(22,163,74,.12);border:1px solid rgba(22,163,74,.35);
  color:#4ade80;font-size:12px;font-weight:700;
  padding:4px 10px;border-radius:6px;margin-bottom:10px;font-family:'Nunito',sans-serif;
}
#pop4 .pop-text{font-size:13px;color:#fca5a5;line-height:1.7;margin-bottom:16px;font-family:'Nunito',sans-serif;}
#pop4 .pop-restock-note{
  background:rgba(245,158,11,.08);border:1px solid rgba(245,158,11,.25);
  border-radius:8px;padding:10px 12px;margin-bottom:16px;
  font-size:12px;color:#fbbf24;line-height:1.6;display:flex;gap:8px;font-family:'Nunito',sans-serif;
}
#pop4 .pop-action-row{display:flex;gap:10px;}
#pop4 .pop-btn-close{
  flex:1;padding:13px;border:1px solid rgba(255,255,255,.15);
  border-radius:12px;background:rgba(255,255,255,.06);
  color:#fff;font-family:'Nunito',sans-serif;font-size:14px;font-weight:700;
  cursor:pointer;transition:all .2s;
}
#pop4 .pop-btn-close:hover{background:rgba(255,255,255,.12);border-color:rgba(255,255,255,.3)}
#pop4 .pop-btn-ig{
  flex:1.4;padding:13px;border:none;border-radius:12px;
  background:linear-gradient(135deg,#e1306c,#833ab4,#fd1d1d,#fcb045);
  color:#fff;font-family:'Nunito',sans-serif;font-size:14px;font-weight:800;
  cursor:pointer;transition:all .2s;
  box-shadow:0 6px 20px rgba(225,48,108,.4);
  display:flex;align-items:center;justify-content:center;gap:7px;
}
#pop4 .pop-btn-ig:hover{transform:translateY(-2px);box-shadow:0 10px 28px rgba(225,48,108,.6)}


/* ── POPUP 5 — PROMO ── */
#pop5 .pop-card{background:#0c0a00;}
#pop5 .pop-img-area{background:linear-gradient(135deg,#78350f,#92400e,#b45309);position:relative;}
#pop5 .pop-promo-tag{
  position:absolute;top:14px;left:14px;
  background:linear-gradient(135deg,#dc2626,#ef4444);
  color:#fff;font-size:10px;font-weight:900;letter-spacing:1.5px;
  padding:5px 12px;border-radius:20px;text-transform:uppercase;
  box-shadow:0 4px 14px rgba(220,38,38,.5);
  animation:popTagPulse 1.5s ease-in-out infinite;
}
@keyframes popTagPulse{
  0%,100%{box-shadow:0 4px 14px rgba(220,38,38,.5)}
  50%{box-shadow:0 4px 26px rgba(220,38,38,.95)}
}
#pop5 .pop-body{padding:20px 22px 22px;position:relative;}
#pop5 .pop-game-label{
  font-size:11px;font-weight:800;letter-spacing:2px;text-transform:uppercase;
  color:#fbbf24;margin-bottom:4px;font-family:'Nunito',sans-serif;
}
#pop5 .pop-item-name{
  font-family:'Syne',sans-serif;font-size:22px;font-weight:800;
  color:#fff;line-height:1.2;margin-bottom:14px;
}
#pop5 .pop-price-row{display:flex;align-items:flex-end;gap:12px;margin-bottom:18px;}
#pop5 .pop-price-old{
  font-size:15px;color:#6b7280;font-weight:700;
  text-decoration:line-through;line-height:1;font-family:'Nunito',sans-serif;
}
#pop5 .pop-price-new{
  font-family:'Syne',sans-serif;font-size:30px;font-weight:800;
  color:#f59e0b;line-height:1;
  text-shadow:0 0 20px rgba(245,158,11,.5);
}
#pop5 .pop-saving{
  font-size:11px;font-weight:800;background:rgba(239,68,68,.15);
  border:1px solid rgba(239,68,68,.3);color:#f87171;
  padding:3px 8px;border-radius:6px;margin-left:auto;align-self:center;
  font-family:'Nunito',sans-serif;
}
#pop5 .pop-btn-buy{
  width:100%;padding:14px;border:none;border-radius:12px;
  background:linear-gradient(135deg,#f59e0b,#fbbf24);
  color:#000;font-family:'Nunito',sans-serif;font-size:15px;font-weight:900;
  cursor:pointer;letter-spacing:.4px;
  box-shadow:0 6px 24px rgba(245,158,11,.5);
  animation:popBuyPulse 1.8s ease-in-out infinite;
  position:relative;overflow:hidden;
}
@keyframes popBuyPulse{
  0%,100%{transform:scale(1);box-shadow:0 6px 24px rgba(245,158,11,.5)}
  50%{transform:scale(1.03);box-shadow:0 8px 34px rgba(245,158,11,.85)}
}
#pop5 .pop-btn-buy::after{
  content:'';position:absolute;top:0;left:-100%;width:60%;height:100%;
  background:linear-gradient(90deg,transparent,rgba(255,255,255,.35),transparent);
  animation:popShine 2.4s ease-in-out infinite;
}
@keyframes popShine{0%{left:-100%}50%,100%{left:160%}}

.pop-btn-snooze {
  display: block;
  width: 100%;
  margin-top: 10px;
  padding: 8px;
  background: none;
  border: none;
  color: rgba(255,255,255,0.35);
  font-family: 'Nunito', sans-serif;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  letter-spacing: 0.3px;
  transition: color 0.2s;
  text-align: center;
}
.pop-btn-snooze:hover {
  color: rgba(255,255,255,0.65);
}

</style>

<!-- ══ POPUP 1 — INFO / PENGUMUMAN ══ -->

<div class="pop-overlay" id="pop1">
  <div class="pop-card">
    <button class="pop-close" onclick="popClose('pop1')">✕</button>
    <div class="pop-img-area">
      <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEixxDAxybn1eZSteNlqaPaRqi3qNO_rz1XdQOs6BsI6MFvjVXvNOD_spGrLcBLBpFDqFD_yJ8iTaj4WY3MLoYI2srN5RM6G5x03Zq6KI3AYOZviBMA4AP0pGpOVF1HGMeDtodgScfCVPkI2JqR38bHbHq_D7jvv-YfsLBkHE8ItMAfQzhaSm61uHiF7aEE/s500/IMG_20260304_160936.jpg" class="pop-img" alt="png">
      <div class="pop-sparks">
        <div class="pop-spark" style="width:8px;height:8px;top:30%;left:15%;animation-delay:0s"></div>
        <div class="pop-spark" style="width:5px;height:5px;top:60%;left:70%;animation-delay:.6s"></div>
        <div class="pop-spark" style="width:10px;height:10px;top:20%;left:55%;animation-delay:1.2s"></div>
        <div class="pop-spark" style="width:6px;height:6px;top:75%;left:30%;animation-delay:.3s"></div>
      </div>
      <span class="pop-emoji"></span>
    </div>
    <span class="pop-badge">Pengumuman</span>
    <div class="pop-body">
      <div class="pop-title">Selamat Datang di NUBIASTORE!</div>
      <div class="pop-text">
        Platform top up game favoritmu anti Scam hadir dengan tampilan baru. Lebih cepat, lebih aman, dan lebih banyak pilihan metode bayar. Situs NUBIASTORE 100% Tanpa Biaya Tersembunyi Saat Checkout. Nikmati promo eksklusif setiap hari hanya di sini!
      </div>
      <button class="pop-btn-accept" onclick="popClose('pop1')">👍 Saya Mengerti</button>
    </div>
    <button class="pop-btn-snooze" onclick="popSnooze()">🔕 Jangan tampilkan selama 24 jam</button>

  </div>
</div>

<!-- ══ POPUP 2 — PROMO ITEM GAME ══ -->

<div class="pop-overlay" id="pop2">
  <div class="pop-card">
    <button class="pop-close" onclick="popClose('pop2')">✕</button>
    <div class="pop-img-area">
      <img src="https://cdn.unipin.com/images/content_image_pages/1714633621-wdp-ml-pengertian-jumlah-diamond-dan-cara-top-up-termurah.jpg" class="pop-img" alt="png">
      <span class="pop-promo-tag">🔥 HOT DEAL</span>
      <span class="pop-emoji"></span>
    </div>
    <div class="pop-body">
      <div class="pop-game-label">Mobile Legends</div>
      <div class="pop-item-name">Weekly Diamond Pass</div>
      <div class="pop-price-row">
        <div>
          <div class="pop-price-old">Rp 29.899</div>
          <div class="pop-price-new">Rp 25.326</div>
        </div>
        <div class="pop-saving">Hemat 14%</div>
      </div>
      <button class="pop-btn-buy" onclick="window.location.href='mobile-legends.html'">
        ⚡ Beli Sekarang
      </button>
    </div>
  </div>
</div>

<!-- ══ POPUP 3 — NUBIAPAY ══ -->

<div class="pop-overlay" id="pop3">
  <div class="pop-card">
    <button class="pop-close" onclick="popClose('pop3')">✕</button>
    <div class="pop-img-area">
      <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjhSr75G8JftOBsUq_SZpT8WymuTe6XfwO-p0grgaxZkKsEeNsyyBQxE68vzNCwWxxuOco66YkEVRl6czXadfMRAj3KWfMydAEOA-DD5L0eoTGvrxR0iUZK20eGy86xz9gyxR1PKCm7fVcsnsAALY2BKhd7lrewH3fubrk6-BXC0O82zjtNiH7pAOeFc8Y/s1280/IMG-20260306-WA0000.jpg" class="pop-img" alt="png">
      <div class="pop-glow"></div>
      <span class="pop-emoji"></span>
    </div>
    <div class="pop-body">
      <div class="pop-glow" style="top:-40px;right:-40px;width:160px;height:160px"></div>
      <div class="pop-np-logo"><span>⚡ NubiaPay</span></div>
      <div class="pop-title">Top Up Game Gratis Biaya Admin!</div>
      <ul class="pop-perks">
        <li>Gratis biaya admin semua transaksi</li>
        <li>Proses instan, 24 jam nonstop</li>
        <li>Tersedia untuk semua game populer</li>
        <li>Saldo fleksibel, bisa top up kapan saja</li>
      </ul>
      <button class="pop-btn-try" onclick="window.location.href='login-register.html'">
        🔐 Buat Akun NUBIAPAY
      </button>
      
    </div>
  </div>
</div>


<!-- ══ POPUP 5 — PROMO ITEM GAME ══ -->

<div class="pop-overlay" id="pop5">
  <div class="pop-card">
    <button class="pop-close" onclick="popClose('pop2')">✕</button>
    <div class="pop-img-area">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSon37kRi5myMRt2g1R_sAGtHq5YEn1tuHWxcA6NXFXn7F3vP79TqUjLZ1Z&s=10" class="pop-img" alt="png">
      <span class="pop-promo-tag">🔥 EPIC HOT DEAL</span>
      <span class="pop-emoji"></span>
    </div>
    <div class="pop-body">
      <div class="pop-game-label">Free Fire/Free Fire Max</div>
      <div class="pop-item-name">Membership Bulanan</div>
      <div class="pop-price-row">
        <div>
          <div class="pop-price-old">Rp 110.599</div>
          <div class="pop-price-new">Rp 87.785</div>
        </div>
        <div class="pop-saving">Hemat 22%</div>
      </div>
      <button class="pop-btn-buy" onclick="window.location.href='free-fire.html'">
        ⚡ Beli Sekarang
      </button>
      <h5>Klik Area Kosong Dimanapun untuk Menutup Iklan</h5>
    </div>
  </div>
</div>

<!-- ══ POPUP 4 — STOK TERBATAS ══ -->

<div class="pop-overlay" id="pop4">
  <div class="pop-card">
    <button class="pop-close" onclick="popClose('pop4')">✕</button>
    <div class="pop-img-area">
      <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi3W7RgHdabL_NFXksO4re8D5f8WPjFUYzsAV6JVQ7wHsKLkBB-tPKd9ievGIi5Q_XCyUK0aoaM4-L_E5VUlmpZzujem6yIPg1cIFm2tGahjtu7wOADgmqF7MiJUaHipcmul9ceEG4xiALcuS9KPDXrVX0r2NmWGKvsTn3QpI-TQkYi6QtREDCc1_k0G70/s919/IMG_20260304_160736.jpg" class="pop-img" alt="png">
      <span class="pop-emoji"></span>
    </div>
    <div class="pop-body">
      <div class="pop-stok-badge">
        <div class="pop-stok-dot"></div>
        <span>Stok Terbatas</span>
      </div>
      <div class="pop-item-name">Item Game Berlogo ⚡️Stok Terbatas</div>
      <div class="pop-nubia-only">🔒 Bayar Hanya via NubiaPay</div>
      <div class="pop-text">
        Item eksklusif ini hanya tersedia dalam jumlah terbatas dan <strong>limit 20 stok setiap hari mulai pukul 16:00WIB</strong>. Pembayaran wajib menggunakan saldo NubiaPay.
      </div>
      <div class="pop-restock-note">
        <span>📸</span>
        <span>Info restock & notifikasi stok tersedia — ikuti Instagram kami agar kamu tidak ketinggalan!</span>
      </div>
      <div class="pop-action-row">
        <button class="pop-btn-close" onclick="popClose('pop4')">Tutup</button>
        <button class="pop-btn-ig" onclick="window.open('https://instagram.com/nubiastore','_blank')">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
          Cek Instagram
        </button>
      </div>
    </div>
  </div>
</div>

<!-- ── POPUP JS — tidak bentrok dengan JS halaman utama ── -->

<script>
(function () {

  var POP_SNOOZE_KEY = 'ns_pop_snooze';
  var POP_SEQ = ['pop1', 'pop2', 'pop3', 'pop5', 'pop4'];
  var popIdx = 0;

  // Cek apakah masih dalam periode snooze 24 jam
  function popIsSnoozed() {
    var saved = localStorage.getItem(POP_SNOOZE_KEY);
    if (!saved) return false;
    return (Date.now() - parseInt(saved)) < 86400000;
  }

  // Tampilkan popup berikutnya di antrian
  function popShow() {
    if (popIdx >= POP_SEQ.length) return;
    var el = document.getElementById(POP_SEQ[popIdx]);
    if (el) el.classList.add('pop-active');
  }

  // Tutup popup tertentu, lalu tampilkan berikutnya
  window.popClose = function (id) {
    var el = document.getElementById(id);
    if (!el) return;
    el.style.animation = 'popFadeIn .18s ease reverse both';
    var card = el.querySelector('.pop-card');
    if (card) card.style.animation = 'popCardIn .18s ease reverse both';
    setTimeout(function () {
      el.classList.remove('pop-active');
      el.style.animation = '';
      if (card) card.style.animation = '';
      popIdx++;
      setTimeout(popShow, 340);
    }, 180);
  };

  // Tombol "jangan tampilkan 24 jam"
  window.popSnooze = function () {
    localStorage.setItem(POP_SNOOZE_KEY, Date.now().toString());
    var active = document.querySelector('.pop-overlay.pop-active');
    if (active) {
      active.classList.remove('pop-active');
    }
    popIdx = POP_SEQ.length; // kosongkan antrian
  };

  // Tutup jika klik area gelap di luar popup
  document.addEventListener('click', function (e) {
    if (e.target.classList.contains('pop-overlay') &&
        e.target.classList.contains('pop-active')) {
      popClose(e.target.id);
    }
  });

  // Tutup dengan Escape
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      var active = document.querySelector('.pop-overlay.pop-active');
      if (active) popClose(active.id);
    }
  });

  // Muncul otomatis — hanya jika belum snooze
  function popInit() {
    if (!popIsSnoozed()) setTimeout(popShow, 700);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', popInit);
  } else {
    popInit();
  }

})();
</script>


<!-- ══ END POPUP SYSTEM ══ -->
  
