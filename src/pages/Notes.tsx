import { useEffect, useState } from 'react'

import { supabase } from '../db/supabase'

import Left from '../components/Left'
import Right from '../components/Right'
import Header from '../ui/Header'
import Layout from '../ui/Layout'

import { useUserStore } from '../stores/userStore'
import type { Content } from '../models/response'
import { useParams } from 'react-router-dom'

function Notes (): JSX.Element {
  // const [storage, setLocalStorage] = useLocalStorage()
  const [note, setNote] = useState<Content['content']>('')
  const params = useParams()
  const { user } = useUserStore()

  useEffect(() => {
    if (params.noteId !== undefined) {
      async function getNote (): Promise<void> {
        try {
          const { data, status, error } = await supabase.from('content').select('*').eq('task', params.noteId)
          if (status !== 200) throw new Error(error?.message)
          setNote(data![0].content) // eslint-disable-line @typescript-eslint/no-non-null-assertion
          return
        } catch (error) {
          if (error instanceof Error) {
            console.error(error.message)
          }
        }
      }
      getNote()
    }
  }, [])

  return (
    <>
      <Header/>
      <Layout
        leftCol={<Left setLocalStorage={setNote} storage={note} />}
        rightCol={<Right input={note} session={user} noteId={params.noteId}/>}
      />
    </>
  )
}

export default Notes
