const SortBy = () => {
    return (
        <div className="mt-8 mb-12 flex justify-center">
            <div className="bg-[#23BE0A] px-3 py-2 rounded-lg">
                <select name="" id="" className="border-none outline-none text-white text-lg font-semibold bg-[#23BE0A]">
                    <option value="totalPages" defaultChecked>Sort By</option>
                    <option value="rating">Rating</option>
                    <option value="totalPages">Number of Pages</option>
                    <option value="yearOfPublish">Published Year</option>
                </select>
            </div>
        </div>
    );
};

export default SortBy;