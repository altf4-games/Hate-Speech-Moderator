import Header from '@/components/Header/Header';
import '../app/globals.css';
import Hero from '@/components/Hero/Hero';
import OurSpecialities from '@/components/Special/OurSpecialities';
import MenuSection from '@/components/Menu/MenuSection';
import HotDeals from '@/components/HotDeals/HotDeales';
import DeliciousFood from '@/components/DeliciousFood/DeliciousFood';
import StatsSection from '@/components/Stats/StatsSection';
import OurTeamSection from '@/components/OurTeam/OurTeamSection';
import OrderForm from '@/components/Order/OrderForm';
import Testimonials from '@/components/HappyCustomers/Testimonials';
import Footer from '@/components/Footer/Footer';



export default function Home() {
  return (
    <>
    
    <div>
      <Header/>
      <Hero/>
      
      <MenuSection/>
      <HotDeals/>
      <DeliciousFood/>
      <StatsSection/>
      <OurTeamSection/>
      <OrderForm/>
      <Testimonials/>
      <Footer/>
    </div>
    
    </>
  );
}
