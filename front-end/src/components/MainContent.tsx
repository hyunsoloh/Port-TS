import React from 'react'

const MainContent = () => {
    return (
        <div>
            {/* 사이트 설명 화면 */}
            <section className="mainContentGradiant">
                <div className="expDivExp">
                    <span style={{
                        color: "#004AAD",
                        fontWeight: 800,
                        fontSize: '1.1em'
                    }}>PORT</span>에서만 볼 수 있는
                    다양한 기능들
                </div>
            </section>
            <section className="explain">
                <div className="explainDiv">
                    <div className="featuresFlexContainer">
                        <div className="firstRow">
                            <div className="featureContent" style={{borderTopLeftRadius: "65px"}}>
                                <div className="imageFeature">
                                    <img id="feat1" src="/img/feat1.png" alt=""></img>
                                </div>
                                <h4 className="feature-title">도메인 제공</h4>
                                <p className="blurb">나만의 도메인으로<br></br>
                                    보다 전문적이고 특별한 포트폴리오!</p>
                            </div>
                            <div className="featureContent">
                                <div className="imageFeature">
                                    <img src="/img/feat5.png" alt=""></img>
                                </div>
                                <h4 className="feature-title">실시간 코드 확인</h4>
                                <p className="blurb">CodePen을 통한 코드창과 구현 화면을<br></br>
                                    실시간으로 확인 할 수 있어요</p>
                            </div>
                            <div className="featureContent" style={{borderTopRightRadius: "65px"}}>
                                <div className="imageFeature">
                                    <img src="/img/feat2.png" alt=""></img>
                                </div>
                                <h4 className="feature-title">도메인 암호</h4>
                                <p className="blurb" id="feat2">도메인 암호 설정을 통한
                                    철저한 보안</p>
                            </div>
                        </div>
                        <div className="secondRow">
                            <div className="featureContent" style={{borderBottomLeftRadius: "65px"}}>
                                <div className="imageFeature">
                                    <img id="feat3" src="/img/feat3.png" alt=""></img>
                                </div>
                                <h4 className="feature-title">사용자 웹 전자 명함</h4>
                                <p className="blurb" id="feat3">명함을 제작하고, 다른 사람들에게 전달해보세요</p>
                            </div>
                            <div className="featureContent" style={{borderBottomLeftRadius: "65px"}}>
                                <div className="imageFeature">
                                    <img id="feat4" src="/img/feat4.png" alt=""></img>
                                </div>
                                <h4 className="feature-title">컴포넌트 형식의 제작</h4>
                                <p className="blurb">컴포넌트를 원하는 위치에 배치하고,<br></br>원하는 이미지와 텍스트를 삽입할 수 있습니다</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </div>
    )
}

export default MainContent