const BookReview = () => {
    return (
        <div className="hero">
            <div className="hero-content flex-col h-full lg:flex-row gap-10 items-start w-full p-0">

                <div className="lg:w-[49%] h-full flex justify-center items-center bg-[#1313130D] p-7 md:p-[72px] rounded-2xl">
                    <img src="https://i.ibb.co/HNV9gsh/pngwing-1.png" className="w-full"/>
                </div>

                <div className="lg:w-[51%]">
                    <h1 className="text-[#131313] text-3xl sm:text-[40px] font-bold mb-4 font-playfair">The Book title will be here</h1>
                    <p className="text-[#131313CC] font-work text-xl font-medium">By: Author Name here</p>
                    <hr className="my-4" />
                    <p className="text-[#131313CC] font-medium text-xl font-work">Fiction</p>
                    <hr className="my-4" />
                    <p><span className="font-bold text-[#131313] font-work">Review:</span> <span className="text-[#131313B3] font-work">Sit amet consectetur. Interdum porta pulvinar non sit aliquam. Aenean pulvinar blandit vel non enim elementum penatibus pellentesque ac. Nec accumsan euismod nulla adipiscing lectus. Morbi elementum a auctor erat diam tellus. Fermentum faucibus nulla enim ornare.
                        Id neque neque pretium enim platea urna non dictum. Faucibus dignissim ridiculus nibh tristique massa non.</span></p>

                    <div className="mt-12 flex gap-5 items-center" >
                        <p className="font-bold text-[#131313] font-work">Tag</p>
                        <div className="flex gap-3 items-center">
                            <a href="#" className='text-[#23BE0A] font-medium font-work bg-[#23BE0A0D] px-3 py-1 rounded-badge'>#fiction</a>
                            <a href="#" className='text-[#23BE0A] font-medium font-work bg-[#23BE0A0D] px-3 py-1 rounded-badge'>#fantasy</a>
                        </div>
                    </div>
                    <hr className="my-4" />
                    <table className="table">
                        <tr>
                            <td className="text-[#131313B3] font-work text-base font-medium">Number of Pages:</td>
                            <td className="text-[#131313] font-work text-base font-semibold">281</td>
                        </tr>
                        <tr>
                            <td className="text-[#131313B3] font-work text-base font-medium">Publisher:</td>
                            <td className="text-[#131313] font-work text-base font-semibold">281</td>
                        </tr>
                        <tr>
                            <td className="text-[#131313B3] font-work text-base font-medium">Year of Publishing:</td>
                            <td className="text-[#131313] font-work text-base font-semibold">281</td>
                        </tr>
                        <tr>
                            <td className="text-[#131313B3] font-work text-base font-medium">Rating:</td>
                            <td className="text-[#131313] font-work text-base font-semibold">281</td>
                        </tr>
                    </table>
                    <div className="flex gap-4 mt-6">
                        <button className="border-[1px] rounded-lg px-7 py-3 text-[#131313] font-semibold text-lg">Read</button>
                        <button className="bg-[#50B1C9] rounded-lg px-7 py-3 text-white font-semibold text-lg">Wishlist</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default BookReview;