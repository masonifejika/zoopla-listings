import listingsAPI from '../ListingsAPI';

const ListingsService = {

    getAll: () => {
        return listingsAPI.get();
    },

    update: (id, data) => {
        return listingsAPI.put(`/${id}`, data);
    },

    add: (data) => {
        return listingsAPI.post(data);
    },

    delete: (id) => {
        return listingsAPI.delete(`/${id}`);
    }

};

export default ListingsService;