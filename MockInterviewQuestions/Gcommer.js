// https://example.gcommer.com/
// You can GET a list of users from https://example.gcommer.com/users
// Please write a component which requests this list from the server and displays the users' names in a list. (p or h1 tag)

// [
//     {
//       "id": "1",
//       "name": "Joe",
//       "favorites": { ...
//         "shape": "square",
//         "color": "red"
//       }
//     },
//     {
//       "id": "2",
//       "name": "Alice",
//       "favorites": {
//         "shape": "circle",
//         "color": "blue"
//       }
//     }
//   ]


import React from 'react'


// forgot export default
export default function dataList(){
    const [dataList, setDataList] = React.useState([])
    const [newFriendsItemList, setNewFriendsItemList] = React.useState([])


    // missed parentheses
    React.useEffect(() => {(
        getData()
    ), []})

    // forgot await, try catch
    async function getData(){
        try {
            let res =  await fetch('https://example.gcommer.com/users')
            let data = await res.json()
            setDataList(req.data)        
            return data.data            
        } catch (error) {
            console.error(error);            
        }
    }

    async function createNewFriendList(userKey){
        try {
            let res =  await fetch(`https://example.gcommer.com/user/${userKey}/friends`)
            let data = await res.json()
            setNewFriendsItemList(prevState => [...prevState, req.data])        
            return data.data            
        } catch (error) {
            console.error(error);            
        }
    }


    // map by key, maybe add async to wait for data to get done
    let itemsListedOut = dataList.map((x) => 
        <div>key={x.id}</div>,
        <p onClick={() => createNewFriendList(x.id)} >{x.name}</p>,
        <div style={{backgroundcolor: x.favorites.color}}>{x.favorites.color}</div>,
        <image src={x.favorites.animal}></image>
    )

    let newFriendsItemListedOut = dataList.map((x) => 
        <div>key={x.id}</div>,
        <p onClick={() => createNewFriendList()} >{x.name}</p>,
        <div style={{backgroundcolor: x.favorites.color}}>{x.favorites.color}</div>,
        <image src={x.favorites.animal}></image>
    )

return(
    <div>
        {itemsListedOut}
        {newFriendsItemListedOut}
    </div>
)
}

























// Now please, for each user, display their favorite things.
//   The favorite shape can be one of "square", "circle", or "triangle".
//   The color can be any valid CSS color.
//   The animal can be one of: