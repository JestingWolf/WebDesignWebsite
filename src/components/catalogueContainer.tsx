import { useState } from "react";
import generateUUID from "../utils/generateUUID"
import "./catalogueContainer.css"

export type CatalogueComponent = React.ReactNode;

export interface CatalogueItem {
    itemName: string,
    component: CatalogueComponent,
}

export interface CatalogueIndividualSet {
    setName: string,
    items: CatalogueItem[];
}

export interface CatalogueContainerProps {
    catalogueFullSet: CatalogueIndividualSet[];
}

export default function CatalogueContainer({
    // catalogueFullSet
}) {

    return(
        <div className="catalogue-container">

            {catalogueFullSet.map((catalogueSet: CatalogueIndividualSet) => {

                return <CatalogueItemContainer
                    key={generateUUID()}
                    catalogueSet={catalogueSet}
                    initialComponentIndex={0}
                >

                </CatalogueItemContainer>
            })

            }
        </div>
    )
}

interface CatalogueItemContainerProps {
    catalogueSet: CatalogueIndividualSet
    initialComponentIndex: number
}

function CatalogueItemContainer({ 
    catalogueSet,  
    initialComponentIndex,
}: CatalogueItemContainerProps) {

    const [currentComponentIndex, setCurrentComponentIndex] = useState<number>(initialComponentIndex);

    return(
        <div className="catalogue-item-container">

            <p>{catalogueSet.setName}</p>

            <div className="catalogue-item">

                <p>{catalogueSet.items[currentComponentIndex].itemName}</p>

                <div className="catalogue-component">
                    {catalogueSet.items[currentComponentIndex].component}
                </div>
            </div>

            <div className="button-row">
                {catalogueSet.items.map((component, index) => {

                    return(
                        <button
                            key={generateUUID()}
                            className={`catalogue-item-container-button 
                                ${(currentComponentIndex === index) ? 'catalogue-item-container-button-selected' : ""}
                            `}
                            onClick={ () => setCurrentComponentIndex(index)}
                        >
                        </button>
                    )
                })}
            </div>
        </div>
    )
}









function TestItem1() {
    return(
        <img src="/assets/pop-up-gallery-images/image1.jpg"></img>
    )
}

function TestItem2() {
    return(
        <img src="/assets/pop-up-gallery-images/image2.jpg"></img>
    )
}

function TestItem3() {
    return(
        <img src="/assets/pop-up-gallery-images/image3.jpg"></img>
    )
}


const catalogueIndividualSet: CatalogueIndividualSet = 
{
        setName: "Test items",
        items: [
        {
            itemName: "item-1",
            component: <TestItem1 key="item-1"/>,

        },
        {
            itemName: "item-2",
            component: <TestItem2 key="item-2"/>,

        },
        {
            itemName: "item-3",
            component: <TestItem3 key="item-3"/>
        }]
};

const catalogueFullSet: CatalogueIndividualSet[] = 
[
    catalogueIndividualSet,
]