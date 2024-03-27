import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const ListedBooks = () => {
    return (
        <div>
            <h1 className="text-center font-bold text-[28px] text-[#131313] bg-[#1313130D] px-3 py-8 rounded-2xl mb-8">Books</h1>
            <div className="flex justify-center mb-[56px]">
                <select className="outline-none border-none bg-[#23BE0A] p-4 rounded-2xl text-white font-semibold problem">
                    <option disabled selected>Pick your favorite Simpson</option>
                    <option>Homer</option>
                    <option>Marge</option>
                    <option>Bart</option>
                    <option>Lisa</option>
                    <option>Maggie</option>
                </select>
            </div>

            <div>
                <div role="tablist" className="tabs tabs-lifted">
                    <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Tab 1" checked/>
                    <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">Tab content 1</div>

                    <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Tab 2" checked/>
                    <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">Tab content 2</div>
                </div>
            </div>
        </div>
    );
};

export default ListedBooks;