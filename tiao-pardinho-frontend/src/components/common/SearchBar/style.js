export default function style() {
  return ({
    searchBar: {
      position: 'relative',
      minWidth: "300px",
      '& .MuiInputBase-root': {
        color: "white",
        marginBottom: "0.5em",
      },
      '& .MuiInputLabel-root': {
        color: "white",
      },
      '& .MuiInput-root::before': {
        borderBottomColor: "#FFF",
      },
      '& .MuiInput-root:hover:not(.Mui-disabled, .Mui-error)::before': {
        borderBottomColor: "#FFF",
      },
    },
    searchIcon: {
      color: "white",
    },

  })
}
