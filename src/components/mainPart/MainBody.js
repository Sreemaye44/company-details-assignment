import React, { useState } from "react";
import freeText from "../../assets/freetext.svg";

const MainBody = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = e.target.elements;
    for (let i = 0; i < formData.length; i++) {
      if (formData[i].name !== "" && formData[i].name !== "selectOne") {
        
        console.log(formData[i].name + ' = '+formData[i].value);
      }
  
      
    }
    console.log(selectedOption);
    //formData.foreach(e => console.log(e.name));
    //console.log(formData);
    // description data collect
  //   const description = formData.description.value;
  //   //performance indicator data collect
  //   const totalEmployee = formData.totalEmployee.value;
  //   const customer = formData.customer.value;
  //   const growthRate = formData.growthRate.value;
  //   const industriesServed = formData.industriesServed.value;
  //   const revenue = formData.revenue.value;
  //   const turnover = formData.turnover.value;
  //  // const ebidata = formData.ebidata.value;
  //   const womenManagement = formData.womenManagement.value;
  //   const revenuePerEmployee = formData.revenuePerEmployee.value;
  //   const training = formData.training.value;
  //   const soldProduct = formData.soldProduct.value;
  //   const facilities = formData.facilities.value;
  //   const shareRevenue = formData.shareRevenue.value;
  //   //key company events
  //   const event_1 = formData.event_1.value;
  //   const event_2 = formData.event_2.value;
  //   const event_3 = formData.event_3.value;
  //   const event_4 = formData.event_4.value;
  //   const event_5 = formData.event_5.value;
  //   const event_6 = formData.event_6.value;

  //   const des_1 = formData.des_1.value;
  //   const des_2 = formData.des_2.value;
  //   const des_3 = formData.des_3.value;
  //   const des_4= formData.des_4.value;
  //   const des_5 = formData.des_5.value;
  //   const des_6 = formData.des_6.value;

  //   const comments = formData.comments.value;

  //   const yes = formData.yes.value;
  //   const no = formData.no.value;
    




  //   const explain = formData.explain.value;
  //  // console.log(description, totalEmployee, customer, growthRate,industriesServed,revenue,turnover, ebidata,womenManagement, revenuePerEmployee,training, soldProduct, facilities, shareRevenue, explain );
  //   console.log(formData);
  }
  return (
    <form className="w-10/12 py-4 bg-slate-100 text-sm" onSubmit={handleSubmit}>
      <h1 className="font-bold text-2xl mb-8 px-9">General Provisions</h1>

      {/* company description */}

      <div className="bg-white px-6 py-8 mx-3 rounded drop-shadow-sm ">
        <div className="flex">
          <div className="bg-[#4DA467] h-6 w-6 rounded-full px-2 font-semibold text-white">
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
        <div className=" mx-7 mt-2 flex justify-between text-xs">
          <textarea
            id="message"
            rows="4"
            name="description"
            className="mt-4 mb-2 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Write here..."
            ></textarea>
          </div>
        <div className=" mx-7 mt-2 flex justify-between text-xs">
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
          <div className="bg-[#4DA467] h-6 w-6 rounded-full px-2 font-semibold text-white ">
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
        <div className="flex justify-between mt-6 mx-6">
          <div>
            <input type="checkbox" className="border rounded-full" />
            <input
              type="text"
              value="Total Employee"
              className="border rounded p-3 ml-5 w-64 bg-slate-100 font-semibold text-[#494F58] "
              readOnly
            />
            <input
              type="text"
              placeholder="500"
              name="totalEmployee"
              className="border rounded p-3 ml-5 bg-slate-100 font-semibold text-[#494F58] w-64 "
            />
          </div>
          <div>
            <input type="checkbox" className="rounded-full" />
            <input
              type="text"
              value="Customer in Countries"
              className="border rounded p-3 ml-5 bg-slate-100 font-semibold text-[#494F58] w-64"
              readOnly
            />
            <input
              type="text"
              placeholder="500"
              name="customer"
              className="border rounded p-3 ml-5 bg-slate-100 font-semibold text-[#494F58] w-64"
            />
          </div>
        </div>
        {/* input fields */}
        <div className="flex justify-between mt-6 mx-6">
          <div>
            <input type="checkbox" className="rounded-full" />
            <input
              type="text"
              value="Yearly Sales Growth rate"
              className="border rounded p-3 ml-5 w-64 bg-slate-100 font-semibold text-[#494F58] "
              readOnly
            />
            <input
              type="text"
              placeholder="50%"
              name="growthRate"
              className="border rounded p-3 ml-5 bg-slate-100 font-semibold text-[#494F58] w-64 "
            />
          </div>
          <div>
            <input type="checkbox" className="rounded-full" />
            <input
              type="text"
              value="Industries served"
              className="border rounded p-3 ml-5 bg-slate-100 font-semibold text-[#494F58] w-64"
              readOnly
            />
            <input
              type="text"
              placeholder="500"
              name="industriesServed"
              className="border rounded p-3 ml-5 bg-slate-100 font-semibold text-[#494F58] w-64"
            />
          </div>
        </div>
        {/* input fields */}
        <div className="flex justify-between mt-6 mx-6">
          <div>
            <input type="checkbox" className="rounded-full" />
            <input
              type="text"
              value="Revenue"
              className="border rounded p-3 ml-5 w-64 bg-slate-100 font-semibold text-[#494F58] "
              readOnly
            />
            <input
              type="text"
              placeholder="5000 MEur"
              name="revenue"
              className="border rounded p-3 ml-5 bg-slate-100 font-semibold text-[#494F58] w-64 "
            />
          </div>
          <div>
            <input type="checkbox" className="rounded-full" />
            <input
              type="text"
              value="Employee Turnover"
              className="border rounded p-3 ml-5 bg-slate-100 font-semibold text-[#494F58] w-64"
              readOnly
            />
            <input
              type="text"
              placeholder="50%"
              name="turnover"
              className="border rounded p-3 ml-5 bg-slate-100 font-semibold text-[#494F58] w-64"
            />
          </div>
        </div>
        {/* input fields */}
        <div className="flex justify-between mt-6 mx-6">
          <div>
            <input type="checkbox" className="rounded-full" />
            <input
              type="text"
              value="EBITDA"
              className="border rounded p-3 ml-5 w-64 bg-slate-100 font-semibold text-[#494F58] "
              readOnly
            />
            <input
              type="text"
              placeholder="500MEur"
              name="ebitda"
              className="border rounded p-3 ml-5 bg-slate-100 font-semibold text-[#494F58] w-64 "
            />
          </div>
          <div>
            <input type="checkbox" className="rounded-full" />
            <input
              type="text"
              value="Women in Management"
              className="border rounded p-3 ml-5 bg-slate-100 font-semibold text-[#494F58] w-64"
              readOnly
            />
            <input
              type="text"
              placeholder="50%"
              name="womenManagement"
              className="border rounded p-3 ml-5 bg-slate-100 font-semibold text-[#494F58] w-64"
            />
          </div>
        </div>
        {/* input fields */}
        <div className="flex justify-between mt-6 mx-6">
          <div>
            <input type="checkbox" className="rounded-full" />
            <input
              type="text"
              value="Revenue per Employee"
              className="border rounded p-3 ml-5 w-64 bg-slate-100 font-semibold text-[#494F58] "
              readOnly
            />
            <input
              type="text"
              placeholder="500MEur"
              name="revenuePerEmployee"
              className="border rounded p-3 ml-5 bg-slate-100 font-semibold text-[#494F58] w-64 "
            />
          </div>
          <div>
            <input type="checkbox" className="rounded-full" />
            <input
              type="text"
              value="In staff training"
              className="border rounded p-3 ml-5 bg-slate-100 font-semibold text-[#494F58] w-64"
              readOnly
            />
            <input
              type="text"
              placeholder="500Hrs"
              name="training"
              className="border rounded p-3 ml-5 bg-slate-100 font-semibold text-[#494F58] w-64"
            />
          </div>
        </div>
        {/* input fields */}
        <div className="flex justify-between mt-6 mx-6">
          <div>
            <input type="checkbox" className="rounded-full" />
            <input
              type="text"
              value="Product Sold"
              className="border rounded p-3 ml-5 w-64 bg-slate-100 font-semibold text-[#494F58] "
              readOnly
            />
            <input
              type="text"
              placeholder="50000"
              name="soldProduct"
              className="border rounded p-3 ml-5 bg-slate-100 font-semibold text-[#494F58] w-64 "
            />
          </div>
          <div>
            <input type="checkbox" className="rounded-full" />
            <input
              type="text"
              value="Work-related facilities"
              className="border rounded p-3 ml-5 bg-slate-100 font-semibold text-[#494F58] w-64"
              readOnly
            />
            <input
              type="text"
              placeholder="50%"
              name="facilities"
              className="border rounded p-3 ml-5 bg-slate-100 font-semibold text-[#494F58] w-64"
            />
          </div>
        </div>
        {/* input fields */}
        <div className="flex justify-between mt-6 mx-6">
          <div>
            <input type="checkbox" className="rounded-full" />
            <input
              type="text"
              value="Share of export in revenue"
              className="border rounded p-3 ml-5 w-64 bg-slate-100 font-semibold text-[#494F58] "
              readOnly
            />
            <input
              type="text"
              placeholder="50%"
              name="shareRevenue"
              className="border rounded p-3 ml-5 bg-slate-100 font-semibold text-[#494F58] w-64 "
            />
          </div>
          <div>
            <input type="checkbox" className="rounded-full" />
            <input
              type="text"
              value="Other"
              className="border rounded p-3 ml-5 bg-slate-100 font-semibold text-[#494F58] w-64"
              readOnly
            />
            <input
              type="text"
              value=""
              className=" rounded p-3 ml-5 font-semibold text-[#494F58] w-64"
              readOnly
            />
          </div>
        </div>
      </div>

      {/* key company Events */}
      <div className="bg-white px-6 py-8 mx-3 rounded drop-shadow-sm ">
        <div className="flex">
          <div className="bg-[#4DA467] h-6 w-6 rounded-full px-2 font-semibold text-white">
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
        <div className="flex mx-6 mt-6">
          <select name="event_1" id="cars" className="w-64 p-2 bg-gray-100 font-semibold border rounded ">
            <option value="January 2022">January 2022</option>
            <option value="saab">Saab</option>
          </select>
          <input
            type="text"
            placeholder="Description"
            name="des_1"
            id=""
            className="border rounded p-1.5 w-full ml-7"
          />
        </div>
        {/* dropdown */}
        <div className="flex mx-6 mt-6">
          <select name="event_2" id="cars" className="w-64 p-2 bg-gray-100 font-semibold border rounded ">
            <option value="January 2022">January 2022</option>
            <option value="saab">Saab</option>
          </select>
          <input
            type="text"
            placeholder="Description"
            name="des_2"
            id=""
            className="border rounded p-1.5 w-full ml-7"
          />
        </div>
        {/* dropdown */}
        <div className="flex mx-6 mt-6">
          <select name="event_3" id="cars" className="w-64 p-2 bg-gray-100 font-semibold border rounded ">
            <option value="January 2022">January 2022</option>
            <option value="saab">Saab</option>
          </select>
          <input
            type="text"
            placeholder="Description"
            name="des_3"
            id=""
            className="border rounded p-1.5 w-full ml-7"
          />
        </div>
        {/* dropdown */}
        <div className="flex mx-6 mt-6">
          <select name="event_4" id="cars" className="w-64 p-2 bg-gray-100 font-semibold border rounded ">
            <option value="January 2022">January 2022</option>
            <option value="saab">Saab</option>
          </select>
          <input
            type="text"
            placeholder="Description"
            name="des_4"
            id=""
            className="border rounded p-1.5 w-full ml-7"
          />
        </div>
        {/* dropdown */}
        <div className="flex mx-6 mt-6">
          <select name="event_5" id="cars" className="w-64 p-2 bg-gray-100 font-semibold border rounded ">
            <option value="January 2022">January 2022</option>
            <option value="saab">Saab</option>
          </select>
          <input
            type="text"
            placeholder="Description"
            name="des_5"
            id=""
            className="border rounded p-1.5 w-full ml-7"
          />
        </div>
        {/* dropdown */}
        <div className="flex mx-6 mt-6 mb-7">
          <select name="event_6" id="cars" className="w-64 p-2 bg-gray-100 font-semibold border rounded ">
            <option value="January 2022">January 2022</option>
            <option value="saab">Saab</option>
          </select>
          <input
            type="text"
            placeholder="Description"
            name="des_6"
            id=""
            className="border rounded p-1.5 w-full ml-7"
          />
        </div>
        <label className="font-semibold ml-7">Comments</label>
        <div className=" ml-7 mt-2 flex justify-between text-xs">
          <textarea
            id="message"
            rows="4"
            name="comments"
            className="mt-4 mb-2 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Write your comment here..."
            ></textarea>
          </div>
        <div className=" ml-7 mt-2 flex justify-between text-xs">
          <div className="flex w-1/2"></div>
          <p className="text-[#6B7280]">Maximum 1000 character</p>
        </div>
      </div>

      {/* Reporting period */}
      <div className="bg-white px-6 py-8 mx-3 rounded drop-shadow-sm ">
        <div className="flex">
          <div className="bg-[#4DA467] h-6 w-6 rounded-full px-2 font-semibold text-white">
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
          <input type="radio" value="yes" checked={selectedOption === "yes"} name="selectOne" onChange={(event) => setSelectedOption(event.target.value)} className="mr-2"  />
          <label for="html">Yes</label><br/>
          <input type="radio" value="no" checked={selectedOption === "no"} name="selectOne" onChange={(event) => setSelectedOption(event.target.value)} className="mr-2" />
          <label for="html">No</label>
          </div>
        <label className="font-semibold ml-7">Please explain the reason</label>
        <div className=" ml-7 mt-2 flex justify-between text-xs">
          <textarea
            id="message"
            rows="4"
            name="explain"
            className="mt-4 mb-2 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Write your comment here..."
          ></textarea>
        </div>
         <div className=" ml-7 mt-2 flex justify-between text-xs">
          <div className="flex w-1/2"></div>
          <p className="text-[#6B7280]">Maximum 1000 character</p>
        </div>
      </div>
      <div className="flex justify-end my-3 mr-9">
        <button type="reset" className="border border-black rounded px-10 py-2.5 mr-7 font-semibold">Cancel</button>
        <button type="submit" className="rounded px-16 py-2.5 bg-[#BEC2C9] font-semibold">Save</button>
      </div>
    </form>
  );
};

export default MainBody;
