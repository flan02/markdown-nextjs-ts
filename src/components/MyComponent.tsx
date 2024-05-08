import Welcome from '@/markdown/welcome.mdx'
import ChunkCode from '@/markdown/chunkcode.mdx'
import Styled from '@/markdown/styled.mdx'
import MdxLayout from './mdx-layout'

type Props = {}

function CustomH1({ children }: any) {
  return <h1 className='text-rose-400 text-4xl'>{children}</h1>
}



const overrideComponents = {
  h1: CustomH1,
}


// TODO: Server component!
export default async function MyComponent(props: Props) {
  return (
    <>
      <Welcome components={overrideComponents} />
      <ChunkCode />
      <MdxLayout>
        <h1 className='prose-h1:'>Hello Ollie</h1>
      </MdxLayout>
      <Styled />
    </>
  )
}


