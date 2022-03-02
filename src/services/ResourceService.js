import axios from 'axios';

// const RESOURCE_API_BASE_URL = "http://localhost:7777";
const RESOURCE_API_BASE_URL = "https://first-springboot-application.herokuapp.com";

class ResourceService {
    Resources() {
        return axios.get(RESOURCE_API_BASE_URL+'/all');
    }

    createResource(resource) {
        console.log(resource);
        return axios.post(RESOURCE_API_BASE_URL + '/ar', resource);
    }

    getResourceById(resourceId) {
        return axios.get(RESOURCE_API_BASE_URL + '/gr/' + resourceId);
    }

    updateResource(resource) {
        return axios.put(RESOURCE_API_BASE_URL + '/ur', resource);
    }

    deleteResource(resourceId) {
        return axios.delete(RESOURCE_API_BASE_URL + "/dr?id=" + resourceId);
    }
}

export default new ResourceService()