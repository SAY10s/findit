const SvgMenu = (props) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      // fill="#ffffff"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="17"
        y1="10"
        x2="3"
        y2="10"
        stroke={props.color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line
        x1="21"
        y1="14"
        x2="3"
        y2="14"
        stroke={props.color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line
        x1="17"
        y1="18"
        x2="3"
        y2="18"
        stroke={props.color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default SvgMenu;
