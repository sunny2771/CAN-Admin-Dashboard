import './Menu.scss';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import MenuIcon from '@mui/icons-material/Menu';
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { Link } from 'react-router-dom';

const Menu = () => {

  return (
    <div className='menu'>
        <div className="top">
            <span className="sidebar_menu">
                <MenuIcon />
            </span> 
        </div>
        <div className="center">
            <Link to='/' className='menuOptions'>
                <LeaderboardIcon /> Dashboard
            </Link>
            <Link to='/opportunity' className='menuOptions'>
                <ContentCopyOutlinedIcon /> Opportunities
            </Link>
            <Link to='/assignedtome' className='menuOptions'>
                <PermIdentityOutlinedIcon /> Assigned to Me
            </Link>
        </div>
        <div className="bottom">
        <LogoutOutlinedIcon /> Logout
        </div>
    </div>
  )
}

export default Menu;