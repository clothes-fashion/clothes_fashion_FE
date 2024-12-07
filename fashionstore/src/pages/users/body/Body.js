import React, {memo} from "react";
import Footer from "../footer/Footer";

const Body = () => {
    const listImage = [
        "https://applecenter.com.vn/uploads/cms/17269927777118.jpg",
        "https://applecenter.com.vn/uploads/cms/17269927777118.jpg",
        "https://applecenter.com.vn/uploads/cms/17269927777118.jpg",
        "https://applecenter.com.vn/uploads/cms/17269927777118.jpg",
        "https://applecenter.com.vn/uploads/cms/17269927777118.jpg",
        "https://applecenter.com.vn/uploads/cms/17269927777118.jpg",
        "https://applecenter.com.vn/uploads/cms/17269927777118.jpg",
        "https://applecenter.com.vn/uploads/cms/17269927777118.jpg",
        "https://applecenter.com.vn/uploads/cms/17269927777118.jpg",
        "https://applecenter.com.vn/uploads/cms/17269927777118.jpg",
        "https://applecenter.com.vn/uploads/cms/17269927777118.jpg",
        "https://firebasestorage.googleapis.com/v0/b/photo-archive-a0523i1.appspot.com/o/employee_avatar%2Fte_chin_ich_fashion_1998-01-08_1731425623854.jpeg?alt=media&token=c9a30ca5-be4e-4bbd-a5c8-05b71cc32c4b"
    ];

    const images = [
        "https://cf.shopee.vn/file/sg-11134258-7rens-m2bzmkhgfw0039_xxhdpi",
        "https://cf.shopee.vn/file/sg-11134258-7rent-m2goefkq1z5v1a_xxhdpi",
        "https://cf.shopee.vn/file/sg-11134258-7renp-m2c4nt2sn90687_xxhdpi",
        "https://cf.shopee.vn/file/sg-11134258-7renl-m2c7ikn4qoyy08_xxhdpi",
        "https://cf.shopee.vn/file/sg-11134258-7reom-m2bzg1wtpkk6e3_xxhdpi"
    ];


    return (
        <div className="relative p-4 z-0 top-28">
            <div id="default-carousel" className="relative w-full" data-carousel="slide">
                {/*Carousel wrapper*/}
                <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                    {/*Item 1*/}
                    {
                        images.map((image, index) =>
                            (
                                <div className="hidden duration-700 ease-in-out" data-carousel-item key={index}>
                                    <img src={image} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                                        alt="..."/>
                                </div>
                            )
                        )
                    }
                </div>
                {/*Slider indicators*/}
                <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                    {
                        images.map(index => (
                            <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label={"Slide " + (index + 1)} data-carousel-slide-to={index}/>
                        ))
                    }
                </div>
                {/*Slider controls*/}
                <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                     <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                     <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
                    </svg>
                    <span className="sr-only">Previous</span>
                     </span>
                </button>
                <button type="button"
                        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                        data-carousel-next>
        <span
            className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="m1 9 4-4-4-4"/>
            </svg>
            <span className="sr-only">Next</span>
        </span>
                </button>
            </div>



            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 justify-center gap-0">
                {listImage.map((image, index) => (
                    <div
                        // w-full max-w-sm
                        className="bg-orange-50 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-2 md:m-4"
                        key={index}>
                        <a href="#">
                            <img className="p-2 md:p-8 rounded-t-lg" src={image}/>
                        </a>
                        <div className="px-5 pb-5">
                            <a href="#">
                                <h5 className="text-sm md:text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Iphone 15 Promax</h5>
                            </a>
                            <div className="flex items-center mt-2.5 mb-5">
                                <div className="flex items-center space-x-1 rtl:space-x-reverse">
                                    <svg className="w-4 h-4 text-yellow-300" aria-hidden="true"
                                         xmlns="http://www.w3.org/2000/svg"
                                         fill="currentColor" viewBox="0 0 22 20">
                                        <path
                                            d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                    </svg>
                                    <svg className="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true"
                                         xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path
                                            d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                    </svg>
                                </div>
                                <span
                                    className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">5.0</span>
                            </div>
                            <div className="flex flex-wrap md:flex-nowrap items-center justify-center md:justify-between">
                                <span className="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
                                <a href="#"
                                   className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5
                                    text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    )

}
export default memo(Body);