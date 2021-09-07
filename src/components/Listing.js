import { useContext } from "react";
import ListingsService from "../services/ListingsService";
import ListingsContext from '../ListingsContext';
import './Listing.scss';
import BedIcon from './icons/BedIcon';
import BathIcon from './icons/BathIcon';
import ChairIcon from './icons/ChairIcon';
import LocationIcon from './icons/LocationIcon';
import ExpiredIcon from './icons/ExpiredIcon';

const Listing = (props) => {

    const listing = props.data;
    const listingsStore = useContext(ListingsContext);

    const getNoOfDaysAgo = (date) => {
        let noOfDaysAgo = 0;
        const now = new Date();
        const listingDate = new Date(date);
        noOfDaysAgo = Math.round((now - listingDate) / 8.64e+7);
        return noOfDaysAgo;
    };

    const updateListingStatus = (e) => {
        if (e) { e.preventDefault(); }
        listing.status = (listing.status === 'active') ? 'expired' : 'active';
        ListingsService.update(listing.id, listing).then(() => {
            listingsStore.updateListingStatus(listing.id, listing.status);
        }).catch(error => alert('Oops! There was an error updating the listing'));
    };

    return (
        <>
            <a href={`https://www.zoopla.co.uk/for-sale/details/${listing.id}/`} data-listing-status={listing.status} data-testid={'listing-link-' + listing.id} target="_blank" rel="noreferrer">
                <div className="listing-photo-container" data-testid="listing-photo-container" style={{ backgroundImage: `url(${listing.image})` }}></div>
                <div className="listing-details">
                    <span className="listing-price" data-testid="listing-price">£{listing.price.toLocaleString('en')}</span>
                    <ul className="listing-features">
                        <li data-testid="listing-beds"><BedIcon />{listing.noOfBedrooms}</li>
                        <li data-testid="listing-baths"><BathIcon />{listing.noOfBathrooms}</li>
                        <li data-testid="listing-recs"><ChairIcon />{listing.noOfReceptions}</li>
                    </ul>
                    <span className="listing-strapline" data-testid="listing-strapline">{listing.noOfBedrooms} bed {listing.propertyType} for sale</span>
                    <span className="listing-address" data-testid="listing-address"><LocationIcon />{listing.address + ' ' + listing.postcode}</span>
                    <p className="listing-description" data-testid="listing-description">{listing.description.substring(0, 140)}... <u>more</u></p>
                    <div className="buttons-container">
                        <button onClick={updateListingStatus} data-testid="expire-listing-button"><ExpiredIcon />Expire This Listing</button>
                    </div>
                </div>
                <div className="listing-expired">
                    <div className="listing-information" data-testid="listing-information">
                        {listing.noOfBedrooms} bed {listing.propertyType} previously on sale for £{listing.price.toLocaleString('en')}
                        <em> ({listing.address + ' ' + listing.postcode})</em>
                    </div>
                    <div className="expired-headline">
                        <ExpiredIcon />This listing has expired
                    </div>
                    <div className="buttons-container">
                        <button onClick={updateListingStatus} data-testid="reactivate-listing-button">Reactivate This Listing</button>
                    </div>
                </div>
            </a>
            <div className="listing-date">
                <span data-testid="listing-days-ago">Listed {getNoOfDaysAgo(listing.listingDate)} days ago </span>
                <span>({(new Date(listing.listingDate)).toDateString()})</span>
            </div>
        </>
    ) 

};

export default Listing;