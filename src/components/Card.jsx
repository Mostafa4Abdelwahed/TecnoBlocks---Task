const Card = ({ name, count, icon, color }) => {
  return (
    <div className="bg-dark-100 flex items-center gap-3.5 rounded-lg border-[1px] border-white/10 px-5 py-5">
      <div
        className={`icon ${
          color === "green"
            ? "text-green-500 bg-green-500/25"
            : color === "yellow"
            ? "text-yellow-500 bg-yellow-500/25"
            : color === "blue"
            ? "text-blue-500 bg-blue-500/25"
            : color === "primary" && "text-primary bg-primary/25"
        } text-xl p-3 rounded-full`}
      >
        {icon}
      </div>
      <div className="text">
        <h1 className="text-white">{name}</h1>
        <span className="text-gray-400 font-medium text-sm">{count}</span>
      </div>
      <svg
        className="text-gray-400 ml-auto text-sm"
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 16 16"
      >
        <g
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
        >
          <circle cx={8} cy={2.5} r={0.75}></circle>
          <circle cx={8} cy={8} r={0.75}></circle>
          <circle cx={8} cy={13.5} r={0.75}></circle>
        </g>
      </svg>
    </div>
  );
};

export default Card;
