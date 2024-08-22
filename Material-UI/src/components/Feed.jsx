import { Box } from "@mui/material"
import Posts from "./Posts"


function Feed() {
 
  return (
    <Box flex={4} padding={2} >
       <Posts/>
    </Box>
  )
}

export default Feed