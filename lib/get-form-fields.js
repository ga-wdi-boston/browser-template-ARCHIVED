'use strict';

const addFormField = function addFormField(target, names, value) {
  let name = names.shift();
  let next = names[0];
  if (next === '') { // name is an array
    target[name] = target[name] || [];
    target[name].push(value);
  } else if (next) { // name is a parent key
    target[name] = target[name] || {};
    addFormField(target[name], names, value);
  } else { // name is the key for value
    target[name] = value;
  }

  return target;
};

const getFormFields = (form) => {
  let target = {};

  let elements = form.elements || [];
  for (let i = 0; i < elements.length; i++) {
    let e = elements[i];
    if (!e.hasAttribute('name')) {
      continue;
    }

    let type = 'TEXT';
    switch (e.nodeName.toUpperCase()) {
      case 'SELECT':
        type = e.hasAttribute('multiple') ? 'MULTIPLE' : type;
        break;
      case 'INPUT':
        type = e.getAttribute('type').toUpperCase();
        break;
    }

    let names = e.getAttribute('name').split('[')
      .map((k) => k.replace(/]$/, ''));

    if (type === 'MULTIPLE') {
      for (let i = 0; i < e.length; i++) {
        if (e[i].selected) {
          addFormField(target, names.slice(), e[i].value);
        }
      }
    } else if ((type !== 'RADIO' && type !== 'CHECKBOX') || e.checked) {
      addFormField(target, names, e.value);
    }
  }

  return target;
};

module.exports = getFormFields;
