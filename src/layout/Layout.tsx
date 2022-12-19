import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';

const Layout = () => {
  return (
    <div style={{ display: 'flex', height: '100%', marginRight: '3em'}}>
      <Sidebar>
        <Menu>
          <SubMenu label="Charts">
            <MenuItem> Pie charts </MenuItem>
            <MenuItem> Line charts </MenuItem>
          </SubMenu>
          <MenuItem> Documentation </MenuItem>
          <MenuItem> Calendar </MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );
}

export default Layout;