


export default function ShowQrCode({ url, state }) {
    return (
        <>
            {
                <div className="md:min-h-auto md:min-w-1/4  bg-white drop-shadow-2xl bg-blend-color z-20 fixed -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-2xl">
                    <div className="absolute top-0 right-0 md:px-3 px-2  rounded-full cursor-pointer z-50 text-[20px] "
                        onClick={() => state(false)}
                    >
                        x
                    </div>
                    <div className="md:h-80 h:50 md:w-full w-50 rounded-2xl relative">

                        <div className="h-full w-8  absolute hidden md:block top-0 left-0 border-r border-slate-700">
                            <div className="w-ful pt-2 h-full text-center ">
                                <span className="">D.</span>
                            </div>
                        </div>

                        <p className="w-full h-8  absolute hidden md:block top-0 right-0 border-b border-slate-700">

                        </p>
                        <p className="h-full w-8  absolute hidden md:block top-0 right-0 border-l border-slate-700">

                        </p>
                        <div className="w-full h-8  absolute hidden md:block bottom-0 right-0 border-t border-slate-700">
                            <div className="w-ful pt-2 h-full text-center ">
                                <span className="uppercase">shortly.by</span>
                            </div>
                        </div>

                        <div className="w-full h-full md:p-8 p-4">
                            <div className="bg-green-400 w-full h-full">
                                <img src={url} className="w-full h-full" />
                            </div>
                        </div>

                    </div>


                </div>
            }

        </>
    )
}