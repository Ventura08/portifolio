import { ComponentProps } from 'react'
import { VariantProps, tv } from 'tailwind-variants'

const button = tv(
    {
        base: `
                flex 
                justify-center 
                items-center
                rounded-xl
                px-6
                py-2
                text-white
                font-bold
                border-none
                shadow-none
                transition-all
                duration-300
                hover:shadow-lg
            `,
        variants: {
            size: {
                small: 'text-base',
                medium: 'text-base border-none shadow-none',
                large: 'text-lg',
                extraLarge: 'text-xl',
            },
            primary: {
                true: 'bg-blue-400 hover:bg-blue-500',
            },
        },
        defaultVariants: {
            primary: true,
        },
    },
    {
        responsiveVariants: true,
    }
)

type ButtonProps = ComponentProps<'button'> & VariantProps<typeof button>

export const Button = ({ className, ...props }: ButtonProps) => {
    return (
        <button
            className={button({
                size: {
                    sm: 'small',
                    md: 'medium',
                    lg: 'large',
                    xl: 'extraLarge',
                    '2xl': 'extraLarge',
                },
                className,
            })}
            {...props}
        >
            {props.children}
        </button>
    )
}
