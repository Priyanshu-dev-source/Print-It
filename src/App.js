import Navbar from './components/navbar'
import Description from './components/description'
import Cards from './components/cards'
import Products from './components/products'
import CopyRight from './components/copyRights'
import './App.css';


function App() {
  return (
    <>
      <div className='body-wrapper'>
        <div className='navbar-component'>
          <Navbar></Navbar>
        </div>
        <div className='descp-main-body'>
          <Description></Description>
        </div>
        <div className='cards-body-wrapper'>
          <Cards></Cards>
        </div>
        <div className='product-body-wrapper'>
          <Products></Products>
        </div>
        <div className='copyright-body-wrapper'>
          <CopyRight></CopyRight>
        </div>
      </div>
    </> 
  );
}

export default App;
