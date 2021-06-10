import React, { Component } from "react";
import MatchDataService from "../services/match.service";
import ReactSpinner from 'react-bootstrap-spinner'
import Select from 'react-select'

import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

import Donut from './charts/donut-chart.component';
import PieChart from './charts/pie-chart.component';
import CharBarChart from './charts/char-bar-chart.component';
import StageBarChart from './charts/stage-bar-chart.component';
import VerticalBarChart from './charts/vertical-bar-chart.component';
import ActionsBarChart from './charts/action-bar-chart.component';
import MovesBarChart from './charts/moves-bar-chart.component';
import TimeLineChart from './charts/time-line-chart.component';
import QuitoutBarChart from './charts/quitout-bar-chart.component';
import FourStatBarChart from './charts/four-stat-bar-chart.component';
import SuccessWhiffBarChart from './charts/success-whiff-bar-chart.component';

import Form from 'react-bootstrap/Form'
import { Card, Col } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'

var charDict =
 {
  0 : "Captain Falcon.png",
  1 : "Donkey Kong.png",
  2 : "Fox.png" ,
  3 : "Game & Watch.png",
  4 : "Kirby.png",
  5 : "Bowser.png",
  6 : "Link.png",
  7 : "Luigi.png",
  8 : "Mario.png",
  9 : "Marth.png",
  10 : "Mewtwo.png",
  11 : "Ness.png",
  12 : "Peach.png",
  13 : "Pikachu.png",
  14 : "Ice Climbers.png",
  15 : "Jigglypuff.png",
  16 : "Samus.png",
  17 : "Yoshi.png",
  18 : "Zelda.png",
  19 : "Sheik.png",
  20 : "Falco.png",
  21 : "Young Link.png",
  22 : "Dr. Mario.png",
  23 : "Roy.png",
  24 : "Pichu.png",
  25 : "Ganondorf.png"
}

var charbackgroundColorDict = {
  0 : 'rgba(255, 99, 132, 0.2)',
  1 : 'rgba(170, 85, 0, 0.2)',
  2 : 'rgba(255, 159, 36, 0.2)' ,
  3 : 'rgba(15, 15, 15, 0.2)',
  4 : 'rgba(255, 99, 192, 0.2)',
  5 : 'rgba(50, 128, 20, 0.2)',
  6 : 'rgba(20, 192, 20, 0.2)',
  7 : 'rgba(20, 150, 70, 0.2)',
  8 : 'rgba(255, 99, 132, 0.2)',
  9 : 'rgba(114, 162, 235, 0.2)',
  10 : 'rgba(153, 102, 255, 0.2)',
  11 : 'rgba(200, 99, 132, 0.2)',
  12 : 'rgba(255, 186, 0, 0.3)',
  13 : 'rgba(255, 186, 90, 0.3)',
  14 : 'rgba(54, 162, 235, 0.2)',
  15 : 'rgba(255, 99, 255, 0.2)',
  16 : 'rgba(255, 65, 50, 0.2)',
  17 : 'rgba(75, 192, 192, 0.2)',
  18 : 'rgba(255, 150, 50, 0.3)',
  19 : 'rgba(154, 162, 235, 0.3)',
  20 : 'rgba(54, 50, 235, 0.2)',
  21 : 'rgba(75, 192, 20, 0.2)',
  22 : 'rgba(192, 192, 192, 0.4)',
  23 : 'rgba(191, 0, 0, 0.2)',
  24 : 'rgba(255, 242, 0, 0.3)',
  25 : 'rgba(128, 0, 64, 0.3)'
}

var charborderColorDict = {
  0 : 'rgba(195, 99, 132, 1)',
  1 : 'rgba(170, 85, 0, 1)',
  2 : 'rgba(255, 159, 36, 1)' ,
  3 : 'rgba(15, 15, 15, 0.5)',
  4 : 'rgba(255, 99, 192, 1)',
  5 : 'rgba(50, 128, 20, 1)',
  6 : 'rgba(20, 192, 20, 1)',
  7 : 'rgba(20, 150, 70, 1)',
  8 : 'rgba(255, 99, 132, 1)',
  9 : 'rgba(114, 162, 235, 1)',
  10 : 'rgba(153, 102, 255, 1)',
  11 : 'rgba(200, 99, 132, 1)',
  12 : 'rgba(141, 141, 0, 1)',
  13 : 'rgba(141, 141, 90, 1)',
  14 : 'rgba(54, 162, 235, 1)',
  15 : 'rgba(255, 99, 255, 1)',
  16 : 'rgba(255, 65, 50, 1)',
  17 : 'rgba(75, 192, 192, 1)',
  18 : 'rgba(255, 150, 50, 1)',
  19 : 'rgba(50, 5, 150, 0.5)',
  20 : 'rgba(54, 50, 235, 1)',
  21 : 'rgba(75, 192, 20, 1)',
  22 : 'rgba(100, 100, 100, 1 )',
  23 : 'rgba(191, 0, 0, 1)',
  24 : 'rgba(147, 147, 0, 1)',
  25 : 'rgba(128, 0, 64, 1)'
}

var charhoverColorDict = {
  0 : 'rgba(255, 99, 132, 0.6)',
  1 : 'rgba(170, 85, 0, 0.6)',
  2 : 'rgba(255, 159, 36, 0.6)' ,
  3 : 'rgba(15, 15, 15, 0.6)',
  4 : 'rgba(255, 99, 192, 0.6)',
  5 : 'rgba(50, 128, 20, 0.6)',
  6 : 'rgba(20, 192, 20, 0.6)',
  7 : 'rgba(20, 150, 70, 0.6)',
  8 : 'rgba(255, 99, 132, 0.6)',
  9 : 'rgba(114, 162, 235, 0.6)',
  10 : 'rgba(153, 102, 255, 0.6)',
  11 : 'rgba(200, 99, 132, 0.6)',
  12 : 'rgba(255, 186, 0, 0.6)',
  13 : 'rgba(255, 186, 90, 0.6)',
  14 : 'rgba(54, 162, 235, 0.6)',
  15 : 'rgba(255, 99, 255, 0.6)',
  16 : 'rgba(255, 65, 50, 0.6)',
  17 : 'rgba(75, 192, 192, 0.6)',
  18 : 'rgba(255, 150, 50, 0.6)',
  19 : 'rgba(154, 162, 235, 0.6)',
  20 : 'rgba(54, 50, 235, 0.6)',
  21 : 'rgba(75, 192, 20, 0.6)',
  22 : 'rgba(192, 192, 192, 0.6)',
  23 : 'rgba(191, 0, 0, 0.6)',
  24 : 'rgba(255, 242, 0, 0.6)',
  25 : 'rgba(128, 0, 64, 0.6)'
}

var stageDict = {
  2 : "Fountain.png",
  3 : "Pokemon Stadium.png",
  4 : "Peachs Castle.png",
  5 : "Kongo Jungle.png",
  6 : "Brinstar.png",
  7 : "Corneria.png",
  8 : "Yoshis Story.png",
  9 : "Onett.png",
  10 : "Mute City.png",
  11 : "Rainbow Cruise.png",
  12 : "Jungle Japes.png",
  13 : "Great Bay.png",
  14 : "Hyrule Temple.png",
  15 : "Brinstar Depths.png",
  16 : "Yoshis Island.png",
  17 : "Green Greens.png",
  18 : "Fourside.png",
  19 : "Mushroom Kingdom.png",
  20 : "Mushroom Kingdom 2.png",
  22 : "Venom.png",
  23 : "Poke Floats.png",
  24 : "Big Blue.png",
  25 : "Icicle Mountain.png",
  26 : "Icetop.png",
  27 : "Flat Zone.png",
  28 : "Dreamland.png",
  29 : "Yoshis Island N64.png",
  30 : "Kongo Jungle N64.png",
  31 : "Battlefield.png",
  32 : "Final Destination.png"
}

var stagebackgroundColorDict = {
  2 : 'rgba(79, 60, 97, 0.3)', // rgb(79,60,97)
  3 : 'rgba(141, 186, 145, 0.4)', //rgb(78,101,80)
  4 : 'rgba(255, 99, 132, 0.2)',
  5 : 'rgba(255, 99, 132, 0.2)',
  6 : 'rgba(255, 99, 132, 0.2)',
  7 : 'rgba(255, 99, 132, 0.2)',
  8 : 'rgba(151,195,134, 0.3)', //rgb(151,195,134)
  9 : 'rgba(255, 99, 132, 0.2)',
  10 : 'rgba(255, 99, 132, 0.2)',
  11 : 'rgba(255, 99, 132, 0.2)',
  12 : 'rgba(255, 99, 132, 0.2)',
  13 : 'rgba(255, 99, 132, 0.2)',
  14 : 'rgba(255, 99, 132, 0.2)',
  15 : 'rgba(255, 99, 132, 0.2)',
  16 : 'rgba(255, 99, 132, 0.2)',
  17 : 'rgba(255, 99, 132, 0.2)',
  18 : 'rgba(255, 99, 132, 0.2)',
  19 : 'rgba(255, 99, 132, 0.2)',
  20 : 'rgba(255, 99, 132, 0.2)',
  22 : 'rgba(255, 99, 132, 0.2)',
  23 : 'rgba(255, 99, 132, 0.2)',
  24 : 'rgba(255, 99, 132, 0.2)',
  25 : 'rgba(255, 99, 132, 0.2)',
  26 : 'rgba(255, 99, 132, 0.2)',
  27 : 'rgba(255, 99, 132, 0.2)',
  28 : 'rgba(117, 191, 226, 0.4)', //rgb(117,191,226)
  29 : 'rgba(255, 99, 132, 0.2)',
  30 : 'rgba(255, 99, 132, 0.2)',
  31 : 'rgba(33, 35, 48, 0.3)', //rgb(33,35,48)
  32 : 'rgba(54, 15, 127, 0.3)', //rgb(54,15,127)
}

var stageborderColorDict = {
  2 : 'rgba(28, 1, 54, 1)',
  3 : 'rgba(78,101,80, 1)',
  4 : 'rgba(255, 99, 132, 0.2)',
  5 : 'rgba(255, 99, 132, 0.2)',
  6 : 'rgba(255, 99, 132, 0.2)',
  7 : 'rgba(255, 99, 132, 0.2)',
  8 : 'rgba(18, 140, 99, 1)',
  9 : 'rgba(255, 99, 132, 0.2)',
  10 : 'rgba(255, 99, 132, 0.2)',
  11 : 'rgba(255, 99, 132, 0.2)',
  12 : 'rgba(255, 99, 132, 0.2)',
  13 : 'rgba(255, 99, 132, 0.2)',
  14 : 'rgba(255, 99, 132, 0.2)',
  15 : 'rgba(255, 99, 132, 0.2)',
  16 : 'rgba(255, 99, 132, 0.2)',
  17 : 'rgba(255, 99, 132, 0.2)',
  18 : 'rgba(255, 99, 132, 0.2)',
  19 : 'rgba(255, 99, 132, 0.2)',
  20 : 'rgba(255, 99, 132, 0.2)',
  22 : 'rgba(255, 99, 132, 0.2)',
  23 : 'rgba(255, 99, 132, 0.2)',
  24 : 'rgba(255, 99, 132, 0.2)',
  25 : 'rgba(255, 99, 132, 0.2)',
  26 : 'rgba(255, 99, 132, 0.2)',
  27 : 'rgba(255, 99, 132, 0.2)',
  28 : 'rgba(46, 85, 209, 1)',
  29 : 'rgba(255, 99, 132, 0.2)',
  30 : 'rgba(255, 99, 132, 0.2)',
  31 : 'rgba(33, 35, 48, 1)',
  32 : 'rgba(54, 15, 127, 1)',
}

function createPieChartCharacterUsage(charUsage, title, labelBool){
  var dict = {}

  for (let i = 0; i < charUsage.length; i++) {        
    dict[i] = charUsage[i];
  }

  var items = Object.keys(dict).map(function(key) {
    return [key, dict[key]];
  });

  items.sort(function(first, second) {
    return second[1] - first[1];
  });

  var charLabels = [];
  var charData = [];
  var charImage = [];
  var charbackgroundColor = [];
  var charborderColor = [];
  var charhoverColor = [];
  var sum = charUsage.reduce(function(a, b){
    return a + b;
  }, 0);

  for (let j = 0; j < items.length; j++) {
    if((items[j][1]) !== 0){
      charLabels.push((charDict[items[j][0]]).replace(".png", "") + " (" + items[j][1] + " games)");
      charData.push(items[j][1]);

      if(items[j][1]/sum > 0.060) {
        charImage.push({
          src: '/stock_icons/' + charDict[items[j][0]],
          width: 32,
          height: 32,
        });
      }


      charbackgroundColor.push(charbackgroundColorDict[items[j][0]]);
      charborderColor.push(charborderColorDict[items[j][0]]);
      charhoverColor.push(charhoverColorDict[items[j][0]]);
    }    
  }

  return <PieChart 
            charData = {charData}
            charLabels = {charLabels}
            charImage = {charImage}
            charbackgroundColor = {charbackgroundColor}
            charborderColor = {charborderColor}
            charhoverBackgroundColor = {charhoverColor}
            title = {title}
            labelBool = {labelBool}
/>

}

function createQuitoutBarChartCharacterUsage(charUsage, title, labelBool){
  var dict = {}

  for (let i = 0; i < charUsage.length; i++) {        
    dict[i] = charUsage[i];
  }

  var items = Object.keys(dict).map(function(key) {
    return [key, dict[key]];
  });

  items.sort(function(first, second) {
    return second[1] - first[1];
  });

  var charLabels = [];
  var charData = [];
  var charImage = [];
  var charbackgroundColor = [];
  var charborderColor = [];
  var charhoverColor = [];

  for (let j = 0; j < items.length; j++) {
    if((items[j][1]) !== 0){
      charLabels.push((charDict[items[j][0]]).replace(".png", ""));
      charData.push(items[j][1]);

      charImage.push({
        src: '/stock_icons/' + charDict[items[j][0]],
        width: 32,
        height: 32,
      });
    
      charbackgroundColor.push(charbackgroundColorDict[items[j][0]]);
      charborderColor.push(charborderColorDict[items[j][0]]);
      charhoverColor.push(charhoverColorDict[items[j][0]]);
    }    
  }

  return <QuitoutBarChart 
            charData = {charData}
            charLabels = {charLabels}
            charImage = {charImage}
            charbackgroundColor = {charbackgroundColor}
            charborderColor = {charborderColor}
            charhoverBackgroundColor = {charhoverColor}
            title = {title}
            labelBool = {labelBool}
/>

}

function createBarChartCharacterWinrate(myDict, charUsage, charWins, charLoss, title){
  var dict = {}
  var windict = {}
  var lossdict = {}

  for (let i = 0; i < charUsage.length; i++) {        
    dict[i] = charUsage[i];
    windict[i] = charWins[i];
    lossdict[i] = charLoss[i];
  }

  var items = Object.keys(dict).map(function(key) {
    return [key, dict[key]];
  });

  items.sort(function(first, second) {
    return second[1] - first[1];
  });

  var charLabels = [];
  var charData = [];
  var charImage = [];
  var charbackgroundColor = [];
  var charborderColor = []

  for (let j = 0; j < items.length; j++) {
    if((items[j][1]) !== 0){
      charLabels.push((myDict[items[j][0]]).replace(".png", "") + " (" + items[j][1] + " games)")

      var wins = charWins[items[j][0]];
      var loss = charLoss[items[j][0]];

      if(wins === 0){
        charData.push(0) 
      }else{
        charData.push(parseInt (wins/(wins+loss)* 100) ) 
      }

      charImage.push(myDict[items[j][0]]);
      charbackgroundColor.push(charbackgroundColorDict[items[j][0]]);
      charborderColor.push(charborderColorDict[items[j][0]]);
    }    
  }

  return <CharBarChart 
            charData = {charData}
            charLabels = {charLabels}
            charImage = {charImage}
            charbackgroundColor = {charbackgroundColor}
            charborderColor = {charborderColor}
            title = {title}
            type = 'char'
/>

}

function createBarChartStageWinrate(myDict, stageWins, stageLoss, title){
  var stageUsage = []
  for (let k = 0; k < stageWins.length; k++) {
    stageUsage[k] = stageWins[k] + stageLoss[k]    
  }

  var dict = {}
  var windict = {}
  var lossdict = {}

  for (let i = 0; i < stageUsage.length; i++) {        
    dict[i] = stageUsage[i];
    windict[i] = stageWins[i];
    lossdict[i] = stageLoss[i];
  }

  var items = Object.keys(dict).map(function(key) {
    return [key, dict[key]];
  });

  items.sort(function(first, second) {
    return second[1] - first[1];
  });

  var stageLabels = [];
  var stageData = [];
  var stageImage = [];
  var stagebackgroundColor = [];
  var stageborderColor = []

  for (let j = 0; j < items.length; j++) {
    if((items[j][1]) !== 0){
      stageLabels.push((myDict[items[j][0]]).replace(".png", "") + " (" + items[j][1] + " games)")

      var wins = stageWins[items[j][0]];
      var loss = stageLoss[items[j][0]];

      if(wins === 0){
        stageData.push(0) 
      }else{
        stageData.push(parseInt (wins/(wins+loss)* 100) ) 
      }

      stageImage.push(myDict[items[j][0]]);
      stagebackgroundColor.push(stagebackgroundColorDict[items[j][0]]);
      stageborderColor.push(stageborderColorDict[items[j][0]]);
    }    
  }

  return < StageBarChart 
            stageData = {stageData.slice(0,6)}
            stageLabels = {stageLabels.slice(0,6)}
            stageImage = {stageImage}
            stagebackgroundColor = {stagebackgroundColor}
            stageborderColor = {stageborderColor}
            title = {title}
            type = 'stage'
/>

}

function actionsBarChartData(charUsage, actionArr, oppCharUsage, oppActionArr, checked){
  // creates sorted 2d array for character id and character usage
  var dict = {}

  for (let i = 0; i < charUsage.length; i++) {        
    dict[i] = charUsage[i];
  }

  var items = Object.keys(dict).map(function(key) {
    return [key, dict[key]];
  });

  items.sort(function(first, second) {
    return second[1] - first[1];
  });

  var oppdict = {}

  for (let i = 0; i < oppCharUsage.length; i++) {        
    oppdict[i] = oppCharUsage[i];
  }

  var oppitems = Object.keys(dict).map(function(key) {
    return [key, oppdict[key]];
  });

  oppitems.sort(function(first, second) {
    return second[1] - first[1];
  });

  var orderedActionsArr = []

  for (let i = 0; i < items.length; i++) {
    if(items[i][1] !== 0){
      orderedActionsArr.push(
        {
          label: (charDict[items[i][0]]).replace(".png", ""),
          data: actionArr[items[i][0]],
          backgroundColor: charbackgroundColorDict[items[i][0]],
          borderColor: charborderColorDict[items[i][0]],
          borderWidth: 1,
          stack: 'player'
        }
      )
    }  
  }
  for (let i = 0; i < oppitems.length; i++) {
    if(oppitems[i][1] !== 0){
      orderedActionsArr.push(
        {
          label: (charDict[oppitems[i][0]]).replace(".png", " (Opponent)"),
          data: oppActionArr[oppitems[i][0]],
          backgroundColor: charbackgroundColorDict[oppitems[i][0]],
          borderColor: charborderColorDict[oppitems[i][0]],
          borderWidth: 1,
          stack: 'opponent',
          hidden: !checked
        }
      )
    } 
  }

  return orderedActionsArr;

}

function movesBarChartData(
  charUsage, neutralArr, counterArr, tradeArr, killsArr,
  oppCharUsage, oppNeutralArr, oppCounterArr, oppTradeArr, oppKillsArr,
  checked, radio){
  // creates sorted 2d array for character id and character usage
  var dict = {}

  for (let i = 0; i < charUsage.length; i++) {        
    dict[i] = charUsage[i];
  }

  var items = Object.keys(dict).map(function(key) {
    return [key, dict[key]];
  });

  items.sort(function(first, second) {
    return second[1] - first[1];
  });

  var oppdict = {}

  for (let i = 0; i < oppCharUsage.length; i++) {        
    oppdict[i] = oppCharUsage[i];
  }

  var oppitems = Object.keys(dict).map(function(key) {
    return [key, oppdict[key]];
  });

  oppitems.sort(function(first, second) {
    return second[1] - first[1];
  });

  var movesArr = []
  var downb;

  if(radio === 'Neutral Wins'){
    for (let i = 0; i < items.length; i++) {
      if(items[i][1] !== 0){
        downb = items[i][0] === "12" ? neutralArr[items[i][0]][21] +neutralArr[items[i][0]][1] : neutralArr[items[i][0]][21]
        movesArr.push(
          {
            label: (charDict[items[i][0]]).replace(".png", ""),
            data: [
              neutralArr[items[i][0]][2]+neutralArr[items[i][0]][3]+neutralArr[items[i][0]][4]+neutralArr[items[i][0]][5],
              neutralArr[items[i][0]][6],neutralArr[items[i][0]][7],neutralArr[items[i][0]][8],neutralArr[items[i][0]][9],
              neutralArr[items[i][0]][10],neutralArr[items[i][0]][11],neutralArr[items[i][0]][12],neutralArr[items[i][0]][13],
              neutralArr[items[i][0]][14],neutralArr[items[i][0]][15],neutralArr[items[i][0]][16],neutralArr[items[i][0]][17],
              neutralArr[items[i][0]][18],neutralArr[items[i][0]][19],neutralArr[items[i][0]][20],downb,
              neutralArr[items[i][0]][50]+neutralArr[items[i][0]][51],
              neutralArr[items[i][0]][52]+neutralArr[items[i][0]][53]+neutralArr[items[i][0]][54]+neutralArr[items[i][0]][55]+neutralArr[items[i][0]][56],
              neutralArr[items[i][0]][61]+neutralArr[items[i][0]][62]
            ],
            backgroundColor: charbackgroundColorDict[items[i][0]],
            borderColor: charborderColorDict[items[i][0]],
            borderWidth: 1,
            stack: 'player'
          }
        )
      }
    }
    for (let i = 0; i < oppitems.length; i++) {
      if(oppitems[i][1] !== 0){
        downb = oppitems[i][0] === "12" ? oppNeutralArr[oppitems[i][0]][21] +oppNeutralArr[oppitems[i][0]][1] : oppNeutralArr[oppitems[i][0]][21]
        movesArr.push(
          {
            label: (charDict[oppitems[i][0]]).replace(".png", " (Opponent)"),
            data: [
              oppNeutralArr[oppitems[i][0]][2]+oppNeutralArr[oppitems[i][0]][3]+oppNeutralArr[oppitems[i][0]][4]+oppNeutralArr[oppitems[i][0]][5],
              oppNeutralArr[oppitems[i][0]][6],oppNeutralArr[oppitems[i][0]][7],oppNeutralArr[oppitems[i][0]][8],oppNeutralArr[oppitems[i][0]][9],
              oppNeutralArr[oppitems[i][0]][10],oppNeutralArr[oppitems[i][0]][11],oppNeutralArr[oppitems[i][0]][12],oppNeutralArr[oppitems[i][0]][13],
              oppNeutralArr[oppitems[i][0]][14],oppNeutralArr[oppitems[i][0]][15],oppNeutralArr[oppitems[i][0]][16],oppNeutralArr[oppitems[i][0]][17],
              oppNeutralArr[oppitems[i][0]][18],oppNeutralArr[oppitems[i][0]][19],oppNeutralArr[oppitems[i][0]][20],downb,
              oppNeutralArr[oppitems[i][0]][50]+oppNeutralArr[oppitems[i][0]][51],
              oppNeutralArr[oppitems[i][0]][52]+oppNeutralArr[oppitems[i][0]][53]+oppNeutralArr[oppitems[i][0]][54]+oppNeutralArr[oppitems[i][0]][55]+oppNeutralArr[oppitems[i][0]][56],
              oppNeutralArr[oppitems[i][0]][61]+oppNeutralArr[oppitems[i][0]][62]
            ],
            backgroundColor: charbackgroundColorDict[oppitems[i][0]],
            borderColor: charborderColorDict[oppitems[i][0]],
            borderWidth: 1,
            stack: 'opponent',
            hidden: !checked
          }
        )
      }
    }   
  }

  if(radio === 'Counter Hits'){
    for (let i = 0; i < items.length; i++) {
      if(items[i][1] !== 0){
        downb = items[i][0] === "12" ? counterArr[items[i][0]][21] +counterArr[items[i][0]][1] : counterArr[items[i][0]][21]
        movesArr.push(
          {
            label: (charDict[items[i][0]]).replace(".png", ""),
            data: [
              counterArr[items[i][0]][2]+counterArr[items[i][0]][3]+counterArr[items[i][0]][4]+counterArr[items[i][0]][5],
              counterArr[items[i][0]][6],counterArr[items[i][0]][7],counterArr[items[i][0]][8],counterArr[items[i][0]][9],
              counterArr[items[i][0]][10],counterArr[items[i][0]][11],counterArr[items[i][0]][12],counterArr[items[i][0]][13],
              counterArr[items[i][0]][14],counterArr[items[i][0]][15],counterArr[items[i][0]][16],counterArr[items[i][0]][17],
              counterArr[items[i][0]][18],counterArr[items[i][0]][19],counterArr[items[i][0]][20],downb,
              counterArr[items[i][0]][50]+counterArr[items[i][0]][51],
              counterArr[items[i][0]][52]+counterArr[items[i][0]][53]+counterArr[items[i][0]][54]+counterArr[items[i][0]][55]+counterArr[items[i][0]][56],
              counterArr[items[i][0]][61]+counterArr[items[i][0]][62]
            ],
            backgroundColor: charbackgroundColorDict[items[i][0]],
            borderColor: charborderColorDict[items[i][0]],
            borderWidth: 1,
            stack: 'player'
          }
        )
      }
    }
    for (let i = 0; i < oppitems.length; i++) {
      if(oppitems[i][1] !== 0){
        downb = oppitems[i][0] === "12" ? oppCounterArr[oppitems[i][0]][21] +oppCounterArr[oppitems[i][0]][1] : oppCounterArr[oppitems[i][0]][21]
        movesArr.push(
          {
            label: (charDict[oppitems[i][0]]).replace(".png", " (Opponent)"),
            data: [
              oppCounterArr[oppitems[i][0]][2]+oppCounterArr[oppitems[i][0]][3]+oppCounterArr[oppitems[i][0]][4]+oppCounterArr[oppitems[i][0]][5],
              oppCounterArr[oppitems[i][0]][6],oppCounterArr[oppitems[i][0]][7],oppCounterArr[oppitems[i][0]][8],oppCounterArr[oppitems[i][0]][9],
              oppCounterArr[oppitems[i][0]][10],oppCounterArr[oppitems[i][0]][11],oppCounterArr[oppitems[i][0]][12],oppCounterArr[oppitems[i][0]][13],
              oppCounterArr[oppitems[i][0]][14],oppCounterArr[oppitems[i][0]][15],oppCounterArr[oppitems[i][0]][16],oppCounterArr[oppitems[i][0]][17],
              oppCounterArr[oppitems[i][0]][18],oppCounterArr[oppitems[i][0]][19],oppCounterArr[oppitems[i][0]][20],downb,
              oppCounterArr[oppitems[i][0]][50]+oppCounterArr[oppitems[i][0]][51],
              oppCounterArr[oppitems[i][0]][52]+oppCounterArr[oppitems[i][0]][53]+oppCounterArr[oppitems[i][0]][54]+oppCounterArr[oppitems[i][0]][55]+oppCounterArr[oppitems[i][0]][56],
              oppCounterArr[oppitems[i][0]][61]+oppCounterArr[oppitems[i][0]][62]
            ],
            backgroundColor: charbackgroundColorDict[oppitems[i][0]],
            borderColor: charborderColorDict[oppitems[i][0]],
            borderWidth: 1,
            stack: 'opponent',
            hidden: !checked
          }
        )
      }
    }   
  }

  if(radio === 'Trades'){
    for (let i = 0; i < items.length; i++) {
      if(items[i][1] !== 0){
        downb = items[i][0] === "12" ? tradeArr[items[i][0]][21] +tradeArr[items[i][0]][1] : tradeArr[items[i][0]][21]
        movesArr.push(
          {
            label: (charDict[items[i][0]]).replace(".png", ""),
            data: [
              tradeArr[items[i][0]][2]+tradeArr[items[i][0]][3]+tradeArr[items[i][0]][4]+tradeArr[items[i][0]][5],
              tradeArr[items[i][0]][6],tradeArr[items[i][0]][7],tradeArr[items[i][0]][8],tradeArr[items[i][0]][9],
              tradeArr[items[i][0]][10],tradeArr[items[i][0]][11],tradeArr[items[i][0]][12],tradeArr[items[i][0]][13],
              tradeArr[items[i][0]][14],tradeArr[items[i][0]][15],tradeArr[items[i][0]][16],tradeArr[items[i][0]][17],
              tradeArr[items[i][0]][18],tradeArr[items[i][0]][19],tradeArr[items[i][0]][20],downb,
              tradeArr[items[i][0]][50]+tradeArr[items[i][0]][51],
              tradeArr[items[i][0]][52]+tradeArr[items[i][0]][53]+tradeArr[items[i][0]][54]+tradeArr[items[i][0]][55]+tradeArr[items[i][0]][56],
              tradeArr[items[i][0]][61]+tradeArr[items[i][0]][62]
            ],
            backgroundColor: charbackgroundColorDict[items[i][0]],
            borderColor: charborderColorDict[items[i][0]],
            borderWidth: 1,
            stack: 'player'
          }
        )
      }
    }
    for (let i = 0; i < oppitems.length; i++) {
      if(oppitems[i][1] !== 0){
        downb = oppitems[i][0] === "12" ? oppTradeArr[oppitems[i][0]][21] +oppTradeArr[oppitems[i][0]][1] : oppTradeArr[oppitems[i][0]][21]
          movesArr.push(
            {
              label: (charDict[oppitems[i][0]]).replace(".png", " (Opponent)"),
              data: [
                oppTradeArr[oppitems[i][0]][2]+oppTradeArr[oppitems[i][0]][3]+oppTradeArr[oppitems[i][0]][4]+oppTradeArr[oppitems[i][0]][5],
                oppTradeArr[oppitems[i][0]][6],oppTradeArr[oppitems[i][0]][7],oppTradeArr[oppitems[i][0]][8],oppTradeArr[oppitems[i][0]][9],
                oppTradeArr[oppitems[i][0]][10],oppTradeArr[oppitems[i][0]][11],oppTradeArr[oppitems[i][0]][12],oppTradeArr[oppitems[i][0]][13],
                oppTradeArr[oppitems[i][0]][14],oppTradeArr[oppitems[i][0]][15],oppTradeArr[oppitems[i][0]][16],oppTradeArr[oppitems[i][0]][17],
                oppTradeArr[oppitems[i][0]][18],oppTradeArr[oppitems[i][0]][19],oppTradeArr[oppitems[i][0]][20],downb,
                oppTradeArr[oppitems[i][0]][50]+oppTradeArr[oppitems[i][0]][51],
                oppTradeArr[oppitems[i][0]][52]+oppTradeArr[oppitems[i][0]][53]+oppTradeArr[oppitems[i][0]][54]+oppTradeArr[oppitems[i][0]][55]+oppTradeArr[oppitems[i][0]][56],
                oppTradeArr[oppitems[i][0]][61]+oppTradeArr[oppitems[i][0]][62]
              ],
              backgroundColor: charbackgroundColorDict[oppitems[i][0]],
              borderColor: charborderColorDict[oppitems[i][0]],
            borderWidth: 1,
            stack: 'opponent',
            hidden: !checked
          }
        )
      }
    }   
  }

  if(radio === 'Kill Moves'){
    for (let i = 0; i < items.length; i++) {
      if(items[i][1] !== 0){
        downb = items[i][0] === "12" ? killsArr[items[i][0]][21] +killsArr[items[i][0]][1] : killsArr[items[i][0]][21]
        movesArr.push(
          {
            label: (charDict[items[i][0]]).replace(".png", ""),
            data: [
              killsArr[items[i][0]][2]+killsArr[items[i][0]][3]+killsArr[items[i][0]][4]+killsArr[items[i][0]][5],
              killsArr[items[i][0]][6],killsArr[items[i][0]][7],killsArr[items[i][0]][8],killsArr[items[i][0]][9],
              killsArr[items[i][0]][10],killsArr[items[i][0]][11],killsArr[items[i][0]][12],killsArr[items[i][0]][13],
              killsArr[items[i][0]][14],killsArr[items[i][0]][15],killsArr[items[i][0]][16],killsArr[items[i][0]][17],
              killsArr[items[i][0]][18],killsArr[items[i][0]][19],killsArr[items[i][0]][20],downb,
              killsArr[items[i][0]][50]+killsArr[items[i][0]][51],
              killsArr[items[i][0]][52]+killsArr[items[i][0]][53]+killsArr[items[i][0]][54]+killsArr[items[i][0]][55]+killsArr[items[i][0]][56],
              killsArr[items[i][0]][61]+killsArr[items[i][0]][62]
            ],
            backgroundColor: charbackgroundColorDict[items[i][0]],
            borderColor: charborderColorDict[items[i][0]],
            borderWidth: 1,
            stack: 'player'
          }
        )
      }
    }
    for (let i = 0; i < oppitems.length; i++) {
      if(oppitems[i][1] !== 0){
        downb = oppitems[i][0] === "12" ? oppKillsArr[oppitems[i][0]][21] +oppKillsArr[oppitems[i][0]][1] : oppKillsArr[oppitems[i][0]][21]
        movesArr.push(
          {
            label: (charDict[oppitems[i][0]]).replace(".png", " (Opponent)"),
            data: [
              oppKillsArr[oppitems[i][0]][2]+oppKillsArr[oppitems[i][0]][3]+oppKillsArr[oppitems[i][0]][4]+oppKillsArr[oppitems[i][0]][5],
              oppKillsArr[oppitems[i][0]][6],oppKillsArr[oppitems[i][0]][7],oppKillsArr[oppitems[i][0]][8],oppKillsArr[oppitems[i][0]][9],
              oppKillsArr[oppitems[i][0]][10],oppKillsArr[oppitems[i][0]][11],oppKillsArr[oppitems[i][0]][12],oppKillsArr[oppitems[i][0]][13],
              oppKillsArr[oppitems[i][0]][14],oppKillsArr[oppitems[i][0]][15],oppKillsArr[oppitems[i][0]][16],oppKillsArr[oppitems[i][0]][17],
              oppKillsArr[oppitems[i][0]][18],oppKillsArr[oppitems[i][0]][19],oppKillsArr[oppitems[i][0]][20],downb,
              oppKillsArr[oppitems[i][0]][50]+oppKillsArr[oppitems[i][0]][51],
              oppKillsArr[oppitems[i][0]][52]+oppKillsArr[oppitems[i][0]][53]+oppKillsArr[oppitems[i][0]][54]+oppKillsArr[oppitems[i][0]][55]+oppKillsArr[oppitems[i][0]][56],
              oppKillsArr[oppitems[i][0]][61]+oppKillsArr[oppitems[i][0]][62]
            ],
            backgroundColor: charbackgroundColorDict[oppitems[i][0]],
            borderColor: charborderColorDict[oppitems[i][0]],
            borderWidth: 1,
            stack: 'opponent',
            hidden: !checked
          }
        )
      }
    }   
  }
  return movesArr;

}

function fourStatBarChartComponent(charUsage, charStats, oppCharUsage, oppCharStats, checked){
  // creates sorted 2d array for character id and character usage
  var dict = {}

  for (let i = 0; i < charUsage.length; i++) {        
    dict[i] = charUsage[i];
  }

  var items = Object.keys(dict).map(function(key) {
    return [key, dict[key]];
  });

  items.sort(function(first, second) {
    return second[1] - first[1];
  });

  var oppdict = {}

  for (let i = 0; i < oppCharUsage.length; i++) {        
    oppdict[i] = oppCharUsage[i];
  }

  var oppitems = Object.keys(dict).map(function(key) {
    return [key, oppdict[key]];
  });

  oppitems.sort(function(first, second) {
    return second[1] - first[1];
  });

  var deathsArr = []

  for (let i = 0; i < items.length; i++) {
    if(items[i][1] !== 0){
      deathsArr.push(
        {
          label: (charDict[items[i][0]]).replace(".png", ""),
          data: [
            charStats[0][items[i][0]],
            charStats[1][items[i][0]],
            charStats[2][items[i][0]],
            charStats[3][items[i][0]]
          ],
          backgroundColor: charbackgroundColorDict[items[i][0]],
          borderColor: charborderColorDict[items[i][0]],
          borderWidth: 1,
          stack: 'player'
        }
      )
    }
  }

  for (let i = 0; i < items.length; i++) {
    if(oppitems[i][1] !== 0){
      deathsArr.push(
        {
          label: (charDict[items[i][0]]).replace(".png", " (Opponent)"),
          data: [
            oppCharStats[0][items[i][0]],
            oppCharStats[1][items[i][0]],
            oppCharStats[2][items[i][0]],
            oppCharStats[3][items[i][0]]
          ],
          backgroundColor: charbackgroundColorDict[items[i][0]],
          borderColor: charborderColorDict[items[i][0]],
          borderWidth: 1,
          stack: 'opponent',
          hidden: !checked
        }
      )
    }
  }   

  return deathsArr;

}

function createSuccessWhiffBarChart(success, whiff, title, successLabel, whiffLabel){
  var dict = {}

  for (let i = 0; i < success.length; i++) {        
    dict[i] = success[i];
  }

  var items = Object.keys(dict).map(function(key) {
    return [key, dict[key]];
  });

  items.sort(function(first, second) {
    return second[1] - first[1];
  });

  var charLabels = [];
  var datasetArr = [];
  var succData = [];
  var failData = [];
  var charImage = [];

  for (let j = 0; j < items.length; j++) {
    if((items[j][1]) !== 0){
      charLabels.push((charDict[items[j][0]]).replace(".png", ""))
      charImage.push(charDict[items[j][0]]);
      succData.push(success[items[j][0]])
      failData.push(whiff[items[j][0]])
    }    
  }

  datasetArr.push({
    label: successLabel,
    data: succData,
    backgroundColor: "rgb(64, 176, 166, 0.3)",
    borderColor: "rgb(64, 176, 166, 1)",
    borderWidth: 1
  })

  datasetArr.push({
    label: whiffLabel,
    data: failData,
    backgroundColor: "rgb(255, 190, 106, 0.5)",
    borderColor: "rgb(255, 190, 106, 1)",
    borderWidth: 1.5
  })

  return <SuccessWhiffBarChart 
            labels = {charLabels}
            charImage = {charImage}
            dataset = {datasetArr}
            title = {title}
/>
}

export default class MatchStats extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchCode = this.onChangeSearchCode.bind(this);
    this.searchCode = this.searchCode.bind(this);
    this.onChangeOppCode = this.onChangeOppCode.bind(this);
    this.handleCheckChange = this.handleCheckChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);

    this.state = {
      // search params
      searchCode: "GEFF#353",
      oppCode: "",
      selectCharacters: [],
      myCharValue: [],
      oppCharValue: [],
      selectStages: [],
      stageValue: [],
      isOnlyComplete: false,
      startDate: null,
      endDate: null,

      // data
      myStats: "",

      // buttons
      actionCheck: true,
      charPieCheck: true,

      // moves chart buttons
      radio: 'Neutral Wins',
      check: false
    };
  }

  async getCharacters(){
    let chararr = [
      "BOWSER","CAPTAIN_FALCON","DONKEY_KONG","DR_MARIO",
      "FALCO","FOX","GAME_AND_WATCH","GANONDORF","ICE_CLIMBERS",
      "JIGGLYPUFF","KIRBY","LINK","LUIGI","MARIO","MARTH","MEWTWO",
      "NESS","PEACH","PICHU","PIKACHU","ROY","SAMUS","SHEIK","YOSHI",
      "YOUNG_LINK","ZELDA"
    ]

    let charpng = [
      "Bowser.png","Captain Falcon.png","Donkey Kong.png","Dr. Mario.png",
      "Falco.png","Fox.png","Game & Watch.png","Ganondorf.png","Ice Climbers.png",
      "Jigglypuff.png","Kirby.png","Link.png","Luigi.png","Mario.png","Marth.png","Mewtwo.png",
      "Ness.png","Peach.png","Pichu.png","Pikachu.png","Roy.png","Samus.png","Sheik.png","Yoshi.png",
      "Young Link.png","Zelda.png"
    ]
    
    const characters = chararr.map((x,i) => ({
      "value": x,
      "label": <div><img src={`stock_icons/${charpng[i]}`} height="30px" width="30px" alt=""/> {charpng[i].split('.').slice(0, -1).join('.')}</div>
    }))

    this.setState({selectCharacters: characters})
  }

  async getStages(){
    let stagearr = [
      "FOUNTAIN_OF_DREAMS","POKEMON_STADIUM","YOSHIS_STORY","DREAMLAND",
      "BATTLEFIELD","FINAL_DESTINATION"
    ]

    let stagepng = [
      "Fountain.png","Pokemon Stadium.png","Yoshis Story.png","Dreamland.png",
      "Battlefield.png","Final Destination.png"
    ]

    const stages = stagearr.map((x,i) => ({
      "value": x,
      "label": <div><img src={`stage_icons/${stagepng[i]}`} height="30px" width="30px" alt=""/> {stagepng[i].split('.').slice(0, -1).join('.')}</div>
    }))

    this.setState({selectStages: stages})
  }

  myCharChange(e){
    this.setState({myCharValue: e})
  }

  myOppChange(e){
    this.setState({oppCharValue: e})
  }

  stageChange(e){
    this.setState({stageValue: e})
  }
   
  componentDidMount() {
    this.getCharacters();
    this.getStages();
  }

  onChangeSearchCode(e) {
    const searchCode = e.target.value;

    this.setState({
      searchCode: searchCode
    });
  }

  onChangeOppCode(e) {
    const oppCode = e.target.value;

    this.setState({
      oppCode: oppCode
    });
  }

  handleInputChange(e){
    this.setState({
       radio: e.target.value
    })
  }

  handleCheckChange(e){
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value    
    });
  }

  searchCode() {
    
    let mycode = this.state.searchCode.replace("#", "-").toUpperCase();
    let myoppcode = this.state.oppCode.replace("#", "-").toUpperCase();

    this.setState({
      statsLoaded: "loading"
    });

    let params = new URLSearchParams(`code=${mycode}`)
    
    if(myoppcode){
      params.append('oppcode', myoppcode);
    }

    for (let i = 0; i < this.state.myCharValue.length; i++) {
      params.append('character', this.state.myCharValue[i].value);
    }

    for (let i = 0; i < this.state.oppCharValue.length; i++) {
      params.append('oppcharacter', this.state.oppCharValue[i].value);
    }

    for (let i = 0; i < this.state.stageValue.length; i++) {
      params.append('stage', this.state.stageValue[i].value);
    }

    if(this.state.isOnlyComplete){
      params.append('complete', true)
    }

    if(this.state.startDate){
      params.append('start', (this.state.startDate._d).toISOString())
    }

    if(this.state.endDate){
      params.append('end', (this.state.endDate._d).toISOString())
    }

    MatchDataService.findByCode(params.toString())
      .then(response => {
        this.setState({
          statsLoaded: "loaded",
          myStats: response.data
        });
        
        console.log(response.data);     
      })
      .catch(e => {
        this.setState({
          statsLoaded: "error"
        });
      }); 
  }

  render() {
    const { searchCode, statsLoaded, oppCode, myStats } = this.state;

    const renderStats = () => {
      if (statsLoaded === "loaded") {
        return(
          <Container fluid>
            <h2>Summary</h2>
            <div className="row">
              <div className="col-sm-3">
                <div id="imgcontainer">
                    <img src="cssp1bg.png" width="272" height="376" alt=""/>
                    <img src={`char_portraits/${myStats.main}/${myStats.mainColor}.png`} width="272" height="376" alt=""/>
                    <img src="cssp1.png" width="272" height="376" alt=""/>
                    <p id="text">
                      {searchCode.toUpperCase()}
                    </p>
                </div>
              </div>
              <div className="col-sm-4">
                <Card id='sumCard'>
                  <p>
                    {myStats.totalMatches} games <br/><br/>
                    {myStats.totalTime} time played (h:m:s:f)<br/><br/>
                    {myStats.totalLRAStart} L+R+A+Starts <br/><br/>
                    {myStats.totalTimeouts} Timeouts <br/><br/>

                    {myStats.uniqueOpps} Unique Opponents <br/><br/>
                    {myStats.oneAndDoned} One And Doned <br/>
                  </p>
                </Card>
              </div>
              {/* WinRate Donut Chart */}
              <div className="col-sm-5">
                <Donut
                  labels={[myStats.totalLosses + ' Loss', myStats.totalWins + ' Wins']}
                  data={[myStats.totalLosses, myStats.totalWins]}
                  title='Winrate'
                  percentage = {parseInt((myStats.totalWins/(myStats.totalLosses + myStats.totalWins)) * 100)}
                  player={this.state.searchCode}
                />
              </div>
            </div>

            <hr class="my-4"></hr>

            <h2>Character Usage</h2>
            <div className="row">
              <div className="col-md-6" id='pie1'>
                {createPieChartCharacterUsage(myStats.charUsage, 'Character Usage', this.state.charPieCheck)}
                <label>                  
                  <input
                    name="charPieCheck"            
                    type="checkbox"
                    checked={this.state.charPieCheck}
                    onChange={this.handleCheckChange} />
                </label>
                &nbsp; Show labels
              </div>
              <div className="col-md-6" id='pie2'>
                {createPieChartCharacterUsage(myStats.oppCharUsage, 'Opponent Character Usage', this.state.charPieCheck)}
              </div>
            </div>

            <hr class="my-4"></hr>

            <div className="row">
              <div className="col-md" id="bigbar">
                {createBarChartCharacterWinrate(
                  charDict,
                  myStats.charUsage,
                  myStats.asCharWins,
                  myStats.asCharLoss,
                  'Character Winrate %'
                  )}
              </div>              
            </div>
            <div className="row">
              <div className="col-md" id="bigbar">{createBarChartCharacterWinrate(charDict, myStats.oppCharUsage, myStats.vsCharWins, myStats.vsCharLoss, 'VS Character Winrate %')}</div>
            </div>
            <div className="row">
              <div className="col-md" id="bigbar">{createBarChartStageWinrate(stageDict, myStats.stageWins, myStats.stageLoss, 'Stage Winrate %')}</div>
            </div>
            <div className="row">
              <div className="col-sm">
                <Donut
                  labels={[myStats.oppNeutralWins, myStats.neutralWins ]}
                  data={[myStats.oppNeutralWins, myStats.neutralWins ]}
                  title='Neutral Wins'
                  percentage = {parseInt((myStats.neutralWins/(myStats.oppNeutralWins + myStats.neutralWins)) * 100)}
                  player={this.state.searchCode}
                />
              </div>   
              <div className="col-sm">
                <Donut
                  labels={[myStats.oppCounterHits, myStats.counterHits, ]}
                  data={[myStats.oppCounterHits, myStats.counterHits]}
                  title='Counter Hits'
                  percentage = {parseInt((myStats.counterHits/(myStats.oppCounterHits + myStats.counterHits)) * 100)}
                  player={this.state.searchCode}
                />
              </div>    
              <div className="col-sm">
                <Donut
                  labels={[myStats.oppBeneficialTrades , myStats.beneficialTrades ]}
                  data={[ myStats.oppBeneficialTrades, myStats.beneficialTrades]}
                  title='Beneficial Trades'
                  percentage = {parseInt((myStats.beneficialTrades/(myStats.oppBeneficialTrades + myStats.beneficialTrades)) * 100)}
                  player={this.state.searchCode}
                />
              </div>  
              <div className="col-sm">
                <Donut
                  labels={[myStats.oppFirstBloods, myStats.firstBloods]}
                  data={[myStats.oppFirstBloods , myStats.firstBloods]}
                  title='First Bloods'
                  percentage = {parseInt((myStats.firstBloods/(myStats.oppFirstBloods + myStats.firstBloods)) * 100)}
                  player={this.state.searchCode}
                />
              </div>         
            </div>
            <div className="row">
              <div className="col-sm">
                <VerticalBarChart
                  label='Average KO Percent'
                  data={[myStats.avgKOpercent , myStats.oppAvgKOpercent]}
                  player={this.state.searchCode}
                />
              </div>
              <div className="col-sm">
                <VerticalBarChart
                  label='Openings Per KO'
                  data={[myStats.openingsPerKO.toFixed(2) , myStats.oppOpeningsPerKO.toFixed(2)]}
                  player={this.state.searchCode}
                />
              </div>
              <div className="col-sm">
                <VerticalBarChart
                  label='Successful Conversion Percent'
                  data={[myStats.conversionRate , myStats.oppConversionRate]}
                  player={this.state.searchCode}
                />
              </div>  
              <div className="col-sm">
                <VerticalBarChart
                  label='Average Damage Per Opening'
                  data={[myStats.avgDamagePerOpening , myStats.oppAvgDamagePerOpening]}
                  player={this.state.searchCode}
                />
              </div>  
            </div>
            <div className="row">
              <div className="col-sm">
                <VerticalBarChart
                  label='Highest Damage Punish'
                  data={[myStats.bestPunish.toFixed(2) , myStats.oppBestPunish.toFixed(2)]}
                  player={this.state.searchCode}
                />
              </div>
              <div className="col-sm">
                <VerticalBarChart
                  label='0 to Deaths'
                  data={[myStats.zeroToDeaths , myStats.oppZeroToDeaths]}
                  player={this.state.searchCode}
                />
              </div>
              <div className="col-sm">
                <VerticalBarChart
                  label='Lowest % Kill'
                  data={[myStats.lowestKill.toFixed(2) , myStats.oppLowestKill.toFixed(2)]}
                  player={this.state.searchCode}
                />
              </div>
              <div className="col-sm">
                <VerticalBarChart
                  label='Highest % Kill'
                  data={[myStats.highestKill.toFixed(2) , myStats.oppHighestKill.toFixed(2)]}
                  player={this.state.searchCode}
                />
              </div>  
            </div>
            <div className="row">
              <div className="col-sm">
                <VerticalBarChart
                  label='4 Stocks'
                  data={[myStats.fourStocks , myStats.oppFourStocks]}
                  player={this.state.searchCode}
                />
              </div>
              <div className="col-sm">
                <VerticalBarChart
                  label='Average Stocks Taken'
                  data={[myStats.avgStocksTaken.toFixed(2) , myStats.oppAvgStocksTaken.toFixed(2)]}
                  player={this.state.searchCode}
                />
              </div>
              <div className="col-sm">
                <VerticalBarChart
                  label='Average Stocks Won By'
                  data={[myStats.avgStockDifferential.toFixed(2) , myStats.oppAvgStockDifferential.toFixed(2)]}
                  player={this.state.searchCode}
                />
              </div>  
            </div>
            <div className="row">
              <div className="col-sm">
                <VerticalBarChart
                  label='Inputs Per Minute'
                  data={[myStats.inputsPM.toFixed(2) , myStats.oppIPM.toFixed(2)]}
                  player={this.state.searchCode}
                />
              </div>
              <div className="col-sm">
                <VerticalBarChart
                  label='Digital IPM'
                  data={[myStats.digitalIPM.toFixed(2) , myStats.oppDigitalIPM.toFixed(2)]}
                  player={this.state.searchCode}
                />
              </div>
              <div className="col-sm">
                <VerticalBarChart
                  label='Successful L Cancel %'
                  data={[myStats.lcancels , myStats.oppLcancels]}
                  player={this.state.searchCode}
                />
              </div>  
            </div>
            <div className="row">
              <div className="col-md" id="bigbar">
                <label>
                  Toggle Opponent Data:
                  <input
                    name="actionCheck"            
                    type="checkbox"
                    checked={this.state.actionCheck}
                    onChange={this.handleCheckChange} />
                </label>
                <ActionsBarChart
                  dataset = {actionsBarChartData(myStats.charUsage, myStats.actionCountArr, myStats.oppCharUsage, myStats.oppActionCountArr, this.state.actionCheck)}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md" id="bigbar">
                <div onChange={this.handleInputChange}>
                  <input type="radio" value="Neutral Wins" checked = {this.state.radio === 'Neutral Wins'} name="move" /> Neutral Wins
                  <input type="radio" value="Counter Hits" checked = {this.state.radio === 'Counter Hits'} name="move" /> Counter Hits
                  <input type="radio" value="Trades" checked = {this.state.radio === 'Trades'} name="move" /> Trades
                  <input type="radio" value="Kill Moves" checked = {this.state.radio === 'Kill Moves'} name="move" /> Kill Moves
                </div>
                <label>
                    Opponent Data:
                    <input
                      name="check"            
                      type="checkbox"
                      checked={this.state.check}
                      onChange={this.handleCheckChange} />
                  </label>


                <MovesBarChart
                  dataset = {movesBarChartData(
                    myStats.charUsage, myStats.moveUsageArr.neutralWinMoves, myStats.moveUsageArr.counterHitMoves, myStats.moveUsageArr.tradeMoves, myStats.moveUsageArr.killMoves,
                    myStats.oppCharUsage, myStats.oppMoveUsageArr.neutralWinMoves, myStats.oppMoveUsageArr.counterHitMoves, myStats.oppMoveUsageArr.tradeMoves, myStats.oppMoveUsageArr.killMoves,
                    this.state.check, this.state.radio)}
                  title = {this.state.radio}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-sm"> 
                <div id="container2">
                  <img src="cssp2bg.png" width="272" height="376" alt=""/>
                  <img src={`char_portraits/${myStats.rivalsCharId}/${myStats.rivalsColorId}.png`} width="272" height="376" alt=""/>
                  <img src="cssp2.png" width="272" height="376" alt=""/>
                  <p id="text">
                    {myStats.rival}
                  </p>
                </div>
              </div>
              <div className="col-sm-6">
                <Donut
                  labels={[myStats.vsRivalLoss + ' Loss', myStats.vsRivalWin + ' Wins']}
                  data={[myStats.vsRivalLoss, myStats.vsRivalWin]}
                  title='Winrate'
                  percentage = {parseInt((myStats.vsRivalWin/(myStats.vsRivalLoss + myStats.vsRivalWin)) * 100)}
                  player={myStats.rival}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md" id="bigbar">
                <TimeLineChart 
                  linedata={myStats.timeRangeWinrate}
                  bardata={myStats.totalranges}
                  rangearr={myStats.timeRanges} 
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md">
                {createQuitoutBarChartCharacterUsage(myStats.quitoutPercent, 'Character % of Matches Ending in LRAStart', this.state.charPieCheck)}
              </div>
            </div>
            <div className="row">
              <div className="col-md">
                {createQuitoutBarChartCharacterUsage(myStats.quitoutOppPercent, 'Opponent Character % of Matches Ending in LRAStart', this.state.charPieCheck)}
              </div>
            </div>
            <div className="row">
              <div className="col-md">
              <label>
                Opponent Data:
                <input
                  name="check"            
                  type="checkbox"
                  checked={this.state.check}
                  onChange={this.handleCheckChange} />
              </label>
                <FourStatBarChart
                  dataset = {fourStatBarChartComponent(
                    myStats.charUsage,
                    myStats.deathDirectionCharUsage,
                    myStats.oppCharUsage,
                    myStats.deathDirectionOppCharUsage,
                    this.state.check
                      )}
                  title = 'Deaths Direction'
                  labels = {['Down', 'Left', 'Right', 'Up']}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md">
                {createSuccessWhiffBarChart(
                  myStats.grabCountSuccessCharUsage,
                  myStats.grabCountWhiffCharUsage,
                  'Player Grab Whiff %',
                  'Success',
                  'Whiffed')}
              </div>
            </div>
            <div className="row">
              <div className="col-md">
                {createSuccessWhiffBarChart(
                  myStats.grabCountSuccessOppCharUsage,
                  myStats.grabCountWhiffOppCharUsage,
                  'Opponent Grab Whiff %',
                  'Success',
                  'Whiffed')}
              </div>
            </div>
            <div className="row">
              <div className="col-md">
              <label>
                Opponent Data:
                <input
                  name="check"            
                  type="checkbox"
                  checked={this.state.check}
                  onChange={this.handleCheckChange} />
              </label>
                <FourStatBarChart
                  dataset = {fourStatBarChartComponent(
                    myStats.charUsage,
                    myStats.throwCountCharUsage,
                    myStats.oppCharUsage,
                    myStats.throwCountOppCharUsage,
                    this.state.check
                      )}
                  title = 'Throws Direction'
                  labels = {['Up', 'Forward', 'Back', 'Down']}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md">
              <label>
                Opponent Data:
                <input
                  name="check"            
                  type="checkbox"
                  checked={this.state.check}
                  onChange={this.handleCheckChange} />
              </label>
                <FourStatBarChart
                  dataset = {fourStatBarChartComponent(
                    myStats.charUsage,
                    myStats.groundTechCountCharUsage,
                    myStats.oppCharUsage,
                    myStats.groundTechCountOppCharUsage,
                    this.state.check
                      )}
                  title = 'Tech Direction'
                  labels = {['Backward', 'Forward', 'Neutral', 'Missed']}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md">
                {createSuccessWhiffBarChart(
                  myStats.wallTechCountSuccessCharUsage,
                  myStats.wallTechCountFailCharUsage,
                  'Wall Tech %',
                  'Success',
                  'Missed')}
              </div>
            </div>
            <div className="row">
              <div className="col-md">
                {createSuccessWhiffBarChart(
                  myStats.wallTechCountSuccessOppCharUsage,
                  myStats.wallTechCountFailOppCharUsage,
                  'Opponent Wall Tech %',
                  'Success',
                  'Missed')}
              </div>
            </div>
            <div className="row">
              <div className="col-md">
                {createSuccessWhiffBarChart(
                  myStats.sdCharUsage,
                  myStats.deathUsage,
                  'SD %',
                  'SD',
                  'Regular Death')}
              </div>
            </div>
            <div className="row">
              <div className="col-md">
                {createSuccessWhiffBarChart(
                  myStats.sdOppCharUsage,
                  myStats.deathOppUsage,
                  'Opponent SD %',
                  'SD',
                  'Regular Death')}
              </div>
            </div>
          </Container>
        )
      }
      else if (statsLoaded === "loading")
      {
        return(
          <div>
            <div><ReactSpinner type="border" color="primary" size="5" /></div>
          </div>
        )
      }
    };

    return (
      <div className="list row">
        <div className="col-md-12">
          <Card>
            <Card.Body>
            <h2>Search Params</h2>
            <Form>
              <Form.Row>
                <Col>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Connect Code"
                    value={searchCode}
                    onChange={this.onChangeSearchCode}
                  />
                </Col>
                <Col>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Opponents Connect Code"
                    value={oppCode}
                    onChange={this.onChangeOppCode}
                  />
                </Col>
              </Form.Row>
              <Form.Row>
                <Col>
                  <Select 
                    menuPortalTarget={document.body} 
                    styles={{ menuPortal: base => ({ ...base, zIndex: 9999 })}} 
                    options={this.state.selectCharacters} 
                    onChange={this.myCharChange.bind(this)} 
                    placeholder = "Your Characters"
                    isMulti 
                  />
                </Col>
                <Col>
                  <Select 
                    menuPortalTarget={document.body} 
                    styles={{ menuPortal: base => ({ ...base, zIndex: 9999 })}} 
                    options={this.state.selectCharacters} 
                    onChange={this.myOppChange.bind(this)} 
                    placeholder = "Opponents Characters"
                    isMulti 
                  />
                </Col>
              </Form.Row>
              <Form.Row>
                <Col md={6}>
                  <Select 
                    menuPortalTarget={document.body} 
                    styles={{ menuPortal: base => ({ ...base, zIndex: 9999 })}} 
                    options={this.state.selectStages} 
                    onChange={this.stageChange.bind(this)} 
                    placeholder = "Stages"
                    isMulti 
                  />
                </Col>
                <Col>
                  <DateRangePicker
                    startDate={this.state.startDate} // momentPropTypes.momentObj or null,
                    startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
                    endDate={this.state.endDate} // momentPropTypes.momentObj or null,
                    endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
                    onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
                    focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                    onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
                    isOutsideRange={() => false}
                    small={true}
                  />
                </Col>
                <Col>
                <label>
                  <input
                    name="isOnlyComplete"
                    type="checkbox"
                    value={this.state.isOnlyComplete}
                    onChange={this.handleCheckChange}
                  />
                    &nbsp; Exclude games ending in LRA-Start
                </label>
                </Col>
              </Form.Row>
              <Form.Row>
                <Col>
                  <div className="col text-center">
                    <button
                      className="btn btn-outline-secondary"
                      type="button"
                      onClick={this.searchCode}
                    >
                      Search
                    </button>
                  </div>
                </Col>
              </Form.Row>
            </Form>
            </Card.Body>
          </Card>
          <hr class="my-4"></hr>
        </div>
        <div className="col-md-12">
          {renderStats()}
        </div>
      </div>
    );
  }

}