// ========== PWA SW ==========
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => navigator.serviceWorker.register("./sw.js"));
}

// ========== 文案 ==========
const QUOTES = [
  "🐻 你願意記錄今天，本身就值得被感謝。",
  "🐻 不是每天都完美，但你每天都很努力。",
  "🐻 小小的幸福，也是真實的幸福。",
  "🐻 你走到今天，真的不容易。",
  "🐻 慢慢來，我陪你。",
  "🐻 今天能呼吸、能感受，就是一份禮物。",
  "🐻 那些被你記下的，都是溫柔的證據。",
  "🐻 累了沒關係，停一下也是前進。",
  "🐻 你的存在，本身就值得感恩。",
  "🐻 世界因為有你，而不一樣。",
  "🐻 你正在學會善待自己，這很了不起。",
  "🐻 哪怕只有一件小事，也值得被珍惜。",
  "🐻 今天的你，比昨天更勇敢一點點。",
  "🐻 你沒有白白走過這些日子。",
  "🐻 感恩不是忘記痛，而是看見光。",
  "🐻 你願意回頭看看幸福，真的很溫柔。",
  "🐻 你的努力，我都看見了。",
  "🐻 慢慢寫、慢慢活，都沒關係。",
  "🐻 今天能記下一句也很棒。",
  "🐻 你值得被好好對待，包括被自己。",
  "🐻 有些日子很輕，但依然重要。",
  "🐻 你的心，比你想像的還堅強。",
  "🐻 幸福有很多樣子，你正在發現它。",
  "🐻 你不是孤單的，我在。",
  "🐻 今天的感謝，會變成明天的力量。",
  "🐻 你願意感恩，代表你仍然相信美好。",
  "🐻 就算什麼都沒完成，你也已經很棒。",
  "🐻 你正在學會與人生溫柔相處。",
  "🐻 謝謝你，願意活在這個世界。"
];

const TIPS = [
  "今天就寫一句也可以：你最想感謝什麼？",
  "回想一個被你忽略的小幸福，把它寫下來。",
  "把今天最溫柔的一句話，送給自己。",
  "謝謝你願意照顧自己的心，哪怕只是一點點。",
  "想一個你很珍惜的人，感謝他出現在你生命裡。",
  "把今天最想留住的一幕，寫成一句話。",
  "如果今天很難，也可以感謝你撐過來了。",
  "寫下：今天我做得最好的 1 件事。",
  "感謝你的身體：它一直在默默保護你。",
  "把今天的感恩，變成明天的勇氣。"
];

const TASKS = [
  "起床喝一杯溫水，美好的一天開始了！",
  "對自己說一句「辛苦了」。",
  "深呼吸三次，感受此刻的自己。",
  "看看窗外的天空 10 秒。",
  "感謝今天還能好好吃一餐。",
  "傳一個關心訊息給自己或別人。",
  "替自己準備一杯喜歡的飲料。",
  "整理一個小角落。",
  "回想今天讓你微笑的一件小事。",
  "替自己拍拍肩膀。",
  "聽一首讓你安心的歌。",
  "感謝今天仍然努力生活的自己。",
  "放下手機，靜靜坐 1 分鐘。",
  "看看一張讓你溫暖的照片。",
  "感謝你的身體陪你走到現在。",
  "對鏡子裡的自己微笑一下。",
  "寫下一個你感謝的人或事。",
  "今天多喝一杯水。",
  "走動一下，感受身體的存在。",
  "感謝今天的陽光、雨或空氣。",
  "對今天的自己不責怪。",
  "想一件過去曾撐過來的事。",
  "允許今天的自己慢一點。",
  "感謝一件看似理所當然的事。",
  "關掉不必要的煩惱 5 分鐘。",
  "寫下一個你期待的小事情。",
  "感謝你仍願意嘗試。",
  "整理手機裡一張喜歡的照片。",
  "今天少對自己說一句批評。",
  "對自己說：「我正在學習。」",
  "感謝今天有地方可以休息。",
  "想起一個曾讓你感動的瞬間。",
  "慢慢吃一口食物，感受味道。",
  "為自己做一件小小舒服的事。",
  "把肩膀放鬆一下。",
  "想一件你其實很努力的事。",
  "感謝你願意記錄今天。",
  "看一眼今天的日期，謝謝自己走到這一天。",
  "對今天的情緒說：「我懂你。」",
  "感謝一個你曾被幫助的時刻。",
  "給今天一個溫柔的結尾。",
  "允許今天不用完美。",
  "感謝今天仍有希望的自己。",
  "慢慢呼吸，讓心靜一下。",
  "想一件讓你感到安全的事。",
  "感謝今天能好好休息。",
  "對未來的自己說一句祝福。",
  "感謝這本日記陪著你。",
  "告訴自己：「我還在路上。」",
  "把今天的一件小成功寫下來。",
  "對身邊的一個人說聲謝謝。"
];

// ========== Storage keys ==========
const KEY_ENTRIES  = "gb_entries_v1";
const KEY_TASKDONE = "gb_taskdone_v1";
const KEY_TASKIDX  = "gb_taskidx_v1";
const KEY_AVATAR   = "gb_avatar_v1";

// ========== Helpers ==========
const $ = (id) => document.getElementById(id);
const safeOn = (id, evt, fn) => { const el = $(id); if (el) el.addEventListener(evt, fn); };

function todayISO(){
  const d = new Date();
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth()+1).padStart(2,"0");
  const dd = String(d.getDate()).padStart(2,"0");
  return `${yyyy}-${mm}-${dd}`;
}
function prettyDate(iso){
  const [y,m,d] = iso.split("-");
  return `${y}/${m}/${d}`;
}
function loadJSON(key, fallback){
  try { return JSON.parse(localStorage.getItem(key) || "") ?? fallback; }
  catch { return fallback; }
}
function saveJSON(key, obj){
  localStorage.setItem(key, JSON.stringify(obj));
}
function vibrate(){ navigator.vibrate?.(15); }
function pickRandom(arr){ return arr[Math.floor(Math.random()*arr.length)]; }
function clampPhotos(arr){ return arr.slice(0,3); }

async function fileToDataURL(file){
  return new Promise((resolve, reject)=>{
    const reader = new FileReader();
    reader.onload = ()=> resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

// ========== State ==========
let currentDate = todayISO();
let tempPhotos = [];

// ========== Pages ==========
const pages = {
  home: $("pageHome"),
  write: $("pageWrite"),
  journal: $("pageJournal"),
  settings: $("pageSettings")
};

function go(page){
  Object.values(pages).forEach(p => p && p.classList.remove("active"));
  pages[page] && pages[page].classList.add("active");

  document.querySelectorAll(".navbtn").forEach(b => b.classList.toggle("active", b.dataset.go === page));
  if (page === "home") { playHomeFlip(); renderHome(); }
  if (page === "journal") renderJournalList();
}

// ========== 翻頁感 ==========
function playHomeFlip(){
  const cards = ["homeBubbleCard","taskCard","homeTipCard","recentCard"].map($).filter(Boolean);
  cards.forEach((c, i)=>{
    c.classList.remove("flip-in");
    void c.offsetWidth;
    setTimeout(()=> c.classList.add("flip-in"), i*60);
  });
}

// ========== Avatar ==========
function loadAvatar(){
  const saved = localStorage.getItem(KEY_AVATAR);
  const img = $("avatarImg");
  if (!img) return;
  if (saved && saved.startsWith("data:image/")) img.src = saved;
  else img.src = "./images/bear.png";
}

// ========== Quote / Tip ==========
function setQuoteRandom(animate){
  const el = $("quoteBubble");
  if (!el) return;
  el.textContent = pickRandom(QUOTES);
  if (animate){
    const card = $("homeBubbleCard");
    if (card){
      card.classList.remove("flip-in");
      void card.offsetWidth;
      card.classList.add("flip-in");
    }
  }
}
function setTipRandom(animate){
  const el = $("tipText");
  if (!el) return;
  el.textContent = pickRandom(TIPS);
  if (animate){
    const card = $("homeTipCard");
    if (card){
      card.classList.remove("flip-in");
      void card.offsetWidth;
      card.classList.add("flip-in");
    }
  }
}

function copyText(t){
  navigator.clipboard?.writeText(t).then(()=>{
    $("tipText").textContent = "已複製熊熊小語 💛（點這裡可換提示）";
    vibrate();
  }).catch(()=>{});
}

// ========== Task ==========
function getTaskIndex(dateISO){
  const map = loadJSON(KEY_TASKIDX, {});
  if (typeof map[dateISO] === "number") return map[dateISO];

  let h = 0;
  const s = "TASK:"+dateISO;
  for (let i=0;i<s.length;i++) h = (h*31 + s.charCodeAt(i)) >>> 0;

  const idx = h % TASKS.length;
  map[dateISO] = idx;
  saveJSON(KEY_TASKIDX, map);
  return idx;
}

function playTaskDoneFX(alreadyDone){
  const fx = $("taskFxLayer");
  const taskCard = $("taskCard");
  if (!fx || !taskCard) return;

  fx.innerHTML = "";
  taskCard.classList.remove("task-done-glow");
  void taskCard.offsetWidth;
  taskCard.classList.add("task-done-glow");

  if (!alreadyDone){
    const plus = document.createElement("div");
    plus.className = "plus1";
    plus.textContent = "+1";
    fx.appendChild(plus);
    setTimeout(()=> plus.remove(), 950);
  }

  const check = document.createElement("div");
  check.className = "check-pop";
  check.textContent = "✅";
  fx.appendChild(check);
  setTimeout(()=> check.remove(), 700);
}

// ========== Home ==========
function renderHome(){
  setQuoteRandom(false);
  setTipRandom(false);

  const tIdx = getTaskIndex(currentDate);
  $("taskText").textContent = TASKS[tIdx];

  const doneMap = loadJSON(KEY_TASKDONE, {});
  const done = !!doneMap[currentDate];
  $("taskState").textContent = done
    ? "✅ 你完成了今天的小任務！謝謝你照顧自己。"
    : "（完成後打勾，沒完成也沒關係）";

  renderRecentOnHome();
}

// Carousel
function renderRecentOnHome(){
  const box = $("recentList");
  if (!box) return;
  box.innerHTML = "";

  const entries = loadJSON(KEY_ENTRIES, {});
  const dates = Object.keys(entries).sort((a,b)=> b.localeCompare(a));

  if (!dates.length){
    const empty = document.createElement("div");
    empty.className = "muted";
    empty.textContent = "還沒有日記～從今天開始，寫一句也可以 💛";
    box.appendChild(empty);
    return;
  }

  dates.forEach((d)=>{
    const e = entries[d];
    const hasPhoto = (e.photos || []).length;
    const snippet = (e.threeThings || e.moment || e.selfTalk || "")
      .replace(/\n/g," ")
      .slice(0,52);

    const item = document.createElement("div");
    item.className = "item recent-item";
    item.innerHTML = `
      <div class="d">${prettyDate(d)} ${hasPhoto ? "📸" : ""}</div>
      <div class="s">${snippet ? snippet + (snippet.length>=52?"…":"") : "（這天你留下了沉默，也是一種記錄）"}</div>
    `;
    item.addEventListener("click", ()=> openEntryModal(d));
    box.appendChild(item);
  });

  box.scrollLeft = 0;
}

// ========== Write ==========
function syncWriteFormFromDate(){
  tempPhotos = [];
  renderPhotoGrid();

  const entries = loadJSON(KEY_ENTRIES, {});
  const entry = entries[currentDate];

  $("field3things").value = entry?.threeThings || "";
  $("fieldMoment").value = entry?.moment || "";
  $("fieldSelf").value = entry?.selfTalk || "";

  tempPhotos = Array.isArray(entry?.photos) ? entry.photos.slice(0,3) : [];
  renderPhotoGrid();

  $("saveState").textContent = entry ? `（已載入 ${prettyDate(currentDate)} 的日記，可直接修改再儲存）` : "";
}

function renderPhotoGrid(){
  const grid = $("photoGrid");
  if (!grid) return;
  grid.innerHTML = "";
  tempPhotos.forEach((src, i)=>{
    const div = document.createElement("div");
    div.className = "photo";
    div.innerHTML = `<img src="${src}" alt="photo${i}"><button class="x" type="button" title="刪除">×</button>`;
    div.querySelector(".x").addEventListener("click", ()=>{
      tempPhotos.splice(i,1);
      renderPhotoGrid();
    });
    grid.appendChild(div);
  });
}

// ========== Journal ==========
function renderJournalList(){
  const list = $("journalList");
  if (!list) return;
  list.innerHTML = "";

  const entries = loadJSON(KEY_ENTRIES, {});
  const dates = Object.keys(entries).sort((a,b)=> b.localeCompare(a));

  if (!dates.length){
    const empty = document.createElement("div");
    empty.className = "card";
    empty.innerHTML = `<div class="card-title">還沒有日記</div><div class="muted">從今天開始，寫一句也可以 💛</div>`;
    list.appendChild(empty);
    return;
  }

  dates.forEach(d=>{
    const e = entries[d];
    const hasPhoto = (e.photos || []).length;
    const snippet = (e.threeThings || e.moment || e.selfTalk || "")
      .replace(/\n/g," ")
      .slice(0,40);

    const item = document.createElement("div");
    item.className = "item";
    item.innerHTML = `
      <div class="d">${prettyDate(d)} ${hasPhoto ? "📸" : ""}</div>
      <div class="s">${snippet ? snippet + (snippet.length>=40?"…":"") : "（這天你留下了沉默，也是一種記錄）"}</div>
    `;
    item.addEventListener("click", ()=> openEntryModal(d));
    list.appendChild(item);
  });
}

// ========== Modal ==========
const modal = $("entryModal");
function openEntryModal(dateISO){
  const entries = loadJSON(KEY_ENTRIES, {});
  const e = entries[dateISO];
  if (!e) return;

  $("modalTitle").textContent = `📖 ${prettyDate(dateISO)} 的日記`;
  $("modal3things").textContent = e.threeThings || "（未填）";
  $("modalMoment").textContent  = e.moment || "（未填）";
  $("modalSelf").textContent    = e.selfTalk || "（未填）";

  const mp = $("modalPhotos");
  mp.innerHTML = "";
  (e.photos || []).forEach(src=>{
    const div = document.createElement("div");
    div.className = "photo";
    div.innerHTML = `<img src="${src}" alt="photo">`;
    mp.appendChild(div);
  });

  $("modalEditBtn").onclick = ()=>{
    closeEntryModal();
    setDate(dateISO);
    go("write");
    syncWriteFormFromDate();
  };

  $("modalDeleteBtn").onclick = ()=>{
    if (!confirm("確定要刪除這篇日記嗎？")) return;
    const entries2 = loadJSON(KEY_ENTRIES, {});
    delete entries2[dateISO];
    saveJSON(KEY_ENTRIES, entries2);
    closeEntryModal();
    renderHome();
    renderJournalList();
  };

  modal.classList.remove("hidden");
  modal.setAttribute("aria-hidden","false");
}
function closeEntryModal(){
  modal.classList.add("hidden");
  modal.setAttribute("aria-hidden","true");
}

// ========== Date ==========
function setDate(iso){
  currentDate = iso;
  $("dateText").textContent = prettyDate(currentDate);
  $("datePicker").value = currentDate;
  $("writeDate").value = currentDate;

  renderHome();
  if (pages.home.classList.contains("active")) playHomeFlip();
}

// ========== Init ==========
function init(){
  // nav
  document.querySelectorAll(".navbtn").forEach(btn=>{
    btn.addEventListener("click", ()=>{
      const page = btn.dataset.go;
      if (page === "write") syncWriteFormFromDate();
      go(page);
    });
  });

  // date picker
  safeOn("datePickBtn", "click", ()=> $("datePicker").showPicker?.() || $("datePicker").click());
  safeOn("datePicker", "change", (e)=> setDate(e.target.value || todayISO()));

  // avatar
  loadAvatar();
  safeOn("avatarBtn", "click", ()=>{ setQuoteRandom(true); vibrate(); });

  // tip
  safeOn("homeTipCard", "click", ()=>{ setTipRandom(true); vibrate(); });

  // long press copy quote
  let pressTimer;
  const qEl = $("quoteBubble");
  qEl.addEventListener("touchstart", ()=> pressTimer=setTimeout(()=>copyText(qEl.textContent), 550));
  qEl.addEventListener("touchend", ()=> clearTimeout(pressTimer));
  qEl.addEventListener("mousedown", ()=> pressTimer=setTimeout(()=>copyText(qEl.textContent), 550));
  qEl.addEventListener("mouseup", ()=> clearTimeout(pressTimer));

  // task done
  safeOn("taskDoneBtn", "click", ()=>{
    const doneMap = loadJSON(KEY_TASKDONE, {});
    const already = !!doneMap[currentDate];
    doneMap[currentDate] = true;
    saveJSON(KEY_TASKDONE, doneMap);

    renderHome();
    playTaskDoneFX(already);
    vibrate();
  });

  // task swap
  safeOn("taskSwapBtn", "click", ()=>{
    const map = loadJSON(KEY_TASKIDX, {});
    const curr = typeof map[currentDate] === "number" ? map[currentDate] : getTaskIndex(currentDate);

    let next = Math.floor(Math.random() * TASKS.length);
    if (TASKS.length > 1) while (next === curr) next = Math.floor(Math.random() * TASKS.length);

    map[currentDate] = next;
    saveJSON(KEY_TASKIDX, map);

    const doneMap = loadJSON(KEY_TASKDONE, {});
    doneMap[currentDate] = false;
    saveJSON(KEY_TASKDONE, doneMap);

    renderHome();
    playHomeFlip();
    vibrate();
  });

  // write date
  safeOn("writeDate", "change", (e)=>{
    setDate(e.target.value || todayISO());
    syncWriteFormFromDate();
  });

  // photos
  safeOn("photoInput", "change", async (e)=>{
    const files = Array.from(e.target.files || []);
    if (!files.length) return;

    for (const f of files) {
      if (tempPhotos.length >= 3) break;
      const dataUrl = await fileToDataURL(f);
      tempPhotos.push(dataUrl);
    }
    tempPhotos = clampPhotos(tempPhotos);
    renderPhotoGrid();
    e.target.value = "";
  });

  // save entry
  safeOn("saveEntryBtn", "click", ()=>{
    const threeThings = $("field3things").value.trim();
    const moment = $("fieldMoment").value.trim();
    const selfTalk = $("fieldSelf").value.trim();

    const entries = loadJSON(KEY_ENTRIES, {});
    entries[currentDate] = {
      date: currentDate,
      threeThings,
      moment,
      selfTalk,
      photos: clampPhotos(tempPhotos),
      updatedAt: Date.now()
    };

    try{
      saveJSON(KEY_ENTRIES, entries);
      $("saveState").textContent = "✅ 已儲存！謝謝你把今天的幸福留住。";
      go("home");
      vibrate();
    }catch{
      $("saveState").textContent = "⚠️ 儲存失敗：可能照片太大。請刪除幾張或換小一點的照片。";
    }
  });

  // modal close
  safeOn("modalBackdrop", "click", closeEntryModal);
  safeOn("modalCloseBtn", "click", closeEntryModal);

  // settings avatar upload
  safeOn("avatarInput", "change", async (e)=>{
    const file = e.target.files?.[0];
    if (!file) return;

    try{
      const dataUrl = await fileToDataURL(file);
      localStorage.setItem(KEY_AVATAR, dataUrl);
      loadAvatar();
      alert("已更新大頭貼 ✅");
    }catch{
      alert("上傳失敗，請換一張照片再試一次。");
    }finally{
      e.target.value = "";
    }
  });

  safeOn("resetAvatarBtn", "click", ()=>{
    localStorage.removeItem(KEY_AVATAR);
    loadAvatar();
    alert("已還原預設熊熊頭像 ✅");
  });

  // export / clear
  safeOn("exportBtn", "click", ()=>{
    const payload = {
      entries: loadJSON(KEY_ENTRIES, {}),
      taskDone: loadJSON(KEY_TASKDONE, {}),
      taskIdx: loadJSON(KEY_TASKIDX, {}),
      avatar: localStorage.getItem(KEY_AVATAR) ? "(dataUrl omitted)" : null,
      exportedAt: new Date().toISOString()
    };
    const text = JSON.stringify(payload, null, 2);
    navigator.clipboard?.writeText(text).then(()=> alert("已匯出並複製到剪貼簿！"))
      .catch(()=> alert("複製失敗：你的瀏覽器可能不允許剪貼簿。"));
  });

  safeOn("clearBtn", "click", ()=>{
    if (!confirm("確定要清除所有資料嗎？（無法復原）")) return;
    [KEY_ENTRIES, KEY_TASKDONE, KEY_TASKIDX].forEach(k=> localStorage.removeItem(k));
    tempPhotos = [];
    syncWriteFormFromDate();
    renderHome();
    go("home");
  });

  // init render
  setDate(todayISO());
  syncWriteFormFromDate();
  renderHome();
  playHomeFlip();
}

document.addEventListener("DOMContentLoaded", init);