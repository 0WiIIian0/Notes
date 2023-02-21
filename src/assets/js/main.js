'use-strict';

const styles = createCSSObject({
  left: {
    item: {
      main: {
        width: '100%',
        cursor: 'pointer',
        margin: '0px auto',
        boxShadow: '0 0 2px black'
      },
      title: {
        color: '#DDDDDD',
        flex: 1,
        padding: '10px',
        fontSize: '18px',
        fontFamily: 'monospace',
        pointerEvents: 'none'
      },
      footer: {
        main: {
          width: 'calc(100% - 10px)',
          height: '20px',
          color: '#DDDDDD',
          fontSize: '14px',
          padding: '5px',
          pointerEvents: 'none'
        }
      }
    },
    footer: {
      main: {
        flex: 1,
        zIndex: 1,
        maxHeight: '70px',
        boxShadow: '0 0 10px black'
      }
    }
  }
});

styles.left.item.main.selectors({
  hover: {
    backgroundColor: '#152d37'
  }
});

function NoteItem(props) {

  return (
    <div
      class="flexBox columnDirection"
      ripple="#0a161b"
      style={styles.left.item.main}>
      <div style={styles.left.item.title}>{props.title}</div>
      <div
        class="fleBox rowDirection"
        style={styles.left.item.footer.main}>
        <pre class="flexBoxAlign rowDirection">
          <div>Created: </div>
          <div>20/02/2023</div>
        </pre>
      </div>
    </div>
  );

}

const root = (
  <div id="root" class="flexBox rowDirection">
    <input id="mobileMenu" type="checkbox" />
    <div id="noteList" class="flexBox columnDirection">
      
      <div
        style={{flex: 1,
          maxHeight: 'calc(100% - 70px)',
          overflow: 'auto',
          zIndex: 0,
          paddingBottom: '10px'
        }}
        class="flexBox columnDirection">
        <NoteItem title="Long note title to test 123 continuous title" />
        <NoteItem title="Short title" />
        <NoteItem title="Long note title to test 123 continuous title" />
        <NoteItem title="Short title" />
        <NoteItem title="Long note title to test 123 continuous title" />
        <NoteItem title="Short title" />
        <NoteItem title="Long note title to test 123 continuous title" />
        <NoteItem title="Short title" />
        <NoteItem title="Long note title to test 123 continuous title" />
        <NoteItem title="Short title" />
        <NoteItem title="Long note title to test 123 continuous title" />
        <NoteItem title="Short title" />
        <NoteItem title="Long note title to test 123 continuous title" />
        <NoteItem title="Short title" />
        <NoteItem title="Long note title to test 123 continuous title" />
        <NoteItem title="Short title" />
        <NoteItem title="Long note title to test 123 continuous title" />
        <NoteItem title="Short title" />
        <NoteItem title="Long note title to test 123 continuous title" />
        <NoteItem title="Short title" />
        <NoteItem title="Long note title to test 123 continuous title" />
        <NoteItem title="Short title" />
        <NoteItem title="Long note title to test 123 continuous title" />
        <NoteItem title="Short title" />
        <NoteItem title="Long note title to test 123 continuous title" />
        <NoteItem title="Short title" />
        <NoteItem title="Long note title to test 123 continuous title" />
        <NoteItem title="Short title" />
      </div>

      <div style={styles.left.footer.main}>
        <div
          class="flexBoxAlign"
          id="addNote">
          <img
            class="hoverGrow cursorPointer"
            width="40px"
            src="./assets/icon/plus-circle-outline.svg" />
        </div>
      </div>
    
    </div>
    <div id="noteContent" class="flexBox columnDirection">
    </div>
  </div>
).addTo(document.body);

