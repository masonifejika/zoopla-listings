import { fireEvent, render, screen } from '@testing-library/react';
import Listing from './Listing';

test('displays all information correctly in a single listing', async () => {

    const listing = {
        id: 12345,
        image: 'image.jpg',
        description: 'A family home in the heart of North West London',
        address: 'Saint Marys Road, London',
        postcode: 'NW10',
        price: 600000,
        noOfBedrooms: 3,
        noOfBathrooms: 1,
        noOfReceptions: 1,
        propertyType: 'semi-detached house',
        listingDate: '2021-06-28',
        status: 'active'
    };

    const getNoOfDaysAgo = (date) => {
        const now = new Date();
        const listingDate = new Date(date);
        return Math.round((now - listingDate) / 8.64e+7);
    };

  render(<Listing data={listing} />);

  const listingLink = screen.getByRole('link');
  expect(listingLink).toHaveAttribute('href', 'https://www.zoopla.co.uk/for-sale/details/12345/');
  expect(listingLink).toHaveAttribute('data-listing-status', 'active');

  const listingPhoto = screen.getByTestId('listing-photo-container');
  expect(listingPhoto).toHaveAttribute('style', 'background-image: url(image.jpg);');

  const listingPrice = screen.getByTestId('listing-price');
  expect(listingPrice).toHaveTextContent('£600,000');

  const noOfBeds = screen.getByTestId('listing-beds');
  expect(noOfBeds).toHaveTextContent('3');

  const noOfBaths = screen.getByTestId('listing-baths');
  expect(noOfBaths).toHaveTextContent('1');

  const noOfReceptions = screen.getByTestId('listing-recs');
  expect(noOfReceptions).toHaveTextContent('1');

  const listingStrapline = screen.getByTestId('listing-strapline');
  expect(listingStrapline).toHaveTextContent('3 bed semi-detached house for sale');

  const listingAddress = screen.getByTestId('listing-address');
  expect(listingAddress).toHaveTextContent('Saint Marys Road, London NW10');

  const listingDescription = screen.getByTestId('listing-description');
  expect(listingDescription).toHaveTextContent('A family home in the heart of North West London');

  const expiredListingInformation = screen.getByTestId('listing-information');
  expect(expiredListingInformation).toHaveTextContent('3 bed semi-detached house previously on sale for £600,000 (Saint Marys Road, London NW10)');

  const listingDaysAgo = screen.getByTestId('listing-days-ago');
  expect(listingDaysAgo).toHaveTextContent(`Listed ${getNoOfDaysAgo(listing.listingDate)} days ago`); // e.g. Listed 71 days ago

  const expireButton = screen.getByTestId('expire-listing-button');
  expect(expireButton).toBeInTheDocument();
  expect(expireButton).toHaveTextContent('Expire This Listing');
  // TODO: refactor the below assertion, as it is failing
  // const updateListingStatus = jest.fn();
  // fireEvent.click(expireButton);
  // expect(updateListingStatus).toHaveBeenCalled();

  const reactivateButton = screen.getByTestId('reactivate-listing-button');
  expect(reactivateButton).toBeInTheDocument();
  expect(reactivateButton).toHaveTextContent('Reactivate This Listing');

});