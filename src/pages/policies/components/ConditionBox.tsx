interface Props {
  title: string;
}

export default function ConditionBox({ title }: Props) {
  return (
    <div className="condition-box-container">
      <p className="condition-box-text">{title}</p>
    </div>
  );
}
