import React from 'react'

const CreacteOrLook = () => {
    return (
        <div>
            {/* 프로젝트 생성, 게시판 */}
            <section className="createOrLook">

                <div className="portCreate">
                    <div className="portExp" id="portCExp">
                        <span className="portExpTitle" id="portCExpTitle">포트폴리오<br></br><span style={{ color: "#FFE052;" }}>제작</span>하기</span>
                        <span className="portExpCont" id="portCExpCont">여러 컴포넌트로 구성된 완벽하게<br></br>반응하는 사이트를 만들어<br></br>내 작품을 소개해 보세요.</span>
                        <div className="portExpImg" id="portCExpImg">
                            <img src="/img/portExpImg.gif" alt=""></img>
                            <button>제작하러 가기</button>
                        </div>
                    </div>
                </div>
                <div className="portLook">
                    <div className="portExpImg" id="portLExpImg">
                        <img src="/img/portExpImg2.gif" alt=""></img>
                        <button>공유하러 가기</button>
                    </div>
                    <div className="portExp" id="portLExp">
                        <span className="portExpTitle" id="portLExpTitle">포트폴리오<br></br><span style={{ color: "#FFE052" }}>공유하기</span></span>
                        <span className="portExpCont" id="portLExpCont">나만의 포트폴리오를 공유하세요.<br></br>많은 사용자들의 다양한 포트폴리오를
                            구경해보고,<br></br> 마음에 드는 사용자에게
                            추천을 눌러주세요.</span>
                    </div>

                    <div className="onboarding-mount">
                        <div></div>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default CreacteOrLook