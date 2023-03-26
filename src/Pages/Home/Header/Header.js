import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <div className="home-banner  flex items-center justify-center font-fam gap-60">

                <h1 className="banner-title text-white text-5xl">
                    <span>REUNION OF</span> <br />
                    <span className='text-[#7d1443]'>PUB STUDENTS</span>
                </h1>
                <Link to='/registration'>
                    <button className="btn btn-outline text-white hover:bg-[#7d1443]">Click Here to Register</button>
                </Link>




            </div>



            <section className='my-20'>

                <div class="grid grid-cols-2 gap-4">
                    <div className='border p-10'>
                        <img src="https://media.licdn.com/dms/image/C4D12AQG3K4UOCMWApQ/article-cover_image-shrink_720_1280/0/1646113091635?e=2147483647&v=beta&t=tadmUk_IggQ5s4x5wJD44Q3aUHB4xZ92pn2xaXibYz8" alt="" />
                    </div>
                    <div className='border p-10 flex items-center justify-center'>
                        <h1 className='text-5xl font-black font-fam'>ALUMNI MEET</h1>
                    </div>
                </div>

            </section>



        </div>
    );
};

export default Header;