import React, { useState, useEffect } from "react"
import InventoryList from './InventoryList.jsx'
import { getAllInventory } from '../services/inventory'
import { handleDecrementClickHelper, handleIncremementClickHelper } from '../services/events'
import uuid from 'react-uuid';
import useSubscribe from "../clientlib/customHook.js";

//! Can pass props to Display {database, collection, query}, then just pass those variables as args into useSubscribe(database, collection, query)
const Display = () => {
  const {inventoryList, clientId} = useSubscribe('inventoryDemo', 'inventoryitems', '{}');
  // const [ inventoryList, setInventoryList ] = useState({});
  // const [ clientId, setClientId ] = useState(uuid());
  

  // useEffect(() => {
  //   //adding list of params to query
  //   //   const params = {
  //   //     type: 'public',
  //   //     app_id: APP_ID,
  //   //     app_key: APP_KEY,
  //   //     q: id,
  //   // }
  //   // fetch(URL + new URLSearchParams(params))
  //   // const source = new EventSource(`/event/?id=${userId}`);
  //   //return object from message 
  //   // { type: (get, update, insert, delete)
  //   //   data: if get --> normal query response 
  //   //         else --> change stream
  //   // }
  //   const source = new EventSource(`https://localhost:3001/event/?id=${userId}&database=inventoryDemo&collection=inventoryitems&query={}`);
  //   source.onmessage = e => {
  //     const {type, data} = JSON.parse(e.data);
  //     switch (type) {
  //       case 'get':
  //         {
  //           console.log('Get case fired');
  //           const obj = {};
  //           for(let i = 0; i < data.length; i++){
  //             obj[data[i]._id] = data[i];
  //             // delete obj[data[i]._id]._id; 
  //           }
  //           setInventoryList(obj);
  //           break;
  //         }
  //       case 'insert' :
  //         {
  //           console.log('Insert case fired');
  //           // {
  //           //   "item" : "iphone 5",
  //           //   "quantity" : 15,
  //           //   "description" : "used",
  //           //   "price" : 75
  //           // }
  //           //! Don't I need document _id?
  //           const newItem = data
  //           console.log(newItem);
  //           const id = data.documentKey._id;
  //           console.log(id);
  //           setInventoryList((previousInventoryList) => 
  //           {
  //             const updatedInventoryList = JSON.parse(JSON.stringify(previousInventoryList));
  //             Object.assign(updatedInventoryList[id], newItem);
  //             return updatedInventoryList;
  //           });
  //           break;
  //         }
  //       case 'update' :
  //         {
  //           console.log('Update case fired');
  //           // console.log(data);
  //           const update = data.updateDescription.updatedFields;
  //           const id = data.documentKey._id;
  //           console.log(`Updated data: ${update}\nDocument _id: ${id}`);
  //           setInventoryList((previousInventoryList) => 
  //           {
  //             const updatedInventoryList = JSON.parse(JSON.stringify(previousInventoryList));
  //             Object.assign(updatedInventoryList[id], update);
  //             return updatedInventoryList;
  //           });
  //           break;
  //         }
  //       case 'delete' :
  //         {
  //           console.log('Delete case fired');
  //           break;
  //         }
  //     }

  //     // const updatedInventoryList = JSON.parse(JSON.stringify(InventoryList));

  //   }

  // }, [clientId])

  //useEffect is called once to get initial data from DB - empty array brackets as 2nd param enables useEffect to only be called once
  // useEffect(() => {
  //   getAllInventory()
  //     .then((data) => {
  //       //the result from getAllInventory is an array, it needs to be converted to an object before setting state
  //       const obj = {};
  //       for(let i = 0; i < data.length; i++){
  //         obj[data[i]._id] = data[i];
  //         // delete obj[data[i]._id]._id; 
  //       }
  //       setInventoryList(obj);
  //     })
  // }, [])

  //increment/decrement click function
  const handleIncDecClick = (id, field, value) => {
    handleDecrementClickHelper(id, field, value)
      // .then((data) => {
        //update the state, must copy object so React updates state
        // const obj = JSON.parse(JSON.stringify(inventoryList));
        // obj[data[0]._id] = data[0];
        // setInventoryList(obj);
    // })
  }

  //increment click function
  // const handleIncremementClick = async (id, field, value) => {
  //   await handleIncremementClickHelper(id, field, value)
  //     .then((data) => {
  //       //update the state
  //       const obj = JSON.parse(JSON.stringify(inventoryList));
  //       obj[data[0]._id] = data[0];
  //       setInventoryList(obj);
  //     })
  // }

  return (
    <InventoryList
      clientId={clientId} 
      inventoryList={inventoryList}
      handleIncDecClick={handleIncDecClick}
      // setClientId={setClientId}
    />
);
}

export default Display;