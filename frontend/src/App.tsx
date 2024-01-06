import { useState } from 'react'
import './App.css'
import { Card, Text } from '@mantine/core'
import { MantineProvider, createTheme  } from '@mantine/core';
import '@mantine/core/styles.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <MantineProvider theme={createTheme({})}>
      <>
        <Card shadow='lg'>
          <Text>Hello</Text>
        </Card>
      </>
    </MantineProvider>

  )
}

export default App
