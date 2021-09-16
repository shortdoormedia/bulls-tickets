import { FaDollarSign } from 'react-icons/fa'
import { StatCardProps } from '../components/StatCard'
import { gamedata } from './_games'


// This is totally a non optimized way of doing this... all of this...
// the data.. the math.. do it in a DB or literally any other way.
let totalTicketCost = 0;
let numberGames = 0;
let totalAttended = 0;
let numAttended = 0;
let totalSold = 0;
let numSold = 0;
let overallSeasonCost = 0;
for (const game in gamedata) {
    const g = gamedata[game];
    totalTicketCost = totalTicketCost + g.totals.ticketCost;
    // Sure but probably can grab length of game object...
    // not sure how we got here... was there a reason..
    numberGames++;
    // Sold Game..
    if(g.stats.sold) {
        numSold++;
        totalSold = totalSold + g.totals.ticketSales;
    }
    // Attended Games
    if(g.stats.attended) {
        numAttended++;
        totalAttended = totalAttended + g.totals.gameCosts + g.totals.ticketCost;
    }
    // Overall
    overallSeasonCost = overallSeasonCost + g.totals.gameCosts + g.totals.ticketCost;

}
// Every game is the same price so this can technically be set
// but if you ticket upgrade or for some reason wanted to know
// actual average ticket value here you go.
let avgTicketCost = totalTicketCost / numberGames;

type Icons = Record<string, { icon: React.ElementType; color: string }>

export const icons: Icons = {
    UPFRONT: {
        icon: FaDollarSign,
        color: '#ee8c28',
    },
    ATTENDED: {
        icon: FaDollarSign,
        color: '#ee8c28',
    },
    SOLD: {
        icon: FaDollarSign,
        color: '#3c3c3d',
    },
    OVERALL: {
        icon: FaDollarSign,
        color: '#006097',
    },
}

export const data: StatCardProps['data'][] = [
    {
        symbol: 'UPFRONT',
        label: 'Season Ticket Cost',
        value: totalTicketCost,
        change: { value: 0.00, percent: +0.00},
        currency: '$',
    },
    {
        symbol: 'ATTENDED',
        label: 'Avg Attended Game',
        value: totalAttended/numAttended || 0.00,
        change: { value: avgTicketCost, percent: +0.00 },
        currency: '$',
    },
    {
        symbol: 'SOLD',
        label: 'Avg Sold Game',
        value: totalSold/numSold || 0.00,
        change: { value: 0.00, percent: +0.00 },
        currency: '$',
    },
    {
        symbol: 'OVERALL',
        label: 'Overall Season Cost',
        value: overallSeasonCost - totalSold,
        change: { value: totalSold - overallSeasonCost, percent: (1-(totalSold/overallSeasonCost))*100 },
        currency: '$',
    },
]