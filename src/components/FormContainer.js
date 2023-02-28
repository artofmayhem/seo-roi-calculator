import { useState } from "react";

const initialFormValues = {
  mtr: 50000,
  conv_rate_TL: 10,
  conv_rate_LQL: 10,
  conv_rate_QLS: 10,
  avg_net_value_sale: 150,
  ag_cost: 500,
  in_house_cost: 500,
  //   mtr: null,
  // conv_rate_TL: null,
  // conv_rate_LQL: null,
  // conv_rate_QLS: null,
  // avg_net_value_sale: null,
  // ag_cost: null,
  // in_house_cost: null,
};

export default function FormContainer() {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [leadsTraffic, setLeadsTraffic] = useState();
  const [qualifiedLeadsFromLeads, setQualifiedLeadsFromLeads] = useState();
  const [salesQualifiedLeads, setSalesQualifiedLeads] = useState();
  const [costPerLead, setCostPerLead] = useState();
  const [costPerQualifiedLead, setCostPerQualifiedLead] = useState();
  const [costPerSale, setCostPerSale] = useState();
  const [revFromSales, setRevFromSales] = useState();
  const [revLessCost, setRevLessCost] = useState();
  const [roi, setRoi] = useState();

  // console.log("form values: ", formValues);

  const leadsTrafficHandler = (mtr, conRateTl) => {
    setLeadsTraffic((mtr / conRateTl).toFixed(2));
    // console.log("leads traffic", leadsTraffic);
  };

  const qualifiedLeadsLeadsHandler = (mtr, conRateTl, conRateQls) => {
    setQualifiedLeadsFromLeads((mtr / conRateTl / conRateQls).toFixed(2));
    // console.log("qualified from leads", qualifiedLeadsFromLeads);
  };

  const salesQualifiedLeadsHandler = (
    mtr,
    conRateTl,
    conRateLql,
    conRateQls
  ) => {
    setSalesQualifiedLeads(
      (mtr / conRateTl / conRateLql / conRateQls).toFixed(2)
    );
    // console.log("sales qualified leads", salesQualifiedLeads);
  };

  const costPerLeadHandler = (mtr, conRateTl, agCost, inHouseCost) => {
    setCostPerLead(((agCost + inHouseCost) / (mtr / conRateTl)).toFixed(2));
    // console.log("cost per lead", costPerLead);
  };

  const costPerQualifiedLeadHandler = (
    mtr,
    conRateTl,
    conRateQls,
    agCost,
    inHouseCost
  ) => {
    setCostPerQualifiedLead(
      ((agCost + inHouseCost) / (mtr / conRateTl / conRateQls)).toFixed(2)
    );
    // console.log(
    //   "cost per qualified lead",
    //    (costPerQualifiedLead).toFixed(2)
    // );
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
      (
        (agCost + inHouseCost) /
        (mtr / conRateTl / conRateLql / conRateQls)
      ).toFixed(2)
    );
    // console.log("cost per sale", costPerSale);
  };

  const revFromSalesHandler = (
    mtr,
    conRateTl,
    conRateQls,
    conRateLql,
    avgNetValueSale
  ) => {
    setRevFromSales(
      ((mtr / conRateTl / conRateQls / conRateLql) * avgNetValueSale).toFixed(2)
    );
    // console.log("revenue from sales", revFromSales);
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
      (
        (mtr / conRateTl / conRateQls / conRateLql) * avgNetValueSale -
        (agCost + inHouseCost)
      ).toFixed(2)
    );
    // console.log("revenue less cost", revLessCost);
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
      (
        (((mtr / conRateTl / conRateQls / conRateLql) * avgNetValueSale -
          (agCost + inHouseCost)) /
          (agCost + inHouseCost)) *
        100
      ).toFixed(2)
    );
    // console.log("roi", roi);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log(`name: ${name}, value: ${value}`);
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      [name]: Number(value),
    }));
  };

  const handleReset = (e) => {
    e.preventDefault();
    setFormValues(initialFormValues);
    setLeadsTraffic(null);
    setQualifiedLeadsFromLeads(null);
    setSalesQualifiedLeads(null);
    setCostPerLead(null);
    setCostPerQualifiedLead(null);
    setCostPerSale(null);
    setRevFromSales(null);
    setRevLessCost(null);
    setRoi(null);
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
    // console.log(
    //   "leads traffic",
    //   leadsTraffic,
    //   "qualified leads from leads",
    //   qualifiedLeadsFromLeads,
    //   "sales qualified leads",
    //   salesQualifiedLeads,
    //   "cost per lead",
    //   costPerLead,
    //   "cost per qualified lead",
    //   costPerQualifiedLead,
    //   "cost per sale",
    //   costPerSale,
    //   "revenue from sales",
    //   revFromSales,
    //   "revenue less cost",
    //   revLessCost
    // );
  };

  return (
    <div className={"flex flex-row flex-wrap"}>
      <div className={'text-center flex text-center justify-center mt-48'}>
        <h3 className={'text-4xl'}>
          SEO can be the most effective marketing tool for your business.
        </h3>
      </div>
      <div className={'flex flex-row flex-wrap justify-center mx-auto w-1/2'} style={{ width: "50%", minWidth: 365 }}>
        
        <div
          className={
            "h-auto py-20 bg-white flex flex-row flex-wrap justify-center align-center"
          }
          style={{ width: 365 }}
        >
          <form
            className="flex flex-col justify-start py-10 h-auto items-center text-lg text-white text-center bg-gray-600 border-gray-600"
            style={{ width: "30vw", minWidth: 350 }}
          >
            <h2 className={"my-6 text-xl"}>Change your strategy in seconds</h2>
            <h6 className={"text-base"}>Monthly Traffic Required</h6>
            <input
              name={"mtr"}
              type="number"
              onChange={handleChange}
              value={Number(formValues.mtr)}
              placeholder={"Monthly Traffic Required"}
              className={
                "border-solid border-2 border-gray-600 my-2 p-2 w-60 bg-gray-400 text-black mx-auto text-center"
              }
            />
            <h6 className={"text-base"}>Conversion Rate: Traffic to Lead %</h6>
            <input
              name={"conv_rate_TL"}
              type="number"
              onChange={handleChange}
              value={Number(formValues.conv_rate_TL)}
              placeholder={"Conversion Rate: Traffic to Lead"}
              className={
                "border-solid border-2 border-gray-600 my-2 p-2 w-60 bg-gray-400 text-black mx-auto text-center"
              }
            />
            <h6 className={"text-base"}>
              Conversion Rate: Lead to Qualified Leads %
            </h6>
            <input
              name={"conv_rate_LQL"}
              type="number"
              onChange={handleChange}
              value={Number(formValues.conv_rate_LQL)}
              placeholder={"Lead to Qualified Leads"}
              className={
                "border-solid border-2 border-gray-600 my-2 p-2 w-60 bg-gray-400 text-black mx-auto text-center"
              }
            />
            <h6 className={"text-base"}>
              Conversion Rate: Qualified Lead to Sale %
            </h6>
            <input
              name={"conv_rate_QLS"}
              type="number"
              onChange={handleChange}
              value={Number(formValues.conv_rate_QLS)}
              placeholder={"Qualified Lead to Sale"}
              className={
                "border-solid border-2 border-gray-600 my-2 p-2 w-60 bg-gray-400 text-black mx-auto text-center"
              }
            />
            <h6 className={"text-base"}>Average Net Value of Sale $</h6>
            <input
              name={"avg_net_value_sale"}
              type="number"
              onChange={handleChange}
              value={Number(formValues.avg_net_value_sale)}
              placeholder={"Monthly Traffic Required"}
              className={
                "border-solid border-2 border-gray-600 my-2 p-2 w-60 bg-gray-400 text-black mx-auto text-center"
              }
            />
            <h6 className={"text-base"}>Agency Costs $</h6>
            <input
              name={"ag_cost"}
              type="number"
              onChange={handleChange}
              value={Number(formValues.ag_cost)}
              placeholder={"Agency Cost"}
              className={
                "border-solid border-2 border-gray-600 my-2 p-2 w-60 bg-gray-400 text-black mx-auto text-center"
              }
            />
            <h6 className={"text-base"}>In-House Costs $</h6>
            <input
              name={"in_house_cost"}
              type="number"
              onChange={handleChange}
              value={Number(formValues.in_house_cost)}
              placeholder={"In House Cost"}
              className={
                "border-solid border-2 border-gray-600 my-2 p-2 w-60 bg-gray-400 text-black mx-auto text-center"
              }
            />
            <button
              className={
                "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-6 rounded w-60"
              }
              onClick={handleSubmit}
            >
              Submit
            </button>

            <button
              className={
                "bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 mt-6 rounded w-60"
              }
              onClick={handleReset}
            >
              Reset
            </button>
          </form>
        </div>
        <div
          className={
            " h-auto py-20 bg-white flex flex-row flex-wrap justify-center align-center"
          }
          style={{ width: 365 }}
        >
          <div
            className={"text-center bg-gray-500 px-4 py-20 h-auto "}
            style={{ width: "35vw", minWidth: 350 }}
          >
            <h2 className={"text-4xl mb-10 text-white "}>Results</h2>
            <div className={"flex flex-row justify-center align-center"}>
              <div
                className={
                  "flex items-center justify-center border-solid border-2 border-white my-2 py-2 w-60  bg-gray-200 text-gray-800  mx-auto text-center"
                }
              >
                <h5>Leads from Traffic</h5>
              </div>
              <div
                className={
                  "flex items-center justify-center border-solid border-2 border-white my-2 py-2 w-60  bg-gray-100 text-gray-800 text-2xl mx-auto text-center"
                }
              >
                <h5>{leadsTraffic}</h5>
              </div>
            </div>

            <div className={"flex flex-row justify-center align-center"}>
              <div
                className={
                  "flex items-center justify-center border-solid border-2 border-white my-2 py-2 w-60 bg-gray-200 text-gray-800  mx-auto text-center"
                }
              >
                <h5>Qualified Leads From Traffic</h5>
              </div>
              <div
                className={
                  "flex items-center justify-center border-solid border-2 border-white my-2 py-2 w-60 bg-gray-100 text-gray-800 text-2xl mx-auto text-center"
                }
              >
                <h5>{qualifiedLeadsFromLeads}</h5>
              </div>
            </div>

            <div className={"flex flex-row justify-center align-center"}>
              <div
                className={
                  "flex items-center justify-center border-solid border-2 border-white my-2 py-2 w-60 bg-gray-200 text-gray-800 mx-auto text-center"
                }
              >
                <h5>Sales From Qualified Leads</h5>
              </div>
              <div
                className={
                  "flex items-center justify-center border-solid border-2 border-white my-2 py-2 w-60 bg-gray-100 text-gray-800 text-2xl mx-auto text-center"
                }
              >
                <h5>{salesQualifiedLeads}</h5>
              </div>
            </div>

            <div className={"flex flex-row justify-center align-center"}>
              <div
                className={
                  "flex items-center justify-center border-solid border-2 border-white my-2 py-2 w-60 bg-gray-200 text-gray-800 mx-auto text-center"
                }
              >
                <h5>Cost Per Lead ($)</h5>
              </div>
              <div
                className={
                  "flex items-center justify-center border-solid border-2 border-white my-2 py-2 w-60 bg-gray-100 text-gray-800 text-2xl mx-auto text-center"
                }
              >
                {costPerLead === null ? (
                  <h5>{costPerLead}</h5>
                ) : (
                  <h5>{costPerLead}</h5>
                )}
              </div>
            </div>

            <div className={"flex flex-row justify-center align-center"}>
              <div
                className={
                  "flex items-center justify-center border-solid border-2 border-white my-2 py-2 text-sm w-60 bg-gray-200 text-gray-800 mx-auto text-center"
                }
              >
                <h5>Cost Per Qualified Lead ($)</h5>
              </div>
              <div
                className={
                  "flex items-center justify-center border-solid border-2 border-white my-2 py-2 w-60 bg-gray-100 text-gray-800 text-2xl mx-auto text-center"
                }
              >
                {costPerLead === null ? (
                  <h5>{costPerQualifiedLead}</h5>
                ) : (
                  <h5>{costPerQualifiedLead}</h5>
                )}
              </div>
            </div>

            <div className={"flex flex-row justify-center align-center"}>
              <div
                className={
                  "flex items-center justify-center border-solid border-2 border-white my-2 py-2 w-60 bg-gray-200 text-gray-800 mx-auto text-center"
                }
              >
                <h5>Cost Per Sale ($)</h5>
              </div>
              <div
                className={
                  "flex items-center justify-center border-solid border-2 border-white my-2 py-2 w-60 bg-gray-100 text-gray-800 text-2xl mx-auto text-center"
                }
              >
                {costPerLead === null ? (
                  <h5>{costPerSale}</h5>
                ) : (
                  <h5>{costPerSale}</h5>
                )}
              </div>
            </div>

            <div className={"flex flex-row justify-center align-center"}>
              <div
                className={
                  "flex items-center justify-center border-solid border-2 border-white my-2 py-2 w-60 bg-gray-200 text-gray-800 mx-auto text-center"
                }
              >
                <h5>Revenue From Sales ($)</h5>
              </div>
              <div
                className={
                  "flex items-center justify-center border-solid border-2 border-white my-2 py-2 w-60 bg-gray-100 text-gray-800 text-2xl mx-auto text-center"
                }
              >
                {costPerLead === null ? (
                  <h5>{revFromSales}</h5>
                ) : (
                  <h5>{revFromSales}</h5>
                )}
              </div>
            </div>

            <div className={"flex flex-row justify-center align-center"}>
              <div
                className={
                  "flex items-center justify-center border-solid border-2 border-white my-2 py-2 w-60 bg-gray-200 text-gray-800  mx-auto text-center"
                }
              >
                <h5>Revenue ($ / Less Cost)</h5>
              </div>
              <div
                className={
                  "flex items-center justify-center border-solid border-2 border-white my-2 py-2 w-60 bg-gray-100 text-gray-800 text-2xl mx-auto text-center"
                }
              >
                {costPerLead === null ? (
                  <h5>{revLessCost}</h5>
                ) : (
                  <h5>{revLessCost}</h5>
                )}
              </div>
            </div>
            <div className={"flex flex-row justify-center align-center"}>
              <div
                className={
                  "flex items-center justify-center border-solid border-2 border-white my-2 py-2 w-60 bg-gray-200 text-gray-800  mx-auto text-center"
                }
              >
                <h5>ROI (%)</h5>
              </div>
              <div
                className={
                  "flex items-center justify-center border-solid border-2 border-white my-2 py-2 w-60 bg-gray-100 text-gray-800 text-2xl mx-auto text-center"
                }
              >
                {roi === null ? <h5>{roi}</h5> : <h5>{roi}</h5>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
