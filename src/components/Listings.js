
import { useEffect, useContext } from 'react';
import './Listings.scss';
import ListingsService from '../services/ListingsService';
import ListingsContext from '../ListingsContext';
import Listing from './Listing';

const Listings = () => {

    const listingsStore = useContext(ListingsContext);

    useEffect(() => {
        const loadListings = async () => {
            const listingsData = await ListingsService.getAll();
            listingsStore.setListingsData(listingsData.data);
        };
        loadListings();
    }, []);

    return (
        <>
            <h2>Showing {listingsStore.listingsData.length} properties for sale in Ruislip, HA4</h2>
            <ul id="listings" data-testid="listings">
                {listingsStore.listingsData.map(listing => (
                    <li key={listing.id} data-testid={'listing-id-' + listing.id}>
                        <Listing data={listing} />
                    </li>
                ))}
            </ul>
        </>
    )

};

export default Listings;