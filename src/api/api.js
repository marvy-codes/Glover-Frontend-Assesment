import axios from 'axios';

// eslint-disable-next-line
export default {
    getData(){
        return (
            axios.get("https://rest.bandsintown.com/artists/john%20legend/events?app_id=0ab49580-c84f-44d4-875f-d83760ea2cfe")
        );
        }
};
 