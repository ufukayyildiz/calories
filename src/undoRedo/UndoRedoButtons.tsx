import { ButtonGroup, chakra, IconButton } from '@chakra-ui/react'
import {
  useDietFormVersionsActions,
  useDietFormVersions,
} from './useDietFormVersionsStore'
import { CornerUpLeft, CornerUpRight } from 'react-feather'
import {
  getCtrlKeyName,
  TooltipCommandLabel,
  Tooltip,
  ScreenSize,
  useScreenSize,
} from 'general'

const CornerUpLeftStyled = chakra(CornerUpLeft)
const CornerUpRightStyled = chakra(CornerUpRight)
const ctrlKeyName = getCtrlKeyName()

function UndoRedoButtons() {
  const { undo, redo } = useDietFormVersionsActions()
  const { canUndo, canRedo } = useDietFormVersions()
  const screenSize = useScreenSize()

  return (
    <ButtonGroup spacing={2} variant="outline">
      <Tooltip
        label={
          <TooltipCommandLabel command="Undo" kbdCombo={`${ctrlKeyName}+Z`} />
        }
      >
        <IconButton
          aria-label="Undo"
          icon={<CornerUpLeftStyled size={20} pointerEvents="none" />}
          isDisabled={!canUndo}
          onClick={() => undo()}
          size={screenSize >= ScreenSize.Medium ? 'sm' : 'md'}
        />
      </Tooltip>

      <Tooltip
        label={
          <TooltipCommandLabel
            command="Redo"
            kbdCombo={`${ctrlKeyName}+Shift+Z`}
          />
        }
      >
        <IconButton
          aria-label="Redo"
          icon={<CornerUpRightStyled size={20} pointerEvents="none" />}
          isDisabled={!canRedo}
          onClick={() => redo()}
          size={screenSize >= ScreenSize.Medium ? 'sm' : 'md'}
        />
      </Tooltip>
    </ButtonGroup>
  )
}

export default UndoRedoButtons
