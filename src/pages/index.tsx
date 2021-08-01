import {
  Flex,
  Box,
  SimpleGrid,
  useColorModeValue as mode
} from '@chakra-ui/react'
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
      <Box maxW="100%" mx="auto" px={{ base: '6', md: '8' }} overflowX="auto" overflowY="auto">
        {gamedata.map((info, index) => {
          return  <GameCard key={index} data={info} />
        })}
      </Box>
    </Flex>

    <Footer>
      
    </Footer>

    <DarkModeSwitch />
    <CTA/>
  </Container>

)

export default Index
