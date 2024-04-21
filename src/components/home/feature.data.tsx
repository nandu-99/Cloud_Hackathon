import React, { ReactNode } from 'react'
import ArtTrackIcon from '@mui/icons-material/ArtTrack'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary'
import ContactSupportIcon from '@mui/icons-material/ContactSupport'

interface Data {
  title: string
  description: string
  icon?: ReactNode
}

export const data: Data[] = [
  {
    title: 'Seamless Accessibility',
    description: 'Seamless Accessibility: Dive into learning anytime, anywhere.',
    icon: <ArtTrackIcon />,
  },
  {
    title: 'Affordable Pricing',
    description: 'Affordable Pricing: Quality education at a fraction of the cost.',
    icon: <AttachMoneyIcon />,
  },
  {
    title: 'Flexible Study Hours',
    description: 'Flexible Study Hours: Learn at your own pace, on your own time.',
    icon: <LocalLibraryIcon />,
  },
  {
    title: 'Expert Mentorship',
    description: 'Expert Mentorship: Gain valuable insights from experienced mentors.',
    icon: <ContactSupportIcon />,
  },
]
