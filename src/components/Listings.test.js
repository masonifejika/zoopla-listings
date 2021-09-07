import { render, screen } from '@testing-library/react';
import Listings from './Listings';
import ListingsContext from '../ListingsContext';

test('the listings are rendered correctly on the page as a list', async () => {

    const listingsStore = {
        listingsData: [
            {
                id: 101,
                image: 'image1.jpg',
                description: 'Number 101',
                address: 'One Oh One Road, London',
                postcode: 'NW1',
                price: 610000,
                noOfBedrooms: 3,
                noOfBathrooms: 1,
                noOfReceptions: 1,
                propertyType: 'semi-detached house',
                listingDate: '2021-06-01',
                status: 'active'
            },
            {
                id: 102,
                image: 'image2.jpg',
                description: 'Number 102',
                address: 'One Oh Two Road, London',
                postcode: 'NW2',
                price: 620000,
                noOfBedrooms: 3,
                noOfBathrooms: 1,
                noOfReceptions: 1,
                propertyType: 'detached house',
                listingDate: '2021-06-02',
                status: 'expired'
            },
            {
                id: 103,
                image: 'image3.jpg',
                description: 'Number 103',
                address: 'One Oh Three Road, London',
                postcode: 'NW3',
                price: 630000,
                noOfBedrooms: 3,
                noOfBathrooms: 1,
                noOfReceptions: 1,
                propertyType: 'terraced house',
                listingDate: '2021-06-03',
                status: 'active'
            }
        ]
    };

    render(
        <ListingsContext.Provider value={listingsStore}>
            <Listings />
        </ListingsContext.Provider>
    );

    const h2Element = await screen.findByRole('heading');
    await expect(h2Element).toHaveTextContent('Showing 3 properties for sale in');

    const listingsParentElement = screen.getByTestId('listings');
    expect(listingsParentElement).toBeInTheDocument();

    const listingListItems = screen.getAllByTestId(/listing-id-/);
    await expect(listingListItems).toHaveLength(3);

    const listing1 = screen.getByTestId('listing-link-101');
    const listing2 = screen.getByTestId('listing-link-102');
    const listing3 = screen.getByTestId('listing-link-103');
    expect(listing1).toBeInTheDocument();
    expect(listing2).toBeInTheDocument();
    expect(listing3).toBeInTheDocument();
    expect(listing1).toHaveAttribute('href', 'https://www.zoopla.co.uk/for-sale/details/101/');
    expect(listing2).toHaveAttribute('href', 'https://www.zoopla.co.uk/for-sale/details/102/');
    expect(listing3).toHaveAttribute('href', 'https://www.zoopla.co.uk/for-sale/details/103/');
    expect(listing1).toHaveAttribute('data-listing-status', 'active');
    expect(listing2).toHaveAttribute('data-listing-status', 'expired');
    expect(listing3).toHaveAttribute('data-listing-status', 'active');

    // Further tests of the individual listing can be found in component/Listing.test.js

});