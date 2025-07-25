import { useEffect, useState } from "react";
import Button from "../Button";
import Input from "../Input";
import { useSelector } from "react-redux";
import { createShortUrl, createShortUrlWithUser } from "../../apis/createShortUrl.Api";
import ToastMessage from "../../utils/toast";
import isValidURL from "../../apis/validator";

export default function InputWithButton() {
    const [url, setUrl] = useState("");
    const [slug, setSlug] = useState("");
    const [shortUrl, setShortUrl] = useState("");
    const [copied, setCopied] = useState(false);
    const [loading, setLoading] = useState(false);
    const { user, isAuthenticated } = useSelector((state) => state.auth);

    const [validUrl, setValidUrl] = useState(false);

   
    const handleSubmit = async (e) => {
        setLoading(true);
        setShortUrl("");
        setCopied(false);
        try {
            let data;
            if (isAuthenticated) {
                data = await createShortUrlWithUser({
                    user: user?._id,
                    url,
                    slug: slug,
                });
            } else {
                data = await createShortUrl(url);
            }

            if (data) {
                setShortUrl(data.fullUrl);
                ToastMessage(data.message);
                setUrl("");
                setSlug("")
            }
        } catch (err) {
        } finally {
            setLoading(false);
        }
    };

    const handleCopy = () => {
        if (shortUrl) {
            navigator.clipboard.writeText(shortUrl);
            setCopied(true);
            ToastMessage("Copied url successfully");
            setTimeout(() => setCopied(false), 1200);
        }
    };


    useEffect(() => {
        setValidUrl(isValidURL(url))
    }, [url])

    return (
        <div>
            <div className="max-w-7xl flex flex-col md:px-0 px-10 justify-center items-center">
                <div className="md:w-3xl w-full  relative overflow-hidden flex items-center">
                    <div className="w-full">
                        <Input
                            type="text"
                            value={url}
                            placeholder="Enter your Long url..."
                            onChange={(e) => setUrl(e.target.value)}
                        />
                    </div>
                    <div className="absolute top-1/2 right-2 transform -translate-y-1/2">
                        <Button
                            onClick={handleSubmit}
                            className="md:w-50"
                            text={loading ? "Shortening..." : "Short Url"}
                            type="submit"
                            loading={loading}
                            disabled={!validUrl}
                        />
                    </div>
                </div>
                <div className="md:w-3xl w-full">
                    {shortUrl && (
                        <div className="w-full mt-8 p-3  border border-blue-200 rounded flex flex-col items-center">
                            <span className="text-md text-gray-100 font-medium mb-1 font-space-gro">
                                your short url :
                            </span>
                            <div className="flex items-center gap-2 w-full">
                                <Input
                                    className="cursor-not-allowed outline-none text-amber-50"
                                    readOnly={true}
                                    value={shortUrl}
                                    onFocus={(e) => {
                                        e.target.select();
                                    }}
                                />
                                <Button
                                    onClick={handleCopy}
                                    text={copied ? "Copied!" : "Copy"}
                                    className="cursor-pointer"
                                    type="button"
                                    disabled={copied}
                                    ariaLabel="Copy short url"
                                    icon={
                                        copied ? (
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="currentColor"
                                                className="w-4 h-4 text-green-600"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M4.5 12.75l6 6 9-13.5"
                                                />
                                            </svg>
                                        ) : (
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="currentColor"
                                                className="w-4 h-4"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M8 16h8a2 2 0 002-2V8a2 2 0 00-2-2H8a2 2 0 00-2 2v6a2 2 0 002 2zm0 0v2a2 2 0 002 2h4a2 2 0 002-2v-2"
                                                />
                                            </svg>
                                        )
                                    }
                                />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}