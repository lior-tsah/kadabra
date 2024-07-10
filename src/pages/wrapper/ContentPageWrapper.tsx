import "./Wrapper.css";

interface WrapperProps {
  title: string;
  children: JSX.Element;
}

const ContentPageWrapper = ({ children, title }: WrapperProps) => {
  return (
    <div className="dashboard">
      <div className="title-container">
        <label className="title">{title}</label>
      </div>
      {children}
    </div>
  );
};

export default ContentPageWrapper;
