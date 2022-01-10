import * as React from 'react'
import { GameCardProps } from '../components/GameCard'

export const gamedata: GameCardProps['data'][] = [
  {
    awayTeam: 'Cleveland Cavaliers',
    awayTeamLogo: 'CLE',
    awayTeamRecord: '0-1',
    awayTeamScore: 95,
    awayTeamStreak: 'L1',
    homeTeam: 'Chicago Bulls',
    homeTeamLogo: 'CHI',
    homeTeamRecord: '1-0',
    homeTeamScore: 131,
    homeTeamStreak: 'W1',
    instagramLink: '',
    gameId: '',
    gameDate: '2021-10-05',
    gameTime: '7:00pm CST',
    gameType: 'preseason',
    purchases: {
      parking: false,
      food: true,
      drinks: false,
      merchandise: false,
    },
    stats: {
      attended: false,
      sold: true,
      soldDate: '2021-08-28',
      giveaway: false,
      notes: 'Preseason Home Opener',
      status: 'Sold Both',
      statusColorScheme: 'green',
      tv: 'NBCSN+',
      weather: 60,
      win: true,
    },
    totals: {
      currency: '$',
      gameCosts: 0.00,
      ticketCost: 309.12,
      ticketSales: 210.00,
    },
  },
  {
    awayTeam: 'New Orleans Pelicans',
    awayTeamLogo: 'NOP',
    awayTeamRecord: '1-2',
    awayTeamScore: 85,
    awayTeamStreak: 'W1',
    homeTeam: 'Chicago Bulls',
    homeTeamLogo: 'CHI',
    homeTeamRecord: '2-0',
    homeTeamScore: 121,
    homeTeamStreak: 'W2',
    instagramLink: '',
    gameId: '',
    gameDate: '2021-10-08',
    gameTime: '7:00pm CST',
    gameType: 'preseason',
    purchases: {
      parking: false,
      food: true,
      drinks: false,
      merchandise: false,
    },
    stats: {
      attended: false,
      sold: true,
      soldDate: '2021-10-08',
      giveaway: false,
      notes: '',
      status: 'Sold Both',
      statusColorScheme: 'green',
      tv: 'NBCSN+',
      weather: 60,
      win: true,
    },
    totals: {
      currency: '$',
      gameCosts: 0.00,
      ticketCost: 309.12,
      ticketSales: 	158.00
    },
  },
  {
    awayTeam: 'Memphis Grizzlies',
    awayTeamLogo: 'MEM',
    awayTeamRecord: '3-3',
    awayTeamScore: 105,
    awayTeamStreak: 'L1',
    homeTeam: 'Chicago Bulls',
    homeTeamLogo: 'CHI',
    homeTeamRecord: '4-0',
    homeTeamScore: 118,
    homeTeamStreak: 'W4',
    instagramLink: '',
    gameId: '',
    gameDate: '2021-10-15',
    gameTime: '7:00pm CST',
    gameType: 'preseason',
    purchases: {
      parking: false,
      food: false,
      drinks: false,
      merchandise: false,
    },
    stats: {
      attended: false,
      sold: true,
      soldDate:'2021-09-15',
      giveaway: false,
      notes: '',
      status: 'Sold Both',
      statusColorScheme: 'green',
      tv: 'NBCSN',
      weather: 65,
      win: true,
    },
    totals: {
      currency: '$',
      gameCosts: 0.00,
      ticketCost: 309.12,
      ticketSales: 160.00,
    },
  },
  {
    awayTeam: 'New Orleans Pelicans',
    awayTeamLogo: 'NOP',
    awayTeamRecord: '0-2',
    awayTeamScore: 112,
    awayTeamStreak: 'L1',
    homeTeam: 'Chicago Bulls',
    homeTeamLogo: 'CHI',
    homeTeamRecord: '2-0',
    homeTeamScore: 128,
    homeTeamStreak: 'W1',
    instagramLink: '',
    gameId: 'https://www.basketball-reference.com/boxscores/202110220CHI.html',
    gameDate: '2021-10-22',
    gameTime: '7:00pm',
    gameType: 'regular season',
    purchases: {
      parking: false,
      food: false,
      drinks: false,
      merchandise: false
    },
    stats: {
      attended: true,
      sold: false,
      soldDate: '',
      giveaway: true,
      notes: 'Home Opener',
      status: 'Attended',
      statusColorScheme: 'blue',
      tv: 'NBCSN',
      weather: 53,
      win: true,
    },
    totals: {
      currency: '$',
      gameCosts: 20.00,
      ticketCost: 309.12,
      ticketSales: 0.00,
    },
  },
  {
    awayTeam: 'Detroit Pistons',
    awayTeamLogo: 'DET',
    awayTeamRecord: '0-2',
    awayTeamScore: 82,
    awayTeamStreak: 'L2',
    homeTeam: 'Chicago Bulls',
    homeTeamLogo: 'CHI',
    homeTeamRecord: '3-0',
    homeTeamScore: 97,
    homeTeamStreak: 'W3',
    instagramLink: '',
    gameId: 'https://www.basketball-reference.com/boxscores/202110230CHI.html',
    gameDate: '2021-10-23',
    gameTime: '7:00pm',
    gameType: 'regular season',
    purchases: {
      parking: false,
      food: false,
      drinks: false,
      merchandise: false
    },
    stats: {
      attended: true,
      sold: false,
      soldDate: '',
      giveaway: false,
      notes: '',
      status: 'Attended',
      statusColorScheme: 'blue',
      tv: 'NBCSN',
      weather: 49,
      win: true,
    },
    totals: {
      currency: '$',
      gameCosts: 0.00,
      ticketCost: 309.12,
      ticketSales: 0.00,
    },
  },
  {
    awayTeam: 'New York Knicks',
    awayTeamLogo: 'NYK',
    awayTeamRecord: '4-1',
    awayTeamScore: 104,
    awayTeamStreak: 'W1',
    homeTeam: 'Chicago Bulls',
    homeTeamLogo: 'CHI',
    homeTeamRecord: '4-1',
    homeTeamScore: 103,
    homeTeamStreak: 'W4',
    instagramLink: '',
    gameId: 'https://www.basketball-reference.com/boxscores/202110280CHI.html',
    gameDate: '2021-10-28',
    gameTime: '7:00pm',
    gameType: 'regular season',
    purchases: {
      parking: false,
      food: false,
      drinks: false,
      merchandise: false
    },
    stats: {
      attended: false,
      sold: true,
      soldDate: '2021-10-24',
      giveaway: false,
      notes: 'Joakim Noah Appreciation Night',
      status: 'Sold Both',
      statusColorScheme: 'green',
      tv: 'NBCSN',
      weather: 56,
      win: false,
    },
    totals: {
      currency: '$',
      gameCosts: 0.00,
      ticketCost: 309.12,
      ticketSales: 454.00,
    },
  },
  {
    awayTeam: 'Utah Jazz',
    awayTeamLogo: 'UTA',
    awayTeamRecord: '4-1',
    awayTeamScore: 99,
    awayTeamStreak: 'W4',
    homeTeam: 'Chicago Bulls',
    homeTeamLogo: 'CHI',
    homeTeamRecord: '5-1',
    homeTeamScore: 107,
    homeTeamStreak: 'L1',
    instagramLink: '',
    gameId: 'https://www.basketball-reference.com/boxscores/202110300CHI.html',
    gameDate: '2021-10-30',
    gameTime: '7:00pm',
    gameType: 'regular season',
    purchases: {
      parking: false,
      food: true,
      drinks: true,
      merchandise: false
    },
    stats: {
      attended: true,
      sold: false,
      soldDate: '',
      giveaway: false,
      notes: '',
      status: 'Attended',
      statusColorScheme: 'blue',
      tv: 'NBCSN',
      weather: 50,
      win: true,
    },
    totals: {
      currency: '$',
      gameCosts: 39.62,
      ticketCost: 309.12,
      ticketSales: 0.00,
    },
  },
  {
    awayTeam: 'Philadelphia 76ers',
    awayTeamLogo: 'PHI',
    awayTeamRecord: '6-2',
    awayTeamScore: 103,
    awayTeamStreak: 'W6',
    homeTeam: 'Chicago Bulls',
    homeTeamLogo: 'CHI',
    homeTeamRecord: '5-3',
    homeTeamScore: 98,
    homeTeamStreak: 'L2',
    instagramLink: '',
    gameId: 'https://www.basketball-reference.com/boxscores/202111060CHI.html',
    gameDate: '2021-11-06',
    gameTime: '7:00pm',
    gameType: 'regular season',
    purchases: {
      parking: false,
      food: true,
      drinks: true,
      merchandise: false
    },
    stats: {
      attended: true,
      sold: false,
      soldDate: '',
      giveaway: false,
      notes: 'I drank so much I thought this was a win.',
      status: 'Attended',
      statusColorScheme: 'blue',
      tv: 'NBCSN',
      weather: 53,
      win: false,
    },
    totals: {
      currency: '$',
      gameCosts: 53.35,
      ticketCost: 309.12,
      ticketSales: 0.00,
    },
  },
  {
    awayTeam: 'Brooklyn Nets',
    awayTeamLogo: 'BKN',
    awayTeamRecord: '0-0',
    awayTeamScore: 95,
    awayTeamStreak: 'W0',
    homeTeam: 'Chicago Bulls',
    homeTeamLogo: 'CHI',
    homeTeamRecord: '6-3',
    homeTeamScore: 118,
    homeTeamStreak: 'W1',
    instagramLink: '',
    gameId: 'https://www.basketball-reference.com/boxscores/202111080CHI.html',
    gameDate: '2021-11-08',
    gameTime: '7:00pm',
    gameType: 'regular season',
    purchases: {
      parking: false,
      food: true,
      drinks: true,
      merchandise: false
    },
    stats: {
      attended: true,
      sold: false,
      soldDate: '',
      giveaway: false,
      notes: '',
      status: 'Attended',
      statusColorScheme: 'blue',
      tv: 'NBCSN',
      weather: 57,
      win: true,
    },
    totals: {
      currency: '$',
      gameCosts: 32.65,
      ticketCost: 309.12,
      ticketSales: 0.00,
    },
  },
  {
    awayTeam: 'Dallas Mavericks',
    awayTeamLogo: 'DAL',
    awayTeamRecord: '7-4',
    awayTeamScore: 107,
    awayTeamStreak: 'L1',
    homeTeam: 'Chicago Bulls',
    homeTeamLogo: 'CHI',
    homeTeamRecord: '8-3',
    homeTeamScore: 117,
    homeTeamStreak: 'W2',
    instagramLink: '',
    gameId: 'https://www.basketball-reference.com/boxscores/202111100CHI.html',
    gameDate: '2021-11-10',
    gameTime: '7:00pm',
    gameType: 'regular season',
    purchases: {
      parking: false,
      food: false,
      drinks: false,
      merchandise: false
    },
    stats: {
      attended: true,
      sold: false,
      soldDate: '',
      giveaway: false,
      notes: '',
      status: 'Attended',
      statusColorScheme: 'blue',
      tv: 'NBCSN',
      weather: 57,
      win: true,
    },
    totals: {
      currency: '$',
      gameCosts: 76.05,
      ticketCost: 309.12,
      ticketSales: 0.00,
    },
  },
  {
    awayTeam: 'New York Knicks',
    awayTeamLogo: 'NYK',
    awayTeamRecord: '9-8',
    awayTeamScore: 103,
    awayTeamStreak: 'L1',
    homeTeam: 'Chicago Bulls',
    homeTeamLogo: 'CHI',
    homeTeamRecord: '12-5',
    homeTeamScore: 109,
    homeTeamStreak: 'W2',
    instagramLink: '',
    gameId: 'https://www.basketball-reference.com/boxscores/202111210CHI.html',
    gameDate: '2021-11-21',
    gameTime: '7:00pm',
    gameType: 'regular season',
    purchases: {
      parking: false,
      food: false,
      drinks: false,
      merchandise: false
    },
    stats: {
      attended: false,
      sold: true,
      soldDate: '2021-11-04',
      giveaway: true,
      notes: 'Joakin Noah Bobble Head',
      status: 'Sold Both',
      statusColorScheme: 'green',
      tv: 'NBCSN',
      weather: 50,
      win: true,
    },
    totals: {
      currency: '$',
      gameCosts: 0.00,
      ticketCost: 309.12,
      ticketSales: 458.00,
    },
  },
  {
    awayTeam: 'Indiana Pacers',
    awayTeamLogo: 'IND',
    awayTeamRecord: '8-11',
    awayTeamScore: 109,
    awayTeamStreak: 'W2',
    homeTeam: 'Chicago Bulls',
    homeTeamLogo: 'CHI',
    homeTeamRecord: '12-6',
    homeTeamScore: 77,
    homeTeamStreak: 'L1',
    instagramLink: '',
    gameId: 'https://www.basketball-reference.com/boxscores/202111220CHI.html',
    gameDate: '2021-11-22',
    gameTime: '7:00pm',
    gameType: 'regular season',
    purchases: {
      parking: false,
      food: false,
      drinks: true,
      merchandise: false
    },
    stats: {
      attended: true,
      sold: false,
      soldDate: '',
      giveaway: false,
      notes: 'Beat Down',
      status: 'Attended',
      statusColorScheme: 'blue',
      tv: 'NBCSN',
      weather: 25,
      win: false,
    },
    totals: {
      currency: '$',
      gameCosts: 26.84,
      ticketCost: 309.12,
      ticketSales: 0.00,
    },
  },
  {
    awayTeam: 'Miami Heat',
    awayTeamLogo: 'MIA',
    awayTeamRecord: '13-7',
    awayTeamScore: 107,
    awayTeamStreak: 'W1',
    homeTeam: 'Chicago Bulls',
    homeTeamLogo: 'CHI',
    homeTeamRecord: '13-8',
    homeTeamScore: 104,
    homeTeamStreak: 'L1',
    instagramLink: '',
    gameId: 'https://www.basketball-reference.com/boxscores/202111270CHI.html',
    gameDate: '2021-11-27',
    gameTime: '7:00pm',
    gameType: 'regular season',
    purchases: {
      parking: false,
      food: false,
      drinks: false,
      merchandise: false
    },
    stats: {
      attended: false,
      sold: true,
      soldDate: '2021-11-22',
      giveaway: false,
      notes: '',
      status: 'Sold Both',
      statusColorScheme: 'green',
      tv: 'NBCSN',
      weather: 41,
      win: false,
    },
    totals: {
      currency: '$',
      gameCosts: 0.00,
      ticketCost: 309.12,
      ticketSales: 800.00,
    },
  },
  {
    awayTeam: 'Charlotte Hornets',
    awayTeamLogo: 'CHA',
    awayTeamRecord: '13-10',
    awayTeamScore: 119,
    awayTeamStreak: 'L2',
    homeTeam: 'Chicago Bulls',
    homeTeamLogo: 'CHI',
    homeTeamRecord: '14-8',
    homeTeamScore: 133,
    homeTeamStreak: 'W1',
    instagramLink: '',
    gameId: 'https://www.basketball-reference.com/boxscores/202111300CHI.html',
    gameDate: '2021-11-29',
    gameTime: '7:00pm',
    gameType: 'regular season',
    purchases: {
      parking: false,
      food: false,
      drinks: false,
      merchandise: false
    },
    stats: {
      attended: false,
      sold: true,
      soldDate: '2021-11-20',
      giveaway: false,
      notes: '',
      status: 'Sold Both',
      statusColorScheme: 'green',
      tv: 'NBCSN',
      weather: 40,
      win: true,
    },
    totals: {
      currency: '$',
      gameCosts: 0.00,
      ticketCost: 309.12,
      ticketSales: 496.00,
    },
  },
  {
    awayTeam: 'Denver Nuggets',
    awayTeamLogo: 'DEN',
    awayTeamRecord: '11-12',
    awayTeamScore: 97,
    awayTeamStreak: 'L1',
    homeTeam: 'Chicago Bulls',
    homeTeamLogo: 'CHI',
    homeTeamRecord: '17-8',
    homeTeamScore: 109,
    homeTeamStreak: 'W3',
    instagramLink: '',
    gameId: 'https://www.basketball-reference.com/boxscores/202112060CHI.html',
    gameDate: '2021-12-06',
    gameTime: '7:00pm',
    gameType: 'regular season',
    purchases: {
      parking: false,
      food: false,
      drinks: false,
      merchandise: false
    },
    stats: {
      attended: false,
      sold: true,
      soldDate: '2021-11-24',
      giveaway: false,
      notes: '',
      status: 'Sold Both',
      statusColorScheme: 'green',
      tv: 'NBCSN',
      weather: 23,
      win: true,
    },
    totals: {
      currency: '$',
      gameCosts: 0.00,
      ticketCost: 309.12,
      ticketSales: 450.00,
    },
  },
  {
    awayTeam: 'Detroit Pistons',
    awayTeamLogo: 'DET',
    awayTeamRecord: '0-0',
    awayTeamScore: 0,
    awayTeamStreak: 'W0',
    homeTeam: 'Chicago Bulls',
    homeTeamLogo: 'CHI',
    homeTeamRecord: '0-0',
    homeTeamScore: 0,
    homeTeamStreak: 'W0',
    instagramLink: '',
    gameId: '',
    gameDate: '2021-12-14',
    gameTime: '7:00pm',
    gameType: 'regular season',
    purchases: {
      parking: false,
      food: false,
      drinks: false,
      merchandise: false
    },
    stats: {
      attended: false,
      sold: false,
      soldDate: '',
      giveaway: false,
      notes: '',
      status: 'POSTPONED',
      statusColorScheme: 'blue',
      tv: '',
      weather: 0,
      win: false,
    },
    totals: {
      currency: '$',
      gameCosts: 0.00,
      ticketCost: 309.12,
      ticketSales: 0.00,
    },
  },
  {
    awayTeam: 'LA Lakers',
    awayTeamLogo: 'LAL',
    awayTeamRecord: '16-15',
    awayTeamScore: 110,
    awayTeamStreak: 'L2',
    homeTeam: 'Chicago Bulls',
    homeTeamLogo: 'CHI',
    homeTeamRecord: '18-10',
    homeTeamScore: 115,
    homeTeamStreak: 'W1',
    instagramLink: '',
    gameId: 'https://www.basketball-reference.com/boxscores/202112190CHI.html',
    gameDate: '2021-12-19',
    gameTime: '7:00pm',
    gameType: 'regular season',
    purchases: {
      parking: false,
      food: false,
      drinks: false,
      merchandise: false
    },
    stats: {
      attended: false,
      sold: true,
      soldDate: '2021-11-13',
      giveaway: false,
      notes: 'LeBron',
      status: 'Sold Both',
      statusColorScheme: 'green',
      tv: 'NBCSN',
      weather: 34,
      win: true,
    },
    totals: {
      currency: '$',
      gameCosts: 0.00,
      ticketCost: 309.12,
      ticketSales: 1500.00,
    },
  },
  {
    awayTeam: 'Houston Rockets',
    awayTeamLogo: 'HOU',
    awayTeamRecord: '10-21',
    awayTeamScore: 118,
    awayTeamStreak: 'L1',
    homeTeam: 'Chicago Bulls',
    homeTeamLogo: 'CHI',
    homeTeamRecord: '19-10',
    homeTeamScore: 133,
    homeTeamStreak: 'W2',
    instagramLink: '',
    gameId: 'https://www.basketball-reference.com/boxscores/202112200CHI.html',
    gameDate: '2021-12-20',
    gameTime: '7:00pm',
    gameType: 'regular season',
    purchases: {
      parking: false,
      food: true,
      drinks: true,
      merchandise: true
    },
    stats: {
      attended: true,
      sold: false,
      soldDate: '',
      giveaway: false,
      notes: '',
      status: 'Attended',
      statusColorScheme: 'blue',
      tv: 'NBCSN',
      weather: 38,
      win: true,
    },
    totals: {
      currency: '$',
      gameCosts: 53.42,
      ticketCost: 309.12,
      ticketSales: 0.00,
    },
  },
  {
    awayTeam: 'Toronto Raptors',
    awayTeamLogo: 'TOR',
    awayTeamRecord: '0-0',
    awayTeamScore: 0,
    awayTeamStreak: 'W0',
    homeTeam: 'Chicago Bulls',
    homeTeamLogo: 'CHI',
    homeTeamRecord: '0-0',
    homeTeamScore: 0,
    homeTeamStreak: 'W0',
    instagramLink: '',
    gameId: '',
    gameDate: '2021-12-22',
    gameTime: '7:00pm',
    gameType: 'regular season',
    purchases: {
      parking: false,
      food: false,
      drinks: false,
      merchandise: false
    },
    stats: {
      attended: false,
      sold: true,
      soldDate: '2021-12-22',
      giveaway: false,
      notes: '',
      status: 'Postponed',
      statusColorScheme: 'blue',
      tv: 'NBCSN',
      weather: 0,
      win: false,
    },
    totals: {
      currency: '$',
      gameCosts: 0.00,
      ticketCost: 309.12,
      ticketSales: 300.00,
    },
  },
  {
    awayTeam: 'Indiana Pacers',
    awayTeamLogo: 'IND',
    awayTeamRecord: '14-20',
    awayTeamScore: 105,
    awayTeamStreak: 'L1',
    homeTeam: 'Chicago Bulls',
    homeTeamLogo: 'CHI',
    homeTeamRecord: '20-10',
    homeTeamScore: 113,
    homeTeamStreak: 'W3',
    instagramLink: '',
    gameId: 'https://www.basketball-reference.com/boxscores/202112260CHI.html',
    gameDate: '2021-12-26',
    gameTime: '7:00pm',
    gameType: 'regular season',
    purchases: {
      parking: false,
      food: false,
      drinks: false,
      merchandise: false
    },
    stats: {
      attended: false,
      sold: true,
      soldDate: '2021-12-16',
      giveaway: false,
      notes: '',
      status: 'Sold Both',
      statusColorScheme: 'green',
      tv: 'NBCSN',
      weather: 38,
      win: true,
    },
    totals: {
      currency: '$',
      gameCosts: 0.00,
      ticketCost: 309.12,
      ticketSales: 400.00,
    },
  },
  {
    awayTeam: 'Atlanta Hawks',
    awayTeamLogo: 'ATL',
    awayTeamRecord: '15-19',
    awayTeamScore: 117,
    awayTeamStreak: 'L3',
    homeTeam: 'Chicago Bulls',
    homeTeamLogo: 'CHI',
    homeTeamRecord: '22-10',
    homeTeamScore: 131,
    homeTeamStreak: 'W5',
    instagramLink: '',
    gameId: 'https://www.basketball-reference.com/boxscores/202112290CHI.html',
    gameDate: '2021-12-29',
    gameTime: '7:00pm',
    gameType: 'regular season',
    purchases: {
      parking: false,
      food: false,
      drinks: false,
      merchandise: false
    },
    stats: {
      attended: false,
      sold: true,
      soldDate: '2021-12-29',
      giveaway: false,
      notes: '',
      status: 'Attended',
      statusColorScheme: 'blue',
      tv: 'NBCSN',
      weather: 36,
      win: true,
    },
    totals: {
      currency: '$',
      gameCosts: 0.00,
      ticketCost: 309.12,
      ticketSales: 400.00,
    },
  },
  {
    awayTeam: 'Orlando Magic',
    awayTeamLogo: 'ORL',
    awayTeamRecord: '7-31',
    awayTeamScore: 98,
    awayTeamStreak: 'l6',
    homeTeam: 'Chicago Bulls',
    homeTeamLogo: 'CHI',
    homeTeamRecord: '25-10',
    homeTeamScore: 102,
    homeTeamStreak: 'W8',
    instagramLink: '',
    gameId: 'https://www.basketball-reference.com/boxscores/202201030CHI.html',
    gameDate: '2021-01-03',
    gameTime: '7:00pm',
    gameType: 'regular season',
    purchases: {
      parking: false,
      food: true,
      drinks: true,
      merchandise: true
    },
    stats: {
      attended: true,
      sold: false,
      soldDate: '',
      giveaway: false,
      notes: '',
      status: 'Attended',
      statusColorScheme: 'blue',
      tv: 'NBCSN',
      weather: 21,
      win: true,
    },
    totals: {
      currency: '$',
      gameCosts: 61.19,
      ticketCost: 309.12,
      ticketSales: 0.00,
    },
  },
  {
    awayTeam: 'Washington Wizards',
    awayTeamLogo: 'WAS',
    awayTeamRecord: '19-22',
    awayTeamScore: 122,
    awayTeamStreak: 'L2',
    homeTeam: 'Chicago Bulls',
    homeTeamLogo: 'CHI',
    homeTeamRecord: '26-10',
    homeTeamScore: 130,
    homeTeamStreak: 'W9',
    instagramLink: '',
    gameId: 'https://www.basketball-reference.com/boxscores/202201070CHI.html',
    gameDate: '2021-01-07',
    gameTime: '7:00pm',
    gameType: 'regular season',
    purchases: {
      parking: false,
      food: true,
      drinks: true,
      merchandise: false
    },
    stats: {
      attended: true,
      sold: false,
      soldDate: '',
      giveaway: false,
      notes: '',
      status: 'Attended',
      statusColorScheme: 'blue',
      tv: 'NBCSN',
      weather: 12,
      win: true,
    },
    totals: {
      currency: '$',
      gameCosts: 35.50,
      ticketCost: 309.12,
      ticketSales: 0.00,
    },
  },
  {
    awayTeam: 'Brooklyn Nets',
    awayTeamLogo: 'BKN',
    awayTeamRecord: '0-0',
    awayTeamScore: 0,
    awayTeamStreak: 'W0',
    homeTeam: 'Chicago Bulls',
    homeTeamLogo: 'CHI',
    homeTeamRecord: '0-0',
    homeTeamScore: 0,
    homeTeamStreak: 'W0',
    instagramLink: '',
    gameId: '',
    gameDate: '2021-01-12',
    gameTime: '9:00pm',
    gameType: 'regular season',
    purchases: {
      parking: false,
      food: false,
      drinks: false,
      merchandise: false
    },
    stats: {
      attended: false,
      sold: false,
      soldDate: '',
      giveaway: false,
      notes: '',
      status: 'for sale',
      statusColorScheme: 'blue',
      tv: '',
      weather: 0,
      win: false,
    },
    totals: {
      currency: '$',
      gameCosts: 0.00,
      ticketCost: 309.12,
      ticketSales: 0.00,
    },
  },
  {
    awayTeam: 'Golden State Warriors',
    awayTeamLogo: 'GSW',
    awayTeamRecord: '0-0',
    awayTeamScore: 0,
    awayTeamStreak: 'W0',
    homeTeam: 'Chicago Bulls',
    homeTeamLogo: 'CHI',
    homeTeamRecord: '0-0',
    homeTeamScore: 0,
    homeTeamStreak: 'W0',
    instagramLink: '',
    gameId: '',
    gameDate: '2021-01-14',
    gameTime: '9:00pm',
    gameType: 'regular season',
    purchases: {
      parking: false,
      food: false,
      drinks: false,
      merchandise: false
    },
    stats: {
      attended: false,
      sold: true,
      soldDate: '2021-12-19',
      giveaway: false,
      notes: '',
      status: 'for sale',
      statusColorScheme: 'blue',
      tv: '',
      weather: 0,
      win: false,
    },
    totals: {
      currency: '$',
      gameCosts: 0.00,
      ticketCost: 309.12,
      ticketSales: 1500.00,
    },
  },
  {
    awayTeam: 'Cleveland Cavaliers',
    awayTeamLogo: 'CLE',
    awayTeamRecord: '0-0',
    awayTeamScore: 0,
    awayTeamStreak: 'W0',
    homeTeam: 'Chicago Bulls',
    homeTeamLogo: 'CHI',
    homeTeamRecord: '0-0',
    homeTeamScore: 0,
    homeTeamStreak: 'W0',
    instagramLink: '',
    gameId: '',
    gameDate: '2021-01-19',
    gameTime: '9:00pm',
    gameType: 'regular season',
    purchases: {
      parking: false,
      food: false,
      drinks: false,
      merchandise: false
    },
    stats: {
      attended: false,
      sold: false,
      soldDate: '',
      giveaway: false,
      notes: '',
      status: 'for sale',
      statusColorScheme: 'blue',
      tv: '',
      weather: 0,
      win: false,
    },
    totals: {
      currency: '$',
      gameCosts: 0.00,
      ticketCost: 309.12,
      ticketSales: 0.00,
    },
  },
  {
    awayTeam: 'Portland Trail Blazers',
    awayTeamLogo: 'POR',
    awayTeamRecord: '0-0',
    awayTeamScore: 0,
    awayTeamStreak: 'W0',
    homeTeam: 'Chicago Bulls',
    homeTeamLogo: 'CHI',
    homeTeamRecord: '0-0',
    homeTeamScore: 0,
    homeTeamStreak: 'W0',
    instagramLink: '',
    gameId: '',
    gameDate: '2021-01-30',
    gameTime: '2:30pm',
    gameType: 'regular season',
    purchases: {
      parking: false,
      food: false,
      drinks: false,
      merchandise: false
    },
    stats: {
      attended: false,
      sold: true,
      soldDate: '2021-11-28',
      giveaway: false,
      notes: '',
      status: 'Sold Both',
      statusColorScheme: 'green',
      tv: '',
      weather: 0,
      win: false,
    },
    totals: {
      currency: '$',
      gameCosts: 0.00,
      ticketCost: 309.12,
      ticketSales: 309.12,
    },
  },
  {
    awayTeam: 'Orlando Magic',
    awayTeamLogo: 'ORL',
    awayTeamRecord: '0-0',
    awayTeamScore: 0,
    awayTeamStreak: 'W0',
    homeTeam: 'Chicago Bulls',
    homeTeamLogo: 'CHI',
    homeTeamRecord: '0-0',
    homeTeamScore: 0,
    homeTeamStreak: 'W0',
    instagramLink: '',
    gameId: '',
    gameDate: '2021-02-01',
    gameTime: '2:30pm',
    gameType: 'regular season',
    purchases: {
      parking: false,
      food: false,
      drinks: false,
      merchandise: false
    },
    stats: {
      attended: false,
      sold: false,
      soldDate: '',
      giveaway: false,
      notes: '',
      status: 'for sale',
      statusColorScheme: 'blue',
      tv: '',
      weather: 0,
      win: false,
    },
    totals: {
      currency: '$',
      gameCosts: 0.00,
      ticketCost: 309.12,
      ticketSales: 0.00,
    },
  },
  {
    awayTeam: 'Philadelphia 76ers',
    awayTeamLogo: 'PHI',
    awayTeamRecord: '0-0',
    awayTeamScore: 0,
    awayTeamStreak: 'W0',
    homeTeam: 'Chicago Bulls',
    homeTeamLogo: 'CHI',
    homeTeamRecord: '0-0',
    homeTeamScore: 0,
    homeTeamStreak: 'W0',
    instagramLink: '',
    gameId: '',
    gameDate: '2021-02-06',
    gameTime: '2:30pm',
    gameType: 'regular season',
    purchases: {
      parking: false,
      food: false,
      drinks: false,
      merchandise: false
    },
    stats: {
      attended: false,
      sold: false,
      soldDate: '',
      giveaway: false,
      notes: '',
      status: 'for sale',
      statusColorScheme: 'blue',
      tv: '',
      weather: 0,
      win: false,
    },
    totals: {
      currency: '$',
      gameCosts: 0.00,
      ticketCost: 309.12,
      ticketSales: 0.00,
    },
  },
  {
    awayTeam: 'Phoenix Suns',
    awayTeamLogo: 'PHX',
    awayTeamRecord: '0-0',
    awayTeamScore: 0,
    awayTeamStreak: 'W0',
    homeTeam: 'Chicago Bulls',
    homeTeamLogo: 'CHI',
    homeTeamRecord: '0-0',
    homeTeamScore: 0,
    homeTeamStreak: 'W0',
    instagramLink: '',
    gameId: '',
    gameDate: '2021-02-07',
    gameTime: '7:00pm',
    gameType: 'regular season',
    purchases: {
      parking: false,
      food: false,
      drinks: false,
      merchandise: false
    },
    stats: {
      attended: false,
      sold: false,
      soldDate: '',
      giveaway: false,
      notes: '',
      status: 'for sale',
      statusColorScheme: 'blue',
      tv: '',
      weather: 0,
      win: false,
    },
    totals: {
      currency: '$',
      gameCosts: 0.00,
      ticketCost: 309.12,
      ticketSales: 0.00,
    },
  },
  {
    awayTeam: 'Minnesota Timberwolves',
    awayTeamLogo: 'MIN',
    awayTeamRecord: '0-0',
    awayTeamScore: 0,
    awayTeamStreak: 'W0',
    homeTeam: 'Chicago Bulls',
    homeTeamLogo: 'CHI',
    homeTeamRecord: '0-0',
    homeTeamScore: 0,
    homeTeamStreak: 'W0',
    instagramLink: '',
    gameId: '',
    gameDate: '2021-02-11',
    gameTime: '7:00pm',
    gameType: 'regular season',
    purchases: {
      parking: false,
      food: false,
      drinks: false,
      merchandise: false
    },
    stats: {
      attended: false,
      sold: false,
      soldDate: '',
      giveaway: false,
      notes: '',
      status: 'for sale',
      statusColorScheme: 'blue',
      tv: '',
      weather: 0,
      win: false,
    },
    totals: {
      currency: '$',
      gameCosts: 0.00,
      ticketCost: 309.12,
      ticketSales: 0.00,
    },
  },
  {
    awayTeam: 'Oklahoma City Thunder',
    awayTeamLogo: 'OKC',
    awayTeamRecord: '0-0',
    awayTeamScore: 0,
    awayTeamStreak: 'W0',
    homeTeam: 'Chicago Bulls',
    homeTeamLogo: 'CHI',
    homeTeamRecord: '0-0',
    homeTeamScore: 0,
    homeTeamStreak: 'W0',
    instagramLink: '',
    gameId: '',
    gameDate: '2021-02-12',
    gameTime: '7:00pm',
    gameType: 'regular season',
    purchases: {
      parking: false,
      food: false,
      drinks: false,
      merchandise: false
    },
    stats: {
      attended: false,
      sold: false,
      soldDate: '',
      giveaway: false,
      notes: '',
      status: 'for sale',
      statusColorScheme: 'blue',
      tv: '',
      weather: 0,
      win: false,
    },
    totals: {
      currency: '$',
      gameCosts: 0.00,
      ticketCost: 309.12,
      ticketSales: 0.00,
    },
  },
  {
    awayTeam: 'San Antonio Spurs',
    awayTeamLogo: 'SAS',
    awayTeamRecord: '0-0',
    awayTeamScore: 0,
    awayTeamStreak: 'W0',
    homeTeam: 'Chicago Bulls',
    homeTeamLogo: 'CHI',
    homeTeamRecord: '0-0',
    homeTeamScore: 0,
    homeTeamStreak: 'W0',
    instagramLink: '',
    gameId: '',
    gameDate: '2021-02-14',
    gameTime: '7:00pm',
    gameType: 'regular season',
    purchases: {
      parking: false,
      food: false,
      drinks: false,
      merchandise: false
    },
    stats: {
      attended: false,
      sold: false,
      soldDate: '',
      giveaway: false,
      notes: '',
      status: 'for sale',
      statusColorScheme: 'blue',
      tv: '',
      weather: 0,
      win: false,
    },
    totals: {
      currency: '$',
      gameCosts: 0.00,
      ticketCost: 309.12,
      ticketSales: 0.00,
    },
  },
  {
    awayTeam: 'Sacramento Kings',
    awayTeamLogo: 'SAC',
    awayTeamRecord: '0-0',
    awayTeamScore: 0,
    awayTeamStreak: 'W0',
    homeTeam: 'Chicago Bulls',
    homeTeamLogo: 'CHI',
    homeTeamRecord: '0-0',
    homeTeamScore: 0,
    homeTeamStreak: 'W0',
    instagramLink: '',
    gameId: '',
    gameDate: '2021-02-16',
    gameTime: '7:00pm',
    gameType: 'regular season',
    purchases: {
      parking: false,
      food: false,
      drinks: false,
      merchandise: false
    },
    stats: {
      attended: false,
      sold: false,
      soldDate: '',
      giveaway: false,
      notes: '',
      status: 'for sale',
      statusColorScheme: 'blue',
      tv: '',
      weather: 0,
      win: false,
    },
    totals: {
      currency: '$',
      gameCosts: 0.00,
      ticketCost: 309.12,
      ticketSales: 0.00,
    },
  },
  {
    awayTeam: 'Atlanta Hawks',
    awayTeamLogo: 'ATL',
    awayTeamRecord: '0-0',
    awayTeamScore: 0,
    awayTeamStreak: 'W0',
    homeTeam: 'Chicago Bulls',
    homeTeamLogo: 'CHI',
    homeTeamRecord: '0-0',
    homeTeamScore: 0,
    homeTeamStreak: 'W0',
    instagramLink: '',
    gameId: '',
    gameDate: '2021-02-24',
    gameTime: '7:00pm',
    gameType: 'regular season',
    purchases: {
      parking: false,
      food: false,
      drinks: false,
      merchandise: false
    },
    stats: {
      attended: false,
      sold: false,
      soldDate: '',
      giveaway: false,
      notes: '',
      status: 'for sale',
      statusColorScheme: 'blue',
      tv: '',
      weather: 0,
      win: false,
    },
    totals: {
      currency: '$',
      gameCosts: 0.00,
      ticketCost: 309.12,
      ticketSales: 0.00,
    },
  },
  {
    awayTeam: 'Memphis Grizzlies',
    awayTeamLogo: 'MEM',
    awayTeamRecord: '0-0',
    awayTeamScore: 0,
    awayTeamStreak: 'W0',
    homeTeam: 'Chicago Bulls',
    homeTeamLogo: 'CHI',
    homeTeamRecord: '0-0',
    homeTeamScore: 0,
    homeTeamStreak: 'W0',
    instagramLink: '',
    gameId: '',
    gameDate: '2021-02-26',
    gameTime: '7:00pm',
    gameType: 'regular season',
    purchases: {
      parking: false,
      food: false,
      drinks: false,
      merchandise: false
    },
    stats: {
      attended: false,
      sold: false,
      soldDate: '',
      giveaway: false,
      notes: '',
      status: 'for sale',
      statusColorScheme: 'blue',
      tv: '',
      weather: 0,
      win: false,
    },
    totals: {
      currency: '$',
      gameCosts: 0.00,
      ticketCost: 309.12,
      ticketSales: 0.00,
    },
  },
  {
    awayTeam: 'Milwaukee Bucks',
    awayTeamLogo: 'MIL',
    awayTeamRecord: '0-0',
    awayTeamScore: 0,
    awayTeamStreak: 'W0',
    homeTeam: 'Chicago Bulls',
    homeTeamLogo: 'CHI',
    homeTeamRecord: '0-0',
    homeTeamScore: 0,
    homeTeamStreak: 'W0',
    instagramLink: '',
    gameId: '',
    gameDate: '2021-03-04',
    gameTime: '7:00pm',
    gameType: 'regular season',
    purchases: {
      parking: false,
      food: false,
      drinks: false,
      merchandise: false
    },
    stats: {
      attended: false,
      sold: false,
      soldDate: '',
      giveaway: false,
      notes: '',
      status: 'for sale',
      statusColorScheme: 'blue',
      tv: '',
      weather: 0,
      win: false,
    },
    totals: {
      currency: '$',
      gameCosts: 0.00,
      ticketCost: 309.12,
      ticketSales: 0.00,
    },
  },
  {
    awayTeam: 'Cleveland Cavaliers',
    awayTeamLogo: 'CLE',
    awayTeamRecord: '0-0',
    awayTeamScore: 0,
    awayTeamStreak: 'W0',
    homeTeam: 'Chicago Bulls',
    homeTeamLogo: 'CHI',
    homeTeamRecord: '0-0',
    homeTeamScore: 0,
    homeTeamStreak: 'W0',
    instagramLink: '',
    gameId: '',
    gameDate: '2021-03-12',
    gameTime: '7:00pm',
    gameType: 'regular season',
    purchases: {
      parking: false,
      food: false,
      drinks: false,
      merchandise: false
    },
    stats: {
      attended: false,
      sold: false,
      soldDate: '',
      giveaway: false,
      notes: '',
      status: 'for sale',
      statusColorScheme: 'blue',
      tv: '',
      weather: 0,
      win: false,
    },
    totals: {
      currency: '$',
      gameCosts: 0.00,
      ticketCost: 309.12,
      ticketSales: 0.00,
    },
  },
  {
    awayTeam: 'Toronto Raptors',
    awayTeamLogo: 'TOR',
    awayTeamRecord: '0-0',
    awayTeamScore: 0,
    awayTeamStreak: 'W0',
    homeTeam: 'Chicago Bulls',
    homeTeamLogo: 'CHI',
    homeTeamRecord: '0-0',
    homeTeamScore: 0,
    homeTeamStreak: 'W0',
    instagramLink: '',
    gameId: '',
    gameDate: '2021-03-21',
    gameTime: '7:00pm',
    gameType: 'regular season',
    purchases: {
      parking: false,
      food: false,
      drinks: false,
      merchandise: false
    },
    stats: {
      attended: false,
      sold: false,
      soldDate: '',
      giveaway: false,
      notes: '',
      status: 'for sale',
      statusColorScheme: 'blue',
      tv: '',
      weather: 0,
      win: false,
    },
    totals: {
      currency: '$',
      gameCosts: 0.00,
      ticketCost: 309.12,
      ticketSales: 0.00,
    },
  },
  {
    awayTeam: 'LA Clippers',
    awayTeamLogo: 'LAC',
    awayTeamRecord: '0-0',
    awayTeamScore: 0,
    awayTeamStreak: 'W0',
    homeTeam: 'Chicago Bulls',
    homeTeamLogo: 'CHI',
    homeTeamRecord: '0-0',
    homeTeamScore: 0,
    homeTeamStreak: 'W0',
    instagramLink: '',
    gameId: '',
    gameDate: '2021-03-31',
    gameTime: '7:00pm',
    gameType: 'regular season',
    purchases: {
      parking: false,
      food: false,
      drinks: false,
      merchandise: false
    },
    stats: {
      attended: false,
      sold: false,
      soldDate: '',
      giveaway: false,
      notes: '',
      status: 'for sale',
      statusColorScheme: 'blue',
      tv: '',
      weather: 0,
      win: false,
    },
    totals: {
      currency: '$',
      gameCosts: 0.00,
      ticketCost: 309.12,
      ticketSales: 0.00,
    },
  },
  {
    awayTeam: 'Miami Heat',
    awayTeamLogo: 'MIA',
    awayTeamRecord: '0-0',
    awayTeamScore: 0,
    awayTeamStreak: 'W0',
    homeTeam: 'Chicago Bulls',
    homeTeamLogo: 'CHI',
    homeTeamRecord: '0-0',
    homeTeamScore: 0,
    homeTeamStreak: 'W0',
    instagramLink: '',
    gameId: '',
    gameDate: '2021-04-02',
    gameTime: '7:00pm',
    gameType: 'regular season',
    purchases: {
      parking: false,
      food: false,
      drinks: false,
      merchandise: false
    },
    stats: {
      attended: false,
      sold: false,
      soldDate: '',
      giveaway: false,
      notes: '',
      status: 'for sale',
      statusColorScheme: 'blue',
      tv: '',
      weather: 0,
      win: false,
    },
    totals: {
      currency: '$',
      gameCosts: 0.00,
      ticketCost: 309.12,
      ticketSales: 0.00,
    },
  },
  {
    awayTeam: 'Milwaukee Bucks',
    awayTeamLogo: 'MIL',
    awayTeamRecord: '0-0',
    awayTeamScore: 0,
    awayTeamStreak: 'W0',
    homeTeam: 'Chicago Bulls',
    homeTeamLogo: 'CHI',
    homeTeamRecord: '0-0',
    homeTeamScore: 0,
    homeTeamStreak: 'W0',
    instagramLink: '',
    gameId: '',
    gameDate: '2021-04-05',
    gameTime: '7:00pm',
    gameType: 'regular season',
    purchases: {
      parking: false,
      food: false,
      drinks: false,
      merchandise: false
    },
    stats: {
      attended: false,
      sold: false,
      soldDate: '',
      giveaway: false,
      notes: '',
      status: 'for sale',
      statusColorScheme: 'blue',
      tv: '',
      weather: 0,
      win: false,
    },
    totals: {
      currency: '$',
      gameCosts: 0.00,
      ticketCost: 309.12,
      ticketSales: 0.00,
    },
  },
  {
    awayTeam: 'Boston Celtics',
    awayTeamLogo: 'BOS',
    awayTeamRecord: '0-0',
    awayTeamScore: 0,
    awayTeamStreak: 'W0',
    homeTeam: 'Chicago Bulls',
    homeTeamLogo: 'CHI',
    homeTeamRecord: '0-0',
    homeTeamScore: 0,
    homeTeamStreak: 'W0',
    instagramLink: '',
    gameId: '',
    gameDate: '2021-04-06',
    gameTime: '7:00pm',
    gameType: 'regular season',
    purchases: {
      parking: false,
      food: false,
      drinks: false,
      merchandise: false
    },
    stats: {
      attended: false,
      sold: false,
      soldDate: '',
      giveaway: false,
      notes: '',
      status: 'for sale',
      statusColorScheme: 'blue',
      tv: '',
      weather: 0,
      win: false,
    },
    totals: {
      currency: '$',
      gameCosts: 0.00,
      ticketCost: 309.12,
      ticketSales: 0.00,
    },
  },
  {
    awayTeam: 'Charlotte Hornets',
    awayTeamLogo: 'CHA',
    awayTeamRecord: '0-0',
    awayTeamScore: 0,
    awayTeamStreak: 'W0',
    homeTeam: 'Chicago Bulls',
    homeTeamLogo: 'CHI',
    homeTeamRecord: '0-0',
    homeTeamScore: 0,
    homeTeamStreak: 'W0',
    instagramLink: '',
    gameId: '',
    gameDate: '2021-04-08',
    gameTime: '7:00pm',
    gameType: 'regular season',
    purchases: {
      parking: false,
      food: false,
      drinks: false,
      merchandise: false
    },
    stats: {
      attended: false,
      sold: false,
      soldDate: '',
      giveaway: false,
      notes: '',
      status: 'for sale',
      statusColorScheme: 'blue',
      tv: '',
      weather: 0,
      win: false,
    },
    totals: {
      currency: '$',
      gameCosts: 0.00,
      ticketCost: 309.12,
      ticketSales: 0.00,
    },
  }
]