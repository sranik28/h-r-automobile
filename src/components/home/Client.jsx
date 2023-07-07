import Marquee from "react-fast-marquee";
import icon1 from "../../../public/icon/icon1.png"
import icon2 from "../../../public/icon/icon2.png"
import icon3 from "../../../public/icon/icon3.png"
import icon5 from "../../../public/icon/icon5.png"
import icon6 from "../../../public/icon/icon6.png"
import icon7 from "../../../public/icon/icon7.png"
import icon8 from "../../../public/icon/icon8.png"
import Image from "next/image";

const Client = () => {
    return (
        <main className='bg-[#000000]'>
            <div className='px-3 py-20'>
                <div className='flex gap-5 mx-auto'>
                    <Marquee>
                        <Image className="w-32 h-32 mr-40" src={icon1} alt="" />
                        <Image className="w-32 h-32 mr-40" src={icon2} alt="" />
                        <Image className="w-32 h-32 mr-40" src={icon3} alt="" />
                        <Image className="w-32 h-32 mr-40" src={icon5} alt="" />
                        <Image className="w-32 h-32 mr-40" src={icon6} alt="" />
                        <Image className="w-32 h-32 mr-40" src={icon7} alt="" />
                        <Image className="w-32 h-32 mr-40 " src={icon8} alt="" />
                    </Marquee>
                </div>
            </div>
        </main>
    );
};

export default Client;