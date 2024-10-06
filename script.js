{\rtf1\ansi\ansicpg1252\cocoartf2818
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 document.getElementById('loginForm').addEventListener('submit', function(event) \{\
    event.preventDefault();\
\
    // Basic authentication check (you would replace this with actual authentication in production)\
    const username = document.getElementById('username').value;\
    const password = document.getElementById('password').value;\
\
    if (username === "user" && password === "password") \{\
        document.querySelector('.login-container').style.display = 'none';\
        document.getElementById('investSection').style.display = 'block';\
        calculateInvestmentStrategy();\
    \} else \{\
        alert("Invalid login credentials");\
    \}\
\});\
\
function calculateInvestmentStrategy() \{\
    const niftyIndex = getNiftyIndex(); // Replace with actual Nifty index fetching logic\
    const nifty20WeekEMA = getNifty20WeekEMA(); // Replace with real 20 week EMA\
    const nifty50WeekEMA = getNifty50WeekEMA(); // Replace with real 50 week EMA\
\
    let investmentStrategy = "";\
\
    if (niftyIndex > nifty20WeekEMA) \{\
        investmentStrategy = "Invest in Alpha fund.";\
    \} else if (niftyIndex <= nifty20WeekEMA && niftyIndex > nifty50WeekEMA) \{\
        investmentStrategy = "Invest in Alpha and Gold funds.";\
    \} else if (niftyIndex <= nifty50WeekEMA) \{\
        investmentStrategy = "Invest in Value and Gold funds.";\
    \}\
\
    document.getElementById('investmentStrategy').textContent = investmentStrategy;\
\
    document.getElementById('investBtn').addEventListener('click', function() \{\
        processInvestment(investmentStrategy);\
    \});\
\}\
\
function processInvestment(strategy) \{\
    alert(`Investing based on strategy: $\{strategy\}`);\
    // Here you would integrate with a payment gateway (e.g., UPI) to process the payment.\
\}\
\
// Mock functions (replace these with actual API calls)\
function getNiftyIndex() \{\
    return 16000; // Mock Nifty Index\
\}\
\
function getNifty20WeekEMA() \{\
    return 15000; // Mock 20 Week EMA\
\}\
\
function getNifty50WeekEMA() \{\
    return 14000; // Mock 50 Week EMA\
\}\
}