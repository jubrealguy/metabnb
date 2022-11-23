import img3 from '../img/image-3.png';
import img4 from '../img/image-4.png';
import img5 from '../img/image-5.png';
import img6 from '../img/image-6.png';

function Intro() {
    return (
        <section className="intro">
            <div className="intro__content">
                <p className="intro__content-head">Rent a <span>Place</span> away from <span>Home</span> in the <span>Metaverse</span></p>
                <p className="intro__content-body">We provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone</p>
                <div className="intro__content-search">
                    <input type="text" placeholder='Search for location' className="search-input" />
                    <a href="##" className="search-btn">Search</a>
                </div>
            </div>
            <div className="intro__image">
                <div className="image-left">
                    <img src={img4} alt="" className="img-1" />
                    <img src={img6} alt="" className="img-1" />
                </div>
                <div className="image-right">
                    <img src={img3} alt="" className="img-1" />
                    <img src={img5} alt="" className="img-1" />
                </div>
            </div>
        </section>
    )
}

export default Intro;