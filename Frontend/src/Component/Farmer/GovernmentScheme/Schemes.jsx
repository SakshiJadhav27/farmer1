import {useEffect} from 'react';
import GovernmentScheme from "./GovernScheme"
import { FarmerNavbar } from '../../Navbar/navbar';
import Aos from "aos"; // Import CSS file for styling
import 'aos/dist/aos.css';

const GovernmentSchemesPage = () => {
  useEffect(()=>{
    Aos.init({duration:2000})
  }, [])
  const schemes = [
    {
      title:"PM-Kisan Samman Nidhi",
      publishDate: '28-12-2023',
      link: 'https://pmkisan.gov.in/',
    },
    {
      title: 'Agriculture Infrastructure Fund',
      publishDate:'13-02-2014',
      link: 'https://agriinfra.dac.gov.in/',
    },
    {
        title: 'ATMA',
        publishDate:'03-10-2018',
        link: 'https://extensionreforms.dacnet.nic.in/DashBoard_Statusatma.aspx',
      },
      {
        title: 'AGMARKNET',
        publishDate:'14-03-2014',
        link: 'https://agmarknet.gov.in/PriceAndArrivals/arrivals1.aspx',
      },
      {
        title: 'Horticulture',
        publishDate:'05-04-2014',
        link: 'https://midh.gov.in/nhmapplication/feedback/midhKPI.aspx',
      },
      {
        title: 'Online Pesticide Registration',
        publishDate:'23-09-2009',
        link: '//agriwelfare.gov.in/Documents/Pesticides_Registration.pdf',
      },
      {
        title: 'Plant Quarantine Clearance',
        publishDate:'05-01-2011',
        link: 'https://pqms.cgg.gov.in/pqms-angular/home',
      },
      {
        title: 'DBT in Agriculture',
        publishDate:'12-05-2014',
        link: 'https://dbtdacfw.gov.in/',
      },
      {
        title: 'Pradhanmantri Krishi Sinchayee Yojana',
        publishDate:'06-05-2016',
        link: 'https://pmksy.gov.in/mis/frmDashboard.aspx',
      },
      {
        title: 'Kisan Call Center',
        publishDate:'01-05-2015',
        link: 'https://mkisan.gov.in/Home/KCCDashboard',
      },
      {
        title: 'mKisan',
        publishDate:'06-05-2015',
        link: 'https://mkisan.gov.in/',
      },
      {
        title: 'Jaivik Kheti',
        publishDate:'18-05-2015',
        link: 'https://pgsindia-ncof.gov.in/home.aspx',
      },
      {
        title: 'e-Nam',
        publishDate:'04-10-2016',
        link: 'https://enam.gov.in/web/',
      },
      {
        title: 'Soil Health Card',
        publishDate:'01-09-2016',
        link: 'https://soilhealth.dac.gov.in/home',
      },
      {
        title: 'Pradhan Mantri Fasal Bima Yojana',
        publishDate:'05-08-2017',
        link: 'https://pmfby.gov.in/ext/rpt/ssfr_17',
      },
  ];

  return (
    <div>
      <div className="position-fixed w-100" style={{zIndex:"100000"}}>
            <FarmerNavbar/>
    </div>
    <br/>
    <br/>
    <br/>
    <div data-aos="fade-up">
      <h1>Government Schemes</h1>
      <GovernmentScheme schemes={schemes} />
    </div>
    </div>
  );
};

export default GovernmentSchemesPage;
