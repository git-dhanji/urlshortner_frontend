
import axiosInstance from "../utils/axiosInstance.utils";

const fetchAnalytics = async (shortId = 'checks') => {

    try {
        const { data } = await axiosInstance.get(`/api/analytics/${shortId}`, {
            withCredentials: true,
        });
        return data;
    } catch (error) {

    }





};


export default fetchAnalytics;