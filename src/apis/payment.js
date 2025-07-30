import axiosInstance from "../utils/axiosInstance.utils"

const handlePayment = async ({ userId = "", amount, plan, currency = "USD" }) => {


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


    const { data } = await axiosInstance.post('/api/payment/create-order', { userId, amount: mainAmount, plan, currency }, { withCredentials: true })

    //make option
    return new Promise((resolve, reject) => {
        const options = {
            key: import.meta.env.VITE_RAZORPAY_KEY_ID,
            amount: data.order.amount,
            currency: data.order.currency,
            name: 'Payment to Shortly-(Dhanji Kumar)',
            description: 'Thanks : for upgrading shortly ',
            order_id: data.order.id,
            handler: async function (response) {
                try {
                    const verifyRes = await axiosInstance.post('/api/payment/verify-payment', {
                        ...response,
                        orderId: data.order.id,
                        userId,
                        amount: mainAmount
                    }, { withCredentials: true });

                    resolve(verifyRes.data); // 🔥 Send this to the `paymentHandler`
                } catch (err) {
                    reject(err);
                }
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
    });
}



export default handlePayment