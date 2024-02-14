import Image from 'next/image'
import { VariantProps, tv } from 'tailwind-variants'
import myAvatar from '$assets/my-avatar.png'
import { ComponentProps } from 'react'

const avatar = tv(
    {
        base: `
                w-full
                h-auto
                rounded-full
            `,
        variants: {
            size: {},
        },
    },
    {
        responsiveVariants: true,
    }
)

type AvatarImageProps = ComponentProps<'img'> & VariantProps<typeof avatar>

export const AvatarImage = ({ className, ...props }: AvatarImageProps) => {
    return (
        <Image
            src={myAvatar}
            alt={'Estevão Boaventura'}
            className={avatar({ className })}
            sizes="100vw"
            quality={100}
            priority
        />
    )
}
