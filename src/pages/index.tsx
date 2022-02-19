import {
  Box,
  Flex,
  Heading,
  SimpleGrid,
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

function format(value: number) {
  return new Intl.NumberFormat('en-US', { style: 'decimal', currency: 'USD' }).format(value)
}

const Index = () => (
  <Container width="100%" py="10">
    <NextSeo
      title="BullsTickets.net"
      description="Chicago Bulls season ticket cost calculator."
      canonical="https://bullstickets.net"
    />
    <Hero />
    <Heading as="h2" size="lg" textAlign="center" px="3" mt="3">Numbers are for 2 seats in Section 120 Row 4</Heading>
      <Box as="section" p="5" my="5">
        <Box maxW="10xl" mx="auto" py={{ base: '3', md: '3' }} px={{ base: 2, md: 3 }} bg={mode('white', 'gray.900')} >
          <SimpleGrid columns={{ base: 2, md: 2, lg: 4 }} spacing={{ base: 2, md: 4, lg: 6 }}>
            {data.map((stat, index) => {
              const { icon, color: accentColor } = icons[stat.symbol]
              return <StatCard icon={icon} accentColor={accentColor} key={index} data={stat} />
            })}
          </SimpleGrid>
        </Box>
      </Box>
      <Box maxW="100%" mx="auto" px={{ base: '6', md: '8' }} mb={12} overflowX="auto" overflowY="auto">
        <SimpleGrid columns={{ base: 1, md: 1, lg: 2 }} spacing="6">
        {gamedata.map((info, index) => {
          return  <GameCard key={index} data={info} />
        })}
        </SimpleGrid>
      </Box>
    <DarkModeSwitch />
  </Container>

)

export default Index
