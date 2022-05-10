import {
  Box,
  Button,
  Code,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  StackDivider,
  HStack, Link, Stack, Text, useDisclosure } from '@chakra-ui/react';
import * as React from 'react';
import { CallToActionLink } from './CallToActionLink';
import {ExternalLinkIcon} from "@chakra-ui/icons";

export function Banner() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  return (
    <Box
      bgGradient="linear(to-r, blue.500, purple.500)"
      color="white"
      py="3"
      px={{ base: '3', md: '6', lg: '8' }}
    >
      <HStack spacing="3">
        <Stack
          direction={{ base: 'column', sm: 'row' }}
          justifyContent="center"
          alignItems="center"
          spacing={{ base: '3', md: '6' }}
          width="full"
        >
          <Text>
            <strong>Chicago Bulls 2021-22 Season is now complete.</strong> Check out the new FAQs!
          </Text>
          <CallToActionLink
            textAlign="center"
            onClick={onOpen}
            width={{ base: 'full', sm: 'auto' }}
          >
            View frequently asked questions
          </CallToActionLink>
          <Drawer
            isOpen={isOpen}
            placement='right'
            size={'xl'}
            onClose={onClose}
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>Frequently Asked Questions</DrawerHeader>

              <DrawerBody>
                <Box bg="bg-surface" py="4">
                  <Stack divider={<StackDivider />} spacing="4">

                    <Stack fontSize="lg" spacing="0.5">
                      <Box>
                        <Text fontWeight="bold" color="emphasized" fontSize={'xl'}>
                          How much do the tickets cost?
                        </Text>
                      </Box>
                      <Text
                        color="muted"
                      >
                        2021-22 tickets cost $13,601.28 ($154.56 per seat per game) This includes 41 regular season home games and 3 preseason home games.
                      </Text>
                    </Stack>

                    <Stack fontSize="lg" spacing="0.5">
                      <Box>
                        <Text fontWeight="bold" color="emphasized" fontSize={'xl'}>
                          This doesn&apos;t seem like a great use of money?
                        </Text>
                      </Box>
                      <Text
                        color="muted"
                      >
                        What is the question?
                      </Text>
                    </Stack>
                    <Stack fontSize="lg" spacing="0.5">
                      <Box>
                        <Text fontWeight="bold" color="emphasized" fontSize={'xl'}>
                          What advice do you have for a potential season ticket purchaser?
                        </Text>
                      </Box>
                      <Text
                        color="muted"
                      >
                        <Text py={2}>
                          1. Do not buy season tickets thinking you will make money. Hope that you can break even with a playoff run.
                        </Text>
                        <Text py={2}>
                          2. Living within walking distance of the United Center makes it way easier. I would have sold more games if it was not so easy to get the games.
                        </Text>
                        <Text py={2}>
                          3. Be prepared to eat games. You will not have buyers for every game. Your Bulls fans friends will not make the trek from Lisle as often as you think.
                        </Text>
                        <Text py={2}>
                          4. Sell the premium games (Home Opener, Christmas, LeBron, Golden State)
                        </Text>
                        <Text py={2}>
                          5. The more expensive the tickets you buy the more people you will price out. Not a lot of friends will give you $309 for a Kings game in January. But everyone will ask for LeBron games at face value.
                        </Text>
                        <Text py={2}>
                          6. Get an AmEx card so you can use the entrance and avoid lines. Also putting all season ticket related charges on a single card is a good way to track all expenses.
                        </Text>
                        <Text py={2}>
                          7. The concessions are terribly slow. Get to the game 45 minutes early and grab food. Leave about a min before the quarters end and grab drinks. Everything is cashless even the beer vendors. But if you tip any vendor $20 cash once they will find you at every other game.
                        </Text>
                        <Text py={2}>
                          8. People Take the bobble heads seriously. If it&apos;s bobble head give-away night get there extra early.
                        </Text>
                        <Text py={2}>
                          9. Get aisle seats if possible. Being in the middle two seats of a twenty seat section is the not ideal.
                        </Text>
                        <Text py={2}>
                          10. Section 120 is the worst section for the parachute drop.
                        </Text>
                      </Text>
                    </Stack>
                    <Stack fontSize="lg" spacing="0.5">
                      <Box>
                        <Text fontWeight="bold" color="emphasized" fontSize={'xl'}>
                          What happens when you don't have anyone to go with?
                        </Text>
                      </Box>
                      <Text
                        color="muted"
                      >
                        Sometimes I list the single ticket for sale. Typically I call those "coat" games and I set my coat in the spare seat.
                      </Text>
                    </Stack>
                    <Stack fontSize="lg" spacing="0.5">
                      <Box>
                        <Text fontWeight="bold" color="emphasized" fontSize={'xl'}>
                          Do you split the seats with anyone?
                        </Text>
                      </Box>
                      <Text
                        color="muted"
                      >
                        Splitting is a bit tricky because everyone wants the same games. I have a small group of people I offer games to when they are available.
                      </Text>
                    </Stack>
                    <Stack fontSize="lg" spacing="0.5">
                      <Box>
                        <Text fontWeight="bold" color="emphasized" fontSize={'xl'}>
                          Best moments of the season?
                        </Text>
                      </Box>
                      <Text
                        color="muted"
                      >
                        <Text py={2}>
                          1. Taking my dad to games.
                        </Text>
                        <Text py={2}>
                          2. Seeing a LaVine 360 dunk and seeing myself in the highlights on TV.
                        </Text>
                        <Text py={2}>
                          3. Wearing bright clothes so my mom can find me on TV.
                        </Text>
                      </Text>
                    </Stack>
                    <Stack fontSize="lg" spacing="0.5">
                      <Box>
                        <Text fontWeight="bold" color="emphasized" fontSize={'xl'}>
                          Worst moments of the season?
                        </Text>
                      </Box>
                      <Text
                        color="muted"
                      >
                      </Text>
                      <Text py={2}>
                        1. Second half of the season and the playoffs.
                      </Text>
                      <Text py={2}>
                        2. My business partner ruptured his achilles at a season ticket holder event shooting around on the court. It required surgery months before his wedding.
                      </Text>
                      <Text py={2}>
                        3. Mark Cuban was sitting a few rows in front of me. I asked him to look at my start-up companies pitch deck. He didn&apos;t respond. But our valuation has doubled since then so maybe this should be on his worst moments list.
                      </Text>
                      <Text py={2}>
                        4. Caruso and Lonzo getting hurt really killed the teams momentum.
                      </Text>
                      <Text py={2}>
                        5. Constantly having to kick people out of my seats. Adult autograph seekers were the worst. They bring a stack of 8x10s and stand next to a group of children trying to get merch to flip on ebay. If that is you please be better.
                      </Text>
                    </Stack>
                    <Stack fontSize="lg" spacing="0.5">
                      <Box>
                        <Text fontWeight="bold" color="emphasized" fontSize={'xl'}>
                          How did you get the domain bullstickets.net?
                        </Text>
                      </Box>
                      <Text
                        color="muted"
                      >
                        It was available. I thought the .net worked well with the basketball theme.
                      </Text>
                    </Stack>
                    <Stack fontSize="lg" spacing="0.5">
                      <Box>
                        <Text fontWeight="bold" color="emphasized" fontSize={'xl'}>
                          What do you do for work?
                        </Text>
                      </Box>
                      <Text
                        color="muted"
                      >
                        I am the CTO of a tech start-up in Chicago. I'm dangerously under-qualified but when you start a company with a friend you can give yourself whatever title you want. I also have a small digital agency that focuses on community and social service related projects.
                      </Text>
                    </Stack>
                    <Stack fontSize="lg" spacing="0.5">
                      <Box>
                        <Text fontWeight="bold" color="emphasized" fontSize={'xl'}>
                          Are you renewing the tickets for next season?
                        </Text>
                      </Box>
                      <Text
                        color="muted"
                      >
                        Yes. But these seats are now in a "premium" section so the cost is going up almost 20% next season. There was an option to move to a more center section but 20 rows back for the same price.
                      </Text>
                    </Stack>
                    <Stack fontSize="lg" spacing="0.5">
                      <Box>
                        <Text fontWeight="bold" color="emphasized" fontSize={'xl'}>
                          How did you make this site?
                        </Text>
                      </Box>
                      <Text
                        color="muted"
                      >This site was made with:
                        <Box py={2}>
                          <Link href='https://www.basketball-reference.com/teams/CHI/2022_games.html' isExternal>
                            Basketball Reference <ExternalLinkIcon mx='2px' />
                          </Link>
                        </Box>
                        <Box py={2}>
                          <Link href='https://chakra-ui.com/' isExternal>
                            Chakra UI <ExternalLinkIcon mx='2px' />
                          </Link>
                        </Box>
                        <Box py={2}>
                          <Link href='https://nextjs.org/' isExternal>
                            NextJS <ExternalLinkIcon mx='2px' />
                          </Link>
                        </Box>
                        <Box py={2}>
                          <Link href='https://reactjs.org/' isExternal>
                            ReactJS <ExternalLinkIcon mx='2px' />
                          </Link>
                        </Box>
                        <Box py={2}>
                          <Link href='https://www.npmjs.com/package/react-nba-logos' isExternal>
                            React NBA Logos <ExternalLinkIcon mx='2px' />
                          </Link>
                        </Box>
                        <Box py={2}>
                          <Link href='https://vercel.com/' isExternal>
                            Vercel <ExternalLinkIcon mx='2px' />
                          </Link>
                        </Box>
                        <Box py={2}>
                          <Link href='https://www.wunderground.com/history/daily/us/il/chicago' isExternal>
                            Wunderground <ExternalLinkIcon mx='2px' />
                          </Link>
                        </Box>
                        Right now it is mostly updated via a manual process. The data object looks like:

                      </Text>
                      <Box py={2}>
                        <Code children="{awayTeam: 'Miami Heat',
                          awayTeamLogo: 'MIA',
                          awayTeamRecord: '13-7',
                          awayTeamScore: 107,
                          awayTeamStreak: 'W1',
                          homeTeam: 'Chicago Bulls',
                          homeTeamLogo: 'CHI',
                          homeTeamRecord: '13-8',
                          homeTeamScore: 104,
                          homeTeamStreak: 'L1',
                          instagramLink: '',
                          gameId: 'https://www.basketball-reference.com/boxscores/202111270CHI.html',
                          gameDate: '2021-11-27',
                          gameTime: '7:00pm',
                          gameType: 'regular season',
                          purchases: {
                            parking: false,
                            food: false,
                            drinks: false,
                            merchandise: false},
                          stats: {
                            attended: false,
                            sold: true,
                            soldDate: '2021-11-22',
                            giveaway: false,
                            notes: '',
                            status: 'Sold Both',
                            statusColorScheme: 'green',
                            tv: 'NBCSN',
                            weather: 41,
                            win: false},
                          totals: {
                            currency: '$',
                            gameCosts: 0.00,
                            ticketCost: 309.12,
                            ticketSales: 800.00}}" />
                      </Box>
                    </Stack>
                    <Stack fontSize="lg" spacing="0.5">
                      <Box>
                        <Text fontWeight="bold" color="emphasized" fontSize={'xl'}>
                          Is the source code for this site available?
                        </Text>
                      </Box>
                      <Text
                        color="muted"
                      >
                        Send me a message if you want to see it. Currently working on a better version for next season with more features and stats.
                      </Text>
                    </Stack>
                    <Stack fontSize="lg" spacing="0.5">
                      <Box>
                        <Text fontWeight="bold" color="emphasized" fontSize={'xl'}>
                        </Text>
                      </Box>
                      <Text
                        color="muted"
                      >
                      </Text>
                    </Stack>
                  </Stack>
                </Box>
              </DrawerBody>
              <DrawerFooter>
                <Button variant='outline' mr={3} onClick={onClose}>
                  Close
                </Button>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </Stack>
      </HStack>
    </Box>
)};
