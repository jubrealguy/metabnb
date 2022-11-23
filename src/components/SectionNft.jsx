import tilt1 from '../img/tilt-img1.png';
import tilt2 from '../img/tilt-img2.png';
import tilt3 from '../img/tilt-img3.png';

const SectionNft = () => {
    return (
        <div className="sectionNft">
            <div className="sectionNft__content">
                <h3 className="sectionNft__head">Metabnb NFTs</h3>
                <p className="sectionNft__body">Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as NFTs. These NFTs gives our cutomer access to loads of our exclusive services.</p>
                <a href="##" className="sectionNft__link">Learn more</a>
            </div>
            <div className="sectionNft__images">
                <img src={tilt1} alt="" className="sectionNft__img img1" />
                <img src={tilt2} alt="" className="sectionNft__img img2" />
                <img src={tilt3} alt="" className="sectionNft__img img3" />
            </div>
        </div>
    )
}

export default SectionNft;