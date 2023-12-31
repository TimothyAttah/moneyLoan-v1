import { Link } from 'react-router-dom';

export const NavLink = ({ children, to, offset = -50 }) => {
  return (
    <Link to={to} spy={true} smooth={true} offset={offset} duration={1000}>
      {children}
    </Link>
  );
};
