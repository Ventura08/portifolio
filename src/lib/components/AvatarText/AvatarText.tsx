import { VariantProps, tv } from 'tailwind-variants'
import { Button } from '$components/exports'
import { ComponentProps } from 'react'

const avatarText = tv(
    {
        slots: {
            textContainer: `
                flex 
                flex-col
                items-center 
                justify-center
                gap-5
            `,
            title: `
                text-1xl 
                text-center
                w-full
                text-white 
                letter-spacing-15
            `,
            typingDiv: `
                overflow-hidden
                whitespace-nowrap
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
                    textContainer: `*:text-left items-start`,
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

type AvatarTextProps = ComponentProps<'div'> & VariantProps<typeof avatarText>

export const AvatarText = ({ className, ...props }: AvatarTextProps) => {
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
        <div className={textContainer({ className })}>
            <h1 className={title()}>Seja bem-vindo, eu sou</h1>
            <div className={typingDiv()}>
                <h1 className={typingDivText()}>{'Estevão Boaventura'}</h1>
            </div>
            <h1 className={title()}>
                Desenvolvedor Fullstack - Typescript | Javascript | NextJS |
                NodeJS | Laravel | Python
            </h1>
            <Button className="w-full md:w-2/3">Entre em contato</Button>
        </div>
    )
}
