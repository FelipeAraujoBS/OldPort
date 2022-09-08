import "./Home.css"
import foto from "../../images/fotoHome.png"
import { useState, useEffect } from "react";


function Home() {
    const toRotate = ["Web Developer", "Fullstack Developer", "UI/UX Designer"];
    const [loopNum, setLoopNum] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)
    const [text, setText] = useState('')
    const [delta, setDelta] = useState(300 - Math.random() * 100)
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta) 

        return() => {clearInterval(ticker)};
    })

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length -1) : fullText.substring(0, text.length + 1);

        setText(updatedText)

        if(isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }
        if(!isDeleting && updatedText === fullText){
            setIsDeleting(true)
            setDelta(period)
        }
        else if(isDeleting && updatedText === ''){
            setIsDeleting(false)
            setLoopNum(loopNum + 1)
            setDelta(500)
        }
    }  

    return (
        <div>
            <div className="mainHome">
                <div className="imgHome">
                    <img className="img" src={foto} alt="foto" />
                </div>
                <div className="textHome">
                    <h1 className="name">Felipe <span className="span">Araújo</span></h1>
                    <h2 className="job">{text}</h2>
                </div>
              
            </div>
        </div>
    )
}

export default Home;