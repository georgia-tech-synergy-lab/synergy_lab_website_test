(function () {
  var legacyCss = `
.synergy-navbar {
  min-height: 92px;
  border-bottom: 4px solid #eaaa00;
  background: #003057 !important;
  box-shadow: 0 12px 30px rgba(16, 24, 32, 0.18);
}
.synergy-navbar .container { max-width: 1320px; }
.synergy-brand img { display: block; width: 172px; max-height: 74px; object-fit: contain; }
.synergy-navbar .nav-link { color: #fff !important; letter-spacing: 0; white-space: nowrap; }
.synergy-navbar .nav-link:hover, .synergy-navbar .nav-link:focus { color: #eaaa00 !important; }
.synergy-navbar .dropdown-menu { border: 1px solid #d8dee8; border-radius: 6px; box-shadow: 0 14px 28px rgba(16, 24, 32, 0.14); }
.synergy-navbar .dropdown-item { color: #18212d; }
.synergy-navbar .dropdown-item:hover { background: rgba(234, 170, 0, 0.14); color: #003057; }
.synergy-overlay-copy { min-height: 100%; display: flex; justify-content: center; flex-direction: column; color: #fff; }
.synergy-overlay-copy p { margin: 0 0 12px; color: #eaaa00; font-weight: 700; text-transform: uppercase; }
.synergy-overlay-copy strong { display: block; max-width: 520px; font-size: 2.2rem; line-height: 1.16; }
.synergy-page { padding-top: 92px; }
.synergy-section { width: min(1120px, calc(100% - 48px)); margin: 0 auto; padding: 68px 0; }
.synergy-section--soft { width: min(1120px, calc(100% - 48px)); max-width: 1120px; margin-left: auto; margin-right: auto; padding-left: 0; padding-right: 0; background: transparent; }
.synergy-list { display: grid; gap: 16px; margin: 0; padding: 0; list-style: none; }
.synergy-list li { padding: 18px 20px; border: 1px solid #d8dee8; border-radius: 8px; background: #fff; }
.synergy-meta { display: block; margin-bottom: 8px; color: #2f6f73; font-weight: 700; }
.synergy-footer { background: #101820; color: #fff; }
.synergy-footer .footer-text, .synergy-footer .footer-title, .synergy-footer .footer-copyright { color: rgba(255, 255, 255, 0.82); }
.synergy-footer a { color: #fff; }
.synergy-footer a:hover { color: #eaaa00; }
.synergy-footer-links { column-count: 2; column-gap: 22px; }
.gt-profile-image { width: 84px; height: 84px; display: block; margin-bottom: 18px; border-radius: 50%; object-fit: cover; background: #f6f8fb; }
.gt-tool-links { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 16px; }
.gt-tool-links a { display: inline-flex; min-height: 36px; align-items: center; padding: 8px 11px; border: 1px solid #d8dee8; border-radius: 6px; color: #003057; font-weight: 700; }
.gt-tool-links a:hover { background: #003057; color: #fff; text-decoration: none; }
.gt-tool-links span { display: inline-flex; min-height: 36px; align-items: center; padding: 8px 11px; border: 1px solid #d8dee8; border-radius: 6px; color: #5c6875; font-weight: 700; background: #f8fafc; }
@media (max-width: 1199px) { .synergy-navbar .nav-link { font-size: 0.86rem !important; } .synergy-brand img { width: 148px; } }
@media (max-width: 991px) { .synergy-navbar { min-height: 84px; } .synergy-page { padding-top: 84px; } .synergy-footer-links { column-count: 1; } }
@media (max-width: 640px) { .synergy-section { width: calc(100% - 36px); padding: 48px 0; } .synergy-section--soft { width: calc(100% - 36px); padding-left: 0; padding-right: 0; } }


body {
  background: #f7f8fb;
  color: #18212d;
  font-family: Roboto, Arial, sans-serif;
}

h1, h2, h3, h4, h5, h6 {
  font-family: Roboto, Arial, sans-serif;
  letter-spacing: 0;
}

.site-main.synergy-page {
  padding-top: 76px;
}

.synergy-navbar {
  min-height: 76px;
  border-top: 4px solid #eaaa00;
  border-bottom: 1px solid rgba(0, 48, 87, 0.12);
  background: rgba(255, 255, 255, 0.98) !important;
  box-shadow: 0 10px 30px rgba(16, 24, 32, 0.08);
}

.synergy-navbar .container {
  min-height: 72px;
}

.synergy-brand {
  padding: 0;
}

.synergy-brand img {
  width: 154px;
  max-height: 58px;
}

.synergy-navbar .navbar-nav {
  align-items: center;
  gap: 2px;
}

.synergy-navbar .navbar-text {
  margin-top: 0 !important;
  padding-left: 0 !important;
}

.synergy-navbar .nav-link {
  position: relative;
  padding: 11px 10px !important;
  color: #18212d !important;
  font-size: 0.86rem !important;
  font-weight: 700;
  line-height: 1;
}

.synergy-navbar .nav-link::after {
  content: "";
  position: absolute;
  left: 10px;
  right: 10px;
  bottom: 4px;
  height: 2px;
  transform: scaleX(0);
  transform-origin: left center;
  background: #eaaa00;
  transition: transform 0.18s ease;
}

.synergy-navbar .nav-link:hover,
.synergy-navbar .nav-link:focus {
  color: #003057 !important;
}

.synergy-navbar .nav-link:hover::after,
.synergy-navbar .nav-link:focus::after {
  transform: scaleX(1);
}

.synergy-navbar .dropdown-menu {
  margin-top: 14px;
  padding: 8px;
  border: 1px solid rgba(0, 48, 87, 0.12);
  background: #fff;
  box-shadow: 0 18px 42px rgba(16, 24, 32, 0.16);
}

.synergy-navbar .dropdown-item {
  padding: 9px 11px;
  border-radius: 6px;
  font-weight: 700;
}

.synergy-navbar .hamburger span,
.synergy-navbar .cross span {
  background: #003057;
}

.spyre-navbar-overlay {
  background: rgba(0, 48, 87, 0.94);
}

.spyre-navbar-nav-container {
  box-shadow: 18px 0 60px rgba(16, 24, 32, 0.18);
}

.synergy-overlay-copy strong {
  color: #fff;
  font-size: 2.05rem;
}

.gt-hero {
  min-height: 610px;
  align-items: flex-end;
  background: #101820;
}

.gt-hero::before {
  background: linear-gradient(90deg, rgba(16, 24, 32, 0.88) 0%, rgba(0, 48, 87, 0.72) 48%, rgba(0, 48, 87, 0.22) 100%);
}

.gt-hero__media {
  opacity: 0.9;
  filter: saturate(0.95) contrast(1.05);
}

.gt-hero__content {
  padding: 128px 0 78px;
}

.gt-hero h1 {
  max-width: 880px;
  font-size: 4rem;
  line-height: 1.02;
  font-weight: 800;
  text-shadow: 0 3px 18px rgba(0, 0, 0, 0.28);
}

.gt-lead {
  max-width: 700px;
  color: rgba(255, 255, 255, 0.88);
  font-size: 1.12rem;
}

.gt-eyebrow {
  color: #b3a369;
  font-size: 0.82rem;
  letter-spacing: 0.08em;
}

.gt-hero .gt-eyebrow,
.gt-page-hero .gt-eyebrow,
.gt-section--blue .gt-eyebrow {
  color: #eaaa00;
}

.gt-button {
  min-height: 44px;
  border-radius: 6px;
  font-size: 0.94rem;
  box-shadow: 0 8px 20px rgba(16, 24, 32, 0.12);
}

.gt-button--primary {
  background: #eaaa00;
  border-color: #eaaa00;
  color: #101820;
}

.gt-button--primary:hover {
  background: #b3a369;
  border-color: #b3a369;
}

.gt-button--secondary {
  border-color: rgba(255, 255, 255, 0.58);
  background: rgba(255, 255, 255, 0.06);
  color: #fff;
  box-shadow: none;
}

.gt-section {
  padding: 78px 0;
}

.gt-section__header {
  margin-bottom: 30px;
}

.gt-section__lead {
  max-width: 720px;
  margin: 14px 0 0;
  color: #5c6875;
  font-size: 1.05rem;
  line-height: 1.65;
}

.gt-section__header h2,
.gt-cta-band h2,
.gt-page-hero h1 {
  color: #18212d;
  font-size: 2.35rem;
  font-weight: 800;
}

.gt-page-hero h1,
.gt-section--blue h2 {
  color: #fff;
}

.gt-two-column {
  gap: 42px;
}

.gt-two-column p,
.gt-card p,
.gt-highlight p,
.gt-cta-band p,
.gt-page-hero p,
.gt-person-card p,
.gt-advisor-card p,
.gt-alumni-list p {
  color: #5c6875;
  font-size: 1rem;
}

.gt-card,
.gt-highlight,
.gt-person-card,
.gt-advisor-card,
.gt-alumni-list article,
.gt-news-list article {
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(0, 48, 87, 0.1);
  border-radius: 8px;
  background: #fff;
  box-shadow: 0 14px 32px rgba(16, 24, 32, 0.07);
}

.gt-card::before,
.gt-person-card::before,
.gt-alumni-list article::before,
.gt-news-list article::before {
  content: "";
  position: absolute;
  inset: 0 0 auto;
  height: 4px;
  background: #eaaa00;
}

.gt-card,
.gt-highlight,
.gt-person-card,
.gt-alumni-list article,
.gt-news-list article {
  padding: 28px;
}

.gt-card:hover,
.gt-person-card:hover,
.gt-news-list article:hover {
  transform: translateY(-2px);
  box-shadow: 0 18px 42px rgba(16, 24, 32, 0.11);
  transition: transform 0.18s ease, box-shadow 0.18s ease;
}

.gt-card h3,
.gt-highlight h3,
.gt-person-card h3,
.gt-advisor-card h3,
.gt-alumni-list h3,
.gt-card h2,
.gt-news-list h2 {
  color: #18212d;
  font-weight: 800;
}

.gt-card__number,
.gt-highlight time,
.gt-person-role,
.gt-news-list time {
  color: #003057 !important;
}

.gt-section--soft {
  background: transparent;
}

.gt-section.gt-section--soft,
.gt-section.gt-section--blue {
  width: min(1120px, calc(100% - 48px));
  max-width: 1120px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 0;
  padding-right: 0;
}

.gt-section--blue {
  background: #101820;
}

.gt-section--blue .gt-highlight {
  border-color: rgba(255, 255, 255, 0.14);
  background: rgba(255, 255, 255, 0.08);
  box-shadow: none;
}

.gt-section--blue .gt-highlight h3 {
  color: #fff;
}

.gt-section--blue .gt-highlight p {
  color: rgba(255, 255, 255, 0.72);
}

.gt-page-hero {
  min-height: 310px;
  background: #101820;
}

.gt-page-hero::after {
  background: linear-gradient(90deg, rgba(16, 24, 32, 0.88), rgba(0, 48, 87, 0.68));
}

.gt-page-hero__content {
  padding: 74px 0 64px;
}

.gt-page-hero p:last-child {
  color: rgba(255, 255, 255, 0.82);
  font-size: 1.08rem;
}

.gt-advisor-card {
  grid-template-columns: 128px 1fr;
  padding: 34px;
}

.gt-avatar--gold {
  width: 108px;
  height: 108px;
  background: #eaaa00;
  box-shadow: 0 14px 28px rgba(234, 170, 0, 0.22);
}

.gt-profile-image {
  width: 112px;
  height: 112px;
  margin-bottom: 20px;
  border: 4px solid #fff;
  box-shadow: 0 10px 24px rgba(16, 24, 32, 0.14);
}

.publication-main {
  background: #f7f9fc;
}

.publication-main .gt-page-hero {
  min-height: 230px;
}

.publication-main .gt-page-hero__content {
  padding: 46px 0 42px;
}

.publication-main .gt-page-hero h1 {
  font-size: 2.1rem;
}

.publication-main .gt-page-hero p:last-child {
  width: min(680px, 100%);
  margin-top: 12px;
  font-size: 0.98rem;
  line-height: 1.55;
}

.publication-shell {
  grid-template-columns: 220px minmax(0, 1fr);
  gap: 34px;
}

.publication-filter-card,
.publication-results-header,
.publication-list .paper {
  border-radius: 8px;
}

.publication-results-header {
  display: block;
  padding: 0 0 12px;
  border: 0;
  border-bottom: 1px solid rgba(0, 48, 87, 0.12);
  border-radius: 0;
  background: transparent;
  box-shadow: none;
}

.publication-filter-card {
  position: static;
  border: 0;
  background: transparent;
  box-shadow: none;
}

.publication-filter-card h2,
.publication-results-header h2 {
  color: #18212d;
  font-weight: 800;
}

.publication-filter-group .filter-button {
  background: transparent;
  color: #243447;
}

.publication-filter-group .filter-button:hover,
.publication-filter-group .filter-button.active-filter {
  background: #fff;
  border-color: rgba(0, 48, 87, 0.1);
  color: #003057;
}

.publication-list .paper {
  border: 1px solid rgba(0, 48, 87, 0.1);
  border-left: 3px solid #eaaa00;
  box-shadow: 0 6px 18px rgba(16, 24, 32, 0.045);
}

.publication-list .paper-title {
  color: #18212d;
  font-weight: 800;
}

.publication-list .paper-conference {
  background: rgba(234, 170, 0, 0.18);
  color: #003057;
}

.publication-list .paper-action {
  border-color: rgba(0, 48, 87, 0.12);
  color: #003057;
  font-weight: 700;
}

.gt-gallery-grid figure,
.sponsor-item {
  border: 1px solid rgba(0, 48, 87, 0.1);
  box-shadow: 0 14px 32px rgba(16, 24, 32, 0.07);
}

.sponsor-item {
  background: #fff;
}

.home-sponsors {
  width: min(1120px, calc(100% - 48px));
  margin: 0 auto 78px;
  padding: 0;
}

.home-tools-more {
  display: flex;
  margin-top: 24px;
}

.home-sponsors__header {
  margin-bottom: 22px;
}

.home-sponsors__header h2 {
  margin: 0;
  color: #18212d;
  font-size: 2.1rem;
  font-weight: 800;
  line-height: 1.16;
}

.home-sponsors__viewport {
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(0, 48, 87, 0.1);
  border-radius: 8px;
  background: #fff;
  box-shadow: 0 14px 32px rgba(16, 24, 32, 0.07);
}

.home-sponsors__viewport::before,
.home-sponsors__viewport::after {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 2;
  width: 96px;
  pointer-events: none;
}

.home-sponsors__viewport::before {
  left: 0;
  background: linear-gradient(90deg, #fff, rgba(255, 255, 255, 0));
}

.home-sponsors__viewport::after {
  right: 0;
  background: linear-gradient(270deg, #fff, rgba(255, 255, 255, 0));
}

.home-sponsors__track {
  display: flex;
  width: max-content;
  animation: homeSponsorScroll 34s linear infinite;
}

.home-sponsors__viewport:hover .home-sponsors__track {
  animation-play-state: paused;
}

.home-sponsors__item {
  width: 210px;
  height: 96px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  padding: 18px 28px;
}

.home-sponsors__item img {
  max-width: 150px;
  max-height: 54px;
  object-fit: contain;
  filter: saturate(0.92);
}

@keyframes homeSponsorScroll {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}

.synergy-footer {
  background: #0b1620;
  border-top: 4px solid #eaaa00;
}

@media (max-width: 991px) {
  .site-main.synergy-page {
    padding-top: 72px;
  }

  .synergy-navbar,
  .synergy-navbar .container {
    min-height: 72px;
  }

  .gt-hero h1 {
    font-size: 2.85rem;
  }

  .gt-page-hero__content {
    padding-top: 58px;
  }

  .home-sponsors {
    width: calc(100% - 36px);
  }
}

@media (max-width: 640px) {
  .synergy-brand img {
    width: 134px;
  }

  .gt-hero__content {
    padding: 74px 0 56px;
  }

  .gt-hero h1,
  .gt-page-hero h1 {
    font-size: 2.18rem;
  }

  .gt-card,
  .gt-highlight,
  .gt-person-card,
  .gt-advisor-card,
  .gt-alumni-list article,
  .gt-news-list article {
    padding: 22px;
  }

  .home-sponsors__header h2 {
    font-size: 1.75rem;
  }

  .home-sponsors__item {
    width: 168px;
    height: 82px;
    padding: 14px 22px;
  }

  .home-sponsors__item img {
    max-width: 124px;
    max-height: 46px;
  }

  .home-sponsors__viewport::before,
  .home-sponsors__viewport::after {
    width: 42px;
  }
}
`;
  // Kept temporarily for reference while the old template is retired.
  // Active site styles live in mytheme.css so layout is stable on first paint.
  void legacyCss;

  function normalizeRoot(root) {
    if (!root || root === ".") return ".";
    return root.replace(/\/$/, "");
  }

  function link(root, path) {
    return normalizeRoot(root) + "/" + path.replace(/^\.\//, "");
  }

  function renderHeader(target) {
    var root = normalizeRoot(target.getAttribute("data-root"));
    var homePrefix = root === "." ? "./" : "../";
    var pagePrefix = root === "." ? "./pages/" : "./";
    var logo = link(root, "assets/img/headers/Synergy Logo.png");

    target.innerHTML = [
      '<header class="spyre-navbar synergy-navbar navbar navbar-expand-lg bg-secondary navbar-dark fixed-top align-items-center" data-text-color="#ffffff">',
      '  <div class="container ml-neg-1">',
      '    <a class="navbar-brand synergy-brand mr-lg-4" href="' + homePrefix + 'index.html">',
      '      <img src="' + logo + '" alt="Synergy Lab" />',
      "    </a>",
      '    <div class="collapse navbar-collapse" id="navbarSupportedContent">',
      '      <ul class="navbar-nav ml-auto">',
      '        <li class="nav-item navbar-text"><a href="' + homePrefix + 'index.html" class="nav-link">Home</a></li>',
      '        <li class="nav-item navbar-text"><a href="' + pagePrefix + 'research.html" class="nav-link">Research</a></li>',
      '        <li class="nav-item navbar-text"><a href="' + pagePrefix + 'publication.html" class="nav-link">Publications</a></li>',
      '        <li class="nav-item navbar-text"><a href="' + pagePrefix + 'team.html" class="nav-link">Team</a></li>',
      '        <li class="nav-item navbar-text"><a href="' + pagePrefix + 'tools.html" class="nav-link">Tools</a></li>',
      "      </ul>",
      "    </div>",
      '    <div class="menu-toggle d-block d-lg-none"><div class="hamburger"><span></span><span></span><span></span></div><div class="cross"><span></span><span></span></div></div>',
      "  </div>",
      '  <div class="spyre-navbar-overlay overlay-slide"><div class="container"><div class="row"><div class="spyre-navbar-nav-container mt-neg-7 col-md-6 col-lg-5 col-xl-4 bg-white ext-l"><nav class="spyre-navbar-nav"><ul class="spyre-nav">',
      '    <li class="spyre-nav-item"><a href="' + homePrefix + 'index.html" class="spyre-nav-link">Home</a></li><li class="spyre-nav-item"><a href="' + pagePrefix + 'research.html" class="spyre-nav-link">Research</a></li><li class="spyre-nav-item"><a href="' + pagePrefix + 'publication.html" class="spyre-nav-link">Publications</a></li><li class="spyre-nav-item"><a href="' + pagePrefix + 'team.html" class="spyre-nav-link">Team</a></li><li class="spyre-nav-item"><a href="' + pagePrefix + 'tools.html" class="spyre-nav-link">Tools</a></li>',
      '  </ul></nav></div><div class="col-lg-7 col-xl-8 d-none d-md-block"><div class="synergy-overlay-copy"><p>Synergy Lab @ Georgia Tech</p><strong>Architecture, systems, software, and intelligent computing.</strong></div></div></div></div></div>',
      "</header>"
    ].join("");

    var currentPage = (window.location.pathname.split("/").pop() || "index.html").split("#")[0];
    target.querySelectorAll(".nav-link, .spyre-nav-link").forEach(function (navLink) {
      var href = navLink.getAttribute("href") || "";
      var page = href.split("#")[0].split("/").pop() || "index.html";
      if (page === currentPage) {
        navLink.classList.add("active");
      }
    });
  }

  function renderFooter(target) {
    var root = normalizeRoot(target.getAttribute("data-root"));
    var pagePrefix = root === "." ? "./pages/" : "./";
    var logo = link(root, "assets/img/headers/Synergy_Logo-removebg-preview.png");

    target.innerHTML = [
      '<footer class="footer synergy-footer"><div class="container">',
      '<div class="synergy-footer__grid"><div class="synergy-footer__brand"><img src="' + logo + '" alt="Synergy Lab"><p>Computer architecture and systems research at Georgia Tech.</p><address>Suite 3305-3306, 266 Ferst Dr NW<br>Atlanta, GA 30332</address></div>',
      '<nav class="synergy-footer__nav" aria-label="Footer navigation"><div><h2>Explore</h2><a href="' + pagePrefix + 'research.html">Research</a><a href="' + pagePrefix + 'publication.html">Publications</a><a href="' + pagePrefix + 'tools.html">Released Tools</a></div>',
      '<div><h2>Lab</h2><a href="' + pagePrefix + 'team.html">Team</a><a href="https://tushar-krishna.github.io/" target="_blank" rel="noopener">Faculty Homepage</a><a href="mailto:tushar@ece.gatech.edu">Contact</a></div></nav></div>',
      '<div class="synergy-footer__bottom"><span>&copy; 2026 Synergy Lab at Georgia Tech.</span><span>Atlanta, Georgia</span></div></div></footer>'
    ].join("");
  }

  document.querySelectorAll("[data-site-header]").forEach(renderHeader);
  document.querySelectorAll("[data-site-footer]").forEach(renderFooter);
})();
