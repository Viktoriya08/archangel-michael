import { gsap, ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

// headerScroll('.header');
// parallaxEffect();

function cartNavigate() {
  const cartMobileNav = document.querySelector('.product-screen__cart--mobile');
  if (cartMobileNav) {
    gsap.to(cartMobileNav, {
      scrollTrigger: {
        trigger: 'footer',
        start: 'top bottom',
        onEnter: () => cartMobileNav.classList.add('hide'),
        onEnterBack: () => cartMobileNav.classList.add('hide'),
        onLeave: () => cartMobileNav.classList.remove('hide'),
        onLeaveBack: () => cartMobileNav.classList.remove('hide'),
      },
    });
  }
}

export function headerScroll(element) {
  const showAnim = gsap.from(element, {
    yPercent: -100,
    paused: true,
    duration: 0.2,
  }).progress(1);

  ScrollTrigger.create({
    start: 'top top',
    end: 99999,
    toggleClass: { className: 'header-scroll', targets: element },
    onUpdate: (self) => {
      // eslint-disable-next-line no-unused-expressions
      self.direction === -1 ? showAnim.play() : showAnim.reverse();
    },
  });
}

export function parallaxEffect(element) {
  const triggerSections = gsap.utils.toArray(element);
  if (!triggerSections) return;

  triggerSections.forEach((section) => {
    const id = section.getAttribute('data-paralax');
    const paralaxSection = document.querySelector(`[data-paralax-down='${id}']`);

    if (!id && !paralaxSection) return;

    gsap.set(paralaxSection, { yPercent: -60 });

    const uncover = gsap.timeline({ paused: true });

    ScrollTrigger.create({
      trigger: section,
      start: 'bottom-=100px bottom',
      end: 'center+=50% center',
      animation: uncover.to(paralaxSection, { yPercent: 0, ease: 'none' }),
      scrub: true,
      // markers: true,
    });
  });
}

export function parallaxFooter(element) {
  const paralaxSection = document.querySelector('.footer');
  const paralaxTrigger = document.querySelector('.js-paralax');
  // const paralaxSectionHeight = paralaxSection.scrollHeight;

  if (!paralaxTrigger || !paralaxSection) return;

  gsap.set(paralaxSection, { yPercent: -110 });

  const uncover = gsap.timeline({ paused: true });

  ScrollTrigger.create({
    trigger: '.js-paralax',
    start: 'bottom-=200px bottom',
    end: '+=650',
    animation: uncover.to(paralaxSection, { yPercent: 0, ease: 'none' }),
    scrub: true,
    // markers: true,
  });
}

export function parallaxSectionFix(element) {
  const triggerSections = gsap.utils.toArray('.parallax-section');

  if (!triggerSections) return;

  triggerSections.forEach((section) => {
    const st = ScrollTrigger.create({
      trigger: section,
      pin: section,
      pinSpacing: false,
      start: 'top top',
      end: 'bottom',
      markers: true,
    });
  });
}

export function mainLoader(element) {
  // eslint-disable-next-line no-undef
  const Loader = document.querySelector('.main-loader');

  let oneCall = false;

  if (!Loader) return;

  // eslint-disable-next-line eqeqeq
  if (oneCall == false) {
    const html = document.querySelector('html');
    const tl = gsap.timeline({ onComplete: () => html.classList.remove('popup-opened') });
    // const tl = gsap.timeline();
    tl.startTime(1.3);

    tl
      .to('html', 0, { className: 'popup-opened' })
      .to('.main-loader__count', { duration: 0, opacity: 1 })
      .to('.main-loader__box', { duration: 0, opacity: 1 })
      .from('.wings-center', {
        duration: 1, scale: 0, transformOrigin: '50% 50% 50%', ease: 'elastic',
      })
      .from('.sword', { y: -400, duration: 0.3 })
      .add('wings-start')
      .from('.wings-el-right', { scale: 0, transformOrigin: '20% 100%' }, 'wings-start')
      .from('.wings-el-left', { scale: 0, transformOrigin: '80% 100%' }, 'wings-start')
      // .to('.main-loader__box', { duration: 0.2, xPercent: -80 })
      // .to('.main-loader__wr', { xPercent: 70, width: '170%', duration: 0.2 })
      .to('.main-loader__bg', { bottom: 0, duration: 1, delay: 0.5 })
      .to('.main-loader', { height: 0, duration: 1 });

    // eslint-disable-next-line no-const-assign
    oneCall = true;
  }
}

// window.addEventListener('load', () => {
//   cartNavigate();
// });
