import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import InsightsIcon from '@mui/icons-material/Insights';
import GroupIcon from '@mui/icons-material/Group';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import Diversity2Icon from '@mui/icons-material/Diversity2';
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext} from "react";

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);

  return (
    <div className="sidebar" id="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          {/* <span className="logo">Loan App</span> */}
          <img src={"../images/insta cash Logo.png"} alt="" className="logo" />
        </Link>
      </div>
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/dashboard" style={{ textDecoration: "none" }}>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          </Link>
          <p className="title">LISTS</p>
          <Link to="/clients" style={{ textDecoration: "none" }}>
            <li>
              <GroupIcon  className="icon" />
              <span>Clients</span>
            </li>
          </Link>
          <Link to="projects" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>Projects</span>
            </li>
          </Link>
          <Link to="/tasks" style={{ textDecoration: "none" }}>
          <li>
            <InsightsIcon className="icon" />
            <span>Tasks</span>
          </li>
          </Link>
          <Link to="/team" style={{ textDecoration: "none"}}>
          <li>
            <GroupAddIcon className="icon" />
            <span>Team</span>
          </li>
          </Link>
          <Link to="/employee" style={{ textDecoration: "none" }}>
          <li>
            <Diversity2Icon className="icon" />
            <span>Employees</span>
          </li>
          </Link>
          <Link to="/permisssion" style={{ textDecoration: "none" }}>
          <li>
            <PermIdentityIcon className="icon" />
            <span>Permissions</span>
          </li>
          </Link>
          <Link to="/subscriptions" style={{ textDecoration: "none" }}>
          <li>
            <SubscriptionsIcon className="icon" />
            <span>Subscriptions</span>
          </li>
          </Link>
          <p className="title">USEFUL</p>
          <li>
            <InsertChartIcon className="icon" />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsNoneIcon className="icon"/>
            <span>Notifications</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <SettingsSystemDaydreamOutlinedIcon className="icon" />
            <span>System Health</span>
          </li>
          <li>
            <PsychologyOutlinedIcon className="icon" />
            <span>Logs</span>
          </li>
          <li>
            <SettingsApplicationsIcon className="icon" />
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <ExitToAppIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
};
export default Sidebar;
