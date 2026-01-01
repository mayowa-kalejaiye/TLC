"use client"
import React, { useEffect, useState, useRef } from 'react'
import dynamic from 'next/dynamic'

import simpleMarkdownToHtml from '@/lib/markdown'
import PublishToast from '@/components/PublishToast'
const ClientOnlyEditor = dynamic(() => import('@/components/ClientOnlyEditor'), { ssr: false })




function AdminApp() {
  // All state declarations at the very top
  const [password, setPassword] = useState('')
  const [title, setTitle] = useState('')
  const [image, setImage] = useState('')
  const [imageFile, setImageFile] = useState<File | null>(null)
  const [localPreview, setLocalPreview] = useState('')
  const [content, setContent] = useState('')
  const [message, setMessage] = useState('')
  const [scheduledDate, setScheduledDate] = useState('')
  // uploading state removed (not used directly)
  const [attempts, setAttempts] = useState(0)
  const [showPublishToast, setShowPublishToast] = useState(false)
  const [toastText, setToastText] = useState('')
  const [isAuthed, setIsAuthed] = useState(false)
  const [mode, setMode] = useState<'edit' | 'preview'>('edit')
  const fileInputRef = useRef<HTMLInputElement | null>(null)
  // Undo/redo stacks
  const [history, setHistory] = useState([{ title: '', content: '', image: '' }])
  const [historyIndex, setHistoryIndex] = useState(0)
  // List of devotionals for admin
  type Devotional = { id: string; title?: string; image?: string; content?: string; created_at?: string; updated_at?: string; scheduled_date?: string }
  const [devotionals, setDevotionals] = useState<Devotional[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);


  // Helper to fetch devotionals from Supabase
  const fetchDevotionals = () => {
    fetch('/api/devotionals/list?includeScheduled=true')
      .then(r => r.json())
      .then(data => {
        console.log('Fetched devotionals:', data);
        setDevotionals(Array.isArray(data.items) ? data.items : []);
      });
  };

  // Fetch devotionals list on auth
  useEffect(() => {
    if (!isAuthed) return;
    fetchDevotionals();
  }, [isAuthed]);

  // Load devotional for editing
  async function loadDevotional(id: string) {
    const d = devotionals.find((d) => d.id === id);
    if (!d) return;
    setTitle(d.title || '');
    setImage(d.image || '');
    setContent(d.content || '');
    setScheduledDate(d.scheduled_date ? new Date(d.scheduled_date).toISOString().slice(0, 16) : '');
    setEditingId(id);
    setMode('edit');
  }

  // Save: create or update
  async function save() {
    try {
      let uploadedUrl = '';
      if (imageFile) {
        uploadedUrl = await uploadFile(imageFile);
        if (uploadedUrl) {
          setImage(uploadedUrl);
          if (localPreview) { URL.revokeObjectURL(localPreview); setLocalPreview(''); }
          setImageFile(null);
        }
      }
      const finalImage = uploadedUrl || image || '';
      const scheduled = scheduledDate ? new Date(scheduledDate).toISOString() : new Date().toISOString();
      let res, j;
      if (editingId) {
        res = await fetch('/api/devotionals/update', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ id: editingId, title, image: finalImage, content, scheduled_date: scheduled }),
        });
        j = await res.json();
        if (res.ok) {
          setMessage('Updated');
          return true
        } else {
          setMessage(j.error || 'Update failed');
          return false
        }
      } else {
        res = await fetch('/api/devotionals/create', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ title, image: finalImage, content, scheduled_date: scheduled }),
        });
        j = await res.json();
        if (res.ok) {
          setMessage('Saved');
          setTitle('');
          setImage('');
          setContent('');
          setScheduledDate('');
          setImageFile(null);
          setLocalPreview('');
          setEditingId(null);
          // Refresh devotionals list from Supabase
          fetchDevotionals();
          return true
        } else {
          setMessage(j.error || 'Save failed');
          return false
        }
      }
    } catch {
      setMessage('Save failed');
      return false
    }
  }

  // Push to history on change
  useEffect(() => {
    if (history[historyIndex]?.title === title && history[historyIndex]?.content === content && history[historyIndex]?.image === image) return
    const newEntry = { title, content, image }
    const newHistory = history.slice(0, historyIndex + 1).concat([newEntry])
    setHistory(newHistory)
    setHistoryIndex(newHistory.length - 1)
  }, [title, content, image])

    function undo() {
      if (historyIndex > 0) {
        const prev = history[historyIndex - 1]
        setTitle(prev.title)
        setContent(prev.content)
        setImage(prev.image)
        setHistoryIndex(historyIndex - 1)
      }
    }
    function redo() {
      if (historyIndex < history.length - 1) {
        const next = history[historyIndex + 1]
        setTitle(next.title)
        setContent(next.content)
        setImage(next.image)
        setHistoryIndex(historyIndex + 1)
      }
    }

    // Keyboard shortcuts for undo/redo
    useEffect(() => {
      function handler(e: KeyboardEvent) {
        if (e.ctrlKey && !e.shiftKey && e.key === 'z') { e.preventDefault(); undo() }
        if ((e.ctrlKey && e.key === 'y') || (e.ctrlKey && e.shiftKey && e.key === 'z')) { e.preventDefault(); redo() }
      }
      window.addEventListener('keydown', handler)
      return () => window.removeEventListener('keydown', handler)
    }, [historyIndex, history])
  // ...existing code...

  // Restore from localStorage on mount
  useEffect(() => {
    if (typeof window === 'undefined') return
    const saved = localStorage.getItem('devotional_draft')
    if (saved) {
      try {
        const d = JSON.parse(saved)
        if (d.title) setTitle(d.title)
        if (d.content) setContent(d.content)
        if (d.image) setImage(d.image)
        if (d.scheduledDate) setScheduledDate(d.scheduledDate)
      } catch {}
    }
  }, [])

  // Autosave to localStorage
  useEffect(() => {
    if (typeof window === 'undefined') return
    const data = { title, content, image, scheduledDate }
    localStorage.setItem('devotional_draft', JSON.stringify(data))
  }, [title, content, image])
  useEffect(() => {
    if (mode === 'preview') {
      try {
        const html = simpleMarkdownToHtml(content || '')
        // eslint-disable-next-line no-console
        console.log('Devotionals preview — raw:', content)
        // eslint-disable-next-line no-console
        console.log('Devotionals preview — rendered HTML:', html)
      } catch (err) {
        // eslint-disable-next-line no-console
        console.error('Markdown render error', err)
      }
    }
  }, [mode, content])

  useEffect(() => {
    if (typeof document !== 'undefined' && document.cookie.includes('dev_auth=1')) setIsAuthed(true)
  }, [])

  async function login(e: React.FormEvent) {
    e.preventDefault()
    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      })
      if (res.ok) {
        setIsAuthed(true)
        setMessage('')
      } else {
        const next = attempts + 1
        setAttempts(next)
        const msgs = [
          'Is that you, Jezebel?',
          'Depart, tempter!',
          'Who walks in darkness?',
          'Do you mistake this for the wilderness?',
          'By what test do you come?',
          'Repent, wanderer!',
          'Is this a trial from the adversary?'
        ]
        let msg = msgs[Math.floor(Math.random() * msgs.length)]
        if (next >= 3) msg = 'The Lord sees your heart — cease these false keys.'
        if (next >= 6) msg = 'This is a reckoning; return with truth.'
        setMessage(msg)
      }
    } catch {
      setMessage('Login failed')
    }
  }

  // Note: `save` and `uploadFile` are implemented earlier in the file (single definitions).
  // The legacy duplicate definitions were removed to avoid redeclaration and lint errors.
  async function uploadFile(file?: File) {
    // legacy immediate upload helper (returns url or empty string)
    if (!file) return ''
    try {
      const fd = new FormData()
      fd.append('file', file)
      const r = await fetch('/api/devotionals/upload', { method: 'POST', body: fd })
      const j = await r.json()
      if (r.ok && j.url) {
        setMessage('Image uploaded')
        return j.url
      } else {
        setMessage(j.error || 'Upload failed')
        return ''
      }
    } catch (error: unknown) {
      const msg = error instanceof Error ? error.message : String(error)
      setMessage(msg || 'Upload error')
      return ''
    }
  }

  function handleSelectFile(file?: File) {
    if (!file) return
    setImageFile(file)
    try {
      const url = URL.createObjectURL(file)
      setLocalPreview(url)
    } catch {
      setLocalPreview('')
    }
    setMessage('Cover selected — will upload on publish')
  }

  if (!isAuthed) {
    return (
      <div className="max-w-md mx-auto p-6 mt-24">
        <h1 className="text-3xl font-anton text-tlcc-navy mb-6 uppercase">Admin sign in</h1>
        <form onSubmit={login} className="space-y-6 bg-white rounded-xl shadow p-8">
          <div>
            <label htmlFor="admin-password" className="block text-sm font-medium text-gray-700 mb-2">Admin Password</label>
            <input
              id="admin-password"
              type="password"
              placeholder="Admin password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="block w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="flex gap-2">
            <button type="submit" className="flex-1 bg-tlcc-navy text-white py-3 rounded-lg font-bold text-lg uppercase tracking-wider hover:bg-tlcc-gold transition-all duration-300">Sign in</button>
          </div>
          {message && <p className="text-sm text-red-600">{message}</p>}
        </form>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto p-6 mt-24">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-lg font-medium text-gray-700">Create/Edit Devotional</h1>
        <div className="flex items-center gap-3">
          <button onClick={() => setMode('edit')} className={`px-3 py-1 rounded text-sm ${mode === 'edit' ? 'bg-gray-900 text-white' : 'bg-gray-200 text-gray-800'}`}>Edit</button>
          <button onClick={() => setMode('preview')} className={`px-3 py-1 rounded text-sm ${mode === 'preview' ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-800'}`}>Preview</button>
        </div>
      </div>

      {/* Writing/editor area comes first */}
      <div className="space-y-6">
        {/* Cover area: shown only in edit mode (hidden in preview) */}
        {mode === 'edit' && (
          <div className="bg-gray-900 text-gray-100 rounded-lg overflow-hidden min-h-[18rem]">
          <input ref={fileInputRef} type="file" accept="image/*" className="hidden" title="Upload cover image" onChange={(e) => {
            const f = e.target.files?.[0]
            if (f) handleSelectFile(f)
          }} />

          <div className="p-4 flex justify-end">
            <button type="button" onClick={() => fileInputRef.current?.click()} className="bg-gray-700 text-white px-3 py-1 rounded">Upload cover</button>
          </div>

          <div className="px-6 pb-6">
            {(localPreview || image) ? (
              <div className="relative w-full h-[50vh] mb-4 rounded overflow-hidden">
                {/* remove button */}
                <button
                  type="button"
                  onClick={() => { setImage(''); setImageFile(null); if (localPreview) { URL.revokeObjectURL(localPreview); setLocalPreview('') } }}
                  className="absolute right-4 top-4 z-20 bg-black bg-opacity-60 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-opacity-80"
                  aria-label="Remove cover"
                >
                  ×
                </button>
                {/* full image, not cropped */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={localPreview || image} alt="Cover" className="absolute inset-0 w-full h-full object-cover" />
              </div>
            ) : (
              <div className="w-full flex items-center justify-center py-12 text-gray-400">No cover image — use Upload cover</div>
            )}

            <div>
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="New post title here..."
                className="w-full bg-transparent text-4xl md:text-5xl font-extrabold placeholder-gray-400 outline-none text-white"
              />
            </div>
            <div className="mt-2 text-sm text-gray-300">Written on {new Date().toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}</div>
            <div className="mt-4">
              <label htmlFor="scheduled-date" className="block text-sm font-medium text-gray-300 mb-2">Schedule Publication</label>
              <input
                id="scheduled-date"
                type="datetime-local"
                value={scheduledDate}
                onChange={(e) => setScheduledDate(e.target.value)}
                className="bg-gray-800 text-white border border-gray-600 rounded px-3 py-2 w-full md:w-auto"
              />
              <p className="text-xs text-gray-400 mt-1">Leave empty to publish immediately</p>
            </div>
          </div>
          </div>
        )}

        {/* toolbar area */}
        <div className="bg-black bg-opacity-5 rounded-md p-3">
            {mode === 'edit' ? (
              <ClientOnlyEditor content={content} setContent={setContent} onImageUpload={(url) => { setImage(url); setMessage('Image set as cover from editor') }} />
            ) : (
              <div className="bg-white text-tlcc-navy rounded-md p-8 min-h-[70vh] editor-preview">
                {/* Light preview: large title, spacious layout, dark text */}
                {(localPreview || image) && (
                  <div className="relative w-full h-[50vh] mb-6 rounded overflow-hidden">
                    <img src={localPreview || image} alt="Cover" className="absolute inset-0 w-full h-full object-cover" />
                  </div>
                )}
                {title.trim() !== '' && (
                  <h1 className="mb-6 text-6xl md:text-7xl leading-tight font-anton">{title}</h1>
                )}
                <div className="text-lg text-gray-800 max-w-none">
                  <div className="prose prose-xl prose-tlcc max-w-none" dangerouslySetInnerHTML={{ __html: simpleMarkdownToHtml(content || '') }} />
                </div>
              </div>
            )}
        </div>

        <div className="flex items-center gap-3">
          <button onClick={async () => {
            const ok = await save()
            if (ok) {
              setToastText('Devotional published')
              setShowPublishToast(true)
              setTimeout(() => setShowPublishToast(false), 2300)
            }
          }} className="bg-tlcc-gold text-tlcc-navy font-bold px-4 py-2 rounded shadow hover:bg-yellow-400 transition">Publish</button>
          <button onClick={() => {
            localStorage.setItem('devotional_draft', JSON.stringify({ title, content, image }))
            setMessage('Draft saved!')
          }} className="px-4 py-2 rounded border">Save draft</button>
          <button onClick={async () => { await fetch('/api/admin/logout', { method: 'POST' }); setIsAuthed(false); setPassword('') }} className="ml-auto px-3 py-2 rounded bg-gray-200">Sign out</button>
        </div>

        <div className="flex gap-2 mt-2">
          <button type="button" onClick={undo} className="px-2 py-1 rounded bg-gray-200 text-xs">Undo</button>
          <button type="button" onClick={redo} className="px-2 py-1 rounded bg-gray-200 text-xs">Redo</button>
        </div>
        {message && <p className="text-sm text-green-600">{message}</p>}
      </div>

      <PublishToast show={showPublishToast} message={toastText} />

      {/* Past Devotionals section is always below the writing/editor area */}
      <div className="mt-12">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-tlcc-navy">Past Devotionals</h2>
          <button onClick={fetchDevotionals} className="text-xs px-3 py-1 rounded bg-tlcc-gold text-tlcc-navy font-semibold shadow hover:bg-yellow-400 transition">Refresh</button>
        </div>
        <div className="overflow-x-auto rounded-xl shadow-lg bg-white">
          <table className="min-w-full text-sm rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-tlcc-navy text-white sticky top-0 z-10">
                <th className="px-4 py-2 text-left font-bold">Title</th>
                <th className="px-4 py-2 text-left font-bold">Scheduled</th>
                <th className="px-4 py-2 text-left font-bold">Status</th>
                <th className="px-4 py-2 text-left font-bold">Edit</th>
              </tr>
            </thead>
            <tbody>
              {devotionals.length === 0 && (
                <tr>
                  <td colSpan={4} className="text-center py-8 text-gray-400">No devotionals found.</td>
                </tr>
              )}
              {devotionals.map((d, i) => {
                const scheduledDate = d.scheduled_date ? new Date(d.scheduled_date) : null;
                const isPublished = scheduledDate ? scheduledDate <= new Date() : true;
                return (
                  <tr
                    key={d.id}
                    className={
                      `transition-colors ${editingId === d.id ? 'bg-tlcc-gold/20' : i % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-tlcc-gold/10`
                    }
                  >
                    <td className="px-4 py-2 font-semibold text-tlcc-navy">{d.title}</td>
                    <td className="px-4 py-2 text-gray-600">
                      {scheduledDate ? scheduledDate.toLocaleString(undefined, {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                      }) : 'Not scheduled'}
                    </td>
                    <td className="px-4 py-2">
                      {isPublished ? (
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800">Published</span>
                      ) : (
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold bg-yellow-100 text-yellow-800">Scheduled</span>
                      )}
                    </td>
                    <td className="px-4 py-2">
                      <button
                        onClick={() => loadDevotional(d.id)}
                        className="text-tlcc-navy underline text-xs font-bold hover:text-tlcc-gold transition"
                      >
                        Edit
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

// Default export for Next.js app directory
export default function DevotionalsPage() {
  return <AdminApp />;
}
