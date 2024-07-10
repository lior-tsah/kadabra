import "./Integration.css";
import ContentPageWrapper from "../wrapper/ContentPageWrapper";
import AWS from "../../assets/components-icons/aws.svg";
import Azure from "../../assets/components-icons/azure.svg";
const Integration: React.FC = () => {
  const cardsDetails = [
    {
      icon: AWS,
      title: "Aws Web Services",
      description: "Some words about that",
      iconClass: "yellow-bg",
    },
    {
      icon: Azure,
      title: "Microsoft Azure",
      description: "Some words about that",
      iconClass: "blue-bg",
    },
  ];
  return (
    <ContentPageWrapper title="Integration">
      <div style={{ flex: 8, padding: "10px 0" }}>
        <div className="cards-container">
          {cardsDetails.map((card) => (
            <div className="card">
              <img src={card.icon} className={`icon ${card.iconClass}`} />
              <label className="card-title"> {card.title}</label>
              <label className="card-description"> {card.description}</label>
            </div>
          ))}
        </div>
      </div>
    </ContentPageWrapper>
  );
};
export default Integration;
