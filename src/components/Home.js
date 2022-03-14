import Axios from "axios";
import React, { useState } from "react";
import "../styles/home/home.css";

export default function Home() {
  const [dateRange, setDateRange] = useState("");
  const [currentDate, setCurrentDate] = useState("");
  const [description, setDescription] = useState("");
  const [mood, setMood] = useState("");
  const [color, setColor] = useState("");
  const [luckyTime, setLuckyTime] = useState("");
  const [luckyNumber, setLuckyNumber] = useState("");
  const [compatibility, setCompatibility] = useState("");
  const [name, setName] = useState("");

  const getYesterdayResult = () => {
    let url =
      "https://aztro.sameerkumar.website/?sign=" +
      document.querySelector(".input-sign").value +
      "&day=yesterday";
    Axios.post(url).then((response) => {
      console.log(response.data);
      let dateRange = response.data.date_range;
      setDateRange(dateRange);
      let currentDate = response.data.current_date;
      setCurrentDate(currentDate);
      let description = response.data.description;
      setDescription(description);
      let mood = response.data.mood;
      setMood(mood);
      let color = response.data.color;
      setColor(color);
      let luckyTime = response.data.lucky_time;
      setLuckyTime(luckyTime);
      let luckyNumber = response.data.lucky_number;
      setLuckyNumber(luckyNumber);
      let compatibility = response.data.compatibility;
      setCompatibility(compatibility);
      document.querySelector(".results").style.display = "block";
      let name = document.querySelector(".input-sign").value;
      setName(name);
      // let currentDate = response.data.current_date;
    });
  };
  const getTodayResult = () => {
    let url =
      "https://aztro.sameerkumar.website/?sign=" +
      document.querySelector(".input-sign").value +
      "&day=today";
    Axios.post(url).then((response) => {
      console.log(response.data);
      let dateRange = response.data.date_range;
      setDateRange(dateRange);
      let currentDate = response.data.current_date;
      setCurrentDate(currentDate);
      let description = response.data.description;
      setDescription(description);
      let mood = response.data.mood;
      setMood(mood);
      let color = response.data.color;
      setColor(color);
      let luckyTime = response.data.lucky_time;
      setLuckyTime(luckyTime);
      let luckyNumber = response.data.lucky_number;
      setLuckyNumber(luckyNumber);
      let compatibility = response.data.compatibility;
      setCompatibility(compatibility);
      document.querySelector(".results").style.display = "block";
      let name = document.querySelector(".input-sign").value;
      setName(name);
      // let currentDate = response.data.current_date;
    });
  };
  const getTomorrowResult = () => {
    let url =
      "https://aztro.sameerkumar.website/?sign=" +
      document.querySelector(".input-sign").value +
      "&day=tomorrow";
    Axios.post(url).then((response) => {
      console.log(response.data);
      let dateRange = response.data.date_range;
      setDateRange(dateRange);
      let currentDate = response.data.current_date;
      setCurrentDate(currentDate);
      let description = response.data.description;
      setDescription(description);
      let mood = response.data.mood;
      setMood(mood);
      let color = response.data.color;
      setColor(color);
      let luckyTime = response.data.lucky_time;
      setLuckyTime(luckyTime);
      let luckyNumber = response.data.lucky_number;
      setLuckyNumber(luckyNumber);
      let compatibility = response.data.compatibility;
      setCompatibility(compatibility);
      document.querySelector(".results").style.display = "block";
      let name = document.querySelector(".input-sign").value;
      setName(name);
      // let currentDate = response.data.current_date;
    });
  };
  return (
    <div className="Home">
      <h2>What is your birth sign?</h2>
      <input type="text" placeholder="Birth Sign" className="input-sign" />
      <br />
      <button onClick={getYesterdayResult}>Yesterday's horoscope</button>
      <button onClick={getTodayResult}>Today's horoscope</button>
      <button onClick={getTomorrowResult}>Tomorrow's horoscope</button>

      <div className="results">
        <h1>
          {name} range between:
          <br /> {dateRange}
        </h1>
        <h4>Today's date: {currentDate}</h4>
        <h4>Mood: {mood}</h4>
        <h4>Color: {color}</h4>
        <h4>Compatibility: {compatibility}</h4>
        <h4>Lucky Number: {luckyNumber}</h4>
        <h4>Luck Time: {luckyTime}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
}
