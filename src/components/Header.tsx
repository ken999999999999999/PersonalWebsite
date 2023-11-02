import { Box, Button, Toolbar, Typography } from "@mui/material"

interface IHeader {
  onPageClick: (link: string, index: number) => void
  pages: { link: string; title: string }[]
}

const Header = ({ onPageClick, pages }: IHeader): JSX.Element => {
  return (
    <header>
      <Toolbar style={{ justifyContent: "space-between", zIndex: 100 }}>
        <Typography
          variant="h4"
          color="primary"
          fontWeight="bold"
          fontFamily="cursive"
        >
          Ken Lai
        </Typography>
        <Box>
          {pages.map((page, index) => (
            <Button
              key={page.link}
              onClick={() => onPageClick(page.link, index)}
              style={{ marginLeft: "10px" }}
            >
              <Typography component="div">{page.title}</Typography>
            </Button>
          ))}
        </Box>
      </Toolbar>
    </header>
  )
}

export default Header
