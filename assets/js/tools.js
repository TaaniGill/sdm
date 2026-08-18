/* Sachkhand Digital Marketing — free interactive tools (ROI calculator + AI readiness checker) */
(function(){
  var visitorsEl = document.getElementById('roi-visitors');
  if(!visitorsEl) return; // only runs on the free-tools page

  // ---- Marketing ROI Calculator ----
  var ids = ['roi-visitors','roi-conv','roi-close','roi-value','roi-growth'];
  function money(n){ if(!isFinite(n)) n = 0; return '$' + Math.round(n).toLocaleString('en-US'); }
  function num(id){ var v = parseFloat(document.getElementById(id).value); return isNaN(v) ? 0 : v; }
  function calcRoi(){
    var visitors = num('roi-visitors'), conv = num('roi-conv')/100, close = num('roi-close')/100,
        value = num('roi-value'), growth = num('roi-growth')/100;
    document.getElementById('roi-growth-val').textContent = Math.round(num('roi-growth')) + '%';
    var custNow = visitors*conv*close;
    var revNow = custNow*value;
    var revNew = visitors*(1+growth)*conv*close*value;
    var addYear = (revNew-revNow)*12;
    document.getElementById('roi-cust-now').textContent = Math.round(custNow).toLocaleString('en-US');
    document.getElementById('roi-rev-now').textContent = money(revNow);
    document.getElementById('roi-rev-new').textContent = money(revNew);
    document.getElementById('roi-year').textContent = money(addYear);
  }
  ids.forEach(function(id){ var el = document.getElementById(id); if(el){ el.addEventListener('input', calcRoi); } });
  calcRoi();

  // ---- AI Search Readiness Checker ----
  var btn = document.getElementById('ai-quiz-btn');
  if(btn){ btn.addEventListener('click', function(){
    var boxes = document.querySelectorAll('#ai-quiz input[type=checkbox]');
    var score = 0;
    boxes.forEach(function(b){ if(b.checked) score += parseInt(b.dataset.w, 10); });
    if(score > 100) score = 100;
    var band, color, msg;
    if(score >= 85){ band='AI Search Leader'; color='#059669'; msg='Excellent — your site is genuinely well-positioned to be found and cited by AI search engines. Keep monitoring your AI Overview and answer-engine visibility, and stay ahead as these systems evolve.'; }
    else if(score >= 60){ band='On Track'; color='#2563eb'; msg="Good foundation. You're doing several of the right things, but there are clear gaps holding back your AI-search visibility. Closing them could meaningfully increase how often you get cited."; }
    else if(score >= 35){ band='At Risk'; color='#d97706'; msg="You're at risk of being invisible in AI search. Competitors structuring their content for AI engines are likely being cited while you are not. This is fixable — and the sooner the better."; }
    else { band='Largely Invisible'; color='#dc2626'; msg='Right now your site is likely invisible to AI search engines. As more searches end inside AI answers, this gap costs real traffic. The good news: every item on this list is fixable with the right plan.'; }
    document.getElementById('ai-score').textContent = score;
    document.getElementById('ai-score').style.color = color;
    var bandEl = document.getElementById('ai-band'); bandEl.textContent = band; bandEl.style.color = color;
    document.getElementById('ai-msg').textContent = msg;
    var res = document.getElementById('ai-quiz-result');
    res.style.display = 'block';
    res.scrollIntoView({ behavior:'smooth', block:'center' });
  }); }
})();
