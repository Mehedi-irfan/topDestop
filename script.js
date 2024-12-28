const MobileNav = document.getElementById("mobile-nav");
function handleClick() {
  MobileNav.classList.toggle("hidden");
}

const initialTranslateLTR = -48 * 4;
const initialTranslateRTL = 36 * 4;

function setUpIntersectionObserver(element, isLTR, speed) {
  const intersectionCallBack = (entries) => {
    const isIntersecting = entries[0].isIntersecting;
    if (isIntersecting) {
      document.addEventListener("scroll", scrollHandler);
    } else {
      document.removeEventListener("scroll", scrollHandler);
    }
  };
  const intersectionObserver = new IntersectionObserver(intersectionCallBack);
  intersectionObserver.observe(element);

  function scrollHandler() {
    const translateX =
      (window.innerHeight - element.getBoundingClientRect().top) * speed;
    let totalTranslate = 0;
    if (isLTR) {
      totalTranslate = translateX + initialTranslateLTR;
    } else {
      totalTranslate = -translateX + initialTranslateRTL;
    }
    element.style.transform = `translateX(${totalTranslate}px)`;
  }
}

const line1 = document.getElementById("line-1");
const line2 = document.getElementById("line-2");
const line3 = document.getElementById("line-3");

setUpIntersectionObserver(line1, true, 0.2);
setUpIntersectionObserver(line2, false, 0.2);
setUpIntersectionObserver(line3, true, 0.2);
