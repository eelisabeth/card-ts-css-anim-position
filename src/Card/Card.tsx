import './blue-pop.css';

export enum CardClass {
    BluePop ='blue-pop',
    GreenFrame ='green-frame',
    WarmFilter ='warm-filter'
}

interface CardProps {
    title: string;
    subtext: string;
    className: CardClass;
    imageUrl: string;
}

const Card: React.FC<CardProps> = ({
    title,
    subtext,
    className,
    imageUrl,
}) => {
    return (
        <figure className={className.toString()}>
            <img src={imageUrl} alt="background" />
            <figcaption>
                <div>
                    <h2>{title}</h2>
                    <p>{subtext}</p>
                </div>
            </figcaption>
        </figure>
    )
}

export default Card