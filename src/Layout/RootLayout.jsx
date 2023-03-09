import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
const RootLayout = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>

      <main className='pt-16'>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default RootLayout;
