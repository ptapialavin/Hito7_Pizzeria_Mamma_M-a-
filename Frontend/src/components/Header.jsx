
const HEADER_BG = 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1400&q=80';

const Header = () => {
  const headerStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${HEADER_BG})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '200px'
  };

  return (
    <div className="text-white text-center d-flex flex-column justify-content-center align-items-center" style={headerStyle}>
      <h1>¡Pizzería Mamma Mia!</h1>
      <h6>¡Tenemos las mejores pizzas que podrás encontrar!</h6>
      <hr className="w-75 my-2" />
    </div>
  );
};

export default Header;