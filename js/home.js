
import { initializeApp, getApps } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore, doc, onSnapshot } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

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
let appInstance = getApps()[0];
if (!appInstance) {
  appInstance = initializeApp(firebaseConfig);
  getAuth(appInstance);
  getFirestore(appInstance);
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
  { title:"10.050 Diamonds", sub:"Mobile Legends", ori:"Rp3.388.177", disc:"Rp2.608.896", badge:"23% OFF", img:"https://cdn1.codashop.com/S/content/mobile/images/product-tiles/MLBB-2025-tiles-178x178.jpg", url:"mobile-legends.html" },
  { title:"Weekly Pass x3", sub:"Mobile Legends", ori:"Rp95.833", disc:"Rp86.250", badge:"10% OFF", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYD3pq3HTqX8Cr84wKLNwMAtJeXPlMPPPb4axhpZAJdSA5ahk3XIuBsh4&s=10", url:"mobile-legends.html" },
  { title:"Token PLN 100rb", sub:"PLN", ori:"Rp102.540", disc:"Rp100.950", badge:"1% OFF", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlRjVZTo6AiMWOFxV-aq6Su05h-0FL7rCt5g&s", url:"#" },
  { title:"Weekly Pass", sub:"Mobile Legends", ori:"Rp28.898", disc:"Rp24.987", badge:"7% OFF", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYD3pq3HTqX8Cr84wKLNwMAtJeXPlMPPPb4axhpZAJdSA5ahk3XIuBsh4&s=10", url:"mobile-legends.html" },
  { title:"Membership Mingguan", sub:"Free Fire Max", ori:"Rp31.259", disc:"Rp28.259", badge:"10% OFF", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHaOCkL8OLX7Wmp90dV3q9OlPvL-0HK5IpouKf6ueA0wb7FvEJ54KnNr4&s=10", url:"freefiremax.html" },
  { title:"4.830 Diamonds", sub:"Magic Chess", ori:"Rp1.278.278", disc:"Rp1.090.974", badge:"15% OFF", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8jzd-vAWwhklQcMTbpQEtJj_12ByL8aXAoNMMQ_goRmRV85HChrO7gKQ&s=10", url:"MCGG.html" },
];

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
let slideTimer = null;

const dotsContainer = document.getElementById('sliderDots');
if (dotsContainer) {
  for (let i = 0; i < totalSlides; i++) {
    const d = document.createElement('div');
    d.className = 'dot' + (i === 0 ? ' active' : '');
    d.onclick = () => goSlide(i);
    dotsContainer.appendChild(d);
  }
}

function goSlide(n) {
  if (!slidesWrap || totalSlides === 0) return;
  curSlide = (n + totalSlides) % totalSlides;
  slidesWrap.style.transform = `translateX(-${curSlide * 100}%)`;
  document.querySelectorAll('.dot').forEach((d, i) => d.classList.toggle('active', i === curSlide));
}
function startSlider() {
  if (totalSlides <= 1) return;
  slideTimer = setInterval(() => goSlide(curSlide + 1), 4500);
}
function resetSlider() {
  if (slideTimer) clearInterval(slideTimer);
  startSlider();
}

document.getElementById('prevBtn')?.addEventListener('click', () => { goSlide(curSlide - 1); resetSlider(); });
document.getElementById('nextBtn')?.addEventListener('click', () => { goSlide(curSlide + 1); resetSlider(); });
startSlider();

// Sidebar
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');
document.getElementById('menuBtn')?.addEventListener('click', () => {
  sidebar?.classList.toggle('open');
  overlay?.classList.toggle('open');
});
overlay?.addEventListener('click', () => {
  sidebar?.classList.remove('open');
  overlay?.classList.remove('open');
});

// Search
function buildSearchUI(input, listEl) {
  if (!input || !listEl) return;
  function renderResults(q) {
    if (q.trim() === '') {
      listEl.innerHTML = `<div class="promo-msg">Cari game, voucher & layanan terbaik di <b>NUBIASTORE</b> ð®</div>`;
      listEl.style.display = 'block';
      return;
    }
    const filtered = gamesData.filter(g => g.name.toLowerCase().includes(q.toLowerCase()));
    if (!filtered.length) {
      listEl.innerHTML = `<div class="promo-msg">Tidak ditemukan ð</div>`;
      listEl.style.display = 'block';
      return;
    }
    listEl.innerHTML = filtered.map(g => `
      <a href="${g.url}" class="shortcut-item">
        <img src="${g.img}" alt="${g.name}">
        <div><div class="si-name">${g.name}</div><div class="si-cat">${g.cat}</div></div>
      </a>`).join('');
    listEl.style.display = 'block';
  }
  input.addEventListener('focus', () => renderResults(input.value));
  input.addEventListener('input', () => renderResults(input.value));
  input.addEventListener('blur', () => setTimeout(() => { listEl.style.display = 'none'; }, 220));
}
buildSearchUI(document.getElementById('searchInput'), document.getElementById('shortcutList'));
buildSearchUI(document.getElementById('searchInputMobile'), document.getElementById('shortcutListMobile'));

// Login / account
function updateAuth() {
  const u = localStorage.getItem('nsUser');
  const btn = document.getElementById('loginBtn');
  const info = document.getElementById('accountInfo');
  const disp = document.getElementById('usernameDisplay');
  if (u) {
    if (btn) btn.style.display = 'none';
    if (info) { info.style.display = 'flex'; if (disp) disp.textContent = u; }
  } else {
    if (btn) btn.style.display = '';
    if (info) info.style.display = 'none';
  }
}
document.getElementById('loginBtn')?.addEventListener('click', () => {
  window.location.href = 'https://nubiastore.netlify.app/login-register';
});
document.getElementById('accountInfo')?.addEventListener('click', () => {
  if (confirm('Logout dari NUBIASTORE?')) {
    localStorage.removeItem('nsUser');
    updateAuth();
  }
});
updateAuth();

// Floating gift
document.getElementById('floatingGift')?.addEventListener('click', () => {
  window.location.href = '/akun.html';
});



/*
  MENU SALDO CARD â script terpisah
  Menggunakan getApps()[0] agar tidak double-init Firebase.
  Tidak menyentuh variabel apapun dari script utama.
*/
const menuSaldoAuth = getAuth(appInstance);
const menuSaldoDb = getFirestore(appInstance);

const mscGuest = document.getElementById('mscGuest');
const mscUser = document.getElementById('mscUser');
const mscUid = document.getElementById('mscUid');
const mscAmount = document.getElementById('mscAmount');

let unsubSaldo = null;

function fmtSaldo(n) {
  return 'Rp ' + Number(n).toLocaleString('id');
}
function shortUid(uid) {
  return uid ? uid.slice(0, 6) + '...' + uid.slice(-4) : 'â';
}

function showGuest() {
  if (mscGuest) mscGuest.style.display = 'flex';
  if (mscUser) mscUser.style.display = 'none';
  if (unsubSaldo) { try { unsubSaldo(); } catch (e) {} unsubSaldo = null; }
}

function showUser(uid) {
  if (mscGuest) mscGuest.style.display = 'none';
  if (mscUser) mscUser.style.display = 'flex';
  if (mscUid) mscUid.textContent = shortUid(uid);
  if (mscAmount) mscAmount.innerHTML = '<span class="msc-dots">â¢â¢â¢</span>';

  if (unsubSaldo) { try { unsubSaldo(); } catch (e) {} }

  unsubSaldo = onSnapshot(
    doc(menuSaldoDb, 'users', uid),
    (snap) => {
      const bal = snap.exists() ? Number(snap.data().nubiPayBalance || 0) : 0;
      if (mscAmount) mscAmount.textContent = fmtSaldo(bal);
    },
    (err) => {
      console.warn('[MenuSaldo] err:', err);
      if (mscAmount) mscAmount.textContent = 'Rp â';
    }
  );
}

onAuthStateChanged(menuSaldoAuth, (user) => {
  user ? showUser(user.uid) : showGuest();
});

/*
  AUTH HEADER WIDGET â script terpisah
  Pakai getApps()[0] â tidak double-init Firebase.
  Tidak menyentuh variabel apapun dari script utama.
*/
const authWidgetAuth = getAuth(appInstance);

const authGuest = document.getElementById('authGuest');
const authUser = document.getElementById('authUser');
const authTrigger = document.getElementById('authTrigger');
const authDropdown = document.getElementById('authDropdown');
const authTriggerName = document.getElementById('authTriggerName');
const authAvatar = document.getElementById('authAvatar');
const authCardAvatar = document.getElementById('authCardAvatar');
const authCardName = document.getElementById('authCardName');
const authCardEmail = document.getElementById('authCardEmail');
const authCardUid = document.getElementById('authCardUid');
const authLogoutBtn = document.getElementById('authLogoutBtn');

/* helpers */
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
  authDropdown?.classList.add('open');
  authTrigger?.setAttribute('aria-expanded', 'true');
}
function closeDropdown() {
  dropdownOpen = false;
  authDropdown?.classList.remove('open');
  authTrigger?.setAttribute('aria-expanded', 'false');
}

authTrigger?.addEventListener('click', (e) => {
  e.stopPropagation();
  dropdownOpen ? closeDropdown() : openDropdown();
});

/* tutup kalau klik di luar */
document.addEventListener('click', (e) => {
  const authWidget = document.getElementById('authWidget');
  if (dropdownOpen && authWidget && !authWidget.contains(e.target)) {
    closeDropdown();
  }
});

/* tutup kalau menu mobile dibuka */
document.getElementById('menuBtn')?.addEventListener('click', closeDropdown);

/* auth state */
onAuthStateChanged(authWidgetAuth, (user) => {
  if (user) {
    if (authGuest) authGuest.style.display = 'none';
    if (authUser) authUser.style.display = 'block';

    const name = user.displayName || '';
    const email = user.email || '';
    const uid = user.uid || '';
    const photo = user.photoURL || '';

    if (authTriggerName) authTriggerName.textContent = shortName(name, email);
    if (authAvatar) authAvatar.innerHTML = avatarHTML(photo, 'ð¤');

    if (authCardAvatar) authCardAvatar.innerHTML = avatarHTML(photo, 'ð¤');
    if (authCardName) authCardName.textContent = name || shortName('', email);
    if (authCardEmail) authCardEmail.textContent = email;
    if (authCardUid) authCardUid.textContent = 'UID: ' + shortUid(uid);

  } else {
    if (authUser) authUser.style.display = 'none';
    if (authGuest) authGuest.style.display = 'inline-flex';
    closeDropdown();
  }
});

/* logout */
authLogoutBtn?.addEventListener('click', async () => {
  closeDropdown();
  try {
    await signOut(authWidgetAuth);
  } catch (e) {
    console.error('Logout error', e);
    alert('Gagal logout. Coba lagi.');
  }
});

/*
  NUBIASTORE POPUP SYSTEM
  Paste seluruh blok ini tepat sebelum </body>
  Tidak mengubah apapun dari halaman utama.
  Semua class pakai prefix "pop-" agar tidak bentrok.
*/

(function () {
  const POP_SNOOZE_KEY = 'ns_pop_snooze';
  const POP_SEQ = ['pop1', 'pop2', 'pop3', 'pop5', 'pop4'];
  let popIdx = 0;

  function popIsSnoozed() {
    const saved = localStorage.getItem(POP_SNOOZE_KEY);
    if (!saved) return false;
    return (Date.now() - parseInt(saved, 10)) < 86400000;
  }

  function popShow() {
    if (popIdx >= POP_SEQ.length) return;
    const el = document.getElementById(POP_SEQ[popIdx]);
    if (el) el.classList.add('pop-active');
  }

  window.popClose = function (id) {
    const el = document.getElementById(id);
    if (!el) return;
    el.style.animation = 'popFadeIn .18s ease reverse both';
    const card = el.querySelector('.pop-card');
    if (card) card.style.animation = 'popCardIn .18s ease reverse both';
    setTimeout(function () {
      el.classList.remove('pop-active');
      el.style.animation = '';
      if (card) card.style.animation = '';
      popIdx++;
      setTimeout(popShow, 340);
    }, 180);
  };

  window.popSnooze = function () {
    localStorage.setItem(POP_SNOOZE_KEY, Date.now().toString());
    const active = document.querySelector('.pop-overlay.pop-active');
    if (active) active.classList.remove('pop-active');
    popIdx = POP_SEQ.length;
  };

  document.addEventListener('click', function (e) {
    if (e.target.classList && e.target.classList.contains('pop-overlay') &&
        e.target.classList.contains('pop-active')) {
      popClose(e.target.id);
    }
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      const active = document.querySelector('.pop-overlay.pop-active');
      if (active) popClose(active.id);
    }
  });

  function popInit() {
    if (!popIsSnoozed()) setTimeout(popShow, 700);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', popInit);
  } else {
    popInit();
  }
})();
