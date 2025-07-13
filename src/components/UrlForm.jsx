import { useState } from "react";
import { Button, Input } from "./Index";

import { createShortUrl } from "../apis/createShortUrl.Api";

function Toast({ message, type = "success", onClose }) {
  return (
    <div
      className={`fixed top-6 right-6 z-50 px-4 py-2 rounded shadow-lg text-white text-sm font-semibold transition-all animate-fade-in ${
        type === "success" ? "bg-green-600" : "bg-red-600"
      }`}
    >
      {message}
      <button
        onClick={onClose}
        className="ml-4 text-white font-bold"
        type="button"
      >
        ×
      </button>
    </div>
  );
}

export default function UrlForm({ onSubmit }) {
  const [url, setUrl] = useState("https://www.google.com");
  const [shortUrl, setShortUrl] = useState("");
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState({
    show: false,
    message: "",
    type: "success",
  });

  const showToast = (message, type = "success") => {
    setToast({ show: true, message, type });
    setTimeout(() => setToast({ show: false, message: "", type }), 1500);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setShortUrl("");
    setCopied(false);
    try {
      const data = await createShortUrl(url);
      if (data) {
        setShortUrl(data);
        showToast("Short URL created successfully!", "success");
        setUrl("");
      }
    } catch (err) {
      showToast("Failed to create short URL.", "error");
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    if (shortUrl) {
      navigator.clipboard.writeText(shortUrl);
      setCopied(true);
      showToast("Short URL copied!", "success");
      setTimeout(() => setCopied(false), 1200);
    }
  };

  return (
    <>
      {toast.show && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() =>
            setToast({ show: false, message: "", type: "success" })
          }
        />
      )}
      <form
        className="w-full max-w-md flex flex-col items-center gap-4 p-4 bg-blend-darken border-2 border-white rounded-xl shadow-md sm:w-96 xs:w-full"
        onSubmit={handleSubmit}
      >
        <div>
          <p className="text-lg text-amber-50 font-sans">Url shortner</p>
        </div>

        <div className="w-full flex flex-col gap-8 ">
          <Input
            type="text"
            value={url}
            placeholder="Enter your url..."
            onChange={(e) => setUrl(e.target.value)}
            className="w-full outline-2 outline-blue-500 text-blue-300"
          />
          <Button
            text={loading ? "Shortening..." : "Short Url"}
            type="submit"
            className="w-full cursor-pointer"
            loading={loading}
            disabled={!url}
          />
        </div>

        {shortUrl && (
          <div className="w-full mt-8 p-3 bg-gray-700 border border-blue-200 rounded flex flex-col items-center">
            <span className="text-sm text-gray-100 font-medium mb-1 font-mono">
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
      </form>
    </>
  );
}
