import {
  Badge,
  Box,
  Flex,
  Text,
  Spacer,
  Heading,
  HStack,
  SimpleGrid,
  useColorModeValue as mode,
} from '@chakra-ui/react'
import * as React from 'react'
import { TOR, CHI, DET, ORL, LAL, LAC, MIL, GSW, ATL } from 'react-nba-logos';
import { FaBeer, FaCar, FaTshirt, FaStickyNote, FaTrophy, FaCloudRain, FaSun, FaSnowflake, FaTv, FaCalendar, FaDollarSign, FaHandshake } from 'react-icons/fa';


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

function format(value: number) {
  return new Intl.NumberFormat('en-US', { style: 'decimal', currency: 'USD' }).format(value)
}

function returnLogo(team: string) {
  let ret = CHI;
  switch(team) {
    case "ATL": {
      ret = ATL;
      break;
    }
    case "CHI": {
      ret = CHI;
      break;
    }
    case "DET": {
      ret = DET;
      break;
    }
    case "LAC": {
      ret = LAC;
      break;
    }
    case "LAL": {
      ret = LAL;
      break;
    }
    case "ORL": {
      ret = ORL;
      break;
    }
    case "MIL": {
      ret = MIL;
      break;
    }
    case "TOR": {
      ret = TOR;
      break;
    }
  }
  return ret;
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
    stats,
    totals
  } = data
  const awayLogo = returnLogo(awayTeamLogo);
  const homeLogo = returnLogo(homeTeamLogo);
  debugger;
  const isNegative = totals.netGain < 0
  return (
    <Box bg={mode('white', 'gray.700')} px="6" py="4" mb={10} shadow="base" rounded="lg">
      <Flex
        justifyContent="center"
        alignItems="center"
      ><Text fontSize='2.5em' p="2">{awayTeamScore} </Text>{React.createElement(awayLogo, {})}{React.createElement(homeLogo, {})}<Text fontSize='2.5em' p="2">{homeTeamScore}</Text></Flex>
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
      <Flex
        py="4"
        justifyContent="center"
        alignItems="center"
      ><Badge colorScheme={stats.statusColorScheme}>{stats.status}</Badge></Flex>
      <Flex
        justifyContent="center"
         alignItems="center"
         color={mode('gray.500', 'gray.400')}
        >
        <HStack>
          <Box w={5} h={5}>
            <FaBeer/>
          </Box>
          <Box w={5} h={5}>
            <FaCalendar/>
          </Box>
          <Box w={5} h={5}>
            <FaCar/>
          </Box>
          <Box w={5} h={5}>
            <FaSun/>
          </Box>
          <Box w={5} h={5}>
            <FaCloudRain/>
          </Box>
          <Box w={5} h={5}>
            <FaDollarSign/>
          </Box>
          <Box w={5} h={5}>
            <FaSnowflake/>
          </Box>
          <Box w={5} h={5}>
            <FaHandshake/>
          </Box>
          <Box w={5} h={5}>
            <FaTrophy/>
          </Box>
          <Box w={5} h={5}>
            <FaTshirt/>
          </Box>
          <Box w={5} h={5}>
            <FaTv/>
          </Box>
          <Box w={5} h={5}>
            <FaStickyNote/>
          </Box>
        </HStack>
      </Flex>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing="6" mt={4}>
        <Box bg={mode('white', 'gray.900')} px="6" py="4" shadow="base" rounded="lg">
          <HStack>
            <Text fontWeight="medium" color={mode('gray.500', 'gray.400')}>
              Ticket Cost
            </Text>
          </HStack>
          <Heading as="h4" size="lg" my="3" fontWeight="extrabold">
            {totals.currency}
            {format(totals.ticketCost)}
          </Heading>
        </Box>
        <Box bg={mode('white', 'gray.900')} px="6" py="4" shadow="base" rounded="lg">
          <HStack>
            <Text fontWeight="medium" color={mode('gray.500', 'gray.400')}>
              Ticket Sales
            </Text>
          </HStack>
          <Heading as="h4" size="lg" my="3" fontWeight="extrabold">
            {totals.currency}
            {format(totals.ticketSales)}
          </Heading>
        </Box>
        <Box bg={mode('white', 'gray.900')} px="6" py="4" shadow="base" rounded="lg">
          <HStack>
            <Text fontWeight="medium" color={mode('gray.500', 'gray.400')}>
              Game Cost
            </Text>
          </HStack>
          <Heading as="h4" size="lg" my="3" fontWeight="extrabold">
            {totals.currency}
            {format(totals.gameCosts)}
          </Heading>
        </Box>
        <Box bg={mode('white', 'gray.900')} px="6" py="4" shadow="base" rounded="lg">
          <HStack>
            <Text fontWeight="medium" color={mode('gray.500', 'gray.400')}>
              Net Gain
            </Text>
          </HStack>
          <Heading as="h4" size="lg" my="3" fontWeight="extrabold">
            {totals.currency}
            {format(totals.netGain)}
          </Heading>
        </Box>
      </SimpleGrid>
    </Box>
  )
}