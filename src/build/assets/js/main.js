'use-strict';

const styles = {"left":{"item":{"main":"cHServj","title":"CpjrmWd","footer":{"main":"KgJYvL_"}},"footer":{"main":"mYztLUE"}}};
createElement({tag:"style",content:'.cHServj {width:100%;cursor:pointer;margin:0px auto;box-shadow:0 0 2px black;} .CpjrmWd {color:#DDDDDD;flex:1;padding:10px;font-size:18px;font-family:monospace;pointer-events:none;} .KgJYvL_ {width:calc(100% - 10px);height:20px;color:#DDDDDD;font-size:14px;padding:5px;pointer-events:none;} .mYztLUE {flex:1;z-index:1;max-height:70px;box-shadow:0 0 10px black;} '}).addTo(document.head);

styles.left.item.main.selectors({
  hover: {
    backgroundColor: '#152d37'
  }
});

function NoteItem(props) {

  return (
      createElement({
    tag: 'div',
    class: "flexBox columnDirection",
    ripple: "#0a161b",
    style: styles.left.item.main,
    content: [      
      createElement({
        tag: 'div',
        style: styles.left.item.title,
        content: [
          props.title,
        ]
      }),      
      createElement({
        tag: 'div',
        class: "fleBox rowDirection",
        style: styles.left.item.footer.main,
        content: [        
        createElement({
          tag: 'pre',
          class: "flexBoxAlign rowDirection",
          content: [          
          createElement({
            tag: 'div',
            content: [
              'Created: ',
            ]
          }),          
          createElement({
            tag: 'div',
            content: [
              '20/02/2023',
            ]
          }),
          ]
        }),
        ]
      }),
    ]
  })
  );

}

const root = (
  createElement({
  tag: 'div',
  id: "root",
  class: "flexBox rowDirection",
  content: [  
  createElement({
    tag: 'input',
    id: "mobileMenu",
    attributes: {    
      type: "checkbox",
    },
  }),    
    createElement({
      tag: 'div',
      id: "noteList",
      class: "flexBox columnDirection",
      content: [      
      createElement({
        tag: 'div',
        style: {flex: 1,
          maxHeight: 'calc(100% - 70px)',
          overflow: 'auto',
          zIndex: 0,
          paddingBottom: '10px'
        },
        class: "flexBox columnDirection",
        content: [
          NoteItem({
            title: "Long note title to test 123 continuous title",
            isEmpty: true
          }),
          NoteItem({
            title: "Short title",
            isEmpty: true
          }),
          NoteItem({
            title: "Long note title to test 123 continuous title",
            isEmpty: true
          }),
          NoteItem({
            title: "Short title",
            isEmpty: true
          }),
          NoteItem({
            title: "Long note title to test 123 continuous title",
            isEmpty: true
          }),
          NoteItem({
            title: "Short title",
            isEmpty: true
          }),
          NoteItem({
            title: "Long note title to test 123 continuous title",
            isEmpty: true
          }),
          NoteItem({
            title: "Short title",
            isEmpty: true
          }),
          NoteItem({
            title: "Long note title to test 123 continuous title",
            isEmpty: true
          }),
          NoteItem({
            title: "Short title",
            isEmpty: true
          }),
          NoteItem({
            title: "Long note title to test 123 continuous title",
            isEmpty: true
          }),
          NoteItem({
            title: "Short title",
            isEmpty: true
          }),
          NoteItem({
            title: "Long note title to test 123 continuous title",
            isEmpty: true
          }),
          NoteItem({
            title: "Short title",
            isEmpty: true
          }),
          NoteItem({
            title: "Long note title to test 123 continuous title",
            isEmpty: true
          }),
          NoteItem({
            title: "Short title",
            isEmpty: true
          }),
          NoteItem({
            title: "Long note title to test 123 continuous title",
            isEmpty: true
          }),
          NoteItem({
            title: "Short title",
            isEmpty: true
          }),
          NoteItem({
            title: "Long note title to test 123 continuous title",
            isEmpty: true
          }),
          NoteItem({
            title: "Short title",
            isEmpty: true
          }),
          NoteItem({
            title: "Long note title to test 123 continuous title",
            isEmpty: true
          }),
          NoteItem({
            title: "Short title",
            isEmpty: true
          }),
          NoteItem({
            title: "Long note title to test 123 continuous title",
            isEmpty: true
          }),
          NoteItem({
            title: "Short title",
            isEmpty: true
          }),
          NoteItem({
            title: "Long note title to test 123 continuous title",
            isEmpty: true
          }),
          NoteItem({
            title: "Short title",
            isEmpty: true
          }),
          NoteItem({
            title: "Long note title to test 123 continuous title",
            isEmpty: true
          }),
          NoteItem({
            title: "Short title",
            isEmpty: true
          }),
        ]
      }),      
      createElement({
        tag: 'div',
        style: styles.left.footer.main,
        content: [        
        createElement({
          tag: 'div',
          class: "flexBoxAlign",
          id: "addNote",
          content: [        
        createElement({
          tag: 'img',
          class: "hoverGrow cursorPointer",
          attributes: {          
            width: "40px",
            src: "./assets/icon/plus-circle-outline.svg",
          },
        }),
          ]
        }),
        ]
      }),
      ]
    }),    
    createElement({
      tag: 'div',
      id: "noteContent",
      class: "flexBox columnDirection",
    }),
  ]
})
).addTo(document.body);