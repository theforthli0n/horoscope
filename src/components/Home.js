import Axios from "axios";
import React, { useState } from "react";
import "../styles/home/home.css";
import { ReactComponent as Aries } from "../styles/images/signs/aries.svg";
import { ReactComponent as Aquarius } from "../styles/images/signs/Aquarius.svg";
import { ReactComponent as Cancer } from "../styles/images/signs/cancer.svg";
import { ReactComponent as Capricorn } from "../styles/images/signs/capricorn.svg";
import { ReactComponent as Gemini } from "../styles/images/signs/gemini.svg";
import { ReactComponent as Leo } from "../styles/images/signs/leo.svg";
import { ReactComponent as Libra } from "../styles/images/signs/libra.svg";
import { ReactComponent as Pisces } from "../styles/images/signs/pisces.svg";
import { ReactComponent as Sagittarius } from "../styles/images/signs/sagittarius.svg";
import { ReactComponent as Scorpio } from "../styles/images/signs/scorpio.svg";
import { ReactComponent as Taurus } from "../styles/images/signs/taurus.svg";
import { ReactComponent as Virgo } from "../styles/images/signs/virgo.svg";

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
      document.querySelector(".input-sign").value.toLowerCase() +
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
      document.querySelector(".input-sign").value.toLowerCase() +
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
      <h1 className="header">Daily horoscope</h1>
      <Virgo
        onClick={function () {
          document.querySelector(".input-sign").value = "Virgo";
          getTodayResult();
        }}
      />
      <Aries
        onClick={function () {
          document.querySelector(".input-sign").value = "Aries";
          getTodayResult();
        }}
      />
      <Taurus
        onClick={function () {
          document.querySelector(".input-sign").value = "Taurus";
          getTodayResult();
        }}
      />
      <Gemini
        onClick={function () {
          document.querySelector(".input-sign").value = "Gemini";
          getTodayResult();
        }}
      />
      <Cancer
        onClick={function () {
          document.querySelector(".input-sign").value = "Cancer";
          getTodayResult();
        }}
      />
      <Leo
        onClick={function () {
          document.querySelector(".input-sign").value = "Leo";
          getTodayResult();
        }}
      />
      <Libra
        onClick={function () {
          document.querySelector(".input-sign").value = "Libra";
          getTodayResult();
        }}
      />
      <Scorpio
        onClick={function () {
          document.querySelector(".input-sign").value = "Scorpio";
          getTodayResult();
        }}
      />
      <Sagittarius
        onClick={function () {
          document.querySelector(".input-sign").value = "Sagittarius";
          getTodayResult();
        }}
      />
      <br />
      <input type="text" placeholder="Birth Sign" className="input-sign" />
      <br />
      <button onClick={getYesterdayResult}>Yesterday's horoscope</button>
      <button onClick={getTodayResult}>Today's horoscope</button>
      <button onClick={getTomorrowResult}>Tomorrow's horoscope</button>

      <div className="results">
        <h1>
          {name} are born from:
          <br /> {dateRange}
        </h1>
        <p>
          {currentDate}: <br /> {description}
        </p>
        <h3>
          <span className="bold">Mood:</span> {mood}
          <span>
            <span className="bold">Color:</span> {color}
          </span>
        </h3>

        <h3>
          <span className="bold">Lucky Number:</span> {luckyNumber}
          <span>
            <span className="bold">Luck Time:</span> {luckyTime}
          </span>
        </h3>

        <h3>
          <span className="bold">Compatibility: </span>
          {compatibility}
        </h3>
      </div>
    </div>
  );
}
