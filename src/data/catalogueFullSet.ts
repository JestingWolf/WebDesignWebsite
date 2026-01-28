import TestItem1 from "../components/catalogue-components/testItem1";
import TestItem2 from "../components/catalogue-components/testItem2";
import TestItem3 from "../components/catalogue-components/testItem3";

import type { CatalogueComponent, CatalogueIndividualSet } from "../components/catalogueContainer";

export const catalogueFullSet: CatalogueIndividualSet[] = [
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
    }
]