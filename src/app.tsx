import { useMachine } from '@xstate/react'
import { trafficLight } from './machine'
import { cn } from './util'
import { useEffect } from 'react'

type Props = {}

export const App = (props: Props) => {
  const [state, send] = useMachine(trafficLight)
  useEffect(() => {
    function giveDelay() {
      if (state.matches('red') || state.matches('green')) {
        return 5000
      } else {
        return 2000
      }
    }

    const handleSwitch = () => {
      send('SWITCH')
    }
    const timeoutId = setTimeout(handleSwitch, giveDelay())
    return () => clearTimeout(timeoutId)
  })

  return (
    <>
      <div className="flex h-screen flex-col items-center justify-center gap-3">
        <h1 className="text-xl font-black">Traffic Light</h1>
        <div className="flex flex-col items-center gap-4 rounded bg-gray-800 p-4 py-4">
          <div
            className={cn(
              'h-10 w-10 rounded-full bg-red-950',
              (state.matches('red') || state.matches('yellow2green')) &&
                ' bg-red-600'
            )}
          ></div>
          <div
            className={cn(
              'h-10 w-10 rounded-full bg-yellow-950',
              (state.matches('yellow2red') || state.matches('yellow2green')) &&
                ' bg-yellow-400'
            )}
          ></div>
          <div
            className={cn(
              'h-10 w-10 rounded-full bg-green-950',
              state.matches('green') && ' bg-green-600 '
            )}
          ></div>
        </div>
        <button
          className=" m-2  rounded-md border border-slate-900 bg-slate-100 p-2"
          onClick={() => send('SWITCH')}
        >
          Next
        </button>
      </div>
    </>
  )
}
