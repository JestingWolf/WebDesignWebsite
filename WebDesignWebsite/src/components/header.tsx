import { useLocation } from "react-router-dom";
import "./header.css";
import "../index.css";

export default function Header() {
    const location = useLocation();

    const headerImages: Record<string, string> = {
        "/": "header-background-index.PNG",
        "/contact": "header-image-contact.jpg",
        "/catalogue": "header-image-catalogue.jpg"
    }

    const headerColour: Record<string, string> = {
        "/": "#a8ccb2",
        "/contact": "#709BD9",
        "/catalogue": "#D15E5E"
    }
    
    const currentBackground = headerImages[location.pathname] || headerImages["/"]; 
    const currentColour = headerColour[location.pathname] || headerColour["/"];
    return(
        <header style = {{ 
         backgroundImage: `url(/src/assets/${currentBackground})`,
         backgroundColor: `${currentColour}`
         }}>
        </header>
    )
}   
