import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Results({ userInput }) {
  let resultData = calculateInvestmentResults(userInput);
  let initialInvestment =
    resultData[0].valueEndOfYear -
    resultData[0].interest -
    resultData[0].annualInvestment;
  return (
    <table id="result">
      <thead>
        <tr>
          <td>Year</td>
          <td>Investment Value</td>
          <td>Interest (Year)</td>
          <td>Total Interest</td>
          <td>Invested Capital</td>
        </tr>
      </thead>
      <tbody>
        {resultData.map((dataObj) => {
          let totalInterest =
            dataObj.valueEndOfYear -
            dataObj.annualInvestment * dataObj.year -
            initialInvestment;
          let investedCapital = dataObj.valueEndOfYear - totalInterest;
          return (
            <tr key={dataObj.year}>
              <td>{dataObj.year}</td>
              <td>{formatter.format(dataObj.valueEndOfYear)}</td>
              <td>{formatter.format(dataObj.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(investedCapital)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
