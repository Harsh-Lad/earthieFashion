import React from 'react'
import { Carousel } from '@trendyol-js/react-carousel';
import Image from 'next/image';



export default function HomePage() {

    const images = [
        { url: "https://qtxasset.com/cdn-cgi/image/w=384,h=216,f=auto,fit=crop,g=0.5x0.5/https://qtxasset.com/quartz/qcloud5/media/image/elon-musk.jpg?VersionId=WbFZfM8mihxnF00PKlQQ7kSLC9uKFIGI" },
        { url: "https://images.livemint.com/img/2022/12/01/600x338/Tesla_Elon_Musk_1654241439954_1669871042126_1669871042126.JPG" },
        { url: "https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2022-12/221202-elon-musk-mjf-1621-9114c5.jpg" },
    ];

    return (
        <div>
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <Image src={images[0].url} width={100} height={250} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <Image src={images[1].url} width={100} height={250} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <Image src={images[2].url} width={100} height={250} className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}
