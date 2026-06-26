const siteHeader = document.getElementById('siteHeader');
const menuToggle = document.getElementById('menuToggle');
const mobileNav = document.getElementById('mobileNav');

function setHeaderState() {
    if (!siteHeader) return;
    siteHeader.classList.toggle('scrolled', window.scrollY > 16);
}

setHeaderState();
window.addEventListener('scroll', setHeaderState, { passive: true });

if (menuToggle && mobileNav) {
    menuToggle.addEventListener('click', () => {
        const isOpen = mobileNav.classList.toggle('active');
        menuToggle.classList.toggle('active', isOpen);
        menuToggle.setAttribute('aria-expanded', String(isOpen));
        siteHeader.classList.toggle('menu-active', isOpen);
        document.body.classList.toggle('menu-open', isOpen);
    });

    mobileNav.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
            mobileNav.classList.remove('active');
            menuToggle.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', 'false');
            siteHeader.classList.remove('menu-active');
            document.body.classList.remove('menu-open');
        });
    });
}

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (event) => {
        const targetId = anchor.getAttribute('href');
        if (!targetId || targetId === '#') return;

        const target = document.querySelector(targetId);
        if (!target || !siteHeader) return;

        event.preventDefault();
        const top = target.getBoundingClientRect().top + window.scrollY - siteHeader.offsetHeight + 1;
        window.scrollTo({ top, behavior: 'smooth' });
    });
});

document.querySelectorAll('.faq-question').forEach((button) => {
    button.addEventListener('click', () => {
        const item = button.closest('.faq-item');
        if (!item) return;

        const shouldOpen = !item.classList.contains('active');
        document.querySelectorAll('.faq-item').forEach((faqItem) => {
            faqItem.classList.remove('active');
            const faqButton = faqItem.querySelector('.faq-question');
            if (faqButton) faqButton.setAttribute('aria-expanded', 'false');
        });

        if (shouldOpen) {
            item.classList.add('active');
            button.setAttribute('aria-expanded', 'true');
        }
    });
});

const animatedItems = document.querySelectorAll('.animate-on-scroll');

if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        });
    }, { rootMargin: '0px 0px -80px 0px', threshold: 0.08 });

    animatedItems.forEach((item) => observer.observe(item));
} else {
    animatedItems.forEach((item) => item.classList.add('visible'));
}

function trackWhatsAppLead(label) {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        event: 'lead_whatsapp',
        lead_source: 'site',
        lead_label: label || 'whatsapp'
    });

    if (typeof window.fbq === 'function') {
        window.fbq('track', 'Lead', {
            content_name: label || 'whatsapp',
            content_category: 'whatsapp'
        });
    }
}

document.querySelectorAll('.js-whatsapp').forEach((link) => {
    link.addEventListener('click', () => {
        trackWhatsAppLead(link.dataset.leadWhatsapp);
    });
});
