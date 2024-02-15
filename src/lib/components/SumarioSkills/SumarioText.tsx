import { ComponentProps } from 'react'
import { VariantProps, tv } from 'tailwind-variants'

const sumarioText = tv(
    {
        slots: {
            sumarioTextContainer: `
                flex
                flex-row
                flex-wrap
                justify-around
                items-center
                w-full 
            `,
            sumarioTextContent: `flex gap-3 basis-full text-xl text-left text-white`,
        },
        variants: {
            size: {
                small: {
                    sumarioTextContent: 'text-xl basis-1/2 p-8',
                },
                medium: {
                    sumarioTextContent:
                        'text-xl border-none shadow-none text-left',
                },
                large: { sumarioTextContent: 'text-2xl' },
                extraLarge: { sumarioTextContent: 'text-3xl' },
                '2xl': { sumarioTextContent: 'text-5xl' },
            },
        },
    },
    {
        responsiveVariants: true,
    }
)

type SumarioTextProps = ComponentProps<'div'> & VariantProps<typeof sumarioText>

export const SumarioText = ({ className, ...props }: SumarioTextProps) => {
    const { sumarioTextContainer, sumarioTextContent } = sumarioText({
        size: {
            sm: 'small',
            md: 'medium',
            lg: 'large',
            xl: 'extraLarge',
            '2xl': '2xl',
        },
    })
    return (
        <div className={sumarioTextContainer({ className })}>
            <h1 className={sumarioTextContent()}>
                <span className="font-semibold">3+</span> anos de experiência
            </h1>
            <h1 className={sumarioTextContent()}>
                <span className="font-semibold">8+</span> projetos completos
            </h1>
        </div>
    )
}
