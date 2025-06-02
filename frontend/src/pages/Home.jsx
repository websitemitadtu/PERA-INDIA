import AboutUs from '../components/AboutUs';
import Banner from '../components/Banner';
import CETSchedule from '../components/CETSchedule';
import EsteemedMembers from '../components/EsteemedMembers';
import NewsAndBlogs from '../components/NewsAndBlogs';

const Home = () => {
  return (
    <div>
      <Banner />
      <CETSchedule />
      <AboutUs/>
      <EsteemedMembers/>
      <NewsAndBlogs />
      
    </div>
  );
};

export default Home;
