import Search from "../../components/Search.tsx";
import Notifications from "../../assets/top-bar-icons/notifications.svg"; 
import AccountCircle from "../../assets/top-bar-icons/account-circle.svg"; 

const Topbar = () => {
  return (
    <div className="navbar">
      <Search />
      <div className="div">
        <button className="button-instance">Execute</button>
        <img className="img" alt="Notifications" src={Notifications} />
        <img className="img" alt="Account circle" src={AccountCircle} />
      </div>
    </div>
  );
};
export default Topbar;
