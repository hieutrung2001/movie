
import { Button } from "@mui/material"

const MuiButton = (props: any) => {
  const {
    text
  } = props
  return (
    <Button variant="contained">{text}</Button>
  )
}

export default MuiButton