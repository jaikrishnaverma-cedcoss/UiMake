import React from 'react';
function Template1() {
    return ( 
        <>
        <div className="main">
            <div className="row flexAIC flexSA">
                <div className="logo w33"><img src="logo.png" alt="" /></div>
            <div className="row flexAIC w50 flexEnd ">
                <button className="btn btn-trans">HOME</button>
                <button className="btn btn-trans">ABOUT US</button>
                <button className="btn btn-trans">SERVICE</button>
                <button className="btn btn-trans">CONTACT</button>
                <button className="btn clr1 btner">LOGIN</button>
                </div>
            </div>
            <div className="row w100 flexSB">
                <div className="col w33 flexJCC" style={{paddingLeft:"6%",marginTop:"4%"}}>
       <h1 className='heading fcl1 m1'>ONLINE</h1>
       <p className='subheading fcl2 m1'>EDUCATION</p>

       <p className='m1 fcl2' style={{marginTop:"20px"}}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. In iure suscipit delectus similique, officiis exercitationem illo facere nemo esse doloremque hic illum libero odio?
       </p>

       <button className="btn btn-info bRd10 w33 clr1 btner" style={{marginTop:"10%"}}>Learn more</button>
                </div>
                <div className="col w50 flexEnd">
        <img src="fgf.png" alt="" />
                </div>
            </div>
        </div>
        </>
     );
}

export default Template1;