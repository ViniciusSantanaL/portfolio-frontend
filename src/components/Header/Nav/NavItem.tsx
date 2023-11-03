'use client'

import { motion } from 'framer-motion'

import * as NavigationMenu from '@radix-ui/react-navigation-menu'

export type NavItemProps = NavigationMenu.NavigationMenuTriggerProps & {
  label: string
  isSelected?: boolean
  value: string
}

export function NavItem({ label, value, isSelected, ...props }: NavItemProps) {
  return (
    <NavigationMenu.Item className="relative" value={value}>
      <NavigationMenu.Trigger
        {...props}
        className={`cursor-pointer hover:text-blue-550 transition-colors ${
          isSelected ? 'text-blue-550' : ''
        }`}
      >
        {label}
      </NavigationMenu.Trigger>
      {isSelected && (
        <motion.div
          layoutId="activeTab"
          className="absolute -bottom-px left-0 right-0 bg-blue-550 h-0.5"
        />
      )}
    </NavigationMenu.Item>
  )
}
