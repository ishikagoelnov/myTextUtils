import React ,{useState} from 'react'

export default function About(props) {
    // const[mystyle,setMyStyle]=useState({
    //     color:"black",
    //     backgroundColor:"white"
    // })
    let mystyle={ 
      color:props.mode==='dark'?'white':'black',
      backgroundColor:props.mode==='dark'?'rgb(36 74 104)':'white'
    }
    // const[btnText,setBtnText]=useState("Enbale dark mode")
    // const toggleStyle=()=>{
    //     if(mystyle.color==='black'){
    //         setMyStyle({
    //             color:"white",
    //             backgroundColor:"black",
    //             border: "1px solid white"
    //         })
    //         setBtnText("Enable light mode");
    //     }
    //     else{
    //         setMyStyle({
    //             color:"black",
    //             backgroundColor:"white"
    //         })
    //         setBtnText("Enable dark mode");
    //     }
    // }
  return (
    <div className='container'>
        <h1 className='my-3' style={{color:props.mode==='dark'?'white':'black'}}>About Us</h1>
      <div className="accordion" id="accordionExample" style={mystyle}>
  <div className="accordion-item" >
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" style={mystyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
       <strong>Analyze your text</strong> 
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={mystyle}>
        TextUtils gives you a way to analyze your text quickly and efficiently. But it word count character count
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" style={mystyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        <strong>Free to use</strong> 
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={mystyle}>
        TextUtils is a free character counter tool that provides instant character count and word count statistics for  given text. TextUtils reports the number of words and characters. This it is a suitable for writing text with word/character limit.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" style={mystyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        <strong>Browser compatible</strong> 
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={mystyle}> 
        This word counter software works in any web browsers , such as Chrome, Fire Fox, Internet explorer ,safari , Opera .It suits to count characters in facebook,blog ,books ,exel document,pdf document ,essays etc.
      </div>
    </div>
  </div>
</div>
{/* <div className="container">
<button type="button" onClick={toggleStyle} className="btn btn-primary my-3">{btnText}</button>
</div> */}
    </div>
  )
}
