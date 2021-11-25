import {
  Badge,
  Box,
  Link,
  Flex,
  Text,
  Tooltip,
  Spacer,
  Heading,
  HStack,
  SimpleGrid,
  useColorModeValue as mode,
} from '@chakra-ui/react'
import * as React from 'react'
import moment from "moment";
import { ATL, BKN, BOS, CHA, CHI, CLE, DAL, DEN, DET, GSW, HOU, IND, LAC, LAL, MEM, MIA, MIL, MIN, NOP, NYK, OKC, ORL, PHI, PHX, POR, SAC, SAS, TOR, UTA, WAS } from 'react-nba-logos';
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { FaBeer, FaCar, FaTshirt, FaStickyNote, FaTrophy, FaCloudRain, FaThermometer, FaTemperatureHigh, FaSun, FaSnowflake, FaTv, FaCalendar, FaDollarSign, FaHandshake, FaLink, FaInstagram, FaBasketballBall } from 'react-icons/fa';


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
      weather: number,
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
  return new Intl.NumberFormat('en-US', { style: 'decimal', currency: 'USD', maximumFractionDigits: 2, minimumFractionDigits: 2 }).format(value)
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
  const gameNight = moment(gameDate).format('dddd');
  const gameMonth = moment(gameDate).format('MMM');
  const gameDay = moment(gameDate).format('Do');
  return (
    <Box bg={mode('white', 'gray.700')} px="4" py="4" mb={0} shadow="base" rounded="lg">
      <Flex
        justifyContent="center"
        alignItems="center"
      ><Text fontSize='2.5em' p="2">{awayTeamScore} </Text>{React.createElement(awayLogo, {})}{React.createElement(homeLogo, {})}<Text fontSize='2.5em' p="2">{homeTeamScore} </Text>
        <Text fontSize="4xl" fontWeight={'strong'} color={'lightgreen'} d={stats.win && awayTeamScore > 0 ? 'flex' : 'none'}>W</Text>
        <Text fontSize="4xl" fontWeight={'strong'} color={'red'} d={!stats.win && awayTeamScore ? 'flex' : 'none'}>L</Text>
      </Flex>
      <Flex>
        <Text fontWeight="medium">{awayTeam}</Text>
        <Spacer/>
        <Text fontWeight="medium">{awayTeamScore} ({awayTeamRecord}) [{awayTeamStreak}]</Text>
      </Flex>
      <Flex>
        <Text fontWeight="medium">{homeTeam}</Text>
        <Spacer/>
        <Text fontWeight="medium">{homeTeamScore} ({homeTeamRecord}) [{homeTeamStreak}]</Text>
      </Flex>
      <Flex
        justifyContent="center"
        alignItems="center"
      ><Text fontSize="xs"> {gameMonth} {gameDay}, {gameTime}  {stats.tv}</Text>
      </Flex>
      <Flex
        py="3"
        justifyContent="center"
        alignItems="center"
        color={mode('gray.500', 'gray.400')}
      ><Badge colorScheme={stats.statusColorScheme} ml={1} mr={1}>{stats.status}</Badge><Badge colorScheme={'gray'} ml={1} mr={1}>{gameType}</Badge>
        <Box w={5} h={5} px={3} d={purchases.drinks ? 'flex' : 'none'}>
          <Tooltip hasArrow label={'Drinks'}>
              <span>
                <FaBeer/>
              </span>
          </Tooltip>
        </Box>
        <Box w={5} h={5} px={3} d={'flex'}>
          <Tooltip hasArrow label={gameNight}>
              <span>
                <FaCalendar/>
              </span>
          </Tooltip>
        </Box>
        <Box w={5} h={5} px={3} d={purchases.parking ? 'flex' : 'none'}>
          <Tooltip hasArrow label={'Parking'}>
              <span>
                <FaCar/>
              </span>
          </Tooltip>
        </Box>
        <Box w={5} h={5} px={3} d={stats.weather < 50 ? 'flex' : 'none'}>
          <Tooltip hasArrow label={stats.weather+'F'}>
              <span>
                <FaTemperatureHigh/>
              </span>
          </Tooltip>
        </Box>
        <Box w={5} h={5} px={3} d={stats.weather >= 50 ? 'flex' : 'none'}>
          <Tooltip hasArrow label={stats.weather+'F'}>
              <span>
                <FaTemperatureHigh/>
              </span>
          </Tooltip>
        </Box>
        <Box w={5} h={5} px={3} d={stats.win ? 'flex' : 'none'}>
          <Tooltip hasArrow label={'Bulls Win'}>
              <span>
                <FaTrophy/>
              </span>
          </Tooltip>
        </Box>
        <Box w={5} h={5} px={3} d={stats.giveaway ? 'flex' : 'none'}>
          <Tooltip hasArrow label={'Giveaway'}>
              <span>
                <FaTshirt/>
              </span>
          </Tooltip>
        </Box>
        <Box w={5} h={5} px={3} d={stats.tv ? 'flex' : 'none'}>
          <Tooltip hasArrow label={stats.tv}>
              <span>
                <FaTv/>
              </span>
          </Tooltip>
        </Box>
        <Box w={5} h={5} px={3} d={stats.notes ? 'flex' : 'none'}>
          <Tooltip hasArrow label={stats.notes}>
              <span>
                <FaStickyNote/>
              </span>
          </Tooltip>
        </Box>
        <Box w={5} h={5} px={3} d={stats.notes ? 'flex' : 'none'}>
          <Link href={gameId} isExternal d={gameId ? 'flex' : 'none'}>
            <Tooltip hasArrow label={'View Game in Basketball Reference'}>
                <span>
                  <FaBasketballBall/>
                </span>
            </Tooltip>
          </Link>
        </Box>
        <Box w={5} h={5} px={3} d={instagramLink ? 'flex' : 'none'}>
          <Link href={instagramLink} isExternal d={instagramLink ? 'flex' : 'none'}>
            <Tooltip hasArrow label={'View Game Photos on Instagram'}>
                <span>
                  <FaInstagram/>
                </span>
            </Tooltip>
          </Link>
        </Box>
      </Flex>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing="6" mt={4}>
        <Box bg={mode('white', 'gray.900')} px="4" py="4" shadow="base" rounded="lg">
          <HStack>
            <Text fontWeight="medium" color={mode('gray.500', 'gray.400')}>
              Ticket Cost
            </Text>
          </HStack>
          <Heading as="h4" size="lg" fontWeight="extrabold">
            {totals.currency}
            {format(totals.ticketCost)}
          </Heading>
        </Box>
        <Box bg={mode('white', 'gray.900')} px="4" py="4" shadow="base" rounded="lg">
          <HStack>
            <Text fontWeight="medium" color={mode('gray.500', 'gray.400')}>
              Ticket Sales
            </Text>
          </HStack>
          <Heading as="h4" size="lg" fontWeight="extrabold">
            {totals.currency}
            {format(totals.ticketSales)}
          </Heading>
        </Box>
        <Box bg={mode('white', 'gray.900')} px="4" py="4" shadow="base" rounded="lg">
          <HStack>
            <Text fontWeight="medium" color={mode('gray.500', 'gray.400')}>
              Game Cost
            </Text>
          </HStack>
          <Heading as="h4" size="lg" fontWeight="extrabold">
            {totals.currency}
            {format(totals.gameCosts)}
          </Heading>
        </Box>
        <Box bg={mode('white', 'gray.900')} px="4" py="4" shadow="base" rounded="lg">
          <HStack>
            <Text fontWeight="medium" color={mode('gray.500', 'gray.400')}>
              Net Gain
            </Text>
          </HStack>
          <Heading as="h4" size="lg" fontWeight="extrabold">
            {totals.currency}
            {format((totals.ticketSales-(totals.gameCosts+totals.ticketCost)))}
          </Heading>
        </Box>
      </SimpleGrid>
    </Box>
  )
}