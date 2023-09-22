import React from 'react'
import { Link } from 'react-router-dom';
import CreacteOrLook from './CreacteOrLook';
import Banner from './Banner';
import MainContent from './MainContent';
const Main = () => {
    return (
        <div>
            <header className="heading1">
                <div className="headContainer">
                    <div className="headToolbar1">
                        <Link to="/"><img src="/img/engLogo.png" alt="logo" className="logo"></img></Link>
                        <ul className="headPort">
                            <li>
                                {/* {% if list.user_email === undefined %} */}
                                <Link to="/login">포트폴리오 생성</Link>
                                {/* {% else %} */}
                                {/* <a href="/port_option">포트폴리오 생성</a> */}
                            </li>
                            <li>
                                <Link to="/port_board">포트폴리오 게시판</Link>
                            </li>
                        </ul>
                    </div>Name
                    <div className="headToolbar2">

                        {/* if list.user_emNameail === undefined  */}
                        <Link to="/login" className="BtnName"><img src="/img/loginlogo.png" alt=""></img><span>로그인</span></Link>
                        <Link to="/join_start" className="Btn"><img src="/img/User_add_alt_fill.png" alt=""></img><span>회원가입</span></Link>
                        {/* {% elif list.user_email === 'admin' %} */}
                        {/* <a href="/admin_page"><span>관리자페이지</span></a>
                <a href="/mypage" className="Btn"><img src="/img/User_cicrle.png" alt=""></img><span>마이페이지</span></a>
                <a href="/auth/logout" className="Btn"><img src="/img/Log_Out.png" alt=""></img><span>로그아웃</span></a> */}
                        {/* {% else %} */}

                        <Link to="/mypage" className="Btn"><img src="/img/User_cicrle.png" alt=""></img><span>마이페이지</span></Link>
                        <Link to="/auth/logout" className="Btn"><img src="/img/Log_Out.png" alt=""></img><span>로그아웃</span></Link>
                    </div>
                </div>
            </header>
            <main>
                {/* 배너 */}
                <Banner />
                {/* 프로젝트 생성, 게시판 */}
                <CreacteOrLook/>
                {/* 웹 설명 화면 */}
                <MainContent />
            </main>
            <footer>

            </footer>
        </div>
    )
}

export default Main;