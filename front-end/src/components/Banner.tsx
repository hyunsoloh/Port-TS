import React from "react";
import '../index.css'

const Banner: React.FC = () => {

    const toggleDivs = () => {
        const bannerH1one = document.getElementById('bannerH1one');
        const bannerh1two = document.getElementById('bannerH1two');
        
        bannerH1one?.classList.toggle('fade-out');
        bannerH1one?.classList.toggle('fade-in');
        bannerh1two?.classList.toggle('fade-out');
        bannerh1two?.classList.toggle('fade-in');

        toggleDivs();

        setInterval(toggleDivs, 7000);
    }

    return(
        <div>
            <section className="banner">
                <div className="bannerH1" id="bannerH1one">
                    <h1>미래를 향해,</h1>
                    <h1>나를 위한 <span id="hanghae">항해</span></h1>
                </div>
                <div className="bannerH1" id="bannerH1two">
                    <div className="bannerRow">
                        <h1>포트폴리오,</h1>
                        {/* <h1 >,</h1> */}
                    </div>
                    <div className="bannerRow">
                        <h1 style={{ color: '#5188FF' }}>포트</h1>
                        <h1>에서</h1>
                    </div>
                        <h1>쉽게</h1>
                </div>
            </section>
            {/* 배경색 */}
            <section className="bannerGradiant">

            </section>
        </div>
    );
}

export default Banner;