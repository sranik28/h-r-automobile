'use client'

const Button = ({props}) => {
    return (
        <div>
            <a  class="relative px-5 py-2 font-medium text-white group">
                <span class="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-[#e84343] group-hover:bg-[#e93838] group-hover:skew-x-12"></span>
                <span class="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-[#cf253f] group-hover:bg-[#e51515] group-hover:-skew-x-12"></span>
                <span class="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-[#cf253f] -rotate-12"></span>
                <span class="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-[#e51515] -rotate-12"></span>
                <span class="relative">{props}</span>
            </a>
        </div>
    );
};

export default Button;