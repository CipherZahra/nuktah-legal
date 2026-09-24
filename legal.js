(function () {
  var LANGS = ['ar', 'en', 'fr'];
  var STORAGE_KEY = 'nuktah-legal-lang';

  function apply(lang) {
    if (LANGS.indexOf(lang) === -1) lang = 'ar';

    document.querySelectorAll('.lang').forEach(function (section) {
      section.classList.toggle('active', section.getAttribute('data-lang') === lang);
    });
    document.querySelectorAll('[data-set-lang]').forEach(function (btn) {
      var isActive = btn.getAttribute('data-set-lang') === lang;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });

    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {
      /* ignore */
    }
  }

  var saved = null;
  try {
    saved = localStorage.getItem(STORAGE_KEY);
  } catch (e) {
    /* ignore */
  }
  apply(saved || 'ar');

  document.querySelectorAll('[data-set-lang]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      apply(btn.getAttribute('data-set-lang'));
    });
  });
})();
