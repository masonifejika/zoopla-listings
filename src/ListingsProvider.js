import { useState } from 'react';
import ListingsContext from './ListingsContext';

const ListingsProvider = (props) => {

    const [listingsData, setListingsData] = useState([]);

    const updateListingStatus = (listingId, status) => {
        const listingIndex = listingsData.findIndex(l => l.id === listingId);
        listingsData[listingIndex].status = status;
        setListingsData([...listingsData]);
    };

    const listingsStore = {
        listingsData: listingsData,
        setListingsData,
        updateListingStatus
    };

    return (
        <ListingsContext.Provider value={listingsStore}>
            {props.children}
        </ListingsContext.Provider>
    )

};

export default ListingsProvider;