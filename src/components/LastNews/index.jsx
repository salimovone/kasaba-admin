// import { BsArrowUpRightCircle } from 'react-icons/bs';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const LastNews = ({ image, title, text, className }) => {
    const navigate = useNavigate();
    const sendToPage = () => {
        navigate('/news-page', { state: { image, title, text } });
    };
    // eslint-disable-next-line
    // const [textColor, setTextColor] = useState('white');
    //setTextColor("white") //warninglarni yo'qotish uchun, keyinchalik o'chirib yuboriladi!!

    // const contrast = () => {
    //   const canvas = document.createElement("canvas");
    //   const context = canvas.getContext("2d");
    //   const img = new Image();

    //   img.crossOrigin = "Anonymous";
    //   img.src = image;

    //   img.onload = () => {
    //     canvas.width = img.width;
    //     canvas.height = img.height;
    //     context.drawImage(img, 0, 0);
    //     const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
    //     const data = imageData.data;

    //     console.log("image succesfuly loaded!");

    //     let r = 0,
    //       g = 0,
    //       b = 0;
    //     const length = data.length;

    //     for (let i = 0; i < length; i += 4) {
    //       r += data[i];
    //       g += data[i + 1];
    //       b += data[i + 2];
    //     }

    //     r = Math.floor(r / (length / 4));
    //     g = Math.floor(g / (length / 4));
    //     b = Math.floor(b / (length / 4));

    //     // Yozuv rangini aniqlash uchun yoritish darajasini hisoblash
    //     const brightness = 0.2126 * r + 0.7152 * g + 0.0722 * b;
    //     setTextColor(brightness > 128 ? "black" : "white");
    //   };
    // }

    // contrast()

    return (
        // <div
        //     onClick={sendToPage}
        //     className={
        //         'hover:*:opacity-100 cursor-pointer h-full max-h-48 min-h-full max-2xl:max-h-32 overflow-hidden rounded-xl flex flex-col card-neu py-3 px-6 justify-between relative ' +
        //         className
        //     }
        //     style={{
        //         backgroundImage: `url(${image})`,
        //         backgroundPosition: 'center',
        //         backgroundSize: 'cover',
        //         backgroundRepeat: 'no-repeat',
        //         color: textColor,
        //         filter: 'brightness(80%)',
        //     }}
        // >
        //     <span className='text-3xl'>
        //         <h2 className='font-bold mb-3'>{title}</h2>
        //         <p className=' text-sm'>{text}</p>
        //     </span>
        //     {/* <p className="text-end text-xs cursor-pointer">ko'rish</p> */}
        //     <div className='flex opacity-0 transition-all duration-200 absolute w-full h-full top-0 left-0 bg-[#000a] justify-center items-center text-5xl text-white'>
        //         <BsArrowUpRightCircle />
        //     </div>
        // </div>
        <div className='bg-white rounded-lg p-5 break-all card-neu'>
            <div className='flex gap-4'>
                <div className='w-[30%]'>
                    <img
                        src={image}
                        className='w-[100%] object-cover h-[80px] rounded-md card-neu'
                        alt=''
                    />
                </div>
                <div className='w-[60%]'>
                    <p className='text-xl font-medium line-clamp-1'>{title}</p>
                    <p className='text-[14px] text-gray-400 line-clamp-2'>
                        {text}
                    </p>
                </div>
            </div>
            <hr className='mt-3' />
            <div className='mt-3 flex justify-end'>
                <button
                    onClick={sendToPage}
                    className='border border-gray-400 rounded py-1 px-4'
                >
                    Batafsil
                </button>
            </div>
        </div>
    );
};

export default LastNews;
