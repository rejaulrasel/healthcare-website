import React from 'react';
import './Appoinment.css';
import bgImg from './images/bg-img.jpg'
const Appoinment = () => {
    return (
        <div>
            <section className='features-container text-light '>
                <h1 className='text-center pt-4'>Why Choose us?</h1>
                <div className='features '>
                    <div className='feature'>
                    <i class="fas fa-hand-holding-medical icon"></i>
                    <h3>Best Patient Care</h3>
                    <p>Despite advances in technology and understanding of biological systems, drug discovery is still a lengthy, expensive.</p>
                    </div>
                    <div className='feature'>
                    <i class="fas fa-briefcase-medical icon"></i>
                    <h3>Advanced Operating Room</h3>
                    <p>Despite advances in technology and understanding of biological systems, drug discovery is still a lengthy, expensive.</p>
                    </div>
                    <div className='feature'>
                    <i class="fas fa-user-md icon"></i>
                    <h3>Only Best Doctors</h3>
                    <p>Despite advances in technology and understanding of biological systems, drug discovery is still a lengthy, expensive.</p>
                    </div>
                </div>
            </section>

            <section className='container appointment-section text-light bg-img'>
                <h1 className='text-center mb-5 pt-4 text-warning'>Make an Appointment</h1>
                <div className="appointment-input mb-5">
                    <input type="text" placeholder='Name*' />
                    <input type="number" placeholder='Number*'/>
                    <input type="email" placeholder='Email*' />
                    <select className='px-2'>
                        <option value="">Lung Diaseases</option>
                        <option value="">Heart Diseases</option>
                        <option value="">Diabetes</option>
                        <option value="">HIV</option>
                        <option value="">Crietinin</option>
                        <option value="">Cardiology</option>
                        <option value="">Blood Test</option>
                    </select>
                    <input type="text" placeholder='Date*'/>
                    <input type="text" placeholder='Time*' />
                </div>
                    <button className="w-100 py-2 fs-4">Submit Now</button>
            </section>
        </div>
    );
};

export default Appoinment;