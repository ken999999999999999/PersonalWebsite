import { AppBar, Button, Toolbar, Typography } from "@mui/material"

const pages = [
  { link: "#introduction", title: "Who am I?" },
  { link: "#skills", title: "Skills" },
]

interface IHeader {
  onPageClick: (link: string, index: number) => void
}

const Header = ({ onPageClick }: IHeader): JSX.Element => {
  return (
    <AppBar>
      <Toolbar>
        {pages.map((page, index) => (
          <Button
            data-menuanchor={page.link}
            color="inherit"
            key={page.link}
            onClick={() => onPageClick(page.link, index)}
          >
            <Typography component="div">{page.title}</Typography>
          </Button>
        ))}
      </Toolbar>
    </AppBar>
  )
}

export default Header
