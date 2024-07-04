import "./Dashboard.css";
import KanbanBoard from "../../components/kanbanBoard/KanbanBoard";
interface Props {
  expandBtn: string;
  isExpand: boolean;
  setExpand: React.Dispatch<React.SetStateAction<boolean>>;
}
const ConnectionMap = ({ expandBtn, setExpand, isExpand }: Props) => {
  return (
    <div className={`card top-card ${isExpand ? "" : "limit-top-card"}`}>
      <div className="card-title-container">
        <label className="card-title">Connection map</label>
        <img
          src={expandBtn}
          className="pointer"
          onClick={() => setExpand((prev) => !prev)}
        />
      </div>
      <div style={{display: "flex", flexDirection: "row", overflowY: "scroll", width: "100%"}}>
        <KanbanBoard />
      </div>
    </div>
  );
};
export default ConnectionMap;
