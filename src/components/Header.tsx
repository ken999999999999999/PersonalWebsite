import {
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material"
import Link from "next/link"
import useMediaQuery from "@mui/material/useMediaQuery"
import Drawer from "./Drawer"

interface IHeader {
  onPageClick: (link: string, index: number, title: string) => void
  pages: { link: string; title: string }[]
}

const Header = ({ onPageClick, pages }: IHeader): JSX.Element => {
  const theme = useTheme()
  const greaterThenMd = useMediaQuery(theme.breakpoints.up("md"))

  return (
    <header>
      <Toolbar style={{ justifyContent: "space-between", zIndex: 100 }}>
        <Link href="/">
          <Typography
            variant="h4"
            color="primary"
            fontWeight="bold"
            fontFamily="cursive"
          >
            Ken Lai
          </Typography>
        </Link>
        {greaterThenMd ? (
          <Box>
            {pages.map((page, index) => (
              <Button
                key={page.link}
                onClick={() => onPageClick(page.link, index, page.title)}
                style={{ marginLeft: "10px" }}
              >
                <Typography component="div">{page.title}</Typography>
              </Button>
            ))}
          </Box>
        ) : (
          <Drawer pages={pages} onPageClick={onPageClick} />
        )}
      </Toolbar>
    </header>
  )
}

export default Header
