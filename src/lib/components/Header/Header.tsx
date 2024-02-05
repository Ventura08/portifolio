import { tv } from 'tailwind-variants'

const header = tv({
    base: 'flex justify-center text-white text-lg xl:text-xl sm:text-sm px-6 py-4 animate-topToBottomFadeIn',
})

export const Header = () => {
    const text =
        '"Em um mundo de constantes atualizações, ser adaptável é o nosso maior poder. - Inspirado em Hunter x Hunter"'
    return <header className={header()}>{text}</header>
}
