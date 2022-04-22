'use-strict';

const root = (
  createElement({
  tag: 'div',
  id: "root",
  class: "flexBox rowDirection",
  content: [    
    createElement({
      tag: 'div',
      id: "noteList",
      class: "flexBox columnDirection",
    }),    
    createElement({
      tag: 'div',
      id: "noteContent",
      class: "flexBox columnDirection",
    }),
  ]
})
).addTo(document.body);