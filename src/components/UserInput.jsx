export default function UserInput({ onInputChange, userInput }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            value={userInput.initialInvestment}
            onChange={(event) => {
              onInputChange("initialInvestment", event.target.value);
            }}
            required
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            value={userInput.annualInvestment}
            onChange={(event) => {
              onInputChange("annualInvestment", event.target.value);
            }}
            required
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            required
            value={userInput.returnPer}
            onChange={(event) => {
              onInputChange("returnPer", event.target.value);
            }}
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            required
            value={userInput.duration}
            onChange={(event) => {
              onInputChange("duration", event.target.value);
            }}
          />
        </p>
      </div>
    </section>
  );
}
