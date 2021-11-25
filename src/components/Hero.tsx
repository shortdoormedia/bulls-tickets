import { Flex, Heading } from '@chakra-ui/react'

export const Hero = ({ title }: { title: string }) => (
  <Flex
    justifyContent="center"
    alignItems="center"
  >
    <Heading as="h1" fontSize="6vw" color={'#FF0080'}>{title}</Heading>
  </Flex>
)

Hero.defaultProps = {
  title: 'Bulls Tickets 2021',
}
