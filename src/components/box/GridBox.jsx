import { Link } from "@tanstack/react-router";
import shortlyQrCapture from "../../utils/captureQr";
import { CTAButton } from "../Index";
import { useState } from "react";

export default function GridBox({
    state,
    urlState,
    children,
    className,
    onClick,
    url = [],
    index
}) {
    const [copiedIndex, setCopiedIndex] = useState(null);

    const copyToClipboard = (text, index) => {
        navigator.clipboard.writeText(text);
        setCopiedIndex(index);
        setTimeout(() => setCopiedIndex(null), 2000);
    };

    return (
        <div>
            <>
                <div className="pt-2">
                    <h3 className="font-semibold text-white mb-2 truncate">
                        {url.redirect_url}
                    </h3>

                    <div className="flex justify-between items-center mb-3">
                        <p className="text-xs text-indigo-400 font-mono">
                            {url.short_url}
                        </p>
                        <span className="text-xs text-gray-400">{url.clicks} clicks</span>
                    </div>

                    <div className="h-[1px] w-full bg-slate-500 mb-3" />

                    <div className="flex justify-between items-start">
                        {url.qrcode && (
                            <div
                                className="h-20 w-20 bg-white rounded-md overflow-hidden cursor-pointer"
                                onClick={() => { state(true), urlState(url?.qrcode) }}
                            >
                                <img
                                    src={url.qrcode}
                                    alt="qr code"
                                    className="h-full w-full object-contain"
                                />
                            </div>
                        )}

                        <div className="flex flex-col items-end">
                            <p className="text-green-400 text-xs">
                                {new Date(url.createdAt).toLocaleDateString()}
                            </p>
                            {
                                url?.qrcode && (<CTAButton
                                    text="Download QR"
                                    size="sm"
                                    className="h-8 mt-4 border border-slate-500 rounded font-normal hover:bg-black hover:text-indigo-300"
                                    onClick={() => shortlyQrCapture(url?.qrcode, url.original_url)}
                                />)
                            }

                        </div>
                    </div>
                </div>

                <div className="mt-3 flex items-center space-x-2">
                    <button
                        onClick={() => copyToClipboard(url.redirect_url, index)}
                        className={`flex-1 px-3 py-2 text-xs rounded-lg font-medium transition ${copiedIndex === index
                            ? "bg-emerald-100 text-white"
                            : "bg-slate-600/50 text-gray-300 hover:bg-slate-600 hover:text-white"
                            }`}
                    >
                        {copiedIndex === index ? "Copied!" : "Copy"}
                    </button>

                    <Link
                        to={`/user/analytics/${url.short_url}`}
                        className="px-3 py-2 text-xs bg-indigo-500/20 text-indigo-300 rounded-lg hover:bg-indigo-500/30 transition"
                    >
                        📊
                    </Link>
                </div>
            </>
        </div>
    )
}

