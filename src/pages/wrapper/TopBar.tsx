import Notifications from "../../assets/top-bar-icons/notifications.svg";
import AccountCircle from "../../assets/top-bar-icons/account-circle.svg";
import { useData } from "../../context/DataContext";
import { mockData } from "../../mockData/data";
import SearchInput from "../../components/SearchInput";

const Topbar = () => {
  const { setData } = useData();

  return (
    <div className="navbar">
      <SearchInput />
      <div className="div">
        <button className="button-instance" onClick={() => setData(mockData)}>
          Discover
        </button>
        <img className="img" alt="Notifications" src={Notifications} />
        <img className="img" alt="Account circle" src={AccountCircle} />
      </div>
    </div>
  );
};
export default Topbar;
