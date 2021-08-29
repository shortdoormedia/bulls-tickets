import { FaDollarSign } from 'react-icons/fa'
import { StatCardProps } from '../components/StatCard'
import { gamedata } from '../data/_games'


let totalTicketCost = 0;
let avgTicketCost = 0;
let numberGames = 0;
let totalAttended = 0;
let numAttended = 0;
let totalSold = 0;
let numSold = 0;
let overallSeasonCost = 0;
for (const game in gamedata) {
    const g = gamedata[game];
    totalTicketCost = totalTicketCost + g.totals.ticketCost;
    console.log(g);
    numberGames++;
    if(g.stats.sold) {
        numSold++;
        totalSold = totalSold + g.totals.ticketSales;
    }
    if(g.stats.attended) {
        numAttended++;
        totalAttended = totalAttended + g.totals.gameCosts + g.totals.ticketCost;
    }
    overallSeasonCost = overallSeasonCost + g.totals.gameCosts + g.totals.ticketCost;
    avgTicketCost = totalTicketCost / numberGames;
}

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
        value: overallSeasonCost,
        change: { value: totalSold - overallSeasonCost, percent: (totalSold / overallSeasonCost)*100 },
        currency: '$',
    },
]