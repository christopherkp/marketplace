import '../shared/css/App.css';
import '../shared/css/Marketplace.css';
import '../shared/css/Header.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { setItemId } from '../shared/utilities/setItemId.tsx';
import { useParams } from 'react-router';
import { generatePath } from 'react-router';
import { useLocation } from 'react-router';
import ItemInformation from './ItemInformation.tsx';

interface Item {
    id: number;
    name: string;
    genre: string;
    description: string;
    releaseYear: number;

}

var fromIndex = 0;
var toIndex = 8;
const startIndex = 0;
const changeIndex = 8;
function MarketplaceComponent() {

    const [items, setItems] = useState<Item[]>();
    const [shownItems, setShownItems] = useState(fromIndex);
    const currentPage = useLocation().pathname;

/*
    const MyComponent = (id: number) => {
        var itemid = "/marketplace/" + id
        return itemid;
    };
*/
    const toItem = (event: any) => {
        setItemId(event);
        console.log("wwa")
    };

    const getCurrentPage = () => {
        console.log("currentPage is ", currentPage)
        return "";
    }

    const toNextItemPage = (items: any) => {
        if (shownItems >= startIndex && toIndex < items.length) {
            fromIndex += changeIndex;
            toIndex += changeIndex;
            populateShownItems(fromIndex);
        }
    };

    const toPreviousItemPage = () => {
        if (shownItems >= changeIndex) {
            fromIndex -= changeIndex;
            toIndex -= changeIndex;
            populateShownItems(fromIndex);
        }
    };

    const isClickablePrevious = () => {
        const textt = "navigate-items";
        const textt2 = "navigate-items-not-clickable";
        if (fromIndex >= 4) {
            console.log(textt)
            return textt;
        }
        else {
            return textt2;
        }
    };

    const isClickableNext = (items: any) => {
        const textt = "navigate-items";
        const textt2 = "navigate-items-not-clickable";
        if (toIndex < items.length) {
            console.log(textt)
            return textt;
        }
        else {
            return textt2;
        }
    };

    const calculateIndexes = (items: any) => {
        var summary = [fromIndex + 1, " to ", toIndex]
        if (toIndex < items.length) {
            return summary;
        }
        else if (fromIndex + 1 == items.length) {
            summary = [fromIndex + 1, " to ", toIndex - 3]
            return summary;
        }
        else if (fromIndex + 2 == items.length) {
            summary = [fromIndex + 1, " to ", toIndex -2]
            return summary;
        }
        else if (fromIndex + 3 == items.length) {
            summary = [fromIndex + 1, " to ", toIndex - 1]
            return summary;
        }
        else if (fromIndex + 4 == items.length) {
            summary = [fromIndex + 1, " twwwo ", toIndex - 1]
            return summary;
        }
        else if (fromIndex + 5 == items.length) {
            summary = [fromIndex + 1, " to ", toIndex - 1]
            return summary;
        }
        else if (fromIndex + 6 == items.length) {
            summary = [fromIndex + 1, " to ", toIndex - 1]
            return summary;
        }
        else if (fromIndex + 7 == items.length) {
            summary = [fromIndex + 1, " to ", toIndex - 1]
            return summary;
        }
    };

    const getItemsLength = (items: any) => {
        return items.length;
    }

    const limitDescriptionPreview = (description: string) => {
        const maxDescriptionPreview = 50;
        if (description != null && description.length > maxDescriptionPreview) {
            var trunc = description.substring(0, maxDescriptionPreview) + "...";
            return trunc;
        }
        else if (description != "" && description.length < maxDescriptionPreview) {
            var trunc = description;
            return trunc;
        }
        else {
            var trunc = "Description has not been given for this item";
            return trunc;
        }
    };

    useEffect(() => {
        getItems();
    }, []);


    const contents = items === undefined
        ? <p></p>
        :
         
        <><div className="content-wrapper"><div className="grid-container">
            {items.slice(fromIndex, toIndex).map(item => <Link onClick={() => toItem(item.id)}  to={"/marketplace/" +  item.id }
                key={item.id} className="grid-item">
                <div className="grid-item-container">   
                    <div className="grid-item-information">{item.name}</div>
                    <div className="grid-item-information2">{item.genre}, {item.releaseYear}</div>
                    <div className="grid-item-information3">{limitDescriptionPreview(item.description)}</div>
                </div>
            </Link>
            )}
            
        </div>
            <div className="navigate-buttons-wrapper">
                <button className={isClickablePrevious()} id="previous-button" onClick={() => toPreviousItemPage()}>Previous</button>
                <div className="navigate-information">Viewing items <span className="emphasize-text">{calculateIndexes(items)}</span> out of <span className="emphasize-text">{getItemsLength(items)} total items</span></div>
                <div>{getCurrentPage()}</div>
                <button className={isClickableNext(items)} id="next-button" onClick={() => toNextItemPage(items)}>Next</button>
                </div>
        </div>
            </>;

    return (
        <>
            <div className="site-content">
            {contents}
            </div></>
    );

    async function getItems() {
        const response = await fetch('api/Items');
        console.log("firstwwwwpage", response)
        if (response.ok) {
            const data = await response.json();
            setItems(data);
        }
    }

    async function populateShownItems(sliceValue: number) {
        setShownItems(sliceValue);
    }

}
export default MarketplaceComponent;
