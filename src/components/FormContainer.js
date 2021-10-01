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
  const [leadsTraffic, setLeadsTraffic] = useState("");
  const [qualifiedLeadsFromLeads, setQualifiedLeadsFromLeads] = useState("");
  const [salesQualifiedLeads, setSalesQualifiedLeads] = useState("");
  const [costPerLead, setCostPerLead] = useState("");
  const [costPerQualifiedLead, setCostPerQualifiedLead] = useState("");
  const [costPerSale, setCostPerSale] = useState("");
  const [revFromSales, setRevFromSales] = useState("");
  const [revLessCost, setRevLessCost] = useState("");
  const [roi, setRoi] = useState("");

  console.log("form values: ", formValues);

  const leadsTrafficHandler = (mtr, conRateTl) => {
    setLeadsTraffic(mtr / conRateTl);
    console.log("leads traffic", leadsTraffic);
  };

  const qualifiedLeadsLeadsHandler = (mtr, conRateTl, conRateQls) => {
    setQualifiedLeadsFromLeads(mtr / conRateTl / conRateQls);
    console.log("qualified from leads", qualifiedLeadsFromLeads);
  };

  const salesQualifiedLeadsHandler = (
    mtr,
    conRateTl,
    conRateLql,
    conRateQls
  ) => {
    setSalesQualifiedLeads(mtr / conRateTl / conRateLql / conRateQls);
    console.log("sales qualified leads", salesQualifiedLeads);
  };

  const costPerLeadHandler = (mtr, conRateTl, agCost, inHouseCost) => {
    setCostPerLead((agCost + inHouseCost) / (mtr / conRateTl));
    console.log("cost per lead", costPerLead);
  };

  const costPerQualifiedLeadHandler = (
    mtr,
    conRateTl,
    conRateQls,
    agCost,
    inHouseCost
  ) => {
    setCostPerQualifiedLead(
      (agCost + inHouseCost) / (mtr / conRateTl / conRateQls)
    );
    // display in dollars and cents
    console.log(
      "cost per qualified lead",
      Math.round(100 * costPerQualifiedLead) / 100
    );
  };

  const costPerSaleHandler = (
    mtr,
    conRateTl,
    conRateQls,
    conRateLql,
    avgSaleValue,
    agCost,
    inHouseCost
  ) => {
    setCostPerSale(
      (agCost + inHouseCost) /
        ((mtr / conRateTl / conRateLql / conRateQls) * avgSaleValue)
    );
    console.log("cost per sale", costPerSale);
  };

  const revFromSalesHandler = (
    mtr,
    conRateTl,
    conRateQls,
    conRateLql,
    avgNetValueSale
  ) => {
    setRevFromSales(
      (mtr / conRateTl / conRateQls / conRateLql) * avgNetValueSale
    );
    console.log("revenue from sales", revFromSales);
  };

  const revLessCostHandler = (
    mtr,
    conRateTl,
    conRateQls,
    conRateLql,
    avgNetValueSale,
    agCost,
    inHouseCost
  ) => {
    setRevLessCost(
      (mtr / conRateTl / conRateQls / conRateLql) * avgNetValueSale -
        (agCost + inHouseCost)
    );
    console.log("revenue less cost", revLessCost);
  };

  const roiHandler = (
    mtr,
    conRateTl,
    conRateQls,
    conRateLql,
    avgNetValueSale,
    agCost,
    inHouseCost
  ) => {
    setRoi(
      (((mtr / conRateTl / conRateQls / conRateLql) * avgNetValueSale -
        (agCost + inHouseCost)) /
        (agCost + inHouseCost)) *
        100
    );
    console.log("roi", roi);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(`name: ${name}, value: ${value}`);
    setFormValues((prevFormValues) => ({ ...prevFormValues, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    leadsTrafficHandler(formValues.mtr, formValues.conv_rate_TL);
    qualifiedLeadsLeadsHandler(
      formValues.mtr,
      formValues.conv_rate_TL,
      formValues.conv_rate_QLS
    );
    salesQualifiedLeadsHandler(
      formValues.mtr,
      formValues.conv_rate_TL,
      formValues.conv_rate_LQL,
      formValues.conv_rate_QLS
    );
    costPerLeadHandler(
      formValues.mtr,
      formValues.conv_rate_TL,
      formValues.ag_cost,
      formValues.in_house_cost
    );
    costPerQualifiedLeadHandler(
      formValues.mtr,
      formValues.conv_rate_TL,
      formValues.conv_rate_QLS,
      formValues.ag_cost,
      formValues.in_house_cost
    );
    costPerSaleHandler(
      formValues.mtr,
      formValues.conv_rate_TL,
      formValues.conv_rate_QLS,
      formValues.conv_rate_LQL,
      formValues.avg_net_value_sale,
      formValues.ag_cost,
      formValues.in_house_cost
    );
    revFromSalesHandler(
      formValues.mtr,
      formValues.conv_rate_TL,
      formValues.conv_rate_QLS,
      formValues.conv_rate_LQL,
      formValues.avg_net_value_sale
    );
    revLessCostHandler(
      formValues.mtr,
      formValues.conv_rate_TL,
      formValues.conv_rate_QLS,
      formValues.conv_rate_LQL,
      formValues.avg_net_value_sale,
      formValues.ag_cost,
      formValues.in_house_cost
    );
    roiHandler(
      formValues.mtr,
      formValues.conv_rate_TL,
      formValues.conv_rate_QLS,
      formValues.conv_rate_LQL,
      formValues.avg_net_value_sale,
      formValues.ag_cost,
      formValues.in_house_cost
    );
    console.log(
      "leads traffic",
      leadsTraffic,
      "qualified leads from leads",
      qualifiedLeadsFromLeads,
      "sales qualified leads",
      salesQualifiedLeads,
      "cost per lead",
      costPerLead,
      "cost per qualified lead",
      costPerQualifiedLead,
      "cost per sale",
      costPerSale,
      "revenue from sales",
      revFromSales,
      "revenue less cost",
      revLessCost
    );
  };

  return (
    <div
      className={
        "w-screen h-auto py-20 bg-blue-300 flex flex-row flex-wrap justify-center align-center"
      }
    >
      <form
        className="flex flex-col justify-center items-center text-2xl text-white text-center border-2 bg-gray-800 border-white py-10"
        style={{ width: "30vw", minWidth: 375 }}
      >
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
        <h6 className={"text-lg"}>Conversion Rate: Traffic to Lead %</h6>
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
        <h6 className={"text-lg"}>
          Conversion Rate: Lead to Qualified Leads %
        </h6>
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
        <h6 className={"text-lg"}>Conversion Rate: Qualified Lead to Sale %</h6>
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
        <h6 className={"text-lg"}>Average Net Value of Sale $</h6>
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
        <h6 className={"text-lg"}>Agency Costs $</h6>
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
        <h6 className={"text-lg"}>In-House Costs $</h6>
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
        <button
          className={
            "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-6 rounded w-72"
          }
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
