export default function style() {
  return ({
    appBar: {
      paddingTop: ".4em",
    },
    toolbar: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-between",
    },
    logo: {
      padding: "0.2em",
    },
    tabs: {
      '& .Mui-selected': {
        color: ["#a3c8ed", "!important"],
      },
      '& .MuiTabs-indicator': {
        backgroundColor: "#a3c8ed",
      }
    }
  })
}
