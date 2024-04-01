export default function style() {
  return ({
    toolbar: {
      display: "flex",
      justifyContent: "space-between"
    },
    cardContent:{
      flex: 1,
      paddingX: 1,
      "&:last-child": {
        paddingBottom: 1
      }
    },
    albumName: {
      height: '1.5em',
      lineHeight: '1.25em',
      fontWeight: 'bold',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    },
  })
}
