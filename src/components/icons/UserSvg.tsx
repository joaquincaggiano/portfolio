interface Props {
  width?: number;
  height?: number;
}

const UserSvg = ({ width = 20, height = 20 }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 24 24"
    >
      <g fill="#fff">
        <path d="M12 14.4a4.74 4.74 0 114.73-4.73A4.73 4.73 0 0112 14.4zm0-8a3.24 3.24 0 103.23 3.24A3.24 3.24 0 0012 6.43V6.4z"></path>
        <path d="M19 19.28a.74.74 0 01-.72-.58 5.63 5.63 0 00-5.48-4.3h-1.6a5.63 5.63 0 00-5.47 4.3.752.752 0 01-1.46-.36 7.13 7.13 0 016.93-5.44h1.59a7.11 7.11 0 016.93 5.45.76.76 0 01-.55.91l-.17.02z"></path>
        <path d="M12 22.31A10.31 10.31 0 1122.31 12 10.32 10.32 0 0112 22.31zm0-19.12A8.81 8.81 0 1020.81 12 8.82 8.82 0 0012 3.19z"></path>
      </g>
    </svg>
  );
};

export default UserSvg;
