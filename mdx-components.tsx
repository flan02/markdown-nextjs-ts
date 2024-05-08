/* eslint-disable jsx-a11y/alt-text */
import type { MDXComponents } from 'mdx/types'
import Image, { ImageProps } from 'next/image'

// ? This file allows you to provide custom React components
// ? to be used in MDX files. You can import and use any
// ? React component you want, including inline styles,
// ? components from other libraries, and more.

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    h1: ({ children }) => (
      <h1 style={{ color: 'blue', fontSize: '48px', width: '98vw' }}>{children}</h1>
    ),
    img: (props) => (
      <Image
        sizes="100"
        width={400}
        height={400}
        {...(props as ImageProps)}
      />
    ),
    ...components,
  }
}