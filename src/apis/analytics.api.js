
import axiosInstance from "../utils/axiosInstance.utils";

const fetchAnalytics = async (shortId = 'checks') => {
    // This should be replaced with your actual API call
    // const dispatch = useDispatch();
    try {
        const { data } = await axiosInstance.get(`/api/analytics/${shortId}`, {
            withCredentials: true,
        });
        return data;
    } catch (error) {

    }





};


export default fetchAnalytics;