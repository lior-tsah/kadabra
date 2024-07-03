import "./Dashboard.css";

interface Props {
  expandBtn: string;
  setExpand: React.Dispatch<React.SetStateAction<boolean>>;
}
const ConnectionMap = ({ expandBtn, setExpand }: Props) => {
  return (
    <div className="card top-card">
      <div className="card-title-container">
        <label className="card-title">Connection map</label>
        <img
          src={expandBtn}
          className="pointer"
          onClick={() => setExpand((prev) => !prev)}
        />
      </div>
    </div>
  );
};
export default ConnectionMap;
