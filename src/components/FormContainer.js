import { useState } from "react";

const initialFormValues = {
  mtr: 50000,
  conv_rate_TL: 10,
  conv_rate_LQL: 10,
  conv_rate_QLS: 10,
  avg_net_value_sale: 150,
  ag_cost: 500,
  in_house_cost: 500,
};

export default function FormContainer() {
  const [formValues, setFormValues] = useState(initialFormValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(`name: ${name}, value: ${value}`);
    setFormValues((prevFormValues) => ({ ...prevFormValues, [name]: value }));
  };
  return (
    <div className={"w-screen h-auto py-20 bg-blue-300 flex flex-row flex-wrap justify-center align-center"}>
      <form className="flex flex-col text-2xl text-white text-center border-2 bg-gray-800 border-white w-1/4 py-10">
        <h6 className={"text-lg"}>Monthly Traffic Required</h6>
        <input
          name={"mtr"}
          type="number"
          onChange={handleChange}
          value={formValues.mtr}
          placeholder={"Monthly Traffic Required"}
          className={
            "border-solid border-2 border-gray-600 my-2 p-4 w-72 bg-gray-400 text-black mx-auto text-center"
          }
        />
        <h6 className={"text-lg"}>Conversion Rate: Traffic to Lead</h6>
        <input
          name={"conv_rate_TL"}
          type="number"
          onChange={handleChange}
          value={formValues.conv_rate_TL}
          placeholder={"Conversion Rate: Traffic to Lead"}
          className={
            "border-solid border-2 border-gray-600 my-2 p-4 w-72 bg-gray-400 text-black mx-auto text-center"
          }
        />
        <h6 className={"text-lg"}>Conversion Rate: Lead to Qualified Leads</h6>
        <input
          name={"conv_rate_LQL"}
          type="number"
          onChange={handleChange}
          value={formValues.conv_rate_LQL}
          placeholder={"Lead to Qualified Leads"}
          className={
            "border-solid border-2 border-gray-600 my-2 p-4 w-72 bg-gray-400 text-black mx-auto text-center"
          }
        />
        <h6 className={"text-lg"}>Conversion Rate: Qualified Lead to Sale</h6>
        <input
          name={"conv_rate_QLS"}
          type="number"
          onChange={handleChange}
          value={formValues.conv_rate_QLS}
          placeholder={"Qualified Lead to Sale"}
          className={
            "border-solid border-2 border-gray-600 my-2 p-4 w-72 bg-gray-400 text-black mx-auto text-center"
          }
        />
        <h6 className={"text-lg"}>Average Net Value of Sale</h6>
        <input
          name={"avg_net_value_sale"}
          type="number"
          onChange={handleChange}
          value={formValues.avg_net_value_sale}
          placeholder={"Monthly Traffic Required"}
          className={
            "border-solid border-2 border-gray-600 my-2 p-4 w-72 bg-gray-400 text-black mx-auto text-center"
          }
        />
        <h6 className={"text-lg"}>Agency Costs</h6>
        <input
          name={"ag_cost"}
          type="number"
          onChange={handleChange}
          value={formValues.ag_cost}
          placeholder={"Agency Cost"}
          className={
            "border-solid border-2 border-gray-600 my-2 p-4 w-72 bg-gray-400 text-black mx-auto text-center"
          }
        />
        <h6 className={"text-lg"}>In-House Costs</h6>
        <input
          name={"in_house_cost"}
          type="number"
          onChange={handleChange}
          value={formValues.in_house_cost}
          placeholder={"In House Cost"}
          className={
            "border-solid border-2 border-gray-600 my-2 p-4 w-72 bg-gray-400 text-black mx-auto text-center"
          }
        />
      </form>
    </div>
  );
}
