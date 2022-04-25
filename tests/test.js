import { readFileSync } from 'fs'
import { resolve } from 'path'
import postcss from 'postcss'
import tailwind from 'tailwindcss'
import parent from '../'
import cssMatch from 'jest-matcher-css'
expect.extend({ cssMatch })

test('variants', async () => {
  const config = {
    plugins: [parent],
    content: [resolve('./tests/test.html')],
    theme: {
      extend: {
        parent: {
          classNames: {
            'direct-red': 'is-red >',
            'is-red': 'is-red',
            'is-green': 'is-green',
            'is-blue': 'is-blue'
          }
        }
      }
    }
  }

  const input = '@tailwind components; @tailwind utilities;'
  const result = await postcss(tailwind(config)).process(input, { from: undefined })
  const expected = readFileSync(resolve('./tests/test.css'), 'utf-8')
  expect(result.css).cssMatch(expected)
})

