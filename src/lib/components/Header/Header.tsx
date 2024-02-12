import { tv } from 'tailwind-variants'

const header = tv(
    {
        base: `
                transition-all 
                flex 
                justify-center 
                text-white 
                text-sm 
                border-2 
                border-gray-50 
                shadow-neon 
                rounded-xl 
                px-6 
                py-4 
                animate-topToBottomFadeIn
            `,
        variants: {
            size: {
                small: 'text-sm',
                medium: 'text-base border-none shadow-none',
                large: 'text-lg',
                extraLarge: 'text-xl',
            },
        },
    },
    {
        responsiveVariants: true,
    }
)
export const Header = () => {
    const text =
        '"Em um mundo de constantes atualizações, ser adaptável é o nosso maior poder. - Inspirado em Hunter x Hunter"'
    return (
        <header
            className={header({
                size: {
                    sm: 'small',
                    md: 'medium',
                    lg: 'large',
                    xl: 'extraLarge',
                    '2xl': 'extraLarge',
                },
            })}
        >
            {text}
        </header>
    )
}
