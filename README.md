# Stocks Position Sizing Calculator

## Introduction

The "Stocks Position Sizing Calculator" is a React application designed to aid traders in making informed decisions regarding the number of shares to long or short based on their individual risk tolerance and trade parameters. By inputting their stock portfolio account balance, the percentage of their portfolio they are willing to risk, the current stock price, and their desired stop loss, users can efficiently calculate the optimal number of shares to engage with for a trade. The application provides clear advice on whether to proceed with the trade or abstain if the potential loss exceeds the user's risk threshold.

## Features

- User choice to plan for a long or short position before entering trade details.
- Calculation of the number of shares to long or short based on user-defined risk parameters and trade setup.
- Analysis of the trade's viability by comparing the risked amount of capital against the potential loss defined by the stop loss.
- User-friendly interface for seamless interaction with the application.

The application will now be accessible at `http://localhost:3000`.

## How to Use

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

1. Upon launching the application, select your desired trade direction by choosing to long or short.
2. Enter your stock portfolio account balance.
3. Input the percentage (%) of your portfolio you wish to risk.
4. Key in the current stock price for your trade.
5. Specify the stop loss price.
6. Click the "Calculate" button to receive advice on the number of shares to long/short. If the potential loss exceeds your specified risk amount, the application will advise against entering the trade.

## Sample Run

<figure>
  <img src="testcase_images/Screenshot%202024-02-05%20000630.png" alt="Alt text" width="50%" height="auto"/>
  <figcaption>Long Calculation Sample</figcaption>
</figure>

![Not Recommended Long Calculation Sample](testcase_images/Screenshot%202024-02-05%20000723.png)
![Short Calculation Sample](testcase_images/Screenshot%202024-02-05%20000742.png)
![Not Recommended Short Calculation Sample](testcase_images/Screenshot%202024-02-05%20000757.png)
![Field Error Checking](testcase_images/Screenshot%202024-02-05%20000856.png)

## Future Plans

1. **Real-time Stock Pricing Integration:** I plan to incorporate a real-time stock pricing API, allowing users to input a stock ticker symbol and automatically retrieve the latest stock price for their calculations. This feature aims to streamline the process by reducing the need for manual price entry, ensuring that users have access to the most up-to-date information for their trades.

2. **Step-by-Step Usage Guide:** This guide will be available directly within the web application, offering clear instructions and tips on how to effectively use each feature of the calculator.

3. **UI Enhancements:** Create a more engaging and seamless experience for users, with an emphasis on simplicity and ease of use.
