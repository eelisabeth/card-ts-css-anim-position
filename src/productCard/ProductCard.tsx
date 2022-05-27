import './productCard.css';

const ProductCard: React.FC<ProductCardProps> = ({
    onAddToCardPressed,
    onReject,
    onClose,
    title,
    price,
    imageSrc,
    imageDesc,
}) => {
    return (
        <figure className="product-card">
            <div className="metadata">
                <h3>{title}</h3>
                <span>{`${price} $`}</span>
            </div>
            <img src={imageSrc} alt={imageDesc} />
        </figure>
    )
}

export default ProductCard;

interface ProductCardProps {
    onAddToCardPressed: () => void;
    onReject: () => void;
    onClose: () => void; 
    title: string;
    price: number;
    imageSrc: string;
    imageDesc: string;
}