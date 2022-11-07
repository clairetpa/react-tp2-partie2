/* import de l'image */
import presentation from '../img/presentation.png';

/* import du css */
import './About.css';

const About = () =>{
    return(
        <div>
            <div>
                <div className='image-presentation-container'>
                    <img src={presentation} className='image-presentation' alt="image de présentation"/>
                </div>
            </div>
            <div>
                <div>
                    <div className='presentation-title-style'>
                        <h3>Découvrez notre entreprise !</h3>
                    </div>
                    <div className='mission-title-style'>
                        <h4>Notre mission :</h4>
                    </div>
                    <div className='text-container'>
                        <p>Notre souhait est de partager avec vous notre passion pour l'objet, celui qui apportera une touche distinctive dans votre quotidien.</p>
                        <p>Nous vous proposons des endroits inspirants ayant pignon sur rue où il fait bon magasiner, situés dans des quartiers urbains et animés. Nous vous accueillons avec une équipe dévouée qui vous accompagnera afin de dénicher l'article convoité ou le cadeau parfait, qui pourra être emballé par-dessus le marché!</p>
                        <p>Notre mission consiste à vous offrir une expérience d'achat agréable et remarquable grâce à une gamme d'articles qui allient variété, qualité, tendance et prix abordables.</p> 
                        <p>En y ajoutant la volonté d'offrir un service à la clientèle exemplaire, autant en magasin qu'en ligne en passant par les livraisons personnalisées à domicile, nous pouvons dire assurément: Mission accomplie!</p>
                        <p>Si, comme nous, vous êtes passionnés, il nous tarde de vous accueillir prochainement dans la succursale la plus près de chez vous!</p>   
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About;