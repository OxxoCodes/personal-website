import React from "react"
import {HydrogenWrapper} from "./HydrogenWrapper";
import Link from "../../Utils/Link"

const Hydrogen = ({filename}) => {
  return (
    <HydrogenWrapper filename={filename}>
      <div className="text">
        <h1>Hydrogen</h1>
        <p>Hydrogen is portfolio optimization software.</p>
        <p>Written in Python using <code>FinQuant</code>, <code>pandas</code>, and <code>yfinance</code>, Hydrogen
          takes a list of tickers from the user and a range of time from point A to point B. It then fetches all daily
          historical data within this time period for each of these tickers from Yahoo Finance. This data is then iterated
          over, and through calculations made using <code>FinQuant</code>, the efficient frontier is found. This provides
          a portfolio which, theoretically, satisfies the highest return per unit of volatility.</p>
        <p>In other words, it tells you which tickers (and how much of each) should make up your portfolio to maximize
        theoretical return while minimizing theoretical risk.</p>
        <p>Hydrogen also supports backtesting returns against any specified range of time, assuming that the tickers
        provided contain data within that time period, and data during that range is available on Yahoo Finance.</p>
        <p>Although functional, Hydrogen has a lot of testing and validation that is currently underway. As such, Hydrogen
          is not yet a publicly available project.</p>
        <p>When it is, you will find it on my <Link url={"https://github.com/OxxoCodes"} text={"GitHub"} />.</p>
      </div>
      <div className="image" />;
      </HydrogenWrapper>
  )
}

export default Hydrogen