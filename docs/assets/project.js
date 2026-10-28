// Local presentation only: no device connections, credentials, analytics or APIs.
(() => {
  document.querySelectorAll('.mobile-links a').forEach(link => link.addEventListener('click', () => {
    link.closest('details').open = false;
  }));
  document.addEventListener('click', event => {
    document.querySelectorAll('.mobile-menu[open]').forEach(menu => {
      if (!menu.contains(event.target)) menu.open = false;
    });
  });
  const tabs = [...document.querySelectorAll('[role="tab"]')];
  const activate = tab => {
    tabs.forEach(item => {
      const selected = item === tab;
      item.setAttribute('aria-selected', selected);
      item.tabIndex = selected ? 0 : -1;
      document.getElementById(item.getAttribute('aria-controls')).hidden = !selected;
    });
  };
  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => activate(tab));
    tab.addEventListener('keydown', event => {
      const next = event.key === 'ArrowRight' ? (index+1)%tabs.length
        : event.key === 'ArrowLeft' ? (index+tabs.length-1)%tabs.length
          : event.key === 'Home' ? 0 : event.key === 'End' ? tabs.length-1 : null;
      if (next === null) return;
      event.preventDefault(); activate(tabs[next]); tabs[next].focus();
    });
  });
  const dialog = document.querySelector('.image-dialog');
  if (!dialog) return;
  let opener;
  document.querySelectorAll('[data-enlarge]').forEach(button => button.addEventListener('click', () => {
    opener = button;
    const img = button.querySelector('img');
    dialog.querySelector('img').src = img.src;
    dialog.querySelector('img').alt = img.alt;
    dialog.querySelector('.dialog-caption').textContent = img.alt;
    dialog.showModal();
  }));
  dialog.querySelector('button').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    if (event.target === dialog) {
      const r = dialog.getBoundingClientRect();
      if (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) dialog.close();
    }
  });
  dialog.addEventListener('close', () => opener?.focus({preventScroll:true}));
})();
