// Single-file SEO snippet (CONFIG + META_DATA + LD_DATA + runtime)

(function () {
  "use strict";


  const CONFIG = {
    baseUrlFallback: "https://www.sdadevelopment.com",
    googleSiteVerification: ""
  };

  // === DATA (from your previous meta-tags.js) ===
  const META_DATA = {"meta_tags_list":[{"page_url":"https://www.sdadevelopment.com/","title_tag":"Business Development Taipei & SCM Taiwan | SDA Development","meta_description":"Business Development Taipei, Supply Chain Management Taiwan and Project Management Services. Your extended international business partner in Asia based in Taipei."},{"page_url":"https://www.sdadevelopment.com/about","title_tag":"Project Management Taiwan & Business Partner | SDA","meta_description":"Project Management Taiwan, Contract Negotiations Taiwan and Business Development. Experienced international business partner in Taipei and China for 25+ years."},{"page_url":"https://www.sdadevelopment.com/services-1","title_tag":"Supply Chain Management Taiwan & Project Services | SDA","meta_description":"Supply Chain Management Taiwan, Project Management Services and Manufacturing Management Services. Client Management Taipei and Quality Control Services Taiwan."},{"page_url":"https://www.sdadevelopment.com/copy-of-services","title_tag":"Supply Chain Management Taiwan & Quality Control | SDA","meta_description":"Supply Chain Management Taiwan, Quality Control Services Taiwan and Manufacturing Management Services. Contract Negotiations Taiwan and Project Management Services."},{"page_url":"https://www.sdadevelopment.com/sister-company","title_tag":"International Business Partner Taiwan & SCM | SDA","meta_description":"International Business Partner Taiwan supporting Supply Chain Management Taiwan and Manufacturing Management Services through our specialized sister company network."},{"page_url":"https://www.sdadevelopment.com/gallery","title_tag":"Business Development Taipei Projects & Missions | SDA","meta_description":"Business Development Taipei and Economic Missions Asia showcased through selected project images highlighting Supply Chain Management Taiwan and project achievements."},{"page_url":"https://www.sdadevelopment.com/contact","title_tag":"Client Management Taipei & Business Partner | SDA","meta_description":"Contact SDA for Client Management Taipei, Business Development Taipei and Project Management Taiwan. Your international business partner in Taiwan, China and Canada."}],"keywords":["Business Development Taipei","Supply Chain Management Taiwan","Project Management Taiwan","International Business Partner Taiwan","Manufacturing Management Services","Client Management Taipei","Contract Negotiations Taiwan","Project Management Services","Economic Missions Asia","Quality Control Services Taiwan"]};

  // === DATA (from your previous LD.js) ===
  const LD_DATA = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.sdadevelopment.com/#organization",
  "name": "SDA / TAD",
  "url": "https://www.sdadevelopment.com/",
  "description": "SDA / TAD provides international business development, supply chain management, and project management services, acting as an extended business partner in Asia with operations in Taipei, Taiwan and Canada.",
  "logo": "https://static.wixstatic.com/media/62f26520e99441c6804b83aaf5423953.jpg/v1/fill/w_288,h_192,al_c,q_80,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/62f26520e99441c6804b83aaf5423953.jpg",
  "founder": {
    "@type": "Person",
    "name": "Frederic Robert",
    "description": "High-end professional international counselor in manufacturing and product development with 25 years of experience in international management across entertainment, environmental, aerospace, metallurgical, advanced materials, industrial manufacturing, and chemical industries.",
    "email": "frobert@advancedbdca.com"
  },
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "contactType": "sales",
      "email": "frobert@advancedbdca.com",
      "telephone": "+886-919-491-476",
      "areaServed": [
        "TW",
        "CN",
        "CA"
      ],
      "availableLanguage": [
        "English",
        "Chinese"
      ]
    }
  ],
  "address": [
    {
      "@type": "PostalAddress",
      "streetAddress": "8673 Andre Grasset",
      "addressLocality": "Montreal",
      "addressRegion": "Quebec",
      "postalCode": "H2M 2L3",
      "addressCountry": "CA"
    },
    {
      "@type": "PostalAddress",
      "streetAddress": "4F-1 No. 245, Sec. 1, Fuxing S Rd, Da’an District",
      "addressLocality": "Taipei City",
      "postalCode": "10666",
      "addressCountry": "TW"
    }
  ],
  "sameAs": [],
  "department": [
    {
      "@type": "Organization",
      "name": "SDA Business Development",
      "description": "Business development services for companies expanding into East Asia, including exhibit representation, distribution network management, customer management, and sales development.",
      "parentOrganization": {
        "@id": "https://www.sdadevelopment.com/#organization"
      }
    },
    {
      "@type": "Organization",
      "name": "SDA Supply Chain Management",
      "description": "Supply chain management services in East Asia including supplier research, QA-QC implementation, supplier survey, and ongoing supply chain coordination.",
      "parentOrganization": {
        "@id": "https://www.sdadevelopment.com/#organization"
      }
    },
    {
      "@type": "Organization",
      "name": "SDA Project Management",
      "description": "Project and manufacturing management for integrating new designs with suppliers' manufacturing processes and coordinating production to meet client requirements.",
      "parentOrganization": {
        "@id": "https://www.sdadevelopment.com/#organization"
      }
    }
  ],
  "service": [
    {
      "@type": "Service",
      "name": "Business Development in East Asia",
      "description": "Business development support in Asia including client and supplier research, market analysis, business planning, and sales development.",
      "areaServed": [
        "TW",
        "CN",
        "CA"
      ]
    },
    {
      "@type": "Service",
      "name": "Supply Chain Management",
      "description": "Supply chain management from supplier identification and qualification to quality control integration and ongoing order management.",
      "areaServed": [
        "TW",
        "CN",
        "CA"
      ]
    },
    {
      "@type": "Service",
      "name": "Project Management",
      "description": "Project management for manufacturing and product development, including contract negotiations, fabrication analysis, and coordination of production processes.",
      "areaServed": [
        "TW",
        "CN",
        "CA"
      ]
    }
  ]
};

  /* ===== Helpers ===== */
  function clamp(str, max) {
    if (typeof str !== "string") str = String(str ?? "");
    return str.length <= max ? str : str.slice(0, Math.max(0, max - 1)) + "…";
  }

  function stripTrailingSlash(p) {
    if (!p) return "/";
    return p.length > 1 && p.endsWith("/") ? p.slice(0, -1) : p;
  }

  function normalizePathFromUrl(url) {
    try {
      const u = new URL(url);
      return stripTrailingSlash(u.pathname || "/");
    } catch {
      const m = String(url || "").match(/^https?:\/\/[^/]+(\/[^?#]*)?/i);
      return stripTrailingSlash((m && m[1]) || "/");
    }
  }

  function removeLangPrefix(pathname) {
    const m = String(pathname || "/").match(
      /^\/([a-z]{2}(?:-[A-Z]{2})?)(?=\/|$)(.*)$/
    );
    if (!m) return pathname || "/";
    const rest = stripTrailingSlash(m[2] || "/");
    return rest || "/";
  }

  function currentPagePath() {
    const path = window.location.pathname || "/";
    return stripTrailingSlash(path || "/");
  }

  function currentKeyCandidates() {
    const path = currentPagePath();
    const origin = (window.location.origin || "").replace(/\/$/, "");
    const full = origin + path;

    if (path === "/") {
      return [full, "/"];
    }

    const noLang = removeLangPrefix(path);
    return [full, path, stripTrailingSlash(path), noLang, stripTrailingSlash(noLang)];
  }

  function buildIndex(metaJson) {
    const list = (metaJson && metaJson.meta_tags_list) || [];
    const index = {};
    for (const item of list) {
      const path = normalizePathFromUrl(item.page_url);
      let origin = "";
      try {
        origin = new URL(item.page_url).origin;
      } catch {
        origin = "";
      }
      const full = origin ? origin.replace(/\/$/, "") + path : "";

      const entry = {
        title: item.title_tag || "",
        description: item.meta_description || "",
      };

      index[path] = entry;
      index[stripTrailingSlash(path)] = entry;
      if (full) index[full] = entry;
    }
    return index;
  }

  function _stripQuotes(s) {
    return String(s ?? "")
      .replace(/["'“”‘’„«»]/g, "")
      .replace(/\s+/g, " ")
      .replace(/^[\s\-–—·,;:]+|[\s\-–—·,;:]+$/g, "")
      .trim();
  }

  function normalizeKeywordsList(input, opts) {
    const { maxKeywords = 20 } = opts || {};
    if (input == null) return [];
    let items = Array.isArray(input)
      ? input.slice()
      : typeof input === "string"
      ? input.split(",")
      : [];
    const seen = new Set();
    return items
      .map(_stripQuotes)
      .filter((s) => s && s.length >= 2)
      .filter((s) => {
        const k = s.toLowerCase();
        if (seen.has(k)) return false;
        seen.add(k);
        return true;
      })
      .slice(0, maxKeywords);
  }

  function normalizeKeywords(input, opts) {
    const { maxKeywords = 20, maxLength = 280 } = opts || {};
    const list = normalizeKeywordsList(input, { maxKeywords });
    const content = list.join(", ");
    return content.length > maxLength ? content.slice(0, maxLength) : content;
  }

  function applyAltFallbacks(keywordsPool) {
    if (!Array.isArray(keywordsPool) || keywordsPool.length === 0) return;
    try {
      const images = Array.from(document.querySelectorAll("img"));
      let i = 0;
      images.forEach((img) => {
        const curAlt = (img.getAttribute("alt") || "").trim().toLowerCase();
        const shouldReplace =
          !curAlt ||
          curAlt.endsWith(".jpg") ||
          curAlt.endsWith(".png") ||
          curAlt === "image" ||
          curAlt === "img";
        if (shouldReplace) {
          img.setAttribute("alt", keywordsPool[i % keywordsPool.length]);
          i++;
        }
      });
    } catch {
      /* ignore */
    }
  }

  function optimizeImages() {
    try {
      const images = Array.from(document.querySelectorAll("img"));
      if ("IntersectionObserver" in window) {
        const io = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = entry.target;
              io.unobserve(img);
              // hook for tracking / lazy work if needed
            }
          });
        });
        images.forEach((img, index) => {
          if (index > 0) io.observe(img);
        });
      }
    } catch (err) {
      console.error("Image optimization error:", err);
    }
  }

  function upsertMeta(nameOrProperty, content, useProperty) {
    const selector = useProperty
      ? `meta[property="${nameOrProperty}"]`
      : `meta[name="${nameOrProperty}"]`;
    let el = document.head.querySelector(selector);
    if (!el) {
      el = document.createElement("meta");
      if (useProperty) el.setAttribute("property", nameOrProperty);
      else el.setAttribute("name", nameOrProperty);
      document.head.appendChild(el);
    }
    el.setAttribute("content", content);
  }

  function upsertLink(rel, href) {
    let link = document.head.querySelector(`link[rel="${rel}"]`);
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", rel);
      document.head.appendChild(link);
    }
    link.setAttribute("href", href);
  }

  function injectJsonLd(ldObject) {
    if (!ldObject) return;
    try {
      const existing = Array.from(
        document.head.querySelectorAll('script[type="application/ld+json"]')
      );
      existing.forEach((el) => {
        el.parentNode.removeChild(el);
      });

      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(ldObject);
      document.head.appendChild(script);
    } catch (err) {
      console.error("Error injecting JSON-LD:", err);
    }
  }

  function applyJsonLd() {
    injectJsonLd(LD_DATA);
  }

  function applySeoFromJson() {
    try {
      const metaJson = META_DATA;
      const index = buildIndex(metaJson);

      const path = currentPagePath();
      const isHome = path === "/";

      const fallbackBase =
        (CONFIG && CONFIG.baseUrlFallback) ? CONFIG.baseUrlFallback : "";
      const baseUrl = (window.location.origin || fallbackBase).replace(/\/$/, "");
      const canonicalUrl = baseUrl + path;

      const keys = currentKeyCandidates();
      let entry = null;
      for (const k of keys) {
        if (index[k]) {
          entry = index[k];
          break;
        }
      }

      if (!entry) {
        return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
      }

      const title = clamp(entry.title, 60);
      const desc = clamp(entry.description, 185);

      document.title = title;

      const metaList = [
        { type: "name", key: "description", content: desc },
        { type: "property", key: "og:url", content: canonicalUrl },
        { type: "name", key: "resource-hints", content: "preload" },
        { type: "name", key: "format-detection", content: "telephone=yes" },
        { type: "name", key: "mobile-web-app-capable", content: "yes" },
        { type: "name", key: "apple-mobile-web-app-capable", content: "yes" },
      ];

      // opcjonalnie dodaj google-site-verification, jeśli jest w CONFIG
      if (CONFIG && CONFIG.googleSiteVerification) {
        metaList.push({
          type: "name",
          key: "google-site-verification",
          content: CONFIG.googleSiteVerification
        });
      }

      if (isHome && metaJson && metaJson.keywords) {
        const kwContent = normalizeKeywords(metaJson.keywords, {
          maxKeywords: 25,
          maxLength: 512,
        });
        if (kwContent) {
          metaList.push({ type: "name", key: "keywords", content: kwContent });
        }
      }

      metaList.forEach((m) => {
        upsertMeta(m.key, m.content, m.type === "property");
      });

      upsertLink("canonical", canonicalUrl);

      return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
    } catch (err) {
      console.error("Error meta settings:", err);
      return [];
    }
  }

  function initSnippetSEO() {
    const keywordsPool = applySeoFromJson();
    const path = currentPagePath();
    if (path === "/") {
      applyJsonLd();
    }
    optimizeImages();
    applyAltFallbacks(keywordsPool);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initSnippetSEO);
  } else {
    initSnippetSEO();
  }
})();
