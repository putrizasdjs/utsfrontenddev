import './App.css';
import Judul from './judul';
import Judul2 from './judul2';
import Cart from './cart';


function App() {
  // const menu_array = ["menu" , "tentang" , "profil" , "proyek"]
  return (
    <>
      {/* <Navbar menu={menu_array}/>  */}
      {/* <Navbar menu={["Menu","Data Diri","Blog","Project"]}/> */}
      {/* <Navclass menu={["Beranda","Tentang","Blog","Proyek"]}/> */}
      <Cart/>
      
    </>
  );
}

export default App;