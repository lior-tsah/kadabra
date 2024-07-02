import "./styles.css";
import NoData from "../assets/components-icons/no-data.svg";

const NoDataAvaliable: React.FC = () => {
  return (
    <div className="no-data-container">
      <div className="no-data-top-container">
        <label className="no-data-title">No data available yet</label>
        <label className="no-data-description">
          Once you start using the system, you will begin to see data here.
        </label>
      </div>
      <img src={NoData} />
    </div>
  );
};
export default NoDataAvaliable;
