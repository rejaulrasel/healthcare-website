import React from 'react';
import './About.css';
import introImg from './images/solen-feyissa-jGmBZypoFPc-unsplash.jpg';
import director from './images/linkedin-sales-solutions-pAtA8xe_iVM-unsplash.jpg'
const About = () => {
    return (
        <div>
            <section className='container intro-container border border-2'>
                <div className='me-5'>
                    <h2>About Us</h2>
                    <p>Molecular Diagnosis is the 1st Molecular Diagnostic Lab in Bangladesh of its kind in Bangladesh with the aim of providing all kinds of DNA and RNA based molecular Diagnostic. The lab is equipped with cutting-edge technologies and most sophisticated equipments like Real-time PCR, Genetic Analyzer NGS etc. to provide premium quality services. All the diagnostic equipments and kits used in DNA Solution Ltd. meets CE/IVD (In vitro Diagnostic) compliance and FDA approved. A group of very well qualified experts in the area of molecular biology, molecular genetics, molecular medicine, biochemistry are associates to ensure high standard of the analysis conducted. We offer the highest quality service of all molecular tests from DNA solution Ltd.</p>
                </div>
                <div>
                <img src={introImg} className='img-fluid' alt="" />
                </div>
            </section>
           
            <section className='container intro-container border border-2 mt-5'>
                <div className='me-5'>
                <img src={director} className='img-fluid' alt="" />
                </div>
                <div>
                    <h2>Managing Director</h2>
                    <p>Mr. Md. Jabed Iqbal Pathan an engineer, completed his B.Sc. Engineering degree from Bangladesh University of Engineering and Technology (BUET). After completion of study from BUET he engaged him the business with different organizations at different capacity. He has experience of more than 17 (Seventeen) years as a businessman.

Mr. Pathan is the Managing Director of DNA solution Ltd, He is also the Founder and Directors of many businesses namely NIPRO JMI Pharma Ltd., E Medicare Ltd., Mazzak Inter Trade Ltd., VIP Traders, Tracking & Survey Solution Ltd. etc. He is one of the successful business entrepreneurs in Bangladesh.</p>
                </div>
            </section>
        </div>
    );
};

export default About;