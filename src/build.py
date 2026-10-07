#!/usr/bin/env python3
"""Habinix static site generator (liquid glass edition).

No dependencies. Run:  python3 src/build.py
Output goes to ./public (served as-is by Vercel).
To add a product: add an entry to src/data/products.json and rebuild.
"""
import html
import json
import shutil
from pathlib import Path
from urllib.parse import quote

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / "src"
OUT = ROOT / "public"
SITE = "https://habinix.com"
EFFECTIVE = "7 October 2026"

COMPANY = {
    "legal": "Habinix LLC",
    "entity": "Limited Liability Company",
    "state": "Wyoming, USA",
    "address": ["30 N Gould St, STE R", "Sheridan, WY 82801", "United States"],
    "info": "info@habinix.com",
    "sales": "sales@habinix.com",
    "support": "support@habinix.com",
    "privacy": "privacy@habinix.com",
    "legal_email": "legal@habinix.com",
}

PRODUCTS = json.loads((SRC / "data" / "products.json").read_text(encoding="utf-8"))

e = html.escape

MARK = (
    '<svg viewBox="0 0 32 32" aria-hidden="true">'
    '<defs><linearGradient id="hxg" x1="0" y1="0" x2="1" y2="1">'
    '<stop offset="0" stop-color="#1d4f8f"/><stop offset="1" stop-color="#0B2545"/></linearGradient></defs>'
    '<rect width="32" height="32" rx="9" fill="url(#hxg)"/>'
    '<rect x=".5" y=".5" width="31" height="31" rx="8.5" fill="none" stroke="rgba(255,255,255,.35)"/>'
    '<path d="M10 8v16M22 8v16M10 16h12" stroke="#fff" stroke-width="3" stroke-linecap="round"/>'
    "</svg>"
)

NAV = [
    ("/services/", "Services"),
    ("/products/", "Products"),
    ("/how-we-work/", "How we work"),
    ("/about/", "About"),
]

ICONS = {
    "web": '<svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="16" rx="2.5"/><path d="M3 9h18M7 6.5h.01M10 6.5h.01"/></svg>',
    "mobile": '<svg viewBox="0 0 24 24"><rect x="6.5" y="2.5" width="11" height="19" rx="2.5"/><path d="M10.5 18.5h3"/></svg>',
    "ai": '<svg viewBox="0 0 24 24"><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1"/><circle cx="12" cy="12" r="3.5"/></svg>',
    "cloud": '<svg viewBox="0 0 24 24"><path d="M7 18.5h10a4 4 0 0 0 .6-7.96A5.5 5.5 0 0 0 7.1 9.6 4.5 4.5 0 0 0 7 18.5z"/></svg>',
    "commerce": '<svg viewBox="0 0 24 24"><path d="M3 4h2.5l2.2 11h10.6L20.5 7H6.4"/><circle cx="9.5" cy="19.5" r="1.3"/><circle cx="16.5" cy="19.5" r="1.3"/></svg>',
    "transform": '<svg viewBox="0 0 24 24"><path d="M4 7h11l-3-3M20 17H9l3 3"/></svg>',
}


def page(path, title, description, body, active=None, noindex=False):
    canonical = SITE + path
    cur = ' aria-current="page"'
    nav = "".join(f'<a href="{href}"{cur if active == href else ""}>{label}</a>' for href, label in NAV)
    robots = '<meta name="robots" content="noindex">' if noindex else ""
    full_title = title if title.startswith("Habinix") else f"{title} | Habinix"
    return f"""<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>{e(full_title)}</title>
<meta name="description" content="{e(description)}">
<link rel="canonical" href="{canonical}">
{robots}
<meta property="og:type" content="website">
<meta property="og:site_name" content="Habinix">
<meta property="og:title" content="{e(full_title)}">
<meta property="og:description" content="{e(description)}">
<meta property="og:url" content="{canonical}">
<meta name="twitter:card" content="summary_large_image">
<meta name="theme-color" content="#e6f0fd">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Montserrat:wght@500;600;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="/assets/site.css">
<script>document.documentElement.classList.add('js')</script>
</head>
<body>
<div class="scene" aria-hidden="true"><div class="orb o1"></div><div class="orb o2"></div><div class="orb o3"></div><div class="orb o4"></div><div class="grain"></div></div>
<a class="skip" href="#main">Skip to content</a>
<header class="site-header">
  <div class="bar glass">
    <a class="brand" href="/" aria-label="Habinix home">{MARK}<span>HABINIX</span></a>
    <button class="menu-toggle" aria-expanded="false" aria-controls="nav">Menu</button>
    <nav class="nav" id="nav" aria-label="Main">{nav}<a class="btn" href="/contact/">Start a project</a></nav>
  </div>
</header>
<main id="main">
{body}
</main>
{footer()}
<script src="/assets/site.js" defer></script>
</body>
</html>
"""


def footer():
    prods = "".join(f'<li><a href="/products/{p["slug"]}/">{e(p["name"])}</a></li>' for p in PRODUCTS)
    addr = "<br>".join(COMPANY["address"])
    return f"""<footer class="site-footer">
  <div class="foot glass reveal">
    <div class="foot-grid">
      <div>
        <a class="brand" href="/" aria-label="Habinix home">{MARK}<span>HABINIX</span></a>
        <p>IT consulting and digital solutions. Websites, mobile apps and AI-powered systems for businesses worldwide.</p>
      </div>
      <div><h4>Company</h4><ul>
        <li><a href="/services/">Services</a></li>
        <li><a href="/how-we-work/">How we work</a></li>
        <li><a href="/about/">About</a></li>
        <li><a href="/contact/">Contact</a></li>
      </ul></div>
      <div><h4>Products</h4><ul>{prods}</ul></div>
      <div><h4>Office</h4><address>{COMPANY["legal"]}<br>{addr}<br><a href="mailto:{COMPANY["info"]}">{COMPANY["info"]}</a></address></div>
    </div>
    <div class="legal">
      <span>© 2026 {COMPANY["legal"]}. Registered in {COMPANY["state"]}.</span>
      <span><a href="/privacy/">Privacy policy</a><a href="/terms/">Terms of use</a></span>
    </div>
  </div>
</footer>"""


def page_head(title, lede=None, crumbs=None):
    c = ""
    if crumbs:
        c = '<p class="crumbs">' + " / ".join(
            f'<a href="{h}">{e(t)}</a>' if h else e(t) for h, t in crumbs) + "</p>"
    l = f"<p>{lede}</p>" if lede else ""
    return f'<section class="page-head"><div class="wrap reveal">{c}<h1>{title}</h1>{l}</div></section>'


def mailto(addr, subject):
    return f"mailto:{addr}?subject={quote(subject)}"


# ---------------------------------------------------------------- content

SERVICES = [
    ("web", "Website design and development",
     "Company websites, web platforms and customer portals that load fast, read well on any screen and are easy for your team to update.",
     ["Corporate sites", "Web applications", "Content management", "Arabic and Urdu (RTL)"]),
    ("mobile", "Mobile app development",
     "iOS and Android apps from first prototype to store release, with the updates and monitoring that keep them working after launch.",
     ["iOS", "Android", "Cross-platform", "Store publishing"]),
    ("ai", "AI solutions and automation",
     "Assistants, document processing and workflow automation that take repetitive work off your team and keep a person in control.",
     ["AI agents", "Chat assistants", "Document AI", "Workflow automation"]),
    ("cloud", "Cloud and IT consulting",
     "Architecture, hosting, security and cost reviews for systems that have to stay up, scale and pass an audit.",
     ["Cloud setup", "Security review", "DevOps", "Migration"]),
    ("commerce", "E-commerce solutions",
     "Online stores and payment flows that handle catalogues, orders and customers, from a first shop to multi-market selling.",
     ["Online stores", "Payments", "Marketplaces", "Inventory"]),
    ("transform", "Digital transformation consulting",
     "A practical plan for moving paper, email and spreadsheets into reliable software, followed by the build that delivers it.",
     ["Process mapping", "Technology roadmaps", "Systems integration"]),
]

STEPS = [
    ("Discover", "We learn how your business works, what has to change and what success looks like, then agree scope, timeline and cost in writing."),
    ("Design", "Flows, screens and architecture are designed and reviewed with you before any production code is written."),
    ("Build", "We build in short cycles with a working preview you can open at any time, and test on real devices and real data."),
    ("Launch and support", "We release, monitor and maintain. You own the code, the accounts and the documentation."),
]

CLIENTS = ["Startups", "Small businesses", "SMEs", "Enterprises", "Education", "Healthcare", "Retail and e-commerce",
           "Real estate", "Professional services", "Government contractors", "Non-profits"]

PROMISES = [
    ("You own what we build", "Source code, accounts, domains and documentation are handed over in your name."),
    ("Written scope and pricing", "Every engagement starts with an agreement that says what is included and what it costs."),
    ("Security by default", "Least-privilege access, encrypted data and reviewed dependencies on every project."),
    ("English, Arabic and Urdu", "Right-to-left layouts and translated interfaces are part of how we build, not an add-on."),
]

HERO_DRAWING = """
<svg class="drawing" viewBox="0 0 560 440" role="img" aria-label="Technical drawing of a website, a mobile app and an AI agent connected by an API">
  <g class="appear" style="--d:1.1s">
    <path class="dim" d="M20 18v12M400 18v12M20 24h380"/>
    <text x="210" y="14" text-anchor="middle">1440 px</text>
  </g>
  <rect class="screen" x="20" y="40" width="380" height="270" rx="8"/>
  <rect class="ln draw" style="--len:1300;--d:0s" x="20" y="40" width="380" height="270" rx="8"/>
  <path class="thin draw" style="--len:400;--d:.2s" d="M20 66h380"/>
  <g class="appear" style="--d:.5s">
    <circle cx="36" cy="53" r="3.5" class="thin"/><circle cx="50" cy="53" r="3.5" class="thin"/><circle cx="64" cy="53" r="3.5" class="thin"/>
    <rect class="fillbar" x="44" y="88" width="150" height="14" rx="3"/>
    <rect class="fillbar" x="44" y="110" width="210" height="8" rx="3" opacity=".6"/>
    <rect class="fillbar" x="44" y="124" width="180" height="8" rx="3" opacity=".6"/>
    <rect class="thin" x="44" y="148" width="64" height="22" rx="11"/>
    <rect class="thin" x="44" y="196" width="96" height="82" rx="8"/>
    <rect class="thin" x="152" y="196" width="96" height="82" rx="8"/>
    <rect class="thin" x="260" y="196" width="40" height="82" rx="8"/>
  </g>
  <text class="lbl appear" style="--d:1s" x="20" y="332">Website</text>
  <rect class="screen" x="318" y="150" width="138" height="262" rx="22"/>
  <rect class="ln draw" style="--len:900;--d:.45s" x="318" y="150" width="138" height="262" rx="22"/>
  <g class="appear" style="--d:.9s">
    <path class="thin" d="M366 166h42"/>
    <rect class="fillbar" x="334" y="186" width="106" height="64" rx="8"/>
    <rect class="fillbar" x="334" y="260" width="78" height="8" rx="3" opacity=".6"/>
    <rect class="fillbar" x="334" y="274" width="96" height="8" rx="3" opacity=".6"/>
    <rect class="thin" x="334" y="300" width="106" height="30" rx="10"/>
    <rect class="thin" x="334" y="338" width="106" height="30" rx="10"/>
    <path class="thin" d="M370 396h34"/>
  </g>
  <text class="lbl appear" style="--d:1.1s" x="318" y="432">Mobile app</text>
  <g class="appear" style="--d:1.3s">
    <path class="dim" d="M472 150h12M472 412h12M478 150v262"/>
    <text x="490" y="285">844</text>
  </g>
  <path class="acc draw" style="--len:260;--d:1s" d="M400 108 C 440 108, 452 96, 488 96"/>
  <path class="acc draw" style="--len:200;--d:1.15s" d="M510 120 C 510 150, 470 150, 456 172"/>
  <circle class="acc draw" style="--len:180;--d:.9s" cx="512" cy="96" r="24"/>
  <circle class="dot appear" style="--d:1.5s" cx="512" cy="96" r="5"/>
  <circle class="dot appear" style="--d:1.5s" cx="400" cy="108" r="3"/>
  <circle class="dot appear" style="--d:1.5s" cx="456" cy="172" r="3"/>
  <text class="lbl appear" style="--d:1.4s" x="512" y="58" text-anchor="middle">AI agent</text>
  <text class="appear" style="--d:1.5s" x="430" y="90">API</text>
</svg>"""


def service_cards(detailed=False, link=True):
    out = []
    for i, (icon, t, d, tags) in enumerate(SERVICES):
        tag_html = '<ul class="tags">' + "".join(f"<li>{e(x)}</li>" for x in tags) + "</ul>" if detailed else ""
        tagname = "a" if link else "div"
        href = ' href="/services/"' if link else ""
        go = '<span class="go">Learn more</span>' if link else ""
        out.append(f'<{tagname} class="card glass reveal" style="--i:{i % 3}"{href}>'
                   f'<span class="icon">{ICONS[icon]}</span><h3>{e(t)}</h3><p>{e(d)}</p>{tag_html}{go}</{tagname}>')
    return f'<div class="grid g3">{"".join(out)}</div>'


def product_cards():
    out = []
    for i, p in enumerate(PRODUCTS):
        initials = "".join(w[0] for w in p["name"].split()[:2]).upper()
        out.append(
            f'<a class="card product glass reveal" style="--i:{i % 2}" href="/products/{p["slug"]}/">'
            f'<span class="mono">{e(initials)}</span>'
            f'<span class="kind">{e(p["kind"])}</span>'
            f'<h3>{e(p["name"])}</h3><p>{e(p["summary"])}</p>'
            f'<span class="status {e(p["status"])}">{e(p["statusLabel"])}</span></a>')
    return f'<div class="grid g2">{"".join(out)}</div>'


def step_cards():
    items = "".join(
        f'<li class="card glass reveal" style="--i:{i}"><span class="num" aria-hidden="true"></span><h3>{e(t)}</h3><p>{e(d)}</p></li>'
        for i, (t, d) in enumerate(STEPS))
    return f'<ol class="steps grid g4">{items}</ol>'


def promise_cards():
    return '<div class="grid g4">' + "".join(
        f'<div class="card glass reveal" style="--i:{i}"><h3>{e(t)}</h3><p>{e(d)}</p></div>'
        for i, (t, d) in enumerate(PROMISES)) + "</div>"


def cta(title, text, label="Start a project", href="/contact/"):
    return f"""<section class="section"><div class="wrap">
  <div class="cta glass reveal">
    <div><h2>{title}</h2><p>{text}</p></div>
    <a class="btn" href="{href}">{label}</a>
  </div>
</div></section>"""


def home():
    clients = "".join(f'<li class="glass reveal" style="--i:{i % 4}">{e(c)}</li>' for i, c in enumerate(CLIENTS))
    body = f"""
<section class="hero">
  <div class="wrap">
    <div class="reveal">
      <h1>Software for businesses, engineered to last.</h1>
      <p class="lede">Habinix is an IT consulting and digital solutions company. We build websites, mobile apps and AI-powered systems for businesses, and we run products of our own.</p>
      <div class="actions">
        <a class="btn" href="/contact/">Start a project</a>
        <a class="btn ghost" href="/products/">See our products</a>
      </div>
      <p class="tagline">Precision. Scale. Reliability.</p>
    </div>
    <div class="stage glass reveal" style="--i:1">
      {HERO_DRAWING}
      <span class="chip glass c1"><i></i>Web</span>
      <span class="chip glass c3"><i></i>AI</span>
      <span class="chip glass c2"><i></i>iOS and Android</span>
    </div>
  </div>
</section>

<section class="section">
  <div class="wrap">
    <div class="head reveal">
      <h2>What we build</h2>
      <div><p>Six services, one standard. Every build is documented, tested on real devices and ready for English, Arabic and Urdu from day one.</p>
      <a class="btn ghost more" href="/services/">All services</a></div>
    </div>
    {service_cards()}
  </div>
</section>

<section class="section">
  <div class="wrap">
    <div class="head reveal">
      <h2>Built by us</h2>
      <div><p>We don't only build for clients. These are products Habinix designs, builds and operates itself.</p>
      <a class="btn ghost more" href="/products/">All products</a></div>
    </div>
    {product_cards()}
  </div>
</section>

<section class="section">
  <div class="wrap">
    <div class="head reveal">
      <h2>How a project runs</h2>
      <p>Four stages, agreed in writing, with a working preview you can open throughout.</p>
    </div>
    {step_cards()}
  </div>
</section>

<section class="section">
  <div class="wrap">
    <div class="head reveal">
      <h2>Who we work with</h2>
      <p>Organisations of every size, worldwide. If your work runs on software, we can help it run better.</p>
    </div>
    <ul class="clients">{clients}</ul>
  </div>
</section>
{cta("Have a project in mind?", "Tell us what you need to build. We'll come back with a plan, a timeline and a clear estimate.")}"""
    return page("/", "Habinix — IT consulting and digital solutions",
                "Habinix builds websites, mobile apps and AI-powered solutions for businesses worldwide.", body)


def services():
    body = page_head("Services", "We design, build and run software for businesses: websites, mobile apps, AI systems and the cloud they run on.") + f"""
<section class="section"><div class="wrap">{service_cards(detailed=True, link=False)}</div></section>
<section class="section"><div class="wrap">
  <div class="head reveal"><h2>What every client gets</h2><p>The same standard on every project, whatever its size.</p></div>
  {promise_cards()}
</div></section>
{cta("Not sure which service you need?", "Describe the problem. We'll recommend the simplest thing that solves it.", "Talk to us")}"""
    return page("/services/", "Services", "Website, mobile app, AI and automation, cloud, e-commerce and digital transformation services from Habinix.", body, "/services/")


def how_we_work():
    models = [
        ("Fixed-scope project", "A defined deliverable, timeline and price, agreed before work starts.", ["Websites", "App releases", "Prototypes"]),
        ("Dedicated team", "Engineers and designers working on your roadmap month to month.", ["Product development", "Long-running platforms"]),
        ("Support and maintenance", "Monitoring, updates, security patches and small improvements after launch.", ["Hosting", "Updates", "Store compliance"]),
    ]
    mcards = "".join(
        f'<div class="card glass reveal" style="--i:{i}"><h3>{e(t)}</h3><p>{e(d)}</p><ul class="tags">{"".join(f"<li>{e(x)}</li>" for x in tags)}</ul></div>'
        for i, (t, d, tags) in enumerate(models))
    body = page_head("How we work", "A clear process, written agreements and a working preview you can open at any time.") + f"""
<section class="section"><div class="wrap">{step_cards()}</div></section>
<section class="section"><div class="wrap">
  <div class="head reveal"><h2>Ways to work with us</h2><p>Pick the model that fits the work. You can change it as the project grows.</p></div>
  <div class="grid g3">{mcards}</div>
</div></section>
<section class="section"><div class="wrap">
  <div class="head reveal"><h2>What you can expect</h2><p>Commitments that hold on every engagement.</p></div>
  {promise_cards()}
</div></section>
{cta("Ready to start?", "Tell us about the project and we'll take it from there.")}"""
    return page("/how-we-work/", "How we work", "How Habinix runs projects: discover, design, build, launch and support.", body, "/how-we-work/")


def about():
    addr = ", ".join(COMPANY["address"])
    values = [("Precision", "Clear scope, careful engineering and work that is checked before it ships."),
              ("Scale", "Systems designed to grow with your users, markets and languages."),
              ("Reliability", "Software that stays up, stays secure and stays maintainable.")]
    vcards = "".join(f'<div class="card glass reveal" style="--i:{i}"><h3>{t}</h3><p>{d}</p></div>' for i, (t, d) in enumerate(values))
    body = page_head("About Habinix", "An IT consulting and digital solutions company building websites, mobile apps and AI-powered systems for businesses worldwide.") + f"""
<section class="section"><div class="wrap split">
  <div class="glass panel prose reveal">
    <h2>Who we are</h2>
    <p>Habinix is a technology company. We help organisations plan, build and run the software their business depends on, from a first website to multi-platform products with AI at their core.</p>
    <p>We also build and operate products of our own. Running our own apps keeps our standards honest: the practices we recommend to clients are the ones we rely on every day.</p>
  </div>
  <div class="glass panel reveal" style="--i:1">
    <h2 style="font-size:var(--step-2);margin-bottom:22px">Company facts</h2>
    <dl class="facts">
      <dt>Legal name</dt><dd>{COMPANY["legal"]}</dd>
      <dt>Entity</dt><dd>{COMPANY["entity"]}</dd>
      <dt>Registered</dt><dd>{COMPANY["state"]}</dd>
      <dt>Address</dt><dd>{addr}</dd>
      <dt>Industry</dt><dd>IT consulting and digital solutions</dd>
      <dt>Market</dt><dd>Global</dd>
      <dt>Languages</dt><dd>English, Arabic, Urdu</dd>
    </dl>
  </div>
</div></section>
<section class="section"><div class="wrap">
  <div class="head reveal"><h2>What we stand for</h2><p>Three words that decide how we work.</p></div>
  <div class="grid g3">{vcards}</div>
</div></section>
{cta("Work with Habinix", "Tell us about your project and we'll take it from there.")}"""
    return page("/about/", "About", "Habinix LLC is an IT consulting and digital solutions company registered in Wyoming, USA.", body, "/about/")


def contact():
    addr = "<br>".join(COMPANY["address"])
    rows = [
        ("New projects", "Websites, apps, AI and consulting enquiries.", COMPANY["sales"], "New project enquiry"),
        ("General", "Anything else about Habinix.", COMPANY["info"], "General enquiry"),
        ("Product support", "Help with a Habinix app.", COMPANY["support"], "Product support"),
        ("Privacy", "Data requests and privacy questions.", COMPANY["privacy"], "Privacy request"),
    ]
    cards = "".join(
        f'<a class="contact-card glass card reveal" style="--i:{i % 2}" href="{mailto(a, s)}"><strong>{t}</strong><span>{d}</span><em>{a}</em></a>'
        for i, (t, d, a, s) in enumerate(rows))
    body = page_head("Contact", "Tell us what you need to build. Include your timeline and any links that help us understand the work.") + f"""
<section class="section"><div class="wrap">
  <div class="grid g2">{cards}</div>
</div></section>
<section class="section"><div class="wrap split">
  <div class="glass panel reveal">
    <h2 style="font-size:var(--step-2);margin-bottom:12px">What to include</h2>
    <ul class="list">
      <li><strong>What you want to build</strong><span>A few sentences is enough. Links to similar products help.</span></li>
      <li><strong>Who it is for</strong><span>Your customers or team, and the countries and languages involved.</span></li>
      <li><strong>Timing and budget</strong><span>A target date and a budget range, if you have them.</span></li>
    </ul>
  </div>
  <div class="glass panel reveal" style="--i:1">
    <h2 style="font-size:var(--step-2);margin-bottom:16px">Registered office</h2>
    <address style="font-style:normal;color:var(--muted)">{COMPANY["legal"]}<br>{addr}</address>
  </div>
</div></section>"""
    return page("/contact/", "Contact", "Contact Habinix about websites, mobile apps, AI solutions and IT consulting.", body)


def products_index():
    body = page_head("Products", "Software Habinix designs, builds and operates itself.") + f"""
<section class="section"><div class="wrap">{product_cards()}</div></section>
{cta("Want something like this for your business?", "The same team that builds our products builds yours.")}"""
    return page("/products/", "Products", "Products built and operated by Habinix: MyPDF, Muftiyaan, TECHNIX and our e-learning platform.", body, "/products/")


def legal_links(p):
    base = f"/products/{p['slug']}"
    L = p["legal"]
    links = []
    if L.get("support"):
        links.append((f"{base}/support/", "Support"))
    if L.get("privacy") == "company":
        links.append(("/privacy/", "Privacy policy"))
    elif L.get("privacy"):
        links.append((f"{base}/privacy/", "Privacy policy"))
    if L.get("terms") == "company":
        links.append(("/terms/", "Terms of use"))
    elif L.get("terms"):
        links.append((f"{base}/terms/", "Terms of use"))
    if L.get("dataDeletion"):
        links.append((f"{base}/data-deletion/", "Delete your data"))
    return links


def product_detail(p):
    if p["features"]:
        feats = '<div class="grid g3">' + "".join(
            f'<div class="card glass reveal" style="--i:{i}"><h3>{e(f["title"])}</h3><p>{e(f["text"])}</p></div>'
            for i, f in enumerate(p["features"])) + "</div>"
    else:
        feats = '<div class="glass panel reveal"><p style="margin:0;color:var(--muted)">Features, screenshots and download links will be published here at launch.</p></div>'
    plats = ", ".join(p["platforms"]) if p["platforms"] else "Web and social channels"
    links = "".join(f'<li><a href="{h}">{t}</a></li>' for h, t in legal_links(p))
    body = page_head(e(p["name"]), e(p["summary"]), [("/products/", "Products"), (None, p["name"])]) + f"""
<section class="section"><div class="wrap split">
  <div class="glass panel prose reveal"><p style="font-size:var(--step-1);margin:0">{e(p["description"])}</p></div>
  <div class="glass panel reveal" style="--i:1">
    <dl class="facts">
      <dt>Type</dt><dd>{e(p["kind"])}</dd>
      <dt>Status</dt><dd><span class="status {e(p["status"])}" style="padding:0">{e(p["statusLabel"])}</span></dd>
      <dt>Platforms</dt><dd>{e(plats)}</dd>
      <dt>Publisher</dt><dd>{COMPANY["legal"]}</dd>
    </dl>
    <h3 style="margin:28px 0 6px">Help and policies</h3>
    <ul class="list">{links}</ul>
  </div>
</div></section>
<section class="section" style="padding-top:0"><div class="wrap">{feats}</div></section>"""
    return page(f"/products/{p['slug']}/", p["name"], f'{p["name"]} by Habinix. {p["summary"]}', body, "/products/")


# ---------------------------------------------------------------- legal texts

def company_privacy():
    body = page_head("Privacy policy") + f"""
<section class="section"><div class="wrap"><div class="glass panel prose reveal">
<p class="meta">Effective {EFFECTIVE}</p>
<p>This policy explains how {COMPANY["legal"]} ("Habinix", "we", "us") collects and uses personal information through habinix.com and when you contact us. Products with their own policy are listed on their product pages.</p>
<h2>Information we collect</h2>
<ul>
<li><strong>Information you send us</strong>, such as your name, email address, company and the details of your enquiry.</li>
<li><strong>Technical information</strong> such as browser type, device type and pages visited, collected through standard server logs for security and performance.</li>
</ul>
<h2>How we use it</h2>
<ul>
<li>To reply to enquiries and provide the services you request.</li>
<li>To operate, secure and improve this website.</li>
<li>To meet legal, tax and accounting obligations.</li>
</ul>
<p>We do not sell personal information and we do not use it for advertising profiles.</p>
<h2>Sharing</h2>
<p>We share information only with service providers that help us run our business (for example hosting and email), under confidentiality obligations, or where the law requires it.</p>
<h2>Retention</h2>
<p>We keep enquiry records for as long as needed to respond and for our legitimate business records, then delete or anonymise them.</p>
<h2>Your choices and rights</h2>
<p>You can ask to access, correct or delete your personal information by emailing <a href="mailto:{COMPANY["privacy"]}">{COMPANY["privacy"]}</a>. Depending on where you live, you may have additional rights under local law.</p>
<h2>International transfers</h2>
<p>Habinix is based in the United States and works with clients worldwide, so your information may be processed in countries other than your own, with appropriate safeguards.</p>
<h2>Changes</h2>
<p>We will post any changes on this page with a new effective date.</p>
<h2>Contact</h2>
<p>{COMPANY["legal"]}, {", ".join(COMPANY["address"])}. Email <a href="mailto:{COMPANY["privacy"]}">{COMPANY["privacy"]}</a>.</p>
</div></div></section>"""
    return page("/privacy/", "Privacy policy", "How Habinix LLC collects and uses personal information.", body)


def company_terms():
    body = page_head("Terms of use") + f"""
<section class="section"><div class="wrap"><div class="glass panel prose reveal">
<p class="meta">Effective {EFFECTIVE}</p>
<p>These terms govern your use of habinix.com, operated by {COMPANY["legal"]}. Client projects are governed by the separate written agreement for each engagement.</p>
<h2>Use of this website</h2>
<p>You may use this website for lawful purposes. You may not attempt to disrupt it, gain unauthorised access, or copy its content for commercial use without permission.</p>
<h2>Intellectual property</h2>
<p>The Habinix name, logo, website design and content are owned by {COMPANY["legal"]}. Product names belong to their respective owners.</p>
<h2>No warranty</h2>
<p>Information on this website is provided for general purposes and may change. It is provided "as is" without warranties of any kind.</p>
<h2>Limitation of liability</h2>
<p>To the extent permitted by law, Habinix is not liable for indirect or consequential losses arising from use of this website.</p>
<h2>Governing law</h2>
<p>These terms are governed by the laws of the State of Wyoming, USA, without regard to conflict-of-law rules.</p>
<h2>Contact</h2>
<p>Questions about these terms: <a href="mailto:{COMPANY["legal_email"]}">{COMPANY["legal_email"]}</a>.</p>
</div></div></section>"""
    return page("/terms/", "Terms of use", "Terms of use for the Habinix website.", body)


def product_privacy(p):
    name = e(p["name"])
    crumbs = [("/products/", "Products"), (f"/products/{p['slug']}/", p["name"]), (None, "Privacy policy")]
    if p["legal"]["privacy"] == "pending":
        inner = f"""<div class="note"><p>The {name} privacy policy will be published here before the app is released. Questions in the meantime: <a href="mailto:{COMPANY["privacy"]}">{COMPANY["privacy"]}</a>.</p></div>"""
    else:
        inner = f"""<p class="meta">Effective {EFFECTIVE}</p>
<h2>1. Introduction</h2>
<p>{COMPANY["legal"]} ("we", "our", "us") operates the {name} application. This policy explains what we collect, how we use it and the choices you have.</p>
<h2>2. Information we collect</h2>
<ul>
<li><strong>Account information:</strong> email address, username and sign-in credentials.</li>
<li><strong>Usage data:</strong> app interactions, crash logs and performance metrics.</li>
<li><strong>Content you submit:</strong> questions and notes you send for review.</li>
</ul>
<h2>3. How we use it</h2>
<ul>
<li>To operate and secure the app.</li>
<li>To deliver your questions to the reviewing board and return answers to you.</li>
<li>To fix problems and improve performance.</li>
</ul>
<h2>4. Sharing and security</h2>
<p>We do not sell your personal data. Data is stored on secure infrastructure managed by {COMPANY["legal"]}. We share technical data with trusted service providers only where needed to run the app, under confidentiality obligations.</p>
<h2>5. Your rights</h2>
<p>You can request access to, correction of, or deletion of your data. See <a href="/products/{p['slug']}/data-deletion/">how to delete your data</a>.</p>
<h2>6. Children</h2>
<p>The app is not directed at children under 13, and we do not knowingly collect their personal data.</p>
<h2>7. Changes</h2>
<p>We will post changes here with a new effective date.</p>
<h2>8. Contact</h2>
<p>Email <a href="mailto:{COMPANY["privacy"]}">{COMPANY["privacy"]}</a> or write to {COMPANY["legal"]}, {", ".join(COMPANY["address"])}.</p>"""
    body = page_head(f"{name} privacy policy", None, crumbs) + f'<section class="section"><div class="wrap"><div class="glass panel prose reveal">{inner}</div></div></section>'
    return page(f"/products/{p['slug']}/privacy/", f"{p['name']} privacy policy", f"Privacy policy for the {p['name']} app by Habinix LLC.", body, "/products/")


def product_terms(p):
    name = e(p["name"])
    crumbs = [("/products/", "Products"), (f"/products/{p['slug']}/", p["name"]), (None, "Terms of use")]
    if p["legal"]["terms"] == "pending":
        inner = f'<div class="note"><p>The {name} terms of use will be published here before the app is released.</p></div>'
    else:
        inner = f"""<p class="meta">Effective {EFFECTIVE}</p>
<h2>1. Acceptance</h2>
<p>By downloading, installing or using {name}, you agree to these terms. The app is operated by {COMPANY["legal"]}, registered in {COMPANY["state"]}.</p>
<h2>2. The service</h2>
<p>{name} gives access to answers and content provided by an independent reviewing board. {COMPANY["legal"]} provides the technology platform and is not responsible for the content of answers.</p>
<h2>3. Your conduct</h2>
<p>Use the app lawfully and respectfully. Spam, abuse, harassment or attempts to reverse-engineer the app may lead to suspension of access.</p>
<h2>4. Intellectual property</h2>
<p>The app's software, design and branding belong to {COMPANY["legal"]}. Answers and published content remain the property of their authors or the reviewing board.</p>
<h2>5. Limitation of liability</h2>
<p>The app is provided "as is" and "as available". To the extent permitted by law, {COMPANY["legal"]} is not liable for indirect, incidental or consequential damages arising from its use.</p>
<h2>6. Governing law</h2>
<p>These terms are governed by the laws of the State of Wyoming, USA.</p>
<h2>7. Contact</h2>
<p><a href="mailto:{COMPANY["support"]}">{COMPANY["support"]}</a></p>"""
    body = page_head(f"{name} terms of use", None, crumbs) + f'<section class="section"><div class="wrap"><div class="glass panel prose reveal">{inner}</div></div></section>'
    return page(f"/products/{p['slug']}/terms/", f"{p['name']} terms of use", f"Terms of use for the {p['name']} app by Habinix LLC.", body, "/products/")


def product_support(p):
    name = e(p["name"])
    crumbs = [("/products/", "Products"), (f"/products/{p['slug']}/", p["name"]), (None, "Support")]
    faqs = [
        ("I forgot my password. How do I reset it?", "Tap “Forgot password” on the sign-in screen. We'll email reset instructions to your registered address."),
        ("The app closes when I open it.", "Update to the latest version from the App Store or Google Play. If it still happens, email us your device model and operating system version."),
    ]
    if p["slug"] == "muftiyaan":
        faqs.insert(1, ("How long does an answer take?", "It depends on the question and current volume. Most answers arrive within two to three days."))
    if p["legal"]["privacy"] == "pending":
        faqs = [("When will the app be available?", "Store links will be published on the product page at launch.")]
    qa = "".join(f"<h3>{e(q)}</h3><p>{e(a)}</p>" for q, a in faqs)
    body = page_head(f"{name} support", "Answers to common questions, and how to reach us.", crumbs) + f"""
<section class="section"><div class="wrap split">
  <div class="glass panel prose reveal"><h2>Common questions</h2>{qa}</div>
  <div class="glass panel reveal" style="--i:1">
    <h2 style="font-size:var(--step-2);margin-bottom:16px">Contact support</h2>
    <p>Email <a href="{mailto(COMPANY["support"], p["name"] + " support")}">{COMPANY["support"]}</a> with your account email, device model and a short description of the issue.</p>
  </div>
</div></section>"""
    return page(f"/products/{p['slug']}/support/", f"{p['name']} support", f"Support for the {p['name']} app by Habinix LLC.", body, "/products/")


def product_deletion(p):
    name = e(p["name"])
    crumbs = [("/products/", "Products"), (f"/products/{p['slug']}/", p["name"]), (None, "Delete your data")]
    body = page_head(f"Delete your {name} data", "How to delete your account and personal data.", crumbs) + f"""
<section class="section"><div class="wrap"><div class="glass panel prose reveal">
<h2>In the app</h2>
<ol>
<li>Open {name} and sign in.</li>
<li>Go to Settings, then Account.</li>
<li>Tap “Delete account and data”.</li>
<li>Confirm when asked.</li>
</ol>
<h2>By email</h2>
<p>If you can't sign in, email <a href="{mailto(COMPANY["support"], "Data deletion request - " + p["name"])}">{COMPANY["support"]}</a> from the address linked to your account with the subject “Data deletion request – {name}” and your registered name.</p>
<h2>What happens next</h2>
<p>After we verify the request, we delete your profile, sign-in credentials and settings from our production systems within 72 hours. Limited records may be kept where the law requires, as described in the <a href="/products/{p['slug']}/privacy/">privacy policy</a>.</p>
</div></div></section>"""
    return page(f"/products/{p['slug']}/data-deletion/", f"Delete your {p['name']} data", f"How to delete your {p['name']} account and data.", body, "/products/")


def not_found():
    body = """<section class="section notfound"><div class="wrap">
<h1 style="font-size:var(--step-4)">This page doesn't exist.</h1>
<p style="margin-top:16px">The link may be out of date. Go to the <a href="/">home page</a> or <a href="/contact/">contact us</a>.</p>
</div></section>"""
    return page("/404", "Page not found", "Page not found.", body, noindex=True)


# ---------------------------------------------------------------- write

def write(rel, content):
    path = OUT / rel
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(content, encoding="utf-8")


def main():
    if OUT.exists():
        shutil.rmtree(OUT)
    OUT.mkdir()
    (OUT / "assets").mkdir()
    shutil.copy(SRC / "assets" / "site.css", OUT / "assets" / "site.css")
    shutil.copy(SRC / "assets" / "site.js", OUT / "assets" / "site.js")
    for extra in ("og.png",):
        if (SRC / "assets" / extra).exists():
            shutil.copy(SRC / "assets" / extra, OUT / "assets" / extra)
    write("favicon.svg", MARK.replace('aria-hidden="true"', 'xmlns="http://www.w3.org/2000/svg"'))

    write("index.html", home())
    write("services/index.html", services())
    write("how-we-work/index.html", how_we_work())
    write("about/index.html", about())
    write("contact/index.html", contact())
    write("products/index.html", products_index())
    write("privacy/index.html", company_privacy())
    write("terms/index.html", company_terms())
    write("404.html", not_found())

    urls = ["/", "/services/", "/how-we-work/", "/about/", "/contact/", "/products/", "/privacy/", "/terms/"]
    for p in PRODUCTS:
        s = p["slug"]
        write(f"products/{s}/index.html", product_detail(p)); urls.append(f"/products/{s}/")
        L = p["legal"]
        if L.get("privacy") and L["privacy"] != "company":
            write(f"products/{s}/privacy/index.html", product_privacy(p)); urls.append(f"/products/{s}/privacy/")
        if L.get("terms") and L["terms"] != "company":
            write(f"products/{s}/terms/index.html", product_terms(p)); urls.append(f"/products/{s}/terms/")
        if L.get("support"):
            write(f"products/{s}/support/index.html", product_support(p)); urls.append(f"/products/{s}/support/")
        if L.get("dataDeletion"):
            write(f"products/{s}/data-deletion/index.html", product_deletion(p)); urls.append(f"/products/{s}/data-deletion/")

    write("robots.txt", f"User-agent: *\nAllow: /\nSitemap: {SITE}/sitemap.xml\n")
    sm = "".join(f"<url><loc>{SITE}{u}</loc></url>" for u in urls)
    write("sitemap.xml", f'<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">{sm}</urlset>')
    print(f"Built {len(urls)} pages into {OUT}")


if __name__ == "__main__":
    main()
