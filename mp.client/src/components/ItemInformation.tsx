import '../shared/css/ItemInformation.css'
import '../shared/css/Marketplace.css'
import { useEffect, useState } from 'react';
import { itemId } from '../shared/utilities/setItemId.tsx';
import { setUserId } from '../shared/utilities/setUserId.tsx';
import { Link, useParams } from 'react-router';
import { useLocation } from 'react-router';
interface Item {
    id: number;
    name: string;
    genre: string;
    description: string;
    releaseYear: number;
    userId: number;
    username: string;
}

interface User {
    userId: number;
    username: string;
}

function ItemInformation() {
    var id = 0;
    if (itemId > 0) {
        id = itemId;
    }
    const [itemInformation, setItemInformation] = useState<Item>();
    const [itemInformationId, setItemInformationId] = useState<Item>();
    const [userInformation, setUserInformation] = useState<User>();
    const [theIdd, setTheIdd] = useState(id);
    const currentPage = useLocation().pathname;


    useEffect(() => {
        getItemInformationId();
    }, []);


    /*
        const MyComponent = (id: number) => {
            var itemid = "/marketplace/" + id
            return itemid;
        };
    */

    const getCurrentPage = () => {
        console.log("currentPage is ", currentPage)
        return "";
    }
    /*
    const getUser = (event: number) => {
        if (itemInformation) {
            console.log("trying get", itemInformation.user);
        }
        return "";
    }
    */

    const toUser = (event: any) => {
        setUserId(event);
    };

    const consoleLog = () => {
        console.log("2222", itemInformationId)
        if (itemInformationId) { 
        console.log("1111", itemInformationId)
        console.log("1111", itemInformationId.username)
        console.log("1111", itemInformationId.genre)
        }
        return "";
    }

    const contents2 = userInformation === undefined
        ? <p></p>
        : <><div className="item-description">
        </div></>

    const contents = itemInformationId === undefined
        ? <div className="site-content">w</div>
        :
        <> <div className="item-information-wrapper">
            <div className="item-information-wrapper-title-and-description">
            <div id="item-information-section-name">{itemInformationId.name}</div>
            </div>
            <div id="grid-item-sections">
            <div id="item-information-section-description"> <div id="item-information-description-header">Description </div> {itemInformationId.description}</div>
            <div className="item-information-wrapper-genre-year-from">
                <table id="item-information-table">
                <tr>
                    <td><div id="item-information-table-header">Genre</div> <p>{itemInformationId.genre}</p></td>
                    <td><div id="item-information-table-header">Year</div> <p>{itemInformationId.releaseYear}</p> </td>
                            <td><div id="item-information-table-header">From</div> <p>
                                <Link to={"/marketplace/user/" + itemInformationId.username} key={itemInformationId.userId} className="navigate-itemss" onClick={() => toUser(itemInformationId.userId)}>
                        <div className="underline">{itemInformationId.username}</div><p id="padding">&rarr; </p>
                    </Link></p></td>
                    </tr>
                </table>
                </div>
            </div>
            <div className="this-back-link">
                <Link to="/marketplace"> <button id="item-information-back">Back</button> </Link>
            </div></div></>
    const itemName = itemInformation === undefined
        ? <p></p>
        : <div>{itemInformation.name}</div>;

    const itemGenre = itemInformation === undefined
        ? <p>Loading item name</p>
        : <div>{itemInformation.genre}</div>;

    const itemReleaseYear = itemInformation === undefined
        ? <p>Loading item name</p>
        : <div>{itemInformation.releaseYear}</div>;

    const itemDescription = itemInformation === undefined
        ? <p>Loading item name</p>
        : <div>{itemInformation.description}</div>;

    return (
        //<><div className="page-header">{itemName}</div>
            <>
            <div className="site-content-iteminformation">
                {contents}
            </div>
        </>
    );

    async function getItemInformation() {
        const response = await fetch('api/Items/');
        if (response.ok) {
            const data = await response.json();
            setItemInformation(data);
        }
    }

    async function getItemInformationId() {
        var numbers = 5;
        setTheIdd(numbers);
        console.log("wwwwqwqwqw", theIdd)
        console.log("trying with", theIdd)
        const response = await fetch('/api/Items/' + theIdd);
        console.log("thissss", response)
        if (response.ok) {
            const data = await response.json();
            setItemInformationId(data);
            console.log("here2e", data)
        }
    }

    async function getUserInformation() {
        const response = await fetch('api/Users/');
        console.log(response, "response")
        if (response.ok) {
            const data = await response.json();
            setUserInformation(data);
            console.log("heree", userInformation)
        }
    }

    function deleteProduct(item: any, id: number) {
        fetch('api/Items/' + itemId, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" }
        });
      /*  for (const use of item) {
            if (use.id == id) {
                const oneItem = setItemInformation(item.filter(((item: { id: number; }) => item.id !== itemId)));
                console.log("ee", oneItem)
                return "";
            }
        } */
    }
}

export default ItemInformation;