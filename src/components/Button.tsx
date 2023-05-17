interface Props {
  children: string;
  color?: "primary";
  onClick: () => void;
}

const Button = ({ children, color = "primary", onClick }: Props) => {
  return (
    <button onClick={onClick} type="button" className="btn btn-primary">
      Primary
    </button>
  );
};

export default Button;
