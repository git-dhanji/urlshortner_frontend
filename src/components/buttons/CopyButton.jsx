import { useState } from 'react';

export default function CopyButton({ copyText = "copy text here", type = "primary", className = "" }) {
    const [copiedIndex, setCopiedIndex] = useState(false);

    const handleCopy = (text) => {
        navigator.clipboard.writeText(text);
        setCopiedIndex(true);
        setTimeout(() => setCopiedIndex(false), 2000);
    };


    switch (type) {
        case 'primary':
            return (
                <button
                    onClick={() => handleCopy(copyText)}
                    className={`cursor-pointer flex-1 px-3 py-2 text-sm rounded-lg font-medium  transition-all duration-200 ${copiedIndex === true
                        ? "bg-emerald-500 text-white"
                        : "bg-slate-600/50 text-gray-300 hover:bg-slate-600 hover:text-white"
                        }`}
                >
                    {copiedIndex === true ? "Copied!" : "Copy"}
                </button>
            );
        case 'copy-icon':
            return (
                <button
                    onClick={() => handleCopy(copyText)}
                    className={`p-2 cursor-pointer  text-gray-300 hover:text-blue  rounded-lg transition-all duration-200 ${copiedIndex === true
                        ? "bg-emerald-500 text-white"
                        : "bg-slate-700 text-gray-300"
                        }}`}
                    title="Copy URL"
                >
                    <svg className={`${copiedIndex === true ? 'w-5 h-5' : 'w-4 h-4'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2V8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                </button>
            )
    }
}