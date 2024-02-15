import { AvatarImage, AvatarText, Sumario } from '$components/exports'
import { tv } from 'tailwind-variants'

const avatarContainer = tv(
    {
        base: `
        grid
        grid-cols-12
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
                <AvatarImage className="col-span-12 lg:order-2 lg:col-span-5" />
                <AvatarText className="col-span-12 lg:order-1 lg:col-span-7" />
            </div>
            <Sumario />
        </>
    )
}
