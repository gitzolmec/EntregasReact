import './NavBar.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
  return (
    
   
      <nav className="navB d-flex">

        
        <img src='src\assets\img\logo-2019.png' className='logo mb-2'></img>
        <div className='mt-5'>
          <button className="btn btn-dark m-2">Juegos Nintendo Switch</button>
          <button className="btn btn-dark m-2">Juegos Playstation 5</button>
          <button className="btn btn-dark m-2">Consolas</button>
        </div>
        
        <div className=''>
        <CartWidget/>
        </div>
      </nav>
   
    
  );
};

export default NavBar;
