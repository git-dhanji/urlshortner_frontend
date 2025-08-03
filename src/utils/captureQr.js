


const shortlyQrCapture = async (url, qrname) => {
    try {
        const imageUrl = url;
        const img = new Image();
        img.crossOrigin = "anonymous"; // Needed
        img.src = imageUrl;

        img.onload = () => {
            const padding = 10;
            const canvasWidth = img.width + padding * 2;
            const canvasHeight = img.height + padding * 2;

            const canvas = document.createElement("canvas");
            canvas.width = canvasWidth;
            canvas.height = canvasHeight;

            const ctx = canvas.getContext("2d");

            // Draw rounded white background
            const radius = 30;
            ctx.fillText = 'he'
            ctx.fillStyle = "#ffffff";
            ctx.beginPath();
            ctx.moveTo(radius, 0);
            ctx.lineTo(canvas.width - radius, 0);
            ctx.quadraticCurveTo(canvas.width, 0, canvas.width, radius);
            ctx.lineTo(canvas.width, canvas.height - radius);
            ctx.quadraticCurveTo(canvas.width, canvas.height, canvas.width - radius, canvas.height);
            ctx.lineTo(radius, canvas.height);
            ctx.quadraticCurveTo(0, canvas.height, 0, canvas.height - radius);
            ctx.lineTo(0, radius);
            ctx.quadraticCurveTo(0, 0, radius, 0);
            ctx.closePath();
            ctx.fill();

            // Draw QR code in center with padding
            const qrX = padding;
            const qrY = padding;
            ctx.drawImage(img, qrX, qrY);
            const link = document.createElement("a");
            link.download = `${qrname}-qrcode.png`;
            link.href = canvas.toDataURL("image/png");
            link.click();
        };

        
        img.onerror = () => {
            alert("Failed to load image. CORS may not be configured correctly.");
        };

        return 'screen shot capture'
    } catch (error) {
        console.log(error)
    }
}


export default shortlyQrCapture