import { motion } from "framer-motion";
import { useState } from "react";
import "./popUpGallery.css";

// Hard coded to avoid pain
const imageNumber = 3;
let imagePaths: string[] = [];

for (let i = 1; i <= imageNumber; i++) {
    imagePaths.push(`/assets/pop-up-gallery-images/image${i}.jpg`)
}

export default function PopUpGallery() {

    if (!imagePaths) { return }

    const [activeImageIndex, setActiveImageIndex] = useState<number>(0)
    const [activeImageSrc, setActiveImageSrc] = useState<string>(imagePaths[0]);
    const [animationState, setAnimationState] = useState(undefined);

    const onButtonClick = (index: number) => {
        setActiveImageIndex(index);
        setActiveImageSrc(imagePaths[index]);
    }

    console.log(activeImageSrc);

    return(
        <motion.div 
            className="pop-up-gallery"
            variants={animationState}
        >

        <div className="middle-row">
            {(activeImageIndex !== 0) && <button
                id="left-nav-button"
                className="nav-button"
                onClick={() => onButtonClick(activeImageIndex - 1)}
            ></button>}

            <img
                className="pop-up-main-image"
                src={activeImageSrc}
            />

            {(activeImageIndex !== (imageNumber-1)) && <button
                id="right-nav-button"
                className="nav-button"
                onClick={() => onButtonClick(activeImageIndex + 1)}
            ></button>}
        </div>

        <div className="bottom-row">
            {imagePaths.map((imageSrc, index) => {

                return(
                    <BottomRowNavButton
                        key={index}
                        index={index}
                        isActive={index === activeImageIndex}
                        onClick={onButtonClick}
                    />
                )
            })}
        </div>
            
        </motion.div>
    )
}

/*
Needs an image with naviagation buttons each side and three dots along the bottom. There's a stripe that runs along
behind it and its slightly diagonized 

It can just be a simple colour

WOULD BE NICE

Automatic scrolling with a timer that can be modified

It would be nice if it could not do the automatic scrolling whilst the mouse is over it
*/

interface BottomRowNavButtonProps {
    index: number;
    isActive: boolean;
    onClick: (index: number) => void;
}

function BottomRowNavButton({ index, isActive, onClick }: BottomRowNavButtonProps) {

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault(); // Optional
        onClick(index); // Call parent's onClick with src
    };

    return(
        <button
            className={`quick-nav-button ${isActive ? 'is-active' : ''}`}
            id={`quick-nav-button-${index}`}
            onClick={handleClick}
        >
        </button>
    )
}