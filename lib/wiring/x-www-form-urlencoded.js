'use strict';

const formUrlencoded = (form) => {
  const enc = encodeURIComponent;
  let elements = form.elements || [];
  let result = [];
  for (let i = 0; i < elements.length; i++) {
    let e = elements[i];
    if (!e.hasAttribute('name')) {
      continue;
    }

    let type = e.nodeName.toUpperCase() === 'INPUT' ?
      e.getAttribute('type').toUpperCase() : 'TEXT';
    if ((type !== 'RADIO' && type !== 'CHECKBOX') ||
        e.checked) {
      result.push(`${enc(e.name)}=${enc(e.value)}`);
    }
  }

  return result.join('&');
};

module.exports = formUrlencoded;
