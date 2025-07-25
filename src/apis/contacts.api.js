


import AxiosInstance from "../utils/axiosInstance.utils";

export const sendContactData =async(fullName,emailAddress,subject,message)=>{
    try {
        const response = await AxiosInstance.post("/api/contact", {
            fullName,
            emailAddress,
            subject,
            message,
        });
        return response;
    } catch (error) {
        console.log(error);
    }
}