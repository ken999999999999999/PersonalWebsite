import { AppBar, Button, Toolbar, Typography } from "@mui/material"

interface IHeader {
  onPageClick: (link: string, index: number) => void
  pages: { link: string; title: string }[]
}

const Header = ({ onPageClick, pages }: IHeader): JSX.Element => {
  return (
    <AppBar color="secondary">
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
