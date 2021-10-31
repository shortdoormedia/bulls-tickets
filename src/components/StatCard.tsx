import {
    Box,
    Flex,
    Heading,
    HStack,
    Text,
    useColorModeValue as mode,
} from '@chakra-ui/react'
import * as React from 'react'
import { Indicator } from './Indicator'

export interface StatCardProps {
    icon: React.ElementType
    accentColor: string
    data: {
        symbol: string
        label: string
        currency: string
        value: number
        change: {
            value: number
            percent: number
        }
    }
}

function format(value: number) {
    return new Intl.NumberFormat('en-US', { style: 'decimal', currency: 'USD', maximumFractionDigits: 2, minimumFractionDigits: 2 }).format(value)
}
function formatPercent(value: number) {
    return new Intl.NumberFormat('en-US', { style: 'decimal' }).format(value)
}

export const StatCard = (props: StatCardProps) => {
    const { data, accentColor, icon } = props
    const { label, currency, value, change, symbol } = data

    const isNegative = change.value < 0

    return (
        <Box bg={mode('white', 'gray.700')} px="6" py="4" shadow="base" rounded="lg">
            <HStack>
                <Text fontWeight="medium" color={mode('gray.500', 'gray.400')}>
                    {label}
                </Text>
            </HStack>

            <Heading as="h4" size="lg" my="3" fontWeight="extrabold">
                {currency}
                {format(value)}
            </Heading>
            <Flex justify="space-between" align="center" fontWeight="medium" fontSize="sm">
                <HStack spacing="0" color={mode('gray.500', 'gray.400')}>
                    <Indicator type={isNegative ? 'down' : 'up'} />
                    <Text>
                        {currency}
                        {format(change.value)} ({isNegative ? '' : '+'}
                        {formatPercent(change.percent)}%)
                    </Text>
                </HStack>
            </Flex>
        </Box>
    )
}