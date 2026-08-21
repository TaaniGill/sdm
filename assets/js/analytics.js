/* Sachkhand Digital Marketing - Google Analytics 4
 * ---------------------------------------------------------------------------
 * SET YOUR MEASUREMENT ID ON THE NEXT LINE. Format: G-XXXXXXXXXX
 * Find it in GA4: Admin > Data streams > your web stream > Measurement ID.
 * Until it is set, this file does nothing at all - no requests, no cookies.
 * This is the only place the ID appears; all 284 pages read it from here.
 */
var SDM_GA4_MEASUREMENT_ID = 'G-J4MLQ56X3G';


/* ---------------------------------------------------------------------------
 * sdmTrack(name, params[, done])
 * ---------------------------------------------------------------------------
 * The single entry point the rest of the site uses to record an event. Defined
 * unconditionally and outside the loader guard, so calling it is always safe:
 * if no measurement ID is set, or gtag has not loaded yet, it simply no-ops or
 * queues onto dataLayer.
 *
 * NEVER pass personal data (name, email, phone, message text) - Google's terms
 * prohibit sending PII to Analytics. Categorical values such as the selected
 * service or industry are fine.
 *
 * `done` is an optional callback for cases where the page is about to navigate
 * away; it fires once the event is sent, or after 400ms, whichever comes first.
 */
window.sdmTrack = function (name, params, done) {
  var fired = false;
  function finish() { if (!fired) { fired = true; if (typeof done === 'function') done(); } }

  if (typeof window.gtag !== 'function') { setTimeout(finish, 0); return; }

  var payload = params || {};
  if (typeof done === 'function') {
    payload = Object.assign({}, payload, { event_callback: finish });
    setTimeout(finish, 400);           /* don't strand the user if GA is blocked */
  }
  window.gtag('event', name, payload);
  if (typeof done !== 'function') finish();
};

(function () {
  'use strict';

  var ID = SDM_GA4_MEASUREMENT_ID;
  if (!/^G-[A-Z0-9]{6,}$/i.test(ID)) {
    if (window.console && console.info) {
      console.info('[SDM] Analytics idle: set SDM_GA4_MEASUREMENT_ID in assets/js/analytics.js');
    }
    return;
  }

  window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }
  window.gtag = gtag;

  /* ---- Consent Mode v2 ---------------------------------------------------
   * This site serves 30 countries, many of them in the EEA. Under GDPR/PECR
   * analytics cookies need consent there, so storage defaults to denied for
   * those regions and Google reports modelled data instead. Everywhere else
   * analytics storage is granted. Advertising storage is denied globally
   * because no ad tags are installed.
   *
   * When a consent banner is added, call:
   *   gtag('consent', 'update', { analytics_storage: 'granted' });
   * ---------------------------------------------------------------------- */
  var CONSENT_REQUIRED = [
    'AT','BE','BG','HR','CY','CZ','DK','EE','FI','FR','DE','GR','HU','IE','IT',
    'LV','LT','LU','MT','NL','PL','PT','RO','SK','SI','ES','SE',   /* EU 27 */
    'IS','LI','NO',                                                /* EEA    */
    'GB',                                                          /* UK     */
    'CH'                                                           /* Swiss  */
  ];

  gtag('consent', 'default', {
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    analytics_storage: 'denied',
    wait_for_update: 500,
    region: CONSENT_REQUIRED
  });

  gtag('consent', 'default', {
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    analytics_storage: 'granted'
  });

  /* ---- Load gtag.js ------------------------------------------------------ */
  var s = document.createElement('script');
  s.async = true;
  s.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(ID);
  document.head.appendChild(s);

  gtag('js', new Date());
  gtag('config', ID, {
    anonymize_ip: true,
    /* The site is plain multi-page HTML, so let GA4 handle pageviews itself. */
    send_page_view: true
  });
})();
