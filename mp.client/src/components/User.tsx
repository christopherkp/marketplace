import { JSXElementConstructor, ReactElement, ReactNode, useEffect, useState } from 'react';
import { userId } from '../shared/utilities/setUserId.tsx';
import { Link } from 'react-router';
import { setItemId } from '../shared/utilities/setItemId.tsx'
import '../shared/css/App.css';
import '../shared/css/User.css';
import '../shared/css/ItemInformation.css'
import '../shared/css/Marketplace.css'

interface Item {
    id: number;
    name: string;
    genre: string;
    description: string;
    releaseYear: number;
    userId: number;
    user: {
        username: any,
    };
}

interface User {
    userId: number;
    username: string;
    userItems: [{
        id: number;
        userId: number;
        name: string;
    }]
}

function User() {
    const [itemInformation, setItemInformation] = useState<Item>();
    const [userInformation, setUserInformation] = useState<User>();
    //const [userItems, setUserItems] = useState([]);

    useEffect(() => {
        getItemInformation();
        getUserInformation();
    }, []);

    var userItemss: any[] = [];
   
    const toItem = (event: any) => {
        setItemId(event);
    };

  
    const contents = userInformation === undefined
        ? <p>ttt</p>
        : 
        
        <div className="user-items-wrapper">
            <div className="user-information-wrapper-title">
                <div id="user-information-section-name">{userInformation.username}</div>
            </div>
            <div id="grid-user-sections">{userInformation.userItems.map(item => <><Link to={"/marketplace/" + item.id} key={item.id} className="user-navigate-items" onClick={() => toItem(item.id)}>
                <div className="user-items-item"><div id="user-items-item-name">{item.name}</div></div>
        </Link>
            <button className="user-items-delete" onClick={() => deleteItem(item.id)}>Delete</button></>
            )
            }
            </div>
        </div>
      

    const userInformationName = userInformation === undefined
        ? <p>tttt</p>
        : <div>{userInformation.username}</div>

    return (

        //<><div className="page-header">ww</div>
        <>
            <div className="site-content">
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

async function getUserInformation() {
    const response = await fetch('/api/Users/' + userId);
    console.log(response, "response")
    if (response.ok) {
        const data = await response.json();
        setUserInformation(data);
        console.log("data", data)
        console.log("userInfo", userInformation)
    }
    }

    async function deleteItem(id: number) {
        await fetch('/api/Items/' + id, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" }
        });
        getUserInformation();
        /*  for (const use of item) {
              if (use.id == id) {
                  const oneItem = setItemInformation(item.filter(((item: { id: number; }) => item.id !== itemId)));
                  console.log("ee", oneItem)
                  return "";
              }
          } */
    }
    /*
       const showUserItems = () => {
           var str = "";
           const separator = ", ";
           var items: any = [];
           console.log("wwqq",)
           console.log("test12")
           if (userInformation) {
               console.log("tttttt", userInformation.items)
               for (const use of userInformation.items) {
                   if (userId == use['userId']) {
                       console.log("checked")
                       items.push(use);
                   }
               }
               console.log("wwwww", items);
               str = items.join([separator])
               var realArray = str.split(',');
               return "";
           }
       };
       */
}

export default User;