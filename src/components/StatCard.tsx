import {
    Box,
    Flex,
    Heading,
    HStack,
    Text,
    useColorModeValue as mode,
} from '@chakra-ui/react'
import * as React from 'react'

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
            text: string
            show: boolean
        }
    }
}

function format(value: number) {
    return new Intl.NumberFormat('en-US', { style: 'decimal', currency: 'USD', maximumFractionDigits: 2, minimumFractionDigits: 2 }).format(value)
}

export const StatCard = (props: StatCardProps) => {
    const { data, accentColor, icon } = props
    const { label, currency, value, change, symbol } = data

    return (
        <Box bg={mode('white', 'gray.700')} px={{ base: 2, md: 4, lg: 6 }} py={{ base: 2, md: 2, lg: 4 }} shadow="base" rounded="lg">
            <HStack>
                <Text fontWeight="medium" color={mode('gray.500', 'gray.400')}>
                    {label}  {change.show ? '('+change.percent +')': ''}
                </Text>
            </HStack>
            <Heading as="h4" size="lg" my="2" fontWeight="extrabold">
                {currency}
                {format(value)}
            </Heading>
        </Box>
    )
}