import Image from 'next/image'
import { VariantProps, tv } from 'tailwind-variants'
import myAvatar from '$assets/my-avatar.png'
import { ComponentProps } from 'react'

const avatarImage = tv(
    {
        slots: {
            image: `
                        w-full
                        h-auto
                        rounded-full
                        animate-slideRightToLeft
                    `,
            imageContainer: `
                        w-full
                        h-auto
                        rounded-full
                        overflow-hidden
            `,
        },
        variants: {
            size: {},
        },
    },
    {
        responsiveVariants: true,
    }
)

type AvatarImageProps = ComponentProps<'img'> & VariantProps<typeof avatarImage>

export const AvatarImage = ({ className, ...props }: AvatarImageProps) => {
    const { image, imageContainer } = avatarImage()
    return (
        <picture className={imageContainer({ className })}>
            <Image
                src={myAvatar}
                alt={'Estevão Boaventura'}
                className={image()}
                sizes="100vw"
                quality={100}
                priority
            />
        </picture>
    )
}
