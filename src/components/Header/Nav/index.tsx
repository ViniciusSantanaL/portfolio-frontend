import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import { NavItem, NavItemProps } from './NavItem'
import { useState } from 'react'
import { VariantProps, tv } from 'tailwind-variants'

const navItems: NavItemProps[] = [
  {
    value: '1',
    label: 'Home',
  },
  {
    value: '2',
    label: 'About',
  },
  {
    value: '3',
    label: 'Experiences',
  },
  {
    value: '4',
    label: 'Projects',
  },
]

const navbar = tv({
  variants: {
    variant: {
      principal: 'flex gap-4',
      mobile: 'flex flex-col justify-between items-center gap-10 z-50',
    },
  },
  defaultVariants: {
    variant: 'principal',
  },
})

type NavBarProps = VariantProps<typeof navbar>

export function NavBar({ variant }: NavBarProps) {
  const [currentItem, setCurrentItem] = useState('1')

  return (
    <NavigationMenu.Root
      value={currentItem}
      asChild={variant === 'mobile'}
      className="hidden lg:block"
    >
      <NavigationMenu.List className={navbar({ variant })}>
        {navItems.map((item) => (
          <NavItem
            {...item}
            key={item.value}
            isSelected={currentItem === item.value}
            onClick={() => setCurrentItem(item.value)}
          />
        ))}
      </NavigationMenu.List>
    </NavigationMenu.Root>
  )
}
