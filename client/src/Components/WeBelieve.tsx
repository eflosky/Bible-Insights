import './WeBelieve.scss'
import circle from '../Assets/Circle.svg'


export default function WeBelieve() {
    return (
        <div className={"WeBelieve"} alt-text={'We Believe Section'}>

            <div className={"QuestionAndLink"}>
                <img src={circle}/>
                <div className={'content'}>
                    <p>What books are in the Bible?</p>
                    <div className={'linkToPage'}>Find out here!</div>
                </div>
            </div>

            <div className={"QuestionAndLink"}>
                <img src={circle}/>
                <div className={'content'}>
                    <p>What is each book about in the Bible?</p>
                    <div className={'linkToPage'}>Find out here!</div>
                </div>
            </div>

            <h1>We Believe ALL of the Bible is God’s inspired word and should be read.</h1>
        </div>
    )
}