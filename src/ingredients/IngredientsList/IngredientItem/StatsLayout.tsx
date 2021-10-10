import { IngredientForm } from 'ingredients'
import { FoodInfo, useFoods } from 'foods'
import { StatsLayout as StatsLayoutBase, Stat, AmountInput } from 'stats'
import { RightAligned } from 'layout'
import { Stats } from 'stats'
import { useScreenSize } from 'general'
import { ChangeEvent, ReactElement } from 'react'

type Props = {
  ingredientStats: Stats
  ingredientForm: IngredientForm
  onAmountChange: (event: ChangeEvent<HTMLInputElement>) => void
  menuElement: ReactElement
}

function StatsLayout({
  ingredientStats,
  ingredientForm,
  onAmountChange,
  menuElement,
}: Props) {
  const amountInputSize = useScreenSize() >= 2 ? 'sm' : 'md'
  const { foodsById } = useFoods()
  const food = foodsById[ingredientForm.foodId]

  return (
    <StatsLayoutBase
      prefersAmount={true}
      nameElement={
        <FoodInfo
          width="85%"
          ml={3}
          fontSize={{ base: 'sm', md: 'md' }}
          food={food}
        />
      }
      amountElement={
        <RightAligned>
          <AmountInput
            size={amountInputSize}
            onChange={onAmountChange}
            value={ingredientForm.amountInGrams}
          />
        </RightAligned>
      }
      energyElement={
        <Stat type="ingredientEnergy" value={ingredientStats.energy} />
      }
      proteinElement={
        <Stat type="ingredient" value={ingredientStats.protein} />
      }
      carbsElement={<Stat type="ingredient" value={ingredientStats.carbs} />}
      fatElement={<Stat type="ingredient" value={ingredientStats.fat} />}
      menuElement={menuElement}
    />
  )
}

export default StatsLayout
