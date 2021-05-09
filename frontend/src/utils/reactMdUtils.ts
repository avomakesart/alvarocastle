import Showdown from 'showdown';

const converter = new Showdown.Converter({
  tables: true,
  simplifiedAutoLink: true,
  strikethrough: true,
  tasklists: true,
});

const mdStyles = {
  editor: {
    border: '1px solid gray',
    minHeight: '6em',
    background: 'white',
  },
};

export { converter, mdStyles };
