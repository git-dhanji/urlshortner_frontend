import { Link } from "@tanstack/react-router";
import CopyButton from "../buttons/CopyButton";
import DeleteUrl from "../buttons/DeleteUrl";
import { CTAButton } from "../Index";
import shortlyQrCapture from "../../utils/captureQr";

export default function ListBox({
    url = []
}) {
    return (
        <div className="flex flex-col md:flex-row justify-between w-full md:pl-10">
            <div className="flex-1">
                <h3 className="font-semibold text-white mb-2 truncate">
                    {url.redirect_url}
                </h3>
                <p className="text-xs text-indigo-400 font-mono flex flex-wrap items-center space-x-2">
                    <CTAButton
                        text="Download QR"
                        size="sm"
                        className="h-7 border border-slate-500 rounded font-normal hover:bg-black hover:text-indigo-300 mr-2"
                        onClick={() => shortlyQrCapture(url.qrcode, url.original_url)}
                    />
                    <span>{url.short_url}</span>
                </p>
            </div>

            <div className="flex items-center space-x-4 mt-4 md:mt-0">
                <div className="text-center">
                    <p className="text-lg font-bold text-white">{url.clicks}</p>
                    <p className="text-xs text-gray-400">clicks</p>
                </div>

                <div className="flex items-center space-x-2">
                    <DeleteUrl id={url.short_url} />
                    <CopyButton copyText={url.redirect_url} type="copy-icon" />
                    <Link
                        to={`/user/analytics/${url.short_url}`}
                        className="px-3 py-2 text-xs bg-indigo-500/20 text-indigo-300 rounded-lg hover:bg-indigo-500/30 transition"
                    >
                        Analytics
                    </Link>
                </div>
            </div>
        </div>

    )
}