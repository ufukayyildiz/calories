import { Box, Button, useDisclosure, Text } from '@chakra-ui/react'
import { RefObject } from 'react'
import AddFoodDialog from './AddFoodDialog'
import useAddFood from './useAddFood'

type Props = {
  getFoodCategoryItemRefById: (id: number) => RefObject<HTMLDivElement>
  foodCategoriesListRef: RefObject<HTMLDivElement>
}

function FoodsCategoriesHeader({
  getFoodCategoryItemRefById,
  foodCategoriesListRef,
}: Props) {
  const addFoodDialogDisclosure = useDisclosure()
  const onAddFood = useAddFood({
    foodCategoriesListRef,
    getFoodCategoryItemRefById,
  })

  async function onFoodAdded() {
    addFoodDialogDisclosure.onClose()
    onAddFood()
  }

  return (
    <Box
      height="130px"
      bg="white"
      borderBottomWidth={1}
      borderBottomColor="gray.200"
      p={6}
    >
      <Text>Foods</Text>
      <Button variant="outline" onClick={addFoodDialogDisclosure.onOpen}>
        Add food
      </Button>
      <AddFoodDialog
        isOpen={addFoodDialogDisclosure.isOpen}
        onFoodAdded={onFoodAdded}
        onClose={addFoodDialogDisclosure.onClose}
      />
    </Box>
  )
}

export default FoodsCategoriesHeader
