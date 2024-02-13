import Image from 'next/image'
import { tv } from 'tailwind-variants'
import myAvatar from '$assets/my-avatar.png'

const avatar = tv(
    {
        base: `
                w-full
                h-auto
                rounded-full
                animate-slideRightToLeft
            `,
        variants: {
            size: {},
        },
    },
    {
        responsiveVariants: true,
    }
)
export const AvatarImage = () => {
    return (
        <section>
            <Image
                src={myAvatar}
                alt={'Estevão Boaventura'}
                className={avatar()}
                sizes="100vw"
                priority
            />
        </section>
    )
}
