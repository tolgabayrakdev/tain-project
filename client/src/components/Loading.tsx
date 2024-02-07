import { Loader } from '@mantine/core'

export default function Loading() {
    return (
        <div className='h-screen flex justify-center items-center'>
            <Loader color="blue" size="md" type="dots" />
        </div>
    )
}