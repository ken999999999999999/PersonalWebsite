import Lottie from "lottie-react"
import Loading from "@/assets/Loading.json"
import { Box, Zoom } from "@mui/material"
import { useEffect, useRef, useState } from "react"
import { useRouter } from "next/navigation"

const Index = () => {
  const [checked, setChecked] = useState(true)
  const loadingRef = useRef<any>(null)
  const router = useRouter()

  useEffect(() => {
    loadingRef?.current.setSpeed(1.5)
    setTimeout(() => setChecked(false), 5000)
    setTimeout(() => router.push("/home"), 5500)
  }, [router])

  return (
    <Zoom in={checked} timeout={1000}>
      <Box
        bgcolor="primary.light"
        width="100%"
        height="100%"
        py="50px"
        borderRadius="10px"
      >
        <Box width="50%" height="50%" mx="auto">
          <Lottie lottieRef={loadingRef} animationData={Loading} />
        </Box>
      </Box>
    </Zoom>
  )
}

export default Index
