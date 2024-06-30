import Link from 'next/link';
import './styles.scss';

type Images = {
    img: string;
    link: string;
    alt: string;
};

type GalleryProps = {
    images: Images[];
};

export const Gallery = ({ images }: GalleryProps) => {
    return (
        <div className="gallery-theme">
            {images.map((data: Images, index: number) => (
                <div key={index} className="grid-item">
                    <Link href={data.link}>
                        <img src={data.img} alt={data.alt} />
                    </Link>
                </div>
            ))}
        </div>
    );
};