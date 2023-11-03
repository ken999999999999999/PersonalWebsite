import {
  IconButton,
  Drawer as MUIDrawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import { useState } from "react"

interface IDrawer {
  onPageClick: (link: string, index: number, title: string) => void
  pages: { link: string; title: string }[]
}

const Drawer = ({ pages, onPageClick }: IDrawer) => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <IconButton
        color="primary"
        size="large"
        onClick={() => setOpen((prev) => !prev)}
      >
        <MenuIcon />
      </IconButton>
      <MUIDrawer
        open={open}
        onClose={() => setOpen(false)}
        style={{ flexGrow: 1 }}
        anchor="right"
      >
        <List style={{ flexGrow: 1 }}>
          {pages.map((page, index) => (
            <ListItem
              key={page.link}
              disablePadding
              onClick={() => {
                onPageClick(page.link, index, page.title)
                setOpen(false)
              }}
            >
              <ListItemButton>
                <ListItemText color="primary" primary={page.title} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </MUIDrawer>
    </>
  )
}

export default Drawer
