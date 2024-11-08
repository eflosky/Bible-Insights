import './WeBelieve.scss'
import circle from '../Assets/Circle.svg'


export default function WeBelieve() {
    return (
        <div className={"WeBelieve"} alt-text={'We Believe Section'}>
            <div className={"QuestionAndLink"}>
                <img src={circle}/>
                <p>What books are in the Bible?</p>
                <div className={'LinkToPage'}>Find out here!</div>
            </div>
        </div>
    )
}