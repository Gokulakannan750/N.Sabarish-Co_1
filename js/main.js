/* ============================================================
   N. SAKTHIVEL & CO. — main.js
   ============================================================ */
(function () {
  "use strict";

  /* ---- Sticky header ---- */
  const header = document.querySelector(".header");
  const onScroll = () => {
    if (header) header.classList.toggle("scrolled", window.scrollY > 40);
    const top = document.querySelector(".to-top");
    if (top) top.classList.toggle("show", window.scrollY > 600);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---- Mobile nav ---- */
  const toggle = document.querySelector(".nav__toggle");
  const links = document.querySelector(".nav__links");
  if (toggle && links) {
    toggle.addEventListener("click", () => {
      toggle.classList.toggle("open");
      links.classList.toggle("open");
    });
    links.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => {
        toggle.classList.remove("open");
        links.classList.remove("open");
      })
    );
  }

  /* ---- Scroll reveal ---- */
  const reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && reveals.length) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
    );
    reveals.forEach((el) => io.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add("visible"));
  }

  /* ---- Animated counters ---- */
  const counters = document.querySelectorAll("[data-count]");
  const animateCount = (el) => {
    const target = parseFloat(el.dataset.count);
    const suffix = el.dataset.suffix || "";
    const dur = 1600;
    const start = performance.now();
    const step = (now) => {
      const p = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      const val = target * eased;
      el.textContent = (target % 1 === 0 ? Math.round(val) : val.toFixed(1)) + suffix;
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };
  if ("IntersectionObserver" in window && counters.length) {
    const cio = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            animateCount(e.target);
            cio.unobserve(e.target);
          }
        });
      },
      { threshold: 0.5 }
    );
    counters.forEach((el) => cio.observe(el));
  }

  /* ---- Project filters ---- */
  const filterBtns = document.querySelectorAll(".filter-btn");
  const projects = document.querySelectorAll(".project-card");
  const applyFilter = (f) => {
    filterBtns.forEach((b) => b.classList.toggle("active", b.dataset.filter === f));
    projects.forEach((card) => {
      const show = f === "all" || card.dataset.category === f;
      card.style.display = show ? "" : "none";
    });
  };
  if (filterBtns.length) {
    filterBtns.forEach((btn) =>
      btn.addEventListener("click", () => applyFilter(btn.dataset.filter))
    );
    /* Apply category from URL, e.g. projects.html?cat=education */
    const requested = new URLSearchParams(window.location.search).get("cat");
    if (requested && document.querySelector('.filter-btn[data-filter="' + requested + '"]')) {
      applyFilter(requested);
    }
  }

  /* ---- Service cards link to filtered projects ---- */
  document.querySelectorAll(".service-card[data-href]").forEach((card) => {
    card.addEventListener("click", (e) => {
      if (e.target.closest("a")) return; // let inner links work normally
      window.location.href = card.dataset.href;
    });
  });

  /* ---- FAQ accordion ---- */
  document.querySelectorAll(".acc-head").forEach((head) => {
    head.addEventListener("click", () => {
      const item = head.parentElement;
      const body = head.nextElementSibling;
      const isOpen = item.classList.contains("open");
      document.querySelectorAll(".acc-item.open").forEach((openItem) => {
        openItem.classList.remove("open");
        openItem.querySelector(".acc-body").style.maxHeight = null;
      });
      if (!isOpen) {
        item.classList.add("open");
        body.style.maxHeight = body.scrollHeight + "px";
      }
    });
  });

  /* ---- Contact form (front-end only) ---- */
  const form = document.querySelector("#contactForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const ok = form.querySelector(".form-success");
      if (ok) {
        ok.classList.add("show");
        ok.scrollIntoView({ behavior: "smooth", block: "center" });
      }
      form.reset();
    });
  }

  /* ---- Footer year ---- */
  const yr = document.querySelector("#year");
  if (yr) yr.textContent = new Date().getFullYear();
})();
