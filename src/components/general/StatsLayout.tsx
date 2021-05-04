import { Grid, GridItem, Box, GridProps } from '@chakra-ui/react'
import React, { ReactElement } from 'react'

type Props = {
  nameElement: ReactElement
  amountElement?: ReactElement
  energyElement: ReactElement
  proteinElement: ReactElement
  carbsElement: ReactElement
  fatElement: ReactElement
  menuElement: ReactElement
} & GridProps

function StatsLayout({
  nameElement,
  amountElement = <Box />,
  energyElement,
  proteinElement,
  carbsElement,
  fatElement,
  menuElement,
  ...rest
}: Props) {
  return (
    <Grid width="100%" templateColumns="repeat(10, 1fr)" gap={1} {...rest}>
      <GridItem colSpan={4}>{nameElement}</GridItem>
      <GridItem colSpan={1}>{amountElement}</GridItem>
      <GridItem colSpan={1}>{energyElement}</GridItem>
      <GridItem colSpan={1}>{proteinElement}</GridItem>
      <GridItem colSpan={1}>{carbsElement}</GridItem>
      <GridItem colSpan={1}>{fatElement}</GridItem>
      <GridItem colSpan={1}>{menuElement}</GridItem>
    </Grid>
  )
}

export default StatsLayout
