import classes from './Star.module.css';

const Star = ({ isFill }) => {
    return (
        <svg fill={ isFill ? "#FFAA00" : "#878787" } viewBox="0 0 32 32" version="1.1" 
        xmlns="http://www.w3.org/2000/svg" stroke={ isFill ? "#FFAA00" : "#878787" } className={ classes.star }>
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier"> 
                <path d="M3.488 13.184l6.272 6.112-1.472 8.608 7.712-4.064 7.712 4.064-1.472-8.608 
                6.272-6.112-8.64-1.248-3.872-7.808-3.872 7.808z"></path>
            </g>
        </svg>
    )
};

export default Star;