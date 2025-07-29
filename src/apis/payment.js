import axiosInstance from "../utils/axiosInstance.utils"

const handlePayment = async ({ userId = "", amount, plan }) => {


    const loadRazorpayScript = () => {
        return new Promise((resolve) => {
            const script = document.createElement('script');
            script.src = 'https://checkout.razorpay.com/v1/checkout.js';
            script.onload = () => resolve(true);
            script.onerror = (err) => {
                alert('run')
                console.error("Razorpay SDK failed", err);
                resolve(false);
            };
            document.body.appendChild(script);
        });
    };
    const res = await loadRazorpayScript();
    if (!res) {
        alert('Razorpay SDK failed to load');
        return;
    }



    const mainAmount = amount * 100
    if (!userId || !mainAmount) {
        throw new Error("userId and mainAmount must be needed")
    }


    const { data } = await axiosInstance.post('/api/payment/create-order', { userId, amount: mainAmount, plan }, { withCredentials: true })

    //make option
    const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID, // load from .env (or hardcode temporarily)
        amount: data.order.amount,
        currency: data.order.currency,
        name: 'shortly by d-hope',
        description: 'Test Transaction',
        order_id: data.order.id,
        handler: async function (response) {
            await axiosInstance.post('/api/payment/verify-payment', {
                ...response,
                orderId: data.order.id,
                userId: userId,
                amount: mainAmount
            }, { withCredentials: true });

        },
        prefill: {
            name: 'Test User',
            email: 'test@example.com',
        },
        notes: {
            app: 'URL Shortener',
        },
        theme: {
            color: '#6366F1',
        },
    };


    const razor = new window.Razorpay(options);
    razor.open();

    return res;
}



export default handlePayment