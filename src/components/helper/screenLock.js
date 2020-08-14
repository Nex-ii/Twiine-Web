const unlockScroll = () => {
  const scrollY = document.body.style.top ? document.body.style.top : window.pageYOffset;
  document.body.style.top = '';
  document.body.style.overflowY = ''
  window.scrollTo(0, parseInt(scrollY || '0'));
}

const lockScroll = () => {
  document.body.style.top = `-${window.scrollY}px`;
  document.body.style.overflowY = "hidden"
}

export { lockScroll, unlockScroll }