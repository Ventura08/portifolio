import { ComponentProps } from 'react'
import { VariantProps, tv } from 'tailwind-variants'
import { SumarioText } from './SumarioText'

const sumario = tv(
    {
        base: `
        grid
        grid-cols-12
        gap-4 
        h-full 
        w-full 
        p-4
        bg-slate-700
        bg-no-repeat
    `,
        variants: {
            size: {
                small: 'text-sm',
                medium: 'text-base border-none shadow-none p-16',
                large: 'text-lg',
                extraLarge: 'text-xl',
            },
        },
    },
    {
        responsiveVariants: true,
    }
)

type SumarioProps = ComponentProps<'div'> & VariantProps<typeof sumario>

export const Sumario = ({ className, ...props }: SumarioProps) => {
    return (
        <div className={sumario({ className })}>
            <SumarioText className="col-span-12 lg:col-span-7 xl:col-span-6" />
        </div>
    )
}
