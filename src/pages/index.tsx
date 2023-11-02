import Lottie from "lottie-react"
import Loading from "@/assets/Loading.json"
import { Box, Zoom } from "@mui/material"
import { useEffect, useRef, useState } from "react"
import { useRouter } from "next/navigation"
import Head from "@/components/Head"

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
    <>
      <Head title="Welcome" />
      <Zoom in={checked} timeout={1000}>
        <Box
          bgcolor="primary.light"
          width="100vw"
          height="100vh"
          borderRadius="10px"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Box width="50%" height="50%" maxHeight="500px" maxWidth="500px">
            <Lottie lottieRef={loadingRef} animationData={Loading} />
          </Box>
        </Box>
      </Zoom>
    </>
  )
}

export default Index
