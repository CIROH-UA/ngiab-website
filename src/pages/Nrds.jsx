import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import NRDS from '../components/nrds/home';

const Nrds = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 120,
      easing: 'ease-out',
    });
  }, []);

  return (
    <div>
      <NRDS />
    </div>
  );
};

export default Nrds;