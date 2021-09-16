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
    <Heading as="h2" size="lg" textAlign="center" px="5" mt="5">Numbers are for 2 seats in Section 120 Row 4</Heading>
    <Flex
      justifyContent="center"
      alignItems="center"
    >
      <Box as="section" bg={mode('gray.50', 'gray.800')} p="5">
        <Box maxW="10xl" mx="auto" py={{ base: '3', md: '6' }}px={{ base: '3', md: '6' }}>
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
      <Box maxW="100%" mx="auto" px={{ base: '6', md: '8' }} overflowX="auto" overflowY="auto">
        {gamedata.map((info, index) => {
          return  <GameCard key={index} data={info} />
        })}
      </Box>
    </Flex>
    <DarkModeSwitch />
    <CTA/>
  </Container>

)

export default Index
