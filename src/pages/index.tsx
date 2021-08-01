import {
  Text,
  Badge,
  Flex,
  Box,
  SimpleGrid,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  useColorModeValue as mode
} from '@chakra-ui/react'
import { TOR, CHI, DET, ORL, LAL, LAC, MIL, GSW, ATL } from 'react-nba-logos';

import { Hero } from '../components/Hero'
import { Container } from '../components/Container'
import { DarkModeSwitch } from '../components/DarkModeSwitch'
import { CTA } from '../components/CTA'
import { Footer } from '../components/Footer'

import * as React from 'react'
import { data, icons } from '../data/_data'
import { gamedata } from '../data/_games'
import { StatCard } from '../components/StatCard'
import { GameCard } from '../components/GameCard'


function format(value: number) {
  return new Intl.NumberFormat('en-US', { style: 'decimal', currency: 'USD' }).format(value)
}

const Index = () => (
  <Container width="100%">
    <Hero />
    <Flex
      justifyContent="center"
      alignItems="center"
    >
      <Box as="section" bg={mode('gray.50', 'gray.800')} p="10" m="10">
        <Box maxW="7xl" mx="auto" px={{ base: '6', md: '8' }}>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing="6">
            {data.map((stat, index) => {
              const { icon, color: accentColor } = icons[stat.symbol]
              return <StatCard icon={icon} accentColor={accentColor} key={index} data={stat} />
            })}
          </SimpleGrid>
        </Box>
      </Box>
    </Flex>
    <Flex>
      <Box as="section" bg={mode('gray.50', 'gray.800')} maxW={{ base: 'xl', md: '7xl' }} mx="auto" my="20px" px={{ base: '6', md: '8' }}>
        <Box maxW="100%" mx="auto" px={{ base: '6', md: '8' }} overflowX="auto" overflowY="auto">
          <Table variant="simple">
            <TableCaption>This is placeholder data for now</TableCaption>
            <Thead>
            <Tr>
              <Th>Matchup</Th>
              <Th>Status</Th>
              <Th isNumeric>Ticket Cost</Th>
              <Th isNumeric>Ticket Sales</Th>
              <Th isNumeric>Game Cost</Th>
              <Th isNumeric>Net Gain</Th>
            </Tr>
            </Thead>
            <Tbody>
            {gamedata.map((info, index) => {
              return  <Tr>
                <Td>
                  <GameCard key={index} data={info} />
                </Td>
                <Td><Text fontSize='1.2em'><Badge colorScheme={info.stats.statusColorScheme}>{info.stats.status}</Badge></Text></Td>
                <Td isNumeric><Text fontSize='1.2em'>{info.totals.currency}{format(info.totals.ticketCost)}</Text></Td>
                <Td isNumeric><Text fontSize='1.2em'>{info.totals.currency}{format(info.totals.ticketSales)}</Text></Td>
                <Td isNumeric><Text fontSize='1.2em'>{info.totals.currency}{format(info.totals.gameCosts)}</Text></Td>
                <Td isNumeric><Text fontSize='1.2em'>{info.totals.currency}{format(info.totals.netGain)}</Text></Td>
              </Tr>
            })}
            </Tbody>
            <Tfoot>
            <Tr>
              <Th>Matchup</Th>
              <Th>Status</Th>
              <Th isNumeric>Ticket Cost</Th>
              <Th isNumeric>Ticket Sales</Th>
              <Th isNumeric>Game Cost</Th>
              <Th isNumeric>Net Gain</Th>
            </Tr>
            </Tfoot>
          </Table>
        </Box>
      </Box>
    </Flex>

    <Footer>
      
    </Footer>

    <DarkModeSwitch />
    <CTA/>
  </Container>

)

export default Index
