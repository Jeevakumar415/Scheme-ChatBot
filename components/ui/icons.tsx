// 'use client'

// import { cn } from '@/lib/utils'

// function IconLogo({ className, ...props }: React.ComponentProps<'svg'>) {
//   return (
//     <svg
//       fill="currentColor"
//       viewBox="0 0 256 256"
//       role="img"
//       xmlns="http://www.w3.org/2000/svg"
//       className={cn('h-4 w-4', className)}
//       {...props}
//     >
//       <circle cx="128" cy="128" r="128" fill="black"></circle>
//       <circle cx="102" cy="128" r="18" fill="white"></circle>
//       <circle cx="154" cy="128" r="18" fill="white"></circle>
//     </svg>
//   )
// }

// export { IconLogo }

'use client'

import { cn } from '@/lib/utils'

function IconLogo({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      fill="currentColor"
      viewBox="0 0 256 256"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('h-6 w-6', className)}
      {...props}
    >
      {/* Head (circle) */}
      <circle cx="128" cy="72" r="32" fill="yes" stroke="black" strokeWidth="8" />
      
      {/* Body (thin lines for the torso) */}
      <line x1="128" y1="104" x2="128" y2="184" stroke="black" strokeWidth="8" />

      {/* Arms (lines for arms extending out) */}
      <line x1="128" y1="120" x2="100" y2="140" stroke="black" strokeWidth="8" />
      <line x1="128" y1="120" x2="156" y2="140" stroke="black" strokeWidth="8" />
    </svg>
  )
}

export { IconLogo }
