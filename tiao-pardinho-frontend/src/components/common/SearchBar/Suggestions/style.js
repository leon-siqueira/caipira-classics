
export default function style() {
  return ({
    suggestionBox: {
      position: 'absolute',
      top: 56,
      backgroundColor: '#FAFAFA',
      minWidth: '300px',
      color: '#000',
      borderRadius: '2px',
      zIndex: 1,
    },
    suggestionList: {
      paddingY: 0.2,
      '& li:last-child div': {
        borderBottom: 'none'
      }
    },
    listItem: {
      cursor: 'pointer',
      paddingY: 0,
      '& .MuiListItemText-root': {
        borderBottom: '1px solid #CCC',
        margin: 0,
        marginY: 0.25,
      }
    }
  })
}
