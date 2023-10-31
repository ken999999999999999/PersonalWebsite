const Menu = (): JSX.Element => {
  return (
    <ul id="navbar">
      <li data-menuanchor="firstPage" className="active">
        <a href="#introduction">First section</a>
      </li>
      <li data-menuanchor="secondPage">
        <a href="#2">Second section</a>
      </li>
    </ul>
  )
}

export default Menu
