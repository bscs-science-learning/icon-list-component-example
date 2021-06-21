import React, { ReactNode } from 'react'

import styled from 'styled-components'

/*===========================================================
  Simple utilities for making Tailwind classNames
  cleaner to work with.
============================================================*/
import {
  appendVariantClasses,
  formatClassList,
  joinStrings
} from '../../utils'

/*===========================================================
  Color type for specifying color variants.
============================================================*/
import { Color } from '../../types'

/*===========================================================
  Defining prop types.

  **Note** we do not use React.FC!!! It can lead to bugs!
  Instead, define children explicitly when needed.
============================================================*/
type IconListProps = {
  className?: string,
  icon: string,
  iconColor: Color,
  listItems: string[]
}

type ListProps = {
  children?: ReactNode,
  className?: string,
  [other:string]: unknown
}

type SpanProps = {
  children?: ReactNode
}

/*============================================================
  Tailwind classNames defined legibly as string literals
  and alphabetized.
============================================================*/
const UL: string = `
  list-none
  ml-10
  pl-0
`

const FA: string = `
  -left-9
  absolute
  text-right
  w-7
`

const BLUE: string = `
  text-blue-500
`

const GREEN: string = `
  text-green-500
`

const INDIGO: string = `
  text-indigo-600
`

const ORANGE: string = `
  text-orange-500
`

const RED: string = `
  text-red-600
`

const TEXT: string = `
  leading-relaxed
  text-gray-700
  tracking-wider
`

const VIOLET: string = `
  text-violet-500
`

const YELLOW: string = `
  text-yellow-600
`

/*============================================================
  Variant property map
============================================================*/
const ICONCOLORS: Record<string, string> = {
  'blue': BLUE,
  'green': GREEN,
  'indigo': INDIGO,
  'orange': ORANGE,
  'red': RED,
  'violet': VIOLET,
  'yellow': YELLOW
}

/*============================================================
  Subcomponent definitions
============================================================*/
const List = ({
  children,
  className,
  ...other
}: ListProps) => {
  const formattedUl: string = className ? joinStrings(' ', formatClassList(UL), className)
                                        : formatClassList(UL)
  return(
    <ul className={formattedUl} {...other}>{children}</ul>
  )
}

const Span = ({
  children
}: SpanProps) => {
  const formattedFa: string = formatClassList(FA)
  return(
    <span className={formattedFa}>{children}</span>
  )
}

/*============================================================
  Begin component definition.
============================================================*/
const IconList = ({
  icon,
  iconColor,
  listItems
}: IconListProps) => {
  const formattedIcon = formatClassList(
    appendVariantClasses(
      icon,
      ICONCOLORS,
      iconColor
    )
  )
  const formattedText: string = formatClassList(TEXT)

  /*===========================================================
    Use Styled Components sparingly.
    Only when tailwind cannot provide reasonable values.
    Otherwise stick to the *system* provided by Tailwind.
    Do your best to avoid nested specificity.
  ============================================================*/
  const Fa = styled(Span)`
    top: 0.07em;
  `

  return (
    <List>
      {
        listItems.map((item: string, index: number) => (
          <li
            className="mt-6 first:mt-0 relative"
            key={`icon-list-item-${index}`}
          >
            <Fa>
              <i className={formattedIcon} />
            </Fa>
            <span className={formattedText} >
              {item}
            </span>
          </li>
        ))
      }
    </List>
  )
}

export default IconList
