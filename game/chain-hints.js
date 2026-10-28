(function () {
  const substances = [{"name":"негашёная известь","hint":"основный оксид","fact":"«Не гашена» — ещё не встречалась с водой. Залей водой: зашипит и разогреется.","aliases":["негашёная известь"]},{"name":"железная окалина","hint":"двойной оксид","fact":"Окалина — то, что «окалывается» с раскалённого железа. Внутри FeO·Fe₂O₃, поэтому оксид двойной. Амфотерным его называют по ошибке.","aliases":["железная окалина"]},{"name":"глинозём, корунд","hint":"амфотерный оксид","fact":"Глино-зём — земля, из которой состоит глина. Ювелирный корунд — это рубин и сапфир.","aliases":["глинозём","корунд"]},{"name":"боксит","hint":"амфотерный оксид","fact":"Назван по деревне Ле-Бо во Франции. Главная руда алюминия: тот же глинозём, но с водой.","aliases":["боксит"]},{"name":"вода, лёд","hint":"оксид","fact":"Формально — оксид водорода. Единственное название в наборе, которое не надо запоминать.","aliases":["вода","лёд"]},{"name":"угарный газ","hint":"несолеобразующий оксид","fact":"Угар — от неполного сгорания угля. Ни соли, ни кислоты не даёт.","aliases":["угарный газ"]},{"name":"углекислый газ","hint":"кислотный оксид","fact":"В воде даёт слабую угольную кислоту H₂CO₃ — отсюда «угле-кислый».","aliases":["углекислый газ"]},{"name":"веселящий газ","hint":"несолеобразующий оксид","fact":"Первый наркоз в истории: пациенты смеялись прямо на столе. Кислоты не образует.","aliases":["веселящий газ"]},{"name":"бурый газ, лисий хвост","hint":"кислотный оксид","fact":"Рыжий шлейф над трубой похож на лисий хвост. Ангидрид сразу двух кислот: HNO₂ и HNO₃.","aliases":["бурый газ","лисий хвост"]},{"name":"сернистый газ, сернистый ангидрид","hint":"кислотный оксид","fact":"Ангидрид — «без воды»: добавь воду и получишь кислоту. SO₂ + H₂O → H₂SO₃, серн-истая: кислорода меньше.","aliases":["сернистый газ","сернистый ангидрид"]},{"name":"серный газ, серный ангидрид","hint":"кислотный оксид","fact":"Ангидрид — «без воды»: добавь воду и получишь кислоту. SO₃ + H₂O → H₂SO₄, серная: кислорода больше.","aliases":["серный газ","серный ангидрид"]},{"name":"кварц, кремнезём, песок","hint":"кислотный оксид","fact":"Кремне-зём — земля, содержащая кремний. Обычный речной песок и есть SiO₂.","aliases":["кварц","кремнезём","песок"]},{"name":"фосфорный ангидрид","hint":"кислотный оксид","fact":"Ангидрид — «без воды»: добавь воду и получишь кислоту. P₂O₅ + 3H₂O → 2H₃PO₄, фосфорная.","aliases":["фосфорный ангидрид"]},{"name":"пиролюзит","hint":"амфотерный оксид","fact":"От греч. pyr — «огонь» и lysis — «мыть»: им осветляли стекло. Чёрный порошок, катализатор разложения H₂O₂.","aliases":["пиролюзит"]},{"name":"жжёная магнезия","hint":"основный оксид","fact":"«Жжёная» — получена прокаливанием MgCO₃. Ею сушат руки гимнасты и тяжелоатлеты.","aliases":["жжёная магнезия"]},{"name":"цинковые белила","hint":"амфотерный оксид","fact":"Белый пигмент для красок. Не путай с основными оксидами: ZnO амфотерный, реагирует и с кислотой, и со щёлочью.","aliases":["цинковые белила"]},{"name":"титановые белила","hint":"амфотерный оксид","fact":"Самый белый из пигментов: он в краске, зубной пасте и солнцезащитном креме.","aliases":["титановые белила"]},{"name":"свинцовый сурик","hint":"двойной оксид","fact":"Ярко-оранжевая краска по металлу. Внутри 2PbO·PbO₂ — оксид двойной, как железная окалина.","aliases":["свинцовый сурик"]},{"name":"едкий натр, каустик, каустическая сода","hint":"щёлочь","fact":"Caustic (греч. kaustikos) — «жгучий»: разъедает кожу. НатР — мужской род, едкий.","aliases":["едкий натр","каустик","каустическая сода"]},{"name":"едкий калий (едкое кали)","hint":"щёлочь","fact":"Тоже мужской род: едкий калий. Пара к едкому натру.","aliases":["едкий калий","едкое кали"]},{"name":"гашёная известь, известковая вода, известковое молоко","hint":"щёлочь","fact":"Гашение — реакция CaO с водой. Прозрачный насыщенный раствор зовут известковой водой, мутную взвесь — молоком.","aliases":["гашёная известь","известковая вода","известковое молоко"]},{"name":"нашатырный спирт, гидрат аммиака","hint":"слабое основание","fact":"Резкий запах из аптечки. Не путай с нашатырём — это NH₄Cl, твёрдая соль!","aliases":["нашатырный спирт","гидрат аммиака"]},{"name":"гидроксид диамминсеребра","hint":"комплексное основание","fact":"Реактив Толленса, «аммиачный раствор оксида серебра»: даёт реакцию серебряного зеркала.","aliases":["гидроксид диамминсеребра"]},{"name":"соляная кислота","hint":"сильная бескислородная кислота","fact":"«Соляная» — её получали из поваренной соли: NaCl + H₂SO₄. Кислота сильная.","aliases":["соляная кислота"]},{"name":"плавиковая кислота","hint":"слабая бескислородная кислота","fact":"От плавикового шпата CaF₂. Единственная слабая среди галогеноводородных, травит стекло.","aliases":["плавиковая кислота"]},{"name":"озон","hint":"простое вещество","fact":"От греч. ozon — «пахнущий»: запах свежести после грозы. Аллотропная модификация кислорода.","aliases":["озон"]},{"name":"графит","hint":"простое вещество","fact":"От греч. grapho — «пишу»: им пишет карандаш. Слоистая решётка, поэтому мягкий и проводит ток.","aliases":["графит"]},{"name":"алмаз","hint":"простое вещество","fact":"От греч. adamas — «несокрушимый». Тот же углерод, но каждый атом связан с четырьмя соседями.","aliases":["алмаз"]},{"name":"карборунд","hint":"бинарное соединение (карбид)","fact":"Карбо (углерод) + корунд: абразив, почти такой же твёрдый, как корунд.","aliases":["карборунд"]},{"name":"аммиак","hint":"бинарное соединение (летучее водородное)","fact":"От храма Амона в Египте, возле которого добывали соли аммония.","aliases":["аммиак"]},{"name":"фосфин","hint":"бинарное соединение (летучее водородное)","fact":"Фосфор + «ин», как у аминов. Крайне ядовит, пахнет чесноком.","aliases":["фосфин"]},{"name":"силан","hint":"бинарное соединение (летучее водородное)","fact":"Si (силициум) + «-ан», по образцу метана CH₄. Аналог метана у кремния.","aliases":["силан"]},{"name":"сероуглерод","hint":"бинарное соединение (сульфид)","fact":"Сера плюс углерод, и всё. Аналог CO₂, где кислород заменён серой.","aliases":["сероуглерод"]},{"name":"фосген","hint":"хлорангидрид","fact":"От греч. phos — «свет»: получен на свету. Боевое отравляющее вещество Первой мировой. Не оксид, хотя кислород в формуле есть.","aliases":["фосген"]},{"name":"натриевая (чилийская) селитра","hint":"средняя соль","fact":"Её веками добывали в пустыне Атакама в Чили — отсюда второе имя.","aliases":["натриевая селитра","чилийская селитра"]},{"name":"калийная (индийская) селитра","hint":"средняя соль","fact":"Её везли из Индии. Главный компонент чёрного пороха.","aliases":["калийная селитра","индийская селитра"]},{"name":"аммиачная селитра","hint":"средняя соль","fact":"Самое ходовое азотное удобрение: азот сразу в двух ионах.","aliases":["аммиачная селитра"]},{"name":"нашатырь","hint":"средняя соль","fact":"Нашатырь — твёрдая соль. Нашатырный спирт — раствор аммиака NH₃·H₂O. Разные вещества!","aliases":["нашатырь"]},{"name":"бертолетова соль","hint":"средняя соль","fact":"Открыл француз Клод Бертолле. Из неё делают головки спичек. Соль хлорноватой кислоты HClO₃.","aliases":["бертолетова соль"]},{"name":"поваренная (каменная, пищевая) соль","hint":"средняя соль","fact":"«Поваренная» — та, что у повара. «Каменная» — та, что добывают в шахтах.","aliases":["поваренная соль","каменная соль","пищевая соль"]},{"name":"поташ","hint":"средняя соль","fact":"От англ. pot ash — «зола из горшка»: его выпаривали из древесной золы.","aliases":["поташ"]},{"name":"кальцинированная сода","hint":"средняя соль","fact":"Кальцинировать — прокаливать; к кальцию отношения не имеет. Воды в формуле нет, водорода тоже: соль средняя.","aliases":["кальцинированная сода"]},{"name":"мел, мрамор, известняк","hint":"средняя соль","fact":"Одно вещество в трёх обличьях: рыхлый мел, кристаллический мрамор, порода известняк.","aliases":["мел","мрамор","известняк"]},{"name":"питьевая (пищевая) сода","hint":"кислая соль","fact":"Есть «Н» в формуле — значит кислая соль. Самая частая позиция в задании 5.","aliases":["питьевая сода","пищевая сода"]},{"name":"пирит, железный колчедан","hint":"средняя соль","fact":"От греч. pyr — «огонь»: искрит о сталь. Это дисульфид, соль H₂S₂. Сероводородной H₂S отвечают сульфиды.","aliases":["пирит","железный колчедан"]},{"name":"малахит","hint":"основная соль","fact":"Зелёный камень и патина на медных крышах. Есть группа ОН — значит основная соль.","aliases":["малахит"]},{"name":"криолит","hint":"комплексная соль","fact":"От греч. kryos — «лёд»: прозрачный, как лёд. В нём плавят глинозём при выплавке алюминия.","aliases":["криолит"]},{"name":"двойной суперфосфат","hint":"кислая соль","fact":"«Двойной» — фосфора вдвое больше, чем в простом суперфосфате. Два Н в остатке → кислая.","aliases":["двойной суперфосфат"]},{"name":"марганцовка","hint":"средняя соль","fact":"Тёмно-фиолетовые кристаллы, розовый раствор. Соль марганцовой кислоты HMnO₄.","aliases":["марганцовка"]},{"name":"киноварь","hint":"средняя соль","fact":"Красный минерал, из него веками добывали ртуть. Тот самый пигмент «вермильон».","aliases":["киноварь"]},{"name":"цинковая обманка","hint":"средняя соль","fact":"«Обманка» — рудокопы принимали её за свинцовую руду и оставались ни с чем. Светится в темноте.","aliases":["цинковая обманка"]},{"name":"хлорное железо","hint":"средняя соль","fact":"Старое название по высшей степени окисления: «хлорное» — это железо +3.","aliases":["хлорное железо"]},{"name":"хлористое железо","hint":"средняя соль","fact":"«-истое» — низшая степень окисления, железо +2. Правило то же, что у сернистой кислоты.","aliases":["хлористое железо"]},{"name":"ляпис","hint":"средняя соль","fact":"От лат. lapis infernalis — «адский камень»: им прижигали раны. Чернеет на свету.","aliases":["ляпис"]},{"name":"кристаллическая сода","hint":"средняя соль (кристаллогидрат)","fact":"Кристаллогидрат — соль с водой в решётке. Десять молекул воды дают крупные прозрачные кристаллы.","aliases":["кристаллическая сода"]},{"name":"цинковый купорос","hint":"средняя соль (кристаллогидрат)","fact":"Купорос — кристаллогидрат сульфата. Смотри на металл: Zn → цинковый. Бесцветные кристаллы.","aliases":["цинковый купорос"]},{"name":"медный купорос","hint":"средняя соль (кристаллогидрат)","fact":"Купорос — кристаллогидрат сульфата. Cu → медный. Ярко-синий, им опрыскивают деревья.","aliases":["медный купорос"]},{"name":"железный купорос","hint":"средняя соль (кристаллогидрат)","fact":"Купорос — кристаллогидрат сульфата. Fe → железный. Бледно-зелёные кристаллы.","aliases":["железный купорос"]},{"name":"гипс","hint":"средняя соль (кристаллогидрат)","fact":"Тот самый гипс на сломанной руке. Прокалить — уйдёт вода, получится алебастр.","aliases":["гипс"]},{"name":"глауберова соль","hint":"средняя соль (кристаллогидрат)","fact":"Открыл немец Иоганн Глаубер и назвал «чудесной солью»: сильное слабительное.","aliases":["глауберова соль"]},{"name":"алюмокалиевые квасцы","hint":"двойная соль (кристаллогидрат)","fact":"Два металла в одной формуле — соль двойная. Ими дубили кожу и останавливали кровь.","aliases":["алюмокалиевые квасцы"]},{"name":"олеум","hint":"раствор","fact":"От лат. oleum — «масло»: тяжёлая маслянистая жидкость, дымит на воздухе.","aliases":["олеум"]},{"name":"хлорная вода","hint":"раствор","fact":"В воде хлор частично реагирует: Cl₂ + H₂O ⇄ HCl + HClO. Не путай с хлорной кислотой HClO₄!","aliases":["хлорная вода"]},{"name":"бромная вода","hint":"раствор","fact":"Жёлто-оранжевый раствор брома. Обесцвечивается непредельными углеводородами — алкенами, алкинами, алкадиенами.","aliases":["бромная вода"]}];

  function norm(value) {
    return String(value).toLowerCase().replace(/ё/g, "е").replace(/\s+/g, " ").trim();
  }

  const byName = new Map();
  substances.forEach((item) => {
    item.aliases.forEach((alias) => {
      const key = norm(alias);
      const list = byName.get(key) || [];
      if (!list.includes(item)) list.push(item);
      byName.set(key, list);
    });
  });

  function findSubstances(needText) {
    const found = [];
    const seen = new Set();
    String(needText).split(",").map(norm).filter(Boolean).forEach((part) => {
      (byName.get(part) || []).forEach((item) => {
        if (seen.has(item)) return;
        seen.add(item);
        found.push(item);
      });
    });
    return found;
  }

  function currentNeed() {
    const nodes = document.querySelectorAll(".placed-card .placed-need strong");
    if (!nodes.length) return "";
    return nodes[nodes.length - 1].textContent.trim();
  }

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  let dialog = null;

  function closeDialog() {
    if (!dialog) return;
    dialog.remove();
    dialog = null;
    document.removeEventListener("keydown", onKey);
  }

  function onKey(event) {
    if (event.key === "Escape") closeDialog();
  }

  function openDialog(kind) {
    const need = currentNeed();
    const items = findSubstances(need);
    closeDialog();
    const title = kind === "hint" ? "Подсказка" : "Узнать новое";
    const body = items.length
      ? items.map((item) => {
          const text = kind === "hint" ? item.hint : item.fact;
          return '<p class="chain-hint-name">' + escapeHtml(item.name) + '</p><p class="chain-hint-text">' + escapeHtml(text) + "</p>";
        }).join("")
      : '<p class="chain-hint-text">Для названия «' + escapeHtml(need || "это вещество") + "» текст пока не записан.</p>";

    const backdrop = document.createElement("div");
    backdrop.className = "chain-hint-backdrop";
    backdrop.innerHTML =
      '<section class="chain-hint-dialog" role="dialog" aria-modal="true" aria-labelledby="chain-hint-title">' +
        '<div class="chain-hint-heading"><div>' +
          '<p class="game-eyebrow">Вещество, которое нужно поставить</p>' +
          '<h2 id="chain-hint-title">' + title + "</h2></div>" +
          '<button type="button" class="dialog-close" data-close="true" aria-label="Закрыть окно">×</button>' +
        "</div>" +
        '<div class="chain-hint-body">' + body + "</div>" +
        '<button type="button" class="dialog-understood" data-close="true">Понятно</button>' +
      "</section>";
    backdrop.addEventListener("mousedown", (event) => {
      if (event.target === backdrop) closeDialog();
    });
    backdrop.addEventListener("click", (event) => {
      if (event.target.closest("[data-close]")) closeDialog();
    });
    document.body.appendChild(backdrop);
    dialog = backdrop;
    document.addEventListener("keydown", onKey);
    backdrop.querySelector(".dialog-close").focus();
  }

  function mount(end) {
    if (end.querySelector("[data-chain-hints]")) return;
    end.classList.add("open-end-with-hints");
    const actions = document.createElement("div");
    actions.className = "open-end-actions";
    actions.dataset.chainHints = "true";
    actions.innerHTML =
      '<button type="button" class="open-end-button" data-kind="hint">Подсказка</button>' +
      '<button type="button" class="open-end-button open-end-button-fact" data-kind="fact">Узнать новое об этом веществе</button>';
    actions.addEventListener("click", (event) => {
      const button = event.target.closest("button");
      if (!button) return;
      event.preventDefault();
      event.stopPropagation();
      openDialog(button.dataset.kind);
    });
    end.appendChild(actions);
  }

  let centerFrame = 0;

  function ensureSpacers(track) {
    let lead = track.querySelector(":scope > .chain-scroll-lead");
    let tail = track.querySelector(":scope > .chain-scroll-tail");
    if (!lead) {
      lead = document.createElement("div");
      lead.className = "chain-scroll-lead";
      lead.setAttribute("aria-hidden", "true");
      track.prepend(lead);
    }
    if (!tail) {
      tail = document.createElement("div");
      tail.className = "chain-scroll-tail";
      tail.setAttribute("aria-hidden", "true");
      track.append(tail);
    }
    const pad = Math.max(0, track.clientWidth / 2);
    const basis = pad + "px";
    if (lead.style.flexBasis !== basis) lead.style.flexBasis = basis;
    if (tail.style.flexBasis !== basis) tail.style.flexBasis = basis;
  }

  function centerLastCard() {
    const track = document.querySelector(".chain-track");
    if (!track) return;
    ensureSpacers(track);
    const cards = track.querySelectorAll(".placed-card");
    const last = cards[cards.length - 1];
    if (!last) return;
    for (let attempt = 0; attempt < 3; attempt += 1) {
      const cardRect = last.getBoundingClientRect();
      const delta = cardRect.left + cardRect.width / 2 - window.innerWidth / 2;
      if (Math.abs(delta) < 2) break;
      const next = track.scrollLeft + delta;
      const max = Math.max(0, track.scrollWidth - track.clientWidth);
      track.scrollLeft = Math.min(max, Math.max(0, next));
    }
  }

  function scheduleCenter() {
    cancelAnimationFrame(centerFrame);
    centerFrame = requestAnimationFrame(() => {
      centerFrame = requestAnimationFrame(centerLastCard);
    });
  }

  function scan() {
    document.querySelectorAll(".chain-open-end").forEach(mount);
    scheduleCenter();
  }

  const style = document.createElement("style");
  style.textContent = [
    "html:has(.game-shell),body:has(.game-shell){height:100%;overflow:hidden;}",
    ".app-shell.game-shell:not(:has(.results-screen)){height:100dvh;max-height:100dvh;overflow:hidden;box-sizing:border-box;}",
    ".app-shell.game-shell:not(:has(.results-screen)) .game-screen{height:100%;max-height:100%;min-height:0;width:min(100%,1320px);max-width:100%;overflow:hidden;}",
    ".app-shell.game-shell .chain-board,.app-shell.game-shell .chain-track,.app-shell.game-shell .hand-section,.app-shell.game-shell .hand-carousel,.app-shell.game-shell .game-topbar{min-width:0;max-width:100%;}",
    ".app-shell.game-shell .chain-board{overflow:hidden;}",
    ".app-shell.game-shell .chain-track{overflow-x:auto;overflow-y:hidden;scroll-behavior:auto;}",
    ".app-shell.game-shell .placed-card,.app-shell.game-shell .chain-open-end,.chain-scroll-lead,.chain-scroll-tail{flex:0 0 auto;}",
    ".chain-scroll-lead,.chain-scroll-tail{height:1px;pointer-events:none;}",
    ".chain-open-end.open-end-with-hints{display:flex;flex-direction:row;align-items:center;justify-content:flex-start;gap:14px;min-width:0;width:max-content;white-space:normal;}",
    ".open-end-actions{display:flex;flex-wrap:wrap;align-items:center;gap:8px;}",
    ".open-end-button{min-height:44px;padding:0 14px;border:1px solid hsl(20 78% 57% / .4);border-radius:12px;background:hsl(43 42% 98%);color:hsl(20 67% 40%);font:700 13px/1.2 'Golos Text',sans-serif;cursor:pointer;}",
    ".open-end-button:hover{transform:translateY(-1px);background:hsl(20 78% 57% / .12);}",
    ".open-end-button-fact{border-color:hsl(164 40% 27% / .28);background:hsl(164 23% 90% / .75);color:hsl(164 40% 27%);}",
    ".open-end-button-fact:hover{background:hsl(164 23% 90%);}",
    ".chain-hint-backdrop{position:fixed;z-index:40;inset:0;display:grid;place-items:center;padding:20px;background:hsl(164 25% 17% / .48);backdrop-filter:blur(4px);}",
    ".chain-hint-dialog{width:min(100%,560px);max-height:min(84dvh,760px);display:flex;flex-direction:column;overflow:auto;padding:clamp(22px,4vw,32px);border:1px solid hsl(158 15% 81% / .9);border-radius:23px;background:hsl(43 42% 98%);color:hsl(164 25% 17%);box-shadow:0 28px 90px -42px hsl(164 28% 19% / .55);}",
    ".chain-hint-heading{display:flex;align-items:flex-start;justify-content:space-between;gap:16px;}",
    ".chain-hint-heading h2{margin:5px 0 0;font-family:Manrope,'Manrope',sans-serif;font-size:clamp(24px,4vw,31px);font-weight:800;letter-spacing:-.05em;}",
    ".chain-hint-name{margin:18px 0 4px;font-weight:800;}",
    ".chain-hint-text{margin:0;color:hsl(164 20% 27%);font-size:16px;line-height:1.65;}",
    ".chain-hint-dialog .dialog-understood{margin-top:22px;align-self:flex-end;}"
  ].join("");
  document.head.appendChild(style);

  const root = document.getElementById("root");
  if (root) new MutationObserver(scan).observe(root, { childList: true, subtree: true });
  window.addEventListener("resize", scheduleCenter);
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", scan);
  } else {
    scan();
  }
})();
