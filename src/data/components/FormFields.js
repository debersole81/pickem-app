import { schedule21 } from "../schedule/scheduleData21.js";
import { useState } from "react";

const initialFormState = {
  week: 0,
  gameDate: "",
  gameTime: "",
  homeTeam: "",
  awayTeam: "",
};

const FormFields = () => {
  const [formState, setFormState] = useState(initialFormState);

  /**Form change handler */
  const onChange = (e) => {
    setFormState(() => ({ ...formState, [e.target.name]: e.target.value }));
  };

  console.log(formState);
  console.log(schedule21);

  return (
    <form>
      <label htmlFor="week">Week:</label>
      <input
        type="number"
        id="week"
        name="week"
        value={formState.week}
        onChange={onChange}
      ></input>
      <br />
      <label htmlFor="gameDate">Date:</label>
      <input
        type="date"
        id="gameDate"
        name="gameDate"
        value={formState.gameDate}
        onChange={onChange}
      ></input>
      <br />
      <label htmlFor="gameTime">Time:</label>
      <input
        type="time"
        id="gameTime"
        name="gameTime"
        value={formState.gameTime}
        onChange={onChange}
      ></input>
      <br />
      <label htmlFor="homeTeam">Home Team:</label>
      <input
        type="text"
        id="homeTeam"
        name="homeTeam"
        value={formState.homeTeam}
        onChange={onChange}
      ></input>
      <br />
      <label htmlFor="awayTeam">Away Team:</label>
      <input
        type="text"
        id="awayTeam"
        name="awayTeam"
        value={formState.awayTeam}
        onChange={onChange}
      ></input>
      <br />
      <input type="submit" id="submit" value="Submit"></input>
    </form>
  );
};

export default FormFields;
