import './Banner.scss'
import dataDiagram from '../Assets/DataDiagram.png'

export default function Banner() {
    return (
        <div className={"Banner"} alt-text={'Banner'}>
            <div className={"Banner-Container"}>
                <div className={"info"}>
                    <h1>Bible Notes Tracker</h1>
                    <p>Gain Insights into your Personal Study</p>
                    <div className={"track-now"}>Track Now!</div>
                </div>

                <div className={"data"}>
                    <img src={dataDiagram} alt={'Data diagram'} />
                </div>
            </div>
        </div>
    )
}