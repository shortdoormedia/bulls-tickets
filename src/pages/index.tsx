import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  Heading,
  SimpleGrid,
  Select,
  Stack,
  useColorModeValue as mode
} from '@chakra-ui/react'
import { Hero } from '../components/Hero'
import { Container } from '../components/Container'
import { DarkModeSwitch } from '../components/DarkModeSwitch'
import { CTA } from '../components/CTA'
import * as React from 'react'
import { data, icons } from '../data/_stats'
import { gamedata } from '../data/_games'
import { StatCard } from '../components/StatCard'
import { GameCard } from '../components/GameCard'
import { NextSeo } from 'next-seo';
import {Banner} from "../components/Banner";
import {useState, useEffect} from "react"

function format(value: number) {
  return new Intl.NumberFormat('en-US', { style: 'decimal', currency: 'USD' }).format(value)
}

export default function Index() {

  const [filteredList, setFilteredList] = useState(gamedata);
  const [selectedOutcome, setSelectedOutcome] = useState("");
  const [selectedOpponent, setSelectedOpponent] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [selectedSold, setSelectedSold] = useState("");

  const reset = (filteredData:any) => {
    if (!selectedType) {
      return filteredData;
    }
    const filteredGames = filteredData.filter(
      (game:any) => game.gameType === selectedType
    );
    return filteredGames;
  };


  const filterBySold = (filteredData:any) => {
    if (!selectedSold) {
      return filteredData;
    }
    if (selectedSold === "sold") {
      const filteredGames = filteredData.filter(
        (game: any) => game.stats.sold
      );
      return filteredGames;
    } else if (selectedSold === "attended") {
      const filteredGames = filteredData.filter(
        (game: any) => game.stats.attended
      );
      return filteredGames;
    } else {
      return filteredData;
    }
  };
  const handleSoldChange = (event:any) => {
    const sold = event.target.value;
    if (sold !== "") {
      setSelectedSold(sold);
    } else {
      setSelectedSold("");
    }
  };


  const filterByOutcome = (filteredData:any) => {
    if (!selectedOutcome) {
      return filteredData;
    }
    if (selectedOutcome === "win") {
      const filteredGames = filteredData.filter(
        (game: any) => game.stats.win
      );
      return filteredGames;
    } else if (selectedOutcome === "loss") {
      const filteredGames = filteredData.filter(
        (game: any) => !game.stats.win
      );
      return filteredGames;
    } else {
      return filteredData;
    }

  };
  const handleOutcomeChange = (event:any) => {
    const outcome = event.target.value;
    if (outcome !== "") {
      setSelectedOutcome(outcome);
    } else {
      setSelectedOutcome("");
    }
  };


  const filterByOpponent = (filteredData:any) => {
    if (!selectedOpponent) {
      return filteredData;
    }
    const filteredGames = filteredData.filter(
      (game:any) => game.awayTeam === selectedOpponent
    );
    return filteredGames;
  };
  const handleOpponentChange = (event:any) => {
    const opponent = event.target.value;
    if (opponent !== "") {
      setSelectedOpponent(opponent);
    } else {
      setSelectedOpponent("");
    }
  };


  const handleTypeChange = (event:any) => {
    const type = event.target.value;
    if (type !== "") {
      setSelectedType(type);
    } else {
      setSelectedType("");
    }
  };
  const filterByType = (filteredData:any) => {
    if (!selectedType) {
      return filteredData;
    }
    const filteredGames = filteredData.filter(
      (game:any) => game.gameType === selectedType
    );
    return filteredGames;
  };


  useEffect(() => {
   let filteredData = filterByType(gamedata);
    filteredData = filterByOutcome(filteredData);
    filteredData = filterByOpponent(filteredData);
    filteredData = filterBySold(filteredData);
    setFilteredList(filteredData);
  }, [selectedOpponent, selectedOutcome, selectedType, selectedSold]);

  return (
    <>
      <NextSeo
        title="BullsTickets.net"
        description="Chicago Bulls season ticket cost calculator."
        canonical="https://bullstickets.net"
      />
      <Banner/>
      <Container width="100%" py="10">
        <Hero/>
        <Heading as="h2" size="lg" textAlign="center" px="3" mt="3">Numbers are for 2 seats in Section 120 Row 4</Heading>
        <Box as="section" p="5" my="5">
          <Box maxW="10xl" mx="auto" py={{base: '3', md: '3'}} px={{base: 2, md: 3}} bg={mode('white', 'gray.900')}>
            <SimpleGrid columns={{base: 2, md: 2, lg: 4}} spacing={{base: 2, md: 4, lg: 6}}>
              {data.map((stat, index) => {
                const {icon, color: accentColor} = icons[stat.symbol]
                return <StatCard icon={icon} accentColor={accentColor} key={index} data={stat}/>
              })}
            </SimpleGrid>
          </Box>
        </Box>
        <Box mb={10}>
          <Stack direction={{ base: 'column', lg: 'row' }} spacing={5}>
            <div className="opponent-filter">
              <FormLabel>Filter By Opponent:</FormLabel>
              <Select
                id="opponent-input"
                value={selectedOpponent}
                onChange={handleOpponentChange}
              >
                <option value="">All</option>
                <option value="Atlanta Hawks">Atlanta Hawks</option>
                <option value="Boston Celtics">Boston Celtics</option>
                <option value="Brooklyn Nets">Brooklyn Nets</option>
                <option value="Charlotte Hornets">Charlotte Hornets</option>
                <option value="Cleveland Cavaliers">Cleveland Cavaliers</option>
                <option value="Dallas Mavericks">Dallas Mavericks</option>
                <option value="Denver Nuggets">Denver Nuggets</option>
                <option value="Detroit Pistons">Detroit Pistons</option>
                <option value="Golden State Warriors">Golden State Warriors</option>
                <option value="Houston Rockets">Houston Rockets</option>
                <option value="Indiana Pacers">Indiana Pacers</option>
                <option value="LA Clippers">LA Clippers</option>
                <option value="LA Lakers">LA Lakers</option>
                <option value="Memphis Grizzlies">Memphis Grizzlies</option>
                <option value="Miami Heat">Miami Heat</option>
                <option value="Milwaukee Bucks">Milwaukee Bucks</option>
                <option value="Minnesota Timberwolves">Minnesota Timberwolves</option>
                <option value="New Orleans Pelicans">New Orleans Pelicans</option>
                <option value="New York Knicks">New York Knicks</option>
                <option value="Oklahoma City Thunder">Oklahoma City Thunder</option>
                <option value="Orlando Magic">Orlando Magic</option>
                <option value="Philadelphia 76ers">Philadelphia 76ers</option>
                <option value="Phoenix Suns">Phoenix Suns</option>
                <option value="Portland Trail Blazers">Portland Trail Blazers</option>
                <option value="Sacramento Kings">Sacramento Kings</option>
                <option value="San Antonio Spurs">San Antonio Spurs</option>
                <option value="Toronto Raptors">Toronto Raptors</option>
                <option value="Utah Jazz">Utah Jazz</option>
                <option value="Washington Wizards">Washington Wizards</option>
              </Select>
            </div>
            <div className="type-filter">
              <FormLabel>Filter By Game Type:</FormLabel>
              <Select
                id="type-input"
                value={selectedType}
                onChange={handleTypeChange}
              >
                <option value="">All</option>
                <option value="preseason">Preseason</option>
                <option value="regular season">Regular Season</option>
                <option value="playoffs">Playoffs</option>
              </Select>
            </div>
            <div className="outcome-filter">
              <FormLabel>Filter By Outcome:</FormLabel>
              <Select
                id="outcome-input"
                value={selectedOutcome}
                onChange={handleOutcomeChange}
              >
                <option value="">All</option>
                <option value="win">Win</option>
                <option value="loss">Loss</option>
              </Select>
            </div>
            <div className="sold-filter">
              <FormLabel>Filter By Attended:</FormLabel>
              <Select
                id="sold-input"
                value={selectedSold}
                onChange={handleSoldChange}
              >
                <option value="">All</option>
                <option value="attended">Attended</option>
                <option value="sold">Sold</option>
              </Select>
            </div>
            <Box pt={8}>
              Showing <strong>{filteredList.length}</strong> results
              <Button
                mt={0}
                mx={5}
                colorScheme='green'
                size={'xs'}
                type='submit'
                onClick={() => {
                  setSelectedSold("");
                  setSelectedType("");
                  setSelectedOpponent("");
                  setSelectedOutcome("");
                }}
              >
                Clear Filters
              </Button>
            </Box>
          </Stack>
        </Box>
        <Box maxW="100%" mx="auto" px={{base: '6', md: '8'}} mb={12} overflowX="auto" overflowY="auto">
          <SimpleGrid columns={{base: 1, md: 1, lg: 1, xl: 2}} spacing="6">
            {filteredList.map((info, index) => {
              return <GameCard key={index} data={info}/>
            })}
          </SimpleGrid>
        </Box>
        <DarkModeSwitch/>
      </Container>
    </>
  )
}
