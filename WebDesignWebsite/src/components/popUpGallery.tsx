import { motion } from "framer-motion";
import { useState } from "react";

// Hard coded to avoid pain
const imageNumber = 3;
let imagePaths: string[] = [];

for (let i = 1; i <= imageNumber; i++) {
    imagePaths.push(`/pop-up-gallery-images/image${i}.jpg`)
}

export default function PopUpGallery() {

    if (!imagePaths) { return }

    const [activeImageSrc, setActiveImageSrc] = useState<string>(imagePaths[0]);
    const [animationState, setAnimationState] = useState(undefined);

    const onNavButtonClick = (index: number) => {
        setActiveImageSrc(imagePaths[index]);
    }

    console.log(activeImageSrc);

    return(
        <motion.div 
            className="pop-up-gallery"
            variants={animationState}
        >

        <img
            className="pop-up-main-image"
            src={activeImageSrc}
        />

        {imagePaths.map((imageSrc, index) => {

            return(
                <BottomRowNavButton
                    key={index}
                    index={index}
                    onClick={onNavButtonClick}
                />
            )
        })}
            
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
    onClick: (index: number) => void;
}

function BottomRowNavButton({ index, onClick }: BottomRowNavButtonProps) {

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault(); // Optional
        onClick(index); // Call parent's onClick with src
    };

    return(
        <button
            className="quick-nav-button"
            id={`quick-nav-button-${index}`}
            onClick={handleClick}
        >
        </button>
    )
}