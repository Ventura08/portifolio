import { tv } from 'tailwind-variants'

const container = tv({
    base: `
        mx-6 
        my-4
        flex
        flex-col
        gap-10
    `,
})

type ContainerProps = {
    children: React.ReactNode
}

export const Container = ({ children }: ContainerProps) => {
    return <main className={container()}>{children}</main>
}
