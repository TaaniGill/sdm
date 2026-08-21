/* Sachkhand Digital Marketing — plain JS site behaviour (AngularJS removed) */
function deferIdle(fn){if('requestIdleCallback' in window){requestIdleCallback(fn,{timeout:2000});}else{setTimeout(fn,1);}}

function initNav(){ var navbar=document.getElementById('navbar'); var logo1=document.getElementById('logo'); if(!navbar)return; function setNav(transparent){ if(transparent){ logo1.src='assets/img/logo/SDM_logo_3d.svg'; navbar.classList.remove('whitebg'); navbar.style.background='transparent'; navbar.style.backdropFilter='blur(0px)'; navbar.style.boxShadow='none'; navbar.querySelectorAll('.nav-links>li>a:not(.nav-cta)').forEach(function(a){ a.style.color='rgba(255,255,255,.88)';}); var logo=navbar.querySelector('.logo'); if(logo){ logo.style.color='#ffffff';} navbar.querySelectorAll('.hamburger span').forEach(function(s){s.style.background='#ffffff';});}else{ logo1.src='assets/img/logo/SDM_logo_3d.svg'; navbar.classList.add('whitebg'); navbar.style.background='rgba(255,255,255,0.97)'; navbar.style.backdropFilter='blur(16px)'; navbar.style.boxShadow='0 1px 0 #e2e8f0,0 4px 20px rgba(0,0,0,.08)'; navbar.querySelectorAll('.nav-links>li>a:not(.nav-cta)').forEach(function(a){ a.style.color='#475569';}); var logo=navbar.querySelector('.logo'); if(logo){ logo.style.color='#1e293b';} navbar.querySelectorAll('.hamburger span').forEach(function(s){s.style.background='#1e293b';});}  navbar.querySelectorAll('.nav-dropdown a').forEach(function(a){a.style.color='#1e293b';});} function updateNav(){  if(document.getElementById('home')){ setNav(window.scrollY<80); return;}  var hero=document.querySelector('.hero,.page-hero'); if(hero){  var heroBottom=hero.getBoundingClientRect().bottom;  setNav(heroBottom>70); return;}  setNav(false);}  updateNav();  if(window._navScrollHandler)window.removeEventListener('scroll',window._navScrollHandler); window._navScrollHandler=updateNav; window.addEventListener('scroll',updateNav,{passive:true});  var hamburger=document.getElementById('hamburger'); var navLinks=document.getElementById('navLinks'); if(hamburger&&navLinks){ var newHam=hamburger.cloneNode(true); hamburger.parentNode.replaceChild(newHam,hamburger); hamburger=newHam; hamburger.addEventListener('click',function(){ var open=hamburger.classList.toggle('open'); navLinks.classList.toggle('open',open); var spans=hamburger.querySelectorAll('span'); if(open){ spans[0].style.transform='rotate(45deg)translate(5px,5px)'; spans[1].style.opacity='0'; spans[2].style.transform='rotate(-45deg)translate(5px,-5px)';}else{ spans[0].style.transform=spans[2].style.transform=''; spans[1].style.opacity='1';}});  navLinks.querySelectorAll('a').forEach(function(a){ a.addEventListener('click',function(){ if(window.innerWidth<=768){  if(a.parentNode&&a.parentNode.classList&&a.parentNode.classList.contains('nav-item-has-dropdown'))return; navLinks.classList.remove('open'); hamburger.classList.remove('open'); var sp=hamburger.querySelectorAll('span'); if(sp.length){sp[0].style.transform=sp[2].style.transform='';sp[1].style.opacity='1';}}});});}  document.querySelectorAll('.nav-item-has-dropdown').forEach(function(item){ var link=item.children[0]&&item.children[0].tagName==='A'?item.children[0]:item.querySelector('a'); if(!link)return; var newLink=link.cloneNode(true); link.parentNode.replaceChild(newLink,link); newLink.addEventListener('click',function(e){ if(window.innerWidth<=768){ e.preventDefault();  document.querySelectorAll('.nav-item-has-dropdown.open').forEach(function(o){if(o!==item)o.classList.remove('open');}); item.classList.toggle('open');}});});  var servicesItem=document.getElementById('servicesNavItem'); if(servicesItem){  var sLink=servicesItem.children[0]&&servicesItem.children[0].tagName==='A'?servicesItem.children[0]:servicesItem.querySelector('a'); if(sLink){ var newSLink=sLink.cloneNode(true); sLink.parentNode.replaceChild(newSLink,sLink); newSLink.addEventListener('click',function(e){ if(window.innerWidth<=768){e.preventDefault();servicesItem.classList.toggle('open');}});} document.addEventListener('click',function(e){ if(!servicesItem.contains(e.target))servicesItem.classList.remove('open');});}}

function initReveal(){ deferIdle(function(){ var els=document.querySelectorAll('.reveal:not(.vis)'); if(!els.length)return; var obs=new IntersectionObserver(function(entries){ entries.forEach(function(e,i){ if(e.isIntersecting){ setTimeout(function(){e.target.classList.add('vis');},i*80); obs.unobserve(e.target);}});},{threshold:0.08,rootMargin:'0px 0px -40px 0px'}); els.forEach(function(el){obs.observe(el);});});}

function initServiceCards(){ var cards=document.querySelectorAll('.svc-card:not(.svc-in),.sc:not(.svc-in)'); if(!cards.length)return; var obs=new IntersectionObserver(function(entries){ entries.forEach(function(entry){ if(entry.isIntersecting){ var card=entry.target; var delay=parseInt(card.dataset.delay||card.dataset.d||0); setTimeout(function(){card.classList.add('svc-in');},delay); obs.unobserve(card);}});},{threshold:0.08,rootMargin:'0px 0px -20px 0px'}); cards.forEach(function(c){obs.observe(c);});}

function initCounters(){ deferIdle(function(){ function animCount(el,target,dur){ dur=dur||1600; var em=el.querySelector('em'),emH=em?em.outerHTML:''; var start=performance.now(); function tick(now){ var p=Math.min((now-start)/dur,1),ease=1-Math.pow(1-p,3); el.innerHTML=Math.floor(ease*target)+emH; if(p<1)requestAnimationFrame(tick);} requestAnimationFrame(tick);} var cObs=new IntersectionObserver(function(entries){ entries.forEach(function(e){ if(e.isIntersecting&&e.target.dataset.count){ animCount(e.target,+e.target.dataset.count); cObs.unobserve(e.target);}});},{threshold:0.5}); document.querySelectorAll('[data-count]').forEach(function(el){cObs.observe(el);});});}

function initSlider(){ var slides=document.querySelectorAll('.hero-slide'); var scNum=document.getElementById('scNum'); var spBar=document.getElementById('spBar'); if(!slides.length)return; if(window._sliderTimer)clearInterval(window._sliderTimer); var current=0; slides.forEach(function(s){s.classList.remove('active');}); slides[0].classList.add('active');  function getDots(){return document.querySelectorAll('.sdot');} getDots().forEach(function(d){d.classList.remove('active');}); if(getDots()[0])getDots()[0].classList.add('active'); if(scNum)scNum.textContent='01'; function goTo(n){ slides[current].classList.remove('active'); var oldDot=getDots()[current]; if(oldDot)oldDot.classList.remove('active'); current=(n+slides.length)%slides.length; slides[current].classList.add('active'); var newDot=getDots()[current]; if(newDot)newDot.classList.add('active'); if(scNum)scNum.textContent=String(current+1).padStart(2,'0'); if(spBar){spBar.style.animation='none';spBar.offsetHeight;spBar.style.animation='spA 7s linear infinite';}} function resetTimer(){ clearInterval(window._sliderTimer); window._sliderTimer=setInterval(function(){goTo(current+1);},7000);} resetTimer();['nextBtn','prevBtn'].forEach(function(id){ var btn=document.getElementById(id); if(!btn)return; var nb=btn.cloneNode(true); btn.parentNode.replaceChild(nb,btn); nb.addEventListener('click',function(){ goTo(id==='nextBtn'?current+1:current-1); resetTimer();});}); getDots().forEach(function(d,idx){ var nd=d.cloneNode(true); d.parentNode.replaceChild(nd,d); nd.addEventListener('click',function(){goTo(idx);resetTimer();});});}

function initParticles(){ deferIdle(function(){ var colors={p1:'rgba(96,165,250,.6)',p2:'rgba(192,132,252,.6)',p3:'rgba(52,211,153,.6)',p4:'rgba(251,146,60,.6)'}; Object.keys(colors).forEach(function(id){ var c=document.getElementById(id); if(!c)return; c.innerHTML=''; for(var i=0;i<6;i++){ var p=document.createElement('div'); p.className='particle'; var size=Math.random()*4+2; p.style.cssText='width:'+size+'px;height:'+size+'px;background:'+colors[id]+';left:'+(Math.random()*100)+'%;--drift:'+((Math.random()-.5)*120)+'px;animation-duration:'+(8+Math.random()*12)+'s;animation-delay:'+(Math.random()*8)+'s;opacity:'+(0.2+Math.random()*0.4); c.appendChild(p);}});});}

function showToast(msg){ var t=document.getElementById('toast'); if(!t)return; t.textContent=msg;t.classList.add('show'); setTimeout(function(){t.classList.remove('show');},4500);}
function submitForm(type){ var msgs={consultation:"🚀 Session booked! We'll contact you within 24 hours.",audit:"🔍 Audit requested! Report arrives within 48 hours.",contact:"✅ Message sent! We'll reply within one business day."}; showToast(msgs[type]||'✅ Submitted!');}

function initPackageTabs(){ const tabs=document.querySelectorAll('.pkg-tab'); const cards=document.querySelectorAll('#pkgGrid .pkg-card'); tabs.forEach(tab=>{ tab.addEventListener('click',()=>{ tabs.forEach(t=>t.classList.remove('active')); tab.classList.add('active'); const cat=tab.dataset.cat; cards.forEach(card=>{ card.style.display=(cat==='all'||card.dataset.cat===cat)?'':'none';});});});}

function initfaq(){ document.querySelectorAll('.faq-q').forEach(q=>{ q.addEventListener('click',()=>{ const item=q.parentElement; const wasOpen=item.classList.contains('open'); document.querySelectorAll('.faq-item').forEach(i=>i.classList.remove('open')); if(!wasOpen)item.classList.add('open');});});}

/* ---- Contact / consultation / audit forms: plain fetch, no Angular $http ---- */
function validEmail(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e||'');}

function postForm(url, data){
  var params = new URLSearchParams();
  Object.keys(data).forEach(function(k){ if(data[k]!==undefined && data[k]!==null) params.append(k, data[k]); });
  return fetch(url, { method:'POST', headers:{'Content-Type':'application/x-www-form-urlencoded'}, body: params.toString() })
    .then(function(res){
      return res.json().catch(function(){ throw new Error('Invalid server response'); }).then(function(result){
        if(!res.ok || !result || !result.success){
          throw new Error((result && result.message) || 'Something went wrong. Please try again.');
        }
        return result;
      });
    });
}

function initMainContactForm(){
  var form = document.querySelector('form[name="mainForm"]');
  if(!form) return;
  var errorEl = document.getElementById('mainFormError');
  var successEl = document.getElementById('mainFormSuccess');
  var submitBtn = form.querySelector('.submit-btn');
  form.addEventListener('submit', function(e){
    e.preventDefault();
    var data = {
      fname: form.fname.value.trim(), lname: form.lname.value.trim(), email: form.email.value.trim(),
      phone: form.phone.value.trim(), company: form.company.value.trim(), service: form.service.value,
      budget: (form.querySelector('input[name="budget"]:checked')||{}).value || '',
      message: form.message.value.trim(), privacy: form.privacy.checked
    };
    errorEl.style.display='none'; errorEl.textContent=''; successEl.style.display='none';
    if(!data.fname){ errorEl.textContent='Please enter your first name.'; errorEl.style.display='block'; return; }
    if(!data.lname){ errorEl.textContent='Please enter your last name.'; errorEl.style.display='block'; return; }
    if(!validEmail(data.email)){ errorEl.textContent='Please enter a valid email address.'; errorEl.style.display='block'; return; }
    if(!data.service){ errorEl.textContent='Please select a service.'; errorEl.style.display='block'; return; }
    if(!data.message){ errorEl.textContent='Please tell us about your project.'; errorEl.style.display='block'; return; }
    if(!data.privacy){ errorEl.textContent='Please agree to the Privacy Policy.'; errorEl.style.display='block'; return; }
    submitBtn.disabled = true; submitBtn.querySelector('.btn-idle').style.display='none'; submitBtn.querySelector('.btn-sending').style.display='inline';
    postForm('lib/contact-us-send.php', data).then(function(){
      submitBtn.disabled = false; submitBtn.querySelector('.btn-idle').style.display='inline'; submitBtn.querySelector('.btn-sending').style.display='none';
      successEl.style.display='block'; form.reset();
      sdmTrack('generate_lead', { form_type:'contact', form_location:location.pathname, service:data.service, budget:data.budget });
    }).catch(function(err){
      submitBtn.disabled = false; submitBtn.querySelector('.btn-idle').style.display='inline'; submitBtn.querySelector('.btn-sending').style.display='none';
      errorEl.textContent = (err && err.message) || 'Something went wrong. Please try again or WhatsApp us directly.'; errorEl.style.display='block';
      sdmTrack('form_error', { form_type:'contact', form_location:location.pathname, error_message:(err && err.message) || 'unknown' });
    });
  });
}

function initConsultForm(){
  var form = document.querySelector('form[name="consultForm"]');
  if(!form) return;
  var errorEl = document.getElementById('consultFormError');
  var successEl = document.getElementById('consultFormSuccess');
  var submitBtn = form.querySelector('.consult-btn');
  form.addEventListener('submit', function(e){
    e.preventDefault();
    var data = {
      type:'consultation', fname: form.fname.value.trim(), lname: form.lname.value.trim(), email: form.email.value.trim(),
      phone: form.phone.value.trim(), website: form.website.value.trim(), goal: form.goal.value, format: form.format.value
    };
    errorEl.style.display='none'; errorEl.textContent=''; successEl.style.display='none';
    if(!data.fname){ errorEl.textContent='Please enter your first name.'; errorEl.style.display='block'; return; }
    if(!data.lname){ errorEl.textContent='Please enter your last name.'; errorEl.style.display='block'; return; }
    if(!validEmail(data.email)){ errorEl.textContent='Please enter a valid email address.'; errorEl.style.display='block'; return; }
    submitBtn.disabled = true; submitBtn.querySelector('.btn-idle').style.display='none'; submitBtn.querySelector('.btn-sending').style.display='inline';
    postForm('lib/consultation-send.php', data).then(function(){
      submitBtn.disabled = false; submitBtn.querySelector('.btn-idle').style.display='inline'; submitBtn.querySelector('.btn-sending').style.display='none';
      successEl.style.display='block'; form.reset();
      sdmTrack('generate_lead', { form_type:'consultation', form_location:location.pathname, goal:data.goal, format:data.format });
    }).catch(function(err){
      submitBtn.disabled = false; submitBtn.querySelector('.btn-idle').style.display='inline'; submitBtn.querySelector('.btn-sending').style.display='none';
      errorEl.textContent = (err && err.message) || 'Something went wrong. Please try again.'; errorEl.style.display='block';
      sdmTrack('form_error', { form_type:'consultation', form_location:location.pathname, error_message:(err && err.message) || 'unknown' });
    });
  });
}

function initAuditForm(){
  var form = document.querySelector('form[name="auditForm"]');
  if(!form) return;
  var errorEl = document.getElementById('auditFormError');
  var successEl = document.getElementById('auditFormSuccess');
  var submitBtn = form.querySelector('.consult-btn');
  form.addEventListener('submit', function(e){
    e.preventDefault();
    var data = {
      type:'audit', name: form.name.value.trim(), email: form.email.value.trim(), url: form.url.value.trim(),
      industry: form.industry.value, challenge: form.challenge.value, notes: form.notes.value.trim()
    };
    errorEl.style.display='none'; errorEl.textContent=''; successEl.style.display='none';
    if(!data.name){ errorEl.textContent='Please enter your name.'; errorEl.style.display='block'; return; }
    if(!validEmail(data.email)){ errorEl.textContent='Please enter a valid email address.'; errorEl.style.display='block'; return; }
    if(!data.url){ errorEl.textContent='Please enter your website URL.'; errorEl.style.display='block'; return; }
    submitBtn.disabled = true; submitBtn.querySelector('.btn-idle').style.display='none'; submitBtn.querySelector('.btn-sending').style.display='inline';
    postForm('lib/audit-send.php', data).then(function(){
      submitBtn.disabled = false; submitBtn.querySelector('.btn-idle').style.display='inline'; submitBtn.querySelector('.btn-sending').style.display='none';
      successEl.style.display='block'; form.reset();
      sdmTrack('generate_lead', { form_type:'audit', form_location:location.pathname, industry:data.industry, challenge:data.challenge });
    }).catch(function(err){
      submitBtn.disabled = false; submitBtn.querySelector('.btn-idle').style.display='inline'; submitBtn.querySelector('.btn-sending').style.display='none';
      errorEl.textContent = (err && err.message) || 'Something went wrong. Please try again.'; errorEl.style.display='block';
      sdmTrack('form_error', { form_type:'audit', form_location:location.pathname, error_message:(err && err.message) || 'unknown' });
    });
  });
}

function initNewsletterForm(){
  var form = document.querySelector('.bl-nl-form');
  if(!form) return;
  var successEl = document.querySelector('.bl-nl-success');
  var btn = form.querySelector('.bl-nl-btn');
  var input = form.querySelector('.bl-nl-input');
  var errEl = document.querySelector('.bl-nl-error');
  form.addEventListener('submit', function(e){
    e.preventDefault();
    var email = (input && input.value || '').trim();
    if(errEl){ errEl.style.display='none'; }
    if(!validEmail(email)){
      if(errEl){ errEl.textContent='Please enter a valid email address.'; errEl.style.display='block'; }
      return;
    }
    btn.disabled = true;
    btn.querySelector('.btn-idle').style.display='none';
    btn.querySelector('.btn-sending').style.display='inline';
    postForm('lib/newsletter-send.php', { email: email })
      .then(function(){
        form.style.display='none';
        if(successEl) successEl.style.display='block';
        form.reset();
        sdmTrack('sign_up', { method:'newsletter', form_location:location.pathname });
      })
      .catch(function(err){
        btn.disabled = false;
        btn.querySelector('.btn-idle').style.display='inline';
        btn.querySelector('.btn-sending').style.display='none';
        if(errEl){
          errEl.textContent = (err && err.message) || 'Something went wrong. Please try again.';
          errEl.style.display='block';
        }
        sdmTrack('form_error', { form_type:'newsletter', form_location:location.pathname, error_message:(err && err.message) || 'unknown' });
      });
  });
}

/* ---- Blog listing: vanilla search + category filter (replaces ng-repeat/filter) ---- */
function initBlogFilters(){
  var page = document.getElementById('blog-page');
  if(!page) return;
  var search = document.getElementById('bl-search');
  var filters = document.querySelectorAll('.bl-filter');
  var cards = document.querySelectorAll('.bl-card');
  var featuredWrap = document.querySelector('.bl-featured-wrap');
  var emptyState = document.querySelector('.bl-empty');
  var gridHeadDefault = document.querySelector('.bl-grid-title-default');
  var gridHeadSearch = document.querySelector('.bl-grid-title-search');
  var searchTermEl = document.getElementById('bl-search-term');
  var activeCategory = 'All';

  function applyFilter(){
    var q = (search.value || '').toLowerCase().trim();
    var visibleCount = 0;
    cards.forEach(function(card){
      var cat = card.dataset.cat;
      var text = card.dataset.search || '';
      var matchesCat = activeCategory === 'All' || cat === activeCategory;
      var matchesText = !q || text.indexOf(q) !== -1;
      var isDefaultView = !q && activeCategory === 'All';
      var show = matchesCat && matchesText && !(card.dataset.first === 'true' && isDefaultView);
      card.style.display = show ? '' : 'none';
      if(show) visibleCount++;
    });
    if(featuredWrap) featuredWrap.style.display = (!q && activeCategory === 'All') ? '' : 'none';
    if(q){ gridHeadDefault.style.display='none'; gridHeadSearch.style.display=''; if(searchTermEl) searchTermEl.textContent = search.value; }
    else { gridHeadDefault.style.display=''; gridHeadSearch.style.display='none'; }
    emptyState.style.display = visibleCount === 0 ? '' : 'none';
  }

  if(search) search.addEventListener('input', applyFilter);
  filters.forEach(function(btn){
    btn.addEventListener('click', function(){
      filters.forEach(function(b){ b.classList.remove('bl-active'); });
      btn.classList.add('bl-active');
      activeCategory = btn.dataset.cat;
      applyFilter();
    });
  });
  var clearBtn = document.querySelector('.bl-empty button');
  if(clearBtn) clearBtn.addEventListener('click', function(){
    search.value=''; activeCategory='All';
    filters.forEach(function(b){ b.classList.remove('bl-active'); });
    filters[0].classList.add('bl-active');
    applyFilter();
  });

  applyFilter();
}

function goToSection(sectionId, page){
  window.location.href = page + '.html#' + sectionId;
}

function setFooterYear(){
  document.querySelectorAll('.js-year').forEach(function(el){ el.textContent = new Date().getFullYear(); });
}

document.addEventListener('DOMContentLoaded', function(){
  initNav();
  initReveal();
  initTwoPaneMenus();
  initServiceCards();
  initCounters();
  initfaq();
  initPackageTabs();
  initBlogFilters();
  initMainContactForm();
  initConsultForm();
  initAuditForm();
  initNewsletterForm();
  setFooterYear();

  if(document.getElementById('home')){
    initSlider();
    initParticles();
  }

  if(window.location.hash){
    var target = document.getElementById(window.location.hash.slice(1));
    if(target) setTimeout(function(){ target.scrollIntoView({behavior:'smooth', block:'start'}); }, 300);
  }
});

/* ---- two-pane mega-menu: reveal the rail and show one pane at a time ----
   The markup renders every pane stacked by default, so if this never runs the
   menu is still complete. Adding .dd2-js is what switches on the rail.       */
function initTwoPaneMenus(){
  var menus = document.querySelectorAll('.nav-dropdown.dd2');
  if(!menus.length) return;
  Array.prototype.forEach.call(menus, function(menu){
    var cats  = menu.querySelectorAll('.dd2-cat');
    var panes = menu.querySelectorAll('.dd2-pane');
    if(cats.length < 2) return;
    menu.classList.add('dd2-js');
    function show(i){
      Array.prototype.forEach.call(cats, function(c){
        var on = c.getAttribute('data-p') === String(i);
        c.classList.toggle('on', on);
        c.setAttribute('aria-pressed', on ? 'true' : 'false');
      });
      Array.prototype.forEach.call(panes, function(p){
        p.classList.toggle('on', p.getAttribute('data-p') === String(i));
      });
    }
    Array.prototype.forEach.call(cats, function(c){
      var i = c.getAttribute('data-p');
      c.addEventListener('mouseenter', function(){ show(i); });
      c.addEventListener('focus',      function(){ show(i); });
      c.addEventListener('click',      function(e){ e.preventDefault(); show(i); });
    });
    // reset to the first category whenever the menu is reopened
    var item = menu.closest('.nav-item-has-dropdown');
    if(item) item.addEventListener('mouseleave', function(){ show(0); });
  });
  initLocationsCities();
  initDropdownAnchor();
}

/* ---- anchor each mega-menu to the centre of its own trigger --------------
   The dropdown is position:fixed and CSS centres it on the viewport, which
   left narrow menus (Partnership, Company) floating away from the nav item
   that opened them. On hover/focus we recompute a per-menu horizontal
   centre-point that aligns with the trigger's centre, then clamp it so the
   dropdown can never overhang either edge of the viewport. */
function initDropdownAnchor(){
  var items = document.querySelectorAll('.nav-item-has-dropdown');
  if(!items.length) return;
  var MARGIN = 16;
  function reposition(li){
    var dd = li.querySelector('.nav-dropdown');
    if(!dd) return;
    // Only kick in on desktop - in the mobile drawer the dropdown is static.
    if(getComputedStyle(dd).position !== 'fixed') { dd.style.left = ''; return; }
    var liRect = li.getBoundingClientRect();
    var centre = liRect.left + liRect.width / 2;
    // Read the dropdown's rendered width. If it hasn't laid out yet, its
    // offsetWidth is 0, so fall back to reading the min-width from CSS.
    var w = dd.offsetWidth;
    if(!w){
      var mw = parseFloat(getComputedStyle(dd).minWidth);
      w = isFinite(mw) && mw > 0 ? mw : 500;
    }
    var half = w / 2;
    var vw = window.innerWidth;
    var clamped = Math.max(half + MARGIN, Math.min(centre, vw - half - MARGIN));
    dd.style.left = clamped + 'px';
  }
  Array.prototype.forEach.call(items, function(li){
    li.addEventListener('mouseenter', function(){ reposition(li); });
    // any focus inside the item (link or dropdown item) counts as opening it
    li.addEventListener('focusin',    function(){ reposition(li); });
  });
  // If the viewport resizes while a menu is open, keep it aligned.
  window.addEventListener('resize', function(){
    Array.prototype.forEach.call(items, function(li){
      if(li.matches(':hover') || li.classList.contains('open')) reposition(li);
    });
  });
}

/* ---- locations: country -> cities third-level -----------------------------
   Inside each region pane the countries live in a rail on the left and the
   cities of the currently hovered country show on the right. Without JS the
   pane already contains every city with a heading per country, so the menu
   stays useful; this just switches on the "one country visible at a time"
   behaviour on desktop. */
function initLocationsCities(){
  var menus = document.querySelectorAll('.nav-dropdown.dd2-locs');
  if(!menus.length) return;
  Array.prototype.forEach.call(menus, function(menu){
    var panes = menu.querySelectorAll('.dd2-pane');
    Array.prototype.forEach.call(panes, function(pane){
      var countries = pane.querySelectorAll('.dd2-loc-c');
      var cities = pane.querySelectorAll('.dd2-loc-cities');
      if(!countries.length || !cities.length) return;
      function showCountry(cc){
        Array.prototype.forEach.call(countries, function(b){
          b.classList.toggle('on', b.getAttribute('data-cc') === cc);
          b.setAttribute('aria-pressed', b.getAttribute('data-cc') === cc ? 'true' : 'false');
        });
        Array.prototype.forEach.call(cities, function(c){
          c.classList.toggle('on', c.getAttribute('data-cc') === cc);
        });
      }
      Array.prototype.forEach.call(countries, function(btn){
        var cc = btn.getAttribute('data-cc');
        btn.addEventListener('mouseenter', function(){ showCountry(cc); });
        btn.addEventListener('focus',      function(){ showCountry(cc); });
      });
      // start on the first country each time the region pane becomes active
      var first = countries[0].getAttribute('data-cc');
      showCountry(first);
    });
  });
}
/* ---- end two-pane ---- */
