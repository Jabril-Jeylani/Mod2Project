# Mod 2 Project: Stock Tracker

## Technologies Used 🔵 
 - React + React Bootstrap
 - ChartJS
 - Alpha Vantage Stock Market API

## Approach Taken 🟢
The approach I took towards this project was initially to use a Stock Market API and display that data in the form of a typical Stock graph. 
The API returned an object of objects with both Metadata and the Stock Reports, so I needed to convert that into an array that I could map through.
I decided to have each stock display a chart for its open price and the volume of said stock being traded. 
I then decided that I would need to have a Navbar and Dropdown menu where certain stocks could be selected. 
Using ChartJS, the process of drawing and animating the line and bar charts was straightforward.
I then at the end used React Bootstrap to style my site and add a consistent and cohesive design. 

## Link to Live Site 🟡 
[Netlify Link](https://jabril-jeylani.netlify.app)

## Installation Instructions 🟠 
Using Vite, run `npm install` in your terminal.

## Unsolved Problems 🔴
I wanted to implement a search bar where you could go to any stock using its ticker symbol and see it's graph.
Currently, that functionality exists because of the API used, but you have to manaully type the symbol into the URL.
I also want to make ChartJS work with responsive charts, which it can do with certain workarounds.


