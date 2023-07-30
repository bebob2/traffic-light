import { createMachine } from 'xstate'

export const trafficLight = createMachine({
  /** @xstate-layout N4IgpgJg5mDOIC5QBcBOBDAZpglgYwFoAbHKAC2QDpVIBiAZQHUBJAFQGEAJAbQAYBdRKAAOAe1g5kOUQDshIAB6IAjAFYATJQBsvXev0AOACzqtAZl7qANCACeidZcrrVu3kdUHlAdi3eDAL4BNmhYuIQk5FS2YEREogDu6lA0YDIMLBw8AvJiElKy8koIRmqU3q683urKZgbelmZaNvYIjpoubh5evv5BIRjY+MSkFJQxcYnqNBAZbFx8gkggeZLScsvF5gCclEa6yuoGWloeps12iF6UlbpaLt7+atv9IKFDEaNUKWBpc1mLXLiNaFTaIHZ7A5HE5nE4tBxOTq6bo+PyBV4yUQQODyd7hEZRIH5dZFRAEC6tcmvPHDSJjGZEkEbUDFEzwhD1G4GMw87a8MzqIxGJreamDfF06KxeJJH5pRkFZmKBwNbSVVRaDSeQXWS5tJwVLqeVF9YJvcW0r7jaVTBnLVaK0kICrePauZT3Pk6eoGdl8yi8bm8-mC4WasVhS1RShypUOklghCqHmUAwHXjmNOmMyqdntcpGbbbbmqbzKerqHNBIJAA */
  id: 'traffic-light',
  initial: 'red',
  states: {
    red: {
      on: { SWITCH: 'yellow2green' },
    },
    yellow2green: {
      on: {
        SWITCH: 'green',
      },
    },
    yellow2red: {
      on: {
        SWITCH: 'red',
      },
    },
    green: {
      on: {
        SWITCH: 'yellow2red',
      },
    },
  },
})
