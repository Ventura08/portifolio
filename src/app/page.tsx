import { AvatarImage, AvatarText } from '$components/exports'
import { tv } from 'tailwind-variants'

const avatarContainer = tv(
    {
        base: `
        flex 
        flex-col 
        items-center 
        justify-center 
        gap-4 
        h-full 
        w-full 
        p-4 
        bg-gradient-radial 
        bg-no-repeat
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

export default function Home() {
    return (
        <>
            <div
                className={avatarContainer({
                    size: {
                        sm: 'small',
                        md: 'medium',
                        lg: 'large',
                        xl: 'extraLarge',
                        '2xl': 'extraLarge',
                    },
                })}
            >
                <AvatarImage />
                <AvatarText />
            </div>
        </>
    )
}
