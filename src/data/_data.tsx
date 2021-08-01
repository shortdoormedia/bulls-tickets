import { FaDollarSign } from 'react-icons/fa'
import { StatCardProps } from '../components/StatCard'

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
        value: 13407.23,
        change: { value: 0.00, percent: +0.00},
        currency: '$',
    },
    {
        symbol: 'ATTENDED',
        label: 'Avg Attended Game',
        value: 0.00,
        change: { value: 0.00, percent: +0.00 },
        currency: '$',
    },
    {
        symbol: 'SOLD',
        label: 'Avg Sold Game',
        value: 0.00,
        change: { value: 0.00, percent: +0.00 },
        currency: '$',
    },
    {
        symbol: 'OVERALL',
        label: 'Overall Season Cost',
        value: 13407.23,
        change: { value: 0.00, percent: +0.00 },
        currency: '$',
    },
]