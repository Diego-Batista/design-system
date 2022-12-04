import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import { ReactNode } from 'react'
import { ComponentProps } from '../../types/ComponentProps'
import { TooltipArrow, TootipContent } from './styles'

export type ToolTipProps = ComponentProps<typeof TooltipPrimitive.Root> & {
  content: string | ReactNode
}

export function ToolTip({ children, content, ...props }: ToolTipProps) {
  return (
    <TooltipPrimitive.Provider>
      <TooltipPrimitive.Root {...props}>
        <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
        <TooltipPrimitive.Portal>
          <TootipContent>
            <TooltipArrow />

            {content}
          </TootipContent>
        </TooltipPrimitive.Portal>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  )
}

ToolTip.displayName = 'ToolTip'
