const SvgPlus = (props) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      stroke={props.color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="12"
        y1="6"
        x2="12"
        y2="18"
        stroke={props.color}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <line
        x1="6"
        y1="12"
        x2="18"
        y2="12"
        stroke={props.color}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default SvgPlus;
