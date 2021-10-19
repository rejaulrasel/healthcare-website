import useServices from '../../Hooks/useServices';
import Service from '../Service/Service';
import './Services.css';
const Services = () => {
    const {services} =useServices();
    return (
        <div>
            <h1 className='text-center mt-5'>Our Services</h1>
           <div className='services-container'>
           {
                services.map(service => <Service
                key={service.id}
                service={service}
                ></Service> )
            }
            
           </div>
        </div>
    );
};

export default Services;