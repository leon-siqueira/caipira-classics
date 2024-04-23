export default function style() {
  return ({
    suggestionBox: {
      position: 'absolute',
      top: 56,
      backgroundColor: '#FFF',
      minWidth: '300px',
      color: '#000',
      borderRadius: '2px',
      zIndex: 1,
      boxShadow: '0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12)'
    },
    suggestionList: {
      paddingY: 0,
      '& li:last-child': {
        borderBottom: 'none'
      },
      '& li:hover': {
        backgroundColor: '#EEE',

        transition: 'background-color 0.2s'
      }
    },
    listTitle: {
      width: '100%',
      backgroundColor: '#1976d2cc',
      paddingTop: 0.8,
      '& .MuiTypography-root': {
        color: '#FFF',
        padding: 0.5,
        paddingLeft: 1,
        fontSize: '0.75rem',
      },

    },
    listItem: {
      cursor: 'pointer',
      paddingY: 0,
      borderBottom: '1px solid #BBB',
      '& .MuiListItemText-root': {
        margin: 0,
        paddingX: 0,
        paddingY: 0.25,
      }
    }
  })
}
