import {
  Badge,
  Box,
  Link,
  Flex,
  Text,
  Spacer,
  Heading,
  HStack,
  SimpleGrid,
  useColorModeValue as mode,
} from '@chakra-ui/react'
import * as React from 'react'
import { ATL, BKN, BOS, CHA, CHI, CLE, DAL, DEN, DET, GSW, HOU, IND, LAC, LAL, MEM, MIA, MIL, MIN, NOP, NYK, OKC, ORL, PHI, PHX, POR, SAC, SAS, TOR, UTA, WAS } from 'react-nba-logos';
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { FaBeer, FaCar, FaTshirt, FaStickyNote, FaTrophy, FaCloudRain, FaSun, FaSnowflake, FaTv, FaCalendar, FaDollarSign, FaHandshake, FaLink, FaInstagram, FaBasketballBall } from 'react-icons/fa';


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
    instagramLink: string,
    gameId: string
    gameDate: string
    gameTime: string
    gameType: string
    purchases: {
      drinks: boolean,
      food: boolean,
      merchandise: boolean,
      parking: boolean
    }
    stats: {
      attended: boolean,
      sold: boolean,
      soldDate: string,
      giveaway: boolean,
      notes: string,
      status: string
      statusColorScheme: string
      tv: string
      weather: string,
      win: boolean
    },
    totals: {
      currency: string
      gameCosts: number
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
    case "BKN": {
      ret = BKN;
      break;
    }
    case "BOS": {
      ret = BOS;
      break;
    }
    case "CHA": {
      ret = CHA;
      break;
    }
    case "CHI": {
      ret = CHI;
      break;
    }
    case "CLE": {
      ret = CLE;
      break;
    }
    case "DAL": {
      ret = DAL;
      break;
    }
    case "DEN": {
      ret = DEN;
      break;
    }
    case "DET": {
      ret = DET;
      break;
    }
    case "GSW": {
      ret = GSW;
      break;
    }
    case "HOU": {
      ret = HOU;
      break;
    }
    case "IND": {
      ret = IND;
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
    case "MEM": {
      ret = MEM;
      break;
    }
    case "MIA": {
      ret = MIA;
      break;
    }
    case "MIL": {
      ret = MIL;
      break;
    }
    case "MIN": {
      ret = MIN;
      break;
    }
    case "NOP": {
      ret = NOP;
      break;
    }
    case "NYK": {
      ret = NYK;
      break;
    }
    case "OKC": {
      ret = OKC;
      break;
    }
    case "ORL": {
      ret = ORL;
      break;
    }
    case "PHI": {
      ret = PHI;
      break;
    }
    case "PHX": {
      ret = PHX;
      break;
    }
    case "POR": {
      ret = POR;
      break;
    }
    case "SAC": {
      ret = SAC;
      break;
    }
    case "SAS": {
      ret = SAS;
      break;
    }
    case "TOR": {
      ret = TOR;
      break;
    }
    case "UTA": {
      ret = UTA;
      break;
    }
    case "WAS": {
      ret = WAS;
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
    instagramLink,
    gameDate,
    gameId,
    gameTime,
    gameType,
    stats,
    purchases,
    totals
  } = data
  const awayLogo = returnLogo(awayTeamLogo);
  const homeLogo = returnLogo(homeTeamLogo);
  const dayOfWeek = new Date(gameDate);
  const day = new Intl.DateTimeFormat('en-US', { weekday: 'long'}).format(dayOfWeek);
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
      ><Badge colorScheme={stats.statusColorScheme} ml={1} mr={1}>{stats.status}</Badge><Badge colorScheme={'gray'} ml={1} mr={1}>{gameType}</Badge></Flex>
      <Flex
        justifyContent="center"
         alignItems="center"
         color={mode('gray.500', 'gray.400')}
        >
        <HStack>
          <Box w={5} h={5} d={purchases.drinks ? 'flex' : 'none'}>
            <FaBeer title={'Drinks'}/>
          </Box>
          <Box w={5} h={5}>
            <FaCalendar title={gameDate +' ('+ day +')'}/>
          </Box>
          <Box w={5} h={5} d={purchases.parking ? 'flex' : 'none'}>
            <FaCar title={'Parking'}/>
          </Box>
          <Box w={5} h={5} d={stats.weather === 'Good' ? 'flex' : 'none'}>
            <FaSun title={'Good'}/>
          </Box>
          <Box w={5} h={5} d={stats.weather === 'Rain' ? 'flex' : 'none'}>
            <FaCloudRain title={'Rain'}/>
          </Box>
          <Box w={5} h={5} d={stats.weather === 'Snow' ? 'flex' : 'none'}>
            <FaSnowflake title={'Snow'}/>
          </Box>
          <Box w={5} h={5} d={stats.weather === 'Sold Both' ? 'flex' : 'none'}>
            <FaHandshake title={'Sold'}/>
          </Box>
          <Box w={5} h={5} d={stats.win ? 'flex' : 'none'}>
            <FaTrophy title={'Bulls Win'}/>
          </Box>
          <Box w={5} h={5} d={stats.giveaway ? 'flex' : 'none'}>
            <FaTshirt title={'Giveaway'}/>
          </Box>
          <Box w={5} h={5} d={stats.tv ? 'flex' : 'none'}>
            <FaTv title={stats.tv}/>
          </Box>
          <Box w={5} h={5} d={stats.notes ? 'flex' : 'none'}>
            <FaStickyNote title={stats.notes}/>
          </Box>
          <Box w={5} h={5} d={stats.notes ? 'flex' : 'none'}>
            <Link href={gameId} isExternal d={gameId ? 'flex' : 'none'}>
              <FaBasketballBall title="View Game in Basketball Reference"/>
            </Link>
          </Box>
          <Box w={5} h={5} d={instagramLink ? 'flex' : 'none'}>
            <Link href={instagramLink} isExternal d={instagramLink ? 'flex' : 'none'}>
              <FaInstagram title="View Game Photos on Instagram"/>
            </Link>
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
            {format((totals.ticketSales-(totals.gameCosts+totals.ticketCost)))}
          </Heading>
        </Box>
      </SimpleGrid>
    </Box>
  )
}