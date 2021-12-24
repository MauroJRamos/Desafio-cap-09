import './styles.css';

type props = {
  text: string;
};

const ButtonIcon = ({ text }: props) => {
  return (
    <div className="btn-container">
      <button className="btn btn-primary">
        <h6>{text}</h6>
      </button>
    </div>
  );
};

export default ButtonIcon;
