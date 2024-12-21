import 'antd/dist/reset.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './Layout/main';
import Address from './Layout/address';
import AddressEdit from './Layout/addressEdit';

function App() {
  return (<BrowserRouter>
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/address' element={<Address />} />
      <Route path='/address_edit/:addressId' element={<AddressEdit />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
