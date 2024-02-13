import { tv } from 'tailwind-variants'

const avatarText = tv(
    {
        slots: {
            textContainer: `
                flex 
                flex-col 
                items-center 
                justify-center
            `,
            title: `
                text-1xl 
                text-center 
                text-white 
                font-bold 
            `,
            typingDiv: `
                overflow-hidden
                border-solid
                border-r-2
                whitespace-nowrap
                m-auto
                letter-spacing-15
                animate-typewriter
            `,
            typingDivText: `
                font-bold
                text-2xl
                bg-gradient-linear
                text-transparent
                bg-clip-text
                `,
        },
        variants: {
            size: {
                small: {
                    title: 'text-1xl',
                    typingDivText: 'text-3xl',
                },
                medium: {
                    title: 'text-2xl',
                    typingDivText: 'text-4xl',
                },
                large: {
                    title: 'text-3xl',
                    typingDivText: 'text-5xl',
                },
                extraLarge: {
                    title: 'text-4xl',
                    typingDivText: 'text-6xl',
                },
            },
        },
    },

    {
        responsiveVariants: true,
    }
)
export const AvatarText = () => {
    const { textContainer, title, typingDiv, typingDivText } = avatarText({
        size: {
            sm: 'small',
            md: 'medium',
            lg: 'large',
            xl: 'extraLarge',
            '2xl': 'extraLarge',
        },
    })
    return (
        <div className={textContainer()}>
            <h1 className={title()}>Seja bem-vindo, eu sou</h1>
            <div className={typingDiv()}>
                <h1 className={typingDivText()}>Estevão Boaventura</h1>
            </div>
        </div>
    )
}
