import {
  Box,
  Flex,
  Heading,
  HStack,
  VStack,
  Text,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Spacer,
  useColorModeValue as mode,
} from '@chakra-ui/react'
import * as React from 'react'
import { Indicator } from './Indicator'
import { TOR, CHI, DET, ORL, LAL, LAC, MIL, GSW, ATL } from 'react-nba-logos';

export interface GameCardProps {
  data: {
    awayTeam: string
    awayTeamLogo: string
    awayTeamRecord: string
    awayTeamScore: number
    awayTeamStreak: string
    homeTeam: string
    homeTeamLogo: string
    homeTeamRecord: string
    homeTeamScore: number
    homeTeamStreak: string
    purchases: {
      drinks: boolean,
      food: boolean,
      merchandise: boolean,
      parking: boolean,
      giveaway: boolean
    }
    stats: {
      dayOfWeek: string,
      giveaway: boolean,
      notes: string,
      startTime: string,
      status: string
      statusColorScheme: string
      tv: string
      weather: string,
      win: boolean,
    },
    totals: {
      currency: string
      gameCosts: number
      netGain: number
      ticketCost: number
      ticketSales: number
    }

  }
}

export const GameCard = (props: GameCardProps) => {
  const { data } = props
  const {
    awayTeam,
    awayTeamLogo,
    awayTeamRecord,
    awayTeamScore,
    awayTeamStreak,
    homeTeam,
    homeTeamLogo,
    homeTeamRecord,
    homeTeamScore,
    homeTeamStreak,
    totals
  } = data

  const isNegative = totals.netGain < 0

  return (
    <Box bg={mode('white', 'gray.700')} px="6" py="4" shadow="base" rounded="lg">
      <Flex
        justifyContent="left"
        alignItems="center"
      >{React.createElement(TOR, {})}<Text fontSize='1.2em' p="2">{awayTeamScore} </Text>{React.createElement(CHI, {})}<Text fontSize='1.2em' p="2">{homeTeamScore}</Text></Flex>
      <Flex>
        <Text fontWeight="medium" color={mode('gray.500', 'gray.400')}>{awayTeam}</Text>
        <Spacer/>
        <Text fontWeight="medium" color={mode('gray.500', 'gray.400')}>{awayTeamScore} ({awayTeamRecord}) [{awayTeamStreak}]</Text>
      </Flex>
      <Flex>
        <Text fontWeight="medium" color={mode('gray.500', 'gray.400')}>{homeTeam}</Text>
        <Spacer/>
        <Text fontWeight="medium" color={mode('gray.500', 'gray.400')}>{homeTeamScore} ({homeTeamRecord}) [{homeTeamStreak}]</Text>
      </Flex>
    </Box>
  )
}