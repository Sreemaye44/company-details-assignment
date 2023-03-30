import React from "react";
import freeText from "../../assets/freetext.svg";

const MainBody = () => {
  return (
    <div className="w-10/12 py-4 bg-slate-100 text-sm">
      <h1 className="font-bold text-2xl mb-8 px-9">General Provisions</h1>

      {/* company description */}

      <div className="bg-white px-6 py-8 mx-3 rounded drop-shadow-sm ">
        <div className="flex">
          <div className="bg-[#4DA467] rounded-full px-1.5 text-white">
            <h2>1</h2>
          </div>
          <h2 className="px-2 font-bold">
            Company Description <span className="text-[#E02424]">*</span>
          </h2>
        </div>
        <p className="ml-7 mt-1">
          Provide a short introduction of the company for the stakeholders. You
          can drop establishment date, main activities, the sector(s) in which
          it is active, main values and etc. Note: Sectors can be identified
          according to categories, such as the public or private sector; or
          industry-specific categories.
        </p>

        <textarea
          id="message"
          rows="4"
          className=" mx-7 mt-5 block p-2.5 w-[64rem] text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Write here..."
        ></textarea>
        <div className=" ml-7 mt-2 flex justify-between text-xs">
          <div className="flex w-1/2">
            <img src={freeText} alt="" srcset="" />
            <p className="ml-1 text-[#6B7280]  font-semibold">
              Click here to see the sample answer
            </p>
          </div>
          <p className="text-[#6B7280]">Maximum 1000 character</p>
        </div>
      </div>
      {/* performance indicator */}

      <div className="bg-white px-6 py-8 mx-3 rounded mt-2 ">
        <div className="flex">
          <div className="bg-[#4DA467] rounded-full px-1.5 text-white">
            <h2>2</h2>
          </div>
          <h2 className="px-2 font-bold">
            Performance Indicator for your company{" "}
            <span className="text-[#E02424]">*</span>
          </h2>
        </div>
        <p className="ml-7 mt-1">
          Select key indicators you want graph visualise and fill data for
          reporting period. You can add your own indicators by clicking ‘Other’,
          but total number cannot exceed 8 indicators.
        </p>
        {/* input fields */}
        <div className="flex justify-between mt-6 ml-6">
          <div>
            <input type="checkbox" className="rounded-full" />
            <input
              type="text"
              value="Total Employee"
              className="border rounded p-2 ml-2 w-52 bg-slate-100 font-semibold text-[#494F58] "
              readOnly
            />
            <input
              type="text"
              placeholder="500"
              className="border rounded p-2 ml-2 bg-slate-100 font-semibold text-[#494F58] w-52 "
            />
          </div>
          <div>
            <input type="checkbox" className="rounded-full" />
            <input
              type="text"
              value="Customer in Countries"
              className="border rounded p-2 ml-2 bg-slate-100 font-semibold text-[#494F58] w-52"
              readOnly
            />
            <input
              type="text"
              placeholder="500"
              className="border rounded p-2 ml-2 bg-slate-100 font-semibold text-[#494F58] w-52"
            />
          </div>
        </div>
        {/* input fields */}
        <div className="flex justify-between mt-6 ml-6">
          <div>
            <input type="checkbox" className="rounded-full" />
            <input
              type="text"
              value="Yarly Sales Growth rate"
              className="border rounded p-2 ml-2 w-52 bg-slate-100 font-semibold text-[#494F58] "
              readOnly
            />
            <input
              type="text"
              placeholder="500"
              className="border rounded p-2 ml-2 bg-slate-100 font-semibold text-[#494F58] w-52 "
            />
          </div>
          <div>
            <input type="checkbox" className="rounded-full" />
            <input
              type="text"
              value="Industries served"
              className="border rounded p-2 ml-2 bg-slate-100 font-semibold text-[#494F58] w-52"
              readOnly
            />
            <input
              type="text"
              placeholder="500"
              className="border rounded p-2 ml-2 bg-slate-100 font-semibold text-[#494F58] w-52"
            />
          </div>
        </div>
        {/* input fields */}
        <div className="flex justify-between mt-6 ml-6">
          <div>
            <input type="checkbox" className="rounded-full" />
            <input
              type="text"
              value="Revenue"
              className="border rounded p-2 ml-2 w-52 bg-slate-100 font-semibold text-[#494F58] "
              readOnly
            />
            <input
              type="text"
              placeholder="500"
              className="border rounded p-2 ml-2 bg-slate-100 font-semibold text-[#494F58] w-52 "
            />
          </div>
          <div>
            <input type="checkbox" className="rounded-full" />
            <input
              type="text"
              value="Total Employee"
              className="border rounded p-2 ml-2 bg-slate-100 font-semibold text-[#494F58] w-52"
              readOnly
            />
            <input
              type="text"
              placeholder="500"
              className="border rounded p-2 ml-2 bg-slate-100 font-semibold text-[#494F58] w-52"
            />
          </div>
        </div>
        {/* input fields */}
        <div className="flex justify-between mt-6 ml-6">
          <div>
            <input type="checkbox" className="rounded-full" />
            <input
              type="text"
              value="Total Employee"
              className="border rounded p-2 ml-2 w-52 bg-slate-100 font-semibold text-[#494F58] "
              readOnly
            />
            <input
              type="text"
              placeholder="500"
              className="border rounded p-2 ml-2 bg-slate-100 font-semibold text-[#494F58] w-52 "
            />
          </div>
          <div>
            <input type="checkbox" className="rounded-full" />
            <input
              type="text"
              value="Total Employee"
              className="border rounded p-2 ml-2 bg-slate-100 font-semibold text-[#494F58] w-52"
              readOnly
            />
            <input
              type="text"
              placeholder="500"
              className="border rounded p-2 ml-2 bg-slate-100 font-semibold text-[#494F58] w-52"
            />
          </div>
        </div>
        {/* input fields */}
        <div className="flex justify-between mt-6 ml-6">
          <div>
            <input type="checkbox" className="rounded-full" />
            <input
              type="text"
              value="Total Employee"
              className="border rounded p-2 ml-2 w-52 bg-slate-100 font-semibold text-[#494F58] "
              readOnly
            />
            <input
              type="text"
              placeholder="500"
              className="border rounded p-2 ml-2 bg-slate-100 font-semibold text-[#494F58] w-52 "
            />
          </div>
          <div>
            <input type="checkbox" className="rounded-full" />
            <input
              type="text"
              value="Total Employee"
              className="border rounded p-2 ml-2 bg-slate-100 font-semibold text-[#494F58] w-52"
              readOnly
            />
            <input
              type="text"
              placeholder="500"
              className="border rounded p-2 ml-2 bg-slate-100 font-semibold text-[#494F58] w-52"
            />
          </div>
        </div>
        {/* input fields */}
        <div className="flex justify-between mt-6 ml-6">
          <div>
            <input type="checkbox" className="rounded-full" />
            <input
              type="text"
              value="Total Employee"
              className="border rounded p-2 ml-2 w-52 bg-slate-100 font-semibold text-[#494F58] "
              readOnly
            />
            <input
              type="text"
              placeholder="500"
              className="border rounded p-2 ml-2 bg-slate-100 font-semibold text-[#494F58] w-52 "
            />
          </div>
          <div>
            <input type="checkbox" className="rounded-full" />
            <input
              type="text"
              value="Total Employee"
              className="border rounded p-2 ml-2 bg-slate-100 font-semibold text-[#494F58] w-52"
              readOnly
            />
            <input
              type="text"
              placeholder="500"
              className="border rounded p-2 ml-2 bg-slate-100 font-semibold text-[#494F58] w-52"
            />
          </div>
        </div>
        {/* input fields */}
        <div className="flex justify-between mt-6 ml-6">
          <div>
            <input type="checkbox" className="rounded-full" />
            <input
              type="text"
              value="Total Employee"
              className="border rounded p-2 ml-2 w-52 bg-slate-100 font-semibold text-[#494F58] "
              readOnly
            />
            <input
              type="text"
              placeholder="500"
              className="border rounded p-2 ml-2 bg-slate-100 font-semibold text-[#494F58] w-52 "
            />
          </div>
          <div>
            <input type="checkbox" className="rounded-full" />
            <input
              type="text"
              value="Others"
              className="border rounded p-2 ml-2 bg-slate-100 font-semibold text-[#494F58] w-52"
              readOnly
            />
            <input
              type="text"
              value=""
              className=" rounded p-2 ml-2 font-semibold text-[#494F58] w-52"
              readOnly
            />
          </div>
        </div>
      </div>

      {/* key company Events */}
      <div className="bg-white px-6 py-8 mx-3 rounded drop-shadow-sm ">
        <div className="flex">
          <div className="bg-[#4DA467] rounded-full px-1.5 text-white">
            <h2>3</h2>
          </div>
          <h2 className="px-2 font-bold">
            Six KEY company events <span className="text-[#E02424]">*</span>
          </h2>
        </div>
        <p className="ml-7 mt-1">
          Please specify a month and provide short description of a key event
          during your reporting period
        </p>
        {/* dropdown */}
        <div className="flex ml-6 mt-6">
          <select name="cars" id="cars" className="w-64 p-2 rounded ">
            <option value="volvo">January 2022</option>
            <option value="saab">Saab</option>
          </select>
          <input
            type="text"
            placeholder="Description"
            name=""
            id=""
            className="border rounded p-1.5 w-full ml-7"
          />
        </div>
        {/* dropdown */}
        <div className="flex ml-6 mt-6">
          <select name="cars" id="cars" className="w-64 p-2 rounded ">
            <option value="volvo">January 2022</option>
            <option value="saab">Saab</option>
          </select>
          <input
            type="text"
            placeholder="Description"
            name=""
            id=""
            className="border rounded p-1.5 w-full ml-7"
          />
        </div>
        {/* dropdown */}
        <div className="flex ml-6 mt-6">
          <select name="cars" id="cars" className="w-64 p-2 rounded ">
            <option value="volvo">January 2022</option>
            <option value="saab">Saab</option>
          </select>
          <input
            type="text"
            placeholder="Description"
            name=""
            id=""
            className="border rounded p-1.5 w-full ml-7"
          />
        </div>
        {/* dropdown */}
        <div className="flex ml-6 mt-6">
          <select name="cars" id="cars" className="w-64 p-2 rounded ">
            <option value="volvo">January 2022</option>
            <option value="saab">Saab</option>
          </select>
          <input
            type="text"
            placeholder="Description"
            name=""
            id=""
            className="border rounded p-1.5 w-full ml-7"
          />
        </div>
        {/* dropdown */}
        <div className="flex ml-6 mt-6">
          <select name="cars" id="cars" className="w-64 p-2 rounded ">
            <option value="volvo">January 2022</option>
            <option value="saab">Saab</option>
          </select>
          <input
            type="text"
            placeholder="Description"
            name=""
            id=""
            className="border rounded p-1.5 w-full ml-7"
          />
        </div>
        {/* dropdown */}
        <div className="flex ml-6 mt-6 mb-7">
          <select name="cars" id="cars" className="w-64 p-2 rounded ">
            <option value="volvo">January 2022</option>
            <option value="saab">Saab</option>
          </select>
          <input
            type="text"
            placeholder="Description"
            name=""
            id=""
            className="border rounded p-1.5 w-full ml-7"
          />
        </div>
        <label className="font-semibold ml-7">Comments</label>
        <textarea
          id="message"
          rows="4"
          className=" mx-7 mt-5 block p-2.5 w-[64rem] text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Write your comment here..."
        ></textarea>
        <div className=" ml-7 mt-2 flex justify-between text-xs">
          <div className="flex w-1/2"></div>
          <p className="text-[#6B7280]">Maximum 1000 character</p>
        </div>
      </div>

      {/* Reporting period */}
      <div className="bg-white px-6 py-8 mx-3 rounded drop-shadow-sm ">
        <div className="flex">
          <div className="bg-[#4DA467] rounded-full px-1.5 text-white">
            <h2>4</h2>
          </div>
          <h2 className="px-2 font-bold">
            Does the reporting period for organization's financial reporting
            align with the period for its sustainability reporting. Please
            select one option: <span className="text-[#E02424]">*</span>
          </h2>
          <div>
          </div>
        </div>
          <div className="ml-7 mt-6 y-space-8 mb-4">
          <input type="radio" id="html" name="fav_language" value="HTML" className="mr-2" />
          <label for="html">Yes</label><br/>
          <input type="radio" id="html" name="fav_language" value="HTML" className="mr-2" />
          <label for="html">No</label>
          </div>
          <label className="font-semibold ml-7">Please explain the reason</label>
        <textarea
          id="message"
          rows="4"
          className=" mx-7 mt-5 block p-2.5 w-[64rem] text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Write your comment here..."
        ></textarea>
         <div className=" ml-7 mt-2 flex justify-between text-xs">
          <div className="flex w-1/2"></div>
          <p className="text-[#6B7280]">Maximum 1000 character</p>
        </div>
      </div>
      <div className="flex justify-end my-3 mr-9">
        <button className="border border-black rounded px-5 py-1.5 mr-7">Cancel</button>
        <button className="rounded px-7 py-1.5 bg-[#BEC2C9]">Save</button>
      </div>
    </div>
  );
};

export default MainBody;
